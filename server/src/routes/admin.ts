/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║          ANNITA LLC — ADMIN ROUTES (FORTUNE 500 / PENTAGON GRADE)          ║
 * ║          Secure admin dashboard with token-based authentication             ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import type { Request, Response } from 'express';
import { Router } from 'express';
import crypto from 'crypto';
import { prisma } from '../lib/prisma.js';
import { logger } from '../lib/logger.js';
import { config } from '../config/index.js';
import { sendAdminAccessEmail, sendAdminCodeEmail } from '../lib/email.js';

const router = Router();

// ============================================================================
// SECURITY CONSTANTS
// ============================================================================
const TOKEN_EXPIRY_MS = 15 * 60 * 1000; // 15 minutes
const TOKEN_ENTROPY_BYTES = 32; // 256-bit entropy

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Generate cryptographically secure random token
 */
function generateSecureToken(): string {
  return crypto.randomBytes(TOKEN_ENTROPY_BYTES).toString('hex');
}

/**
 * Create hash for IP address (for security tracking, not storage)
 */
function hashIp(ip: string): string {
  return crypto.createHash('sha256').update(ip).digest('hex').substring(0, 16);
}

/**
 * Create hash for user agent (for security tracking, not storage)
 */
function hashUserAgent(ua: string): string {
  return crypto.createHash('sha256').update(ua).digest('hex').substring(0, 16);
}

/**
 * Generate device fingerprint
 */
function generateFingerprint(ip: string, ua: string): string {
  const secret = process.env.ADMIN_TOKEN_SECRET || 'change-me-to-a-long-random-secret-min-32-chars';
  return crypto.createHmac('sha256', secret)
    .update(`${ip}:${ua}`)
    .digest('hex');
}

// ============================================================================
// ADMIN AUTHENTICATION MIDDLEWARE
// ============================================================================

interface AuthenticatedRequest extends Request {
  adminEmail?: string;
}

async function validateToken(req: AuthenticatedRequest, res: Response, next: Function): Promise<void> {
  const rawToken = req.params.token || req.headers['x-admin-token'];
  const token = (Array.isArray(rawToken) ? rawToken[0] : rawToken) as string | undefined;
  
  if (!token) {
    logger.warn('Admin access attempt without token', { ip: req.ip });
    res.status(401).json({ error: 'Token required' });
    return;
  }

  try {
    const adminToken = await prisma.adminToken.findUnique({
      where: { token }
    });

    if (!adminToken) {
      logger.warn('Invalid admin token used', { ip: req.ip, tokenHash: hashToken(token) });
      res.status(401).json({ error: 'Invalid token' });
      return;
    }

    if (adminToken.used) {
      logger.warn('Reuse of already-used admin token', { ip: req.ip, email: adminToken.email });
      res.status(401).json({ error: 'Token already used' });
      return;
    }

    if (new Date() > adminToken.expiresAt) {
      logger.warn('Expired admin token used', { ip: req.ip, email: adminToken.email });
      res.status(401).json({ error: 'Token expired' });
      return;
    }

    // Validate IP binding
    const currentIpHash = hashIp(req.ip || '');
    if (adminToken.ipHash && adminToken.ipHash !== currentIpHash) {
      logger.warn('Admin token used from different IP', { 
        ip: req.ip, 
        email: adminToken.email,
        expectedHash: adminToken.ipHash,
        actualHash: currentIpHash
      });
      res.status(401).json({ error: 'Token IP mismatch' });
      return;
    }

    // Validate user-agent binding
    const currentUaHash = hashUserAgent(req.get('user-agent') || '');
    if (adminToken.uaHash && adminToken.uaHash !== currentUaHash) {
      logger.warn('Admin token used from different browser', { 
        email: adminToken.email,
        expectedHash: adminToken.uaHash,
        actualHash: currentUaHash
      });
      res.status(401).json({ error: 'Token browser mismatch' });
      return;
    }

    // Validate device fingerprint
    const currentFingerprint = generateFingerprint(req.ip || '', req.get('user-agent') || '');
    if (adminToken.fingerprint && adminToken.fingerprint !== currentFingerprint) {
      logger.warn('Admin token device fingerprint mismatch', { 
        email: adminToken.email
      });
      res.status(401).json({ error: 'Device fingerprint mismatch' });
      return;
    }

    // Validate email is in the configured admin allowlist
    const allowedEmails = config.admin.allowedEmails;
    if (allowedEmails.length > 0 && !allowedEmails.includes(adminToken.email.toLowerCase())) {
      logger.warn('Admin token email not in allowed list', {
        email: adminToken.email,
        allowedList: allowedEmails
      });
      res.status(401).json({ error: 'Email not authorized' });
      return;
    }

    // Mark token as used (single-use)
    await prisma.adminToken.update({
      where: { id: adminToken.id },
      data: { used: true }
    });

    req.adminEmail = adminToken.email;
    
    // Log successful authentication
    logger.logSecurityEvent('AUTH_SUCCESS', {
      email: adminToken.email,
      ip: req.ip,
      result: 'success'
    });

    next();
  } catch (error) {
    logger.error('Token validation error', error);
    res.status(500).json({ error: 'Authentication failed' });
  }
}

