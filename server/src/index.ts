// ============================================================================
// ANNITA LANDING PAGE SERVER - MAIN ENTRY POINT
// ============================================================================
// Fortune 500 / Pentagon Grade Server
// ============================================================================

import express from 'express';
import { config } from './config/index.js';
import { logger } from './lib/logger.js';
import { disconnectDatabase } from './lib/database.js';
import {
  rateLimiter,
  requestId,
  requestLogger,
  errorHandler,
} from './middleware/security.js';
import { corsMiddleware } from './middleware/cors.js';
import {
  sqlInjectionProtection,
  xssProtection,
  csrfTokenMiddleware,
  requestSizeLimit,
  enhancedSecurityHeaders,
  ipRateLimit,
  inputValidation,
} from './middleware/security-enhanced.js';

// ============================================================================
// EXPRESS APPLICATION
// ============================================================================
const app = express();

// ============================================================================
// MIDDLEWARE
// ============================================================================
// Enhanced security headers (Pentagon-grade)
app.use(enhancedSecurityHeaders);

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
app.use(sqlInjectionProtection);

// XSS Protection
app.use(xssProtection);

// Input Validation
app.use(inputValidation);

// CSRF Token Generation
app.use(csrfTokenMiddleware);

// Request logging
app.use(requestLogger);

// IP-based Rate Limiting
app.use(ipRateLimit);

// Legacy rate limiter (keep for compatibility)
app.use(rateLimiter);

// ============================================================================
// ROUTES
// ============================================================================
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
// SERVER STARTUP
// ============================================================================
const server = app.listen(config.server.port, config.server.host, () => {
  logger.info('Annita Landing Page Server started', {
    port: config.server.port,
    host: config.server.host,
    environment: config.env.nodeEnv,
    pid: process.pid,
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
  gracefulShutdown('uncaughtException');
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled promise rejection', { reason, promise });
  gracefulShutdown('unhandledRejection');
});

export default app;
