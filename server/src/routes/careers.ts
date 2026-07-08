// ============================================================================
// ANNITA LANDING PAGE SERVER - CAREERS API
// ============================================================================
// Fortune 500 / Pentagon Grade Career Application Endpoint
// ============================================================================

import { Router } from 'express';
import type { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { logger } from '../lib/logger.js';
import { z } from 'zod';
import { appendToSheet } from '../lib/google-sheets.js';
import { sendCareerApplicationConfirmation, sendCareerApplicationAdminNotice } from '../lib/email.js';

const router = Router();

// Validation schema for career application
const careerApplicationSchema = z.object({
  jobId: z.number().optional(),
  applicantName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  country: z.string().min(2, 'Country is required'),
  address: z.string().optional(),
  linkedInUrl: z.string().url('Invalid LinkedIn URL').optional().or(z.literal('')),
  portfolioUrl: z.string().url('Invalid portfolio URL').optional().or(z.literal('')),
  resumeUrl: z.string().url('Invalid resume URL').optional().or(z.literal('')),
  coverLetter: z.string().optional(),
  customResponses: z.object({}).optional(),
  website_url: z.string().optional(),
});

// GET /api/careers/jobs - Get all open job postings
router.get('/jobs', async (req: Request, res: Response) => {
  const requestId = req.id;
  
  try {
    const startTime = Date.now();
    logger.info('Fetching job postings', { requestId });

    const jobs = await prisma.jobPosting.findMany({
      where: { status: 'open' },
      orderBy: { createdAt: 'desc' },
    });

    const latency = Date.now() - startTime;
    logger.info('Job postings fetched successfully', {
      requestId,
      count: jobs.length,
      latency: `${latency}ms`,
      endpoint: 'GET:/api/careers/jobs',
    });

    res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    logger.error('Failed to fetch job postings', {
      requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(500).json({
      success: false,
      message: 'Failed to fetch job postings',
    });
  }
});

// GET /api/careers/jobs/:id - Get specific job posting
router.get('/jobs/:id', async (req: Request, res: Response) => {
  const requestId = req.id;
  const { id } = req.params;
  
  try {
    const startTime = Date.now();
    const idString = Array.isArray(id) ? id[0] : id;
    logger.info('Fetching job posting', { requestId, jobId: idString });

    const job = await prisma.jobPosting.findUnique({
      where: { id: parseInt(idString) },
    });

    if (!job) {
      res.status(404).json({
        success: false,
        message: 'Job posting not found',
      });
      return;
    }

    const latency = Date.now() - startTime;
    logger.info('Job posting fetched successfully', {
      requestId,
      jobId: idString,
      latency: `${latency}ms`,
      endpoint: 'GET:/api/careers/jobs/:id',
    });

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    logger.error('Failed to fetch job posting', {
      requestId,
      jobId: id,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(500).json({
      success: false,
      message: 'Failed to fetch job posting',
    });
  }
});

// POST /api/careers/apply - Submit career application
router.post('/apply', async (req: Request, res: Response) => {
  const requestId = req.id;
  
  try {
    const startTime = Date.now();
    logger.info('Career application received', { requestId });

    // Validate input
    const validatedData = careerApplicationSchema.parse(req.body);

    // Check for honeypot field (bot detection)
    if (validatedData.website_url && validatedData.website_url.length > 0) {
      logger.warn('Bot detected via honeypot field', { requestId, emailDomain: validatedData.email.split('@')[1] || 'unknown' });
      res.status(400).json({
        success: false,
        message: 'Invalid request',
      });
      return;
    }

    // If jobId is provided, verify the job exists and is open
    if (validatedData.jobId) {
      const job = await prisma.jobPosting.findUnique({
        where: { id: validatedData.jobId },
      });

      if (!job || job.status !== 'open') {
        logger.warn('Invalid or closed job ID', {
          requestId,
          jobId: validatedData.jobId,
          email: validatedData.email,
        });
        res.status(400).json({
          success: false,
          message: 'Invalid or closed job posting',
        });
        return;
      }
    }

    // Create career application
    const createData: any = {
      applicantName: validatedData.applicantName,
      email: validatedData.email,
      phone: validatedData.phone,
      country: validatedData.country,
      address: validatedData.address,
      linkedInUrl: validatedData.linkedInUrl,
      portfolioUrl: validatedData.portfolioUrl,
      resumeUrl: validatedData.resumeUrl,
      coverLetter: validatedData.coverLetter,
      customResponses: validatedData.customResponses,
      ipAddress: req.ip,
      userAgent: req.get('user-agent'),
    };

    if (validatedData.jobId) {
      createData.jobId = validatedData.jobId;
    }

    const application = await prisma.careerApplication.create({
      data: createData,
    });

    // Sync to Google Sheets (fire-and-forget)
    appendToSheet('Career Applications', [
      application.createdAt.toISOString(),
      application.id,
      application.jobId || 'Talent Pool',
      application.applicantName,
      application.email,
      application.phone || '',
      application.country,
      application.linkedInUrl || '',
      application.portfolioUrl || '',
      application.status,
      application.ipAddress || '',
      application.userAgent || '',
    ]).catch(err => {
      logger.error('Failed to trigger Google Sheets append for Career Application', {
        requestId,
        error: err instanceof Error ? err.message : String(err),
      });
    });

    const latency = Date.now() - startTime;
    logger.info('Career application created successfully', {
      requestId,
      applicationId: application.id,
      email: application.email,
      jobId: application.jobId,
      latency: `${latency}ms`,
      endpoint: 'POST:/api/careers/apply',
    });

    // Send email notifications
    try {
      // Get job title if jobId exists
      let jobTitle: string | undefined;
      if (validatedData.jobId) {
        const job = await prisma.jobPosting.findUnique({
          where: { id: validatedData.jobId },
          select: { title: true }
        });
        jobTitle = job?.title;
      }

      // Send confirmation to applicant
      await sendCareerApplicationConfirmation({
        applicantName: validatedData.applicantName,
        email: validatedData.email,
        jobTitle
      });
      logger.info('Career application confirmation email sent to applicant successfully', { requestId, applicationId: application.id });

      // Send admin notification
      await sendCareerApplicationAdminNotice({
        applicantName: validatedData.applicantName,
        email: validatedData.email,
        jobTitle,
        country: validatedData.country,
        phone: validatedData.phone
      });
      logger.info('Career application admin notification sent successfully', { requestId, applicationId: application.id });
    } catch (emailError) {
      logger.error('Failed to send career application emails', {
        requestId,
        applicationId: application.id,
        error: emailError instanceof Error ? emailError.message : 'Unknown error',
      });
      // Don't fail the request if email fails - data is saved
    }

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully. We will review your application and get back to you.',
      data: {
        id: application.id,
        status: application.status,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn('Career application validation failed', {
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

    logger.error('Career application error', {
      requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(500).json({
      success: false,
      message: 'Failed to process application',
    });
  }
});

// POST /api/careers/talent-pool - Join general talent pool (no specific job)
router.post('/talent-pool', async (req: Request, res: Response) => {
  const requestId = req.id;

  try {
    const startTime = Date.now();
    logger.info('Talent pool submission received', { requestId });

    // Reuse the application schema but require no jobId
    const validatedData = careerApplicationSchema.parse(req.body);

    // Honeypot check
    if (validatedData.website_url && validatedData.website_url.length > 0) {
      logger.warn('Bot detected via honeypot field', { requestId, email: validatedData.email });
      res.status(400).json({ success: false, message: 'Invalid request' });
      return;
    }

    // Persist as a talent pool entry (no jobId)
    const application = await prisma.careerApplication.create({
      data: {
        applicantName: validatedData.applicantName,
        email: validatedData.email,
        phone: validatedData.phone,
        country: validatedData.country,
        address: validatedData.address,
        linkedInUrl: validatedData.linkedInUrl,
        portfolioUrl: validatedData.portfolioUrl,
        resumeUrl: validatedData.resumeUrl,
        coverLetter: validatedData.coverLetter,
        customResponses: validatedData.customResponses,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
      },
    });

    appendToSheet('Career Applications', [
      application.createdAt.toISOString(),
      application.id,
      'Talent Pool',
      application.applicantName,
      application.email,
      application.phone || '',
      application.country,
      application.linkedInUrl || '',
      application.portfolioUrl || '',
      application.status,
      application.ipAddress || '',
      application.userAgent || '',
    ]).catch(err => {
      logger.error('Failed to trigger Google Sheets append for Talent Pool', {
        requestId,
        error: err instanceof Error ? err.message : String(err),
      });
    });

    const latency = Date.now() - startTime;
    logger.info('Talent pool submission created successfully', {
      requestId,
      applicationId: application.id,
      email: application.email,
      latency: `${latency}ms`,
      endpoint: 'POST:/api/careers/talent-pool',
    });

    // Send confirmation emails (no job title)
    try {
      await sendCareerApplicationConfirmation({
        applicantName: validatedData.applicantName,
        email: validatedData.email,
      });
      logger.info('Talent pool confirmation email sent successfully', { requestId, applicationId: application.id });

      await sendCareerApplicationAdminNotice({
        applicantName: validatedData.applicantName,
        email: validatedData.email,
        country: validatedData.country,
        phone: validatedData.phone,
      });
      logger.info('Talent pool admin notification sent successfully', { requestId, applicationId: application.id });
    } catch (emailError) {
      logger.error('Failed to send talent pool emails', {
        requestId,
        applicationId: application.id,
        error: emailError instanceof Error ? emailError.message : 'Unknown error',
      });
    }

    res.status(201).json({
      success: true,
      message: 'Joined talent pool successfully. We will contact you when matching positions open up.',
      data: {
        id: application.id,
        status: application.status,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn('Talent pool submission validation failed', {
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

    logger.error('Talent pool submission error', {
      requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(500).json({
      success: false,
      message: 'Failed to join talent pool',
    });
  }
});

export default router;
