// ============================================================================
// ANNITA LANDING PAGE SERVER - PRISMA VERIFICATION
// ============================================================================
// Fortune 500 / Pentagon Grade Database Connection Verification
// ============================================================================

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import dotenv from 'dotenv';

dotenv.config();

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function verifyConnection() {
  try {
    console.log('🔍 Verifying Prisma Postgres connection...');
    
    // Test a simple query
    const result = await prisma.$queryRaw`SELECT 1 as connected`;
    
    if (result && Array.isArray(result) && result[0]?.connected === 1) {
      console.log('✅ Connected to Prisma Postgres successfully!');
      
      // Check if tables exist
      const tables = await prisma.$queryRaw`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
      `;
      
      console.log('📊 Tables in database:', tables);
      
      // Check contact submissions count
      const contactCount = await prisma.contactSubmission.count();
      console.log(`📧 Contact submissions: ${contactCount}`);
      
      // Check newsletter subscriptions count
      const newsletterCount = await prisma.newsletterSubscription.count();
      console.log(`📰 Newsletter subscriptions: ${newsletterCount}`);
      
      return true;
    }
    
    console.log('❌ Connection test failed');
    return false;
  } catch (error) {
    console.error('❌ Database connection error:', error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

verifyConnection()
  .then((success) => {
    process.exit(success ? 0 : 1);
  })
  .catch((error) => {
    console.error('❌ Verification failed:', error);
    process.exit(1);
  });
