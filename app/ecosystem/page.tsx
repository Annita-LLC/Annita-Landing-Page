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

      {/* AnnitaPlug Platform Announcement */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl p-6 md:p-10 border border-[var(--color-accent)]/20 bg-[var(--color-surface-card)]/50 backdrop-blur-md overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--color-accent)]/50" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[var(--color-accent)]/50" />
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[var(--color-accent)]/50" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--color-accent)]/50" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{ backgroundColor: 'var(--color-accent-soft)', border: '1px solid var(--color-border-accent)' }}>
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-accent)]">95% COMPLETE // COMING SOON</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
                AnnitaPlug — Two Platforms. One Ecosystem.
              </h2>

              <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-xl mx-auto">
                AnnitaPlug is coming to <span className="font-bold text-[var(--color-text-primary)]">two platforms</span> — the App Store for iOS and Google Play for Android. One seamless experience across all your devices.
              </p>

              {/* Platform icons */}
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">App Store</span>
                </div>
                <div className="text-[var(--color-text-muted)] text-xl font-bold">+</div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M17.523 15.341c-.493 0-.894-.4-.894-.893s.4-.894.894-.894.894.4.894.894-.4.893-.894.893m-11.046 0c-.493 0-.894-.4-.894-.893s.4-.894.894-.894.894.4.894.894-.4.893-.894.893m11.362-4.793l1.773-3.07a.369.369 0 00-.135-.504.369.369 0 00-.504.135l-1.795 3.109c-1.372-.626-2.913-.976-4.578-.976s-3.206.35-4.578.976L7.247 7.11a.369.369 0 00-.504-.135.369.369 0 00-.135.504l1.773 3.07C4.308 12.353 2.25 15.567 2.25 19.5h19.5c0-3.933-2.058-7.147-5.911-8.952"/>
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">Google Play</span>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--color-border-card)]/50">
                <p className="text-xs text-[var(--color-text-tertiary)] mb-3">
                  Want to learn more about AnnitaPlug?
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--color-text-secondary)]" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                    Google <span className="font-bold text-[var(--color-accent)]">AnnitaPlug</span> to know more
                  </span>
                </div>
              </div>
            </div>
          </div>
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
