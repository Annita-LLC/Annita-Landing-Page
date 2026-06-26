// ============================================================================
// ANNITA LANDING PAGE SERVER - DATABASE CLIENT
// ============================================================================
// Fortune 500 / Pentagon Grade Database Configuration
// ============================================================================

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { config } from '../config/index.js';
import { logger } from './logger.js';

// ============================================================================
// PRISMA CLIENT WITH PG ADAPTER
// ============================================================================
const adapter = new PrismaPg({
  connectionString: config.database.url,
});

const prismaClient = new PrismaClient({
  adapter,
  log: config.env.isDevelopment
    ? [
        { level: 'query', emit: 'event' },
        { level: 'error', emit: 'event' },
        { level: 'warn', emit: 'event' },
      ]
    : ['error'],
});

export { prisma as prismaClient };

// ============================================================================
// GLOBAL SINGLETON FOR HOT RELOAD
// ============================================================================
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma ?? prismaClient;

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// ============================================================================
// LOGGING EVENTS
// ============================================================================
if (config.env.isDevelopment) {
  prisma.$on('query', (e: any) => {
    logger.debug('Database Query', {
      query: e.query,
      params: e.params,
      duration: e.duration,
    });
  });

  prisma.$on('error', (e: any) => {
    logger.error('Database Error', { error: e.message });
  });

  prisma.$on('warn', (e: any) => {
    logger.warn('Database Warning', { warning: e.message });
  });
}

// ============================================================================
// GRACEFUL SHUTDOWN
// ============================================================================
export const disconnectDatabase = async (): Promise<void> => {
  try {
    await prisma.$disconnect();
    logger.info('Database connection closed');
  } catch (error) {
    logger.error('Error closing database connection', { error });
    process.exit(1);
  }
};

// Handle process termination
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

export default prisma;
