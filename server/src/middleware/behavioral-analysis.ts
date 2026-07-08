/**
 * ╔═════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║              ANNITA LANDING PAGE SERVER - BEHAVIORAL ANALYSIS MIDDLEWARE                     ║
 * ║                   Fortune 500 / Pentagon Grade Anomaly Detection                            ║
 * ╚═════════════════════════════════════════════════════════════════════════════════════════════╗
 * 
 * FEATURES:
 * 1. Rapid submission detection
 * 2. Suspicious payload pattern detection
 * 3. Request frequency tracking
 * 4. IP reputation integration
 * 5. Configurable thresholds
 */

import type { Request, Response, NextFunction } from 'express';
import { logger } from '../lib/logger.js';
import { getIpReputationEngine } from '../lib/ip-reputation.js';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface RequestTimestamp {
  timestamp: number;
  path: string;
  method: string;
}

interface BehavioralConfig {
  minSecondsBetweenSubmissions: number;
  maxSubmissionsPerMinute: number;
  maxFieldLength: number;
  enableSuspiciousPatternDetection: boolean;
}

// ============================================================================
// REQUEST TRACKING STORE
// ============================================================================

const requestStore = new Map<string, RequestTimestamp[]>();

// ============================================================================
// SUSPICIOUS PAYLOAD PATTERNS
// ============================================================================

const SUSPICIOUS_PATTERNS = [
  // Excessive URLs
  /(https?:\/\/[^\s]+){5,}/i,
  
  // SQL injection attempts (additional layer)
  /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|EXEC)\b)/i,
  
  // XSS attempts (additional layer)
  /<script[\s\S]*?>|<iframe[\s\S]*?>|javascript:/i,
  
  // Excessive repeated characters
  /(.)\1{50,}/,
  
  // Base64 encoded content (potential payload)
  /[A-Za-z0-9+/]{100,}={0,2}/,
  
  // Excessive special characters
  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{20,}/,
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get client IP address
 */
function getClientIp(req: Request): string {
  return req.ip || req.connection.remoteAddress || 'unknown';
}

/**
 * Clean up old request timestamps
 */
function cleanupOldTimestamps(ip: string, cutoffTime: number): void {
  const timestamps = requestStore.get(ip);
  if (!timestamps) return;

  const filtered = timestamps.filter(t => t.timestamp > cutoffTime);
  requestStore.set(ip, filtered);
}

/**
 * Check for suspicious patterns in payload
 */
function hasSuspiciousPatterns(data: any): boolean {
  if (!data || typeof data !== 'object') {
    return false;
  }

  const checkValue = (value: any): boolean => {
    if (typeof value === 'string') {
      for (const pattern of SUSPICIOUS_PATTERNS) {
        if (pattern.test(value)) {
          return true;
        }
      }
    } else if (typeof value === 'object' && value !== null) {
      for (const key in value) {
        if (checkValue(value[key])) {
          return true;
        }
      }
    }
    return false;
  };

  return checkValue(data);
}

/**
 * Check field lengths
 */
function hasExcessiveFieldLength(data: any, maxLength: number): boolean {
  if (!data || typeof data !== 'object') {
    return false;
  }

  for (const key in data) {
    if (typeof data[key] === 'string' && data[key].length > maxLength) {
      return true;
    }
  }

  return false;
}

// ============================================================================
// BEHAVIORAL ANALYSIS MIDDLEWARE
// ============================================================================

export const behavioralAnalysisMiddleware = (config: BehavioralConfig) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const ip = getClientIp(req);
    const requestId = req.id;
    const now = Date.now();

    // Skip GET requests and health checks
    if (req.method === 'GET' || req.path === '/health') {
      next();
      return;
    }

    // Get or initialize request timestamps for this IP
    let timestamps = requestStore.get(ip);
    if (!timestamps) {
      timestamps = [];
      requestStore.set(ip, timestamps);
    }

    // Clean up timestamps older than 1 minute
    cleanupOldTimestamps(ip, now - 60000);

    // 1. Check for rapid submissions
    if (timestamps.length > 0) {
      const lastRequest = timestamps[timestamps.length - 1];
      const timeSinceLast = now - lastRequest.timestamp;

      if (timeSinceLast < config.minSecondsBetweenSubmissions * 1000) {
        logger.warn('Rapid submission detected', {
          ip,
          timeSinceLast: `${timeSinceLast}ms`,
          minRequired: `${config.minSecondsBetweenSubmissions * 1000}ms`,
          path: req.path,
          requestId,
        });

        const ipReputation = getIpReputationEngine();
        if (ipReputation) {
          ipReputation.recordIncident(ip, 'RAPID_SUBMISSION', 10);
        }

        // Don't block immediately, but log and potentially slow down
      }
    }

    // 2. Check submission frequency (per minute)
    if (timestamps.length >= config.maxSubmissionsPerMinute) {
      logger.warn('Submission frequency exceeded', {
        ip,
        count: timestamps.length,
        max: config.maxSubmissionsPerMinute,
        path: req.path,
        requestId,
      });

      const ipReputation = getIpReputationEngine();
      if (ipReputation) {
        ipReputation.recordIncident(ip, 'HIGH_SUBMISSION_FREQUENCY', 15);
      }

      res.status(429).json({
        error: 'Too Many Requests',
        message: 'You have exceeded the submission rate limit. Please slow down.',
        requestId,
      });
      return;
    }

    // 3. Check for suspicious payload patterns
    if (config.enableSuspiciousPatternDetection && req.body) {
      if (hasSuspiciousPatterns(req.body)) {
        logger.warn('Suspicious payload pattern detected', {
          ip,
          path: req.path,
          requestId,
        });

        const ipReputation = getIpReputationEngine();
        if (ipReputation) {
          ipReputation.recordIncident(ip, 'SUSPICIOUS_PAYLOAD_PATTERN', 20);
        }

        res.status(400).json({
          error: 'Bad Request',
          message: 'Invalid submission detected',
          requestId,
        });
        return;
      }

      // 4. Check for excessive field lengths
      if (hasExcessiveFieldLength(req.body, config.maxFieldLength)) {
        logger.warn('Excessive field length detected', {
          ip,
          path: req.path,
          requestId,
        });

        const ipReputation = getIpReputationEngine();
        if (ipReputation) {
          ipReputation.recordIncident(ip, 'EXCESSIVE_FIELD_LENGTH', 5);
        }

        res.status(400).json({
          error: 'Bad Request',
          message: 'Submission exceeds maximum allowed length',
          requestId,
        });
        return;
      }
    }

    // Record this request
    timestamps.push({
      timestamp: now,
      path: req.path,
      method: req.method,
    });

    // Keep only last 100 requests per IP to prevent memory bloat
    if (timestamps.length > 100) {
      timestamps.shift();
    }

    next();
  };
};

// ============================================================================
// DEFAULT CONFIGURATION
// ============================================================================

export const defaultBehavioralConfig: BehavioralConfig = {
  minSecondsBetweenSubmissions: 2,
  maxSubmissionsPerMinute: 10,
  maxFieldLength: 10000,
  enableSuspiciousPatternDetection: true,
};
