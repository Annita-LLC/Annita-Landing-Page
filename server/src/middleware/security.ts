// ============================================================================
// ANNITA LANDING PAGE SERVER - SECURITY MIDDLEWARE
// ============================================================================
// Fortune 500 / Pentagon Grade Security
// ============================================================================

import type { Request, Response, NextFunction } from 'express';
import os from 'os';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { validationResult } from 'express-validator';
import { config } from '../config/index.js';
import { logger } from '../lib/logger.js';

// ============================================================================
// HELMET CONFIGURATION
// ============================================================================
export const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'https:'],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
  referrerPolicy: {
    policy: 'strict-origin-when-cross-origin',
  },
});

// ============================================================================
// RATE LIMITING
// ============================================================================
export const rateLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.maxRequests,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req: Request, res: Response) => {
    logger.warn('Rate limit exceeded', {
      ip: req.ip,
      path: req.path,
      method: req.method,
    });
    res.status(429).json({
      error: 'Too many requests',
      message: 'Please try again later',
    });
  },
  skip: (req: Request) => {
    // Skip rate limiting for health checks
    return req.path === '/health';
  },
});

// ============================================================================
// REQUEST ID MIDDLEWARE
// ============================================================================
export const requestId = (req: Request, res: Response, next: NextFunction): void => {
  const requestId = req.headers['x-request-id'] as string || 
                    `req-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  res.setHeader('X-Request-ID', requestId);
  req.id = requestId;
  
  next();
};

// Extend Express Request type
declare global {
  namespace Express {
    interface Request {
      id?: string;
    }
  }
}

// ============================================================================
// REQUEST LOGGING MIDDLEWARE
// ============================================================================
export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('HTTP Request', {
      method: req.method,
      path: req.path,
      status: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip,
      requestId: req.id,
    });
  });
  
  next();
};

// ============================================================================
// ERROR HANDLING MIDDLEWARE - FORTUNE 500 PENTAGON-GRADE
// ============================================================================
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const errorTimestamp = new Date().toISOString();

  // Deep system context capture
  const systemContext = {
    timestamp: errorTimestamp,
    uptime: process.uptime(),
    uptimeFormatted: formatProcessUptime(process.uptime()),
    platform: process.platform,
    arch: process.arch,
    nodeVersion: process.version,
    pid: process.pid,
    memory: process.memoryUsage(),
    cpu: os.cpus().length,
    loadAverage: os.loadavg(),
    environment: process.env.NODE_ENV || 'NOT_SET'
  };

  // Deep request context capture
  const requestContext = {
    requestId: req.id,
    path: req.path,
    method: req.method,
    url: req.url,
    ip: req.ip,
    ips: req.ips,
    protocol: req.protocol,
    secure: req.secure,
    headers: {
      'user-agent': req.get('user-agent'),
      'referer': req.get('referer'),
      'origin': req.get('origin'),
      'accept': req.get('accept'),
      'accept-language': req.get('accept-language'),
      'accept-encoding': req.get('accept-encoding'),
      'content-type': req.get('content-type'),
      'content-length': req.get('content-length'),
      'authorization': req.get('authorization') ? '[REDACTED]' : undefined,
      'x-request-id': req.get('x-request-id'),
      'x-forwarded-for': req.get('x-forwarded-for'),
      'x-real-ip': req.get('x-real-ip'),
      'cf-connecting-ip': req.get('cf-connecting-ip'),
    },
    query: Object.keys(req.query).length > 0 ? req.query : undefined,
    bodySize: req.body ? JSON.stringify(req.body).length : 0,
    bodyKeys: req.body ? Object.keys(req.body) : undefined,
    cookies: Object.keys(req.cookies || {}),
    params: req.params,
    timing: {
      timestamp: req.time,
      timeElapsed: Date.now() - req.time
    }
  };

  // Deep error analysis
  const errorAnalysis = {
    name: err.name,
    message: err.message,
    stack: config.env.isDevelopment ? err.stack : undefined,
    constructor: err.constructor.name,
    code: (err as any).code,
    errno: (err as any).errno,
    syscall: (err as any).syscall,
    path: (err as any).path,
    address: (err as any).address,
    port: (err as any).port
  };

  // Categorize error type for monitoring and alerting
  let errorCategory = 'UNKNOWN_ERROR';
  let errorSeverity = 'MEDIUM';
  let errorImpact = 'PARTIAL_OUTAGE';

  if (err.name === 'ValidationError') {
    errorCategory = 'VALIDATION_ERROR';
    errorSeverity = 'LOW';
    errorImpact = 'NONE';
  } else if (err.name === 'PrismaClientKnownRequestError') {
    errorCategory = 'DATABASE_ERROR';
    errorSeverity = 'HIGH';
    errorImpact = 'PARTIAL_OUTAGE';
  } else if (err.name === 'PrismaClientInitializationError') {
    errorCategory = 'DATABASE_INIT_ERROR';
    errorSeverity = 'CRITICAL';
    errorImpact = 'FULL_OUTAGE';
  } else if (err.name === 'SyntaxError') {
    errorCategory = 'SYNTAX_ERROR';
    errorSeverity = 'HIGH';
    errorImpact = 'FULL_OUTAGE';
  } else if (err.name === 'TypeError') {
    errorCategory = 'TYPE_ERROR';
    errorSeverity = 'HIGH';
    errorImpact = 'PARTIAL_OUTAGE';
  } else if (err.name === 'ReferenceError') {
    errorCategory = 'REFERENCE_ERROR';
    errorSeverity = 'HIGH';
    errorImpact = 'FULL_OUTAGE';
  } else if (err.name === 'RangeError') {
    errorCategory = 'RANGE_ERROR';
    errorSeverity = 'HIGH';
    errorImpact = 'PARTIAL_OUTAGE';
  } else if (err.message?.includes('ECONNREFUSED')) {
    errorCategory = 'CONNECTION_ERROR';
    errorSeverity = 'CRITICAL';
    errorImpact = 'FULL_OUTAGE';
  } else if (err.message?.includes('ETIMEDOUT') || err.message?.includes('timeout')) {
    errorCategory = 'TIMEOUT_ERROR';
    errorSeverity = 'HIGH';
    errorImpact = 'PARTIAL_OUTAGE';
  } else if (err.message?.includes('ENOTFOUND')) {
    errorCategory = 'DNS_ERROR';
    errorSeverity = 'HIGH';
    errorImpact = 'PARTIAL_OUTAGE';
  } else if (err.message?.includes('EPIPE')) {
    errorCategory = 'BROKEN_PIPE';
    errorSeverity = 'LOW';
    errorImpact = 'NONE';
  }

  // Complete error context
  const errorContext = {
    system: systemContext,
    request: requestContext,
    error: errorAnalysis,
    categorization: {
      category: errorCategory,
      severity: errorSeverity,
      impact: errorImpact
    }
  };

  // Log with full context
  console.error('[ERROR HANDLER] Pentagon-grade error analysis:', errorContext);
  logger.error('Unhandled error - Pentagon-grade analysis', errorContext);

  // Additional structured logging for monitoring systems
  logger.error('Error metrics', {
    requestId: req.id,
    errorCategory,
    errorSeverity,
    errorImpact,
    errorName: err.name,
    errorMessage: err.message,
    path: req.path,
    method: req.method,
    ip: req.ip,
    timestamp: errorTimestamp
  });

  // Response with appropriate detail level based on environment
  const responsePayload = {
    error: 'Internal server error',
    message: config.env.isDevelopment ? err.message : 'An unexpected error occurred',
    requestId: req.id,
    timestamp: errorTimestamp,
    errorCategory: config.env.isDevelopment ? errorCategory : undefined,
    errorSeverity: config.env.isDevelopment ? errorSeverity : undefined,
    errorImpact: config.env.isDevelopment ? errorImpact : undefined,
    support: {
      contact: 'support@an-nita.com',
      requestId: req.id,
      timestamp: errorTimestamp
    }
  };

  // Set appropriate status code based on error type
  let statusCode = 500;
  if (errorCategory === 'VALIDATION_ERROR') statusCode = 400;
  else if (errorCategory === 'CONNECTION_ERROR' || errorCategory === 'TIMEOUT_ERROR') statusCode = 503;
  else if (errorCategory === 'DATABASE_ERROR') statusCode = 503;

  res.status(statusCode).json(responsePayload);
};

function formatProcessUptime(seconds: number): string {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const parts: string[] = [];
  if (d > 0) parts.push(`${d}d`);
  if (h > 0) parts.push(`${h}h`);
  if (m > 0) parts.push(`${m}m`);
  parts.push(`${s}s`);
  return parts.join(' ');
}

// ============================================================================
// VALIDATION REQUEST MIDDLEWARE
// ============================================================================
export const validateRequest = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      error: 'Validation failed',
      details: errors.array(),
    });
    return;
  }
  next();
};
