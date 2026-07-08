'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface GlitchEffectProps {
  children: React.ReactNode
  className?: string
}

export default function GlitchEffect({ children, className = '' }: GlitchEffectProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        position: 'relative'
      }}
    >
      {/* Main content */}
      <motion.div
        animate={{
          x: isHovering ? [0, -2, 2, -1, 1, 0] : 0,
          opacity: isHovering ? [1, 0.8, 1] : 1
        }}
        transition={{
          duration: 0.3,
          times: [0, 0.2, 0.4, 0.6, 0.8, 1]
        }}
      >
        {children}
      </motion.div>

      {/* Glitch layers */}
      {isHovering && (
        <>
          <motion.div
            className="absolute inset-0"
            style={{
              color: 'var(--color-accent)',
              mixBlendMode: 'screen'
            }}
            animate={{
              x: [0, -3, 3, -2, 2, 0],
              opacity: [0, 0.8, 0.6, 0.4, 0.2, 0]
            }}
            transition={{
              duration: 0.4,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1]
            }}
          >
            {children}
          </motion.div>

          <motion.div
            className="absolute inset-0"
            style={{
              color: 'var(--color-brand-error, #DC2626)',
              mixBlendMode: 'screen'
            }}
            animate={{
              x: [0, 3, -3, 2, -2, 0],
              opacity: [0, 0.6, 0.4, 0.6, 0.4, 0]
            }}
            transition={{
              duration: 0.4,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1]
            }}
          >
            {children}
          </motion.div>
        </>
      )}
    </motion.div>
  )
}
