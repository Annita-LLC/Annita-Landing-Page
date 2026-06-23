'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Keyboard, X } from 'lucide-react'

interface Shortcut {
  key: string
  description: string
}

const shortcuts: Shortcut[] = [
  { key: 'Ctrl + K', description: 'Open command palette' },
  { key: 'Ctrl + /', description: 'Search' },
  { key: 'Esc', description: 'Close modals' },
  { key: '↑ ↓', description: 'Navigate lists' },
  { key: 'Enter', description: 'Select item' },
  { key: 'Home', description: 'Go to homepage' },
  { key: 'Ctrl + S', description: 'Save (where applicable)' }
]

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault()
        setIsOpen(!isOpen)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-28 left-4 z-40 p-3 rounded-lg hidden md:block"
        style={{
          backgroundColor: '#0F1729',
          border: '1px solid #1A2640',
          color: '#8A9BBB'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Keyboard Shortcuts (Ctrl + /)"
      >
        <Keyboard className="w-5 h-5" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 z-50 w-full max-w-md"
            >
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  backgroundColor: '#0F1729',
                  border: '1px solid #1A2640'
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#1A2640]">
                  <div className="flex items-center gap-2">
                    <Keyboard className="w-5 h-5" style={{ color: '#00C28A' }} />
                    <h3 className="font-semibold text-white">Keyboard Shortcuts</h3>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-[#1A2640]/50 rounded"
                    style={{ color: '#8A9BBB' }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Shortcuts List */}
                <div className="p-4 space-y-3">
                  {shortcuts.map((shortcut, index) => (
                    <motion.div
                      key={shortcut.key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between"
                    >
                      <span style={{ color: '#8A9BBB' }}>{shortcut.description}</span>
                      <kbd className="px-2 py-1 rounded text-xs font-mono" style={{ backgroundColor: '#1A2640', color: '#F0F4FF' }}>
                        {shortcut.key}
                      </kbd>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-4 py-2 border-t border-[#1A2640] text-center">
                  <p className="text-xs" style={{ color: '#4A5775' }}>
                    Press <kbd className="px-1.5 py-0.5 rounded mx-1" style={{ backgroundColor: '#1A2640', color: '#8A9BBB' }}>Esc</kbd>
                    to close
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
