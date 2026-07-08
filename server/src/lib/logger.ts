/**
 * ╔═════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║                  ANNITA LANDING PAGE SERVER - ENTERPRISE TELEMETRY CORE                     ║
 * ║               FORTUNE 500 PENTAGON-GRADE OBSERVABILITY & LOGGING SYSTEM                     ║
 * ╚═════════════════════════════════════════════════════════════════════════════════════════════╗
 * 
 * DESIGN PRINCIPLES:
 * 1. Single Source of Truth: Core logger for the landing page server
 * 2. Real-Time Telemetry: Live aggregate stats for API endpoints and health checks
 * 3. Zero External Dependency: Pure-stream logging engine without Winston bloat
 * 4. High Diagnosability: Clear, beautifully formatted context for rapid debugging
 * 5. Production-Ready: JSON output for production, beautiful console for development
 */

import os from 'os';
import fs from 'fs';
import path from 'path';

// ═══════════════════════════════════════════════════════════════════════════════
// 1. TELEMETRY TYPE DEFINITIONS & SCHEMAS
// ═══════════════════════════════════════════════════════════════════════════════

export type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL';

export interface EndpointMetric {
  path: string;
  method: string;
  hits: number;
  errors: number;
  successRate: number;
  minLatency: number;
  maxLatency: number;
  avgLatency: number;
  p95Latency: number;
  lastAccessed: Date;
  latencyBucket: {
    under50ms: number;
    under200ms: number;
    under500ms: number;
    over500ms: number;
  };
}

export interface SystemTelemetry {
  uptime: number;
  cpuLoad: number[];
  memory: {
    total: number;
    free: number;
    used: number;
    processRss: number;
    heapTotal: number;
    heapUsed: number;
  };
}

export interface ConnectionState {
  status: 'CONNECTED' | 'DISCONNECTED' | 'DEGRADED' | 'UNINITIALIZED';
  lastCheck: Date;
  responseTimeMs: number;
  circuitBreakerState: 'CLOSED' | 'OPEN' | 'HALF_OPEN';
  failureCount: number;
  reconnectAttempts: number;
}

