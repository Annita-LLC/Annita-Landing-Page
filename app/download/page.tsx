'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Download, Bell, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import BetaSignup from '@/components/beta-signup'
import { HoneypotField } from '@/components/HoneypotField'
import { submitDownloadNotifyForm } from '@/lib/api'

export default function DownloadPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [honeypot, setHoneypot] = useState('')
  const [appProgress, setAppProgress] = useState(0)
  const [appLogIndex, setAppLogIndex] = useState(0)

  const appLogs = [
    'BOOTING ANNITAPLUG v0.95...',
    'AUTHENTICATING SECURE SESSION...',
    'LOADING ECOSYSTEM MODULES...',
    'SYNCING ANNITAPAY WALLET...',
    'INITIALIZING AI ASSISTANT...',
    'CONNECTING OFFLINE CACHE...',
    'APP READY. WELCOME TO ANNITA.'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setAppProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        const diff = Math.floor(Math.random() * 6) + 3
        return Math.min(prev + diff, 100)
      })
    }, 120)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (appProgress === 100) {
      const timeout = setTimeout(() => {
        setAppProgress(0)
        setAppLogIndex(0)
      }, 2500)
      return () => clearTimeout(timeout)
    }
  }, [appProgress])

  useEffect(() => {
    const logInterval = setInterval(() => {
      setAppLogIndex((prev) => {
        if (prev < appLogs.length - 1) return prev + 1
        return prev
      })
    }, 300)
    return () => clearInterval(logInterval)
  }, [appLogs.length])

  async function handleNotify(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setLoading(true)
    setError(null)

    const result = await submitDownloadNotifyForm({ email, website_url: honeypot })

    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.message || 'Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen tech-grid theme-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center px-4 md:px-8 py-16 md:py-20 overflow-hidden tech-scanline">
        <div className="absolute inset-0 tech-grid opacity-[0.08]" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% -20%, rgba(0, 194, 138, 0.15), transparent 70%), linear-gradient(135deg, rgba(0, 194, 138, 0.03) 0%, transparent 50%), linear-gradient(225deg, rgba(0, 194, 138, 0.03) 0%, transparent 50%)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px'
        }} />

        {/* Corner micro brackets */}
        <span className="absolute top-8 left-8 w-6 h-6 border-t border-l border-[var(--color-accent)]/20" />
        <span className="absolute top-8 right-8 w-6 h-6 border-t border-r border-[var(--color-accent)]/20" />
        <span className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-[var(--color-accent)]/20" />
        <span className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-[var(--color-accent)]/20" />

        {/* Floating System Telemetry Log */}
        <div className="hidden lg:block absolute bottom-6 left-8 font-mono text-[9px] text-[#8A9BBB]/25 space-y-1 select-none pointer-events-none">
          <div>[MANIFEST: ANNITAPLUG_DOWNLOAD]</div>
          <div>STATUS: BUILD_95% // ETA: Q4_2026</div>
        </div>
        <div className="hidden lg:block absolute bottom-6 right-8 font-mono text-[9px] text-[#8A9BBB]/25 space-y-1 text-right select-none pointer-events-none">
          <div>PLATFORMS: IOS // ANDROID</div>
          <div>RELEASE_PHASE: PRE_LAUNCH</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          {/* System badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-4 px-3 py-1.5 rounded-md mb-8 border border-[var(--color-accent)]/20 bg-[var(--color-surface-card)]/60 backdrop-blur-md relative overflow-hidden group"
          >
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--color-accent)]/50" />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--color-accent)]/50" />
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">
              SYS_NODE // <span className="text-[var(--color-accent)] font-bold">ANNITAPLUG_DOWNLOAD</span>
            </span>
          </motion.div>

          {/* App icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-3xl mb-8 border border-[var(--color-accent)]/30 bg-[var(--color-surface-card)] backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent" />
            <Download className="w-10 h-10 md:w-14 md:h-14 text-[var(--color-accent)] relative z-10" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 word-break"
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}
          >
            <span className="text-[var(--color-text-primary)]">Annita</span><span className="text-[var(--color-accent)]">Plug</span>
          </motion.h1>

          {/* Coming Soon badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)]"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-accent)]">95% Complete — Coming Soon</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-[var(--color-text-secondary)]"
          >
            AnnitaPlug isn&apos;t available for download yet. We&apos;re putting the finishing touches on something powerful. Be the first to know when it drops.
          </motion.p>
        </motion.div>
      </section>

      {/* App Loading Simulation - Phone Mockup */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-3 flex items-center justify-center gap-2">
            <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" />
            App Loading Simulation
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
            First Screen Experience
          </h2>
          <p className="text-sm text-[var(--color-text-tertiary)] max-w-2xl mx-auto">
            This is what you&apos;ll see when you open AnnitaPlug for the first time. A secure, animated boot sequence that loads the entire ecosystem.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Phone frame */}
            <div className="relative w-[280px] h-[580px] rounded-[3rem] border-[3px] border-[var(--color-border-card)] bg-[var(--color-surface-base)] shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[var(--color-surface-base)] rounded-b-2xl z-20 border-x border-b border-[var(--color-border-card)]" />
              {/* Side buttons */}
              <div className="absolute left-[-3px] top-32 w-[3px] h-12 bg-[var(--color-border-card)] rounded-l-sm" />
              <div className="absolute left-[-3px] top-48 w-[3px] h-16 bg-[var(--color-border-card)] rounded-l-sm" />
              <div className="absolute right-[-3px] top-40 w-[3px] h-20 bg-[var(--color-border-card)] rounded-r-sm" />

              {/* Screen content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center tech-grid overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
                {/* Radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,194,138,0.08)_0%,transparent_70%)] pointer-events-none" />
                {/* Scanline */}
                <div className="absolute inset-0 tech-scanline opacity-10 pointer-events-none" />

                {/* App loading content */}
                <div className="relative z-10 flex flex-col items-center w-full px-6">
                  {/* Logo with pulse ring */}
                  <div className="relative mb-8">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                      className="absolute inset-0 rounded-2xl border-2 border-[var(--color-accent)]"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
                      className="absolute inset-0 rounded-2xl border border-[var(--color-accent)]"
                    />
                    <div className="relative w-20 h-20 rounded-2xl bg-[var(--color-surface-card)] border border-[var(--color-accent)]/30 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent" />
                      <Image
                        src="/annita-real-logo.png"
                        alt="Annita"
                        width={48}
                        height={48}
                        className="relative z-10 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* App name */}
                  <div className="text-center mb-6">
                    <div className="text-xl font-extrabold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
                      Annita<span className="text-[var(--color-accent)]">Plug</span>
                    </div>
                    <div className="text-[9px] font-mono text-[var(--color-text-muted)] uppercase tracking-widest mt-1">
                      v0.95 // BETA
                    </div>
                  </div>

                  {/* Circular progress */}
                  <div className="relative w-28 h-28 flex items-center justify-center mb-6">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r="48"
                        className="stroke-[var(--color-border-card)] fill-none"
                        strokeWidth="3"
                      />
                      <motion.circle
                        cx="56"
                        cy="56"
                        r="48"
                        className="stroke-[var(--color-accent)] fill-none"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="302"
                        animate={{ strokeDashoffset: 302 - (302 * appProgress) / 100 }}
                        transition={{ ease: 'easeInOut' }}
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-2xl font-bold font-syne text-[var(--color-text-primary)]">{appProgress}%</span>
                      <span className="text-[8px] font-mono tracking-wider text-[var(--color-text-tertiary)] uppercase">LOADING</span>
                    </div>
                  </div>

                  {/* Boot logs */}
                  <div className="w-full bg-[var(--color-surface-card)]/60 rounded-lg p-2.5 border border-[var(--color-border-card)] font-mono text-[7px] text-[var(--color-text-tertiary)] h-16 overflow-hidden flex flex-col justify-end">
                    <div className="space-y-0.5 select-none">
                      {appLogs.slice(0, appLogIndex + 1).map((log, index) => (
                        <div
                          key={index}
                          className={`truncate ${index === appLogIndex ? 'text-[var(--color-accent)]' : 'opacity-60'}`}
                        >
                          {index === appLogIndex ? '> ' : '  '}{log}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="mt-4 flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${appProgress === 100 ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-accent)] animate-pulse'}`} />
                    <span className="text-[8px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">
                      {appProgress === 100 ? 'READY' : 'INITIALIZING'}
                    </span>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-[var(--color-text-muted)]/30" />
              </div>
            </div>
          </motion.div>

          {/* Feature highlights next to phone */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 max-w-sm"
          >
            {[
              { title: 'Secure Boot Sequence', desc: 'Every app launch verifies your session with end-to-end encryption before loading.' },
              { title: 'Ecosystem Sync', desc: 'AnnitaPay, AI assistant, and offline cache initialize in parallel for instant access.' },
              { title: 'Offline-First Loading', desc: 'Your data is cached locally, so the app loads instantly even without connectivity.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="p-4 rounded-xl border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/50 backdrop-blur-md"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-1.5 shrink-0 animate-pulse" />
                  <div>
                    <div className="text-sm font-bold text-[var(--color-text-primary)] mb-1">{item.title}</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platform Badges Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-3 flex items-center justify-center gap-2">
            <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" />
            Available Platforms
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
            Two Platforms. One Ecosystem.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* iOS badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl p-8 border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/50 backdrop-blur-md overflow-hidden group opacity-60"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent" />
            <div className="absolute top-0 right-0 px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-surface-raised)] rounded-bl-lg border-l border-b border-[var(--color-border-card)]">
              Coming Soon
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-[var(--color-text-primary)]">App Store</div>
                <div className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider">iOS — iPhone & iPad</div>
              </div>
            </div>
          </motion.div>

          {/* Android badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl p-8 border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/50 backdrop-blur-md overflow-hidden group opacity-60"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent" />
            <div className="absolute top-0 right-0 px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] bg-[var(--color-surface-raised)] rounded-bl-lg border-l border-b border-[var(--color-border-card)]">
              Coming Soon
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                  <path d="M17.523 15.341c-.493 0-.894-.4-.894-.893s.4-.894.894-.894.894.4.894.894-.4.893-.894.893m-11.046 0c-.493 0-.894-.4-.894-.893s.4-.894.894-.894.894.4.894.894-.4.893-.894.893m11.362-4.793l1.773-3.07a.369.369 0 00-.135-.504.369.369 0 00-.504.135l-1.795 3.109c-1.372-.626-2.913-.976-4.578-.976s-3.206.35-4.578.976L7.247 7.11a.369.369 0 00-.504-.135.369.369 0 00-.135.504l1.773 3.07C4.308 12.353 2.25 15.567 2.25 19.5h19.5c0-3.933-2.058-7.147-5.911-8.952"/>
                </svg>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-[var(--color-text-primary)]">Google Play</div>
                <div className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider">Android — All Devices</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Build Simulation Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md mb-4 border border-[var(--color-accent)]/20 bg-[var(--color-surface-card)]/60 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-[var(--color-accent)] font-bold uppercase">LIVE BUILD // 95% COMPLETE</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
            App Development in Real Time
          </h2>
          <p className="text-sm text-[var(--color-text-tertiary)] max-w-2xl mx-auto">
            AnnitaPlug is in the final stretch. Watch the build progress as our team adds the finishing touches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Progress Bars Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl p-6 md:p-8 border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/50 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>Feature Completion</h3>
                <span className="text-[10px] font-mono text-[var(--color-accent)] font-bold">95%</span>
              </div>

              <div className="space-y-5">
                {[
                  { label: 'Core Architecture', progress: 100, status: 'COMPLETE' },
                  { label: 'E-commerce Module', progress: 98, status: 'POLISHING' },
                  { label: 'AnnitaPay Integration', progress: 96, status: 'TESTING' },
                  { label: 'AI Assistant Engine', progress: 94, status: 'INTEGRATING' },
                  { label: 'Push Notifications', progress: 92, status: 'WIRING' },
                  { label: 'Offline Sync Engine', progress: 90, status: 'OPTIMIZING' },
                ].map((feature, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-medium text-[var(--color-text-secondary)]">{feature.label}</span>
                      <span className="text-[9px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">{feature.status}</span>
                    </div>
                    <div className="relative h-2 rounded-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${feature.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                        className="h-full rounded-full relative"
                        style={{
                          background: feature.progress === 100
                            ? 'linear-gradient(90deg, var(--color-accent), var(--color-accent))'
                            : 'linear-gradient(90deg, var(--color-accent)/60, var(--color-accent))'
                        }}
                      >
                        {feature.progress < 100 && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                        )}
                      </motion.div>
                    </div>
                    <div className="text-right mt-0.5">
                      <span className="text-[9px] font-mono text-[var(--color-text-muted)]">{feature.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Overall progress */}
              <div className="mt-6 pt-6 border-t border-[var(--color-border-card)]/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[var(--color-text-primary)]">Overall Build Progress</span>
                  <span className="text-sm font-bold text-[var(--color-accent)] font-mono">95%</span>
                </div>
                <div className="relative h-3 rounded-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '95%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="h-full rounded-full relative"
                    style={{ background: 'linear-gradient(90deg, var(--color-accent)/70, var(--color-accent))' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Live Build Log Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl p-6 md:p-8 border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/50 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>Build Log</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                  <span className="text-[10px] font-mono text-[var(--color-accent)] font-bold uppercase">LIVE</span>
                </div>
              </div>

              <div className="space-y-2.5 font-mono text-xs max-h-[340px] overflow-hidden">
                {[
                  { time: '14:32:08', text: 'Core architecture build... PASSED', type: 'success' },
                  { time: '14:32:15', text: 'E-commerce module: cart sync verified', type: 'success' },
                  { time: '14:32:22', text: 'AnnitaPay SDK: token encryption OK', type: 'success' },
                  { time: '14:32:31', text: 'AI engine: model inference optimized', type: 'success' },
                  { time: '14:32:39', text: 'Push notification service: configuring APNs', type: 'pending' },
                  { time: '14:32:47', text: 'Offline sync: conflict resolution 92%', type: 'pending' },
                  { time: '14:32:55', text: 'UI/UX: dark mode assets rendering', type: 'active' },
                  { time: '14:33:02', text: 'Localization: 14 languages at 95%', type: 'active' },
                  { time: '14:33:10', text: 'Security audit: OWASP compliance 96%', type: 'success' },
                  { time: '14:33:18', text: 'Beta testing: 847 testers onboarded', type: 'active' },
                ].map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[var(--color-text-muted)] shrink-0">{log.time}</span>
                    <span className={`shrink-0 ${
                      log.type === 'success' ? 'text-[var(--color-accent)]' :
                      log.type === 'pending' ? 'text-yellow-500' :
                      'text-[var(--color-text-secondary)]'
                    }`}>
                      {log.type === 'success' ? '[OK]' : log.type === 'pending' ? '[..]' : '[>>]'}
                    </span>
                    <span className={`${
                      log.type === 'active' ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-tertiary)]'
                    }`}>
                      {log.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Stats row */}
              <div className="mt-6 pt-6 border-t border-[var(--color-border-card)]/50 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-[var(--color-accent)] font-mono">847</div>
                  <div className="text-[9px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">Beta Testers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-[var(--color-accent)] font-mono">14</div>
                  <div className="text-[9px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-[var(--color-accent)] font-mono">96%</div>
                  <div className="text-[9px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">Security</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Milestone timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6"
        >
          <div className="rounded-2xl p-6 md:p-8 border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/50 backdrop-blur-md">
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: 'var(--font-syne)' }}>Release Milestones</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { phase: 'Alpha', status: 'COMPLETE', date: 'Q1 2026', done: true },
                { phase: 'Beta', status: 'COMPLETE', date: 'Q2 2026', done: true },
                { phase: 'Release Candidate', status: 'IN PROGRESS', date: 'Q3 2026', done: false, active: true },
                { phase: 'Public Launch', status: 'PENDING', date: 'Q4 2026', done: false },
              ].map((milestone, i) => (
                <div key={i} className="relative">
                  <div className={`p-4 rounded-xl border ${
                    milestone.done ? 'border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)]' :
                    milestone.active ? 'border-[var(--color-accent)]/40 bg-[var(--color-surface-card)]' :
                    'border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/50'
                  } transition-all`}>
                    <div className={`text-[9px] font-mono uppercase tracking-widest mb-1 ${
                      milestone.done ? 'text-[var(--color-accent)]' :
                      milestone.active ? 'text-[var(--color-accent)]' :
                      'text-[var(--color-text-muted)]'
                    }`}>
                      {milestone.status}
                    </div>
                    <div className={`text-sm font-bold mb-1 ${
                      milestone.done || milestone.active ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-muted)]'
                    }`}>
                      {milestone.phase}
                    </div>
                    <div className="text-[10px] font-mono text-[var(--color-text-muted)]">{milestone.date}</div>
                    {milestone.active && (
                      <div className="mt-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                        <span className="text-[9px] font-mono text-[var(--color-accent)]">95% COMPLETE</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Beta Signup Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'var(--color-accent-soft)', border: '1px solid var(--color-border-accent)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)] font-mono">Limited Beta</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-syne text-[var(--color-text-primary)]">Join AnnitaPlug Beta</h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            AnnitaPlug is Annita's AI commerce and payment OS — one chat interface connecting buyers, sellers, and logistics across Africa's digital economy. Limited spots available: 100 per role.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <BetaSignup />
        </div>
      </section>

      {/* Notify Me Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto"
        >
          <div className="relative rounded-2xl p-8 md:p-12 border border-[var(--color-accent)]/20 bg-[var(--color-surface-card)] backdrop-blur-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent" />
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--color-accent)]/50" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[var(--color-accent)]/50" />
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[var(--color-accent)]/50" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--color-accent)]/50" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent-soft)] border border-[var(--color-border-accent)] mb-6">
                <Bell className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
                Get Notified at Launch
              </h2>
              <p className="text-sm text-[var(--color-text-tertiary)] mb-8 max-w-2xl mx-auto leading-relaxed">
                Drop your email and we&apos;ll let you know the moment AnnitaPlug goes live on the App Store and Google Play.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
                  <span className="text-sm font-medium text-[var(--color-accent)]">You&apos;re on the list! We&apos;ll be in touch.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
                  <HoneypotField onChange={setHoneypot} />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 rounded-xl bg-[var(--color-accent)] text-[var(--color-accent-foreground)] text-sm font-semibold hover:brightness-110 transition-all button-glow inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Notify Me
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  {error && (
                    <p className="text-xs text-[var(--color-brand-error)] mt-2 sm:col-span-2">{error}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-[var(--color-border-card)]" style={{ backgroundColor: 'var(--color-surface-base)' }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none tech-grid" />
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-accent)]/5 to-transparent animate-scanline" />
        </div>

        <div className="relative z-10 py-12 px-4 md:px-8 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/annita-real-logo.png" alt="Annita Logo" width={40} height={40} className="rounded-lg" />
                <div>
                  <div className="font-bold text-[var(--color-text-primary)]">Annita<span className="text-[var(--color-accent)]">.</span></div>
                  <div className="text-[10px] font-mono text-[var(--color-accent)]">SYSTEM: ONLINE</div>
                </div>
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)] mb-4 leading-relaxed">Annita is Africa&apos;s first all-in-one digital ecosystem, integrating e-commerce, fintech, AI, communication, marketing, logistics, and more into a single, connected system.</p>
              <div className="flex items-center gap-2 text-[10px] font-mono text-[var(--color-text-muted)]">
                <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse" />
                <span>STATUS: OPERATIONAL</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" /> Ecosystem
              </div>
              <div className="space-y-2">
                <Link href="/ecosystem" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Annita Ecosystem</Link>
                <a href="https://www.an-nitapay.com" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">AnnitaPay</a>
                <a href="https://www.an-nita-pulse.org" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Annita Pulse</a>
                <a href="https://www.ezri-africa.com" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Ezri</a>
                <a href="https://an-nitaimpactinnovationhub.com" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">AIIM Hub</a>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" /> Company
              </div>
              <div className="space-y-2">
                <Link href="/about" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">About Us</Link>
                <Link href="/solutions" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Custom Solutions</Link>
                <Link href="/careers" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Careers</Link>
                <Link href="/partnerships" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Partnerships</Link>
                <Link href="/awards" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Awards</Link>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" /> Legal
              </div>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Terms & Conditions</Link>
                <Link href="/cookies" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Cookie Policy</Link>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" /> Contact
              </div>
              <div className="space-y-2">
                <Link href="/contact" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Contact Us</Link>
                <Link href="/contact-sales" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Contact Sales</Link>
                <Link href="/partnerships" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Partnership</Link>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-[var(--color-border-card)]/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] font-mono text-[var(--color-text-muted)]">© 2026 Annita LLC. All rights reserved.</p>
            <p className="text-[10px] font-mono text-[var(--color-text-muted)]">Built in Liberia. Built for the World.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
