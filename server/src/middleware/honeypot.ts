/**
 * ╔═════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║              ANNITA LANDING PAGE SERVER - HONEYPOT VALIDATION MIDDLEWARE                     ║
 * ║                   Fortune 500 / Pentagon Grade Bot Detection                                   ║
 * ╚═════════════════════════════════════════════════════════════════════════════════════════════╗
 * 
 * FEATURES:
 * 1. Honeypot field validation (detects bots that fill hidden fields)
 * 2. IP reputation integration
 * 3. Configurable field name
 * 4. Silent logging for security analysis
 */

import type { Request, Response, NextFunction } from 'express';
import { logger } from '../lib/logger.js';
import { getIpReputationEngine } from '../lib/ip-reputation.js';

// ============================================================================
// HONEYPOT VALIDATION MIDDLEWARE
// ============================================================================

interface HoneypotOptions {
  fieldName?: string;
  blockOnDetection?: boolean;
  reputationPoints?: number;
}

/**
 * Create honeypot validation middleware
 */
export const honeypotValidation = (options: HoneypotOptions = {}) => {
  const {
    fieldName = 'website_url',
    blockOnDetection = true,
    reputationPoints = 25,
  } = options;

  return (req: Request, res: Response, next: NextFunction): void => {
    const requestId = req.id;
    const ip = req.ip || req.connection.remoteAddress || 'unknown';

    // Skip honeypot validation for GET requests (no body)
    if (req.method === 'GET') {
      return next();
    }

    // Check if honeypot field exists and is filled
    const honeypotValue = req.body[fieldName];

    if (honeypotValue && typeof honeypotValue === 'string' && honeypotValue.trim().length > 0) {
      // Bot detected - honeypot field was filled
      logger.warn('Honeypot field filled - bot detected', {
        ip,
        fieldName,
        honeypotValue: honeypotValue.substring(0, 50), // Log first 50 chars
        path: req.path,
        method: req.method,
        requestId,
      });

      // Record in IP reputation
      const ipReputation = getIpReputationEngine();
      if (ipReputation) {
        ipReputation.recordIncident(ip, 'HONEYPOT_FILLED', reputationPoints);
      }

      if (blockOnDetection) {
        res.status(400).json({
          error: 'Bad Request',
          message: 'Invalid submission',
          requestId,
        });
        return;
      }
      // If not blocking, continue but mark request
      (req as any).honeypotDetected = true;
    }

    next();
  };
};

/**
 * Strict honeypot validation (always blocks)
 */
export const strictHoneypotValidation = honeypotValidation({
  blockOnDetection: true,
  reputationPoints: 30,
});

/**
 * Lenient honeypot validation (logs but doesn't block)
 */
export const lenientHoneypotValidation = honeypotValidation({
  blockOnDetection: false,
  reputationPoints: 15,
});
