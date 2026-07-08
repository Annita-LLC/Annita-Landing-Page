// ============================================================================
// ANNITA LANDING PAGE SERVER - CONFIGURATION
// ============================================================================
// Fortune 500 / Pentagon Grade Configuration
// ============================================================================

import dotenv from 'dotenv';
import { z } from 'zod';

// Load environment variables
dotenv.config();

// ============================================================================
// ENVIRONMENT VARIABLE SCHEMA
// ============================================================================
const envSchema = z.object({
  // Server Configuration
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().default('3001'),
  HOST: z.string().default('0.0.0.0'),

  // Database Configuration
  DATABASE_URL: z.string().url().default('postgresql://localhost:5432/postgres'),
  PRISMA_ACCELERATE_URL: z.string().optional(),

  // Security Configuration
  JWT_SECRET: z.string().min(32).default('insecure-default-jwt-secret-change-me-please-32chars'),
  JWT_EXPIRES_IN: z.string().default('7d'),
  // CORS defaults are restrictive. The API is stateless JSON-only with no
  // cookies/sessions, so credentials should remain `false` unless cookie
  // auth is introduced. NEVER set CORS_ORIGIN to `*` together with
  // `CORS_CREDENTIALS=true` — that is an invalid/silent-dangerous combo.
  // Whitelist explicit origins only (comma-separated).
  CORS_ORIGIN: z.string().default('https://an-nita.com,https://www.an-nita.com,https://annita-landing-page-production.up.railway.app'),
  CORS_CREDENTIALS: z.string().default('false'),

  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: z.string().default('60000'),
  RATE_LIMIT_MAX_REQUESTS: z.string().default('100'),
  RATE_LIMIT_BURST_LIMIT: z.string().default('150'),

  // Logging Configuration
  LOG_LEVEL: z.enum(['DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL']).default('INFO'),
  LOG_FORMAT: z.enum(['json', 'console']).default('console'),

  // Monitoring
  SENTRY_DSN: z.string().optional(),
  SENTRY_ENVIRONMENT: z.string().default('development'),

  // Feature Flags
  FEATURE_ENABLE_ANALYTICS: z.string().default('true'),
  FEATURE_ENABLE_CONTACT_SUBMISSION: z.string().default('true'),
  FEATURE_ENABLE_NEWSLETTER: z.string().default('true'),
  FEATURE_ENABLE_BOT_DETECTION: z.string().default('true'),
  FEATURE_ENABLE_IP_REPUTATION: z.string().default('true'),
  FEATURE_ENABLE_BEHAVIORAL_ANALYSIS: z.string().default('true'),

  // Google Sheets (Optional)
  GOOGLE_SHEETS_ID: z.string().optional(),
  GOOGLE_SERVICE_ACCOUNT_JSON: z.string().optional(),

  // IP Reputation Configuration
  IP_REPUTATION_SUSPICIOUS_THRESHOLD: z.string().default('3'),
  IP_REPUTATION_MALICIOUS_THRESHOLD: z.string().default('5'),
  IP_REPUTATION_BLOCK_THRESHOLD: z.string().default('10'),
  IP_REPUTATION_WINDOW_MS: z.string().default('86400000'),
  IP_REPUTATION_DECAY_RATE: z.string().default('3600000'),

  // Behavioral Analysis Configuration
  BEHAVIORAL_MIN_SECONDS_BETWEEN_SUBMISSIONS: z.string().default('2'),
  BEHAVIORAL_MAX_SUBMISSIONS_PER_MINUTE: z.string().default('10'),
  BEHAVIORAL_MAX_FIELD_LENGTH: z.string().default('10000'),

  // Maintenance & Admin Monitoring
  MAINTENANCE_SCHEDULE_DAY: z.string().default('SUNDAY'),
  MAINTENANCE_SCHEDULE_TIME: z.string().default('02:00'),
  MAINTENANCE_TIMEZONE: z.string().default('UTC'),
  MAINTENANCE_DURATION_MINUTES: z.string().default('60'),
  ADMIN_REPORT_TIME: z.string().default('09:00'),
  ADMIN_REPORT_TIMEZONE: z.string().default('UTC'),
  ADMIN_ALLOWED_EMAILS: z.string().default('info@an-nita.com'),
  ADMIN_IP_WHITELIST: z.string().default(''),
  ADMIN_TOKEN_SECRET: z.string().min(16).default('insecure-default-token-secret-change'),
  ADMIN_TOKEN_ENCRYPTION_KEY: z.string().default(''),
  ADMIN_TOKEN_TTL_MINUTES: z.string().default('15'),
  ADMIN_MAX_FAILED_ATTEMPTS: z.string().default('5'),
  ADMIN_EMERGENCY_SHUTDOWN: z.string().default('false'),
});

