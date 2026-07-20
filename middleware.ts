import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Cache the maintenance status to avoid hitting the API on every request
let cachedStatus: { active: boolean; timestamp: number } = { active: false, timestamp: 0 }
const CACHE_TTL = 15000 // 15 seconds

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Always allow access to the maintenance page itself, the status endpoint, and admin routes
  if (pathname === '/maintenance' || pathname === '/maintenance/status' || pathname.startsWith('/admin')) {
    return NextResponse.next()
  }

  // Allow static assets, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|gif|css|js|woff|woff2|ttf|eot)$/)
  ) {
    return NextResponse.next()
  }

  // Check cached status first
  const now = Date.now()
  if (now - cachedStatus.timestamp < CACHE_TTL) {
    if (cachedStatus.active) {
      const maintenanceUrl = request.nextUrl.clone()
      maintenanceUrl.pathname = '/maintenance'
      return NextResponse.redirect(maintenanceUrl)
    }
    return NextResponse.next()
  }

  // Fetch maintenance status from the backend
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002'
    const res = await fetch(`${apiUrl}/maintenance/status`, {
      cache: 'no-store',
      signal: AbortSignal.timeout(3000),
    })

    if (res.ok) {
      const data = await res.json()
      cachedStatus = { active: data.active === true, timestamp: now }

      if (data.active) {
        const maintenanceUrl = request.nextUrl.clone()
        maintenanceUrl.pathname = '/maintenance'
        return NextResponse.redirect(maintenanceUrl)
      }
    }
  } catch {
    // If the API is unreachable, don't block users — let them through
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
