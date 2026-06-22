'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight, TrendingUp, Users, Globe, Award, Zap, Shield, Rocket, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import WelcomeModal from '@/components/welcome-modal'
import LiveCodingTerminal from '@/components/live-coding-terminal'

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
    title: 'UN STI Forum 2026',
    description: 'SDG Solutions Book Innovation #05 - Recognized globally for contributing to sustainable development goals.',
    year: '2026',
    category: 'Global Recognition',
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
    <div ref={ref} className="text-3xl font-bold gradient-text font-syne">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  )
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [glowOpacity, setGlowOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
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
      onMouseEnter={() => setGlowOpacity(0.6)}
      onMouseLeave={() => setGlowOpacity(0)}
      className="min-h-screen bg-background text-foreground mesh-gradient relative overflow-hidden tech-grid"
    >
      {/* Interactive Radial Laser Glow Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500" 
        style={{
          opacity: glowOpacity,
          background: `radial-gradient(800px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 194, 138, 0.05), transparent 80%)`
        }}
      />
      <Navigation />
      <WelcomeModal />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-screen flex items-center px-4 md:px-8 py-16 md:py-24 overflow-hidden tech-scanline">
        <div className="absolute inset-0 radial-pulse" />
        
        {/* Floating System Telemetry Log */}
        <div className="hidden xl:block absolute bottom-12 left-12 font-mono text-[9px] text-[#8A9BBB]/25 space-y-1 select-none pointer-events-none z-10">
          <div>[GATEWAY CORE PROTOCOL: v1.4.2]</div>
          <div>SYS_LOAD: NOMINAL // EDGE_NODES: 3,000+</div>
          <div>ENCRYPT_LAYER: SECURE_AES_256</div>
        </div>
        <div className="hidden xl:block absolute bottom-12 right-12 font-mono text-[9px] text-[#8A9BBB]/25 space-y-1 text-right select-none pointer-events-none z-10">
          <div>SSL_HANDSHAKE: SUCCESSFUL</div>
          <div>PROD_CLUSTER: MONROVIA_HQ_SECURE</div>
          <div>TELEMETRY: INTEGRATED // PORTAL: ONLINE</div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
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
              style={{ backgroundColor: 'rgba(0, 194, 138, 0.08)', border: '1px solid rgba(0, 194, 138, 0.2)' }}
            >
              <span className="text-sm font-semibold tracking-[0.2em] uppercase glow-dot animate-pulse" style={{ color: '#00C28A', fontFamily: 'var(--font-syne)' }}>ANNITA LLC</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 word-break"
              style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}
            >
              <span style={{ color: '#F0F4FF' }}>Innovation.</span><br />
              <span style={{ color: '#F0F4FF' }}>Infrastructure.</span><br />
              <span style={{ color: '#F0F4FF' }}>Influence.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed"
              style={{ color: '#8A9BBB' }}
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
                style={{ backgroundColor: '#00C28A', color: '#080D1A', borderRadius: '100px' }}
              >
                Explore the Ecosystem
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/solutions" 
                className="group px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 border-2 hover:bg-[#00C28A] hover:text-[#080D1A] hover:border-[#00C28A]"
                style={{ borderColor: '#00C28A', color: '#00C28A', borderRadius: '100px' }}
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
            style={{ borderColor: '#1A2640' }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#00C28A' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-28 px-8 max-w-[1400px] mx-auto">
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
              className="relative p-6 rounded-xl border border-[#1A2640] bg-[#0F1729]/40 hover:bg-[#0F1729]/80 transition-all duration-300 group overflow-hidden tech-glow-card"
            >
              {/* Corner tech accents */}
              <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#00C28A]/30 group-hover:border-[#00C28A] transition-colors" />
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#00C28A]/30 group-hover:border-[#00C28A] transition-colors" />
              
              <div className="relative z-10">
                {/* Micro tech header */}
                <div className="flex items-center justify-between text-[8px] font-mono text-[#4A5775] mb-2 select-none">
                  <span className="flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#00C28A] animate-pulse" />
                    {stat.status}
                  </span>
                  <span>NODE_LBR</span>
                </div>

                <div className="text-center mt-2">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  <p className="text-xs uppercase tracking-wider font-mono text-[#8A9BBB] mt-3 group-hover:text-white transition-colors">{stat.label}</p>
                </div>

                {/* Pulsing micro progress line */}
                <div className="w-full h-[2px] bg-[#1A2640] mt-4 rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#00C28A]/30 to-[#00C28A]" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-28 px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Excellence</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
              className="glass rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group tech-glow-card"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/12 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-28 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#00C28A', fontFamily: 'var(--font-syne)' }}>THE ANNITA PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>Everything Annita.</h2>
          <p style={{ color: '#8A9BBB' }}>One group. Six directions. Choose where you belong.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {/* Flagship Card - Annita Ecosystem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative rounded-2xl p-5 md:p-7 transition-all group card-shadow-hover tech-glow-card"
            style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
          >
            <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: '#00C28A', color: '#080D1A' }}>Flagship</span>
            <div className="relative flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl border-2 overflow-hidden relative group-hover:scale-110 transition-transform" style={{ borderColor: '#00C28A' }}>
                <Image
                  src="/annita-real-logo.png"
                  alt="Annita Ecosystem"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: 'rgba(0, 194, 138, 0.08)', color: '#00C28A' }}>Marketplace & SaaS</span>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#F0F4FF' }}>Annita Ecosystem</h3>
            <p className="text-sm mb-4" style={{ color: '#8A9BBB', lineHeight: '1.7' }}>
              Africa's first offline-first, all-in-one digital ecosystem for MSMEs — marketplace, business tools, and fintech infrastructure in one place.
            </p>
            <Link href="/login" className="inline-flex items-center gap-2 font-semibold text-sm hover:underline group-hover:gap-3 transition-all" style={{ color: '#00C28A' }}>
              Enter the Ecosystem <ChevronRight className="w-4 h-4" />
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
            style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
          >
            <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: '#F5A62333', color: '#F5A623' }}>Coming Soon</span>
            <div className="w-14 h-14 rounded-xl border-2 overflow-hidden mb-4 opacity-90 group-hover:scale-110 transition-transform" style={{ borderColor: '#1A2640' }}>
              <Image
                src="/AnnitaPay-Logo.jpg"
                alt="AnnitaPay"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: 'rgba(0, 194, 138, 0.08)', color: '#00C28A' }}>Fintech</span>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#F0F4FF' }}>AnnitaPay</h3>
            <p className="text-sm mb-4" style={{ color: '#8A9BBB', lineHeight: '1.7' }}>
              Secure, borderless payment infrastructure designed for African MSMEs — built for the way commerce actually moves on the continent.
            </p>
            <a href="https://www.an-nitapay.com" className="inline-flex items-center gap-2 font-semibold text-sm hover:underline group-hover:gap-3 transition-all" style={{ color: '#00C28A' }}>
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
            style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
          >
            <div className="w-14 h-14 rounded-xl border-2 overflow-hidden mb-4 group-hover:scale-110 transition-transform" style={{ borderColor: '#00C28A' }}>
              <Image
                src="/Annita-Pulse-Logo.png"
                alt="Annita Pulse"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: 'rgba(0, 194, 138, 0.08)', color: '#00C28A' }}>Digital Health</span>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#F0F4FF' }}>Annita Pulse</h3>
            <p className="text-sm mb-4" style={{ color: '#8A9BBB', lineHeight: '1.7' }}>
              Digital health infrastructure connecting communities to care — real people, real outcomes, stronger futures.
            </p>
            <a href="https://www.an-nita-pulse.org" className="inline-flex items-center gap-2 font-semibold text-sm hover:underline group-hover:gap-3 transition-all" style={{ color: '#00C28A' }}>
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
            className="relative rounded-2xl p-5 md:p-7 transition-all group card-shadow-hover tech-glow-card"
            style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
          >
            <div className="w-14 h-14 rounded-xl border-2 overflow-hidden mb-4 group-hover:scale-110 transition-transform" style={{ borderColor: '#1A2640' }}>
              <Image
                src="/Ezri-Logo (1).jpg"
                alt="Ezri"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: 'rgba(0, 194, 138, 0.08)', color: '#00C28A' }}>AI & Careers</span>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#F0F4FF' }}>Ezri</h3>
            <p className="text-sm mb-4" style={{ color: '#8A9BBB', lineHeight: '1.7' }}>
              An AI-powered career platform helping Africa's workforce discover opportunities, build skills, and grow with intelligence.
            </p>
            <a href="https://www.ezri-africa.com" className="inline-flex items-center gap-2 font-semibold text-sm hover:underline group-hover:gap-3 transition-all" style={{ color: '#00C28A' }}>
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
            className="relative rounded-2xl p-5 md:p-7 transition-all group card-shadow-hover tech-glow-card"
            style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
          >
            <div className="w-14 h-14 rounded-xl border-2 overflow-hidden mb-4 group-hover:scale-110 transition-transform" style={{ borderColor: '#00C28A' }}>
              <Image
                src="/AIIM-Logo.png"
                alt="AIIM"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: 'rgba(0, 194, 138, 0.08)', color: '#00C28A' }}>Innovation & Community</span>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#F0F4FF' }}>Annita Impact-Innovation Hub</h3>
            <p className="text-sm mb-4" style={{ color: '#8A9BBB', lineHeight: '1.7' }}>
              Annita's physical and digital home for entrepreneurs, builders, and innovators — programs, membership, pitch events, and a workspace built for impact.
            </p>
            <a href="https://www.aiim.com" className="inline-flex items-center gap-2 font-semibold text-sm hover:underline group-hover:gap-3 transition-all" style={{ color: '#00C28A' }}>
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
            className="relative rounded-2xl p-5 md:p-7 transition-all group card-shadow-hover tech-glow-card"
            style={{ backgroundColor: '#080D1A', border: '1px solid #F5A62333' }}
          >
            <div className="w-14 h-14 rounded-xl border-2 overflow-hidden mb-4 group-hover:scale-110 transition-transform" style={{ borderColor: '#F5A62333' }}>
              <Image
                src="/annita-real-logo.png"
                alt="Custom Solutions"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: 'rgba(245, 166, 35, 0.08)', color: '#F5A623' }}>Technology Services</span>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#F0F4FF' }}>Custom Solutions</h3>
            <p className="text-sm mb-4" style={{ color: '#8A9BBB', lineHeight: '1.7' }}>
              Annita delivers custom-built technology solutions for MSMEs, governments, and strategic partners across the continent. Tell us what you need — we build it.
            </p>
            <Link href="/solutions" className="inline-flex items-center gap-2 font-semibold text-sm hover:underline group-hover:gap-3 transition-all" style={{ color: '#F5A623' }}>
              Request a Solution <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognitions Section */}
      <section className="py-28 px-4 md:px-8 border-t border-b border-[#1A2640]/50 bg-[#0F1729]/10 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,194,138,0.02)_0%,transparent_70%)]" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'rgba(0, 194, 138, 0.08)', border: '1px solid rgba(0, 194, 138, 0.2)' }}>
              <Award className="w-3.5 h-3.5 text-[#00C28A]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00C28A] font-mono">Verified Accolades</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-syne text-[#F0F4FF]">Global Recognitions</h2>
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
                className="relative rounded-2xl p-6 transition-all group border border-[#1A2640] bg-[#0F1729]/50 hover:bg-[#0F1729]/80 overflow-hidden tech-glow-card"
              >
                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#00C28A]/30 group-hover:border-[#00C28A] transition-colors" />
                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#00C28A]/30 group-hover:border-[#00C28A] transition-colors" />
                
                <div className="flex items-start justify-between mb-4">
                  <span className="px-2 py-0.5 bg-[#00C28A]/10 border border-[#00C28A]/20 text-[#00C28A] text-[9px] font-bold rounded font-mono">
                    {award.year}
                  </span>
                  <span className="text-[8px] font-mono text-[#4A5775] tracking-widest uppercase">
                    [{award.status}]
                  </span>
                </div>
                
                <span className="text-[10px] font-mono text-[#8A9BBB] tracking-wider block mb-2">{award.category}</span>
                <h3 className="text-lg font-bold mb-3 text-[#F0F4FF] font-syne group-hover:text-[#00C28A] transition-colors">{award.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{award.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/awards" 
              className="inline-flex items-center gap-2 font-semibold text-sm hover:underline hover:text-[#00C28A] transition-all font-mono group"
              style={{ color: '#8A9BBB' }}
            >
              [View Detailed Documentation] 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00C28A]" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-28 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass rounded-3xl p-6 md:p-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-sm md:text-lg text-muted-foreground mb-8">
              Join thousands of MSMEs already leveraging Annita's ecosystem to scale, innovate, and succeed in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/solutions" 
                className="group px-6 py-3 md:px-8 md:py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 premium-shadow hover:glow-effect"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/login" 
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-border rounded-lg font-semibold hover:border-accent hover:text-accent transition-all glass"
              >
                Explore the Ecosystem
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Strip */}
      <section className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto border-t border-b border-[#1A2640] bg-[#0F1729]/20 backdrop-blur-md relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-center relative z-10">
          
          <div className="text-center lg:text-left p-3 rounded-lg border border-[#1A2640]/40 bg-[#0F1729]/30 hover:border-[#00C28A]/20 transition-all duration-300">
            <div className="text-xl md:text-2xl font-bold mb-1 font-syne gradient-text">3,000+</div>
            <div className="text-[10px] md:text-xs font-mono uppercase text-[#8A9BBB]">Verified MSMEs<br />Onboarded</div>
          </div>
          
          <div className="text-center lg:text-left p-3 rounded-lg border border-[#1A2640]/40 bg-[#0F1729]/30 hover:border-[#00C28A]/20 transition-all duration-300">
            <div className="text-xl md:text-2xl font-bold mb-1 font-syne gradient-text">Top 55/200</div>
            <div className="text-[10px] md:text-xs font-mono uppercase text-[#8A9BBB]">Global Programs<br />Shanghai & Wuhan</div>
          </div>
          
          <div className="text-center lg:text-left p-3 rounded-lg border border-[#1A2640]/40 bg-[#0F1729]/30 hover:border-[#00C28A]/20 transition-all duration-300">
            <div className="text-xl md:text-2xl font-bold mb-1 font-syne gradient-text">UN STI 2026</div>
            <div className="text-[10px] md:text-xs font-mono uppercase text-[#8A9BBB]">SDG Solutions Book<br />Innovation #05</div>
          </div>
          
          <div className="text-center lg:text-left p-3 rounded-lg border border-[#1A2640]/40 bg-[#0F1729]/30 hover:border-[#00C28A]/20 transition-all duration-300">
            <div className="text-xl md:text-2xl font-bold mb-1 font-syne gradient-text">APGYD 2026</div>
            <div className="text-[10px] md:text-xs font-mono uppercase text-[#8A9BBB]">Excellence Program<br />UN-Backed</div>
          </div>

          <div className="text-center lg:text-left p-3 rounded-lg border border-[#1A2640]/40 bg-[#0F1729]/30 hover:border-[#00C28A]/20 transition-all duration-300">
            <div className="text-xl md:text-2xl font-bold mb-1 font-syne gradient-text">OSVP 2024</div>
            <div className="text-[10px] md:text-xs font-mono uppercase text-[#8A9BBB]">1st Place Winner<br />Liberia Winner</div>
          </div>

          <div className="text-center lg:text-left p-3 rounded-lg border border-[#1A2640]/40 bg-[#0F1729]/30 hover:border-[#00C28A]/20 transition-all duration-300">
            <div className="text-xl md:text-2xl font-bold mb-1 font-syne gradient-text">AU Fellowship</div>
            <div className="text-[10px] md:text-xs font-mono uppercase text-[#8A9BBB]">Top 50 African<br />Businesses</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 max-w-[1400px] mx-auto" style={{ backgroundColor: '#080D1A' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm" style={{ color: '#8A9BBB' }}>© 2026 Annita LLC. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link href="/login" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Annita Ecosystem</Link>
            <a href="https://www.an-nitapay.com" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>AnnitaPay</a>
            <a href="https://www.an-nita-pulse.org" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Annita Pulse</a>
            <a href="https://www.ezri-africa.com" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Ezri</a>
            <a href="https://www.aiim.com" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>AIIM</a>
            <Link href="/solutions" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Custom Solutions</Link>
            <Link href="/awards" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Awards</Link>
            <Link href="/contact" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Contact Us</Link>
            <Link href="/contact-sales" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Contact Sales</Link>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm" style={{ color: '#8A9BBB' }}>Built in Liberia. Built for the World.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
