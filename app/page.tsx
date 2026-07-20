'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Globe, Award, Zap, Shield, Rocket, ChevronRight, CheckCircle2, X, Loader2, Lock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import WelcomeModal from '@/components/welcome-modal'
import LiveCodingTerminal from '@/components/live-coding-terminal'
import TechGlobe from '@/components/tech-globe'
import ImageSlideshow from '@/components/image-slideshow'

const stats = [
  { value: 3000, label: 'Verified MSMEs', prefix: '', suffix: '+', status: 'ACTIVE_NODE' },
  { value: 55, label: 'Global Ranking', prefix: 'Top ', suffix: '/200', status: 'RANKED_GLB' },
  { value: 6, label: 'Portfolio Companies', prefix: '', suffix: '', status: 'PORTFOLIO' },
  { value: 100, label: 'Countries Reached', prefix: '', suffix: '+', status: 'REACH_GLB' },
  { value: 12500, label: 'Grants Raised', prefix: '$', suffix: '+', status: 'FUND_SECURE' },
  { value: 12, label: 'Recognitions & Awards', prefix: '', suffix: '+', status: 'CERTIFIED' },
]

const homeAwards = [
  {
    title: 'Orange Social Venture Prize',
    description: '1st Place Winner (POESAM Liberia) - Awarded for outstanding tech-driven social innovation.',
    year: '2024',
    category: 'Social Venture',
    status: 'VERIFIED'
  },
  {
    title: 'Top 50 African Businesses',
    description: 'African Union EAN Fellowship - Selected by the African Union as a top innovative small business in Africa.',
    year: '2024',
    category: 'Continental Excellence',
    status: 'VERIFIED'
  },
  {
    title: 'Moonshot Borderless Awards',
    description: 'Top 15 shortlisted from 1,500+ applicants - Recognized for solutions addressing the needs of marginalized communities across borders.',
    year: '2025',
    category: 'Global Innovation',
    status: 'VERIFIED'
  },
  {
    title: 'African Startup Conference Grant',
    description: 'Received a $7,000 grant on behalf of Annita at the African Startup Conference - Recognized for building scalable digital infrastructure for Africa.',
    year: '2025',
    category: 'Startup Excellence',
    status: 'VERIFIED'
  },
  {
    title: 'UN STI Forum 2026',
    description: 'SDG Solutions Book Innovation #05 - Recognized globally for contributing to sustainable development goals.',
    year: '2026',
    category: 'Global Recognition',
    status: 'VERIFIED'
  },
  {
    title: 'MANSA Platform Onboarding',
    description: 'Officially onboarded onto MANSA, Africa\'s premier due diligence repository by Afreximbank — reinforcing trust, transparency, and cross-border trade readiness.',
    year: '2025',
    category: 'Institutional Trust',
    status: 'VERIFIED'
  }
]

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance across all devices and networks.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and compliance.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Scale',
    description: 'Built to scale from local to global without compromising quality.',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Future-Ready',
    description: 'Built with cutting-edge technology for tomorrow\'s challenges.',
  },
]

