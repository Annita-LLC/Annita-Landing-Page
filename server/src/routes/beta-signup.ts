// ============================================================================
// ANNITA LANDING PAGE SERVER - BETA SIGNUP API
// ============================================================================
// Fortune 500 / Pentagon Grade Beta Signup Endpoint
// ============================================================================

import { Router } from 'express';
import type { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { logger } from '../lib/logger.js';
import { z } from 'zod';
import { appendToSheet } from '../lib/google-sheets.js';
import { sendBetaSignupConfirmation, sendBetaSignupAdminNotice } from '../lib/email.js';

const router = Router();

const MAX_SIGNUPS_PER_ROLE = 100;

// Validation schemas for each role
const baseSchema = z.object({
  role: z.enum(['buyer', 'seller', 'logistics']),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  country: z.string().min(2, 'Country must be at least 2 characters'),
  device: z.string().optional(),
});

const buyerSchema = baseSchema.extend({
  shopsFor: z.array(z.string()).optional(),
  payMethod: z.string().optional(),
  age: z.string().optional(),
});

const sellerSchema = baseSchema.extend({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  businessCategory: z.string().optional(),
  needs: z.array(z.string()).min(1, 'Select at least one need'),
  yearsInBusiness: z.string().optional(),
  justStarting: z.string().optional(),
});

const logisticsSchema = baseSchema.extend({
  companyName: z.string().min(2, 'Company/fleet name must be at least 2 characters'),
  serviceTypes: z.array(z.string()).min(1, 'Select at least one service type'),
  areasCovered: z.string().optional(),
  fleetSize: z.string().optional(),
  yearsLogistics: z.string().optional(),
  logisticsType: z.string().min(1, 'Please specify if you are an individual or company'),
  vehicleTypes: z.array(z.string()).min(1, 'Select at least one vehicle type'),
});

// GET /api/beta-signup/status - Check signup status for each role
router.get('/status', async (req: Request, res: Response) => {
  const requestId = req.id;
  
  try {
    const startTime = Date.now();
    logger.info('Beta signup status check', { requestId });

    // Count signups for each role
    const [buyerCount, sellerCount, logisticsCount] = await Promise.all([
      prisma.betaSignup.count({ where: { role: 'buyer' } }),
      prisma.betaSignup.count({ where: { role: 'seller' } }),
      prisma.betaSignup.count({ where: { role: 'logistics' } }),
    ]);

    const latency = Date.now() - startTime;
    logger.info('Beta signup status retrieved successfully', {
      requestId,
      latency: `${latency}ms`,
      endpoint: 'GET:/api/beta-signup/status',
    });

    res.status(200).json({
      success: true,
      data: {
        buyer: {
          count: buyerCount,
          remaining: MAX_SIGNUPS_PER_ROLE - buyerCount,
          isOpen: buyerCount < MAX_SIGNUPS_PER_ROLE,
        },
        seller: {
          count: sellerCount,
          remaining: MAX_SIGNUPS_PER_ROLE - sellerCount,
          isOpen: sellerCount < MAX_SIGNUPS_PER_ROLE,
        },
        logistics: {
          count: logisticsCount,
          remaining: MAX_SIGNUPS_PER_ROLE - logisticsCount,
          isOpen: logisticsCount < MAX_SIGNUPS_PER_ROLE,
        },
      },
    });
  } catch (error) {
    logger.error('Beta signup status check error', {
      requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(500).json({
      success: false,
      message: 'Failed to retrieve signup status',
    });
  }
});

// POST /api/beta-signup - Submit beta signup
router.post('/', async (req: Request, res: Response) => {
  const requestId = req.id;
  
  try {
    const startTime = Date.now();
    logger.info('Beta signup submission received', { requestId });

    const { role } = req.body;

    // Check if role is still open
    const roleCount = await prisma.betaSignup.count({ where: { role } });
    if (roleCount >= MAX_SIGNUPS_PER_ROLE) {
      logger.warn('Beta signup closed for role', { requestId, role, count: roleCount });
      res.status(400).json({
        success: false,
        message: `Beta signup is closed for ${role}s. All ${MAX_SIGNUPS_PER_ROLE} spots have been filled.`,
      });
      return;
    }

    // Validate based on role
    let validatedData: any;
    if (role === 'buyer') {
      validatedData = buyerSchema.parse(req.body);
    } else if (role === 'seller') {
      validatedData = sellerSchema.parse(req.body);
    } else if (role === 'logistics') {
      validatedData = logisticsSchema.parse(req.body);
    } else {
      res.status(400).json({
        success: false,
        message: 'Invalid role specified',
      });
      return;
    }

    // Check for duplicate email
    const existingSignup = await prisma.betaSignup.findFirst({
      where: { email: validatedData.email },
    });

    if (existingSignup) {
      logger.warn('Duplicate email submission attempted', {
        requestId,
        email: validatedData.email,
      });
      res.status(400).json({
        success: false,
        message: 'This email has already been registered for the beta.',
      });
      return;
    }

    // Calculate queue position
    const queuePosition = roleCount + 1;

    // Create beta signup
    const signup = await prisma.betaSignup.create({
      data: {
        role: validatedData.role,
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone || null,
        country: validatedData.country,
        device: validatedData.device || null,
        ipAddress: req.ip || null,
        userAgent: req.get('user-agent') || null,
        queuePosition,
        // Role-specific fields
        ...(role === 'buyer' && {
          shopsFor: validatedData.shopsFor,
          payMethod: validatedData.payMethod || null,
          age: validatedData.age || null,
        }),
        ...(role === 'seller' && {
          businessName: validatedData.businessName,
          businessCategory: validatedData.businessCategory || null,
          needs: validatedData.needs,
          yearsInBusiness: validatedData.yearsInBusiness || null,
          justStarting: validatedData.justStarting || null,
        }),
        ...(role === 'logistics' && {
          companyName: validatedData.companyName,
          serviceTypes: validatedData.serviceTypes,
          areasCovered: validatedData.areasCovered || null,
          fleetSize: validatedData.fleetSize || null,
          yearsLogistics: validatedData.yearsLogistics || null,
          logisticsType: validatedData.logisticsType,
          vehicleTypes: validatedData.vehicleTypes,
        }),
      },
    });

    // Sync to Google Sheets (fire-and-forget)
    appendToSheet('Beta Signups', [
      signup.createdAt.toISOString(),
      signup.id,
      signup.role,
      signup.fullName,
      signup.email,
      signup.phone || '',
      signup.country,
      signup.queuePosition || '',
      signup.status,
      signup.device || '',
      signup.businessName || signup.companyName || '',
      signup.businessCategory || '',
      signup.shopsFor ? signup.shopsFor.join(', ') : '',
      signup.payMethod || '',
      signup.age || '',
      signup.needs ? signup.needs.join(', ') : (signup.serviceTypes ? signup.serviceTypes.join(', ') : ''),
      signup.yearsInBusiness || '',
      signup.justStarting || '',
      signup.areasCovered || '',
      signup.fleetSize || '',
      signup.yearsLogistics || '',
      signup.logisticsType || '',
      signup.vehicleTypes ? signup.vehicleTypes.join(', ') : '',
      signup.ipAddress || '',
      signup.userAgent || '',
    ]).catch(err => {
      logger.error('Failed to trigger Google Sheets append for Beta Signup', {
        requestId,
        error: err instanceof Error ? err.message : String(err),
      });
    });

    const latency = Date.now() - startTime;
    logger.info('Beta signup created successfully', {
      requestId,
      signupId: signup.id,
      role,
      queuePosition,
      latency: `${latency}ms`,
      endpoint: 'POST:/api/beta-signup',
    });

    // Send email notifications
    try {
      // Send confirmation to user
      await sendBetaSignupConfirmation({
        fullName: signup.fullName,
        email: signup.email,
        role: signup.role,
        queuePosition: signup.queuePosition || queuePosition,
        country: signup.country,
      });
      logger.info('Beta signup confirmation email sent to user successfully', { requestId, signupId: signup.id });

      // Send admin notification
      await sendBetaSignupAdminNotice({
        fullName: signup.fullName,
        email: signup.email,
        phone: signup.phone || undefined,
        role: signup.role,
        country: signup.country,
        queuePosition: signup.queuePosition || queuePosition,
        businessName: signup.businessName || signup.companyName || undefined,
      });
      logger.info('Beta signup admin notification sent successfully', { requestId, signupId: signup.id });
    } catch (emailError) {
      logger.error('Failed to send beta signup emails', {
        requestId,
        signupId: signup.id,
        error: emailError instanceof Error ? emailError.message : 'Unknown error',
      });
      // Don't fail the request if email fails - data is saved
    }

    res.status(201).json({
      success: true,
      message: 'Beta signup received successfully',
      data: {
        id: signup.id,
        role: signup.role,
        queuePosition: signup.queuePosition,
        status: signup.status,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn('Beta signup validation failed', {
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

    logger.error('Beta signup error', {
      requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(500).json({
      success: false,
      message: 'Failed to process beta signup',
    });
  }
});

export default router;