// Validate and parse environment variables
const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  DATABASE_URL: process.env.DATABASE_URL,
  PRISMA_ACCELERATE_URL: process.env.PRISMA_ACCELERATE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  CORS_CREDENTIALS: process.env.CORS_CREDENTIALS,
  RATE_LIMIT_WINDOW_MS: process.env.RATE_LIMIT_WINDOW_MS,
  RATE_LIMIT_MAX_REQUESTS: process.env.RATE_LIMIT_MAX_REQUESTS,
  RATE_LIMIT_BURST_LIMIT: process.env.RATE_LIMIT_BURST_LIMIT,
  LOG_LEVEL: process.env.LOG_LEVEL,
  LOG_FORMAT: process.env.LOG_FORMAT,
  SENTRY_DSN: process.env.SENTRY_DSN,
  SENTRY_ENVIRONMENT: process.env.SENTRY_ENVIRONMENT,
  FEATURE_ENABLE_ANALYTICS: process.env.FEATURE_ENABLE_ANALYTICS,
  FEATURE_ENABLE_CONTACT_SUBMISSION: process.env.FEATURE_ENABLE_CONTACT_SUBMISSION,
  FEATURE_ENABLE_NEWSLETTER: process.env.FEATURE_ENABLE_NEWSLETTER,
  FEATURE_ENABLE_BOT_DETECTION: process.env.FEATURE_ENABLE_BOT_DETECTION,
  FEATURE_ENABLE_IP_REPUTATION: process.env.FEATURE_ENABLE_IP_REPUTATION,
  FEATURE_ENABLE_BEHAVIORAL_ANALYSIS: process.env.FEATURE_ENABLE_BEHAVIORAL_ANALYSIS,
  GOOGLE_SHEETS_ID: process.env.GOOGLE_SHEETS_ID,
  GOOGLE_SERVICE_ACCOUNT_JSON: process.env.GOOGLE_SERVICE_ACCOUNT_JSON,
  IP_REPUTATION_SUSPICIOUS_THRESHOLD: process.env.IP_REPUTATION_SUSPICIOUS_THRESHOLD,
  IP_REPUTATION_MALICIOUS_THRESHOLD: process.env.IP_REPUTATION_MALICIOUS_THRESHOLD,
  IP_REPUTATION_BLOCK_THRESHOLD: process.env.IP_REPUTATION_BLOCK_THRESHOLD,
  IP_REPUTATION_WINDOW_MS: process.env.IP_REPUTATION_WINDOW_MS,
  IP_REPUTATION_DECAY_RATE: process.env.IP_REPUTATION_DECAY_RATE,
  BEHAVIORAL_MIN_SECONDS_BETWEEN_SUBMISSIONS: process.env.BEHAVIORAL_MIN_SECONDS_BETWEEN_SUBMISSIONS,
  BEHAVIORAL_MAX_SUBMISSIONS_PER_MINUTE: process.env.BEHAVIORAL_MAX_SUBMISSIONS_PER_MINUTE,
  BEHAVIORAL_MAX_FIELD_LENGTH: process.env.BEHAVIORAL_MAX_FIELD_LENGTH,
  MAINTENANCE_SCHEDULE_DAY: process.env.MAINTENANCE_SCHEDULE_DAY,
  MAINTENANCE_SCHEDULE_TIME: process.env.MAINTENANCE_SCHEDULE_TIME,
  MAINTENANCE_TIMEZONE: process.env.MAINTENANCE_TIMEZONE,
  MAINTENANCE_DURATION_MINUTES: process.env.MAINTENANCE_DURATION_MINUTES,
  ADMIN_REPORT_TIME: process.env.ADMIN_REPORT_TIME,
  ADMIN_REPORT_TIMEZONE: process.env.ADMIN_REPORT_TIMEZONE,
  ADMIN_ALLOWED_EMAILS: process.env.ADMIN_ALLOWED_EMAILS,
  ADMIN_IP_WHITELIST: process.env.ADMIN_IP_WHITELIST,
  ADMIN_TOKEN_SECRET: process.env.ADMIN_TOKEN_SECRET,
  ADMIN_TOKEN_ENCRYPTION_KEY: process.env.ADMIN_TOKEN_ENCRYPTION_KEY,
  ADMIN_TOKEN_TTL_MINUTES: process.env.ADMIN_TOKEN_TTL_MINUTES,
  ADMIN_MAX_FAILED_ATTEMPTS: process.env.ADMIN_MAX_FAILED_ATTEMPTS,
  ADMIN_EMERGENCY_SHUTDOWN: process.env.ADMIN_EMERGENCY_SHUTDOWN,
});

// Warn about insecure defaults
const requiredSecrets = ['JWT_SECRET', 'ADMIN_TOKEN_SECRET', 'DATABASE_URL'] as const;
for (const key of requiredSecrets) {
  if (!process.env[key]) {
    console.warn(`[CONFIG] WARNING: ${key} not set in environment — using insecure default. Set it in Railway dashboard.`);
  }
}

