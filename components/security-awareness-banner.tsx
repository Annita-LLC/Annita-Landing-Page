'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldAlert, ChevronRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const REAPPEAR_DELAY = 30000 // 30 seconds before banner reappears after dismissal

export default function SecurityAwarenessBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const reappearTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // Wait for welcome modal to be closed before showing banner
    const checkWelcomeModal = () => {
      const welcomeSeen = localStorage.getItem('welcomeModalSeen')
      if (welcomeSeen) {
        const timer = setTimeout(() => {
          setIsVisible(true)
        }, 1200)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(checkWelcomeModal, 200)
        return () => clearTimeout(timer)
      }
    }

    // If welcome modal was already seen in a previous session, show banner sooner
    const welcomeSeen = localStorage.getItem('welcomeModalSeen')
    if (welcomeSeen) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }

    const initialTimer = setTimeout(checkWelcomeModal, 3500)
    return () => clearTimeout(initialTimer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    // Clear any existing reappear timer
    if (reappearTimerRef.current) {
      clearTimeout(reappearTimerRef.current)
    }
    // Reappear after REAPPEAR_DELAY
    reappearTimerRef.current = setTimeout(() => {
      setIsVisible(true)
    }, REAPPEAR_DELAY)
  }

  // Set CSS variable on document root so the sticky header can adjust its top position
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty(
        '--security-banner-height',
        isVisible ? '44px' : '0px'
      )
    }
  }, [isVisible])

  useEffect(() => {
    return () => {
      if (reappearTimerRef.current) {
        clearTimeout(reappearTimerRef.current)
      }
      if (typeof document !== 'undefined') {
        document.documentElement.style.setProperty('--security-banner-height', '0px')
      }
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed top-0 left-0 right-0 z-[60] border-b w-full"
          style={{
            backgroundColor: 'rgba(239, 68, 68, 0.08)',
            borderColor: 'rgba(239, 68, 68, 0.2)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-2.5">
            <div className="flex items-center justify-between gap-4">
              {/* Left: Icon + Message */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <ShieldAlert className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-xs md:text-sm text-[var(--color-text-secondary)] truncate">
                  <span className="font-bold text-red-500">Stay Safe:</span>{' '}
                  Annita will never ask for your password, OTP, or PIN.{' '}
                  <span className="hidden sm:inline">Always verify communications with customer service.</span>
                </p>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <Link
                  href="/security"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent)] hover:underline whitespace-nowrap"
                >
                  Learn More
                  <ChevronRight className="w-3 h-3" />
                </Link>
                <button
                  onClick={handleDismiss}
                  className="p-1.5 rounded-lg transition-colors hover:bg-[var(--color-surface-elevated-2)] text-[var(--color-text-tertiary)]"
                  aria-label="Dismiss security banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