function AnimatedCounter({ value, prefix = '', suffix }: { value: number; prefix?: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      if (start === end) {
        setCount(end)
        return
      }
      
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepTime = Math.abs(Math.floor(duration / steps))
      const increment = Math.ceil(end / steps)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, stepTime)
      
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="text-2xl md:text-3xl font-bold gradient-text font-syne">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  )
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [glowOpacity, setGlowOpacity] = useState(0)
  const [isWiderDevice, setIsWiderDevice] = useState(false)

  // Hidden admin access — 5 taps on copyright text
  const tapCountRef = useRef(0)
  const tapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [showAdminModal, setShowAdminModal] = useState(false)
  const [adminModalStage, setAdminModalStage] = useState<'sending' | 'enter-code' | 'verifying' | 'success' | 'error'>('sending')
  const [codeInput, setCodeInput] = useState('')
  const [adminError, setAdminError] = useState('')

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://annita-landing-page-production.up.railway.app'

  function handleCopyrightTap() {
    tapCountRef.current += 1

    if (tapTimerRef.current) clearTimeout(tapTimerRef.current)
    tapTimerRef.current = setTimeout(() => {
      tapCountRef.current = 0
    }, 3000)

    if (tapCountRef.current >= 5) {
      tapCountRef.current = 0
      if (tapTimerRef.current) clearTimeout(tapTimerRef.current)
      setShowAdminModal(true)
      setAdminModalStage('sending')
      setCodeInput('')
      setAdminError('')
      requestAdminCode()
    }
  }

  async function requestAdminCode() {
    try {
      const res = await fetch(`${API_URL}/admin/code/request`, { method: 'POST' })
      const data = await res.json()
      if (res.ok) {
        setAdminModalStage('enter-code')
      } else {
        setAdminModalStage('error')
        setAdminError(data.error || 'Failed to send code')
      }
    } catch {
      setAdminModalStage('error')
      setAdminError('Network error. Please try again.')
    }
  }

  async function verifyAdminCode(e: React.FormEvent) {
    e.preventDefault()
    if (!/^\d{6}$/.test(codeInput)) return
    setAdminModalStage('verifying')
    try {
      const res = await fetch(`${API_URL}/admin/code/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: codeInput }),
      })
      const data = await res.json()
      if (res.ok && data.redirectUrl) {
        setAdminModalStage('success')
        setTimeout(() => {
          window.location.href = data.redirectUrl
        }, 800)
      } else {
        setAdminModalStage('error')
        setAdminError(data.error || 'Invalid code')
      }
    } catch {
      setAdminModalStage('error')
      setAdminError('Network error. Please try again.')
    }
  }

  function closeAdminModal() {
    setShowAdminModal(false)
    setAdminModalStage('sending')
    setCodeInput('')
    setAdminError('')
  }

  useEffect(() => {
    // Check if device is wider than tablet (md breakpoint)
    const checkDevice = () => {
      setIsWiderDevice(window.innerWidth >= 768)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isWiderDevice) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    containerRef.current.style.setProperty('--mouse-x', `${x}px`)
    containerRef.current.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => isWiderDevice && setGlowOpacity(0.6)}
      onMouseLeave={() => isWiderDevice && setGlowOpacity(0)}
      className="min-h-screen bg-background text-foreground mesh-gradient relative overflow-hidden tech-grid"
    >
      {/* Interactive Radial Laser Glow Spotlight - Only on wider devices */}
      {isWiderDevice && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            opacity: glowOpacity,
            background: `radial-gradient(800px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--color-accent-soft), transparent 80%)`
          }}
        />
      )}
      <Navigation />
      <WelcomeModal />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-screen flex items-center px-4 md:px-8 py-16 md:py-24 overflow-hidden tech-scanline">
        <div className="absolute inset-0 radial-pulse" />

        <div className="relative z-10 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: 'var(--color-accent-soft)', border: '1px solid var(--color-border-accent)' }}
            >
              <span className="text-sm font-semibold tracking-[0.2em] uppercase glow-dot animate-pulse" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-syne)' }}>ANNITA LLC</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 word-break"
              style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}
            >
              <span style={{ color: 'var(--color-text-primary)' }}>Innovation.</span><br />
              <span style={{ color: 'var(--color-text-primary)' }}>Infrastructure.</span><br />
              <span style={{ color: 'var(--color-text-primary)' }}>Influence.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Annita is a global diversified ecosystem spanning marketplace infrastructure, fintech, digital health, AI, and custom technology — built for Africa, operating at world standard.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link 
                href="#ecosystem" 
                className="group px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-foreground)', borderRadius: '100px' }}
              >
                Explore the Ecosystem
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/solutions" 
                className="group px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 border-2 hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)] hover:border-[var(--color-accent)]"
                style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)', borderRadius: '100px' }}
              >
                Request a Custom Build
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Right Column (Live Coding Terminal) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 w-full max-w-[480px] mx-auto lg:mx-0"
          >
            <LiveCodingTerminal />
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 rounded-full flex justify-center pt-2"
            style={{ borderColor: 'var(--color-border-default)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Image Slideshow Section */}
      <section className="px-4 md:px-8 pb-8 max-w-[1600px] mx-auto -mt-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ImageSlideshow />
        </motion.div>
      </section>

      {/* MANSA Platform Milestone Section */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl p-6 md:p-12 overflow-hidden border border-[var(--color-accent)]/20 tech-glow-card"
          style={{ backgroundColor: 'var(--color-surface-raised)' }}
        >
          <div className="absolute inset-0 tech-grid opacity-[0.06] pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--color-accent-soft)', border: '1px solid var(--color-border-accent)' }}>
              <Shield className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)] font-mono">VERIFIED // AFREXIMBANK</span>
            </div>

            {/* Two logos side by side — clickable to MANSA platform */}
            <div className="flex items-center justify-center gap-6 md:gap-12">
              <a
                href="https://www.mansaafrica.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 overflow-hidden relative shrink-0 transition-transform hover:scale-110 hover:shadow-lg"
                style={{ borderColor: 'var(--color-accent)' }}
                aria-label="View Annita on MANSA platform"
              >
                <Image
                  src="/annita-real-logo.png"
                  alt="Annita on MANSA"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </a>
              <div className="text-xl md:text-2xl font-bold text-[var(--color-text-muted)]">×</div>
              <a
                href="https://www.mansaafrica.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 overflow-hidden relative shrink-0 transition-transform hover:scale-110 hover:shadow-lg"
                style={{ borderColor: 'var(--color-accent)' }}
                aria-label="Visit MANSA platform"
              >
                <Image
                  src="/mansa-logo.png"
                  alt="MANSA platform"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </a>
            </div>

            {/* Two-line message */}
            <div className="max-w-2xl">
              <p className="text-sm md:text-base text-[var(--color-text-primary)] font-semibold leading-relaxed">
                Annita is verified on MANSA — Africa's premier due diligence platform by Afreximbank.
              </p>
              <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed mt-2">
                Trust, transparency, and cross-border trade readiness — built into everything we do.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/40 hover:bg-[var(--color-surface-raised)]/80 transition-all duration-300 group overflow-hidden tech-glow-card"
            >
              {/* Corner tech accents */}
              <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
              
              <div className="relative z-10">
                {/* Micro tech header */}
                <div className="flex items-center justify-between text-[8px] font-mono text-[var(--color-text-tertiary)] mb-2 select-none">
                  <span className="flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] animate-pulse" />
                    {stat.status}
                  </span>
                  <span>NODE_LBR</span>
                </div>

                <div className="text-center mt-2">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  <p className="text-xs uppercase tracking-wider font-mono text-[var(--color-text-secondary)] mt-3 group-hover:text-[var(--color-text-primary)] transition-colors">{stat.label}</p>
                </div>

                {/* Pulsing micro progress line */}
                <div className="w-full h-[2px] bg-[var(--color-border-default)] mt-4 rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-[var(--color-accent)]/30 to-[var(--color-accent)]" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Global Expansion Section */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'var(--color-accent-soft)', border: '1px solid var(--color-border-accent)' }}>
            <Globe className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)] font-mono">LIVE_EXPANSION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-syne text-[var(--color-text-primary)]">Global Expansion Network</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Real-time visualization of Annita's expansion across Africa — connecting markets, building infrastructure, and scaling impact.
          </p>
        </motion.div>
        <TechGlobe />
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Built for Excellence</h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Enterprise-grade technology with the simplicity and speed you need to succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group tech-glow-card theme-card"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-[var(--color-text-primary)]">{feature.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-syne)' }}>THE ANNITA PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-syne)' }}>Everything Annita.</h2>
          <p style={{ color: 'var(--color-text-secondary)' }}>One group. Six directions. Choose where you belong.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {/* Flagship Card - Annita LLC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative rounded-2xl p-5 md:p-7 transition-all group card-shadow-hover tech-glow-card"
            style={{ backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }}
          >
            <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-foreground)' }}>Flagship</span>
            <div className="relative flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl border-2 overflow-hidden relative group-hover:scale-110 transition-transform" style={{ borderColor: 'var(--color-accent)' }}>
                <Image
                  src="/annita-real-logo.png"
                  alt="Annita Ecosystem"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}>Commerce & Payments Ecosystem</span>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>Annita LLC</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              Annita is Africa's first all-in-one digital ecosystem, integrating e-commerce, fintech, AI, communication, marketing, logistics, and more into a single, connected system.
            </p>
            <Link href="/ecosystem" className="inline-flex items-center gap-2 font-semibold text-sm hover:underline group-hover:gap-3 transition-all" style={{ color: 'var(--color-accent)' }}>
              Enter the Ecosystem! <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* AnnitaPay - Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative rounded-2xl p-5 md:p-7 transition-all group card-shadow-hover tech-glow-card"
            style={{ backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }}
          >
            <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: 'var(--color-coming-soon)', color: 'var(--color-brand-secondary)' }}>Coming Soon</span>
            <div className="w-14 h-14 rounded-xl border-2 overflow-hidden mb-4 opacity-90 group-hover:scale-110 transition-transform" style={{ borderColor: 'var(--color-border-default)' }}>
              <Image
                src="/AnnitaPay-Logo.jpg"
                alt="AnnitaPay"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}>Fintech</span>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>AnnitaPay</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              Secure, borderless payment infrastructure designed for African MSMEs — built for the way commerce actually moves on the continent.
            </p>
            <a href="https://www.an-nitapay.com" className="inline-flex items-center gap-2 font-semibold text-sm hover:underline group-hover:gap-3 transition-all" style={{ color: 'var(--color-accent)' }}>
              Join the Waitlist <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Annita Pulse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative rounded-2xl p-5 md:p-7 transition-all group card-shadow-hover tech-glow-card"
            style={{ backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }}
          >
            <div className="w-14 h-14 rounded-xl border-2 overflow-hidden mb-4 group-hover:scale-110 transition-transform" style={{ borderColor: 'var(--color-accent)' }}>
              <Image
                src="/Annita-Pulse-Logo.png"
                alt="Annita Pulse"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}>Digital Health</span>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>Annita Pulse</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              Digital health infrastructure connecting communities to care — real people, real outcomes, stronger futures.
            </p>
            <a href="https://www.an-nita-pulse.org" className="inline-flex items-center gap-2 font-semibold text-sm hover:underline group-hover:gap-3 transition-all" style={{ color: 'var(--color-accent)' }}>
              Go to Annita Pulse <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Ezri */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative rounded-2xl p-5 md:p-7 transition-all group card-shadow-hover tech-glow-card theme-card"
          >
            <div className="w-14 h-14 rounded-xl border-2 overflow-hidden mb-4 group-hover:scale-110 transition-transform" style={{ borderColor: 'var(--color-border-default)' }}>
              <Image
                src="/Ezri-Logo (1).jpg"
                alt="Ezri"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}>AI & Careers</span>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>Ezri</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              An AI-powered career platform helping Africa's workforce discover opportunities, build skills, and grow with intelligence.
            </p>
            <a href="https://www.ezri-africa.com" className="inline-flex items-center gap-2 font-semibold text-sm hover:underline group-hover:gap-3 transition-all" style={{ color: 'var(--color-accent)' }}>
              Go to Ezri <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* AIIM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative rounded-2xl p-5 md:p-7 transition-all group card-shadow-hover tech-glow-card theme-card"
          >
            <div className="w-14 h-14 rounded-xl border-2 overflow-hidden mb-4 group-hover:scale-110 transition-transform" style={{ borderColor: 'var(--color-accent)' }}>
              <Image
                src="/AIIM-Logo.png"
                alt="AIIM"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}>Innovation & Community</span>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>Annita Impact-Innovation Hub</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              Annita's physical and digital home for entrepreneurs, builders, and innovators — programs, membership, pitch events, and a workspace built for impact.
            </p>
            <a href="https://an-nitaimpactinnovationhub.com" className="inline-flex items-center gap-2 font-semibold text-sm hover:underline group-hover:gap-3 transition-all" style={{ color: 'var(--color-accent)' }}>
              Visit AIIM <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Custom Solutions - Different styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative rounded-2xl p-5 md:p-7 transition-all group card-shadow-hover tech-glow-card theme-card"
          >
            <div className="w-14 h-14 rounded-xl border-2 overflow-hidden mb-4 group-hover:scale-110 transition-transform" style={{ borderColor: 'var(--color-border-default)' }}>
              <Image
                src="/annita-real-logo.png"
                alt="Custom Solutions"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: 'var(--color-coming-soon)', color: 'var(--color-brand-secondary)' }}>Technology Services</span>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>Custom Solutions</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              Annita delivers custom-built technology solutions for MSMEs, governments, and strategic partners across the continent. Tell us what you need — we build it.
            </p>
            <Link href="/solutions" className="inline-flex items-center gap-2 font-semibold text-sm hover:underline group-hover:gap-3 transition-all" style={{ color: 'var(--color-brand-secondary)' }}>
              Request a Solution <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognitions Section */}
      <section className="py-16 px-4 md:px-8 border-t border-b border-[var(--color-border-card)]/50 bg-[var(--color-surface-card)]/10 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[var(--hero-glow)] opacity-[0.25]" />
        
        <div className="relative z-10 max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'var(--color-accent-soft)', border: '1px solid var(--color-border-accent)' }}>
              <Award className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)] font-mono">Verified Accolades</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-syne text-[var(--color-text-primary)]">Global Recognitions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Annita's commitment to building Africa's digital infrastructure is validated by global and continental institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeAwards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative rounded-2xl p-6 transition-all group border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/50 hover:bg-[var(--color-surface-card)]/80 overflow-hidden tech-glow-card"
              >
                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
                
                <div className="flex items-start justify-between mb-4">
                  <span className="px-2 py-0.5 bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-[9px] font-bold rounded font-mono">
                    {award.year}
                  </span>
                  <span className="text-[8px] font-mono text-[var(--color-text-muted)] tracking-widest uppercase">
                    [{award.status}]
                  </span>
                </div>
                
                <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] tracking-wider block mb-2">{award.category}</span>
                <h3 className="text-lg font-bold mb-3 text-[var(--color-text-primary)] font-syne group-hover:text-[var(--color-accent)] transition-colors">{award.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{award.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link 
              href="/awards" 
              className="inline-flex items-center gap-2 font-semibold text-sm hover:underline hover:text-[var(--color-accent)] transition-all font-mono group"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              [View Detailed Documentation] 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[var(--color-accent)]" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass rounded-3xl p-6 md:p-16 overflow-hidden border border-[var(--color-border-card)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-soft)] via-transparent to-[var(--color-accent-soft)]" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Ready to Transform Your Business?</h2>
            <p className="text-sm md:text-lg text-[var(--color-text-secondary)] mb-8">
              Join thousands of MSMEs already leveraging Annita's ecosystem to scale, innovate, and succeed in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/solutions" 
                className="group px-6 py-3 md:px-8 md:py-4 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] rounded-lg font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2 premium-shadow hover:glow-effect"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/ecosystem" 
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-[var(--color-border-default)] rounded-lg font-semibold hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all glass"
              >
                Explore the Ecosystem
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Strip */}
      <section className="py-10 px-4 md:px-8 max-w-[1600px] mx-auto border-t border-b border-[var(--color-border-card)] bg-[var(--color-surface-card)]/25 backdrop-blur-md relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-center relative z-10">
          
          <div className="text-center lg:text-left p-3 rounded-lg border border-[var(--color-border-card)]/40 bg-[var(--color-surface-card)]/30 hover:border-[var(--color-accent)]/20 transition-all duration-300">
            <div className="text-lg md:text-2xl font-bold mb-1 font-syne gradient-text">3,000+</div>
            <div className="text-[10px] md:text-xs font-mono uppercase text-[var(--color-text-tertiary)]">Verified MSMEs<br />Onboarded</div>
          </div>

          <div className="text-center lg:text-left p-3 rounded-lg border border-[var(--color-border-card)]/40 bg-[var(--color-surface-card)]/30 hover:border-[var(--color-accent)]/20 transition-all duration-300">
            <div className="text-lg md:text-2xl font-bold mb-1 font-syne gradient-text">Top 55/200</div>
            <div className="text-[10px] md:text-xs font-mono uppercase text-[var(--color-text-tertiary)]">Global Programs<br />Shanghai & Wuhan</div>
          </div>

          <div className="text-center lg:text-left p-3 rounded-lg border border-[var(--color-border-card)]/40 bg-[var(--color-surface-card)]/30 hover:border-[var(--color-accent)]/20 transition-all duration-300">
            <div className="text-lg md:text-2xl font-bold mb-1 font-syne gradient-text">UN STI 2026</div>
            <div className="text-[10px] md:text-xs font-mono uppercase text-[var(--color-text-tertiary)]">SDG Solutions Book<br />Innovation #05</div>
          </div>

          <div className="text-center lg:text-left p-3 rounded-lg border border-[var(--color-border-card)]/40 bg-[var(--color-surface-card)]/30 hover:border-[var(--color-accent)]/20 transition-all duration-300">
            <div className="text-lg md:text-2xl font-bold mb-1 font-syne gradient-text">APGYD 2026</div>
            <div className="text-[10px] md:text-xs font-mono uppercase text-[var(--color-text-tertiary)]">Excellence Program<br />UN-Backed</div>
          </div>

          <div className="text-center lg:text-left p-3 rounded-lg border border-[var(--color-border-card)]/40 bg-[var(--color-surface-card)]/30 hover:border-[var(--color-accent)]/20 transition-all duration-300">
            <div className="text-lg md:text-2xl font-bold mb-1 font-syne gradient-text">OSVP 2024</div>
            <div className="text-[10px] md:text-xs font-mono uppercase text-[var(--color-text-tertiary)]">1st Place Winner<br />Liberia Winner</div>
          </div>

          <div className="text-center lg:text-left p-3 rounded-lg border border-[var(--color-border-card)]/40 bg-[var(--color-surface-card)]/30 hover:border-[var(--color-accent)]/20 transition-all duration-300">
            <div className="text-lg md:text-2xl font-bold mb-1 font-syne gradient-text">MANSA</div>
            <div className="text-[10px] md:text-xs font-mono uppercase text-[var(--color-text-tertiary)]">Afreximbank<br />Due Diligence</div>
          </div>
        </div>
      </section>

      {/* Techy Footer */}
      <footer className="relative overflow-hidden border-t border-[var(--color-border-card)]" style={{ backgroundColor: 'var(--color-surface-base)' }}>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none tech-grid" />
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-accent)]/5 to-transparent animate-scanline" />
        </div>

        <div className="relative z-10 py-12 px-4 md:px-8 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/annita-real-logo.png" alt="Annita Logo" width={40} height={40} className="rounded-lg" />
                <div>
                  <div className="font-bold text-[var(--color-text-primary)]">Annita<span className="text-[var(--color-accent)]">.</span></div>
                  <div className="text-[10px] font-mono text-[var(--color-accent)]">SYSTEM: ONLINE</div>
                </div>
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)] mb-4 leading-relaxed">Annita is Africa's first all-in-one digital ecosystem, integrating e-commerce, fintech, AI, communication, marketing, logistics, and more into a single, connected system.</p>
              <div className="flex items-center gap-2 text-[10px] font-mono text-[var(--color-text-muted)]">
                <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse" />
                <span>STATUS: OPERATIONAL</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" /> Ecosystem
              </div>
              <div className="space-y-2">
                <Link href="/ecosystem" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Annita Ecosystem</Link>
                <a href="https://www.an-nitapay.com" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">AnnitaPay</a>
                <a href="https://www.an-nita-pulse.org" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Annita Pulse</a>
                <a href="https://www.ezri-africa.com" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Ezri</a>
                <a href="https://an-nitaimpactinnovationhub.com" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">AIIM Hub</a>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" /> Company
              </div>
              <div className="space-y-2">
                <Link href="/about" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">About Us</Link>
                <Link href="/solutions" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Custom Solutions</Link>
                <Link href="/careers" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Careers</Link>
                <Link href="/partnerships" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Partnerships</Link>
                <Link href="/partners" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Partners &amp; Supporters</Link>
                <Link href="/awards" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Awards</Link>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" /> Legal
              </div>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Terms & Conditions</Link>
                <Link href="/cookies" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Cookie Policy</Link>
                <Link href="/security" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Security &amp; Fraud Awareness</Link>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" /> Contact
              </div>
              <div className="space-y-2">
                <Link href="/contact" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Contact Us</Link>
                <Link href="/contact-sales" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Contact Sales</Link>
                <Link href="/partnerships" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Partnership</Link>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-[var(--color-border-card)]/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-[10px] font-mono text-[var(--color-text-muted)]"
              onClick={handleCopyrightTap}
              style={{ cursor: 'default', userSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}
            >
              © 2026 Annita LLC. All rights reserved.
            </p>
            <p className="text-[10px] font-mono text-[var(--color-text-muted)]">Built in Liberia. Built for the World.</p>
          </div>
        </div>
      </footer>

      {/* Hidden Admin Access Modal */}
      <AnimatePresence>
        {showAdminModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(8px)' }}
            onClick={closeAdminModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-surface-card)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--color-accent)]/50" />
              <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[var(--color-accent)]/50" />
              <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[var(--color-accent)]/50" />
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--color-accent)]/50" />

              <button
                onClick={closeAdminModal}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-[var(--color-surface-raised)] transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]" />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-soft)] border border-[var(--color-border-accent)] flex items-center justify-center">
                    <Lock className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-accent)]">SYS_NODE // ADMIN_ACCESS</div>
                    <div className="text-sm font-bold text-[var(--color-text-primary)]">Secure Admin Login</div>
                  </div>
                </div>

                {adminModalStage === 'sending' && (
                  <div className="flex flex-col items-center gap-4 py-8">
                    <Loader2 className="w-8 h-8 text-[var(--color-accent)] animate-spin" />
                    <p className="text-sm text-[var(--color-text-tertiary)]">Sending verification code to admin email…</p>
                  </div>
                )}

                {adminModalStage === 'enter-code' && (
                  <form onSubmit={verifyAdminCode} className="space-y-4">
                    <p className="text-sm text-[var(--color-text-tertiary)] mb-2">
                      A 6-digit code has been sent to the admin email. Enter it below to access the dashboard.
                    </p>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="\d{6}"
                      maxLength={6}
                      required
                      value={codeInput}
                      onChange={(e) => setCodeInput(e.target.value.replace(/\D/g, ''))}
                      placeholder="000000"
                      autoFocus
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-2xl font-mono text-center tracking-[0.3em] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={!/^\d{6}$/.test(codeInput)}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-accent)] text-[var(--color-accent-foreground)] text-sm font-semibold hover:brightness-110 transition-all button-glow disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Verify Code →
                    </button>
                  </form>
                )}

                {adminModalStage === 'verifying' && (
                  <div className="flex flex-col items-center gap-4 py-8">
                    <Loader2 className="w-8 h-8 text-[var(--color-accent)] animate-spin" />
                    <p className="text-sm text-[var(--color-text-tertiary)]">Verifying code…</p>
                  </div>
                )}

                {adminModalStage === 'success' && (
                  <div className="flex flex-col items-center gap-4 py-8">
                    <CheckCircle2 className="w-10 h-10 text-[var(--color-accent)]" />
                    <p className="text-sm font-medium text-[var(--color-accent)]">Access granted. Redirecting…</p>
                  </div>
                )}

                {adminModalStage === 'error' && (
                  <div className="space-y-4">
                    <div className="px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/10">
                      <p className="text-sm text-red-400">{adminError}</p>
                    </div>
                    <button
                      onClick={() => {
                        setAdminModalStage('sending')
                        setAdminError('')
                        requestAdminCode()
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-sm font-medium text-[var(--color-text-primary)] hover:border-[var(--color-accent)]/30 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
