'use client'

import { motion } from 'framer-motion'

interface TechSkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string
  height?: string
}

export default function TechSkeleton({ className = '', variant = 'rectangular', width = '100%', height = '40px' }: TechSkeletonProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{
        width,
        height,
        backgroundColor: '#1A2640',
        borderRadius: variant === 'circular' ? '50%' : '4px'
      }}
    >
      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 194, 138, 0.2), transparent)'
        }}
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 194, 138, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 194, 138, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
    </motion.div>
  )
}

// Pre-built skeleton components
export function TechCardSkeleton() {
  return (
    <div className="p-6 rounded-xl" style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}>
      <div className="flex items-center gap-4 mb-4">
        <TechSkeleton variant="circular" width="48px" height="48px" />
        <div className="flex-1">
          <TechSkeleton variant="text" width="60%" height="20px" className="mb-2" />
          <TechSkeleton variant="text" width="40%" height="16px" />
        </div>
      </div>
      <TechSkeleton variant="text" width="100%" height="16px" className="mb-2" />
      <TechSkeleton variant="text" width="80%" height="16px" />
    </div>
  )
}

export function TechListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <TechSkeleton variant="circular" width="40px" height="40px" />
          <div className="flex-1">
            <TechSkeleton variant="text" width="70%" height="16px" className="mb-2" />
            <TechSkeleton variant="text" width="50%" height="14px" />
          </div>
        </div>
      ))}
    </div>
  )
}
