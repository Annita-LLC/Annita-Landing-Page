'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, X, Minus } from 'lucide-react'

interface LogEntry {
  id: number
  timestamp: string
  type: 'info' | 'success' | 'warning' | 'error'
  message: string
}

export default function TerminalWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const generateRandomLog = (): LogEntry => {
      const types: LogEntry['type'][] = ['info', 'success', 'warning', 'error']
      const messages = [
        'System health check: OK',
        'Network latency: 18ms',
        'Cache hit ratio: 94.2%',
        'Active connections: 1,247',
        'Memory usage: 42%',
        'CPU load: 23%',
        'API response time: 45ms',
        'Database queries: 847',
        'Security scan: PASSED',
        'SSL certificate: VALID',
        'Uptime: 99.9%',
        'Region: West Africa',
        'Edge nodes: ONLINE',
        'Load balancer: ACTIVE',
        'CDN status: OPERATIONAL'
      ]

      const type = types[Math.floor(Math.random() * types.length)]
      const message = messages[Math.floor(Math.random() * messages.length)]
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false })

      return {
        id: Date.now(),
        timestamp,
        type,
        message
      }
    }

    // Add initial logs
    const initialLogs = Array.from({ length: 5 }, () => generateRandomLog())
    setLogs(initialLogs)

    // Add new log every 3-5 seconds
    const interval = setInterval(() => {
      setLogs(prev => {
        const newLog = generateRandomLog()
        return [...prev.slice(-9), newLog] // Keep last 10 logs
      })
    }, 3000 + Math.random() * 2000)

    return () => clearInterval(interval)
  }, [])

  const getTypeColor = (type: LogEntry['type']) => {
    switch (type) {
      case 'info': return '#8A9BBB'
      case 'success': return '#00C28A'
      case 'warning': return '#F5A623'
      case 'error': return '#EF4444'
      default: return '#8A9BBB'
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-4 z-40 p-3 rounded-lg"
        style={{
          backgroundColor: '#0F1729',
          border: '1px solid #1A2640',
          color: '#00C28A'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Terminal className="w-5 h-5" />
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-4 z-40 w-[calc(100%-2rem)] md:w-96 left-4 md:left-auto"
            style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', borderRadius: '8px' }}
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#1A2640]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <div className="w-3 h-3 rounded-full bg-[#F5A623]" />
                <div className="w-3 h-3 rounded-full bg-[#00C28A]" />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-[#1A2640]/50 rounded"
                  style={{ color: '#8A9BBB' }}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-[#1A2640]/50 rounded"
                  style={{ color: '#8A9BBB' }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Content */}
            {!isMinimized && (
              <div className="p-4 font-mono text-xs" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {/* Scanline effect */}
                <div className="absolute inset-0 pointer-events-none opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C28A]/5 to-transparent animate-scanline" />
                </div>

                {/* Header */}
                <div className="mb-3 pb-2 border-b border-[#1A2640]/50">
                  <div style={{ color: '#00C28A' }}>ANNITA_SYSTEM_MONITOR v2.0</div>
                  <div style={{ color: '#4A5775' }}>Status: OPERATIONAL | Region: West Africa</div>
                </div>

                {/* Logs */}
                <div className="space-y-1">
                  {logs.map((log) => (
                    <div key={log.id} className="flex items-start gap-2">
                      <span style={{ color: '#4A5775' }}>{log.timestamp}</span>
                      <span style={{ color: getTypeColor(log.type) }}>
                        [{log.type.toUpperCase()}]
                      </span>
                      <span style={{ color: '#8A9BBB' }}>{log.message}</span>
                    </div>
                  ))}
                </div>

                {/* Blinking cursor */}
                <div className="mt-2 flex items-center gap-2">
                  <span style={{ color: '#00C28A' }}>$</span>
                  <span className="w-2 h-4 bg-[#00C28A] animate-pulse" />
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
