/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║          ANNITA LLC — SCHEDULED JOB SYSTEM                                     ║
 * ║          Cron-based tasks for health reports, maintenance, GDPR retention      ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { logger } from '../lib/logger.js';
import { collectMetrics, storeHealthReport } from '../lib/health-report.js';
import { sendDailyHealthReport, sendWeeklyHealthReport } from '../lib/email.js';
import { prisma } from '../lib/prisma.js';
import { setMaintenanceMode } from '../middleware/maintenance.js';

// ============================================================================
// CONFIGURATION
// ============================================================================

const REPORT_TIME = process.env.ADMIN_REPORT_TIME || '09:00';
const REPORT_TIMEZONE = process.env.ADMIN_REPORT_TIMEZONE || 'UTC';
// MAINTENANCE_DAY env var reserved for future named-day scheduling (currently uses getDay() integer)
const MAINTENANCE_TIME = process.env.MAINTENANCE_SCHEDULE_TIME || '02:00';

// ============================================================================
// SCHEDULED JOBS
// ============================================================================

/**
 * Daily health report job (runs at 9 AM)
 */
async function dailyHealthReportJob(): Promise<void> {
  try {
    logger.info('Starting daily health report job');
    
    const telemetry = logger.getTelemetry();
    const reportData = collectMetrics(telemetry);
    reportData.reportType = 'daily';
    
    await storeHealthReport(reportData, 'daily');
    await sendDailyHealthReport(reportData);
    
    logger.info('Daily health report sent successfully');
  } catch (error) {
    logger.error('Daily health report job failed', error);
  }
}

/**
 * Weekly health report job (runs Saturday at 9 AM)
 */
async function weeklyHealthReportJob(): Promise<void> {
  try {
    logger.info('Starting weekly health report job');
    
    const telemetry = logger.getTelemetry();
    const reportData = collectMetrics(telemetry);
    reportData.reportType = 'weekly';
    
    // Aggregate 7-day trends and attach to reportData for the weekly email template
    const lastWeekReports = await prisma.systemHealthReport.findMany({
      where: {
        reportType: 'daily',
        createdAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        }
      },
      orderBy: { createdAt: 'asc' }
    });

    // Attach trend arrays so the email template can render 7-day sparklines
    reportData.requestTrend = lastWeekReports.map(r => r.totalRequests);
    reportData.errorTrend   = lastWeekReports.map(r => r.totalErrors);

    
    await storeHealthReport(reportData, 'weekly');
    await sendWeeklyHealthReport(reportData);
    
    logger.info('Weekly health report sent successfully');
  } catch (error) {
    logger.error('Weekly health report job failed', error);
  }
}

/**
 * Maintenance window activation job (runs Sunday at scheduled time)
 */
async function maintenanceActivationJob(): Promise<void> {
  try {
    logger.info('Checking for scheduled maintenance windows');
    
    const now = new Date();
    const scheduledWindows = await prisma.maintenanceWindow.findMany({
      where: {
        isScheduled: true,
        isActive: false,
        startTime: {
          lte: now
        },
        endTime: {
          gte: now
        }
      }
    });
    
    for (const window of scheduledWindows) {
      await prisma.maintenanceWindow.update({
        where: { id: window.id },
        data: { isActive: true }
      });
      
      setMaintenanceMode(true, window.title, window.endTime);
      
      logger.logSecurityEvent('ADMIN_ACTION', {
        action: 'MAINTENANCE_AUTO_ACTIVATED',
        result: 'success',
        context: { windowId: window.id, title: window.title }
      });
    }
    
    if (scheduledWindows.length > 0) {
      logger.info(`Activated ${scheduledWindows.length} maintenance windows`);
    }
  } catch (error) {
    logger.error('Maintenance activation job failed', error);
  }
}

/**
 * Maintenance window deactivation job (runs every minute)
 */
async function maintenanceDeactivationJob(): Promise<void> {
  try {
    const now = new Date();
    const expiredWindows = await prisma.maintenanceWindow.findMany({
      where: {
        isActive: true,
        endTime: {
          lt: now
        }
      }
    });
    
    for (const window of expiredWindows) {
      await prisma.maintenanceWindow.update({
        where: { id: window.id },
        data: { isActive: false }
      });
      
      logger.logSecurityEvent('ADMIN_ACTION', {
        action: 'MAINTENANCE_AUTO_DEACTIVATED',
        result: 'success',
        context: { windowId: window.id, title: window.title }
      });
    }
    
    if (expiredWindows.length > 0) {
      setMaintenanceMode(false);
      logger.info(`Deactivated ${expiredWindows.length} expired maintenance windows`);
    }
  } catch (error) {
    logger.error('Maintenance deactivation job failed', error);
  }
}

/**
 * GDPR Article 17 — Data Retention & Auto-Purge Job (runs nightly at 2 AM)
 *
 * 1. Purges completed/rejected deletion requests older than 90 days, clearing
 *    ALL PII from those rows (email, reason, ipAddress, userAgent,
 *    alternativeContact). The row ID + timestamps are preserved for the audit
 *    log, but personal data is scrubbed.
 *
 * 2. Flags pending requests verified > 30 days ago as overdue so an
 *    admin can investigate. The 30-day SLA clock starts at verifiedAt.
 */
