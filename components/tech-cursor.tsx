'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function TechCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isWiderDevice, setIsWiderDevice] = useState(false)

  useEffect(() => {
    // Check if device is wider than tablet (md breakpoint)
    const checkDevice = () => {
      setIsWiderDevice(window.innerWidth >= 768)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)

    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  useEffect(() => {
    if (!isWiderDevice) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isWiderDevice])

  // Don't render on smaller devices
  if (!isWiderDevice) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50"
        style={{
          backgroundColor: '#00C28A',
          boxShadow: '0 0 20px rgba(0, 194, 138, 0.5), 0 0 40px rgba(0, 194, 138, 0.3)',
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1
        }}
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50"
        style={{
          border: '2px solid #00C28A',
          opacity: 0.5,
          x: mousePosition.x - 16,
          y: mousePosition.y - 16
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 0.8 : 1,
          opacity: isHovering ? 0.3 : 0.5
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20
        }}
      />

      {/* Trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50"
        style={{
          backgroundColor: '#00C28A',
          opacity: 0.3
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 15,
          delay: 0.05
        }}
      />
    </>
  )
}
