/**
 * ╔═════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║              ANNITA LANDING PAGE SERVER — SECURITY MIDDLEWARE                               ║
 * ║                   Enterprise Security Protection Suite                                      ║
 * ╚═════════════════════════════════════════════════════════════════════════════════════════════╗
 *
 * SECURITY FEATURES:
 * 1. XSS Protection — Structural payload detection (non-false-positive patterns)
 * 2. CSRF Protection — No-op (API is stateless JSON-only)
 * 3. Request Size Limits — Prevent DoS via large payloads
 * 4. Security Headers — DISA STIG compliant HTTP response headers
 * 5. IP-based Rate Limiting — Geographic/IP-based throttling
 * 6. Input Validation — Schema-driven field validation
 *
 * REMOVED (audit 2026-07):
 *   - SQL Injection regex scanner — false-positive-producing (blocked messages
 *     containing words like "select", "update", "insert"). Prisma already
 *     parameterizes all queries; SQLi via Prisma is not possible.
 *   - sanitizeSQLInput helper — destructively mutates strings (removes quotes,
 *     backslashes, SQL keywords) — never called anywhere.
 *
 * This file no longer contains SQL_INJECTION patterns, detectSQLInjection,
 * sanitizeSQLInput, or sqlInjectionProtection middleware.
 */

import type { Request, Response, NextFunction } from 'express';
import rateLimit, { ipKeyGenerator } from 'express-rate-limit';
import helmet from 'helmet';

// ═══════════════════════════════════════════════════════════════════════════════
// 1. XSS PROTECTION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * XSS Patterns to Detect and Block
 *
 * NOTE: We intentionally do NOT block generic JS keywords like "eval",
 * "document", "onclick" because these produce massive false positives in
 * legitimate business text ("evaluation", "document workflow", "online
 * form"). XSS payloads that USE these keywords are already caught by the
 * structural patterns below (<script>, <iframe>, etc.). Email templates
 * already escape all user input via escapeHtml().
 *
 * What remains: structural injection primitives that have NO legitimate
 * use in form text.
 */
const XSS_PATTERNS = [
  /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
  /<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi,
  /javascript:/gi,
  /<img[\s\S]*?src[\s\S]*?onerror/i,           // img-onerror XSS vector
  /<svg[\s\S]*?>[\s\S]*?<\/svg>/gi,
  /<object[\s\S]*?>[\s\S]*?<\/object>/gi,
  /<embed[\s\S]*?>[\s\S]*?<\/embed>/gi,
  /<applet[\s\S]*?>[\s\S]*?<\/applet>/gi,
  /<meta[\s\S]*?>/gi,
  /<link[\s\S]*?>/gi,
  /<style[\s\S]*?>[\s\S]*?<\/style>/gi,
  /data:text\/html/gi,
  /data:image\/svg/gi,
  /vbscript:/gi,
];

/**
 * Check if input contains XSS patterns
 */
export function detectXSS(input: string): boolean {
  if (!input || typeof input !== 'string') {
    return false;
  }
  return XSS_PATTERNS.some(pattern => pattern.test(input));
}

/**
 * Sanitize input to prevent XSS
 */
export function sanitizeXSSInput(input: string): string {
  if (!input || typeof input !== 'string') {
    return input;
  }
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Middleware to detect and block XSS attempts
 */
export const xssProtection = (req: Request, res: Response, next: NextFunction): void => {
  const checkInput = (value: any, path: string): boolean => {
    if (typeof value === 'string') {
      if (detectXSS(value)) {
        return true;
      }
    } else if (typeof value === 'object' && value !== null) {
      for (const key in value) {
        if (checkInput(value[key], `${path}.${key}`)) {
          return true;
        }
      }
    }
    return false;
  };

  // Check query parameters
  if (checkInput(req.query, 'query')) {
    res.status(400).json({
      error: 'Security Violation',
      message: 'XSS attack detected in query parameters',
      requestId: req.id,
    });
    return;
  }

  // Check request body
  if (checkInput(req.body, 'body')) {
    res.status(400).json({
      error: 'Security Violation',
      message: 'XSS attack detected in request body',
      requestId: req.id,
    });
    return;
  }

  // Check URL parameters
  if (checkInput(req.params, 'params')) {
    res.status(400).json({
      error: 'Security Violation',
      message: 'XSS attack detected in URL parameters',
      requestId: req.id,
    });
    return;
  }

  next();
};

// ═══════════════════════════════════════════════════════════════════════════════
// 2. CSRF PROTECTION  (intentionally disabled — see note below)
// ═══════════════════════════════════════════════════════════════════════════════
//
// SECURITY NOTE (audit 2026-07):
// A prior version of this file shipped a `csrfTokenMiddleware` and
// `csrfProtection` pair that was non-functional security theater:
//   - The token was `base64(Date.now() + Math.random())` — predictable.
//   - The validator compared two client-supplied headers, so any attacker
//     could pass matching arbitrary values.
//   - The validator was never wired into any route in `index.ts`.
//   - The frontend in `lib/api.ts` never sent a CSRF token.
//
// The API is stateless JSON-only with `Authorization` header auth (no
// cookies, no sessions). The CORS policy denies cross-origin requests with
// credentials by default (see `config/index.ts` and `cors.ts`). Under that
// model, CSRF protection is unnecessary: a cross-site form cannot attach
// an `Authorization` header, and a same-origin request is by definition
// trusted. If cookies/session auth are ever introduced, a real
// double-submit-token CSRF middleware MUST be wired before any state
// mutation route, and the frontend must send the token via `lib/api.ts`.
//
// For now, the previous dead code has been removed rather than left as
// false reassurance.

/**
 * No-op middleware kept for backward compatibility with `index.ts` imports.
 * Does nothing. See the note above for why CSRF is intentionally disabled.
 */
export const csrfTokenMiddleware = (_req: Request, _res: Response, next: NextFunction): void => {
  next();
};

// ═══════════════════════════════════════════════════════════════════════════════
// 3. REQUEST SIZE LIMITS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Middleware to limit request size
 */
export const requestSizeLimit = (maxSize: string = '1mb') => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const contentLength = req.headers['content-length'];
    if (contentLength) {
      const size = parseInt(contentLength, 10);
      const maxSizeBytes = parseSize(maxSize);
      
      if (size > maxSizeBytes) {
        res.status(413).json({
          error: 'Payload Too Large',
          message: `Request body too large. Maximum size is ${maxSize}`,
          requestId: req.id,
        });
        return;
      }
    }
    next();
  };
};