async function gdprRetentionJob(): Promise<void> {
  try {
    logger.info('Starting GDPR retention and purge job');

    // ── 1. Purge completed/rejected requests > 90 days ──────────────────────
    const ninetyDaysAgo = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
    const staleRequests = await prisma.accountDeletionRequest.findMany({
      where: {
        status: { in: ['completed', 'rejected'] },
        updatedAt: { lt: ninetyDaysAgo },
      },
      select: { id: true },
    });

    for (const req of staleRequests) {
      await prisma.accountDeletionRequest.update({
        where: { id: req.id },
        data: {
          email: '',
          reason: '',
          alternativeContact: null,
          ipAddress: null,
          userAgent: null,
          verificationToken: null,
          adminNotes: null,
        },
      });

      logger.info('GDPR purge: scrubbed PII from completed deletion request', {
        deletionId: req.id,
      });
    }

    if (staleRequests.length > 0) {
      logger.info('GDPR purge completed', { purgedCount: staleRequests.length });
    }

    // ── 2. Flag overdue pending requests (>30 days since verification) ───────
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const overdue = await prisma.accountDeletionRequest.updateMany({
      where: {
        status: 'pending',
        verifiedAt: { lt: thirtyDaysAgo },
      },
      data: {
        adminNotes: `[AUTO-FLAGGED ${new Date().toISOString()}] Overdue: verified >30 days ago without processing.`,
      },
    });

    if (overdue.count > 0) {
      logger.warn('GDPR retention: overdue deletion requests flagged', {
        overdueCount: overdue.count,
      });
    }
  } catch (error) {
    logger.error('GDPR retention job failed', error);
  }
}
// ============================================================================

let schedulerIntervals: NodeJS.Timeout[] = [];

export function startScheduler(): void {
  logger.info('Starting scheduled job system');
  
  // Calculate next run times (for log display only)
  void calculateNextRunTime(REPORT_TIME, REPORT_TIMEZONE);
  void calculateNextRunTime(REPORT_TIME, REPORT_TIMEZONE, 6); // Saturday = 6
  void calculateNextRunTime(MAINTENANCE_TIME, REPORT_TIMEZONE, 0); // Sunday = 0
  
  // Schedule daily health report (every day at 9 AM)
  const dailyInterval = setInterval(() => {
    const now = new Date();
    const scheduledTime = parseTime(REPORT_TIME, REPORT_TIMEZONE);
    if (isTimeMatch(now, scheduledTime)) {
      dailyHealthReportJob();
    }
  }, 60000); // Check every minute
  schedulerIntervals.push(dailyInterval);
  
  // Schedule weekly health report (Saturday at 9 AM)
  const weeklyInterval = setInterval(() => {
    const now = new Date();
    if (now.getDay() === 6) { // Saturday
      const scheduledTime = parseTime(REPORT_TIME, REPORT_TIMEZONE);
      if (isTimeMatch(now, scheduledTime)) {
        weeklyHealthReportJob();
      }
    }
  }, 60000);
  schedulerIntervals.push(weeklyInterval);
  
  // Schedule maintenance activation (every minute — checks DB for windows where startTime <= now)
  const maintenanceInterval = setInterval(() => {
    maintenanceActivationJob();
  }, 60000);
  schedulerIntervals.push(maintenanceInterval);
  
  // Schedule maintenance deactivation (every minute)
  const deactivationInterval = setInterval(() => {
    maintenanceDeactivationJob();
  }, 60000);
  schedulerIntervals.push(deactivationInterval);
  
  logger.info('Scheduled job system started', {
    dailyReport: REPORT_TIME,
    weeklyReport: 'Saturday ' + REPORT_TIME,
    maintenance: 'Every minute (DB-driven activation/deactivation)'
  });
}

export function stopScheduler(): void {
  logger.info('Stopping scheduled job system');
  schedulerIntervals.forEach(interval => clearInterval(interval));
  schedulerIntervals = [];
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function parseTime(timeStr: string, timezone: string): Date {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const now = new Date();
  const tz = timezone || 'UTC';
  const scheduled = new Date(now.toLocaleString('en-US', { timeZone: tz }));
  scheduled.setHours(hours, minutes, 0, 0);
  return scheduled;
}

function isTimeMatch(now: Date, scheduled: Date): boolean {
  return now.getHours() === scheduled.getHours() &&
         now.getMinutes() === scheduled.getMinutes() &&
         now.getSeconds() === 0;
}

function calculateNextRunTime(timeStr: string, timezone: string, dayOfWeek?: number): Date {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const now = new Date();
  const tz = timezone || 'UTC';
  const next = new Date(now.toLocaleString('en-US', { timeZone: tz }));
  
  next.setHours(hours, minutes, 0, 0);
  
  if (dayOfWeek !== undefined) {
    const currentDay = now.getDay();
    const daysUntil = (dayOfWeek - currentDay + 7) % 7;
    if (daysUntil === 0 && next <= now) {
      next.setDate(next.getDate() + 7);
    } else {
      next.setDate(next.getDate() + daysUntil);
    }
  } else if (next <= now) {
    next.setDate(next.getDate() + 1);
  }
  
  return next;
}
