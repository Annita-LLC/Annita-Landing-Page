'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

export default function TechClock() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  })
  const [date, setDate] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
        milliseconds: now.getMilliseconds()
      })
      setDate(now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 16) // ~60fps for milliseconds

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-20 right-4 z-40"
    >
      <div
        className="flex flex-col items-end gap-1 px-4 py-2 rounded-lg"
        style={{
          backgroundColor: 'rgba(15, 23, 41, 0.9)',
          border: '1px solid rgba(26, 38, 64, 0.5)',
          backdropFilter: 'blur(8px)'
        }}
      >
        {/* Time */}
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3" style={{ color: '#00C28A' }} />
          <div className="font-mono text-sm" style={{ color: '#F0F4FF' }}>
            {formatNumber(time.hours)}:{formatNumber(time.minutes)}:{formatNumber(time.seconds)}
          </div>
        </div>

        {/* Milliseconds */}
        <div className="font-mono text-[10px]" style={{ color: '#8A9BBB' }}>
          .{formatNumber(Math.floor(time.milliseconds / 10))}
        </div>

        {/* Date */}
        <div className="font-mono text-[10px]" style={{ color: '#4A5775' }}>
          {date}
        </div>

        {/* Timezone */}
        <div className="font-mono text-[9px]" style={{ color: '#4A5775' }}>
          UTC{time.hours >= 12 ? '+' : '-'}
        </div>
      </div>
    </motion.div>
  )
}
