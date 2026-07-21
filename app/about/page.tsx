'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ArrowRight, Target, Eye, Heart, Shield, Globe, Users, Zap, Rocket, ChevronRight, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import NewsletterSection from '@/components/newsletter-section'

const stats = [
  { value: 3000, label: 'Verified MSMEs', prefix: '', suffix: '+', status: 'ACTIVE_NODE' },
  { value: 55, label: 'Global Ranking', prefix: 'Top ', suffix: '/200', status: 'RANKED_GLB' },
  { value: 6, label: 'Portfolio Companies', prefix: '', suffix: '', status: 'PORTFOLIO' },
  { value: 100, label: 'Countries Reached', prefix: '', suffix: '+', status: 'REACH_GLB' },
  { value: 12500, label: 'Grants Raised', prefix: '$', suffix: '+', status: 'FUND_SECURE' },
  { value: 12, label: 'Recognitions & Awards', prefix: '', suffix: '+', status: 'CERTIFIED' },
]

const values = [
  { icon: <Target className="w-5 h-5" />, title: 'Mission-Driven', desc: 'Transforming Africa through technology.' },
  { icon: <Heart className="w-5 h-5" />, title: 'People-First', desc: 'Empowering communities and MSMEs.' },
  { icon: <Shield className="w-5 h-5" />, title: 'Trust', desc: 'Transparency in everything we build.' },
  { icon: <Globe className="w-5 h-5" />, title: 'Global Impact', desc: 'Local action, continental scale.' },
  { icon: <Users className="w-5 h-5" />, title: 'Collaboration', desc: 'Partnerships that multiply impact.' },
  { icon: <Zap className="w-5 h-5" />, title: 'Innovation', desc: 'Building for real-world challenges.' },
]

const ecosystem = [
  { name: 'Annita LLC', desc: 'Commerce & Payments Ecosystem', logo: '/annita-real-logo.png', href: '/ecosystem', badge: 'Flagship', badgeStyle: 'accent' },
  { name: 'AnnitaPay', desc: 'Fintech', logo: '/AnnitaPay-Logo.jpg', href: 'https://www.an-nitapay.com', badge: 'Coming Soon', badgeStyle: 'coming' },
  { name: 'Annita Pulse', desc: 'Digital Health', logo: '/Annita-Pulse-Logo.png', href: 'https://www.an-nita-pulse.org', badge: null, badgeStyle: null },
  { name: 'Ezri', desc: 'AI & Careers', logo: '/Ezri-Logo (1).jpg', href: 'https://www.ezri-africa.com', badge: null, badgeStyle: null },
  { name: 'AIIM Hub', desc: 'Innovation & Community', logo: '/AIIM-Logo.png', href: 'https://an-nitaimpactinnovationhub.com', badge: null, badgeStyle: null },
  { name: 'Custom Solutions', desc: 'Technology Services', logo: '/annita-real-logo.png', href: '/solutions', badge: null, badgeStyle: null },
]

const recognitions = [
  { title: 'Orange Social Venture Prize', year: '2024', category: 'Social Venture' },
  { title: 'Top 50 African Businesses', year: '2024', category: 'Continental Excellence' },
  { title: 'Moonshot Borderless Awards', year: '2025', category: 'Global Innovation' },
  { title: 'African Startup Conference Grant', year: '2025', category: 'Startup Excellence' },
  { title: 'UN STI Forum 2026', year: '2026', category: 'Global Recognition' },
  { title: 'MANSA Verified', year: '2025', category: 'Institutional Trust' },
]