// ============================================================================
// EXPORTED CONFIGURATION
// ============================================================================
export const config = {
  env: {
    isDevelopment: env.NODE_ENV === 'development',
    isProduction: env.NODE_ENV === 'production',
    isTest: env.NODE_ENV === 'test',
    nodeEnv: env.NODE_ENV,
  },
  server: {
    port: parseInt(env.PORT, 10),
    host: env.HOST,
  },
  database: {
    url: env.DATABASE_URL,
    accelerateUrl: env.PRISMA_ACCELERATE_URL,
  },
  security: {
    jwtSecret: env.JWT_SECRET,
    jwtExpiresIn: env.JWT_EXPIRES_IN,
    corsOrigin: env.CORS_ORIGIN.split(',').map(origin => origin.trim()),
    corsCredentials: env.CORS_CREDENTIALS === 'true',
  },
  rateLimit: {
    windowMs: parseInt(env.RATE_LIMIT_WINDOW_MS, 10),
    maxRequests: parseInt(env.RATE_LIMIT_MAX_REQUESTS, 10),
    burstLimit: parseInt(env.RATE_LIMIT_BURST_LIMIT, 10),
  },
  logging: {
    level: env.LOG_LEVEL,
    format: env.LOG_FORMAT,
  },
  monitoring: {
    sentryDsn: env.SENTRY_DSN,
    sentryEnvironment: env.SENTRY_ENVIRONMENT,
  },
  features: {
    enableAnalytics: env.FEATURE_ENABLE_ANALYTICS === 'true',
    enableContactSubmission: env.FEATURE_ENABLE_CONTACT_SUBMISSION === 'true',
    enableNewsletter: env.FEATURE_ENABLE_NEWSLETTER === 'true',
    enableBotDetection: env.FEATURE_ENABLE_BOT_DETECTION === 'true',
    enableIpReputation: env.FEATURE_ENABLE_IP_REPUTATION === 'true',
    enableBehavioralAnalysis: env.FEATURE_ENABLE_BEHAVIORAL_ANALYSIS === 'true',
  },
  googleSheets: {
    spreadsheetId: env.GOOGLE_SHEETS_ID,
    serviceAccountJson: env.GOOGLE_SERVICE_ACCOUNT_JSON,
  },
  ipReputation: {
    suspiciousThreshold: parseInt(env.IP_REPUTATION_SUSPICIOUS_THRESHOLD, 10),
    maliciousThreshold: parseInt(env.IP_REPUTATION_MALICIOUS_THRESHOLD, 10),
    blockThreshold: parseInt(env.IP_REPUTATION_BLOCK_THRESHOLD, 10),
    windowMs: parseInt(env.IP_REPUTATION_WINDOW_MS, 10),
    decayRate: parseInt(env.IP_REPUTATION_DECAY_RATE, 10),
  },
  behavioralAnalysis: {
    minSecondsBetweenSubmissions: parseInt(env.BEHAVIORAL_MIN_SECONDS_BETWEEN_SUBMISSIONS, 10),
    maxSubmissionsPerMinute: parseInt(env.BEHAVIORAL_MAX_SUBMISSIONS_PER_MINUTE, 10),
    maxFieldLength: parseInt(env.BEHAVIORAL_MAX_FIELD_LENGTH, 10),
  },
  maintenance: {
    scheduleDay: env.MAINTENANCE_SCHEDULE_DAY,
    scheduleTime: env.MAINTENANCE_SCHEDULE_TIME,
    timezone: env.MAINTENANCE_TIMEZONE,
    durationMinutes: parseInt(env.MAINTENANCE_DURATION_MINUTES, 10),
  },
  admin: {
    reportTime: env.ADMIN_REPORT_TIME,
    reportTimezone: env.ADMIN_REPORT_TIMEZONE,
    allowedEmails: env.ADMIN_ALLOWED_EMAILS.split(',').map(e => e.trim().toLowerCase()).filter(Boolean),
    ipWhitelist: env.ADMIN_IP_WHITELIST.split(',').map(ip => ip.trim()).filter(Boolean),
    tokenSecret: env.ADMIN_TOKEN_SECRET,
    tokenEncryptionKey: env.ADMIN_TOKEN_ENCRYPTION_KEY,
    tokenTtlMinutes: parseInt(env.ADMIN_TOKEN_TTL_MINUTES, 10),
    maxFailedAttempts: parseInt(env.ADMIN_MAX_FAILED_ATTEMPTS, 10),
    emergencyShutdown: env.ADMIN_EMERGENCY_SHUTDOWN === 'true',
  },
} as const;

export type Config = typeof config;
