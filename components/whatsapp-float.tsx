'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, ChevronRight, Eye, EyeOff } from 'lucide-react'

const WHATSAPP_NUMBERS = [
  {
    label: 'Annita LLC',
    number: '+231886213748',
    display: '+231 88 621 3748',
  },
  {
    label: 'Annita LLC',
    number: '+231775057227',
    display: '+231 77 505 7227',
  },
]

const MESSENGER_PAGE = 'annitallc'

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [showBadge, setShowBadge] = useState(true)
  const [userMessage, setUserMessage] = useState('')
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('chat-badge-dismissed')
    if (dismissed) setShowBadge(false)
    const hidden = sessionStorage.getItem('chat-float-hidden')
    if (hidden) setIsHidden(true)
  }, [])

  const hideFloat = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsHidden(true)
    setIsOpen(false)
    sessionStorage.setItem('chat-float-hidden', '1')
  }

  const restoreFloat = () => {
    setIsHidden(false)
    sessionStorage.removeItem('chat-float-hidden')
  }

  const handleOpenWhatsApp = (number: string) => {
    const text = userMessage.trim() || "Hi Annita team! I'd like to chat with support."
    const message = encodeURIComponent(text)
    window.open(`https://wa.me/${number.replace(/[^0-9]/g, '')}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  const handleOpenMessenger = () => {
    window.open(`https://m.me/${MESSENGER_PAGE}`, '_blank', 'noopener,noreferrer')
  }

  const dismissBadge = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowBadge(false)
    sessionStorage.setItem('chat-badge-dismissed', '1')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="w-72 rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-surface-raised)] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#25D366] to-[#0084FF] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center -space-x-1">
                  <span className="w-5 h-5 rounded-full bg-[#25D366] border border-white flex items-center justify-center z-10">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <span className="w-5 h-5 rounded-full bg-[#0084FF] border border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.999.587 3.857 1.594 5.414L2 22l4.686-1.587A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm5.5 13.5h-11v-1h11v1zm0-2.5h-11v-1h11v1zm0-2.5H8v-1h9.5v1z" />
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Chat with us</p>
                  <p className="text-white/80 text-xs">We typically reply within minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              <div>
                <p className="text-xs text-[var(--color-text-tertiary)] mb-2">
                  Type your message (optional):
                </p>
                <textarea
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder="Hi Annita team! I'd like to chat with support."
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/50 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[#25D366]/40 focus:outline-none resize-none transition-colors"
                />
              </div>
              {/* WhatsApp Section */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <p className="text-xs font-medium text-[var(--color-text-secondary)]">WhatsApp</p>
                </div>
                {WHATSAPP_NUMBERS.map((item) => (
                  <button
                    key={item.number}
                    onClick={() => handleOpenWhatsApp(item.number)}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/50 hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all group mb-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium text-[var(--color-text-primary)]">{item.label}</p>
                      <p className="text-xs text-[var(--color-text-tertiary)]">{item.display}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[var(--color-text-tertiary)] group-hover:text-[#25D366] transition-colors" />
                  </button>
                ))}
              </div>

              {/* Messenger Section */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-4 rounded-full bg-[#0084FF] flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.999.587 3.857 1.594 5.414L2 22l4.686-1.587A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm5.5 13.5h-11v-1h11v1zm0-2.5h-11v-1h11v1zm0-2.5H8v-1h9.5v1z" />
                    </svg>
                  </span>
                  <p className="text-xs font-medium text-[var(--color-text-secondary)]">Messenger</p>
                </div>
                <button
                  onClick={handleOpenMessenger}
                  className="w-full flex items-center gap-3 p-2.5 rounded-xl border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/50 hover:border-[#0084FF]/40 hover:bg-[#0084FF]/5 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0084FF]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#0084FF]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.999.587 3.857 1.594 5.414L2 22l4.686-1.587A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm5.5 13.5h-11v-1h11v1zm0-2.5h-11v-1h11v1zm0-2.5H8v-1h9.5v1z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-[var(--color-text-primary)]">Annita LLC</p>
                    <p className="text-xs text-[var(--color-text-tertiary)]">Chat on Facebook Messenger</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--color-text-tertiary)] group-hover:text-[#0084FF] transition-colors" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden Restore Tab */}
      <AnimatePresence>
        {isHidden && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={restoreFloat}
            className="w-10 h-10 rounded-full bg-[var(--color-surface-raised)] border border-[var(--color-border-card)] shadow-lg flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all"
            aria-label="Show chat button"
            title="Show chat"
          >
            <Eye className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      {!isHidden && (
        <div className="relative">
          {showBadge && !isOpen && (
            <button
              onClick={dismissBadge}
              className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-[var(--color-surface-raised)] border border-[var(--color-border-card)] flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors z-10"
              aria-label="Dismiss badge"
            >
              <X className="w-3 h-3" />
            </button>
          )}
          {showBadge && !isOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse z-10" />
          )}
          {/* Hide button */}
          {!isOpen && (
            <button
              onClick={hideFloat}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--color-surface-raised)] border border-[var(--color-border-card)] flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors z-20 opacity-0 group-hover:opacity-100"
              aria-label="Hide chat button"
              title="Hide for now"
            >
              <EyeOff className="w-3 h-3" />
            </button>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#0084FF] shadow-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity group"
            aria-label="Open chat"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            )}
          </motion.button>
        </div>
      )}
    </div>
  )
}
