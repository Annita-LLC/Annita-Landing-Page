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
  DATABASE_URL: z.string().url(),
  PRISMA_ACCELERATE_URL: z.string().optional(),

  // Security Configuration
  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.string().default('7d'),
  CORS_ORIGIN: z.string().default('*'),
  CORS_CREDENTIALS: z.string().default('true'),

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
});

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
  },
} as const;

export type Config = typeof config;
