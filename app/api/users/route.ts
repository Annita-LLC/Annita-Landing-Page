import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Example API route demonstrating Prisma Client usage
// This is a server-side only file - Prisma Client cannot be imported in client components

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    
    return NextResponse.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