function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex').substring(0, 16);
}

// ============================================================================
// ADMIN ROUTES
// ============================================================================

/**
 * POST /admin/token/request
 * Request a new admin access token (sent via email)
 */
router.post('/token/request', async (req: Request, res: Response) => {
  const requestId = req.id;
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    res.status(400).json({ error: 'Valid email required' });
    return;
  }

  const adminEmail = process.env.ADMIN_EMAIL || 'info@an-nita.com';
  
  // Only allow requests to the configured admin email
  if (email !== adminEmail) {
    logger.warn('Admin token request from non-admin email', { 
      requestId, 
      email,
      ip: req.ip 
    });
    res.status(403).json({ error: 'Unauthorized email' });
    return;
  }

  try {
    // Generate secure token
    const token = generateSecureToken();
    const expiresAt = new Date(Date.now() + TOKEN_EXPIRY_MS);
    const ipHash = hashIp(req.ip || '');
    const uaHash = hashUserAgent(req.get('user-agent') || '');
    const fingerprint = generateFingerprint(req.ip || '', req.get('user-agent') || '');

    // Store token in database
    await prisma.adminToken.create({
      data: {
        token,
        email,
        expiresAt,
        ipHash,
        uaHash,
        fingerprint
      }
    });

    logger.logSecurityEvent('TOKEN_CREATED', {
      email,
      ip: req.ip,
      result: 'success'
    });

    // Send email with secure link
    const accessUrl = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002'}/admin/status/${token}`;
    
    try {
      await sendAdminAccessEmail(email, accessUrl);
      logger.info('Admin access email sent', { email });
    } catch (emailError) {
      logger.error('Failed to send admin access email', emailError);
      // Continue anyway - token is created and can be retrieved from DB if needed
    }
    
    res.json({
      message: 'Access link sent to email',
      expiresIn: TOKEN_EXPIRY_MS / 1000
    });
  } catch (error) {
    logger.error('Failed to create admin token', { requestId, error });
    res.status(500).json({ error: 'Failed to create token' });
  }
});

/**
 * GET /admin/status/:token
 * Admin status dashboard (token-protected)
 */
