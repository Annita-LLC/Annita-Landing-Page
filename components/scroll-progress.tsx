'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      style={{
        scaleX,
        opacity: isVisible ? 1 : 0
      }}
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
    >
      {/* Progress bar with grid pattern */}
      <div className="relative h-full">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#00C28A',
            backgroundImage: `
              linear-gradient(90deg, transparent 0%, rgba(0, 194, 138, 0.5) 50%, transparent 100%)
            `,
            backgroundSize: '100% 100%'
          }}
        />
        {/* Glow effect */}
        <div
          className="absolute inset-0 blur-sm"
          style={{
            backgroundColor: '#00C28A',
            opacity: 0.5
          }}
        />
        {/* Scanline effect */}
        <div className="absolute inset-0 animate-scanline" style={{
          background: 'linear-gradient(to bottom, transparent, rgba(0, 194, 138, 0.3), transparent)',
          animationDuration: '2s'
        }} />
      </div>
    </motion.div>
  )
}
