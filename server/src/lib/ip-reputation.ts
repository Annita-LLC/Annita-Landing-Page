/**
 * ╔═════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║              ANNITA LANDING PAGE SERVER - IP REPUTATION ENGINE                               ║
 * ║                   Fortune 500 / Pentagon Grade IP Trust System                                ║
 * ╚═════════════════════════════════════════════════════════════════════════════════════════════╗
 * 
 * FEATURES:
 * 1. In-memory IP reputation tracking with TTL
 * 2. Cloudflare threat score integration
 * 3. Configurable suspicious/malicious/block thresholds
 * 4. Automatic score decay over time
 * 5. Incident logging with reason tracking
 */

import { logger } from './logger.js';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface IpReputationRecord {
  score: number;
  lastIncidentAt: number;
  expiresAt: number;
  reasons: string[];
  incidentCount: number;
}

export interface IpReputationConfig {
  enabled: boolean;
  suspiciousThreshold: number;
  maliciousThreshold: number;
  blockThreshold: number;
  windowMs: number;
  decayRate: number;
}

// ============================================================================
// IP REPUTATION ENGINE
// ============================================================================

class IpReputationEngine {
  private store: Map<string, IpReputationRecord> = new Map();
  private config: IpReputationConfig;
  private cleanupInterval: NodeJS.Timeout | null = null;

  constructor(config: IpReputationConfig) {
    this.config = config;
    this.startCleanupInterval();
  }

  /**
   * Start periodic cleanup of expired records
   */
  private startCleanupInterval(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }

    this.cleanupInterval = setInterval(() => {
      this.cleanupExpiredRecords();
    }, 60000); // Clean up every minute
  }

  /**
   * Remove expired records from memory
   */
  private cleanupExpiredRecords(): void {
    const now = Date.now();
    let cleaned = 0;

    for (const [ip, record] of this.store.entries()) {
      if (now > record.expiresAt) {
        this.store.delete(ip);
        cleaned++;
      }
    }

    if (cleaned > 0) {
      logger.debug('IP reputation cleanup completed', { cleaned, total: this.store.size });
    }
  }

  /**
   * Get or create IP reputation record
   */
  private getOrCreateRecord(ip: string): IpReputationRecord {
    const now = Date.now();
    let record = this.store.get(ip);

    if (!record || now > record.expiresAt) {
      record = {
        score: 0,
        lastIncidentAt: now,
        expiresAt: now + this.config.windowMs,
        reasons: [],
        incidentCount: 0,
      };
      this.store.set(ip, record);
    }

    return record;
  }

  /**
   * Apply score decay based on time elapsed
   */
  private applyDecay(record: IpReputationRecord): void {
    const now = Date.now();
    const timeSinceLastIncident = now - record.lastIncidentAt;
    const decayAmount = Math.floor(timeSinceLastIncident / this.config.decayRate);

    if (decayAmount > 0) {
      record.score = Math.max(0, record.score - decayAmount);
    }
  }

  /**
   * Record a security incident for an IP
   */
  public recordIncident(ip: string, reason: string, points: number): void {
    if (!this.config.enabled) {
      return;
    }

    const record = this.getOrCreateRecord(ip);
    this.applyDecay(record);

    record.score += points;
    record.lastIncidentAt = Date.now();
    record.incidentCount++;
    record.reasons.push(reason);

    // Keep only last 10 reasons to prevent memory bloat
    if (record.reasons.length > 10) {
      record.reasons = record.reasons.slice(-10);
    }

    this.store.set(ip, record);

    logger.warn('IP reputation incident recorded', {
      ip,
      reason,
      points,
      newScore: record.score,
      incidentCount: record.incidentCount,
    });
  }

  /**
   * Get current reputation score for an IP
   */
  public getScore(ip: string): number {
    if (!this.config.enabled) {
      return 0;
    }

    const record = this.store.get(ip);
    if (!record) {
      return 0;
    }

    this.applyDecay(record);
    this.store.set(ip, record);
    return record.score;
  }

  /**
   * Check if IP is suspicious
   */
  public isSuspicious(ip: string): boolean {
    return this.getScore(ip) >= this.config.suspiciousThreshold;
  }

  /**
   * Check if IP is malicious
   */
  public isMalicious(ip: string): boolean {
    return this.getScore(ip) >= this.config.maliciousThreshold;
  }

  /**
   * Check if IP should be blocked
   */
  public isBlocked(ip: string): boolean {
    return this.getScore(ip) >= this.config.blockThreshold;
  }

  /**
   * Get full reputation record for an IP
   */
  public getRecord(ip: string): IpReputationRecord | null {
    if (!this.config.enabled) {
      return null;
    }

    const record = this.store.get(ip);
    if (!record) {
      return null;
    }

    this.applyDecay(record);
    this.store.set(ip, record);
    return { ...record };
  }

  /**
   * Clear reputation record for an IP (admin function)
   */
  public clearRecord(ip: string): void {
    this.store.delete(ip);
    logger.info('IP reputation record cleared', { ip });
  }

  /**
   * Get statistics about the reputation store
   */
  public getStats(): {
    totalIps: number;
    blockedIps: number;
    maliciousIps: number;
    suspiciousIps: number;
  } {
    let blocked = 0;
    let malicious = 0;
    let suspicious = 0;

    for (const record of this.store.values()) {
      if (record.score >= this.config.blockThreshold) blocked++;
      else if (record.score >= this.config.maliciousThreshold) malicious++;
      else if (record.score >= this.config.suspiciousThreshold) suspicious++;
    }

    return {
      totalIps: this.store.size,
      blockedIps: blocked,
      maliciousIps: malicious,
      suspiciousIps: suspicious,
    };
  }

  /**
   * Shutdown cleanup interval
   */
  public shutdown(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
      this.cleanupInterval = null;
    }
  }
}

// ============================================================================
// EXPORT SINGLETON INSTANCE
// ============================================================================

let ipReputationEngine: IpReputationEngine | null = null;

export function initializeIpReputation(config: IpReputationConfig): void {
  if (ipReputationEngine) {
    ipReputationEngine.shutdown();
  }
  ipReputationEngine = new IpReputationEngine(config);
  logger.info('IP reputation engine initialized', config);
}

export function getIpReputationEngine(): IpReputationEngine | null {
  return ipReputationEngine;
}

export default ipReputationEngine;
