/**
 * ╔═════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║              ANNITA LANDING PAGE SERVER - BOT DETECTION MIDDLEWARE                          ║
 * ║                   Fortune 500 / Pentagon Grade Bot Protection                                ║
 * ╚═════════════════════════════════════════════════════════════════════════════════════════════╗
 * 
 * FEATURES:
 * 1. Malicious User-Agent pattern detection
 * 2. Cloudflare threat score integration
 * 3. Legitimate crawler allow-listing
 * 4. Feature flag controlled activation
 * 5. IP reputation integration
 */

import type { Request, Response, NextFunction } from 'express';
import { logger } from '../lib/logger.js';
import { getIpReputationEngine } from '../lib/ip-reputation.js';
import { config } from '../config/index.js';

// ============================================================================
// MALICIOUS BOT USER-AGENT PATTERNS
// ============================================================================

const MALICIOUS_BOT_PATTERNS = [
  // Common attack tools
  /curl/i,
  /wget/i,
  /python-requests/i,
  /python\/urllib/i,
  /scrapy/i,
  /apache-httpclient/i,
  /java\/\d+\.\d+/i,
  /go-http-client/i,
  /libwww-perl/i,
  /lwp::simple/i,
  /winhttp/i,
  /microsoft-cryptoapi/i,
  
  // Vulnerability scanners
  /nmap/i,
  /nessus/i,
  /openvas/i,
  /nikto/i,
  /sqlmap/i,
  /dirb/i,
  /gobuster/i,
  /wfuzz/i,
  /hydra/i,
  /medusa/i,
  /masscan/i,
  /zmap/i,
  /shodan/i,
  /censys/i,
  
  // Spammers and scrapers
  /semrush/i,
  /ahrefs/i,
  /mj12bot/i,
  /dotbot/i,
  /blexbot/i,
  /backlinkcrawler/i,
  /linkdexbot/i,
  /proximic/i,
  /grapeshotcrawler/i,
  
  // Generic bot signatures
  /bot/i,
  /crawler/i,
  /spider/i,
  /scraper/i,
  /harvest/i,
  /extractor/i,
];

// ============================================================================
// LEGITIMATE CRAWLER ALLOW-LIST
// ============================================================================

