'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function CookiesBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAccepted, setHasAccepted] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted')

    if (accepted) {
      setHasAccepted(true)
      return
    }

    // Wait for welcome modal to be closed before showing cookies banner
    const checkWelcomeModal = () => {
      const welcomeSeen = localStorage.getItem('welcomeModalSeen')
      if (welcomeSeen) {
        // Welcome modal is closed, show cookies banner after a short delay
        const timer = setTimeout(() => {
          setIsVisible(true)
        }, 500)
        return () => clearTimeout(timer)
      } else {
        // Welcome modal still open, check again
        const timer = setTimeout(checkWelcomeModal, 100)
        return () => clearTimeout(timer)
      }
    }

    // Start checking after initial delay
    const initialTimer = setTimeout(checkWelcomeModal, 2500)
    return () => clearTimeout(initialTimer)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setHasAccepted(true)
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false')
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && !hasAccepted && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 border-t border-[var(--color-border-card)]"
          style={{ backgroundColor: 'var(--color-surface-card)', boxShadow: '0 -8px 32px rgba(0,0,0,0.12)' }}
        >
          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-accent)]/5 to-transparent animate-scanline" />
          </div>

          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              {/* Icon and Text */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-[var(--color-accent-soft)]">
                  <Cookie className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold mb-2 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
                    Cookie Preferences
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
                    <Link href="/cookies" className="text-[var(--color-accent)] hover:underline ml-1">
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 rounded-lg text-sm font-semibold transition-all border border-[var(--color-border-card)] hover:border-[var(--color-accent)]/50 text-[var(--color-text-secondary)] bg-transparent"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 rounded-lg text-sm font-semibold transition-all hover:brightness-110"
                  style={{ color: 'var(--color-accent-foreground)', backgroundColor: 'var(--color-accent)' }}
                >
                  Accept
                </button>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-lg transition-all hover:bg-[var(--color-surface-elevated-2)] text-[var(--color-text-tertiary)]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
