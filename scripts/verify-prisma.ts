import "dotenv/config";
import { prisma } from '../lib/prisma';

async function main() {
  try {
    // Test database connection with a simple read
    const users = await prisma.user.findMany();
    console.log(`✅ Connected to Prisma Postgres`);
    console.log(`Found ${users.length} users in database`);
    
    if (users.length > 0) {
      console.log(`Sample user: ${users[0].name} (${users[0].email})`);
    }
  } catch (error) {
    console.error('❌ Connection failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
