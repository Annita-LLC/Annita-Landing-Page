// ============================================================================
// ANNITA LANDING PAGE SERVER - MAIN ENTRY POINT
// ============================================================================
// Fortune 500 / Pentagon Grade Server
// ============================================================================

import express from 'express';
import { config } from './config/index.js';
import { logger } from './lib/logger.js';
import { disconnectDatabase } from './lib/prisma.js';
import { initializeIpReputation } from './lib/ip-reputation.js';
import {
  rateLimiter,
  requestId,
  requestLogger,
  errorHandler,
} from './middleware/security.js';
import { corsMiddleware } from './middleware/cors.js';
import {
  xssProtection,
  requestSizeLimit,
  enhancedSecurityHeaders,
  ipRateLimit,
  inputValidation,
} from './middleware/security-enhanced.js';
import { botDetectionMiddleware } from './middleware/bot-detection.js';
import { strictHoneypotValidation } from './middleware/honeypot.js';
import { behavioralAnalysisMiddleware } from './middleware/behavioral-analysis.js';
import contactRoutes from './routes/contact.js';
import contactSalesRoutes from './routes/contact-sales.js';
import solutionsRequestRoutes from './routes/solutions-request.js';
import newsletterRoutes from './routes/newsletter.js';
import betaSignupRoutes from './routes/beta-signup.js';
import accountDeletionRoutes from './routes/account-deletion.js';
import careersRoutes from './routes/careers.js';
import partnershipsRoutes from './routes/partnerships.js';
import adminRoutes from './routes/admin.js';
import { setupSheetHeaders } from './lib/google-sheets.js';
import { startScheduler } from './jobs/scheduler.js';

// ============================================================================
// EXPRESS APPLICATION
// ============================================================================
const app = express();

// ============================================================================
// PROXY TRUST (must be set BEFORE any middleware that reads req.ip)
// ============================================================================
// We sit behind a reverse proxy (Railway / Envoy / Cloudflare). Without this,
// `req.ip` returns the proxy's address, not the real client IP — silently
// breaking every per-IP rate limiter, every IP-reputation record, and every
// `req.ip` log line. The second argument is the number of hops to trust.
// `1` is correct for a single-layer proxy (Railway). Increase only if you
// chain multiple trusted proxies (e.g. Cloudflare → Railway).
//   Reference: http://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', 1);

// ============================================================================
// INITIALIZATION
// ============================================================================
// Initialize IP reputation engine if enabled
if (config.features.enableIpReputation) {
  initializeIpReputation({
    enabled: true,
    suspiciousThreshold: config.ipReputation.suspiciousThreshold,
    maliciousThreshold: config.ipReputation.maliciousThreshold,
    blockThreshold: config.ipReputation.blockThreshold,
    windowMs: config.ipReputation.windowMs,
    decayRate: config.ipReputation.decayRate,
  });
  logger.info('IP reputation engine initialized', config.ipReputation);
}

// ============================================================================
// MIDDLEWARE
// ============================================================================
// Enhanced security headers (Pentagon-grade)
app.use(enhancedSecurityHeaders);

// X-Frame-Options for older browsers (helmet deprecates this but CSP not supported everywhere)
app.use((_req, res, next) => {
  res.setHeader('X-Frame-Options', 'DENY');
  next();
});

// CORS
app.use(corsMiddleware);

// Request ID
app.use(requestId);

// Request size limits (prevent DoS)
app.use(requestSizeLimit('1mb'));

// Body parsing
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// SQL Injection Protection
// REMOVED (audit 2026-07): The regex-based SQLi scanner was false-positive-prone
// (blocks legitimate messages like "I want to SELECT all products") and
// unnecessary since Prisma parameterizes all queries. SQL injection via
// Prisma is not possible.

// XSS Protection
app.use(xssProtection);

// Input Validation
app.use(inputValidation);

// Bot Detection (global)
app.use(botDetectionMiddleware);

// Request logging
app.use(requestLogger);

// IP-based Rate Limiting
app.use(ipRateLimit);

// Legacy rate limiter (keep for compatibility)
app.use(rateLimiter);

