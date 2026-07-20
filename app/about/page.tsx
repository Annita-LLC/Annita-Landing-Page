'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Target, Eye, Heart, Shield, Globe, Users, Zap, Cpu, Rocket, Award, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'
import Navigation from '@/components/navigation'
import NewsletterSection from '@/components/newsletter-section'

const milestones = [
  {
    year: '2023',
    title: 'The Genesis',
    description: 'Annita LLC is founded in Liberia with a vision to build Africa\'s first all-in-one digital ecosystem — born from the observation that MSMEs lacked access to integrated, affordable digital infrastructure.',
    status: 'ORIGIN_POINT',
  },
  {
    year: '2024',
    title: 'Ecosystem Expansion',
    description: 'Rapid portfolio growth with the launch of AnnitaPay (fintech), Annita Pulse (digital health), Ezri (AI & careers), and the Annita Impact-Innovation Hub. 3,000+ MSMEs onboarded.',
    status: 'SCALE_PHASE',
  },
  {
    year: '2025',
    title: 'Global Recognition',
    description: 'Onboarded onto MANSA, Afreximbank\'s due diligence repository. Ranked Top 55/200 globally. Represented Liberia at IATF 2025. Multiple international awards secured.',
    status: 'VERIFIED_GLOBAL',
  },
  {
    year: '2026',
    title: 'Continental Impact',
    description: 'Expanding across 100+ countries with a diversified ecosystem spanning marketplace infrastructure, fintech, digital health, AI, and custom technology solutions.',
    status: 'EXPANSION_ACTIVE',
  },
]

const values = [
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Mission-Driven',
    description: 'Every decision we make is guided by our commitment to transforming Africa through technology.',
    tag: 'CORE_01',
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'People-First',
    description: 'We believe in empowering people and communities through accessible digital solutions.',
    tag: 'CORE_02',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Trust & Integrity',
    description: 'Building lasting relationships through transparency, honesty, and ethical business practices.',
    tag: 'CORE_03',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Global Impact',
    description: 'Thinking globally while acting locally to create meaningful change across Africa.',
    tag: 'CORE_04',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Collaboration',
    description: 'Success is achieved together. We partner with governments, MSMEs, and communities.',
    tag: 'CORE_05',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Innovation',
    description: 'Constantly pushing boundaries to deliver cutting-edge solutions for real-world challenges.',
    tag: 'CORE_06',
  },
]

const stats = [
  { value: '3,000+', label: 'Verified MSMEs', sub: 'ACTIVE_NODES' },
  { value: 'Top 55', label: 'Global Ranking / 200', sub: 'RANKED_GLB' },
  { value: '6', label: 'Portfolio Companies', sub: 'PORTFOLIO' },
  { value: '100+', label: 'Countries Reached', sub: 'REACH_GLB' },
  { value: '$12.5K+', label: 'Grants Raised', sub: 'FUND_SECURE' },
  { value: '12+', label: 'Recognitions & Awards', sub: 'CERTIFIED' },
]

const ecosystemCompanies = [
  {
    name: 'Annita LLC',
    description: 'Commerce & Payment Ecosystem',
    logo: '/annita-real-logo.png',
    href: '/ecosystem',
    badge: 'FLAGSHIP',
  },
  {
    name: 'AnnitaPay',
    description: 'Fintech Solutions',
    logo: '/AnnitaPay-Logo.jpg',
    href: 'https://www.an-nitapay.com',
    badge: 'COMING SOON',
  },
  {
    name: 'Annita Pulse',
    description: 'Digital Health',
    logo: '/Annita-Pulse-Logo.png',
    href: 'https://www.an-nita-pulse.org',
    badge: 'LIVE',
  },
  {
    name: 'Ezri',
    description: 'AI & Careers',
    logo: '/Ezri-Logo.jpg',
    href: 'https://www.ezri-africa.com',
    badge: 'LIVE',
  },
  {
    name: 'AIIM Hub',
    description: 'Innovation & Community',
    logo: '/AIIM-Logo.png',
    href: 'https://an-nitaimpactinnovationhub.com',
    badge: 'LIVE',
  },
]

