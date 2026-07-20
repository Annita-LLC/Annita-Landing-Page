'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Award, Trophy, Users, Globe, ChevronRight, ArrowRight, Sparkles, Shield, Zap, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'
import Navigation from '@/components/navigation'

function AnimatedCounter({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(animate)
      else setCount(value)
    }
    requestAnimationFrame(animate)
  }, [inView, value, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function AwardsPage() {
  const awards = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'UN STI Forum 2026',
      description: 'SDG Solutions Book Innovation #05 - Recognized for contributing to sustainable development goals through technology innovation.',
      category: 'Global Recognition',
      year: '2026',
      metric: '#05',
      metricLabel: 'Innovation Rank',
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'APGYD 2026',
      description: 'Excellence Program - UN & China Government-backed recognition for outstanding youth development initiatives.',
      category: 'International Excellence',
      year: '2026',
      metric: 'TOP',
      metricLabel: 'Youth Development',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Top 55 / 200',
      description: 'Global Programs Shanghai & Wuhan - Selected among top global programs for innovation and impact.',
      category: 'Global Leadership',
      year: '2026',
      metric: '55/200',
      metricLabel: 'Global Programs',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '3,000+ MSMEs',
      description: 'Verified MSMEs Onboarded - Trusted by thousands of MSMEs across Liberia and beyond.',
      category: 'Community Impact',
      year: 'Ongoing',
      metric: '3K+',
      metricLabel: 'MSMEs Onboarded',
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Orange Social Venture Prize',
      description: '1st Place Winner (POESAM Liberia) - Awarded for outstanding tech-driven social innovation and entrepreneurship addressing key local challenges.',
      category: 'Social Venture',
      year: '2024',
      metric: '1st',
      metricLabel: 'Place Winner',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Top 50 African Businesses',
      description: 'African Union EAN Fellowship - Selected by the African Union as one of the top 50 innovative small businesses in Africa under the inaugural Enterprise African Network Fellowship Programme.',
      category: 'Continental Excellence',
      year: '2024',
      metric: 'Top 50',
      metricLabel: 'AU Fellowship',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'MANSA Verified',
      description: 'Verified on MANSA by Afreximbank — Africa\'s pan-African due diligence repository for cross-border trade.',
      category: 'Institutional Trust',
      year: '2025',
      metric: 'Afreximbank',
      metricLabel: 'Due Diligence',
    },
  ]

  const stats = [
    { value: 7, suffix: '', label: 'Total Recognitions', icon: <Trophy className="w-5 h-5" /> },
    { value: 4, suffix: '', label: 'Global Awards', icon: <Globe className="w-5 h-5" /> },
    { value: 3000, suffix: '+', label: 'MSMEs Onboarded', icon: <Users className="w-5 h-5" /> },
    { value: 3, suffix: '', label: 'Continental Awards', icon: <Shield className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground mesh-gradient tech-grid">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center px-4 md:px-8 py-20 md:py-28 overflow-hidden tech-scanline">
        <div className="absolute inset-0 tech-grid opacity-[0.08]" />
        <div className="absolute inset-0 bg-[var(--hero-glow)]" />

        {/* Animated radial glow */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)]/8 blur-[120px] pointer-events-none"
        />

        {/* Decorative tech lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/15 to-transparent" />
          <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/10 to-transparent" />
        </div>

        {/* Corner micro brackets */}
        <span className="absolute top-8 left-8 w-6 h-6 border-t border-l border-[var(--color-accent)]/30" />
        <span className="absolute top-8 right-8 w-6 h-6 border-t border-r border-[var(--color-accent)]/30" />
        <span className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-[var(--color-accent)]/30" />
        <span className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-[var(--color-accent)]/30" />

        {/* Floating award icons */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden md:block absolute top-[20%] left-[12%] opacity-20"
        >
          <Trophy className="w-10 h-10 text-[var(--color-accent)]" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="hidden md:block absolute top-[25%] right-[15%] opacity-20"
        >
          <Globe className="w-12 h-12 text-[var(--color-accent)]" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="hidden md:block absolute bottom-[25%] left-[18%] opacity-15"
        >
          <Shield className="w-10 h-10 text-[var(--color-accent)]" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="hidden md:block absolute bottom-[30%] right-[12%] opacity-20"
        >
          <Award className="w-11 h-11 text-[var(--color-accent)]" />
        </motion.div>

        {/* Floating System Telemetry Log */}
        <div className="hidden lg:block absolute bottom-6 left-8 font-mono text-[9px] text-[var(--color-text-tertiary)]/30 space-y-1 select-none pointer-events-none">
          <div>[INDEX: AWARDS_LEDGER.log]</div>
          <div>TELEMETRY: BROADCAST // SECURE: TRUE</div>
          <div>ENTRIES: {awards.length} // STATUS: VERIFIED</div>
        </div>
        <div className="hidden lg:block absolute bottom-6 right-8 font-mono text-[9px] text-[var(--color-text-tertiary)]/30 space-y-1 text-right select-none pointer-events-none">
          <div>AWARDS_VERIFIED: ACTIVE</div>
          <div>COMPLIANCE_STATUS: VERIFIED</div>
          <div>NODE: GLOBAL_RECOGNITION</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-4 px-4 py-2 rounded-lg mb-10 border border-[var(--color-accent)]/25 bg-[var(--color-surface-card)]/60 backdrop-blur-md relative overflow-hidden group"
          >
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--color-accent)]/60" />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--color-accent)]/60" />
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-[var(--color-accent)] animate-pulse" />
              SYS_NODE // <span className="text-[var(--color-accent)] font-bold">RECOGNITIONS</span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold leading-[1.1] mb-6"
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}
          >
            <span className="gradient-text">Awards &</span><br />
            <span className="gradient-text">Recognitions</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Global recognition for innovation, impact, and excellence in building Africa's digital future. Verified by institutions, trusted by communities.
          </motion.p>

          {/* Quick stats inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            {[
              { value: '7', label: 'Recognitions' },
              { value: '4', label: 'Global Awards' },
              { value: '3K+', label: 'MSMEs Onboarded' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && <div className="w-px h-8 bg-[var(--color-border-card)]" />}
                <div className="text-left">
                  <div className="text-xl md:text-2xl font-extrabold text-[var(--color-accent)] font-mono leading-none">{item.value}</div>
                  <div className="text-[9px] font-mono text-[var(--color-text-muted)] uppercase tracking-widest mt-1">{item.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-xl p-6 border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/40 backdrop-blur-md overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-accent)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-accent)]/10 transition-colors" />
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-accent)]/30" />
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-accent)]/30" />
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)] mb-3 border border-[var(--color-accent)]/20">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-[var(--color-text-primary)] font-mono mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Awards Timeline Section */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
              Verified Achievements // {awards.length} Entries
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
            Recognition Ledger
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)]/40 via-[var(--color-accent)]/20 to-transparent" />

          <div className="space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-0 md:left-4 top-6 w-8 h-8 rounded-full bg-[var(--color-surface-card)] border-2 border-[var(--color-accent)]/40 flex items-center justify-center z-10">
                  <span className="text-[10px] font-mono font-bold text-[var(--color-accent)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all group relative overflow-hidden tech-glow-card"
                >
                  {/* Grid backdrop */}
                  <div className="absolute inset-0 tech-grid opacity-[0.06] pointer-events-none" />

                  {/* Corner tech accents */}
                  <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />

                  {/* Glow blob */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-accent)]/10 transition-colors" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      {/* Left: Icon + content */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-all border border-[var(--color-accent)]/20 shrink-0">
                            {award.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <span className="px-2.5 py-0.5 bg-[var(--color-accent-soft)] text-[var(--color-accent)] text-[10px] font-bold rounded-full border border-[var(--color-accent)]/20 font-mono">
                                {award.year}
                              </span>
                              <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">
                                {award.category}
                              </span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold gradient-text font-syne mb-2">{award.title}</h3>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed pl-0 md:pl-18">
                          {award.description}
                        </p>
                      </div>

                      {/* Right: Metric badge */}
                      <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1 shrink-0">
                        <div className="text-right">
                          <div className="text-2xl md:text-3xl font-extrabold text-[var(--color-accent)] font-mono leading-none mb-1">
                            {award.metric}
                          </div>
                          <div className="text-[9px] font-mono text-[var(--color-text-muted)] uppercase tracking-widest">
                            {award.metricLabel}
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[var(--color-accent)]/40 group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all hidden md:block" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] rounded-lg font-semibold hover:brightness-110 transition-all premium-shadow hover:glow-effect"
          >
            Back to Home
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
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
                <NextImage src="/annita-real-logo.png" alt="Annita Logo" width={40} height={40} className="rounded-lg" />
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
