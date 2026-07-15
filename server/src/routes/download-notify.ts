// ============================================================================
// ANNITA LANDING PAGE SERVER - DOWNLOAD NOTIFICATION API
// ============================================================================
// AnnitaPlug app launch notification signup endpoint
// ============================================================================

import { Router } from 'express';
import type { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { logger } from '../lib/logger.js';
import { z } from 'zod';
import { sendDownloadNotifyConfirmation, sendDownloadNotifyAdminNotice } from '../lib/email.js';
import { appendToSheet } from '../lib/google-sheets.js';

const router = Router();

// Validation schema
const downloadNotifySchema = z.object({
  email: z.string().email('Invalid email address'),
  website_url: z.string().optional(),
});

// POST /api/download-notify
router.post('/', async (req: Request, res: Response) => {
  const requestId = req.id;

  try {
    const startTime = Date.now();
    logger.info('Download notification signup received', { requestId });

    // Validate input
    const validatedData = downloadNotifySchema.parse(req.body);

    // Create or update download notification subscription
    const subscription = await prisma.downloadNotification.upsert({
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
    appendToSheet('DownloadNotifications', [
      subscription.createdAt.toISOString(),
      subscription.id,
      subscription.email,
      subscription.status,
      subscription.ipAddress || '',
      subscription.userAgent || '',
    ]).catch(err => {
      logger.error('Failed to trigger Google Sheets append for Download Notification', {
        requestId,
        error: err instanceof Error ? err.message : String(err),
      });
    });

    const latency = Date.now() - startTime;
    logger.info('Download notification signup successful', {
      requestId,
      subscriptionId: subscription.id,
      email: subscription.email,
      latency: `${latency}ms`,
      endpoint: 'POST:/api/download-notify',
    });

    // Send confirmation email
    try {
      await sendDownloadNotifyConfirmation(validatedData.email);
      logger.info('Download notification confirmation email sent successfully', { requestId, email: validatedData.email });

      // Send admin notification
      await sendDownloadNotifyAdminNotice(validatedData.email);
      logger.info('Download notification admin notice sent successfully', { requestId, email: validatedData.email });
    } catch (emailError) {
      logger.error('Failed to send download notification emails', {
        requestId,
        email: validatedData.email,
        error: emailError instanceof Error ? emailError.message : 'Unknown error',
      });
    }

    res.status(201).json({
      success: true,
      message: 'You\'re on the list! We\'ll notify you when AnnitaPlug launches.',
      data: {
        id: subscription.id,
        status: subscription.status,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn('Download notification validation failed', {
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

    logger.error('Download notification error', {
      requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(500).json({
      success: false,
      message: 'Failed to process notification signup',
    });
  }
});

export default router;