const recognitions = [
  { title: 'MANSA Onboarding', org: 'Afreximbank', desc: 'Officially onboarded onto Africa\'s premier due diligence repository' },
  { title: 'Top 55 / 200 Global Ranking', org: 'International Recognition', desc: 'Ranked among the world\'s most impactful emerging tech companies' },
  { title: 'IATF 2025 Representative', org: 'Liberia', desc: 'Representing Liberia at the Intra-African Trade Fair' },
  { title: 'Orange Social Venture Prize', org: 'Orange Group', desc: 'Awarded for social innovation and entrepreneurial impact' },
  { title: 'Moonshot Award', org: 'Moonshot Platform', desc: 'Recognized for breakthrough innovation in technology' },
  { title: 'African Women Mother Award', org: 'African Union', desc: 'Honored for empowering women in business and technology' },
]

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroProgress, [0, 1], [0, -100])
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0])

  return (
    <div className="min-h-screen theme-bg">
      <Navigation />

      {/* ═══════════════════════════════════════════════════
          HERO — Full-screen, bold, minimal
          Inspired by Vercel/Linear: oversized type, dark bg
          ═══════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center px-4 md:px-8 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 tech-grid opacity-[0.06]" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(0, 194, 138, 0.12), transparent 60%)',
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(180deg, transparent 0%, transparent 60%, var(--color-surface-base) 100%)',
        }} />

        {/* Corner brackets */}
        <span className="absolute top-24 left-6 md:left-12 w-8 h-8 border-t-2 border-l-2 border-[var(--color-accent)]/20" />
        <span className="absolute top-24 right-6 md:right-12 w-8 h-8 border-t-2 border-r-2 border-[var(--color-accent)]/20" />
        <span className="absolute bottom-24 left-6 md:left-12 w-8 h-8 border-b-2 border-l-2 border-[var(--color-accent)]/20" />
        <span className="absolute bottom-24 right-6 md:right-12 w-8 h-8 border-b-2 border-r-2 border-[var(--color-accent)]/20" />

        {/* Telemetry */}
        <div className="hidden lg:block absolute bottom-8 left-12 font-mono text-[9px] text-[var(--color-text-muted)]/40 space-y-1 select-none pointer-events-none">
          <div>[MANIFEST: ABOUT_PAGE v2.0]</div>
          <div>STATUS: OPERATIONAL // LOC: LIBERIA</div>
        </div>
        <div className="hidden lg:block absolute bottom-8 right-12 font-mono text-[9px] text-[var(--color-text-muted)]/40 space-y-1 text-right select-none pointer-events-none">
          <div>ECOSYSTEM: 6_COMPANIES</div>
          <div>REACH: 100+_COUNTRIES</div>
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-10 border border-[var(--color-accent)]/20 bg-[var(--color-surface-card)]/40 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--color-text-tertiary)] uppercase">
              About <span className="text-[var(--color-accent)] font-bold">Annita LLC</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}
          >
            <span className="text-[var(--color-text-primary)]">Building Africa's</span>
            <br />
            <span className="gradient-text">digital infrastructure.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-[var(--color-text-secondary)] font-normal"
          >
            We are a diversified technology ecosystem integrating e-commerce, fintech, AI, digital health, and custom solutions — engineered for Africa, built to world standard.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[9px] font-mono tracking-[0.3em] text-[var(--color-text-muted)] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-accent)] to-transparent"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INTRO — Clean, editorial, generous whitespace
          ═══════════════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[10px] font-mono tracking-[0.3em] text-[var(--color-accent)] uppercase mb-8">
            // WHO WE ARE
          </p>
          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.25] mb-10 text-[var(--color-text-primary)]"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Founded in Liberia with a conviction that Africa deserves
            <span className="text-[var(--color-accent)]"> world-class technology</span> — not watered-down imports, but infrastructure built for the continent's unique challenges and boundless opportunities.
          </h2>
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-[var(--color-text-secondary)]">
            <p>
              Annita LLC emerged from a simple yet powerful observation: while the world was rapidly digitizing, Africa's MSMEs and communities lacked access to integrated, affordable digital infrastructure. We set out to change that — not by importing solutions designed elsewhere, but by building technology specifically for Africa.
            </p>
            <p>
              Technology that works offline as seamlessly as it does online. Technology that respects local contexts while enabling global connectivity. Technology that doesn't just serve markets — it creates them.
            </p>
            <p>
              Today, Annita is a diversified ecosystem spanning marketplace infrastructure, fintech, digital health, AI, and custom technology solutions. We've grown from a vision into a movement — empowering thousands of MSMEs, creating jobs, and positioning Liberia as a hub for African innovation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TIMELINE — Scroll-driven milestone journey
          ═══════════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 px-4 md:px-8 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-[10px] font-mono tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">
            // OUR JOURNEY
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
            From vision to movement.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--color-accent)]/40 via-[var(--color-accent)]/20 to-transparent md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-surface-base)] md:-translate-x-1/2 mt-2 z-10" />

              {/* Spacer for desktop */}
              <div className="hidden md:block flex-1" />

              {/* Content */}
              <div className="flex-1 pl-12 md:pl-0 md:px-12">
                <div className="inline-block">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[9px] font-mono text-[var(--color-text-muted)] tracking-widest">{milestone.status}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                  </div>
                  <div className="text-4xl md:text-5xl font-extrabold text-[var(--color-accent)] mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
                    {milestone.year}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
                    {milestone.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed max-w-md">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MISSION & VISION — Side-by-side, modern cards
          ═══════════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-[10px] font-mono tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">
            // WHAT DRIVES US
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
            Mission & Vision
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative rounded-3xl p-10 md:p-14 border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/30 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-[var(--color-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-accent)]/10 transition-colors duration-500" />
            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--color-accent)]/40" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[var(--color-accent)]/40" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20">
                  <Target className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[var(--color-text-muted)] uppercase">MISSION</span>
              </div>
              <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-text-primary)] font-medium" style={{ fontFamily: 'var(--font-syne)' }}>
                To democratize access to digital infrastructure across Africa by providing MSMEs, governments, and strategic partners with affordable, scalable, and integrated technology solutions that drive economic growth and social impact.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative rounded-3xl p-10 md:p-14 border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/30 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-[var(--color-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-accent)]/10 transition-colors duration-500" />
            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--color-accent)]/40" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[var(--color-accent)]/40" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20">
                  <Eye className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[var(--color-text-muted)] uppercase">VISION</span>
              </div>
              <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-text-primary)] font-medium" style={{ fontFamily: 'var(--font-syne)' }}>
                To become Africa's leading digital ecosystem, powering the continent's transformation into a globally competitive digital economy where every business and individual has access to world-class technology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STATS — Large numbers, minimal design
          ═══════════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[10px] font-mono tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">
            // BY THE NUMBERS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
            Impact at scale.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[var(--color-border-card)]/30 rounded-2xl overflow-hidden border border-[var(--color-border-card)]/30">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative p-6 md:p-8 bg-[var(--color-surface-base)] group hover:bg-[var(--color-surface-card)]/40 transition-colors duration-300"
            >
              <div className="flex items-center justify-between text-[8px] font-mono text-[var(--color-text-muted)] mb-4">
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] animate-pulse" />
                  {stat.sub}
                </span>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold gradient-text mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                {stat.value}
              </div>
              <p className="text-xs md:text-sm text-[var(--color-text-tertiary)] leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          VALUES — Clean grid with hover interactions
          ═══════════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[10px] font-mono tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">
            // CORE PRINCIPLES
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
            What drives us forward.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative p-8 md:p-10 rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/20 hover:bg-[var(--color-surface-card)]/50 hover:border-[var(--color-accent)]/30 transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-accent)]/10 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-all duration-300">
                    {value.icon}
                  </div>
                  <span className="text-[9px] font-mono text-[var(--color-text-muted)] tracking-widest">{value.tag}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ECOSYSTEM — Portfolio companies showcase
          ═══════════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[10px] font-mono tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">
            // PORTFOLIO
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
            One ecosystem. Infinite possibilities.
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl">
            A diversified portfolio of companies working together as a connected system — each addressing a critical need in Africa's digital economy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {ecosystemCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={company.href}
                target={company.href.startsWith('http') ? '_blank' : undefined}
                rel={company.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block relative p-8 rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/20 hover:bg-[var(--color-surface-card)]/50 hover:border-[var(--color-accent)]/30 transition-all duration-500 group overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-accent)]/10 transition-colors duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <NextImage
                      src={company.logo}
                      alt={company.name}
                      width={48}
                      height={48}
                      className="rounded-xl object-contain"
                    />
                    <span className={`px-2.5 py-1 text-[9px] font-mono font-bold rounded-md border ${
                      company.badge === 'FLAGSHIP'
                        ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent)] border-[var(--color-accent)]/20'
                        : company.badge === 'LIVE'
                        ? 'bg-green-500/10 text-green-400 border-green-500/20'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                    }`}>
                      {company.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'var(--font-syne)' }}>
                    {company.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-tertiary)]">{company.description}</p>
                  <div className="mt-6 flex items-center gap-1 text-xs text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Custom Solutions card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/solutions"
              className="block relative p-8 rounded-2xl border border-dashed border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)]/20 hover:bg-[var(--color-accent-soft)]/40 transition-all duration-500 group h-full"
            >
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20 mb-4">
                  <Cpu className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                  Custom Solutions
                </h3>
                <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
                  Tailored technology services for enterprises
                </p>
                <div className="flex items-center gap-1 text-xs text-[var(--color-accent)]">
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          RECOGNITION — Awards & achievements
          ═══════════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[10px] font-mono tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">
            // RECOGNITION
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
            Verified. Awarded. Trusted.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {recognitions.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-xl border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/20 hover:bg-[var(--color-surface-card)]/40 hover:border-[var(--color-accent)]/20 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20 flex-shrink-0">
                <Award className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-base font-bold text-[var(--color-text-primary)] truncate">{rec.title}</h3>
                <p className="text-xs md:text-sm text-[var(--color-text-tertiary)]">{rec.desc}</p>
              </div>
              <div className="hidden md:block text-right flex-shrink-0">
                <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">{rec.org}</span>
              </div>
              <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]/40 group-hover:text-[var(--color-accent)] transition-colors flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MANSA — Special highlight section
          ═══════════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-3xl p-10 md:p-16 lg:p-20 border border-[var(--color-accent)]/20 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, var(--color-surface-card) 0%, var(--color-surface-raised) 100%)' }}
        >
          <div className="absolute inset-0 tech-grid opacity-[0.04]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/8 rounded-full blur-3xl" />

          <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)]/40" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)]/40" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <NextImage src="/mansa-logo.png" alt="MANSA" width={40} height={40} className="object-contain" />
                <span className="text-[10px] font-mono tracking-widest text-[var(--color-accent)] uppercase">AFREXIMBANK // MANSA</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight" style={{ fontFamily: 'var(--font-syne)' }}>
                A beacon of trust across Africa.
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-secondary)]">
                Annita was officially onboarded onto MANSA, Africa's premier due diligence repository initiated by Afreximbank. By meeting MANSA's rigorous due diligence standards, we stand as a verified, trusted partner — empowering MSMEs, investors, and businesses across Africa. As the continent moves toward the AfCFTA era, this recognition positions us to unlock new trade and investment opportunities, ensuring seamless collaborations across borders.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 lg:border-l lg:border-[var(--color-border-card)] lg:pl-12">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-extrabold gradient-text mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                  ✓
                </div>
                <p className="text-[10px] font-mono tracking-widest text-[var(--color-text-muted)] uppercase">VERIFIED</p>
                <p className="text-[10px] font-mono tracking-widest text-[var(--color-text-muted)] uppercase">DUE_DILIGENCE</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA — Strong closing
          ═══════════════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-[var(--color-accent)]/20 bg-[var(--color-surface-card)]/40 backdrop-blur-md">
            <Rocket className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span className="text-[10px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">JOIN THE MOVEMENT</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
            Be part of Africa's<br />
            <span className="gradient-text">digital transformation.</span>
          </h2>

          <p className="text-base md:text-xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're a business, government, or individual — there's a place for you in our ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solutions"
              className="group px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 hover:brightness-110 button-glow"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-foreground)' }}
            >
              Build With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)]"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <NewsletterSection
          title="Follow Africa's Innovation Story"
          subtitle="Ecosystem milestones, award announcements, and insider updates from Annita — delivered directly to your inbox."
        />
      </section>

      {/* Techy Footer */}
      <footer className="relative overflow-hidden border-t border-[var(--color-border-card)]" style={{ backgroundColor: 'var(--color-surface-base)' }}>
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
