// ============================================================================
// ANNITA LANDING PAGE SERVER - MAIN ENTRY POINT
// ============================================================================
// Fortune 500 / Pentagon Grade Server
// ============================================================================

import express from 'express';
import os from 'os';
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
import downloadNotifyRoutes from './routes/download-notify.js';
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
  app.use('/api/download-notify', strictHoneypotValidation, behavioralAnalysisMiddleware(behavioralConfig), downloadNotifyRoutes);
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
  app.use('/api/download-notify', strictHoneypotValidation, downloadNotifyRoutes);
}

// Admin routes (separate from public API, with token-based authentication)
app.use('/admin', adminRoutes);

// Health check endpoint with Fortune 500 Pentagon-grade debugging
app.get('/health', async (req, res) => {
  const startTime = Date.now();
  const requestId = req.id || 'unknown';
  const checkTimestamp = new Date().toISOString();
  
  logger.debug('Health check initiated', { requestId, path: req.path, timestamp: checkTimestamp });

  try {
    const health = logger.getSystemHealth();
    const telemetry = logger.getTelemetry();
    
    // Perform active database connection check with detailed metrics
    let dbCheckResult = { connected: false, responseTime: 0, error: null as string | null, queryCount: 0 };
    try {
      const dbStart = Date.now();
      const { prisma } = await import('./lib/prisma.js');
      await prisma.$queryRaw`SELECT 1 as health_check`;
      dbCheckResult.responseTime = Date.now() - dbStart;
      dbCheckResult.connected = true;
      
      // Get connection pool stats if available
      try {
        const poolStats = await prisma.$queryRaw`SELECT count(*) as active_connections FROM pg_stat_activity WHERE state = 'active'`;
        dbCheckResult.queryCount = Array.isArray(poolStats) && poolStats[0] ? Number(poolStats[0].active_connections) : 0;
      } catch {
        // Pool stats query failed, continue without it
      }
      
      logger.debug('Database health check passed', { requestId, responseTime: dbCheckResult.responseTime, activeConnections: dbCheckResult.queryCount });
    } catch (dbError) {
      dbCheckResult.error = dbError instanceof Error ? dbError.message : String(dbError);
      logger.error('Database health check failed', { requestId, error: dbCheckResult.error, errorType: dbError instanceof Error ? dbError.constructor.name : 'Unknown' });
    }

    // Comprehensive memory analysis
    const memoryUsage = process.memoryUsage();
    const memoryPercent = (memoryUsage.heapUsed / memoryUsage.heapTotal) * 100;
    const totalSystemMemory = os.totalmem();
    const freeSystemMemory = os.freemem();
    const systemMemoryPercent = ((totalSystemMemory - freeSystemMemory) / totalSystemMemory) * 100;

    // Detailed CPU metrics
    const cpuLoad = process.cpuUsage();
    const cpuCores = os.cpus().length;
    const cpuUsagePercent = (cpuLoad.user + cpuLoad.system) / 1000000; // Convert to seconds

    // Event loop lag detection
    let eventLoopLag = 0;
    const eventLoopStart = process.hrtime();
    await new Promise(resolve => setImmediate(resolve));
    const eventLoopEnd = process.hrtime(eventLoopStart);
    eventLoopLag = eventLoopEnd[0] * 1000 + eventLoopEnd[1] / 1000000;

    // Environment configuration validation
    const configValidation = {
      nodeEnv: process.env.NODE_ENV || 'NOT_SET',
      port: process.env.PORT || 'NOT_SET',
      databaseUrlSet: !!process.env.DATABASE_URL,
      databaseUrlLength: process.env.DATABASE_URL?.length || 0,
      logLevel: process.env.LOG_LEVEL || 'NOT_SET',
      corsOrigin: process.env.CORS_ORIGIN || 'NOT_SET',
    };

    // Dependency health checks
    const dependencyChecks = {
      prisma: { status: 'UNKNOWN', version: '7.8.0' },
      express: { status: 'UNKNOWN', version: '4.21.2' },
    };

    try {
      const { prisma } = await import('./lib/prisma.js');
      dependencyChecks.prisma.status = 'OK';
    } catch {
      dependencyChecks.prisma.status = 'ERROR';
    }

    // Endpoint performance metrics
    const endpointMetrics = telemetry.endpoints.map(ep => ({
      path: ep.path,
      method: ep.method,
      hits: ep.hits,
      errors: ep.errors,
      successRate: ep.successRate.toFixed(2) + '%',
      avgLatency: ep.avgLatency.toFixed(2) + 'ms',
      p95Latency: ep.p95Latency.toFixed(2) + 'ms',
      lastAccessed: ep.lastAccessed.toISOString(),
    }));

    const healthResponse = {
      status: dbCheckResult.connected ? health.status : 'UNHEALTHY',
      timestamp: checkTimestamp,
      uptime: health.uptime,
      uptimeFormatted: formatUptime(health.uptime),
      environment: process.env.NODE_ENV,
      requestId,
      checks: {
        database: {
          status: dbCheckResult.connected ? 'UP' : 'DOWN',
          responseTime: dbCheckResult.responseTime,
          responseTimeFormatted: `${dbCheckResult.responseTime}ms`,
          circuitBreakerState: health.database.circuitBreakerState,
          failureCount: health.database.failureCount,
          reconnectAttempts: health.database.reconnectAttempts,
          lastCheck: health.database.lastCheck,
          activeConnections: dbCheckResult.queryCount,
          error: dbCheckResult.error
        },
        memory: {
          heapUsed: `${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`,
          heapTotal: `${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`,
          rss: `${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB`,
          heapPercent: `${memoryPercent.toFixed(2)}%`,
          external: `${(memoryUsage.external / 1024 / 1024).toFixed(2)} MB`,
          arrayBuffers: `${(memoryUsage.arrayBuffers / 1024 / 1024).toFixed(2)} MB`,
          systemTotal: `${(totalSystemMemory / 1024 / 1024 / 1024).toFixed(2)} GB`,
          systemFree: `${(freeSystemMemory / 1024 / 1024 / 1024).toFixed(2)} GB`,
          systemUsedPercent: `${systemMemoryPercent.toFixed(2)}%`,
          memoryPressure: systemMemoryPercent > 80 ? 'HIGH' : systemMemoryPercent > 60 ? 'MEDIUM' : 'LOW'
        },
        cpu: {
          userCpuTime: `${(cpuLoad.user / 1000000).toFixed(2)}s`,
          systemCpuTime: `${(cpuLoad.system / 1000000).toFixed(2)}s`,
          cores: cpuCores,
          estimatedUsage: `${cpuUsagePercent.toFixed(2)}%`,
          loadAverage: os.loadavg ? os.loadavg().map((l: number) => l.toFixed(2)) : 'N/A'
        },
        eventLoop: {
          lagMs: eventLoopLag.toFixed(2),
          status: eventLoopLag > 100 ? 'SLOW' : eventLoopLag > 50 ? 'DEGRADED' : 'HEALTHY'
        },
        dependencies: dependencyChecks,
        configuration: configValidation
      },
      metrics: {
        requestsProcessed: health.requestsProcessed,
        totalErrors: health.totalErrors,
        errorRate: health.requestsProcessed > 0 ? ((health.totalErrors / health.requestsProcessed) * 100).toFixed(2) + '%' : '0%',
        recentLogs: telemetry.recentLogs.slice(0, 5).map(log => ({
          timestamp: log.timestamp,
          level: log.level,
          message: log.message.substring(0, 100)
        }))
      },
      endpoints: endpointMetrics,
      responseTime: Date.now() - startTime,
      responseTimeFormatted: `${Date.now() - startTime}ms`
    };

    const statusCode = dbCheckResult.connected ? 200 : 503;
    res.status(statusCode).json(healthResponse);
    
    logger.debug('Health check completed', { 
      requestId, 
      statusCode, 
      responseTime: healthResponse.responseTime,
      dbStatus: healthResponse.checks.database.status,
      memoryPressure: healthResponse.checks.memory.memoryPressure,
      eventLoopStatus: healthResponse.checks.eventLoop.status
    });

  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;
    const errorName = error instanceof Error ? error.constructor.name : 'Unknown';
    
    logger.error('Health check catastrophic failure', { 
      requestId, 
      error: errorMsg, 
      errorName,
      stack: errorStack,
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage()
    });
    
    res.status(500).json({
      status: 'CRITICAL_FAILURE',
      timestamp: new Date().toISOString(),
      requestId,
      error: errorMsg,
      errorName,
      responseTime: Date.now() - startTime,
      system: {
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        platform: process.platform,
        nodeVersion: process.version,
        pid: process.pid
      }
    });
  }
});

function formatUptime(seconds: number): string {
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
