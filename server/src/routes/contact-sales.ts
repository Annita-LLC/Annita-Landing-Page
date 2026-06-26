// ============================================================================
// ANNITA LANDING PAGE SERVER - CONTACT SALES FORM API
// ============================================================================
// Fortune 500 / Pentagon Grade Sales Inquiry Endpoint
// ============================================================================

import { Router } from 'express';
import type { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { logger } from '../lib/logger.js';
import { z } from 'zod';
import { sendSalesInquiryEmail, sendSalesInquiryConfirmation } from '../lib/email.js';

const router = Router();

// Validation schema
const contactSalesSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  projectDescription: z.string().min(10, 'Project description must be at least 10 characters'),
  budget: z.string().min(1, 'Budget is required'),
});

// POST /api/contact-sales
router.post('/', async (req: Request, res: Response) => {
  const requestId = req.id;
  
  try {
    const startTime = Date.now();
    logger.info('Contact sales form submission received', { requestId });

    // Validate input
    const validatedData = contactSalesSchema.parse(req.body);

    // Create contact sales submission
    const submission = await prisma.contactSalesSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        companyName: validatedData.companyName,
        projectDescription: validatedData.projectDescription,
        budget: validatedData.budget,
        ipAddress: req.ip || null,
        userAgent: req.get('user-agent') || null,
      },
    });

    const latency = Date.now() - startTime;
    logger.info('Contact sales submission created successfully', {
      requestId,
      submissionId: submission.id,
      latency: `${latency}ms`,
      endpoint: 'POST:/api/contact-sales',
    });

    // Send email notifications
    try {
      // Send to admin
      await sendSalesInquiryEmail({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.companyName,
        message: validatedData.projectDescription,
      });
      logger.info('Sales inquiry email sent to admin successfully', { requestId, submissionId: submission.id });

      // Send confirmation to client
      await sendSalesInquiryConfirmation({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.companyName,
      });
      logger.info('Sales inquiry confirmation email sent to client successfully', { requestId, submissionId: submission.id });
    } catch (emailError) {
      logger.error('Failed to send sales inquiry emails', {
        requestId,
        submissionId: submission.id,
        error: emailError instanceof Error ? emailError.message : 'Unknown error',
      });
      // Don't fail the request if email fails - data is saved
    }

    res.status(201).json({
      success: true,
      message: 'Sales inquiry received successfully',
      data: {
        id: submission.id,
        status: submission.status,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn('Contact sales form validation failed', {
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

    logger.error('Contact sales submission error', {
      requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(500).json({
      success: false,
      message: 'Failed to process sales inquiry',
    });
  }
});

export default router;
