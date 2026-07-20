'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldAlert, Mail, Phone, KeyRound, BadgeCheck, LifeBuoy, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function SecurityAwarenessModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Always show the security modal on every visit
    // Wait for welcome modal to be closed before showing security modal
    const checkWelcomeModal = () => {
      const welcomeSeen = localStorage.getItem('welcomeModalSeen')
      if (welcomeSeen) {
        const timer = setTimeout(() => {
          setIsOpen(true)
        }, 800)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(checkWelcomeModal, 200)
        return () => clearTimeout(timer)
      }
    }

    const initialTimer = setTimeout(checkWelcomeModal, 2800)
    return () => clearTimeout(initialTimer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const keyPoints = [
    {
      icon: KeyRound,
      title: 'We Never Ask for Sensitive Codes',
      text: 'Annita will never ask you for your password, OTP, PIN, full card number, or verification codes — by phone, email, SMS, or social media.',
    },
    {
      icon: BadgeCheck,
      title: 'Verify Every Communication',
      text: 'Only trust emails from @an-nita.com domains and official Annita phone numbers. Scammers may impersonate our brand — always double-check.',
    },
    {
      icon: LifeBuoy,
      title: 'When in Doubt, Reach Out',
      text: 'Our customer service team is always willing to help verify any message or call you receive. Contact us before sharing any information.',
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
          style={{ backgroundColor: 'var(--color-surface-scrim)' }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative max-w-lg w-full max-h-[90vh] overflow-y-auto rounded-2xl p-4 sm:p-6 md:p-8 my-2 theme-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full transition-colors hover:bg-[var(--color-surface-elevated-2)] text-[var(--color-text-tertiary)]"
              aria-label="Close security notice"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                <ShieldAlert className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 sm:mb-4" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500">
                  SECURITY ALERT // STAY SAFE
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
                Protect Yourself from Scams
              </h2>

              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Fraudsters may impersonate Annita staff to steal your information. Here&apos;s how to stay safe:
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              {keyPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                    <point.icon className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-1">{point.title}</h3>
                    <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-[var(--color-accent)]/20 bg-[var(--color-accent-soft)]/30">
              <p className="text-xs text-[var(--color-text-secondary)] mb-3 text-center">
                <strong className="text-[var(--color-text-primary)]">Verify any suspicious communication:</strong>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="mailto:support@an-nita.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/50 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  support@an-nita.com
                </a>
                <a
                  href="https://wa.me/231886213748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/50 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  +231 886 213 748
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-2 sm:space-y-3">
              <Link
                href="/security"
                onClick={handleClose}
                className="w-full px-6 py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 hover:brightness-110"
                style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-foreground)' }}
              >
                Learn More About Staying Safe
                <ExternalLink className="w-4 h-4" />
              </Link>

              <button
                onClick={handleClose}
                className="w-full px-6 py-3 rounded-xl font-semibold text-sm transition-all border border-[var(--color-border-card)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/50"
              >
                I Understand — Continue
              </button>
            </div>

            <p className="text-[10px] text-center mt-4 text-[var(--color-text-muted)] font-mono">
              ANNITA_SECURITY // PROTECT_YOURSELF
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
