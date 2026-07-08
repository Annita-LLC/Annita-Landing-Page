'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface HolographicTiltProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export default function HolographicTilt({ children, className = '', intensity = 15 }: HolographicTiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = ((y - centerY) / centerY) * -intensity
    const rotateYValue = ((x - centerX) / centerX) * intensity

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovering(false)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      animate={{
        rotateX,
        rotateY
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
    >
      {/* Holographic glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl"
        style={{
          background: isHovering
            ? 'linear-gradient(135deg, var(--color-accent-soft) 0%, rgba(0, 194, 138, 0.05) 50%, var(--color-accent-soft) 100%)'
            : 'transparent',
          opacity: isHovering ? 1 : 0
        }}
        animate={{
          opacity: isHovering ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Scanline overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden"
        style={{
          opacity: isHovering ? 0.3 : 0
        }}
        animate={{
          opacity: isHovering ? 0.3 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-accent)]/10 to-transparent animate-scanline" />
      </motion.div>

      {/* Content with 3D transform */}
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  )
}
