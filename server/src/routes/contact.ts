// ============================================================================
// ANNITA LANDING PAGE SERVER - CONTACT FORM API
// ============================================================================
// Fortune 500 / Pentagon Grade Contact Submission Endpoint
// ============================================================================

import { Router } from 'express';
import type { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { logger } from '../lib/logger.js';
import { z } from 'zod';
import { sendContactFormEmail, sendContactFormConfirmation } from '../lib/email.js';
import { appendToSheet } from '../lib/google-sheets.js';

const router = Router();

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  subject: z.string().optional(),
});

// POST /api/contact
router.post('/', async (req: Request, res: Response) => {
  const requestId = req.id;
  
  try {
    const startTime = Date.now();
    logger.info('Contact form submission received', { requestId });

    // Validate input
    const validatedData = contactSchema.parse(req.body);

    // Create contact submission
    const submission = await prisma.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        message: validatedData.message,
        subject: validatedData.subject || null,
        ipAddress: req.ip || null,
        userAgent: req.get('user-agent') || null,
      },
    });

    // Sync to Google Sheets (fire-and-forget)
    appendToSheet('Contact', [
      submission.createdAt.toISOString(),
      submission.id,
      submission.name,
      submission.email,
      submission.phone || '',
      submission.subject || '',
      submission.message,
      submission.status,
      submission.ipAddress || '',
      submission.userAgent || '',
    ]).catch(err => {
      logger.error('Failed to trigger Google Sheets append for Contact Submission', {
        requestId,
        error: err instanceof Error ? err.message : String(err),
      });
    });

    const latency = Date.now() - startTime;
    logger.info('Contact submission created successfully', {
      requestId,
      submissionId: submission.id,
      latency: `${latency}ms`,
      endpoint: 'POST:/api/contact',
    });

    // Send email notifications
    try {
      // Send to admin
      await sendContactFormEmail({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        message: validatedData.message,
      });
      logger.info('Contact form email sent to admin successfully', { requestId, submissionId: submission.id });

      // Send confirmation to client
      await sendContactFormConfirmation({
        name: validatedData.name,
        email: validatedData.email,
      });
      logger.info('Contact form confirmation email sent to client successfully', { requestId, submissionId: submission.id });
    } catch (emailError) {
      logger.error('Failed to send contact form emails', {
        requestId,
        submissionId: submission.id,
        error: emailError instanceof Error ? emailError.message : 'Unknown error',
      });
      // Don't fail the request if email fails - data is saved
    }

    res.status(201).json({
      success: true,
      message: 'Contact submission received successfully',
      data: {
        id: submission.id,
        status: submission.status,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn('Contact form validation failed', {
        requestId,
        errors: error.issues,
      });
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.issues,
      });
      return;
    }

    logger.error('Contact submission error', {
      requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(500).json({
      success: false,
      message: 'Failed to process contact submission',
    });
  }
});

export default router;