router.get('/status/:token', validateToken, async (req: AuthenticatedRequest, res: Response) => {
  const requestId = req.id;

  try {
    const telemetry = logger.getTelemetry();
    const health = logger.getSystemHealth();
    
    // Get recent health reports
    const recentReports = await prisma.systemHealthReport.findMany({
      orderBy: { createdAt: 'desc' },
      take: 7
    });

    // Get active maintenance windows
    const activeMaintenance = await prisma.maintenanceWindow.findMany({
      where: { isActive: true },
      orderBy: { startTime: 'asc' }
    });

    // Get recent audit logs
    const recentAuditLogs = await prisma.auditLog.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20
    });

    res.json({
      system: {
        status: health.status,
        uptime: health.uptime,
        requestsProcessed: health.requestsProcessed,
        totalErrors: health.totalErrors,
        database: health.database
      },
      endpoints: telemetry.endpoints,
      recentReports,
      activeMaintenance,
      recentAuditLogs,
      adminEmail: req.adminEmail
    });
  } catch (error) {
    logger.error('Failed to fetch admin status', { requestId, error });
    res.status(500).json({ error: 'Failed to fetch status' });
  }
});

/**
 * POST /admin/maintenance/toggle
 * Toggle maintenance mode
 */
router.post('/maintenance/toggle', validateToken, async (req: AuthenticatedRequest, res: Response) => {
  const requestId = req.id;
  const { isActive, title, description, reason } = req.body;

  try {
    if (isActive) {
      // Activate maintenance mode
      const maintenance = await prisma.maintenanceWindow.create({
        data: {
          title: title || 'Scheduled Maintenance',
          description,
          startTime: new Date(),
          endTime: new Date(Date.now() + 2 * 60 * 60 * 1000), // Default 2 hours
          isActive: true,
          isScheduled: false,
          reason,
          createdBy: req.adminEmail
        }
      });

      logger.logSecurityEvent('ADMIN_ACTION', {
        email: req.adminEmail,
        action: 'MAINTENANCE_ON',
        result: 'success'
      });

      res.json({ message: 'Maintenance mode activated', maintenance });
    } else {
      // Deactivate all active maintenance
      await prisma.maintenanceWindow.updateMany({
        where: { isActive: true },
        data: { isActive: false }
      });

      logger.logSecurityEvent('ADMIN_ACTION', {
        email: req.adminEmail,
        action: 'MAINTENANCE_OFF',
        result: 'success'
      });

      res.json({ message: 'Maintenance mode deactivated' });
    }
  } catch (error) {
    logger.error('Failed to toggle maintenance mode', { requestId, error });
    res.status(500).json({ error: 'Failed to toggle maintenance' });
  }
});

/**
 * POST /admin/maintenance/schedule
 * Schedule a maintenance window
 */
router.post('/maintenance/schedule', validateToken, async (req: AuthenticatedRequest, res: Response) => {
  const requestId = req.id;
  const { title, description, startTime, endTime, reason } = req.body;

  if (!title || !startTime || !endTime) {
    res.status(400).json({ error: 'Title, startTime, and endTime required' });
    return;
  }

  try {
    const maintenance = await prisma.maintenanceWindow.create({
      data: {
        title,
        description,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        isActive: false,
        isScheduled: true,
        reason,
        createdBy: req.adminEmail
      }
    });

    logger.logSecurityEvent('ADMIN_ACTION', {
      email: req.adminEmail,
      action: 'MAINTENANCE_SCHEDULED',
      result: 'success',
      context: { maintenanceId: maintenance.id }
    });

    res.json({ message: 'Maintenance scheduled', maintenance });
  } catch (error) {
    logger.error('Failed to schedule maintenance', { requestId, error });
    res.status(500).json({ error: 'Failed to schedule maintenance' });
  }
});

/**
 * GET /admin/maintenance/current
 * Get current maintenance status
 */
router.get('/maintenance/current', validateToken, async (_req: AuthenticatedRequest, res: Response) => {
  try {
    const activeMaintenance = await prisma.maintenanceWindow.findMany({
      where: { isActive: true },
      orderBy: { startTime: 'asc' }
    });

    const scheduledMaintenance = await prisma.maintenanceWindow.findMany({
      where: { 
        isActive: false,
        isScheduled: true,
        startTime: { gte: new Date() }
      },
      orderBy: { startTime: 'asc' }
    });

    res.json({
      active: activeMaintenance,
      scheduled: scheduledMaintenance
    });
  } catch (error) {
    logger.error('Failed to fetch maintenance status', error);
    res.status(500).json({ error: 'Failed to fetch maintenance status' });
  }
});