const LEGITIMATE_CRAWLERS = [
  // Search engines
  /googlebot/i,
  /bingbot/i,
  /slurp/i, // Yahoo
  /duckduckbot/i,
  /baiduspider/i,
  /yandexbot/i,
  /applebot/i,
  
  // AI crawlers (explicitly allowed per robots.txt)
  /gptbot/i,
  /chatgpt-user/i,
  /claude-web/i,
  /claudebot/i,
  /google-extended/i,
  /oai-searchbot/i,
  
  // Monitoring services
  /uptimerobot/i,
  /pingdom/i,
  /statuscake/i,
  /newrelic/i,
  /datadog/i,
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Check if User-Agent matches malicious patterns
 */
function isMaliciousUserAgent(userAgent: string | undefined): boolean {
  if (!userAgent) {
    return false; // Missing UA is handled separately
  }

  // First check if it's a legitimate crawler
  for (const pattern of LEGITIMATE_CRAWLERS) {
    if (pattern.test(userAgent)) {
      return false;
    }
  }

  // Then check for malicious patterns
  for (const pattern of MALICIOUS_BOT_PATTERNS) {
    if (pattern.test(userAgent)) {
      return true;
    }
  }

  return false;
}

/**
 * Get Cloudflare threat score from headers
 */
function getCloudflareThreatScore(req: Request): number | null {
  const cfThreatScore = req.headers['cf-threat-score'];
  if (typeof cfThreatScore === 'string') {
    const score = parseInt(cfThreatScore, 10);
    return isNaN(score) ? null : score;
  }
  return null;
}

/**
 * Get client IP address from request
 */
function getClientIp(req: Request): string {
  return req.ip || req.connection.remoteAddress || 'unknown';
}

// ============================================================================
// BOT DETECTION MIDDLEWARE
// ============================================================================

export const botDetectionMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Skip if bot detection is disabled
  if (!config.features.enableBotDetection) {
    next();
    return;
  }

  // Skip health check endpoint
  if (req.path === '/health') {
    next();
    return;
  }

  const ip = getClientIp(req);
  const userAgent = req.headers['user-agent'] as string | undefined;
  const requestId = req.id;

  // Get IP reputation engine
  const ipReputation = getIpReputationEngine();

  // 1. Check Cloudflare threat score if available
  const cfThreatScore = getCloudflareThreatScore(req);
  if (cfThreatScore !== null && cfThreatScore >= 50) {
    logger.warn('Cloudflare threat score exceeded threshold', {
      ip,
      threatScore: cfThreatScore,
      requestId,
      path: req.path,
    });

    if (ipReputation) {
      ipReputation.recordIncident(ip, 'CLOUDFLARE_HIGH_THREAT_SCORE', 20);
    }

    res.status(403).json({
      error: 'Forbidden',
      message: 'Your request has been flagged as suspicious',
      requestId,
    });
    return;
  }

  // 2. Check for malicious User-Agent
  if (isMaliciousUserAgent(userAgent)) {
    logger.warn('Malicious User-Agent detected', {
      ip,
      userAgent,
      requestId,
      path: req.path,
    });

    if (ipReputation) {
      ipReputation.recordIncident(ip, 'MALICIOUS_USER_AGENT', 15);
    }

    res.status(403).json({
      error: 'Forbidden',
      message: 'Automated requests are not allowed',
      requestId,
    });
    return;
  }

  // 3. Check for missing User-Agent on POST requests
  if (!userAgent && ['POST', 'PUT', 'DELETE', 'PATCH'].includes(req.method)) {
    logger.warn('Missing User-Agent on state-changing request', {
      ip,
      method: req.method,
      requestId,
      path: req.path,
    });

    if (ipReputation) {
      ipReputation.recordIncident(ip, 'MISSING_USER_AGENT', 5);
    }
    // Don't block, just record as suspicious
  }

  // 4. Check IP reputation if enabled
  if (ipReputation && ipReputation.isBlocked(ip)) {
    const record = ipReputation.getRecord(ip);
    logger.warn('IP blocked due to reputation', {
      ip,
      score: record?.score,
      reasons: record?.reasons,
      requestId,
      path: req.path,
    });

    res.status(403).json({
      error: 'Forbidden',
      message: 'Your IP has been temporarily blocked due to suspicious activity',
      requestId,
    });
    return;
  }

  // 5. Check if IP is malicious (log but don't block)
  if (ipReputation && ipReputation.isMalicious(ip)) {
    const record = ipReputation.getRecord(ip);
    logger.warn('IP has malicious reputation', {
      ip,
      score: record?.score,
      reasons: record?.reasons,
      requestId,
      path: req.path,
    });
    // Continue but mark for increased scrutiny
  }

  next();
};

// ============================================================================
// STRICT BOT DETECTION MIDDLEWARE (for sensitive endpoints)
// ============================================================================

export const strictBotDetectionMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Skip if bot detection is disabled
  if (!config.features.enableBotDetection) {
    next();
    return;
  }

  const ip = getClientIp(req);
  const userAgent = req.headers['user-agent'] as string | undefined;
  const requestId = req.id;

  // Strict mode: block missing User-Agent on POST requests
  if (!userAgent && ['POST', 'PUT', 'DELETE', 'PATCH'].includes(req.method)) {
    logger.warn('Strict mode: Missing User-Agent blocked', {
      ip,
      method: req.method,
      requestId,
      path: req.path,
    });

    const ipReputation = getIpReputationEngine();
    if (ipReputation) {
      ipReputation.recordIncident(ip, 'MISSING_USER_AGENT_STRICT', 10);
    }

    res.status(403).json({
      error: 'Forbidden',
      message: 'Valid User-Agent header is required',
      requestId,
    });
    return;
  }

  // Apply standard bot detection
  botDetectionMiddleware(req, res, next);
};
