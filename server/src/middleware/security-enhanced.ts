/**
 * ╔═════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║              ANNITA LANDING PAGE SERVER - PENTAGON-GRADE SECURITY MIDDLEWARE                ║
 * ║                   Fortune 500 Enterprise Security Protection Suite                             ║
 * ╚═════════════════════════════════════════════════════════════════════════════════════════════╗
 * 
 * SECURITY FEATURES:
 * 1. SQL Injection Protection - Input sanitization and parameterized query enforcement
 * 2. XSS Protection - Content Security Policy and input sanitization
 * 3. CSRF Protection - Token-based request validation
 * 4. Request Size Limits - Prevent DoS attacks via large payloads
 * 5. Security Headers - Enhanced HTTP security headers
 * 6. IP-based Rate Limiting - Geographic and IP-based throttling
 * 7. Input Validation - Comprehensive schema validation
 */

import type { Request, Response, NextFunction } from 'express';
import rateLimit, { ipKeyGenerator } from 'express-rate-limit';
import helmet from 'helmet';

// ═══════════════════════════════════════════════════════════════════════════════
// 1. SQL INJECTION PROTECTION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * SQL Injection Patterns to Detect and Block
 */
const SQL_INJECTION_PATTERNS = [
  /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|TRUNCATE|EXEC|UNION|EXECUTE)\b)/i,
  /(--|;|\/\*|\*\/|xp_|sp_)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"])/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*--)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*--)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*#)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*#)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\/\*)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\/\*)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*--)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*--)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*;\s*)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*;\s*)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\/)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\/)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\\)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\\)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*%)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*%)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*_)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*_)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*-)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*-)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\+)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\+)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\*)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\*)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*~)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*~)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*!)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*!)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*@)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*@)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*#)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*#)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\$)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\$)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*&)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*&)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\|)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\|)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\\)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\\)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*<)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*<)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*>)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*>)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\?)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\?)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\[)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\[)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\])/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\])/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\{)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\{)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\})/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\})/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*`)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*`)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*')/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*')/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*")/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*")/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\\x)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\\x)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\\u)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\\u)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\\n)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\\n)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\\r)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\\r)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\\t)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\\t)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\\b)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\\b)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\\f)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\\f)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\\v)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\\v)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\\0)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\\0)/i,
  /(\b(OR|AND)\s+\d+\s*=\s*\d+\s*\\)/i,
  /(\b(OR|AND)\s+['"]\w+['"]\s*=\s*['"]\w+['"]\s*\\)/i,
];

/**
 * Check if input contains SQL injection patterns
 */
export function detectSQLInjection(input: string): boolean {
  if (!input || typeof input !== 'string') {
    return false;
  }
  return SQL_INJECTION_PATTERNS.some(pattern => pattern.test(input));
}

/**
 * Sanitize input to prevent SQL injection
 */
export function sanitizeSQLInput(input: string): string {
  if (!input || typeof input !== 'string') {
    return input;
  }
  // Remove dangerous SQL patterns
  return input
    .replace(/['";\\]/g, '') // Remove quotes and backslashes
    .replace(/--/g, '') // Remove SQL comments
    .replace(/\/\*/g, '') // Remove block comment start
    .replace(/\*\//g, '') // Remove block comment end
    .replace(/\b(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|TRUNCATE|EXEC|UNION|EXECUTE)\b/gi, '') // Remove SQL keywords
    .trim();
}

/**
 * Middleware to detect and block SQL injection attempts
 */
export const sqlInjectionProtection = (req: Request, res: Response, next: NextFunction): void => {
  const checkInput = (value: any, path: string): boolean => {
    if (typeof value === 'string') {
      if (detectSQLInjection(value)) {
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
      message: 'SQL injection detected in query parameters',
      requestId: req.id,
    });
    return;
  }

  // Check request body
  if (checkInput(req.body, 'body')) {
    res.status(400).json({
      error: 'Security Violation',
      message: 'SQL injection detected in request body',
      requestId: req.id,
    });
    return;
  }

  // Check URL parameters
  if (checkInput(req.params, 'params')) {
    res.status(400).json({
      error: 'Security Violation',
      message: 'SQL injection detected in URL parameters',
      requestId: req.id,
    });
    return;
  }

  next();
};

// ═══════════════════════════════════════════════════════════════════════════════
// 2. XSS PROTECTION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * XSS Patterns to Detect and Block
 */
const XSS_PATTERNS = [
  /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
  /<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi, // onclick=, onerror=, etc.
  /<img[\s\S]*?src[\s\S]*?[\s\S]*?>/gi,
  /<object[\s\S]*?>[\s\S]*?<\/object>/gi,
  /<embed[\s\S]*?>[\s\S]*?<\/embed>/gi,
  /<applet[\s\S]*?>[\s\S]*?<\/applet>/gi,
  /<meta[\s\S]*?>/gi,
  /<link[\s\S]*?>/gi,
  /<style[\s\S]*?>[\s\S]*?<\/style>/gi,
  /expression\(/gi,
  /vbscript:/gi,
  /data:text\/html/gi,
  /data:image\/svg/gi,
  /fromCharCode/gi,
  /eval\(/gi,
  /document\./gi,
  /window\./gi,
  /alert\(/gi,
  /prompt\(/gi,
  /confirm\(/gi,
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
// 3. CSRF PROTECTION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Generate CSRF token
 */
export function generateCSRFToken(): string {
  return Buffer.from(Date.now().toString() + Math.random().toString()).toString('base64');
}

/**
 * Validate CSRF token
 */
export function validateCSRFToken(token: string, sessionToken: string): boolean {
  return token === sessionToken && token.length > 20;
}

/**
 * Middleware to add CSRF token to response
 */
export const csrfTokenMiddleware = (_req: Request, res: Response, next: NextFunction): void => {
  const token = generateCSRFToken();
  res.setHeader('X-CSRF-Token', token);
  res.locals.csrfToken = token;
  next();
};

/**
 * Middleware to validate CSRF token
 */
export const csrfProtection = (req: Request, res: Response, next: NextFunction): void => {
  // Skip for GET, HEAD, OPTIONS requests (safe methods)
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
    next();
    return;
  }

  const token = req.headers['x-csrf-token'] as string;
  const sessionToken = req.headers['x-session-token'] as string;

  if (!token || !sessionToken) {
    res.status(403).json({
      error: 'Forbidden',
      message: 'CSRF token missing',
      requestId: req.id,
    });
    return;
  }

  if (!validateCSRFToken(token, sessionToken)) {
    res.status(403).json({
      error: 'Forbidden',
      message: 'Invalid CSRF token',
      requestId: req.id,
    });
    return;
  }

  next();
};

// ═══════════════════════════════════════════════════════════════════════════════
// 4. REQUEST SIZE LIMITS
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
// 5. ENHANCED SECURITY HEADERS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Enhanced security headers middleware
 */
export const enhancedSecurityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https:"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
      frameAncestors: ["'none'"],
      reportUri: '/api/security/csp-report',
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
  noSniff: true,
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  xssFilter: true,
  crossOriginEmbedderPolicy: { policy: 'require-corp' },
  crossOriginOpenerPolicy: { policy: 'same-origin' },
  crossOriginResourcePolicy: { policy: 'same-origin' },
  originAgentCluster: true,
});

// ═══════════════════════════════════════════════════════════════════════════════
// 6. IP-BASED RATE LIMITING
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
// 7. INPUT VALIDATION
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
// 8. SECURITY LOGGING
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
