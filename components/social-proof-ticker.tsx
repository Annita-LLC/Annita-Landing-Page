'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Users, TrendingUp } from 'lucide-react'

interface Activity {
  id: number
  type: 'signup' | 'purchase' | 'view'
  message: string
  time: string
}

const activities: Activity[] = [
  { id: 1, type: 'signup', message: 'New MSME onboarded from Nigeria', time: '2m ago' },
  { id: 2, type: 'purchase', message: 'Payment processed: $1,250', time: '5m ago' },
  { id: 3, type: 'view', message: 'Solutions page viewed by enterprise client', time: '8m ago' },
  { id: 4, type: 'signup', message: 'New vendor joined from Ghana', time: '12m ago' },
  { id: 5, type: 'purchase', message: 'Grant application submitted', time: '15m ago' },
  { id: 6, type: 'view', message: 'Contact form submitted from Kenya', time: '20m ago' },
  { id: 7, type: 'signup', message: 'New user registered from Liberia', time: '25m ago' },
  { id: 8, type: 'purchase', message: 'Enterprise solution inquiry', time: '30m ago' }
]

export default function SocialProofTicker() {
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let index = 0

    const showActivity = () => {
      setCurrentActivity(activities[index])
      setIsVisible(true)

      setTimeout(() => {
        setIsVisible(false)
      }, 4000)

      index = (index + 1) % activities.length
    }

    // Start after 5 seconds
    const initialDelay = setTimeout(showActivity, 5000)
    const interval = setInterval(showActivity, 8000)

    return () => {
      clearTimeout(initialDelay)
      clearInterval(interval)
    }
  }, [])

  const getIcon = (type: Activity['type']) => {
    switch (type) {
      case 'signup':
        return <Users className="w-4 h-4" style={{ color: '#00C28A' }} />
      case 'purchase':
        return <TrendingUp className="w-4 h-4" style={{ color: '#00C28A' }} />
      case 'view':
        return <CheckCircle className="w-4 h-4" style={{ color: '#00C28A' }} />
      default:
        return <CheckCircle className="w-4 h-4" style={{ color: '#00C28A' }} />
    }
  }

  return (
    <AnimatePresence>
      {isVisible && currentActivity && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: 0 }}
          className="fixed bottom-28 right-4 z-40"
        >
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-lg"
            style={{
              backgroundColor: 'rgba(15, 23, 41, 0.95)',
              border: '1px solid rgba(0, 194, 138, 0.3)',
              backdropFilter: 'blur(8px)',
              maxWidth: '300px'
            }}
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              {getIcon(currentActivity.type)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {currentActivity.message}
              </p>
              <p className="text-xs" style={{ color: '#8A9BBB' }}>
                {currentActivity.time}
              </p>
            </div>

            {/* Pulse indicator */}
            <motion.div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: '#00C28A' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
