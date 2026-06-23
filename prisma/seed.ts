import { prisma } from '../lib/prisma';

async function main() {
  console.log('Seeding database...');
  
  // Clean start for seed records
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  const user1 = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      name: 'Alice Smith',
      posts: {
        create: [
          { title: 'Hello Prisma Postgres', content: 'This is my first post!' },
          { title: 'Deep Dive into Adapters', content: 'Integrating pg adapter is smooth.' },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      name: 'Bob Johnson',
      posts: {
        create: [
          { title: 'Prisma Client Guide', content: 'Type-safe SQL queries out of the box.' },
        ],
      },
    },
  });

  console.log(`Seeded users: ${user1.name}, ${user2.name}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
