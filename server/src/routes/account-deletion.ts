// ============================================================================
// ANNITA LANDING PAGE SERVER - ACCOUNT DELETION API
// ============================================================================
// Fortune 500 / Pentagon Grade Account Deletion Endpoint
// ============================================================================

import { Router } from 'express';
import type { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { logger } from '../lib/logger.js';
import { z } from 'zod';
import { appendToSheet } from '../lib/google-sheets.js';
import { sendAccountDeletionVerification, sendAccountDeletionConfirmation, sendAccountDeletionAdminNotice } from '../lib/email.js';
import { strictRateLimit } from '../middleware/security-enhanced.js';
import crypto from 'crypto';

const router = Router();

// Simple HTML escape helper for verification pages
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Validation schema
const accountDeletionSchema = z.object({
  email: z.string().email('Invalid email address'),
  softwareProduct: z.enum(['annita-ecosystem', 'annita-pay', 'annita-pulse', 'ezri', 'aiim-hub']),
  reason: z.string().min(10, 'Reason must be at least 10 characters'),
  communicationChannel: z.enum(['email', 'phone', 'in-app']),
  alternativeContact: z.string().optional(),
  website_url: z.string().optional(),
});

// POST /api/account-deletion/request
// Strict rate limit (10/min per real client IP) defends against an attacker
// submitting deletion requests for arbitrary victim emails. Now requires
// email verification before the request is actually created, preventing
// abuse of the deletion flow. `req.ip` is sourced from X-Forwarded-For
// because `app.set('trust proxy', 1)` is set in index.ts before this runs.
router.post('/request', strictRateLimit, async (req: Request, res: Response) => {
  const requestId = req.id;
  
  try {
    const startTime = Date.now();
    logger.info('Account deletion request received', { requestId });

    // Validate input
    const validatedData = accountDeletionSchema.parse(req.body);

    // Check for honeypot field (bot detection)
    if (validatedData.website_url && validatedData.website_url.length > 0) {
      logger.warn('Bot detected via honeypot field', { requestId, emailDomain: validatedData.email.split('@')[1] || 'unknown' });
      res.status(400).json({
        success: false,
        message: 'Invalid request',
      });
      return;
    }

    // Verify email ownership / data existence before proceeding
    // This prevents using our system to send unsolicited verification/spam emails to arbitrary addresses
    const [
      contactCount,
      salesCount,
      solutionsCount,
      newsletterCount,
      betaCount,
      careerCount,
      partnershipCount
    ] = await Promise.all([
      prisma.contactSubmission.count({ where: { email: validatedData.email } }),
      prisma.contactSalesSubmission.count({ where: { email: validatedData.email } }),
      prisma.solutionsRequest.count({ where: { email: validatedData.email } }),
      prisma.newsletterSubscription.count({ where: { email: validatedData.email } }),
      prisma.betaSignup.count({ where: { email: validatedData.email } }),
      prisma.careerApplication.count({ where: { email: validatedData.email } }),
      prisma.partnershipSubmission.count({ where: { email: validatedData.email } }),
    ]);

    const hasAssociatedData = (
      contactCount > 0 ||
      salesCount > 0 ||
      solutionsCount > 0 ||
      newsletterCount > 0 ||
      betaCount > 0 ||
      careerCount > 0 ||
      partnershipCount > 0
    );

    if (!hasAssociatedData) {
      logger.warn('Account deletion requested for email with no records', {
        requestId,
        emailDomain: validatedData.email.split('@')[1] || 'unknown'
      });
      res.status(404).json({
        success: false,
        message: 'No records found associated with this email address.',
      });
      return;
    }

    // Check for existing pending_verification or pending requests for this email + product
    // This prevents spamming the same email with multiple verification emails
    const existingRequest = await prisma.accountDeletionRequest.findFirst({
      where: {
        email: validatedData.email,
        softwareProduct: validatedData.softwareProduct,
        status: { in: ['pending_verification', 'pending', 'processing'] },
        createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }, // Within last 24 hours
      },
    });

    if (existingRequest) {
      logger.warn('Duplicate deletion request attempted within 24h', {
        requestId,
        emailDomain: validatedData.email.split('@')[1] || 'unknown',
        softwareProduct: validatedData.softwareProduct,
      });
      res.status(400).json({
        success: false,
        message: 'A deletion request for this account is already pending. Please check your email for the verification link.',
      });
      return;
    }

    // Generate cryptographically random verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');

    // Create deletion request in pending_verification status
    const deletionRequest = await prisma.accountDeletionRequest.create({
      data: {
        email: validatedData.email,
        softwareProduct: validatedData.softwareProduct,
        reason: validatedData.reason,
        communicationChannel: validatedData.communicationChannel,
        alternativeContact: validatedData.alternativeContact || null,
        verificationToken,
        status: 'pending_verification',
        ipAddress: req.ip || null,
        userAgent: req.get('user-agent') || null,
      },
    });

    const latency = Date.now() - startTime;
    logger.info('Account deletion request created (pending verification)', {
      requestId,
      deletionId: deletionRequest.id,
      emailDomain: deletionRequest.email.split('@')[1] || 'unknown',
      softwareProduct: deletionRequest.softwareProduct,
      latency: `${latency}ms`,
      endpoint: 'POST:/api/account-deletion/request',
    });

    // Send verification email
    try {
      await sendAccountDeletionVerification({
        email: deletionRequest.email,
        softwareProduct: deletionRequest.softwareProduct,
        verificationToken,
      });
      logger.info('Account deletion verification email sent successfully', { requestId, deletionId: deletionRequest.id });
    } catch (emailError) {
      logger.error('Failed to send account deletion verification email', {
        requestId,
        deletionId: deletionRequest.id,
        error: emailError instanceof Error ? emailError.message : 'Unknown error',
      });
      // If email fails, delete the request since verification is required
      await prisma.accountDeletionRequest.delete({ where: { id: deletionRequest.id } });
      res.status(500).json({
        success: false,
        message: 'Failed to send verification email. Please try again later.',
      });
      return;
    }

    res.status(201).json({
      success: true,
      message: 'Verification email sent. Please check your email to confirm the deletion request.',
      data: {
        id: deletionRequest.id,
        status: deletionRequest.status,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn('Account deletion request validation failed', {
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

    logger.error('Account deletion request error', {
      requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(500).json({
      success: false,
      message: 'Failed to process account deletion request',
    });
  }
});

// GET /api/account-deletion/verify/:token
// Verifies the deletion request via email link. Only requests in
// pending_verification status and within 24 hours can be verified.
router.get('/verify/:token', async (req: Request, res: Response) => {
  const requestId = req.id;
  const { token } = req.params;
  
  try {
    const startTime = Date.now();
    logger.info('Account deletion verification attempt', { requestId });

    // Handle token from params (can be string or string array)
    const verificationToken = Array.isArray(token) ? token[0] : token;

    // Find the request with this token
    const deletionRequest = await prisma.accountDeletionRequest.findUnique({
      where: { verificationToken },
    });

    if (!deletionRequest) {
      logger.warn('Invalid verification token', { requestId });
      // Return HTML page for better UX
      res.status(400).send(`
        <!DOCTYPE html>
        <html>
        <head><title>Verification Failed</title></head>
        <body style="font-family: sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
          <h1 style="color: #EF4444;">Verification Failed</h1>
          <p>This verification link is invalid or has expired.</p>
          <p>Please submit a new deletion request if you still wish to delete your account.</p>
          <a href="https://an-nita.com/privacy">Return to Privacy Page</a>
        </body>
        </html>
      `);
      return;
    }

    // Check if already verified
    if (deletionRequest.status !== 'pending_verification') {
      logger.warn('Request already verified or processed', { requestId, deletionId: deletionRequest.id, status: deletionRequest.status });
      res.status(400).send(`
        <!DOCTYPE html>
        <html>
        <head><title>Already Verified</title></head>
        <body style="font-family: sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
          <h1>Already Verified</h1>
          <p>This deletion request has already been verified.</p>
          <p>Status: <strong>${escapeHtml(deletionRequest.status)}</strong></p>
          <a href="https://an-nita.com/privacy">Return to Privacy Page</a>
        </body>
        </html>
      `);
      return;
    }

    // Check if expired (24 hours)
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    if (deletionRequest.createdAt < twentyFourHoursAgo) {
      logger.warn('Verification token expired', { requestId, deletionId: deletionRequest.id });
      // Delete expired request
      await prisma.accountDeletionRequest.delete({ where: { id: deletionRequest.id } });
      res.status(400).send(`
        <!DOCTYPE html>
        <html>
        <head><title>Link Expired</title></head>
        <body style="font-family: sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
          <h1 style="color: #EF4444;">Link Expired</h1>
          <p>This verification link has expired (24-hour limit).</p>
          <p>Please submit a new deletion request if you still wish to delete your account.</p>
          <a href="https://an-nita.com/privacy">Return to Privacy Page</a>
        </body>
        </html>
      `);
      return;
    }

    // Update request to pending status and mark as verified
    const updatedRequest = await prisma.accountDeletionRequest.update({
      where: { id: deletionRequest.id },
      data: {
        status: 'pending',
        verifiedAt: new Date(),
        verificationToken: null, // Clear token after use
      },
    });

    // Sync to Google Sheets (fire-and-forget)
    appendToSheet('Account Deletion Requests', [
      updatedRequest.createdAt.toISOString(),
      updatedRequest.id,
      updatedRequest.email,
      updatedRequest.softwareProduct,
      updatedRequest.reason,
      updatedRequest.communicationChannel,
      updatedRequest.alternativeContact || '',
      updatedRequest.status,
      updatedRequest.ipAddress || '',
      updatedRequest.userAgent || '',
    ]).catch(err => {
      logger.error('Failed to trigger Google Sheets append for Account Deletion Request', {
        requestId,
        error: err instanceof Error ? err.message : String(err),
      });
    });

    const latency = Date.now() - startTime;
    logger.info('Account deletion verified successfully', {
      requestId,
      deletionId: updatedRequest.id,
      emailDomain: updatedRequest.email.split('@')[1] || 'unknown',
      softwareProduct: updatedRequest.softwareProduct,
      latency: `${latency}ms`,
      endpoint: 'GET:/api/account-deletion/verify/:token',
    });

    // Send confirmation emails
    try {
      // Send confirmation to user
      await sendAccountDeletionConfirmation({
        email: updatedRequest.email,
        softwareProduct: updatedRequest.softwareProduct,
        requestId: updatedRequest.id,
      });
      logger.info('Account deletion confirmation email sent to user successfully', { requestId, deletionId: updatedRequest.id });

      // Send admin notification
      await sendAccountDeletionAdminNotice({
        email: updatedRequest.email,
        softwareProduct: updatedRequest.softwareProduct,
        reason: updatedRequest.reason,
        communicationChannel: updatedRequest.communicationChannel,
        requestId: updatedRequest.id,
      });
      logger.info('Account deletion admin notification sent successfully', { requestId, deletionId: updatedRequest.id });
    } catch (emailError) {
      logger.error('Failed to send account deletion emails after verification', {
        requestId,
        deletionId: updatedRequest.id,
        error: emailError instanceof Error ? emailError.message : 'Unknown error',
      });
      // Don't fail the verification if email fails - request is already verified
    }

    // Return success HTML page
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
      <head><title>Verification Successful</title></head>
      <body style="font-family: sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
        <h1 style="color: #00C28A;">Verification Successful</h1>
        <p>Your account deletion request has been verified and submitted for processing.</p>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Request ID:</strong> #${updatedRequest.id}</p>
          <p><strong>Email:</strong> ${escapeHtml(updatedRequest.email)}</p>
          <p><strong>Product:</strong> ${escapeHtml(updatedRequest.softwareProduct)}</p>
        </div>
        <p>Your request will be processed within 30 days. You will receive a confirmation email when deletion is complete.</p>
        <a href="https://an-nita.com/privacy">Return to Privacy Page</a>
      </body>
      </html>
    `);
  } catch (error) {
    logger.error('Account deletion verification error', {
      requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(500).send(`
      <!DOCTYPE html>
      <html>
      <head><title>Verification Error</title></head>
      <body style="font-family: sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
        <h1 style="color: #EF4444;">Verification Error</h1>
        <p>An error occurred during verification. Please try again later.</p>
        <a href="https://an-nita.com/privacy">Return to Privacy Page</a>
      </body>
      </html>
    `);
  }
});

// GET /api/account-deletion/status/:id
router.get('/status/:id', async (req: Request, res: Response) => {
  const requestId = req.id;
  const { id } = req.params;
  
  try {
    const startTime = Date.now();
    const idString = Array.isArray(id) ? id[0] : id;
    logger.info('Account deletion status check', { requestId, deletionId: idString });

    const deletionRequest = await prisma.accountDeletionRequest.findUnique({
      where: { id: parseInt(idString) },
    });

    if (!deletionRequest) {
      res.status(404).json({
        success: false,
        message: 'Deletion request not found',
      });
      return;
    }

    const latency = Date.now() - startTime;
    logger.info('Account deletion status retrieved successfully', {
      requestId,
      deletionId: idString,
      status: deletionRequest.status,
      latency: `${latency}ms`,
      endpoint: 'GET:/api/account-deletion/status/:id',
    });

    // Map internal status to user-friendly status
    const userFriendlyStatus = deletionRequest.status === 'pending_verification'
      ? 'awaiting_verification'
      : deletionRequest.status;

    res.status(200).json({
      success: true,
      data: {
        id: deletionRequest.id,
        status: userFriendlyStatus,
        processedAt: deletionRequest.processedAt,
        verifiedAt: deletionRequest.verifiedAt,
      },
    });
  } catch (error) {
    logger.error('Account deletion status check error', {
      requestId,
      deletionId: id,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(500).json({
      success: false,
      message: 'Failed to retrieve deletion request status',
    });
  }
});

export default router;
