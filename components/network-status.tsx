'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Wifi, WifiOff, Activity } from 'lucide-react'

export default function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true)
  const [latency, setLatency] = useState<number | null>(null)

  useEffect(() => {
    // Check online status
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Initial check
    setIsOnline(navigator.onLine)

    // Measure latency
    const measureLatency = async () => {
      const start = performance.now()
      try {
        await fetch(window.location.href, { method: 'HEAD', cache: 'no-store' })
        const end = performance.now()
        setLatency(Math.round(end - start))
      } catch (error) {
        setLatency(null)
      }
    }

    measureLatency()
    const interval = setInterval(measureLatency, 5000)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      clearInterval(interval)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-20 left-4 z-40 hidden md:block"
    >
      <div
        className="flex items-center gap-3 px-4 py-2 rounded-lg"
        style={{
          backgroundColor: 'rgba(15, 23, 41, 0.9)',
          border: '1px solid rgba(26, 38, 64, 0.5)',
          backdropFilter: 'blur(8px)'
        }}
      >
        {/* Status Icon */}
        <motion.div
          animate={{
            scale: isOnline ? [1, 1.1, 1] : 1
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          {isOnline ? (
            <Wifi className="w-4 h-4" style={{ color: '#00C28A' }} />
          ) : (
            <WifiOff className="w-4 h-4" style={{ color: '#EF4444' }} />
          )}
        </motion.div>

        {/* Status Text */}
        <div className="flex flex-col">
          <span className="text-[10px] font-mono font-bold" style={{ color: isOnline ? '#00C28A' : '#EF4444' }}>
            {isOnline ? 'ONLINE' : 'OFFLINE'}
          </span>
          {latency !== null && isOnline && (
            <span className="text-[9px] font-mono" style={{ color: '#8A9BBB' }}>
              {latency}ms
            </span>
          )}
        </div>

        {/* Activity Indicator */}
        {isOnline && (
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#00C28A' }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
          />
        )}
      </div>
    </motion.div>
  )
}
