'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { Wrench, RefreshCw, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

interface MaintenanceState {
  active: boolean
  reason: string
  endTime: string | null
}

export default function MaintenancePage() {
  const [endTime, setEndTime] = useState<Date | null>(null)
  const [reason, setReason] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' })
  const [progressPct, setProgressPct] = useState(0.0)
  const [maintenanceDone, setMaintenanceDone] = useState(false)

  // Fetch real maintenance status from the server
  const fetchMaintenanceStatus = useCallback(async () => {
    try {
      const res = await fetch('/maintenance/status', {
        cache: 'no-store',
        headers: { 'Content-Type': 'application/json' },
      })
      if (!res.ok) throw new Error('Failed to fetch maintenance status')
      const data: MaintenanceState = await res.json()

      if (!data.active) {
        // Maintenance is over — redirect to home
        setMaintenanceDone(true)
        window.location.href = '/'
        return
      }

      setReason(data.reason || 'Scheduled Maintenance')
      if (data.endTime) {
        setEndTime(new Date(data.endTime))
      }
    } catch {
      // If we can't reach the API, use a fallback 2-hour window
      if (!endTime) {
        setEndTime(new Date(Date.now() + 2 * 60 * 60 * 1000))
      }
    } finally {
      setLoading(false)
    }
  }, [endTime])

  useEffect(() => {
    fetchMaintenanceStatus()
    // Poll every 30 seconds for status updates
    const pollInterval = setInterval(fetchMaintenanceStatus, 30000)
    return () => clearInterval(pollInterval)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Prevent navigation away from the maintenance page
  useEffect(() => {
    // Push a state so back button keeps them on this page
    window.history.pushState(null, '', window.location.href)

    const handlePopState = (e: PopStateEvent) => {
      window.history.pushState(null, '', window.location.href)
    }

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!maintenanceDone) {
        e.preventDefault()
        e.returnValue = ''
      }
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [maintenanceDone])

  // Real countdown timer based on actual end time
  useEffect(() => {
    if (!endTime) return

    const pad = (n: number) => String(Math.max(0, n)).padStart(2, '0')

    const tick = () => {
      const now = Date.now()
      const end = endTime.getTime()
      const remaining = Math.max(0, end - now)

      // Estimate start time as 2 hours before end for progress calculation
      const estimatedStart = end - 2 * 60 * 60 * 1000
      const totalDuration = end - estimatedStart
      const elapsed = now - estimatedStart
      const pct = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100))

      const h = Math.floor(remaining / 3600000)
      const m = Math.floor((remaining % 3600000) / 60000)
      const s = Math.floor((remaining % 60000) / 1000)

      setTimeLeft({ hours: pad(h), minutes: pad(m), seconds: pad(s) })
      setProgressPct(pct)

      if (remaining <= 0) {
        setMaintenanceDone(true)
        // Auto-redirect when maintenance is done
        setTimeout(() => {
          window.location.href = '/'
        }, 5000)
      }
    }

    tick()
    const intervalId = setInterval(tick, 1000)
    return () => clearInterval(intervalId)
  }, [endTime])

  const accentColor = '#F59E0B'
  const accentSoft = 'rgba(245, 158, 11, 0.1)'
  const accentBorder = 'rgba(245, 158, 11, 0.3)'
  const accentBorderSoft = 'rgba(245, 158, 11, 0.2)'

  return (
    <div className="min-h-screen tech-grid theme-bg overflow-hidden">
      {/* Logo bar — no navigation links, just the logo */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 h-14 md:h-[64px]">
        <div className="flex items-center gap-3">
          <Image
            src="/annita-real-logo.png"
            alt="Annita Logo"
            width={32}
            height={32}
            className="rounded-lg object-contain"
          />
          <span className="font-bold text-lg md:text-xl text-[var(--color-text-primary)]">
            Annita<span className="text-[var(--color-accent)]">.</span>
          </span>
        </div>
        <span
          className="text-[9px] font-mono uppercase tracking-widest"
          style={{ color: 'var(--color-text-muted)' }}
        >
          MAINTENANCE MODE
        </span>
      </div>

      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden tech-scanline">
        <div className="absolute inset-0 tech-grid opacity-[0.06]" />
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse at center, ${accentSoft} 0%, transparent 70%)`,
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
              backgroundColor: accentSoft,
              border: `1px solid ${accentBorder}`,
            }}
          >
            <Wrench className="w-10 h-10" style={{ color: accentColor }} />
            {/* Pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-0 rounded-2xl"
              style={{
                border: `1px solid ${accentBorder}`,
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
              backgroundColor: accentSoft,
              border: `1px solid ${accentBorderSoft}`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: accentColor,
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-widest"
              style={{ color: accentColor }}
            >
              SYSTEM_STATUS // MAINTENANCE
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
            {reason && reason !== 'Scheduled Maintenance' ? reason : 'Under Maintenance'}
          </h1>

          {/* Description */}
          <p
            className="text-base md:text-lg mb-2 max-w-lg mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            The Annita ecosystem is currently undergoing scheduled maintenance to bring you a better experience. We&apos;ll be back shortly.
          </p>

          <p
            className="text-sm mb-10 max-w-md mx-auto"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {reason && reason !== 'Scheduled Maintenance' ? reason : 'Estimated time: A few minutes. Thank you for your patience.'}
          </p>

          {/* Countdown + Progress — only show when we have a real endTime */}
          {endTime && !maintenanceDone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div
              className="rounded-2xl p-6 md:p-8 border backdrop-blur-md"
              style={{
                backgroundColor: 'var(--color-surface-card)',
                borderColor: accentBorderSoft,
              }}
            >
              <div
                className="text-[10px] font-mono font-bold uppercase tracking-widest mb-4"
                style={{ color: accentColor }}
              >
                {maintenanceDone ? 'Maintenance Complete' : 'Estimated Time Remaining'}
              </div>
              <div className="flex items-center justify-center gap-2 md:gap-4">
                {[
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Minutes' },
                  { value: timeLeft.seconds, label: 'Seconds' },
                ].map((unit, idx) => (
                  <div key={unit.label} className="flex items-center gap-2 md:gap-4">
                    <div className="text-center">
                      <motion.div
                        key={unit.value}
                        initial={{ y: -8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl md:text-5xl font-extrabold tabular-nums"
                        style={{
                          color: 'var(--color-text-primary)',
                          fontFamily: 'var(--font-syne)',
                        }}
                      >
                        {unit.value}
                      </motion.div>
                      <div
                        className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest mt-1"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        {unit.label}
                      </div>
                    </div>
                    {idx < 2 && (
                      <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-2xl md:text-4xl font-extrabold"
                        style={{ color: accentColor }}
                      >
                        :
                      </motion.span>
                    )}
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mt-6">
                <div className="flex justify-between text-[10px] font-mono mb-2" style={{ color: 'var(--color-text-muted)' }}>
                  <span>Maintenance Progress</span>
                  <motion.span
                    key={Math.round(progressPct)}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {Math.round(progressPct)}% complete
                  </motion.span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden relative"
                  style={{ backgroundColor: 'var(--color-surface-elevated-2)' }}
                >
                  <motion.div
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 1, ease: 'linear' }}
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                      background: `linear-gradient(90deg, ${accentColor}, var(--color-accent))`,
                    }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 w-1/2"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          )}

          {/* Maintenance complete state */}
          {maintenanceDone && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div
                className="rounded-2xl p-6 md:p-8 border backdrop-blur-md"
                style={{
                  backgroundColor: 'var(--color-surface-card)',
                  borderColor: 'rgba(0, 194, 138, 0.3)',
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-4xl md:text-5xl font-extrabold mb-2"
                  style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-syne)' }}
                >
                  100%
                </motion.div>
                <div
                  className="text-[10px] font-mono font-bold uppercase tracking-widest"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Maintenance Complete — Redirecting...
                </div>
              </div>
            </motion.div>
          )}

          {/* Action Buttons — only refresh, no navigation away */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center gap-2 px-6 md:px-12 lg:px-16 py-3 md:py-3.5 rounded-xl font-semibold text-sm md:text-base transition-all button-glow w-full sm:w-auto md:min-w-[240px] lg:min-w-[280px]"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-accent-foreground)',
              }}
            >
              <RefreshCw className="w-4 h-4 md:w-5 md:h-5" />
              Refresh
            </button>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="mailto:info@an-nita.com"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <Mail className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
              info@an-nita.com
            </a>
            <span style={{ color: 'var(--color-text-muted)' }}>·</span>
            <a
              href="tel:+231775057227"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <Phone className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
              +231 77 505 7227
            </a>
          </motion.div>

          {/* Tech decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex items-center justify-center gap-2"
          >
            <span className="text-[9px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--color-text-muted)' }}>
              ANNITA_ECOSYSTEM // STATUS_NODE
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: accentColor,
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
              © {new Date().getFullYear()} Annita LLC · Built in Liberia. Built for the World.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
