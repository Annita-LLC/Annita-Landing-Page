import { PrismaClient } from '../../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import { logger } from './logger.js';

// NIST SP 800-53 SC-8, DISA STIG V-214946: Enforce SSL/TLS for database connections
// Production: require SSL with certificate validation
// Development: allow SSL but fall back to non-SSL (local DB may not support SSL)
const connectionString = process.env.DATABASE_URL || '';

const isProduction = process.env.NODE_ENV === 'production';

// In production, enforce sslmode=require. In development, use sslmode=prefer (try SSL, allow fallback)
const sslMode = isProduction ? 'require' : 'prefer';
const sslEnforcedConnectionString = connectionString.includes('sslmode=')
  ? connectionString
  : `${connectionString}${connectionString.includes('?') ? '&' : '?'}sslmode=${sslMode}`;

const pool = new pg.Pool({
  connectionString: sslEnforcedConnectionString,
  // DISA STIG V-214946: Reject unauthorized certificates in production only
  ssl: isProduction ? { rejectUnauthorized: true } : false,
  max: 20, // Connection pool limit (NIST SP 800-53 SC-5)
  idleTimeoutMillis: 30000, // Idle connection timeout
  connectionTimeoutMillis: 10000, // Connection establishment timeout
});

const adapter = new PrismaPg(pool);

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const disconnectDatabase = async (): Promise<void> => {
  try {
    await prisma.$disconnect();
    logger.info('Database connection closed');
  } catch (error) {
    logger.error('Error closing database connection', { error });
    process.exit(1);
  }
};

process.on('SIGTERM', async () => {
  logger.info('SIGTERM received, closing database connection...');
  await disconnectDatabase();
  process.exit(0);
});

process.on('SIGINT', async () => {
  logger.info('SIGINT received, closing database connection...');
  await disconnectDatabase();
  process.exit(0);
});
