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
    icon: '🌐',
    href: '/login',
    isFlagship: true,
  },
  {
    name: 'AnnitaPay',
    description: 'Fintech',
    icon: '💳',
    href: 'https://www.an-nitapay.com',
    isComingSoon: true,
  },
  {
    name: 'Annita Pulse',
    description: 'Digital Health',
    icon: '❤️',
    href: 'https://www.an-nita-pulse.org',
  },
  {
    name: 'Ezri',
    description: 'AI & Careers',
    icon: '🧭',
    href: 'https://www.ezri-africa.com',
  },
  {
    name: 'Annita Impact-Innovation Hub',
    description: 'Innovation & Community',
    icon: '💡',
    href: 'https://www.aiim.com',
  },
  {
    name: 'Custom Solutions',
    description: 'Technology Services',
    icon: '🔧',
    href: '/solutions',
  },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { scrollY } = useScroll()
  const navBackground = useTransform(scrollY, [0, 20], ['rgba(8, 13, 26, 0)', 'rgba(8, 13, 26, 0.92)'])
  const navBorder = useTransform(scrollY, [0, 20], ['rgba(26, 38, 64, 0)', 'rgba(26, 38, 64, 1)'])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

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
                      
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[56px] md:top-[64px] bottom-0 right-0 w-full md:w-80 bg-[#080D1A]/95 border-l border-[#00C28A]/10 shadow-[0_0_50px_rgba(0,194,138,0.08)] z-50 lg:hidden tech-grid tech-scanline"
          >
            <div className="flex flex-col h-full px-6 py-8 overflow-y-auto custom-scrollbar relative z-10 backdrop-blur-md">
              
              {/* Cyber Status Dashboard Panel */}
              <div className="mb-6 p-4 rounded-xl border border-[#1A2640] bg-[#0F1729]/60 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#00C28A]/5 rounded-full blur-xl animate-pulse" />
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#8A9BBB] uppercase">Core Infrastructure</span>
                  <span className="glow-dot text-[10px] font-mono text-[#00C28A] uppercase font-bold">ONLINE</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-[#8A9BBB]/60">
                  <div>LOC: LIBERIA/HQ</div>
                  <div>VER: v1.2.0-PROD</div>
                </div>

                {/* Scrolling Telemetry */}
                <div className="border-t border-[#1A2640] pt-2.5 mt-2.5">
                  <div className="text-[8px] font-mono text-[#00C28A]/80 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#00C28A] rounded-full animate-pulse" />
                    Live System Telemetry
                  </div>
                  <div className="relative flex overflow-x-hidden w-full tech-marquee-container py-0.5">
                    <div className="animate-marquee whitespace-nowrap font-mono text-[9px] text-[#8A9BBB] tracking-wider pr-4">
                      {"SYSTEM: ACTIVE // LOC: LIBERIA/HQ // LATENCY: 18ms // SSL: SECURE // ANNITAPAY: ENCRYPTION ACTIVE // EZRI AI: ANALYZING OPPORTUNITIES // PULSE HEALTH: CHANNELS SECURED // HUB: 24 ACTIVE INNOVATIONS // CUSTOM SOLUTIONS: DELIVERING // INFRASTRUCTURE: NOMINAL // SYSTEM: 100% OPERATIONAL //   "}
                    </div>
                    <div className="absolute top-0 left-0 animate-marquee2 whitespace-nowrap font-mono text-[9px] text-[#8A9BBB] tracking-wider pr-4">
                      {"SYSTEM: ACTIVE // LOC: LIBERIA/HQ // LATENCY: 18ms // SSL: SECURE // ANNITAPAY: ENCRYPTION ACTIVE // EZRI AI: ANALYZING OPPORTUNITIES // PULSE HEALTH: CHANNELS SECURED // HUB: 24 ACTIVE INNOVATIONS // CUSTOM SOLUTIONS: DELIVERING // INFRASTRUCTURE: NOMINAL // SYSTEM: 100% OPERATIONAL //   "}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Navigation */}
              <div className="mb-8">
                <div className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#4A5775] mb-4 border-b border-[#1A2640] pb-2 flex justify-between items-center">
                  <span>Navigation</span>
                  <span className="text-[#00C28A]/30 font-bold">SYS_NAV</span>
                </div>
                
                <motion.div 
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05 }
                    }
                  }}
                  className="space-y-4"
                >
                  {[
                    { name: 'Custom Solutions', href: '/solutions' },
                    { name: 'About Us', href: '/about' },
                    { name: 'Awards', href: '/awards' },
                    { name: 'Contact Us', href: '/contact' },
                    { name: 'Contact Sales', href: '/contact-sales' }
                  ].map((link, idx) => (
                    <motion.div 
                      key={link.name}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        show: { opacity: 1, x: 0 }
                      }}
                    >
                      <Link
                        href={link.href}
                        className="block group py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-syne font-semibold text-lg text-white group-hover:text-[#00C28A] transition-colors flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-xs font-mono text-[#00C28A]/50 group-hover:text-[#00C28A] transition-colors">0{idx + 1}.</span>
                            {link.name}
                          </span>
                          <ChevronRight className="w-4 h-4 text-[#4A5775] group-hover:text-[#00C28A] group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Ecosystem Section */}
              <div className="mb-8">
                <div className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#4A5775] mb-4 border-b border-[#1A2640] pb-2 flex justify-between items-center">
                  <span>Our Ecosystem</span>
                  <span className="text-[#00C28A]/30 font-bold">ECO_SYS</span>
                </div>
                
                <motion.div 
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05, delayChildren: 0.15 }
                    }
                  }}
                  className="space-y-3"
                >
                  {ecosystemItems.map((item) => (
                    <motion.div 
                      key={item.name}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        show: { opacity: 1, x: 0 }
                      }}
                    >
                      <Link
                        href={item.href}
                        className="block p-2.5 rounded-lg border border-[#1A2640]/40 bg-[#0F1729]/30 hover:bg-[#0F1729]/80 hover:border-[#00C28A]/20 transition-all duration-300 group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                          <div className="flex-1">
                            <div className="font-syne font-semibold text-sm text-white group-hover:text-[#00C28A] transition-colors">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-[#8A9BBB]">{item.description}</div>
                          </div>
                          {item.isComingSoon && (
                            <span className="px-2 py-0.5 bg-[#F5A6231a] text-[#F5A623] text-[9px] font-mono font-bold rounded border border-[#F5A62333] whitespace-nowrap">SOON</span>
                          )}
                          {item.isFlagship && (
                            <span className="px-2 py-0.5 bg-[#00C28A]/10 text-[#00C28A] text-[9px] font-mono font-bold rounded border border-[#00C28A]/20 whitespace-nowrap">FLAG</span>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* CTA Button */}
              <div className="mt-auto pt-4 border-t border-[#1A2640]/50">
                <Link 
                  href="/login" 
                  className="w-full px-6 py-3.5 bg-[#00C28A] text-[#080D1A] rounded-full text-sm font-bold hover:brightness-110 transition-all button-glow text-center block relative overflow-hidden group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Enter Ecosystem <span className="font-mono">→</span>
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