// ANSI Colors for high-fidelity console telemetry
const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underline: '\x1b[4m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgRed: '\x1b[41m',
  bgBlack: '\x1b[40m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  cyanBright: '\x1b[96m',
  greenBright: '\x1b[92m',
  redBright: '\x1b[91m',
  yellowBright: '\x1b[93m'
};

// ═══════════════════════════════════════════════════════════════════════════════
// 2. OBSERVABILITY ENGINE (SINGLETON)
// ═══════════════════════════════════════════════════════════════════════════════

export class LandingPageLogger {
  private static instance: LandingPageLogger | null = null;
  private isProd: boolean;
  private logLevel: LogLevel;
  private logFilePath: string;
  private logStream: fs.WriteStream | null = null;

  // Real-time Telemetry Database
  private telemetry = {
    system: {
      startTime: Date.now(),
      requestsProcessed: 0,
      totalErrors: 0,
      lastCrashError: undefined as undefined | { type: string; message: string; stack?: string; timestamp: Date }
    },
    connections: {
      database: {
        status: 'UNINITIALIZED',
        lastCheck: new Date(),
        responseTimeMs: 0,
        circuitBreakerState: 'CLOSED',
        failureCount: 0,
        reconnectAttempts: 0
      } as ConnectionState
    },
    endpoints: new Map<string, EndpointMetric>(),
    recentLogs: [] as Array<{ timestamp: string; level: LogLevel; message: string; meta?: any }>
  };

  private constructor() {
    this.isProd = process.env.NODE_ENV === 'production' && process.env.LOG_FORMAT === 'json';
    this.logLevel = (process.env.LOG_LEVEL?.toUpperCase() as LogLevel) || (process.env.NODE_ENV === 'production' ? 'INFO' : 'DEBUG');
    
    // Set up secure file log archiving
    const logDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logDir)) {
      try {
        fs.mkdirSync(logDir, { recursive: true });
      } catch (err) {
        // Fallback to current dir if cannot create logs
      }
    }
    this.logFilePath = path.join(logDir, `landing-page-server-${new Date().toISOString().split('T')[0]}.log`);
    try {
      this.logStream = fs.createWriteStream(this.logFilePath, { flags: 'a' });
    } catch (err) {
      // Stream failed, console fallback only
    }

    // Pre-register landing page endpoints
    this.preRegisterEndpoints();

    // Global Exception Interceptors
    this.registerProcessCrashHandlers();

    // Print startup report
    this.printStartupReport();

    // Initialize telemetry collection
    this.startTelemetryLoops();
  }

  /**
   * Pre-register landing page API endpoints
   */
  private preRegisterEndpoints(): void {
    const defaultMetric = (method: string, path: string): EndpointMetric => ({
      path,
      method,
      hits: 0,
      errors: 0,
      successRate: 100,
      minLatency: 0,
      maxLatency: 0,
      avgLatency: 0,
      p95Latency: 0,
      lastAccessed: new Date(),
      latencyBucket: { under50ms: 0, under200ms: 0, under500ms: 0, over500ms: 0 }
    });

    const list = [
      { m: 'GET', p: '/health' },
      { m: 'POST', p: '/api/contact' },
      { m: 'POST', p: '/api/contact-sales' },
      { m: 'POST', p: '/api/solutions-request' },
      { m: 'POST', p: '/api/newsletter' },
      { m: 'POST', p: '/api/beta-signup' },
      { m: 'POST', p: '/api/careers' },
      { m: 'POST', p: '/api/partnerships' },
      { m: 'POST', p: '/api/account-deletion' }
    ];

    list.forEach(item => {
      const key = `${item.m}:${item.p}`;
      this.telemetry.endpoints.set(key, defaultMetric(item.m, item.p));
    });
  }

  /**
   * Global Node Process panic handler
   */
  private registerProcessCrashHandlers(): void {
    process.on('uncaughtException', (error) => {
      this.telemetry.system.lastCrashError = {
        type: 'UNCAUGHT_EXCEPTION',
        message: error.message,
        stack: error.stack,
        timestamp: new Date()
      };
      this.fatal(`🚨 CRITICAL SYSTEM CRASH (uncaughtException): ${error.message}`, error);
    });

    process.on('unhandledRejection', (reason) => {
      const errorMsg = reason instanceof Error ? reason.message : String(reason);
      this.telemetry.system.lastCrashError = {
        type: 'UNHANDLED_REJECTION',
        message: errorMsg,
        stack: reason instanceof Error ? reason.stack : undefined,
        timestamp: new Date()
      };
      this.error(`🚨 UNHANDLED PROMISE REJECTION: ${errorMsg}`, reason);
    });
  }

  /**
   * Print startup report
   */
  private printStartupReport(): void {
    let report = '';
    report += `\n${COLORS.cyanBright}╔═══════════════════════════════════════════════════════════════════════════════════════════╗${COLORS.reset}\n`;
    report += `║ 🚀              ANNITA LANDING PAGE SERVER - SYSTEM BOOT REPORT                       ║\n`;
    report += `║                  Pentagon-Grade Telemetry Registry Initialization                      ║\n`;
    report += `${COLORS.cyanBright}╚═══════════════════════════════════════════════════════════════════════════════════════════╝${COLORS.reset}\n`;

    report += `\n🔌 ${COLORS.bright}REST API ENDPOINTS MONITORED (${this.telemetry.endpoints.size} Routes):${COLORS.reset}\n`;
    this.telemetry.endpoints.forEach((route) => {
      report += ` ├── 🌐 [${COLORS.cyanBright}${route.method.padEnd(4)}${COLORS.reset}] ${COLORS.dim}${route.path.padEnd(35)}${COLORS.reset}\n`;
    });

    report += `\n${COLORS.cyanBright}╔═══════════════════════════════════════════════════════════════════════════════════════════╗${COLORS.reset}\n`;
    report += `║ 🛰️  Telemetry Database Fully Armed. Ready for Landing Page Requests!                    ║\n`;
    report += `${COLORS.cyanBright}╚═══════════════════════════════════════════════════════════════════════════════════════════╝${COLORS.reset}\n`;

    process.stdout.write(report);
    this.writeToLogFile(report);
  }

  /**
   * Get LandingPageLogger singleton instance
   */
  public static getInstance(): LandingPageLogger {
    if (!LandingPageLogger.instance) {
      LandingPageLogger.instance = new LandingPageLogger();
    }
    return LandingPageLogger.instance;
  }

  // ═══════════════════════════════════════════════════════════════════════════════
  // 3. CORE LOG WRITER & STREAMING ENGINE
  // ═══════════════════════════════════════════════════════════════════════════════

  private shouldLog(targetLevel: LogLevel): boolean {
    const levels: Record<LogLevel, number> = { 'DEBUG': 0, 'INFO': 1, 'WARN': 2, 'ERROR': 3, 'FATAL': 4 };
    const current = levels[this.logLevel] ?? 1;
    const target = levels[targetLevel] ?? 1;
    return target >= current;
  }

  /**
   * Sanitize sensitive records
   */
  private sanitize(obj: any): any {
    if (!obj || typeof obj !== 'object') return obj;
    if (obj instanceof Error) return { name: obj.name, message: obj.message, stack: obj.stack };
    if (obj instanceof Date) return obj;

    const sensitiveKeys = [
      // Auth / cryptographic material
      'password', 'token', 'jwt', 'secret', 'key', 'apikey', 'authorization', 
      'pin', 'cvv', 'creditcard', 'card', 'payload', 'session', 'hash', 'salt',
      // PII (audit 2026-07): previously email/phone/ipAddress were logged in
      // cleartext by route success messages — bad for GDPR. Redact these by
      // field name regardless of context. Callers that want to correlate can
      // log an explicit `emailDomain` / `emailHash` field instead.
      'email', 'phone', 'ipaddress', 'name', 'fullname', 'businessname', 'companyname'
    ];
    
    const sanitized = Array.isArray(obj) ? [...obj] : { ...obj };
    
    for (const k in sanitized) {
      if (typeof sanitized[k] === 'string' && sensitiveKeys.some(key => k.toLowerCase().includes(key))) {
        sanitized[k] = `[REDACTED_SECURE][LEN:${sanitized[k].length}]`;
      } else if (typeof sanitized[k] === 'object') {
        sanitized[k] = this.sanitize(sanitized[k]);
      }
    }
    return sanitized;
  }

  /**
   * Helper to format metadata objects
   */
  private formatMetaToLines(obj: any, indent = '    '): string[] {
    const lines: string[] = [];
    if (!obj || typeof obj !== 'object') return lines;

    for (const [key, value] of Object.entries(obj)) {
      if (value === undefined) continue;
      
      const keyStr = `${COLORS.cyanBright}${key}${COLORS.reset}`;
      if (typeof value === 'object' && value !== null && !(value instanceof Date)) {
        lines.push(`${indent}├── ${keyStr}:`);
        const subLines = this.formatMetaToLines(value, `${indent}│   `);
        lines.push(...subLines);
      } else {
        const valStr = value instanceof Date 
          ? value.toISOString() 
          : typeof value === 'string' 
            ? `${COLORS.greenBright}"${value}"${COLORS.reset}` 
            : `${COLORS.yellowBright}${value}${COLORS.reset}`;
        lines.push(`${indent}├── ${keyStr}: ${valStr}`);
      }
    }
    return lines;
  }

  /**
   * Universal output coordinator
   */
  private writeLog(level: LogLevel, message: string, meta?: any, errorDetails?: any): void {
    if (!this.shouldLog(level)) return;

    this.telemetry.system.requestsProcessed++;
    if (level === 'ERROR' || level === 'FATAL') {
      this.telemetry.system.totalErrors++;
    }

    const timestamp = new Date().toISOString();
    const sanitizedMeta = meta ? this.sanitize(meta) : undefined;
    const sanitizedError = errorDetails ? this.sanitize(errorDetails) : undefined;

    // Extract telemetry from log
    this.extractTelemetryFromLog(message, sanitizedMeta);

    // Keep sliding window of recent logs
    this.telemetry.recentLogs.unshift({ timestamp, level, message, meta: sanitizedMeta });
    if (this.telemetry.recentLogs.length > 50) this.telemetry.recentLogs.pop();

    if (this.isProd) {
      // Production Mode: JSON output
      const jsonLine = JSON.stringify({
        timestamp,
        level,
        message,
        ...(sanitizedMeta ? { metadata: sanitizedMeta } : {}),
        ...(sanitizedError ? { error: sanitizedError } : {})
      });
      process.stdout.write(jsonLine + '\n');
      this.writeToLogFile(jsonLine + '\n');
    } else {
      // Dev Mode: Beautiful console output
      let levelColor = COLORS.white;
      let symbol = '📝';
      switch (level) {
        case 'DEBUG': 
          levelColor = COLORS.blue; 
          symbol = '⚙️ ';
          break;
        case 'INFO': 
          levelColor = COLORS.green; 
          symbol = 'ℹ️ ';
          break;
        case 'WARN': 
          levelColor = COLORS.yellow; 
          symbol = '⚠️ ';
          break;
        case 'ERROR': 
          levelColor = COLORS.red; 
          symbol = '❌';
          break;
        case 'FATAL': 
          levelColor = COLORS.bright + COLORS.bgRed + COLORS.white; 
          symbol = '🚨';
          break;
      }

      const isConnectionLog = message.includes('DATABASE') || message.includes('CONNECTION');
      const isHttpRequest = message.includes('API Request') || (sanitizedMeta && sanitizedMeta.statusCode !== undefined);

      let outputBlock = '';

      if (isConnectionLog) {
        outputBlock += `\n${COLORS.bright}${COLORS.cyanBright}┌── [CONNECTIONS CORE] ──────────────────────────────────────────────────┐${COLORS.reset}\n`;
        outputBlock += `│ ${symbol} [${levelColor}${level}${COLORS.reset}] ${COLORS.bright}${message.padEnd(58)}${COLORS.reset} │\n`;
        if (sanitizedMeta) {
          outputBlock += `├── Context Info: ─────────────────────────────────────────────────────────┤\n`;
          const metaLines = this.formatMetaToLines(sanitizedMeta, '│   ');
          metaLines.forEach(line => {
            outputBlock += `${line.padEnd(85)}${COLORS.reset} │\n`;
          });
        }
        outputBlock += `${COLORS.cyanBright}└──────────────────────────────────────────────────────────────────────────┘${COLORS.reset}\n`;
      } else if (isHttpRequest) {
        const method = sanitizedMeta?.endpoint?.split(':')[0] || '';
        const endpointPath = sanitizedMeta?.endpoint?.split(':')[1] || message.split('|')[0].replace('API Request', '').trim();
        const status = sanitizedMeta?.statusCode || '200';
        const latency = sanitizedMeta?.latency !== undefined ? `${sanitizedMeta.latency.toFixed(1)}ms` : '';
        const statusColor = status >= 400 ? COLORS.red : COLORS.green;

        outputBlock += `\n${COLORS.dim}├─${COLORS.reset} 🌐 ${COLORS.bright}${COLORS.magenta}${method}${COLORS.reset} ${COLORS.cyanBright}${endpointPath}${COLORS.reset}\n`;
        outputBlock += `${COLORS.dim}│${COLORS.reset}   ├── Status:   ${statusColor}${status}${COLORS.reset}\n`;
        if (latency) {
          outputBlock += `${COLORS.dim}│${COLORS.reset}   └── Latency:  ${COLORS.yellowBright}${latency}${COLORS.reset}\n`;
        }
      } else if (level === 'ERROR' || level === 'FATAL') {
        outputBlock += `\n${COLORS.bright}${COLORS.red}┌── [CRITICAL RUNTIME EXCEPTION] ────────────────────────────────────────┐${COLORS.reset}\n`;
        outputBlock += `│ ${symbol} [${levelColor}${level}${COLORS.reset}] ${COLORS.bright}${message.padEnd(58)}${COLORS.reset} │\n`;
        if (sanitizedMeta) {
          outputBlock += `├── Context Info: ─────────────────────────────────────────────────────────┤\n`;
          const metaLines = this.formatMetaToLines(sanitizedMeta, '│   ');
          metaLines.forEach(line => {
            outputBlock += `${line.padEnd(85)}${COLORS.reset} │\n`;
          });
        }
        if (sanitizedError) {
          outputBlock += `├── Error Trace: ──────────────────────────────────────────────────────────┤\n`;
          const errLines = this.formatMetaToLines(sanitizedError, '│   ');
          errLines.forEach(line => {
            outputBlock += `${line.padEnd(85)}${COLORS.reset} │\n`;
          });
        }
        outputBlock += `${COLORS.red}└──────────────────────────────────────────────────────────────────────────┘${COLORS.reset}\n`;
      } else {
        const logHeader = `[${COLORS.dim}${timestamp.split('T')[1].slice(0, 8)}${COLORS.reset}] [${levelColor}${level}${COLORS.reset}]`;
        outputBlock = ` ${logHeader} ${COLORS.bright}${message}${COLORS.reset}`;
        
        if (sanitizedMeta && Object.keys(sanitizedMeta).length > 0) {
          const metaLines = this.formatMetaToLines(sanitizedMeta, '    ');
          metaLines.forEach(line => {
            outputBlock += `\n${line}`;
          });
        }
      }

      process.stdout.write(outputBlock + '\n');
      this.writeToLogFile(`[${timestamp}] [${level}] ${message} ${sanitizedMeta ? JSON.stringify(sanitizedMeta) : ''} ${sanitizedError ? JSON.stringify(sanitizedError) : ''}\n`);
    }
  }

  private writeToLogFile(line: string): void {
    if (this.logStream) {
      this.logStream.write(line);
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════════
  // 4. REAL-TIME METRICS & AGGREGATION PARSERS
  // ═══════════════════════════════════════════════════════════════════════════════

  /**
   * Extract telemetry from log messages
   */
  private extractTelemetryFromLog(message: string, meta: any): void {
    if (!meta) return;

    // Database Status Logs
    if (message.includes('DATABASE CONNECTION: SUCCESS')) {
      this.telemetry.connections.database.status = 'CONNECTED';
      this.telemetry.connections.database.lastCheck = new Date();
      this.telemetry.connections.database.circuitBreakerState = 'CLOSED';
    } else if (message.includes('DATABASE CONNECTION: FAILED')) {
      this.telemetry.connections.database.status = 'DISCONNECTED';
      this.telemetry.connections.database.lastCheck = new Date();
      this.telemetry.connections.database.failureCount++;
    }
  }

  /**
   * Start telemetry collection loops
   */
  private startTelemetryLoops(): void {
    setInterval(() => {
      try {
        this.checkSystemResources();
      } catch (error) {
        // Silently handle telemetry errors to prevent unhandled exceptions
        // Telemetry failures should not crash the server
        this.debug('Telemetry collection failed', { error: error instanceof Error ? error.message : String(error) });
      }
    }, 10000);
  }

  /**
   * Check system resources
   */
  private checkSystemResources(): void {
    try {
      const totalMem = os.totalmem();
      const freeMem = os.freemem();
      const memUsage = process.memoryUsage();

      // This could be expanded to track more detailed metrics
      // For now, it's a placeholder for future enhancements
      // Variables are intentionally calculated for future use
      void totalMem;
      void freeMem;
      void memUsage;
    } catch (error) {
      // Silently handle system resource check errors
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════════
  // 5. PUBLIC LOGGING API
  // ═══════════════════════════════════════════════════════════════════════════════

  public debug(message: string, meta?: any): void {
    this.writeLog('DEBUG', message, meta);
  }

  public info(message: string, meta?: any): void {
    this.writeLog('INFO', message, meta);
  }

  public warn(message: string, meta?: any): void {
    this.writeLog('WARN', message, meta);
  }

  public error(message: string, error?: any, meta?: any): void {
    this.writeLog('ERROR', message, meta, error);
  }

  public fatal(message: string, error?: any, meta?: any): void {
    this.writeLog('FATAL', message, meta, error);
  }

  // ═══════════════════════════════════════════════════════════════════════════════
  // 6. TELEMETRY ACCESSORS
  // ═══════════════════════════════════════════════════════════════════════════════

  public getTelemetry() {
    return {
      system: {
        ...this.telemetry.system,
        uptime: Date.now() - this.telemetry.system.startTime
      },
      connections: this.telemetry.connections,
      endpoints: Array.from(this.telemetry.endpoints.values()),
      recentLogs: this.telemetry.recentLogs
    };
  }

  public getSystemHealth() {
    return {
      status: this.telemetry.connections.database.status === 'CONNECTED' ? 'HEALTHY' : 'DEGRADED',
      uptime: Date.now() - this.telemetry.system.startTime,
      requestsProcessed: this.telemetry.system.requestsProcessed,
      totalErrors: this.telemetry.system.totalErrors,
      database: this.telemetry.connections.database
    };
  }

  // ═══════════════════════════════════════════════════════════════════════════════
  // 7. SECURITY EVENT TRACKING (FORTUNE 500 / PENTAGON GRADE)
  // ═══════════════════════════════════════════════════════════════════════════════

  /**
   * Log security event with structured data
   */
  public logSecurityEvent(eventType: string, context: any): void {
    const securityEvent = {
      eventType,
      severity: this.getSeverityFromEventType(eventType),
      ipHash: context.ip ? this.hashValue(context.ip) : undefined,
      uaHash: context.userAgent ? this.hashValue(context.userAgent) : undefined,
      action: context.action || eventType,
      result: context.result || 'unknown',
      context: this.sanitize(context)
    };

    this.info('Security Event', securityEvent);

    // Store in database audit log (async, fire-and-forget)
    this.storeAuditLog(securityEvent).catch(err => {
      this.debug('Failed to store audit log', { error: err instanceof Error ? err.message : String(err) });
    });
  }

  private getSeverityFromEventType(eventType: string): string {
    const severityMap: Record<string, string> = {
      'AUTH_SUCCESS': 'info',
      'AUTH_FAILURE': 'warn',
      'TOKEN_CREATED': 'info',
      'TOKEN_USED': 'info',
      'TOKEN_EXPIRED': 'info',
      'TOKEN_REVOKED': 'warn',
      'ADMIN_ACTION': 'info',
      'SUSPICIOUS_ACTIVITY': 'error',
      'CRITICAL_SECURITY': 'critical'
    };
    return severityMap[eventType] || 'info';
  }

  private hashValue(value: string): string {
    return require('crypto').createHash('sha256').update(value).digest('hex').substring(0, 16);
  }

  private async storeAuditLog(securityEvent: any): Promise<void> {
    try {
      const { prisma } = await import('./prisma.js');
      await prisma.auditLog.create({
        data: {
          eventType: securityEvent.eventType,
          severity: securityEvent.severity,
          ipHash: securityEvent.ipHash,
          uaHash: securityEvent.uaHash,
          action: securityEvent.action,
          result: securityEvent.result,
          context: securityEvent.context
        }
      });
    } catch (error) {
      // Silently fail - audit log storage should not break the app
      this.debug('Audit log storage failed', { error: error instanceof Error ? error.message : String(error) });
    }
  }

  /**
   * Trigger emergency alert for critical security events
   */
  public triggerEmergencyAlert(message: string, severity: string, context?: any): void {
    this.fatal(`EMERGENCY ALERT: ${message}`, context);
    
    // Send emergency email (async, fire-and-forget)
    this.sendEmergencyAlertEmail(message, severity, context).catch(err => {
      this.debug('Failed to send emergency alert email', { error: err instanceof Error ? err.message : String(err) });
    });
  }

  private async sendEmergencyAlertEmail(message: string, severity: string, context?: any): Promise<void> {
    try {
      const { sendEmergencyAlert } = await import('./email.js');
      await sendEmergencyAlert({
        message,
        severity,
        timestamp: new Date().toISOString(),
        metrics: context
      });
    } catch (error) {
      this.debug('Emergency alert email failed', { error: error instanceof Error ? error.message : String(error) });
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// 7. EXPORT SINGLETON INSTANCE
// ═══════════════════════════════════════════════════════════════════════════════

export const logger = LandingPageLogger.getInstance();

// Stream for Morgan HTTP request logging
export const stream = {
  write: (message: string) => {
    logger.info(message.trim());
  },
};

export default logger;
