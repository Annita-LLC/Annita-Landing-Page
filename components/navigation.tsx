'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const ecosystemItems = [
  {
    name: 'Annita Ecosystem',
    description: 'Marketplace & SaaS',
    icon: '/annita-real-logo.png',
    href: '/login',
    isFlagship: true,
  },
  {
    name: 'AnnitaPay',
    description: 'Fintech',
    icon: '/AnnitaPay-Logo.jpg',
    href: 'https://www.an-nitapay.com',
    isComingSoon: true,
  },
  {
    name: 'Annita Pulse',
    description: 'Digital Health',
    icon: '/Annita-Pulse-Logo.png',
    href: 'https://www.an-nita-pulse.org',
  },
  {
    name: 'Ezri',
    description: 'AI & Careers',
    icon: '/Ezri-Logo.jpg',
    href: 'https://www.ezri-africa.com',
  },
  {
    name: 'Annita Impact-Innovation Hub',
    description: 'Innovation & Community',
    icon: '/AIIM-Logo.png',
    href: 'https://an-nitaimpactinnovationhub.com',
  },
  {
    name: 'Custom Solutions',
    description: 'Technology Services',
    icon: '/annita-real-logo.png',
    href: '/solutions',
  },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)
  const { scrollY } = useScroll()
  const navBackground = useTransform(scrollY, [0, 20], ['rgba(8, 13, 26, 0)', 'rgba(8, 13, 26, 0.92)'])
  const navBorder = useTransform(scrollY, [0, 20], ['rgba(26, 38, 64, 0)', 'rgba(26, 38, 64, 1)'])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownOpen && !(event.target as HTMLElement).closest('[data-dropdown-trigger]')) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownOpen])

  return (
    <>
      <motion.header 
        className="sticky top-0 z-50 w-full h-14 md:h-[64px] transition-all"
        style={{ background: navBackground, borderColor: navBorder }}
      >
        <div className="flex items-center justify-between gap-4 h-full px-4 md:px-8 max-w-[1400px] mx-auto w-full">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/annita-real-logo.png"
              alt="Annita Logo"
              width={32}
              height={32}
              className="rounded-lg object-contain"
            />
            <span className="font-bold text-lg md:text-xl text-white">Annita<span className="text-[#00C28A]">.</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation">
            <button
              data-dropdown-trigger
              className="text-sm font-medium text-[#8A9BBB] hover:text-[#F0F4FF] transition-colors flex items-center gap-1"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Our Ecosystem
              <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 2l3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link href="/solutions" className="text-sm font-medium text-[#8A9BBB] hover:text-[#00C28A] transition-colors">
              Custom Solutions
            </Link>
            <Link href="/about" className="text-sm font-medium text-[#8A9BBB] hover:text-[#00C28A] transition-colors">
              About Us
            </Link>
            <Link href="/awards" className="text-sm font-medium text-[#8A9BBB] hover:text-[#00C28A] transition-colors">
              Awards
            </Link>
            <Link href="/contact" className="text-sm font-medium text-[#8A9BBB] hover:text-[#00C28A] transition-colors">
              Contact Us
            </Link>
            <Link 
              href="/contact-sales" 
              className="text-sm font-medium text-[#8A9BBB] hover:text-[#00C28A] transition-colors"
            >
              Contact Sales
            </Link>
            <Link 
              href="/login" 
              className="px-4 py-2 bg-[#00C28A] text-[#080D1A] rounded-full text-sm font-semibold hover:brightness-110 transition-all button-glow"
            >
              Enter Ecosystem →
            </Link>
          </nav>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center gap-6" role="navigation">
            <button
              data-dropdown-trigger
              className="text-sm font-medium text-[#8A9BBB] hover:text-[#F0F4FF] transition-colors flex items-center gap-1"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Our Ecosystem
              <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 2l3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link href="/about" className="text-sm font-medium text-[#8A9BBB] hover:text-[#00C28A] transition-colors">
              About
            </Link>
            <Link href="/awards" className="text-sm font-medium text-[#8A9BBB] hover:text-[#00C28A] transition-colors">
              Awards
            </Link>
            <Link href="/contact" className="text-sm font-medium text-[#8A9BBB] hover:text-[#00C28A] transition-colors">
              Contact
            </Link>
            <Link 
              href="/login" 
              className="px-4 py-2 bg-[#00C28A] text-[#080D1A] rounded-full text-sm font-semibold hover:brightness-110 transition-all button-glow"
            >
              Enter Ecosystem →
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative p-2.5 rounded-lg border border-[#1A2640] hover:border-[#00C28A] bg-[#0F1729]/50 hover:bg-[#00C28A]/5 overflow-hidden transition-all duration-300 group"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#00C28A]/40 group-hover:border-[#00C28A] transition-colors" />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#00C28A]/40 group-hover:border-[#00C28A] transition-colors" />
            
            <div className="relative z-10 flex items-center justify-center">
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#00C28A] transition-transform rotate-90" />
              ) : (
                <Menu className="w-5 h-5 text-[#F0F4FF] group-hover:text-[#00C28A] transition-colors" />
              )}
            </div>
          </button>
        </div>

        {/* Desktop Mega Dropdown */}
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: -10, x: '-50%' }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-1/2 w-[480px] bg-[#080D1A]/95 border border-[#00C28A]/20 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,194,138,0.15)] z-50 overflow-hidden tech-grid tech-scanline"
            >
              {/* Dropdown Tech Header Banner */}
              <div className="px-4 py-2 border-b border-[#1A2640] flex items-center justify-between bg-[#0F1729]/50">
                <span className="text-[9px] font-mono tracking-widest text-[#8A9BBB] uppercase">Ecosystem Core Manifest</span>
                <span className="glow-dot text-[9px] font-mono text-[#00C28A] uppercase font-bold">ONLINE</span>
              </div>

              <div className="px-4 py-4">
                <div className="grid grid-cols-1 gap-1">
                  {ecosystemItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-[#00C28A]/20 hover:bg-[#162038]/40 transition-all duration-300 group relative"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {/* Corner hover highlights */}
                      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-[#00C28A]/50 transition-colors" />
                      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover:border-[#00C28A]/50 transition-colors" />
                      
                      <Image 
                        src={item.icon} 
                        alt={item.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-sm text-white group-hover:text-[#00C28A] transition-colors">{item.name}</div>
                          {item.isFlagship && (
                            <span className="px-2 py-0.5 bg-[#00C28A]/10 text-[#00C28A] text-[9px] font-mono font-bold rounded border border-[#00C28A]/20">FLAG</span>
                          )}
                          {item.isComingSoon && (
                            <span className="px-2 py-0.5 bg-[#F5A6231a] text-[#F5A623] text-[9px] font-mono font-bold rounded border border-[#F5A62333]">SOON</span>
                          )}
                        </div>
                        <div className="text-xs text-[#8A9BBB] group-hover:text-[#F0F4FF]/75 transition-colors">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay - Fortune 500 Pentagon Level */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-md"
            />
            
            {/* Menu Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 bottom-0 right-0 w-full md:w-[420px] bg-[#080D1A]/98 border-l border-[#00C28A]/20 shadow-[0_0_100px_rgba(0,194,138,0.15)] z-50 lg:hidden overflow-hidden"
            >
              {/* Animated Background Grid */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 194, 138, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 194, 138, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px'
                }} />
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C28A]/5 to-transparent animate-scanline" />
              </div>

              {/* Scrollable Content */}
              <div className="h-full overflow-y-auto custom-scrollbar relative z-10" style={{ WebkitOverflowScrolling: 'touch' }}>
                {/* Header Section */}
                <div className="sticky top-0 z-20 bg-[#080D1A]/95 backdrop-blur-xl border-b border-[#1A2640]/50">
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#00C28A]/10 border border-[#00C28A]/30 flex items-center justify-center overflow-hidden">
                        <Image
                          src="/annita-real-logo.png"
                          alt="Annita Logo"
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded object-contain"
                        />
                      </div>
                      <div>
                        <div className="font-syne font-bold text-white text-sm">Annita Ecosystem</div>
                        <div className="text-[10px] font-mono text-[#00C28A]">SYSTEM: ONLINE</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-lg border border-[#1A2640] hover:border-[#00C28A] bg-[#0F1729]/50 hover:bg-[#00C28A]/10 transition-all"
                    >
                      <X className="w-5 h-5 text-[#8A9BBB] hover:text-[#00C28A]" />
                    </button>
                  </div>
                </div>

                {/* Quick Stats Bar */}
                <div className="px-6 py-3 bg-[#0F1729]/50 border-b border-[#1A2640]/30">
                  <div className="flex items-center justify-between text-[9px] font-mono">
                    <div className="flex items-center gap-4">
                      <span className="text-[#8A9BBB]">LATENCY: <span className="text-[#00C28A]">18ms</span></span>
                      <span className="text-[#8A9BBB]">UPTIME: <span className="text-[#00C28A]">99.9%</span></span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[#00C28A] rounded-full animate-pulse" />
                      <span className="text-[#00C28A]">LIVE</span>
                    </div>
                  </div>
                </div>

                {/* Main Navigation with Dropdowns */}
                <div className="px-6 py-6 space-y-2">
                  {/* Navigation Section */}
                  <div className="mb-6">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#4A5775] mb-4 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#00C28A] rounded-full" />
                      Primary Navigation
                    </div>
                    
                    <div className="space-y-1">
                      {[
                        { name: 'Home', href: '/', icon: '🏠' },
                        { name: 'Custom Solutions', href: '/solutions', icon: '🔧' },
                        { name: 'About Us', href: '/about', icon: 'ℹ️' },
                        { name: 'Awards', href: '/awards', icon: '🏆' },
                        { name: 'Contact Us', href: '/contact', icon: '📧' },
                        { name: 'Contact Sales', href: '/contact-sales', icon: '💼' }
                      ].map((item, idx) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#1A2640]/30 bg-[#0F1729]/30 hover:bg-[#0F1729]/60 hover:border-[#00C28A]/30 transition-all duration-300 group"
                        >
                          <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                          <span className="flex-1 font-medium text-[#F0F4FF] group-hover:text-[#00C28A] transition-colors">{item.name}</span>
                          <ChevronRight className="w-4 h-4 text-[#4A5775] group-hover:text-[#00C28A] group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Ecosystem Dropdown Section */}
                  <div className="mb-6">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#4A5775] mb-4 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#00C28A] rounded-full" />
                      Ecosystem Modules
                    </div>
                    
                    <div className="space-y-2">
                      {ecosystemItems.map((item) => (
                        <div key={item.name}>
                          <button
                            onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.name ? null : item.name)}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#1A2640]/30 bg-[#0F1729]/30 hover:bg-[#0F1729]/60 hover:border-[#00C28A]/30 transition-all duration-300 group"
                          >
                            <Image 
                              src={item.icon} 
                              alt={item.name}
                              width={32}
                              height={32}
                              className="w-8 h-8 rounded object-contain group-hover:scale-110 transition-transform"
                            />
                            <span className="flex-1 font-medium text-[#F0F4FF] group-hover:text-[#00C28A] transition-colors">{item.name}</span>
                            <ChevronRight 
                              className={`w-4 h-4 text-[#4A5775] transition-all ${
                                mobileDropdownOpen === item.name ? 'rotate-90 text-[#00C28A]' : 'group-hover:text-[#00C28A]'
                              }`} 
                            />
                          </button>
                          
                          {/* Dropdown Content */}
                          <AnimatePresence>
                            {mobileDropdownOpen === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="px-4 py-3 ml-4 border-l-2 border-[#00C28A]/30 bg-[#0F1729]/40 rounded-r-lg mt-1">
                                  <div className="text-xs text-[#8A9BBB] mb-2">{item.description}</div>
                                  <Link
                                    href={item.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false)
                                      setMobileDropdownOpen(null)
                                    }}
                                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00C28A]/10 border border-[#00C28A]/20 rounded text-[#00C28A] text-xs font-medium hover:bg-[#00C28A]/20 transition-all"
                                  >
                                    Access Module <ChevronRight className="w-3 h-3" />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="pt-4 border-t border-[#1A2640]/30">
                    <Link
                      href="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full px-6 py-4 bg-gradient-to-r from-[#00C28A] to-[#00C28A]/80 text-[#080D1A] rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-[#00C28A]/25 transition-all duration-300 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <div className="relative z-10 flex items-center justify-center gap-2">
                        <span>Enter Ecosystem</span>
                        <span className="font-mono">→</span>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="px-6 py-4 border-t border-[#1A2640]/30 mt-4">
                  <div className="text-[9px] font-mono text-[#4A5775] text-center space-y-1">
                    <div>© 2024 Annita LLC. All rights reserved.</div>
                    <div>Built for Africa. Operating at World Standard.</div>
                    <Link href="/cookies" onClick={() => setMobileMenuOpen(false)} className="text-[#8A9BBB] hover:text-[#00C28A] transition-colors">
                      Cookie Policy
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
