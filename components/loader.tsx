'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Loader({ onFinished }: { onFinished: () => void }) {
  const [progress, setProgress] = useState(0)
  const [logIndex, setLogIndex] = useState(0)

  const logs = [
    'BOOTING ANNITA CORE V1.2.0...',
    'ESTABLISHING SECURE PROTOCOLS...',
    'CONNECTING INTEGRATED SAAS MARKETPLACE...',
    'INITIALIZING ANNITAPAY FINTECH SUITE...',
    'LINKING ANNITA PULSE E-HEALTH NODES...',
    'STARTING EZRI AI CAREER MATCHMAKER...',
    'SYNCHRONIZING OFFLINE-FIRST MSME STORAGE...',
    'SYSTEM ONLINE. ENGAGING ECOSYSTEM...'
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        const diff = Math.floor(Math.random() * 8) + 4
        return Math.min(prev + diff, 100)
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onFinished()
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [progress, onFinished])

  useEffect(() => {
    const logInterval = setInterval(() => {
      setLogIndex((prev) => {
        if (prev < logs.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 250)
    return () => clearInterval(logInterval)
  }, [logs.length])

  return (
    <div className="fixed inset-0 z-[9999] bg-[var(--color-background)] flex flex-col items-center justify-center p-6 tech-grid transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,194,138,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="w-full max-w-[420px] bg-[var(--color-surface-card)]/80 border border-[var(--color-accent)]/20 rounded-xl p-6 backdrop-blur-xl relative overflow-hidden shadow-[0_0_50px_rgba(0,194,138,0.1)]">
        {/* Tech decorative corners */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-accent)]" />
        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--color-accent)]" />
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--color-accent)]" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-accent)]" />
        
        {/* Scanning grid animation overlay */}
        <div className="absolute inset-0 tech-scanline opacity-10 pointer-events-none" />

        {/* Pulsing indicator */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-[var(--color-accent)] animate-ping" />
          <span className="text-xs font-mono tracking-widest text-[var(--color-accent)] font-bold">ANNITA_SECURE_INIT</span>
        </div>

        {/* Circular Progress Ring */}
        <div className="relative w-36 h-36 mx-auto mb-8 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="72"
              cy="72"
              r="64"
              className="stroke-[var(--color-border-card)] fill-none"
              strokeWidth="4"
            />
            <motion.circle
              cx="72"
              cy="72"
              r="64"
              className="stroke-[var(--color-accent)] fill-none"
              strokeWidth="4"
              strokeDasharray="402"
              initial={{ strokeDashoffset: 402 }}
              animate={{ strokeDashoffset: 402 - (402 * progress) / 100 }}
              transition={{ ease: 'easeInOut' }}
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-3xl font-bold font-syne text-[var(--color-text-primary)]">{progress}%</span>
            <span className="text-[9px] font-mono tracking-wider text-[var(--color-text-tertiary)] uppercase">LOADING</span>
          </div>
        </div>

        {/* Mock booting logs console */}
        <div className="bg-[var(--color-background)]/90 rounded-lg p-3 border border-[var(--color-border-card)] font-mono text-[9px] text-[var(--color-text-tertiary)] h-20 overflow-hidden flex flex-col justify-end">
          <div className="space-y-1 select-none">
            {logs.slice(0, logIndex + 1).map((log, index) => (
              <div key={index} className={`truncate ${index === logIndex ? 'text-[var(--color-accent)]' : 'opacity-65'}`}>
                {index === logIndex ? '> ' : '  '}{log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
