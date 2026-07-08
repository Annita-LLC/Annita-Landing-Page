'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { submitNewsletterForm } from '@/lib/api'
import { HoneypotField } from '@/components/HoneypotField'

interface NewsletterSectionProps {
  /** Visual variant — 'banner' is wide/full-width (for page bodies), 'card' is compact (for sidebars/footers) */
  variant?: 'banner' | 'card'
  /** Optional overrides */
  title?: string
  subtitle?: string
}

export default function NewsletterSection({
  variant = 'banner',
  title = 'Stay Ahead of Africa\'s Digital Revolution',
  subtitle = 'Get product updates, ecosystem news, and exclusive insights from Annita delivered straight to your inbox. No spam — ever.',
}: NewsletterSectionProps) {
  const [email, setEmail] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    setMessage('')

    try {
      const result = await submitNewsletterForm({ email: email.trim(), website_url: websiteUrl })
      if (result.success) {
        setStatus('success')
        setMessage(result.message || 'You\'re subscribed! Welcome to the Annita ecosystem.')
        setEmail('')
        setWebsiteUrl('')
      } else {
        setStatus('error')
        setMessage(result.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Unable to subscribe right now. Please try again later.')
    }
  }

  if (variant === 'card') {
    return (
      <div
        className="rounded-2xl p-6 relative overflow-hidden"
        style={{
          background: 'var(--color-surface-raised)',
          border: '1px solid var(--color-border-default)',
        }}
      >
        {/* Accent glow top-left */}
        <div
          className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-2xl pointer-events-none"
          style={{ background: 'var(--color-accent-soft)' }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'var(--color-accent-soft)' }}
            >
              <Mail className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
            </div>
            <span
              className="text-[10px] font-bold uppercase tracking-[0.18em] font-mono"
              style={{ color: 'var(--color-accent)' }}
            >
              Newsletter
            </span>
          </div>

          <h3
            className="text-base font-bold mb-1.5 leading-snug"
            style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-syne)' }}
          >
            Stay in the loop
          </h3>
          <p className="text-xs mb-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Ecosystem updates & insights. No spam.
          </p>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2 p-3 rounded-lg"
                style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-xs text-emerald-400 leading-relaxed">{message}</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-2">
                <HoneypotField onChange={setWebsiteUrl} />
                <input
                  type="email"
                  id="newsletter-card-email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all"
                  style={{
                    background: 'var(--color-surface-base)',
                    border: '1px solid var(--color-border-default)',
                    color: 'var(--color-text-primary)',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--color-accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--color-border-default)')}
                />
                {status === 'error' && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {message}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all hover:brightness-110 disabled:opacity-60"
                  style={{
                    background: 'var(--color-accent)',
                    color: 'var(--color-accent-foreground)',
                  }}
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>Subscribe <ArrowRight className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    )
  }

  // Default: banner variant
  return (
    <section className="relative overflow-hidden rounded-3xl" aria-label="Newsletter signup">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, var(--color-accent-soft) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      {/* Floating accent orbs */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'var(--color-accent-soft)' }}
      />
      <div
        className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full blur-2xl pointer-events-none"
        style={{ background: 'var(--color-accent-soft)' }}
      />

      <div
        className="relative z-10 px-6 md:px-12 py-12 md:py-16 rounded-3xl"
        style={{ border: '1px solid var(--color-border-accent)' }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5"
                style={{ background: 'var(--color-accent-soft)', border: '1px solid var(--color-border-accent)' }}
              >
                <Mail className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em] font-mono"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Annita Newsletter
                </span>
              </div>

              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight"
                style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-syne)' }}
              >
                {title}
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed max-w-lg"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {subtitle}
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 mt-6">
                {['3,000+ subscribers', 'Weekly insights', 'Unsubscribe anytime'].map(item => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-xs font-mono" style={{ color: 'var(--color-text-tertiary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center gap-4 py-10"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)' }}
                    >
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-syne)' }}>
                        You're in!
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{message}</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="relative"
                  >
                    <HoneypotField onChange={setWebsiteUrl} />
                    <div
                      className="rounded-2xl p-6 md:p-8 space-y-4"
                      style={{
                        background: 'var(--color-surface-raised)',
                        border: '1px solid var(--color-border-default)',
                        backdropFilter: 'blur(12px)',
                      }}
                    >
                      {/* Corner accents */}
                      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 rounded-tl-2xl pointer-events-none" style={{ borderColor: 'var(--color-accent)' }} />
                      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 rounded-br-2xl pointer-events-none" style={{ borderColor: 'var(--color-accent)' }} />

                      <div>
                        <label
                          htmlFor="newsletter-banner-email"
                          className="block text-xs font-mono font-semibold mb-2 uppercase tracking-wider"
                          style={{ color: 'var(--color-text-tertiary)' }}
                        >
                          Email Address
                        </label>
                        <input
                          id="newsletter-banner-email"
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          required
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                          style={{
                            background: 'var(--color-surface-base)',
                            border: '1px solid var(--color-border-default)',
                            color: 'var(--color-text-primary)',
                          }}
                          onFocus={e => (e.target.style.borderColor = 'var(--color-accent)')}
                          onBlur={e => (e.target.style.borderColor = 'var(--color-border-default)')}
                        />
                      </div>

                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-start gap-2 p-3 rounded-lg"
                          style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
                        >
                          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <p className="text-xs text-red-400">{message}</p>
                        </motion.div>
                      )}

                      <button
                        type="submit"
                        id="newsletter-subscribe-btn"
                        disabled={status === 'loading'}
                        className="group w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all hover:brightness-110 disabled:opacity-60"
                        style={{
                          background: 'var(--color-accent)',
                          color: 'var(--color-accent-foreground)',
                        }}
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Subscribing...
                          </>
                        ) : (
                          <>
                            Join the Newsletter
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-[10px] font-mono" style={{ color: 'var(--color-text-muted)' }}>
                        By subscribing you agree to receive communications from Annita LLC. Unsubscribe at any time.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
