'use client'

import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronRight, Home, Wrench, Info, Trophy, Download, type LucideIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './theme-toggle'
import { useTheme } from './theme-provider'

const ecosystemItems = [
  {
    name: 'Annita Ecosystem',
    description: 'Marketplace & SaaS',
    icon: '/annita-real-logo.png',
    href: '/ecosystem',
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

const contactUsItems = [
  {
    name: 'General Inquiries',
    description: 'Get in touch with our team',
    href: '/contact',
  },
  {
    name: 'Support',
    description: 'Technical support and assistance',
    href: '/contact?subject=support',
  },
  {
    name: 'Partnerships',
    description: 'Explore partnership opportunities',
    href: '/partnerships',
  },
]

const contactSalesItems = [
  {
    name: 'Sales Inquiry',
    description: 'Discuss our solutions for your business',
    href: '/contact-sales',
  },
  {
    name: 'Request Demo',
    description: 'Schedule a product demonstration',
    href: '/contact-sales?type=demo',
  },
  {
    name: 'Enterprise Solutions',
    description: 'Custom enterprise implementations',
    href: '/contact-sales?type=enterprise',
  },
]

const careersItems = [
  {
    name: 'Open Positions',
    description: 'View all available job openings',
    href: '/careers',
  },
  {
    name: 'Engineering',
    description: 'Software development roles',
    href: '/careers?department=engineering',
  },
  {
    name: 'Design',
    description: 'UI/UX and product design',
    href: '/careers?department=design',
  },
  {
    name: 'Business',
    description: 'Sales, marketing, and operations',
    href: '/careers?department=business',
  },
]

const partnershipsItems = [
  {
    name: 'Partner Program',
    description: 'Join our partner ecosystem',
    href: '/partnerships',
  },
  {
    name: 'Technology Partners',
    description: 'Integrate with our platform',
    href: '/partnerships?type=technology',
  },
  {
    name: 'Strategic Alliances',
    description: 'Build strategic relationships',
    href: '/partnerships?type=strategic',
  },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [contactUsDropdownOpen, setContactUsDropdownOpen] = useState(false)
  const [contactSalesDropdownOpen, setContactSalesDropdownOpen] = useState(false)
  const [careersDropdownOpen, setCareersDropdownOpen] = useState(false)
  const [partnershipsDropdownOpen, setPartnershipsDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  const menuScrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: menuScrollProgress } = useScroll({ container: menuScrollRef, layoutEffect: false })
  const menuScaleX = useSpring(menuScrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Track scroll position for nav background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('[data-dropdown-trigger]')) {
        setDropdownOpen(false)
        setContactUsDropdownOpen(false)
        setContactSalesDropdownOpen(false)
        setCareersDropdownOpen(false)
        setPartnershipsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownOpen, contactUsDropdownOpen, contactSalesDropdownOpen, careersDropdownOpen, partnershipsDropdownOpen])

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 w-full h-14 md:h-[64px] transition-all duration-300 ${
          scrolled
            ? 'border-b border-[var(--color-border-default)] shadow-md'
            : 'border-b border-transparent'
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--color-nav-overlay)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        }}
      >
        <div className="flex items-center justify-between gap-4 h-full px-4 md:px-8 max-w-[1600px] mx-auto w-full">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/annita-real-logo.png"
              alt="Annita Logo"
              width={32}
              height={32}
              className="rounded-lg object-contain"
            />
            <span className="font-bold text-lg md:text-xl text-[var(--color-text-primary)]">
              Annita<span className="text-[var(--color-accent)]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" role="navigation">
            <button
              data-dropdown-trigger
              className="text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1"
              onClick={() => {
                setDropdownOpen(!dropdownOpen)
                setContactUsDropdownOpen(false)
                setContactSalesDropdownOpen(false)
                setCareersDropdownOpen(false)
                setPartnershipsDropdownOpen(false)
              }}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Our Ecosystem
              <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 2l3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link href="/solutions" className="text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">
              Custom Solutions
            </Link>
            <Link href="/download" className="text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">
              Download App
            </Link>
            <button
              data-dropdown-trigger
              className="text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1"
              onClick={() => {
                setContactUsDropdownOpen(!contactUsDropdownOpen)
                setDropdownOpen(false)
                setContactSalesDropdownOpen(false)
                setCareersDropdownOpen(false)
                setPartnershipsDropdownOpen(false)
              }}
              aria-expanded={contactUsDropdownOpen}
              aria-haspopup="true"
            >
              Contact Us
              <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 2l3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              data-dropdown-trigger
              className="text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1"
              onClick={() => {
                setContactSalesDropdownOpen(!contactSalesDropdownOpen)
                setDropdownOpen(false)
                setContactUsDropdownOpen(false)
                setCareersDropdownOpen(false)
                setPartnershipsDropdownOpen(false)
              }}
              aria-expanded={contactSalesDropdownOpen}
              aria-haspopup="true"
            >
              Contact Sales
              <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 2l3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              data-dropdown-trigger
              className="text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1"
              onClick={() => {
                setCareersDropdownOpen(!careersDropdownOpen)
                setDropdownOpen(false)
                setContactUsDropdownOpen(false)
                setContactSalesDropdownOpen(false)
                setPartnershipsDropdownOpen(false)
              }}
              aria-expanded={careersDropdownOpen}
              aria-haspopup="true"
            >
              Careers
              <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 2l3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              data-dropdown-trigger
              className="text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1"
              onClick={() => {
                setPartnershipsDropdownOpen(!partnershipsDropdownOpen)
                setDropdownOpen(false)
                setContactUsDropdownOpen(false)
                setContactSalesDropdownOpen(false)
                setCareersDropdownOpen(false)
              }}
              aria-expanded={partnershipsDropdownOpen}
              aria-haspopup="true"
            >
              Partnerships
              <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 2l3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <ThemeToggle />
            <Link
              href="/ecosystem"
              className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] rounded-full text-sm font-semibold hover:brightness-110 transition-all button-glow"
            >
              Enter Ecosystem →
            </Link>
          </nav>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center gap-4" role="navigation">
            <button
              data-dropdown-trigger
              className="text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1"
              onClick={() => {
                setDropdownOpen(!dropdownOpen)
                setContactUsDropdownOpen(false)
                setContactSalesDropdownOpen(false)
                setCareersDropdownOpen(false)
                setPartnershipsDropdownOpen(false)
              }}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Our Ecosystem
              <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 2l3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link href="/download" className="text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">
              Download
            </Link>
            <button
              data-dropdown-trigger
              className="text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1"
              onClick={() => {
                setContactUsDropdownOpen(!contactUsDropdownOpen)
                setDropdownOpen(false)
                setContactSalesDropdownOpen(false)
                setCareersDropdownOpen(false)
                setPartnershipsDropdownOpen(false)
              }}
              aria-expanded={contactUsDropdownOpen}
              aria-haspopup="true"
            >
              Contact
              <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 2l3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              data-dropdown-trigger
              className="text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1"
              onClick={() => {
                setCareersDropdownOpen(!careersDropdownOpen)
                setDropdownOpen(false)
                setContactUsDropdownOpen(false)
                setContactSalesDropdownOpen(false)
                setPartnershipsDropdownOpen(false)
              }}
              aria-expanded={careersDropdownOpen}
              aria-haspopup="true"
            >
              Careers
              <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 2l3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              data-dropdown-trigger
              className="text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1"
              onClick={() => {
                setPartnershipsDropdownOpen(!partnershipsDropdownOpen)
                setDropdownOpen(false)
                setContactUsDropdownOpen(false)
                setContactSalesDropdownOpen(false)
                setCareersDropdownOpen(false)
              }}
              aria-expanded={partnershipsDropdownOpen}
              aria-haspopup="true"
            >
              Partnerships
              <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 2l3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <ThemeToggle />
            <Link
              href="/ecosystem"
              className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] rounded-full text-sm font-semibold hover:brightness-110 transition-all button-glow"
            >
              Enter Ecosystem →
            </Link>
          </nav>

          {/* Mobile Hamburger Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative p-2.5 rounded-lg border border-[var(--color-border-card)] hover:border-[var(--color-accent)] bg-[var(--color-surface-card)]/50 hover:bg-[var(--color-accent-soft)] overflow-hidden transition-all duration-300 group"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--color-accent)]/40 group-hover:border-[var(--color-accent)] transition-colors" />
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--color-accent)]/40 group-hover:border-[var(--color-accent)] transition-colors" />

              <div className="relative z-10 flex items-center justify-center">
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[var(--color-accent)] transition-transform rotate-90" />
                ) : (
                  <Menu className="w-5 h-5 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Mega Dropdown */}
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: -10, x: '-50%' }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[64px] left-1/2 w-[480px] border border-[var(--color-accent)]/20 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,194,138,0.12)] z-50 overflow-hidden tech-scanline"
              style={{ backgroundColor: 'var(--color-surface-card)' }}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {/* Dropdown Tech Header Banner */}
              <div
                className="px-4 py-2 border-b border-[var(--color-border-card)] flex items-center justify-between"
                style={{ backgroundColor: 'var(--color-surface-raised)' }}
              >
                <span className="text-[9px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">Ecosystem Core Manifest</span>
                <span className="glow-dot text-[9px] font-mono text-[var(--color-accent)] uppercase font-bold">ONLINE</span>
              </div>

              <div className="px-4 py-4">
                <div className="grid grid-cols-1 gap-1">
                  {ecosystemItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-[var(--color-accent)]/20 hover:bg-[var(--color-accent-soft)] transition-all duration-300 group relative"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {/* Corner hover highlights */}
                      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />
                      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />

                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">{item.name}</div>
                          {item.isFlagship && (
                            <span className="px-2 py-0.5 bg-[var(--color-accent-soft)] text-[var(--color-accent)] text-[9px] font-mono font-bold rounded border border-[var(--color-accent)]/20">FLAG</span>
                          )}
                          {item.isComingSoon && (
                            <span className="px-2 py-0.5 bg-[var(--color-coming-soon)] text-[var(--color-accent-gold)] text-[9px] font-mono font-bold rounded border border-[var(--color-accent-gold)]/30">SOON</span>
                          )}
                        </div>
                        <div className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)] transition-colors">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Us Dropdown */}
        <AnimatePresence>
          {contactUsDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[64px] left-1/2 w-[320px] border border-[var(--color-accent)]/20 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,194,138,0.12)] z-50 overflow-hidden tech-scanline"
              style={{ backgroundColor: 'var(--color-surface-card)', transform: 'translateX(-50%)' }}
              onMouseLeave={() => setContactUsDropdownOpen(false)}
            >
              <div
                className="px-4 py-2 border-b border-[var(--color-border-card)] flex items-center justify-between"
                style={{ backgroundColor: 'var(--color-surface-raised)' }}
              >
                <span className="text-[9px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">Contact Options</span>
                <span className="glow-dot text-[9px] font-mono text-[var(--color-accent)] uppercase font-bold">ACTIVE</span>
              </div>

              <div className="px-4 py-4">
                <div className="grid grid-cols-1 gap-1">
                  {contactUsItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-[var(--color-accent)]/20 hover:bg-[var(--color-accent-soft)] transition-all duration-300 group relative"
                      onClick={() => setContactUsDropdownOpen(false)}
                    >
                      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />
                      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />

                      <div className="flex-1">
                        <div className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">{item.name}</div>
                        <div className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)] transition-colors">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Sales Dropdown */}
        <AnimatePresence>
          {contactSalesDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[64px] left-1/2 w-[320px] border border-[var(--color-accent)]/20 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,194,138,0.12)] z-50 overflow-hidden tech-scanline"
              style={{ backgroundColor: 'var(--color-surface-card)', transform: 'translateX(-50%)' }}
              onMouseLeave={() => setContactSalesDropdownOpen(false)}
            >
              <div
                className="px-4 py-2 border-b border-[var(--color-border-card)] flex items-center justify-between"
                style={{ backgroundColor: 'var(--color-surface-raised)' }}
              >
                <span className="text-[9px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">Sales Options</span>
                <span className="glow-dot text-[9px] font-mono text-[var(--color-accent)] uppercase font-bold">ACTIVE</span>
              </div>

              <div className="px-4 py-4">
                <div className="grid grid-cols-1 gap-1">
                  {contactSalesItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-[var(--color-accent)]/20 hover:bg-[var(--color-accent-soft)] transition-all duration-300 group relative"
                      onClick={() => setContactSalesDropdownOpen(false)}
                    >
                      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />
                      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />

                      <div className="flex-1">
                        <div className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">{item.name}</div>
                        <div className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)] transition-colors">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Careers Dropdown */}
        <AnimatePresence>
          {careersDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[64px] left-1/2 w-[320px] border border-[var(--color-accent)]/20 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,194,138,0.12)] z-50 overflow-hidden tech-scanline"
              style={{ backgroundColor: 'var(--color-surface-card)', transform: 'translateX(-50%)' }}
              onMouseLeave={() => setCareersDropdownOpen(false)}
            >
              <div
                className="px-4 py-2 border-b border-[var(--color-border-card)] flex items-center justify-between"
                style={{ backgroundColor: 'var(--color-surface-raised)' }}
              >
                <span className="text-[9px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">Career Paths</span>
                <span className="glow-dot text-[9px] font-mono text-[var(--color-accent)] uppercase font-bold">ACTIVE</span>
              </div>

              <div className="px-4 py-4">
                <div className="grid grid-cols-1 gap-1">
                  {careersItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-[var(--color-accent)]/20 hover:bg-[var(--color-accent-soft)] transition-all duration-300 group relative"
                      onClick={() => setCareersDropdownOpen(false)}
                    >
                      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />
                      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />

                      <div className="flex-1">
                        <div className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">{item.name}</div>
                        <div className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)] transition-colors">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Partnerships Dropdown */}
        <AnimatePresence>
          {partnershipsDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[64px] left-1/2 w-[320px] border border-[var(--color-accent)]/20 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,194,138,0.12)] z-50 overflow-hidden tech-scanline"
              style={{ backgroundColor: 'var(--color-surface-card)', transform: 'translateX(-50%)' }}
              onMouseLeave={() => setPartnershipsDropdownOpen(false)}
            >
              <div
                className="px-4 py-2 border-b border-[var(--color-border-card)] flex items-center justify-between"
                style={{ backgroundColor: 'var(--color-surface-raised)' }}
              >
                <span className="text-[9px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">Partnership Types</span>
                <span className="glow-dot text-[9px] font-mono text-[var(--color-accent)] uppercase font-bold">ACTIVE</span>
              </div>

              <div className="px-4 py-4">
                <div className="grid grid-cols-1 gap-1">
                  {partnershipsItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-[var(--color-accent)]/20 hover:bg-[var(--color-accent-soft)] transition-all duration-300 group relative"
                      onClick={() => setPartnershipsDropdownOpen(false)}
                    >
                      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />
                      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />

                      <div className="flex-1">
                        <div className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">{item.name}</div>
                        <div className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)] transition-colors">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 z-40 md:hidden backdrop-blur-md"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 bottom-0 right-0 w-full md:w-[420px] z-50 md:hidden overflow-hidden border-l border-[var(--color-accent)]/20"
              style={{ backgroundColor: 'var(--color-surface-base)' }}
            >
              {/* Animated Background Grid */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none tech-grid" />

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-accent)]/5 to-transparent animate-scanline" />
              </div>

              {/* Scrollable Content */}
              <div ref={menuScrollRef} className="h-full overflow-y-auto custom-scrollbar relative z-10">
                {/* Header Section */}
                <div
                  className="sticky top-0 z-20 backdrop-blur-xl border-b border-[var(--color-border-card)]/50"
                  style={{ backgroundColor: 'var(--color-surface-base)' }}
                >
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center overflow-hidden">
                        <Image
                          src="/annita-real-logo.png"
                          alt="Annita Logo"
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded object-contain"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-[var(--color-text-primary)] text-sm" style={{ fontFamily: 'var(--font-syne)' }}>Annita Ecosystem</div>
                        <div className="text-[10px] font-mono text-[var(--color-accent)]">SYSTEM: ONLINE</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <ThemeToggle />
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 rounded-lg border border-[var(--color-border-card)] hover:border-[var(--color-accent)] bg-[var(--color-surface-raised)]/50 hover:bg-[var(--color-accent-soft)] transition-all"
                      >
                        <X className="w-5 h-5 text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)]" />
                      </button>
                    </div>
                  </div>
                  {/* Menu Scroll Progress */}
                  <motion.div
                    style={{ scaleX: menuScaleX }}
                    className="h-[2px] bg-[var(--color-accent)] origin-left w-full"
                  />
                </div>

                {/* Quick Stats Bar */}
                <div
                  className="px-6 py-3 border-b border-[var(--color-border-card)]/30"
                  style={{ backgroundColor: 'var(--color-surface-raised)' }}
                >
                  <div className="flex items-center justify-between text-[9px] font-mono">
                    <div className="flex items-center gap-4">
                      <span className="text-[var(--color-text-tertiary)]">LATENCY: <span className="text-[var(--color-accent)]">18ms</span></span>
                      <span className="text-[var(--color-text-tertiary)]">UPTIME: <span className="text-[var(--color-accent)]">99.9%</span></span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse" />
                      <span className="text-[var(--color-accent)]">LIVE</span>
                    </div>
                  </div>
                </div>

                {/* Main Navigation */}
                <div className="px-6 py-6 space-y-2">
                  {/* Navigation Section */}
                  <div className="mb-6">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" />
                      Primary Navigation
                    </div>

                    <div className="space-y-1">
                      {([
                        { name: 'Home', href: '/', icon: Home },
                        { name: 'Custom Solutions', href: '/solutions', icon: Wrench },
                        { name: 'Download App', href: '/download', icon: Download },
                        { name: 'About Us', href: '/about', icon: Info },
                        { name: 'Awards', href: '/awards', icon: Trophy }
                      ] as { name: string; href: string; icon: LucideIcon }[]).map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[var(--color-border-card)]/30 bg-[var(--color-surface-raised)]/30 hover:bg-[var(--color-surface-raised)] hover:border-[var(--color-accent)]/30 transition-all duration-300 group"
                        >
                          <item.icon className="w-5 h-5 text-[var(--color-accent)] group-hover:scale-110 transition-transform" />
                          <span className="flex-1 font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">{item.name}</span>
                          <ChevronRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Contact Us Dropdown Section */}
                  <div className="mb-6">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" />
                      Contact Options
                    </div>

                    <div className="border border-[var(--color-accent)]/20 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,194,138,0.12)] overflow-hidden tech-scanline" style={{ backgroundColor: 'var(--color-surface-card)' }}>
                      <button
                        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === 'contact-us' ? null : 'contact-us')}
                        className="w-full px-4 py-2 border-b border-[var(--color-border-card)] flex items-center justify-between" style={{ backgroundColor: 'var(--color-surface-raised)' }}
                      >
                        <span className="text-[9px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">Contact Options</span>
                        <div className="flex items-center gap-2">
                          <span className="glow-dot text-[9px] font-mono text-[var(--color-accent)] uppercase font-bold">ACTIVE</span>
                          <ChevronRight className={`w-4 h-4 text-[var(--color-text-muted)] transition-all ${
                            mobileDropdownOpen === 'contact-us' ? 'rotate-90 text-[var(--color-accent)]' : ''
                          }`} />
                        </div>
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen === 'contact-us' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 py-4">
                              <div className="grid grid-cols-1 gap-1">
                                {contactUsItems.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-[var(--color-accent)]/20 hover:bg-[var(--color-accent-soft)] transition-all duration-300 group relative"
                                    onClick={() => {
                                      setMobileMenuOpen(false)
                                      setMobileDropdownOpen(null)
                                    }}
                                  >
                                    <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />
                                    <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />
                                    <div className="flex-1">
                                      <div className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">{item.name}</div>
                                      <div className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)] transition-colors">{item.description}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Contact Sales Dropdown Section */}
                  <div className="mb-6">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" />
                      Sales Options
                    </div>

                    <div className="border border-[var(--color-accent)]/20 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,194,138,0.12)] overflow-hidden tech-scanline" style={{ backgroundColor: 'var(--color-surface-card)' }}>
                      <button
                        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === 'contact-sales' ? null : 'contact-sales')}
                        className="w-full px-4 py-2 border-b border-[var(--color-border-card)] flex items-center justify-between" style={{ backgroundColor: 'var(--color-surface-raised)' }}
                      >
                        <span className="text-[9px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">Sales Options</span>
                        <div className="flex items-center gap-2">
                          <span className="glow-dot text-[9px] font-mono text-[var(--color-accent)] uppercase font-bold">ACTIVE</span>
                          <ChevronRight className={`w-4 h-4 text-[var(--color-text-muted)] transition-all ${
                            mobileDropdownOpen === 'contact-sales' ? 'rotate-90 text-[var(--color-accent)]' : ''
                          }`} />
                        </div>
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen === 'contact-sales' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 py-4">
                              <div className="grid grid-cols-1 gap-1">
                                {contactSalesItems.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-[var(--color-accent)]/20 hover:bg-[var(--color-accent-soft)] transition-all duration-300 group relative"
                                    onClick={() => {
                                      setMobileMenuOpen(false)
                                      setMobileDropdownOpen(null)
                                    }}
                                  >
                                    <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />
                                    <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />
                                    <div className="flex-1">
                                      <div className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">{item.name}</div>
                                      <div className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)] transition-colors">{item.description}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Careers Dropdown Section */}
                  <div className="mb-6">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" />
                      Career Paths
                    </div>

                    <div className="border border-[var(--color-accent)]/20 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,194,138,0.12)] overflow-hidden tech-scanline" style={{ backgroundColor: 'var(--color-surface-card)' }}>
                      <button
                        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === 'careers' ? null : 'careers')}
                        className="w-full px-4 py-2 border-b border-[var(--color-border-card)] flex items-center justify-between" style={{ backgroundColor: 'var(--color-surface-raised)' }}
                      >
                        <span className="text-[9px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">Career Paths</span>
                        <div className="flex items-center gap-2">
                          <span className="glow-dot text-[9px] font-mono text-[var(--color-accent)] uppercase font-bold">ACTIVE</span>
                          <ChevronRight className={`w-4 h-4 text-[var(--color-text-muted)] transition-all ${
                            mobileDropdownOpen === 'careers' ? 'rotate-90 text-[var(--color-accent)]' : ''
                          }`} />
                        </div>
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen === 'careers' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 py-4">
                              <div className="grid grid-cols-1 gap-1">
                                {careersItems.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-[var(--color-accent)]/20 hover:bg-[var(--color-accent-soft)] transition-all duration-300 group relative"
                                    onClick={() => {
                                      setMobileMenuOpen(false)
                                      setMobileDropdownOpen(null)
                                    }}
                                  >
                                    <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />
                                    <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />
                                    <div className="flex-1">
                                      <div className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">{item.name}</div>
                                      <div className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)] transition-colors">{item.description}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Partnerships Dropdown Section */}
                  <div className="mb-6">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" />
                      Partnership Types
                    </div>

                    <div className="border border-[var(--color-accent)]/20 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,194,138,0.12)] overflow-hidden tech-scanline" style={{ backgroundColor: 'var(--color-surface-card)' }}>
                      <button
                        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === 'partnerships' ? null : 'partnerships')}
                        className="w-full px-4 py-2 border-b border-[var(--color-border-card)] flex items-center justify-between" style={{ backgroundColor: 'var(--color-surface-raised)' }}
                      >
                        <span className="text-[9px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">Partnership Types</span>
                        <div className="flex items-center gap-2">
                          <span className="glow-dot text-[9px] font-mono text-[var(--color-accent)] uppercase font-bold">ACTIVE</span>
                          <ChevronRight className={`w-4 h-4 text-[var(--color-text-muted)] transition-all ${
                            mobileDropdownOpen === 'partnerships' ? 'rotate-90 text-[var(--color-accent)]' : ''
                          }`} />
                        </div>
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen === 'partnerships' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 py-4">
                              <div className="grid grid-cols-1 gap-1">
                                {partnershipsItems.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-[var(--color-accent)]/20 hover:bg-[var(--color-accent-soft)] transition-all duration-300 group relative"
                                    onClick={() => {
                                      setMobileMenuOpen(false)
                                      setMobileDropdownOpen(null)
                                    }}
                                  >
                                    <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />
                                    <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />
                                    <div className="flex-1">
                                      <div className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">{item.name}</div>
                                      <div className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)] transition-colors">{item.description}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Ecosystem Dropdown Section */}
                  <div className="mb-6">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" />
                      Ecosystem Modules
                    </div>

                    <div className="border border-[var(--color-accent)]/20 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,194,138,0.12)] overflow-hidden tech-scanline" style={{ backgroundColor: 'var(--color-surface-card)' }}>
                      <button
                        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === 'ecosystem' ? null : 'ecosystem')}
                        className="w-full px-4 py-2 border-b border-[var(--color-border-card)] flex items-center justify-between" style={{ backgroundColor: 'var(--color-surface-raised)' }}
                      >
                        <span className="text-[9px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">Ecosystem Core Manifest</span>
                        <div className="flex items-center gap-2">
                          <span className="glow-dot text-[9px] font-mono text-[var(--color-accent)] uppercase font-bold">ONLINE</span>
                          <ChevronRight className={`w-4 h-4 text-[var(--color-text-muted)] transition-all ${
                            mobileDropdownOpen === 'ecosystem' ? 'rotate-90 text-[var(--color-accent)]' : ''
                          }`} />
                        </div>
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen === 'ecosystem' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 py-4">
                              <div className="grid grid-cols-1 gap-1">
                                {ecosystemItems.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-[var(--color-accent)]/20 hover:bg-[var(--color-accent-soft)] transition-all duration-300 group relative"
                                    onClick={() => {
                                      setMobileMenuOpen(false)
                                      setMobileDropdownOpen(null)
                                    }}
                                  >
                                    <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />
                                    <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover:border-[var(--color-accent)]/50 transition-colors" />
                                    <Image
                                      src={item.icon}
                                      alt={item.name}
                                      width={32}
                                      height={32}
                                      className="w-8 h-8 rounded object-contain group-hover:scale-110 transition-transform"
                                    />
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        <div className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">{item.name}</div>
                                        {item.isFlagship && (
                                          <span className="px-2 py-0.5 bg-[var(--color-accent-soft)] text-[var(--color-accent)] text-[9px] font-mono font-bold rounded border border-[var(--color-accent)]/20">FLAG</span>
                                        )}
                                        {item.isComingSoon && (
                                          <span className="px-2 py-0.5 bg-[var(--color-coming-soon)] text-[var(--color-accent-gold)] text-[9px] font-mono font-bold rounded border border-[var(--color-accent-gold)]/30">SOON</span>
                                        )}
                                      </div>
                                      <div className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)] transition-colors">{item.description}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Theme Toggle Section */}
                  <div className="pt-4 border-t border-[var(--color-border-card)]/30">
                    <div className="flex items-center justify-between px-4 py-2">
                      <span className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider">Theme</span>
                      <ThemeToggle />
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="pt-4 border-t border-[var(--color-border-card)]/30">
                    <Link
                      href="/ecosystem"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full px-6 py-4 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] rounded-xl font-bold text-sm hover:brightness-110 hover:shadow-lg transition-all duration-300 relative overflow-hidden group text-center"
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <div className="relative z-10">Enter Ecosystem →</div>
                    </Link>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="px-6 py-4 border-t border-[var(--color-border-card)]/30 mt-4">
                  <div className="text-[9px] font-mono text-[var(--color-text-muted)] text-center space-y-1">
                    <div>© 2024 Annita LLC. All rights reserved.</div>
                    <div>Built for Africa. Operating at World Standard.</div>
                    <div className="flex items-center justify-center gap-3">
                      <Link href="/privacy" onClick={() => setMobileMenuOpen(false)} className="text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">
                        Privacy Policy
                      </Link>
                      <span className="text-[var(--color-text-muted)]">|</span>
                      <Link href="/terms" onClick={() => setMobileMenuOpen(false)} className="text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">
                        Terms & Conditions
                      </Link>
                      <span className="text-[var(--color-text-muted)]">|</span>
                      <Link href="/cookies" onClick={() => setMobileMenuOpen(false)} className="text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">
                        Cookie Policy
                      </Link>
                    </div>
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
