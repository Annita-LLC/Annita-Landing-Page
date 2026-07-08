'use client'

import { useEffect } from 'react'

export default function LoginPage() {
  useEffect(() => {
    // Redirect to the client app's login page
    // In production, this should be the actual client app domain
    const clientAppUrl = process.env.NEXT_PUBLIC_CLIENT_URL || 'http://localhost:3001'
    window.location.href = `${clientAppUrl}/login`
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center theme-bg">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-accent)] mx-auto mb-4" />
        <p className="text-[var(--color-text-secondary)]">Redirecting to login...</p>
      </div>
    </div>
  )
}