// ============================================================================
// IN-MEMORY ADMIN CODE STORE (6-digit code flow)
// ============================================================================

const CODE_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes
const CODE_REQUEST_COOLDOWN_MS = 60 * 1000; // 1 request per 60s per IP

interface AdminCodeEntry {
  codeHash: string;
  ipHash: string;
  uaHash: string;
  fingerprint: string;
  expiresAt: number;
  used: boolean;
  failedAttempts: number;
}

const adminCodeStore = new Map<string, AdminCodeEntry>();
const codeRequestTimestamps = new Map<string, number>(); // ipHash -> last request timestamp

function cleanupExpiredCodes(): void {
  const now = Date.now();
  for (const [key, entry] of adminCodeStore) {
    if (now > entry.expiresAt || entry.used) {
      adminCodeStore.delete(key);
    }
  }
  for (const [ipHash, ts] of codeRequestTimestamps) {
    if (now - ts > CODE_REQUEST_COOLDOWN_MS) {
      codeRequestTimestamps.delete(ipHash);
    }
  }
}

// ============================================================================
// ADMIN CODE ROUTES (hidden 5-tap access flow)
// ============================================================================

/**
 * POST /admin/code/request
 * Auto-sends a 6-digit code to the configured admin email
 */
router.post('/code/request', async (req: Request, res: Response) => {
  const requestId = req.id;

  // Check emergency shutdown
  if (config.admin.emergencyShutdown) {
    logger.logSecurityEvent('ADMIN_CODE_REQUEST_BLOCKED', {
      ip: req.ip,
      result: 'blocked',
      reason: 'emergency_shutdown',
    });
    res.status(503).json({ error: 'Admin access temporarily disabled' });
    return;
  }

  const ipHash = hashIp(req.ip || '');
  const uaHash = hashUserAgent(req.get('user-agent') || '');
  const fingerprint = generateFingerprint(req.ip || '', req.get('user-agent') || '');

  cleanupExpiredCodes();

  // Rate limit: 1 request per 60s per IP
  const lastRequest = codeRequestTimestamps.get(ipHash);
  if (lastRequest && Date.now() - lastRequest < CODE_REQUEST_COOLDOWN_MS) {
    const waitMs = CODE_REQUEST_COOLDOWN_MS - (Date.now() - lastRequest);
    logger.warn('Admin code request rate limited', { requestId, ipHash, waitMs });
    res.status(429).json({ error: 'Too many requests. Please wait before trying again.', retryAfter: Math.ceil(waitMs / 1000) });
    return;
  }

  try {
    // Generate cryptographically random 6-digit code
    const code = crypto.randomInt(100000, 999999).toString();
    const codeHash = crypto.createHash('sha256').update(code).digest('hex');

    // Store in memory
    adminCodeStore.set(codeHash, {
      codeHash,
      ipHash,
      uaHash,
      fingerprint,
      expiresAt: Date.now() + CODE_EXPIRY_MS,
      used: false,
      failedAttempts: 0,
    });

    codeRequestTimestamps.set(ipHash, Date.now());

    // Send code via email
    const adminEmail = process.env.ADMIN_EMAIL || 'info@an-nita.com';
    try {
      await sendAdminCodeEmail(adminEmail, code);
      logger.info('Admin code email sent', { requestId, adminEmail });
    } catch (emailError) {
      logger.error('Failed to send admin code email', { requestId, error: emailError });
      adminCodeStore.delete(codeHash);
      codeRequestTimestamps.delete(ipHash);
      res.status(500).json({ error: 'Failed to send code' });
      return;
    }

    logger.logSecurityEvent('ADMIN_CODE_REQUESTED', {
      ip: req.ip,
      result: 'success',
    });

    res.json({ message: 'Code sent', expiresIn: CODE_EXPIRY_MS / 1000 });
  } catch (error) {
    logger.error('Failed to generate admin code', { requestId, error });
    res.status(500).json({ error: 'Failed to generate code' });
  }
});

