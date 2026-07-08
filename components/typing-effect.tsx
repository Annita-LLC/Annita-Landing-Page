'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingEffectProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export default function TypingEffect({ text, className = '', speed = 50, delay = 0 }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let currentIndex = 0

    const startTyping = () => {
      timeout = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          currentIndex++
          startTyping()
        } else {
          setIsComplete(true)
        }
      }, speed)
    }

    const initialDelay = setTimeout(startTyping, delay)

    return () => {
      clearTimeout(initialDelay)
      clearTimeout(timeout)
    }
  }, [text, speed, delay])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-6 ml-1"
        style={{ backgroundColor: 'var(--color-accent)' }}
        animate={{
          opacity: isComplete ? [1, 0] : [1, 0, 1]
        }}
        transition={{
          duration: 0.8,
          repeat: isComplete ? 0 : Infinity,
          repeatDelay: 0.2
        }}
      />
    </span>
  )
}
