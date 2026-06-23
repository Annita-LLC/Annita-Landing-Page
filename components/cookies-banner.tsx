'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function CookiesBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAccepted, setHasAccepted] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const accepted = localStorage.getItem('cookiesAccepted')
    if (!accepted) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
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
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          style={{ backgroundColor: '#0F1729', borderTop: '1px solid #1A2640' }}
        >
          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C28A]/5 to-transparent animate-scanline" />
          </div>

          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              {/* Icon and Text */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(0, 194, 138, 0.1)' }}>
                  <Cookie className="w-6 h-6" style={{ color: '#00C28A' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold mb-2" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>
                    Cookie Preferences
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8A9BBB' }}>
                    We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
                    <Link href="/cookies" className="text-[#00C28A] hover:underline ml-1">
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 rounded-lg text-sm font-semibold transition-all border border-[#1A2640] hover:border-[#00C28A]/50"
                  style={{ color: '#8A9BBB', backgroundColor: 'transparent' }}
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 rounded-lg text-sm font-semibold transition-all"
                  style={{ color: '#080D1A', backgroundColor: '#00C28A' }}
                >
                  Accept
                </button>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-lg transition-all hover:bg-[#1A2640]/50"
                  style={{ color: '#8A9BBB' }}
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