function AnimatedCounter({ value, prefix = '', suffix }: { value: number; prefix?: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      if (start === end) { setCount(end); return }
      const duration = 2000
      const steps = 60
      const stepTime = Math.abs(Math.floor(duration / steps))
      const increment = Math.ceil(end / steps)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) { setCount(end); clearInterval(timer) }
        else setCount(start)
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground mesh-gradient relative overflow-hidden tech-grid">
      <Navigation />

      {/* ═══ Hero — matches homepage hero structure ═══ */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center px-4 md:px-8 py-16 md:py-24 overflow-hidden tech-scanline">
        <div className="absolute inset-0 radial-pulse" />
        <div className="absolute inset-0 bg-[var(--hero-glow)]" />

        <div className="relative z-10 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left */}
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
              <span className="text-sm font-semibold tracking-[0.2em] uppercase glow-dot animate-pulse" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-syne)' }}>ABOUT US</span>
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
              <span className="gradient-text">Impact.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Founded in Liberia. Built for Africa. Annita is a diversified technology ecosystem integrating e-commerce, fintech, AI, digital health, and custom solutions into one connected system.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link href="#ecosystem" className="group px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 hover:brightness-110 button-glow" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-foreground)', borderRadius: '100px' }}>
                Explore the Ecosystem
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="group px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 border-2 hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)] hover:border-[var(--color-accent)]" style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)', borderRadius: '100px' }}>
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Logo card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 w-full max-w-[480px] mx-auto lg:mx-0"
          >
            <div className="relative rounded-2xl p-8 md:p-12 border border-[var(--color-border-card)] tech-glow-card glass overflow-hidden">
              <div className="absolute inset-0 tech-grid opacity-[0.06] pointer-events-none" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />

              <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--color-accent)]/40" />
              <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[var(--color-accent)]/40" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[var(--color-accent)]/40" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[var(--color-accent)]/40" />

              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <div className="w-20 h-20 rounded-2xl border-2 overflow-hidden" style={{ borderColor: 'var(--color-accent)' }}>
                  <Image src="/annita-real-logo.png" alt="Annita LLC" width={80} height={80} className="object-cover" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>Annita LLC</div>
                  <div className="text-[10px] font-mono text-[var(--color-accent)]">SYSTEM: ONLINE</div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-[var(--color-text-muted)]">
                  <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse" />
                  <span>STATUS: OPERATIONAL</span>
                </div>
                <div className="grid grid-cols-3 gap-3 w-full pt-4 border-t border-[var(--color-border-card)]/50">
                  <div className="text-center">
                    <div className="text-sm font-bold gradient-text font-syne">3K+</div>
                    <div className="text-[8px] font-mono text-[var(--color-text-muted)] uppercase">MSMEs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold gradient-text font-syne">100+</div>
                    <div className="text-[8px] font-mono text-[var(--color-text-muted)] uppercase">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold gradient-text font-syne">12+</div>
                    <div className="text-[8px] font-mono text-[var(--color-text-muted)] uppercase">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ Stats — matches homepage stats section ═══ */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">By the Numbers</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>Impact at scale</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/40 hover:bg-[var(--color-surface-raised)]/80 transition-all duration-300 group overflow-hidden tech-glow-card"
            >
              <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />

              <div className="relative z-10">
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
        </div>
      </section>

      {/* ═══ Mission & Vision — glass cards matching homepage ═══ */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">What Drives Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>Mission & Vision</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="glass rounded-2xl p-6 md:p-8 tech-glow-card theme-card group"
          >
            <div className="w-12 h-12 rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-colors">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>Our Mission</h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Democratize access to digital infrastructure across Africa — giving MSMEs, governments, and partners affordable, scalable, integrated technology that drives economic growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="glass rounded-2xl p-6 md:p-8 tech-glow-card theme-card group"
          >
            <div className="w-12 h-12 rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-colors">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>Our Vision</h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Become Africa's leading digital ecosystem — powering a globally competitive digital economy where every business has access to world-class technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ Story — compact, centered ═══ */}
      <section className="py-16 px-4 md:px-8 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">Our Story</p>
          <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
            Founded in Liberia, Annita was built to solve a clear gap: African MSMEs lacked integrated, affordable digital infrastructure. We started with that problem and grew into a movement — serving 3,000+ MSMEs across 100+ countries and earning global recognition.
          </p>
        </motion.div>
      </section>

      {/* ═══ Values — feature cards matching homepage ═══ */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">Core Principles</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>What drives us forward</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
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
                {value.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-[var(--color-text-primary)]">{value.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ Ecosystem — matches homepage ecosystem cards ═══ */}
      <section id="ecosystem" className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-syne)' }}>THE ANNITA PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-syne)' }}>One ecosystem. Multiple solutions.</h2>
          <p style={{ color: 'var(--color-text-secondary)' }}>One group. Six directions. Choose where you belong.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {ecosystem.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative rounded-2xl p-5 md:p-7 transition-all group card-shadow-hover tech-glow-card"
              style={{ backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }}
            >
              {item.badge && (
                <span
                  className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full"
                  style={item.badgeStyle === 'accent'
                    ? { backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-foreground)' }
                    : { backgroundColor: 'var(--color-coming-soon)', color: 'var(--color-brand-secondary)' }
                  }
                >
                  {item.badge}
                </span>
              )}
              <div className="w-14 h-14 rounded-xl border-2 overflow-hidden mb-4 group-hover:scale-110 transition-transform" style={{ borderColor: 'var(--color-border-default)' }}>
                <Image src={item.logo} alt={item.name} width={56} height={56} className="object-cover" />
              </div>
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}>{item.desc}</span>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{item.name}</h3>
              <Link
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 font-semibold text-sm hover:underline group-hover:gap-3 transition-all"
                style={{ color: 'var(--color-accent)' }}
              >
                Learn more <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ Recognitions — matches homepage awards grid ═══ */}
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
            {recognitions.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative rounded-2xl p-6 transition-all group border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/50 hover:bg-[var(--color-surface-card)]/80 overflow-hidden tech-glow-card"
              >
                <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />

                <div className="flex items-start justify-between mb-4">
                  <span className="px-2 py-0.5 bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-[9px] font-bold rounded font-mono">
                    {rec.year}
                  </span>
                  <span className="text-[8px] font-mono text-[var(--color-text-muted)] tracking-widest uppercase">[VERIFIED]</span>
                </div>
                <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] tracking-wider block mb-2">{rec.category}</span>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-syne group-hover:text-[var(--color-accent)] transition-colors">{rec.title}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="/awards" className="inline-flex items-center gap-2 font-semibold text-sm hover:underline hover:text-[var(--color-accent)] transition-all font-mono group" style={{ color: 'var(--color-text-tertiary)' }}>
              [View Detailed Documentation]
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[var(--color-accent)]" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA — matches homepage CTA ═══ */}
      <section className="py-10 md:py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass rounded-3xl p-6 md:p-16 overflow-hidden border border-[var(--color-border-card)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-soft)] via-transparent to-[var(--color-accent-soft)]" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'var(--color-accent-soft)', border: '1px solid var(--color-border-accent)' }}>
              <Rocket className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)] font-mono">Join the Movement</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>Ready to Transform Your Business?</h2>
            <p className="text-sm md:text-lg text-[var(--color-text-secondary)] mb-8">
              Join thousands of MSMEs already leveraging Annita's ecosystem to scale, innovate, and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/solutions" className="group px-6 py-3 md:px-8 md:py-4 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] rounded-lg font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2 premium-shadow hover:glow-effect">
                Start Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/ecosystem" className="px-6 py-3 md:px-8 md:py-4 border-2 border-[var(--color-border-default)] rounded-lg font-semibold hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all glass">
                Explore the Ecosystem
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ Newsletter ═══ */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <NewsletterSection
          title="Follow Africa's Innovation Story"
          subtitle="Ecosystem milestones and insider updates from Annita."
        />
      </section>

      {/* ═══ Footer — matches homepage footer ═══ */}
      <footer className="relative overflow-hidden border-t border-[var(--color-border-card)]" style={{ backgroundColor: 'var(--color-surface-base)' }}>
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
              <p className="text-xs text-[var(--color-text-tertiary)] mb-4 leading-relaxed">Annita is Africa's first all-in-one digital ecosystem, integrating e-commerce, fintech, AI, communication, marketing, logistics, and more.</p>
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
                <Link href="/services" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Managed IT Services</Link>
                <Link href="/careers" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Careers</Link>
                <Link href="/partnerships" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Partnerships</Link>
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
                <Link href="/security" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Security & Fraud Awareness</Link>
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
            <p className="text-[10px] font-mono text-[var(--color-text-muted)]">© 2026 Annita LLC. All rights reserved.</p>
            <p className="text-[10px] font-mono text-[var(--color-text-muted)]">Built in Liberia. Built for the World.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
