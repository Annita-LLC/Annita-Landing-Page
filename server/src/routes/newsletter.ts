// ============================================================================
// ANNITA LANDING PAGE SERVER - NEWSLETTER SUBSCRIPTION API
// ============================================================================
// Fortune 500 / Pentagon Grade Newsletter Subscription Endpoint
// ============================================================================

import { Router } from 'express';
import type { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { logger } from '../lib/logger.js';
import { z } from 'zod';
import { sendNewsletterConfirmation, sendNewsletterAdminNotice } from '../lib/email.js';
import { appendToSheet } from '../lib/google-sheets.js';

const router = Router();

// Validation schema
const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

// POST /api/newsletter
router.post('/', async (req: Request, res: Response) => {
  const requestId = req.id;
  
  try {
    const startTime = Date.now();
    logger.info('Newsletter subscription received', { requestId });

    // Validate input
    const validatedData = newsletterSchema.parse(req.body);

    // Create or update newsletter subscription
    const subscription = await prisma.newsletterSubscription.upsert({
      where: { email: validatedData.email },
      update: { status: 'active' },
      create: {
        email: validatedData.email,
        status: 'active',
        ipAddress: req.ip || null,
        userAgent: req.get('user-agent') || null,
      },
    });

    // Sync to Google Sheets (fire-and-forget)
    appendToSheet('Newsletter', [
      subscription.createdAt.toISOString(),
      subscription.id,
      subscription.email,
      subscription.status,
      subscription.ipAddress || '',
      subscription.userAgent || '',
    ]).catch(err => {
      logger.error('Failed to trigger Google Sheets append for Newsletter Subscription', {
        requestId,
        error: err instanceof Error ? err.message : String(err),
      });
    });

    const latency = Date.now() - startTime;
    logger.info('Newsletter subscription successful', {
      requestId,
      subscriptionId: subscription.id,
      email: subscription.email,
      latency: `${latency}ms`,
      endpoint: 'POST:/api/newsletter',
    });

    // Send confirmation email
    try {
      await sendNewsletterConfirmation(validatedData.email);
      logger.info('Newsletter confirmation email sent successfully', { requestId, email: validatedData.email });

      // Send admin notification
      await sendNewsletterAdminNotice(validatedData.email);
      logger.info('Newsletter admin notification sent successfully', { requestId, email: validatedData.email });
    } catch (emailError) {
      logger.error('Failed to send newsletter emails', {
        requestId,
        email: validatedData.email,
        error: emailError instanceof Error ? emailError.message : 'Unknown error',
      });
      // Don't fail the request if email fails - data is saved
    }

    res.status(201).json({
      success: true,
      message: 'Newsletter subscription successful',
      data: {
        id: subscription.id,
        status: subscription.status,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn('Newsletter subscription validation failed', {
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

    logger.error('Newsletter subscription error', {
      requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(500).json({
      success: false,
      message: 'Failed to process newsletter subscription',
    });
  }
});

export default router;
