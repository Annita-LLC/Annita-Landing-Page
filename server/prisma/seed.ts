// ============================================================================
// ANNITA LANDING PAGE SERVER - PRISMA SEED
// ============================================================================
// Fortune 500 / Pentagon Grade Database Seeding
// ============================================================================

import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL!;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Starting database seed...');

  // Create sample contact submission (for testing)
  const contact = await prisma.contactSubmission.create({
    data: {
      name: 'Test User',
      email: 'test@an-nita.com',
      message: 'This is a test contact submission for development purposes.',
      subject: 'Test Inquiry',
      ipAddress: '127.0.0.1',
      userAgent: 'Test Agent',
    },
  });

  console.log('✅ Sample contact submission created:', contact.id);

  // Create sample newsletter subscription (for testing)
  const newsletter = await prisma.newsletterSubscription.upsert({
    where: { email: 'newsletter@an-nita.com' },
    update: {},
    create: {
      email: 'newsletter@an-nita.com',
      status: 'active',
      ipAddress: '127.0.0.1',
      userAgent: 'Test Agent',
    },
  });

  console.log('✅ Sample newsletter subscription created:', newsletter.id);

  console.log('🎉 Database seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