/**
 * Parse size string to bytes
 */
function parseSize(size: string): number {
  const units: Record<string, number> = {
    b: 1,
    kb: 1024,
    mb: 1024 * 1024,
    gb: 1024 * 1024 * 1024,
  };
  
  const match = size.toLowerCase().match(/^(\d+)(b|kb|mb|gb)?$/);
  if (!match) return 1024 * 1024; // Default to 1MB
  
  const value = parseInt(match[1], 10);
  const unit = match[2] || 'b';
  return value * (units[unit] || 1);
}

// ═══════════════════════════════════════════════════════════════════════════════
// 4. ENHANCED SECURITY HEADERS
// ═══════════════════════════════════════════════════════════════════════════════

const helmetMiddleware = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://cdn.jsdelivr.net", "https://va.vercel-scripts.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https:", "https://cdn.jsdelivr.net", "https://va.vercel-scripts.com"],
      fontSrc: ["'self'", "https://cdn.jsdelivr.net"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
      frameAncestors: ["'none'"],
      reportUri: '/api/security/csp-report', // CSP violation reporting endpoint
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
  noSniff: true,
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  xssFilter: false, // Modern guidance: set to 0, rely on CSP
  crossOriginEmbedderPolicy: { policy: 'require-corp' },
  crossOriginOpenerPolicy: { policy: 'same-origin' },
  crossOriginResourcePolicy: { policy: 'same-origin' },
  originAgentCluster: true,
  // DISA STIG V-214950: X-Frame-Options header
  frameguard: {
    action: 'deny',
  },
});

/**
 * Enhanced security headers middleware
 */
export const enhancedSecurityHeaders = (req: Request, res: Response, next: NextFunction) => {
  helmetMiddleware(req, res, (err) => {
    if (err) return next(err);
    // DISA STIG V-214951: Permissions-Policy header
    res.setHeader(
      'Permissions-Policy',
      'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
    );
    next();
  });
};


// ═══════════════════════════════════════════════════════════════════════════════
// 5. IP-BASED RATE LIMITING
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * IP-based rate limiting middleware
 */
export const ipRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: 'Too Many Requests',
    message: 'Rate limit exceeded. Please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: Request) => ipKeyGenerator(req.ip || req.connection.remoteAddress || 'unknown'),
  skip: (req: Request) => {
    // Skip rate limiting for health checks
    return req.path === '/health';
  },
});

/**
 * Strict rate limiting for sensitive endpoints
 */
export const strictRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // Limit each IP to 10 requests per minute
  message: {
    error: 'Too Many Requests',
    message: 'Rate limit exceeded for sensitive endpoint. Please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: Request) => ipKeyGenerator(req.ip || req.connection.remoteAddress || 'unknown'),
});

// ═══════════════════════════════════════════════════════════════════════════════
// 6. INPUT VALIDATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number format
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,20}$/;
  return phoneRegex.test(phone);
}

/**
 * Validate URL format
 */
export function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Middleware to validate common input fields
 */
export const inputValidation = (req: Request, res: Response, next: NextFunction): void => {
  const { body } = req;

  // Skip validation if no body (e.g., GET requests)
  if (!body) {
    next();
    return;
  }

  // Validate email if present
  if (body.email && !isValidEmail(body.email)) {
    res.status(400).json({
      error: 'Validation Error',
      message: 'Invalid email format',
      requestId: req.id,
    });
    return;
  }

  // Validate phone if present
  if (body.phone && !isValidPhone(body.phone)) {
    res.status(400).json({
      error: 'Validation Error',
      message: 'Invalid phone number format',
      requestId: req.id,
    });
    return;
  }

  // Validate URL if present
  if (body.website && !isValidURL(body.website)) {
    res.status(400).json({
      error: 'Validation Error',
      message: 'Invalid URL format',
      requestId: req.id,
    });
    return;
  }

  next();
};

// ═══════════════════════════════════════════════════════════════════════════════
// 7. SECURITY LOGGING
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Log security events
 */
export function logSecurityEvent(
  type: 'SQL_INJECTION' | 'XSS' | 'CSRF' | 'RATE_LIMIT' | 'VALIDATION',
  req: Request,
  details: any = {}
): void {
  const securityData = {
    type,
    ip: req.ip || req.connection.remoteAddress,
    userAgent: req.headers['user-agent'],
    path: req.path,
    method: req.method,
    timestamp: new Date().toISOString(),
    ...details,
  };
  
  // This would integrate with the logger
  console.error('[SECURITY]', JSON.stringify(securityData));
}
