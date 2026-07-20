'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Wrench, AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'

type StatusType = 'maintenance' | 'high-traffic'

export default function EcosystemPage() {
  const [status, setStatus] = useState<StatusType>('maintenance')

  useEffect(() => {
    // Randomly pick between maintenance and high traffic
    setStatus(Math.random() > 0.5 ? 'maintenance' : 'high-traffic')
  }, [])

  const isMaintenance = status === 'maintenance'

  return (
    <div className="min-h-screen tech-grid theme-bg">
      <Navigation />

      <section className="relative min-h-[70vh] flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden tech-scanline">
        <div className="absolute inset-0 tech-grid opacity-[0.06]" />
        <div className="absolute inset-0" style={{
          background: isMaintenance
            ? 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at center, rgba(239, 68, 68, 0.08) 0%, transparent 70%)',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-2xl mx-auto text-center"
        >
          {/* Status Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 relative"
            style={{
              backgroundColor: isMaintenance ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)',
              border: `1px solid ${isMaintenance ? 'rgba(245, 158, 11, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
            }}
          >
            {isMaintenance ? (
              <Wrench className="w-10 h-10 text-amber-500" />
            ) : (
              <AlertTriangle className="w-10 h-10 text-red-500" />
            )}
            {/* Pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-0 rounded-2xl"
              style={{
                border: `1px solid ${isMaintenance ? 'rgba(245, 158, 11, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
              }}
            />
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              backgroundColor: isMaintenance ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)',
              border: `1px solid ${isMaintenance ? 'rgba(245, 158, 11, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: isMaintenance ? '#F59E0B' : '#EF4444',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-widest"
              style={{ color: isMaintenance ? '#F59E0B' : '#EF4444' }}
            >
              {isMaintenance ? 'SYSTEM_STATUS // MAINTENANCE' : 'SYSTEM_STATUS // OVERLOADED'}
            </span>
          </motion.div>

          {/* Title */}
          <h1
            className="text-3xl md:text-5xl font-extrabold mb-4"
            style={{
              fontFamily: 'var(--font-syne)',
              color: 'var(--color-text-primary)',
            }}
          >
            {isMaintenance ? 'Under Maintenance' : 'Experiencing High Traffic'}
          </h1>

          {/* Description */}
          <p
            className="text-base md:text-lg mb-2 max-w-lg mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {isMaintenance ? (
              <>The Annita Ecosystem is currently undergoing scheduled maintenance to bring you a better experience. We&apos;ll be back shortly.</>
            ) : (
              <>We&apos;re experiencing unusually high traffic right now. Our team is scaling up resources to get you in as quickly as possible.</>
            )}
          </p>

          <p
            className="text-sm mb-10 max-w-md mx-auto"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {isMaintenance
              ? 'Estimated time: A few minutes. Thank you for your patience.'
              : 'Please try again in a moment. Thank you for your interest.'}
          </p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all button-glow"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-accent-foreground)',
              }}
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all hover:border-[var(--color-accent)]/40"
              style={{
                backgroundColor: 'var(--color-surface-raised)',
                border: '1px solid var(--color-border-default)',
                color: 'var(--color-text-primary)',
              }}
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Tech decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center justify-center gap-2"
          >
            <span className="text-[9px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--color-text-muted)' }}>
              ANNITA_ECOSYSTEM // STATUS_NODE
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: isMaintenance ? '#F59E0B' : '#EF4444',
                animation: 'pulse 1.5s ease-in-out infinite',
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-[var(--color-border-card)]" style={{ backgroundColor: 'var(--color-surface-base)' }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none tech-grid" />
        <div className="relative max-w-[1600px] mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/annita-real-logo.png"
                alt="Annita"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-sm font-bold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-syne)' }}>
                Annita<span style={{ color: 'var(--color-accent)' }}>.</span>
              </span>
            </div>
            <p className="text-[10px] font-mono text-[var(--color-text-muted)]">
              © 2026 Annita LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
