'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Shield, Globe, Users, Zap, ArrowRight, Rocket } from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'
import Navigation from '@/components/navigation'
import NewsletterSection from '@/components/newsletter-section'

const values = [
  { icon: <Target className="w-4 h-4" />, title: 'Mission-Driven', desc: 'Transforming Africa through technology.' },
  { icon: <Heart className="w-4 h-4" />, title: 'People-First', desc: 'Empowering communities and MSMEs.' },
  { icon: <Shield className="w-4 h-4" />, title: 'Trust', desc: 'Transparency in everything we build.' },
  { icon: <Globe className="w-4 h-4" />, title: 'Global Impact', desc: 'Local action, continental scale.' },
  { icon: <Users className="w-4 h-4" />, title: 'Collaboration', desc: 'Partnerships that multiply impact.' },
  { icon: <Zap className="w-4 h-4" />, title: 'Innovation', desc: 'Building for real-world challenges.' },
]

const stats = [
  { value: '3,000+', label: 'Verified MSMEs' },
  { value: 'Top 55', label: 'Global Ranking' },
  { value: '6', label: 'Portfolio Companies' },
  { value: '100+', label: 'Countries' },
  { value: '$12.5K+', label: 'Grants Raised' },
  { value: '12+', label: 'Awards' },
]

const ecosystem = [
  { name: 'AnnitaPay', desc: 'Fintech', href: 'https://www.an-nitapay.com', comingSoon: true },
  { name: 'Annita Pulse', desc: 'Digital Health', href: 'https://www.an-nita-pulse.org' },
  { name: 'Ezri', desc: 'AI & Careers', href: 'https://www.ezri-africa.com' },
  { name: 'AIIM Hub', desc: 'Innovation', href: 'https://an-nitaimpactinnovationhub.com' },
]

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen theme-bg">
      <Navigation />

      {/* Hero — compact, focused */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 md:px-8 py-24 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-[0.04]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 20%, rgba(0, 194, 138, 0.08), transparent 55%)' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border border-[var(--color-accent)]/20 bg-[var(--color-surface-card)]/50"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-[9px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">About</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[var(--color-text-primary)]"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Africa's unified digital ecosystem.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            Annita builds integrated technology infrastructure for Africa — connecting e-commerce, fintech, AI, digital health, and custom solutions into one ecosystem.
          </motion.p>
        </div>
      </section>

      {/* Stats — clean horizontal bar */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div {...fadeIn} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px rounded-xl overflow-hidden border border-[var(--color-border-card)]/40">
          {stats.map((stat, i) => (
            <div key={i} className="p-5 bg-[var(--color-surface-card)]/30 text-center">
              <div className="text-xl md:text-2xl font-bold gradient-text" style={{ fontFamily: 'var(--font-syne)' }}>{stat.value}</div>
              <div className="text-[10px] font-mono text-[var(--color-text-tertiary)] mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Mission / Vision — one compact section */}
      <section className="py-20 md:py-28 px-4 md:px-8 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div {...fadeIn} className="p-6 md:p-8 rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <Target className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-mono tracking-widest text-[var(--color-text-muted)] uppercase">Mission</span>
            </div>
            <p className="text-sm md:text-base leading-relaxed text-[var(--color-text-secondary)]">
              Democratize access to digital infrastructure across Africa — giving MSMEs, governments, and partners affordable, scalable, integrated technology.
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }} className="p-6 md:p-8 rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <Eye className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-mono tracking-widest text-[var(--color-text-muted)] uppercase">Vision</span>
            </div>
            <p className="text-sm md:text-base leading-relaxed text-[var(--color-text-secondary)]">
              Become Africa's leading digital ecosystem — powering a globally competitive digital economy where every business has access to world-class technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story — one short paragraph */}
      <section className="pb-20 md:pb-28 px-4 md:px-8 max-w-3xl mx-auto text-center">
        <motion.div {...fadeIn}>
          <p className="text-[10px] font-mono tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">Our Story</p>
          <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
            Founded in Liberia, Annita was built to solve a clear gap: African MSMEs lacked integrated, affordable digital infrastructure. We started with that problem and grew into a movement spanning fintech, health, AI, and innovation — serving 3,000+ MSMEs across 100+ countries and earning global recognition.
          </p>
        </motion.div>
      </section>

      {/* Values — compact grid */}
      <section className="py-20 md:py-28 px-4 md:px-8 max-w-[1400px] mx-auto border-t border-[var(--color-border-card)]/40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div {...fadeIn} className="md:col-span-1">
            <p className="text-[10px] font-mono tracking-[0.3em] text-[var(--color-accent)] uppercase mb-2">Values</p>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
              What drives us.
            </h2>
          </motion.div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-4 rounded-xl border border-[var(--color-border-card)]/40 bg-[var(--color-surface-card)]/20 hover:border-[var(--color-accent)]/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2 text-[var(--color-accent)]">
                  {v.icon}
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">{v.title}</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem — clean list */}
      <section className="py-20 md:py-28 px-4 md:px-8 max-w-[1400px] mx-auto border-t border-[var(--color-border-card)]/40">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <motion.div {...fadeIn}>
            <p className="text-[10px] font-mono tracking-[0.3em] text-[var(--color-accent)] uppercase mb-2">Portfolio</p>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
              One ecosystem. Multiple solutions.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ecosystem.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group p-5 rounded-xl border border-[var(--color-border-card)]/40 bg-[var(--color-surface-card)]/20 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'var(--font-syne)' }}>
                  {item.name}
                </h3>
                {item.comingSoon && (
                  <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">SOON</span>
                )}
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)]">{item.desc}</p>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </section>

      {/* CTA — compact */}
      <section className="py-20 md:py-28 px-4 md:px-8 max-w-3xl mx-auto text-center">
        <motion.div {...fadeIn}>
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
            Build the future with us.
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-8">
            Join businesses, governments, and individuals shaping Africa's digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/solutions" className="group px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:brightness-110 button-glow" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-foreground)' }}>
              Build With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="group px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)] transition-all">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <NewsletterSection
          title="Follow Africa's Innovation Story"
          subtitle="Ecosystem milestones and insider updates from Annita."
        />
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-[var(--color-border-card)]" style={{ backgroundColor: 'var(--color-surface-base)' }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none tech-grid" />
        <div className="relative z-10 py-12 px-4 md:px-8 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <NextImage src="/annita-real-logo.png" alt="Annita Logo" width={40} height={40} className="rounded-lg" />
                <div>
                  <div className="font-bold text-[var(--color-text-primary)]">Annita<span className="text-[var(--color-accent)]">.</span></div>
                  <div className="text-[10px] font-mono text-[var(--color-accent)]">SYSTEM: ONLINE</div>
                </div>
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)] mb-4 leading-relaxed">Annita is Africa's first all-in-one digital ecosystem, integrating e-commerce, fintech, AI, communication, marketing, logistics, and more.</p>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" /> Ecosystem</div>
              <div className="space-y-2">
                <Link href="/ecosystem" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Annita Ecosystem</Link>
                <a href="https://www.an-nitapay.com" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">AnnitaPay</a>
                <a href="https://www.an-nita-pulse.org" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Annita Pulse</a>
                <a href="https://www.ezri-africa.com" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Ezri</a>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" /> Company</div>
              <div className="space-y-2">
                <Link href="/about" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">About Us</Link>
                <Link href="/solutions" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Custom Solutions</Link>
                <Link href="/careers" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Careers</Link>
                <Link href="/partnerships" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Partnerships</Link>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" /> Legal</div>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Terms & Conditions</Link>
                <Link href="/cookies" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Cookie Policy</Link>
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