/**
 * POST /admin/code/verify
 * Verify a 6-digit code and issue a dashboard access token
 */
router.post('/code/verify', async (req: Request, res: Response) => {
  const requestId = req.id;
  const { code } = req.body;

  if (!code || typeof code !== 'string' || !/^\d{6}$/.test(code)) {
    res.status(400).json({ error: 'Valid 6-digit code required' });
    return;
  }

  // Check emergency shutdown
  if (config.admin.emergencyShutdown) {
    res.status(503).json({ error: 'Admin access temporarily disabled' });
    return;
  }

  const ipHash = hashIp(req.ip || '');
  const uaHash = hashUserAgent(req.get('user-agent') || '');
  const fingerprint = generateFingerprint(req.ip || '', req.get('user-agent') || '');

  cleanupExpiredCodes();

  const codeHash = crypto.createHash('sha256').update(code).digest('hex');
  const entry = adminCodeStore.get(codeHash);

  if (!entry) {
    logger.logSecurityEvent('ADMIN_CODE_VERIFY_FAILED', {
      ip: req.ip,
      result: 'invalid_code',
    });
    res.status(401).json({ error: 'Invalid or expired code' });
    return;
  }

  if (entry.used) {
    logger.logSecurityEvent('ADMIN_CODE_VERIFY_FAILED', {
      ip: req.ip,
      result: 'code_already_used',
    });
    res.status(401).json({ error: 'Code already used' });
    return;
  }

  if (Date.now() > entry.expiresAt) {
    adminCodeStore.delete(codeHash);
    logger.logSecurityEvent('ADMIN_CODE_VERIFY_FAILED', {
      ip: req.ip,
      result: 'code_expired',
    });
    res.status(401).json({ error: 'Code expired' });
    return;
  }

  // Validate IP binding
  if (entry.ipHash !== ipHash) {
    logger.logSecurityEvent('ADMIN_CODE_VERIFY_FAILED', {
      ip: req.ip,
      result: 'ip_mismatch',
    });
    res.status(401).json({ error: 'Code not valid from this network' });
    return;
  }

  // Validate UA binding
  if (entry.uaHash !== uaHash) {
    logger.logSecurityEvent('ADMIN_CODE_VERIFY_FAILED', {
      ip: req.ip,
      result: 'ua_mismatch',
    });
    res.status(401).json({ error: 'Code not valid from this browser' });
    return;
  }

  // Validate fingerprint
  if (entry.fingerprint !== fingerprint) {
    logger.logSecurityEvent('ADMIN_CODE_VERIFY_FAILED', {
      ip: req.ip,
      result: 'fingerprint_mismatch',
    });
    res.status(401).json({ error: 'Device verification failed' });
    return;
  }

  // Code is valid — generate a dashboard token (reuses existing flow)
  try {
    entry.used = true;
    adminCodeStore.delete(codeHash);

    const token = generateSecureToken();
    const expiresAt = new Date(Date.now() + TOKEN_EXPIRY_MS);
    const adminEmail = process.env.ADMIN_EMAIL || 'info@an-nita.com';

    await prisma.adminToken.create({
      data: {
        token,
        email: adminEmail,
        expiresAt,
        ipHash,
        uaHash,
        fingerprint,
      },
    });

    logger.logSecurityEvent('ADMIN_CODE_VERIFY_SUCCESS', {
      email: adminEmail,
      ip: req.ip,
      result: 'success',
    });

    const redirectUrl = `/admin/dashboard?token=${token}`;
    res.json({ token, redirectUrl });
  } catch (error) {
    logger.error('Failed to issue admin token after code verification', { requestId, error });
    res.status(500).json({ error: 'Failed to issue access token' });
  }
});

export default router;
