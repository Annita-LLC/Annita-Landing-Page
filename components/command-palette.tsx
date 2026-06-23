'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Command } from 'lucide-react'
import Link from 'next/link'

interface CommandItem {
  id: string
  label: string
  description: string
  href: string
  shortcut?: string
}

const commands: CommandItem[] = [
  { id: 'home', label: 'Home', description: 'Go to homepage', href: '/' },
  { id: 'solutions', label: 'Solutions', description: 'View custom solutions', href: '/solutions' },
  { id: 'about', label: 'About Us', description: 'Learn about Annita', href: '/about' },
  { id: 'contact', label: 'Contact', description: 'Get in touch', href: '/contact' },
  { id: 'contact-sales', label: 'Contact Sales', description: 'Enterprise inquiries', href: '/contact-sales' },
  { id: 'awards', label: 'Awards', description: 'View recognitions', href: '/awards' },
  { id: 'login', label: 'Login', description: 'Access your account', href: '/login' },
  { id: 'cookies', label: 'Cookie Policy', description: 'Privacy settings', href: '/cookies' }
]

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [filteredCommands, setFilteredCommands] = useState<CommandItem[]>(commands)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
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

  useEffect(() => {
    if (query) {
      const filtered = commands.filter(cmd =>
        cmd.label.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredCommands(filtered)
    } else {
      setFilteredCommands(commands)
    }
  }, [query])

  return (
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

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl"
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{
                backgroundColor: '#0F1729',
                border: '1px solid #1A2640'
              }}
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-[#1A2640]">
                <Search className="w-5 h-5" style={{ color: '#8A9BBB' }} />
                <input
                  type="text"
                  placeholder="Search commands..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-white placeholder-[#8A9BBB]"
                  autoFocus
                />
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 rounded text-xs" style={{ backgroundColor: '#1A2640', color: '#8A9BBB' }}>
                    <Command className="w-3 h-3 inline mr-1" />
                    K
                  </kbd>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-[#1A2640]/50 rounded"
                    style={{ color: '#8A9BBB' }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Command List */}
              <div className="max-h-96 overflow-y-auto">
                {filteredCommands.length === 0 ? (
                  <div className="px-4 py-8 text-center" style={{ color: '#8A9BBB' }}>
                    No commands found
                  </div>
                ) : (
                  filteredCommands.map((command) => (
                    <Link
                      key={command.id}
                      href={command.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 hover:bg-[#1A2640]/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-white">{command.label}</div>
                          <div className="text-sm" style={{ color: '#8A9BBB' }}>
                            {command.description}
                          </div>
                        </div>
                        {command.shortcut && (
                          <kbd className="px-2 py-1 rounded text-xs" style={{ backgroundColor: '#1A2640', color: '#8A9BBB' }}>
                            {command.shortcut}
                          </kbd>
                        )}
                      </div>
                    </Link>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-[#1A2640] flex items-center justify-between text-xs" style={{ color: '#4A5775' }}>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded" style={{ backgroundColor: '#1A2640' }}>↑↓</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded" style={{ backgroundColor: '#1A2640' }}>↵</kbd>
                    Select
                  </span>
                </div>
                <span>Powered by Annita</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
