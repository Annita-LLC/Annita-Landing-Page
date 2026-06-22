'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal 2 seconds after page load
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(8, 13, 26, 0.8)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative max-w-lg w-full rounded-2xl p-8"
            style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full transition-colors hover:bg-[#1A2640]"
              style={{ color: '#8A9BBB' }}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(0, 194, 138, 0.1)' }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" style={{ color: '#00C28A' }}>
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
              
              <h2 className="text-2xl font-bold mb-3" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>
                Welcome to Annita
              </h2>
              
              <p className="text-base leading-relaxed mb-4" style={{ color: '#8A9BBB' }}>
                You're about to access Africa's first all-in-one digital ecosystem. 
              </p>
              
              <p className="text-base leading-relaxed" style={{ color: '#8A9BBB' }}>
                Whether you're looking to build custom solutions, integrate with our platform, or explore our ecosystem of services — you're in the right place.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Link
                href="/solutions"
                onClick={() => setIsOpen(false)}
                className="w-full px-6 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                style={{ backgroundColor: '#00C28A', color: '#080D1A' }}
              >
                Build Custom Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full px-6 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 border-2 hover:bg-[#00C28A] hover:text-[#080D1A] hover:border-[#00C28A]"
                style={{ borderColor: '#00C28A', color: '#00C28A' }}
              >
                Access the Ecosystem
              </Link>
            </div>

            {/* Footer text */}
            <p className="text-xs text-center mt-6" style={{ color: '#6B7B9A' }}>
              Built in Liberia. Built for the World.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