// ============================================================================
// ROUTES
// ============================================================================
// API routes with enhanced protection
if (config.features.enableBehavioralAnalysis) {
  const behavioralConfig = {
    minSecondsBetweenSubmissions: config.behavioralAnalysis.minSecondsBetweenSubmissions,
    maxSubmissionsPerMinute: config.behavioralAnalysis.maxSubmissionsPerMinute,
    maxFieldLength: config.behavioralAnalysis.maxFieldLength,
    enableSuspiciousPatternDetection: true,
  };

  app.use('/api/contact', strictHoneypotValidation, behavioralAnalysisMiddleware(behavioralConfig), contactRoutes);
  app.use('/api/contact-sales', strictHoneypotValidation, behavioralAnalysisMiddleware(behavioralConfig), contactSalesRoutes);
  app.use('/api/solutions-request', strictHoneypotValidation, behavioralAnalysisMiddleware(behavioralConfig), solutionsRequestRoutes);
  app.use('/api/newsletter', strictHoneypotValidation, behavioralAnalysisMiddleware(behavioralConfig), newsletterRoutes);
  app.use('/api/beta-signup', strictHoneypotValidation, behavioralAnalysisMiddleware(behavioralConfig), betaSignupRoutes);
  app.use('/api/account-deletion', strictHoneypotValidation, behavioralAnalysisMiddleware(behavioralConfig), accountDeletionRoutes);
  app.use('/api/careers', strictHoneypotValidation, behavioralAnalysisMiddleware(behavioralConfig), careersRoutes);
  app.use('/api/partnerships', strictHoneypotValidation, behavioralAnalysisMiddleware(behavioralConfig), partnershipsRoutes);
} else {
  // Apply honeypot validation even if behavioral analysis is disabled
  app.use('/api/contact', strictHoneypotValidation, contactRoutes);
  app.use('/api/contact-sales', strictHoneypotValidation, contactSalesRoutes);
  app.use('/api/solutions-request', strictHoneypotValidation, solutionsRequestRoutes);
  app.use('/api/newsletter', strictHoneypotValidation, newsletterRoutes);
  app.use('/api/beta-signup', strictHoneypotValidation, betaSignupRoutes);
  app.use('/api/account-deletion', strictHoneypotValidation, accountDeletionRoutes);
  app.use('/api/careers', strictHoneypotValidation, careersRoutes);
  app.use('/api/partnerships', strictHoneypotValidation, partnershipsRoutes);
}

// Admin routes (separate from public API, with token-based authentication)
app.use('/admin', adminRoutes);

// Health check endpoint with telemetry
app.get('/health', (_req, res) => {
  const health = logger.getSystemHealth();
  res.status(200).json({
    status: health.status,
    timestamp: new Date().toISOString(),
    uptime: health.uptime,
    environment: process.env.NODE_ENV,
    requestsProcessed: health.requestsProcessed,
    totalErrors: health.totalErrors,
    database: {
      status: health.database.status,
      circuitBreakerState: health.database.circuitBreakerState,
      failureCount: health.database.failureCount,
      lastCheck: health.database.lastCheck
    }
  });
});

// CSP violation reporting endpoint (DISA STIG V-214949)
app.post('/api/security/csp-report', express.json({ type: 'application/csp-report' }), (req, res) => {
  logger.warn('CSP violation reported', {
    userAgent: req.get('user-agent'),
    ip: req.ip,
    report: req.body
  });
  res.status(204).send();
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: `Route ${req.method} ${req.path} not found`,
    requestId: req.id,
  });
});

// ============================================================================
// ERROR HANDLING
// ============================================================================
app.use(errorHandler);

// ============================================================================
// START SCHEDULED JOB SYSTEM
// ============================================================================
startScheduler();

// ============================================================================
// SERVER STARTUP
// ============================================================================
const server = app.listen(config.server.port, config.server.host, () => {
  logger.info('Annita Landing Page Server started', {
    port: config.server.port,
    host: config.server.host,
    environment: config.env.nodeEnv,
    pid: process.pid,
  });

  // Write column headers to each Google Sheet tab on startup (safe to re-run)
  setupSheetHeaders().catch(err => {
    logger.error('Failed to set up Google Sheet headers on startup', {
      error: err instanceof Error ? err.message : String(err),
    });
  });
});

// ============================================================================
// GRACEFUL SHUTDOWN
// ============================================================================
const gracefulShutdown = async (signal: string) => {
  logger.info(`${signal} received, starting graceful shutdown...`);

  // Stop accepting new connections
  server.close(async () => {
    logger.info('HTTP server closed');

    // Close database connection
    await disconnectDatabase();

    logger.info('Graceful shutdown completed');
    process.exit(0);
  });

  // Force shutdown after 10 seconds
  setTimeout(() => {
    logger.error('Forced shutdown after timeout');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  logger.error('Uncaught exception', { error: error.message, stack: error.stack });
  // Don't shutdown on uncaught exceptions in production to allow recovery
  if (config.env.nodeEnv !== 'production') {
    gracefulShutdown('uncaughtException');
  }
});

// Handle unhandled promise rejections
// Note: Logger already has a handler for this that logs the error
// We don't need to shutdown on every unhandled rejection in production
process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled promise rejection', { reason: reason instanceof Error ? reason.message : String(reason), promise });
  // Only shutdown in development for debugging
  if (config.env.nodeEnv !== 'production') {
    gracefulShutdown('unhandledRejection');
  }
});

export default app;
