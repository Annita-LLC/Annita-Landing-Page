// ============================================================================
// ANNITA LANDING PAGE SERVER - SOLUTIONS REQUEST FORM API
// ============================================================================
// Fortune 500 / Pentagon Grade Solutions Request Endpoint
// ============================================================================

import { Router } from 'express';
import type { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { logger } from '../lib/logger.js';
import { z } from 'zod';
import { sendSolutionsRequestAdminEmail, sendSolutionsRequestConfirmation } from '../lib/email.js';
import { appendToSheet } from '../lib/google-sheets.js';

const router = Router();

// Validation schema
const solutionsRequestSchema = z.object({
  // Step 1: About You
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  organization: z.string().min(2, 'Organization must be at least 2 characters'),
  jobTitle: z.string().min(2, 'Job title must be at least 2 characters'),
  organizationType: z.string().min(1, 'Organization type is required'),
  country: z.string().min(2, 'Country must be at least 2 characters'),
  city: z.string().optional(),
  contactMethod: z.string().min(1, 'Contact method is required'),
  howDidYouHear: z.string().optional(),
  referrerName: z.string().optional(),
  
  // Step 2: Your Project
  projectName: z.string().min(2, 'Project name must be at least 2 characters'),
  projectSummary: z.string().min(10, 'Project summary must be at least 10 characters'),
  solutionTypes: z.array(z.string()).min(1, 'At least one solution type is required'),
  solutionTypeOther: z.string().optional(),
  targetUsers: z.string().min(2, 'Target users must be at least 2 characters'),
  userCount: z.string().min(1, 'User count is required'),
  geographicDeployment: z.array(z.string()).min(1, 'At least one geographic deployment is required'),
  geographicCountry: z.string().optional(),
  languages: z.array(z.string()).min(1, 'At least one language is required'),
  offlineRequired: z.string().min(1, 'Offline requirement is required'),
  existingSystem: z.string().optional(),
  existingSystemDescription: z.string().optional(),
  
  // Step 3: Requirements
  coreFeatures: z.string().optional(),
  importantFeatures: z.array(z.string()).optional(),
  thirdPartyIntegrations: z.string().optional(),
  techStack: z.array(z.string()).optional(),
  techStackOther: z.string().optional(),
  brandIdentity: z.string().optional(),
  brandAssets: z.any().optional(),
  wireframes: z.string().optional(),
  wireframesFiles: z.any().optional(),
  wireframesUrl: z.string().optional(),
  designStyle: z.string().optional(),
  securityRequirements: z.array(z.string()).optional(),
  additionalNotes: z.string().optional(),
  
  // Step 4: Budget & Timeline
  budget: z.string().min(1, 'Budget is required'),
  fundingContext: z.string().optional(),
  budgetFlexibility: z.string().optional(),
  timeline: z.string().min(1, 'Timeline is required'),
  specificDeadline: z.string().optional(),
  projectStartDate: z.string().optional(),
  engagementStyle: z.string().optional(),
  maintenanceNeeded: z.string().optional(),
  finalThoughts: z.string().optional(),
  agreement: z.boolean().refine(val => val === true, 'You must agree to the terms'),
});

// POST /api/solutions-request
router.post('/', async (req: Request, res: Response) => {
  const requestId = req.id;
  
  try {
    const startTime = Date.now();
    logger.info('Solutions request form submission received', { requestId });

    // Validate input
    const validatedData = solutionsRequestSchema.parse(req.body);

    // Create solutions request
    const submission = await prisma.solutionsRequest.create({
      data: {
        // Step 1: About You
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        organization: validatedData.organization,
        jobTitle: validatedData.jobTitle,
        organizationType: validatedData.organizationType,
        country: validatedData.country,
        city: validatedData.city || null,
        contactMethod: validatedData.contactMethod,
        howDidYouHear: validatedData.howDidYouHear || null,
        referrerName: validatedData.referrerName || null,
        
        // Step 2: Your Project
        projectName: validatedData.projectName,
        projectSummary: validatedData.projectSummary,
        solutionTypes: validatedData.solutionTypes,
        solutionTypeOther: validatedData.solutionTypeOther || null,
        targetUsers: validatedData.targetUsers,
        userCount: validatedData.userCount,
        geographicDeployment: validatedData.geographicDeployment,
        geographicCountry: validatedData.geographicCountry || null,
        languages: validatedData.languages,
        offlineRequired: validatedData.offlineRequired,
        existingSystem: validatedData.existingSystem || null,
        existingSystemDescription: validatedData.existingSystemDescription || null,
        
        // Step 3: Requirements
        coreFeatures: validatedData.coreFeatures || null,
        importantFeatures: validatedData.importantFeatures || [],
        thirdPartyIntegrations: validatedData.thirdPartyIntegrations || null,
        techStack: validatedData.techStack || [],
        techStackOther: validatedData.techStackOther || null,
        brandIdentity: validatedData.brandIdentity || null,
        brandAssets: validatedData.brandAssets || null,
        wireframes: validatedData.wireframes || null,
        wireframesFiles: validatedData.wireframesFiles || null,
        wireframesUrl: validatedData.wireframesUrl || null,
        designStyle: validatedData.designStyle || null,
        securityRequirements: validatedData.securityRequirements || [],
        additionalNotes: validatedData.additionalNotes || null,
        
        // Step 4: Budget & Timeline
        budget: validatedData.budget,
        fundingContext: validatedData.fundingContext || null,
        budgetFlexibility: validatedData.budgetFlexibility || null,
        timeline: validatedData.timeline,
        specificDeadline: validatedData.specificDeadline || null,
        projectStartDate: validatedData.projectStartDate || null,
        engagementStyle: validatedData.engagementStyle || null,
        maintenanceNeeded: validatedData.maintenanceNeeded || null,
        finalThoughts: validatedData.finalThoughts || null,
        agreement: validatedData.agreement,
        
        // Metadata
        ipAddress: req.ip || null,
        userAgent: req.get('user-agent') || null,
      },
    });

    // Sync to Google Sheets (fire-and-forget)
    appendToSheet('Custom Solutions', [
      submission.createdAt.toISOString(),
      submission.id,
      submission.fullName,
      submission.email,
      submission.phone,
      submission.organization,
      submission.jobTitle,
      submission.organizationType,
      submission.country,
      submission.projectName,
      submission.projectSummary,
      submission.solutionTypes ? submission.solutionTypes.join(', ') : '',
      submission.targetUsers,
      submission.userCount,
      submission.geographicDeployment ? submission.geographicDeployment.join(', ') : '',
      submission.geographicCountry || '',
      submission.languages ? submission.languages.join(', ') : '',
      submission.offlineRequired,
      submission.budget,
      submission.timeline,
      submission.status,
      submission.ipAddress || '',
      submission.userAgent || '',
    ]).catch(err => {
      logger.error('Failed to trigger Google Sheets append for Custom Solutions Request', {
        requestId,
        error: err instanceof Error ? err.message : String(err),
      });
    });

    const latency = Date.now() - startTime;
    logger.info('Solutions request created successfully', {
      requestId,
      submissionId: submission.id,
      latency: `${latency}ms`,
      endpoint: 'POST:/api/solutions-request',
    });

    // Send email notifications
    try {
      // Send to admin
      await sendSolutionsRequestAdminEmail({
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        organization: validatedData.organization,
        projectName: validatedData.projectName,
        projectSummary: validatedData.projectSummary,
        solutionTypes: validatedData.solutionTypes,
        budget: validatedData.budget,
        timeline: validatedData.timeline,
      });
      logger.info('Solutions request email sent to admin successfully', { requestId, submissionId: submission.id });

      // Send confirmation to client
      await sendSolutionsRequestConfirmation({
        name: validatedData.fullName,
        email: validatedData.email,
        projectName: validatedData.projectName,
      });
      logger.info('Solutions request confirmation email sent to client successfully', { requestId, submissionId: submission.id });
    } catch (emailError) {
      logger.error('Failed to send solutions request emails', {
        requestId,
        submissionId: submission.id,
        error: emailError instanceof Error ? emailError.message : 'Unknown error',
      });
      // Don't fail the request if email fails - data is saved
    }

    res.status(201).json({
      success: true,
      message: 'Solutions request received successfully',
      data: {
        id: submission.id,
        status: submission.status,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn('Solutions request form validation failed', {
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

    logger.error('Solutions request submission error', {
      requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(500).json({
      success: false,
      message: 'Failed to process solutions request',
    });
  }
});

export default router;
