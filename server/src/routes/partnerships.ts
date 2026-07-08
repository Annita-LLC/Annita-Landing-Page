// ============================================================================
// ANNITA LANDING PAGE SERVER - PARTNERSHIPS API
// ============================================================================
// Fortune 500 / Pentagon Grade Partnership Submission Endpoint
// ============================================================================

import { Router } from 'express';
import type { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { logger } from '../lib/logger.js';
import { z } from 'zod';
import { appendToSheet } from '../lib/google-sheets.js';
import { sendPartnershipConfirmation, sendPartnershipAdminNotice } from '../lib/email.js';

const router = Router();

// Validation schema for partnership submission
const partnershipSchema = z.object({
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  contactName: z.string().min(2, 'Contact name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  partnershipType: z.enum(['technology', 'distribution', 'investment', 'other']),
  companyDescription: z.string().min(10, 'Company description must be at least 10 characters'),
  partnershipGoals: z.string().min(10, 'Partnership goals must be at least 10 characters'),
  mouDocumentUrl: z.string().url('Invalid MOU document URL').optional().or(z.literal('')),
  proposedTerms: z.string().optional(),
  additionalNotes: z.string().optional(),
  website_url: z.string().optional(),
});

// POST /api/partnerships/submit - Submit partnership inquiry
router.post('/submit', async (req: Request, res: Response) => {
  const requestId = req.id;
  
  try {
    const startTime = Date.now();
    logger.info('Partnership submission received', { requestId });

    // Validate input
    const validatedData = partnershipSchema.parse(req.body);

    // Check for honeypot field (bot detection)
    if (validatedData.website_url && validatedData.website_url.length > 0) {
      logger.warn('Bot detected via honeypot field', { requestId, email: validatedData.email });
      res.status(400).json({
        success: false,
        message: 'Invalid request',
      });
      return;
    }

    // Create partnership submission
    const partnership = await prisma.partnershipSubmission.create({
      data: {
        companyName: validatedData.companyName,
        contactName: validatedData.contactName,
        email: validatedData.email,
        phone: validatedData.phone || undefined,
        partnershipType: validatedData.partnershipType,
        companyDescription: validatedData.companyDescription,
        partnershipGoals: validatedData.partnershipGoals,
        mouDocumentUrl: validatedData.mouDocumentUrl || undefined,
        proposedTerms: validatedData.proposedTerms || undefined,
        additionalNotes: validatedData.additionalNotes || undefined,
        ipAddress: req.ip || undefined,
        userAgent: req.get('user-agent') || undefined,
      },
    });

    // Sync to Google Sheets (fire-and-forget)
    appendToSheet('Partnership Submissions', [
      partnership.createdAt.toISOString(),
      partnership.id,
      partnership.companyName,
      partnership.contactName,
      partnership.email,
      partnership.phone || '',
      partnership.partnershipType,
      partnership.status,
      partnership.ipAddress || '',
      partnership.userAgent || '',
    ]).catch(err => {
      logger.error('Failed to trigger Google Sheets append for Partnership Submission', {
        requestId,
        error: err instanceof Error ? err.message : String(err),
      });
    });

    const latency = Date.now() - startTime;
    logger.info('Partnership submission created successfully', {
      requestId,
      partnershipId: partnership.id,
      email: partnership.email,
      companyName: partnership.companyName,
      partnershipType: partnership.partnershipType,
      latency: `${latency}ms`,
      endpoint: 'POST:/api/partnerships/submit',
    });

    // Send email notifications
    try {
      // Send confirmation to submitter
      await sendPartnershipConfirmation({
        contactName: validatedData.contactName,
        email: validatedData.email,
        companyName: validatedData.companyName,
        partnershipType: validatedData.partnershipType
      });
      logger.info('Partnership confirmation email sent to submitter successfully', { requestId, partnershipId: partnership.id });

      // Send admin notification
      await sendPartnershipAdminNotice({
        contactName: validatedData.contactName,
        email: validatedData.email,
        companyName: validatedData.companyName,
        partnershipType: validatedData.partnershipType,
        partnershipGoals: validatedData.partnershipGoals
      });
      logger.info('Partnership admin notification sent successfully', { requestId, partnershipId: partnership.id });
    } catch (emailError) {
      logger.error('Failed to send partnership emails', {
        requestId,
        partnershipId: partnership.id,
        error: emailError instanceof Error ? emailError.message : 'Unknown error',
      });
      // Don't fail the request if email fails - data is saved
    }

    res.status(201).json({
      success: true,
      message: 'Partnership inquiry submitted successfully. Our team will review your submission and get back to you.',
      data: {
        id: partnership.id,
        status: partnership.status,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn('Partnership submission validation failed', {
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

    logger.error('Partnership submission error', {
      requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(500).json({
      success: false,
      message: 'Failed to process partnership submission',
    });
  }
});

export default router;
