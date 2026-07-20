'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import {
  Handshake, Globe, Building2, Cpu, Users, Heart, ArrowRight,
  ChevronRight, Sparkles, Shield, Zap, TrendingUp, Award,
  Mail, CheckCircle2, ExternalLink, type LucideIcon
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'

function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2000 }: { value: number; suffix?: string; prefix?: string; duration?: number }) {
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
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

interface Partner {
  name: string
  category: string
  description: string
  icon: LucideIcon
  tier: 'institutional' | 'technology' | 'community' | 'supporter'
  location?: string
  tags: string[]
  metric?: string
  metricLabel?: string
  logo?: string
  logoType?: 'local' | 'remote'
  website?: string
}

const partners: Partner[] = [
  { name: 'African Union', category: 'EAN Fellowship Programme', description: 'Selected from over 1,500 applications across 44 AU Member States as one of 50 innovative African small businesses for the inaugural Enterprise African Network (EAN) Fellowship — a 12-month programme providing mentorship, training, and access to funding to enhance export readiness for AfCFTA markets.', icon: Building2, tier: 'institutional', location: 'Addis Ababa, Ethiopia', tags: ['EAN Fellowship', 'AfCFTA', 'Export Readiness', 'Inaugural Cohort'], metric: 'Top 50', metricLabel: 'of 1,500+ applicants', logo: '/African Union Top 50 Business EAN FEllowship.jpg', logoType: 'local', website: 'https://au.int/en/pressreleases/20240826/auc-unveils-50-small-businesses-inaugural-ean-fellowship' },
  { name: 'Afreximbank / MANSA', category: 'Due Diligence Repository', description: 'Verified on MANSA by Afreximbank — Africa\'s pan-African due diligence repository for cross-border trade readiness.', icon: Shield, tier: 'institutional', location: 'Cairo, Egypt', tags: ['KYC/CDD Compliance', 'Cross-Border Trade', 'AfCFTA', 'Institutional Trust'], metric: 'Verified', metricLabel: 'Due Diligence', logo: '/mansa-logo.png', logoType: 'local', website: 'https://www.mansaafrica.com/' },
  { name: 'United Nations', category: 'STI Forum 2026 — SDG Solutions Book', description: 'Featured as Innovation #05 in the 2026 STI Solutions Book by the UN Department of Economic and Social Affairs (UN DESA). Selected from over 900 global submissions for the 11th Multi-stakeholder Forum on Science, Technology and Innovation for the SDGs, recognized for contributing to sustainable development goals through technology innovation.', icon: Globe, tier: 'institutional', location: 'New York, USA', tags: ['SDG Solutions', 'STI Forum 2026', 'UN DESA', 'Global Innovation'], metric: '#05', metricLabel: 'SDG Innovation', logo: 'https://www.un.org/sites/un2.un.org/files/field/image/app-logo-1024x1024.png', logoType: 'remote', website: 'https://sdgs.un.org/tfm/STIForum2026/Solutionsbook' },
  { name: 'Orange Liberia', category: 'Social Venture Prize — POESAM', description: '1st Place Winner of the Orange Social Venture Prize (OSVP/POESAM) in Liberia — awarded for outstanding tech-driven social innovation and entrepreneurship addressing key local challenges. The prize recognizes startups leveraging technology for positive social impact across Orange\'s 17 markets in Africa and the Middle East.', icon: Cpu, tier: 'technology', location: 'Monrovia, Liberia', tags: ['Social Venture', 'POESAM', 'Tech for Impact', '1st Place'], metric: '1st', metricLabel: 'Place Winner', logo: '/Orange Social Venture Prize award.jpg', logoType: 'local', website: 'https://engageforchange.orange.com/en/country/lr/programs/85c4646b-f56b-41ea-800e-dffebb1de68f' },
  { name: 'Moonshot Platform', category: 'Borderless Award', description: 'Shortlisted for the Moonshot Borderless Award — recognized from over 1,500 applicants for solutions addressing the needs of refugees, displaced peoples, indigenous peoples, and marginalized communities across borders. The award supports initiatives applying a "by or with the people, for the people" principle.', icon: Users, tier: 'community', tags: ['Borderless Award', 'Marginalized Communities', 'Social Impact', 'Global Community'], metric: 'Top 15', metricLabel: 'of 1,500+', logo: '/moonshot logo platform.svg', logoType: 'local', website: 'https://www.moonshotplatform.org/' },
  { name: 'African Startup Conference', category: 'Grant Recipient — Algiers', description: 'Received a $7,000 grant at the 4th African Startup Conference in Algiers, Algeria — a continental platform bringing together 25,000+ participants, 35+ ministerial delegations, and 150+ investors. Recognized for building scalable digital infrastructure for Africa\'s digital transformation agenda.', icon: Award, tier: 'institutional', location: 'Algiers, Algeria', tags: ['Startup Excellence', 'Grant Recipient', 'Digital Infrastructure', 'Algiers Declaration'], metric: '$7K', metricLabel: 'Grant Awarded', logo: '/slide-award-asc.jpg', logoType: 'local', website: 'https://africanstartupconference.org/' },
  { name: 'APGYD — World Youth Development Forum', category: 'Action Plan for Global Youth Development', description: 'Selected as an Excellence Program by the Action Plan for Global Youth Development (APGYD) — jointly initiated by the All-China Youth Federation and UN agencies including ILO, FAO, UNESCO, UNICEF, UNDP, and UNFPA. Recognized from 200 programs across 63 countries for contributing to the UN 2030 Agenda for Sustainable Development.', icon: Sparkles, tier: 'institutional', location: 'Beijing, China', tags: ['Youth Development', 'UN 2030 Agenda', 'Excellence Program', 'SDG Action'], metric: '200', metricLabel: 'Excellence Programs', logo: '/World Youth Development Forum China.jpg', logoType: 'local', website: 'https://www.wydf.org.cn/en/About_Us/action_plan/' },
  { name: 'Global Programs Shanghai & Wuhan', category: '2026 Acceleration Week', description: 'Selected among 200 youth development programs from 79 countries for the 2026 Acceleration Week in Shanghai and Wuhan, co-hosted by the All-China Youth Federation, UNICEF, and China Youth Daily. Representing Africa across 8 Program Clusters including Technological Innovation, Green Development, and AI+.', icon: TrendingUp, tier: 'community', location: 'Shanghai & Wuhan, China', tags: ['Acceleration Week', 'Global Programs', 'Tech Innovation', 'Youth Leadership'], metric: '55/200', metricLabel: 'Global Ranking', website: 'https://www.wydf.org.cn/en/Forum/2026Forum/' },
  { name: 'Smart Liberia', category: 'Community Advocate', description: 'A Liberian nonprofit social venture founded in 2011 that connects young Liberians with skills, resources, and information to drive social change. SMART Liberia focuses on education, entrepreneurship, and technology empowerment — aligning with Annita\'s mission to build local capacity and create opportunities for youth and MSMEs.', icon: Heart, tier: 'supporter', location: 'Monrovia, Liberia', tags: ['Nonprofit', 'Youth Empowerment', 'Education', 'Technology Access'], logo: '/Smart Liberia.jpg', logoType: 'local', website: 'https://smartliberia.org/' },
  { name: 'Spark Solutions Inc.', category: 'Technology Partner — Recent', description: 'A Liberia-based software development company providing IT consulting, data analysis, mobile app development, and web development services. Spark Solutions partners with Annita to deliver effective technology solutions that help businesses, organizations, and individuals improve performance and win new customers.', icon: Cpu, tier: 'technology', location: 'Monrovia, Liberia', tags: ['Software Development', 'IT Consulting', 'Data Analysis', 'Web & Mobile'], metric: 'New', metricLabel: 'Recent Partner', logo: '/spark solutions -logo.jpg', logoType: 'local', website: 'https://www.sparks.com.lr/' },
]

const partnerStats = [
  { value: 10, suffix: '+', prefix: '', label: 'Partner Organizations', icon: Handshake, status: 'ACTIVE_PARTNERS' },
  { value: 4, suffix: '', prefix: '', label: 'Institutional Backers', icon: Building2, status: 'INSTITUTIONAL' },
  { value: 5, suffix: '', prefix: '', label: 'Countries Reached', icon: Globe, status: 'GLOBAL_REACH' },
  { value: 3000, suffix: '+', prefix: '', label: 'MSMEs Supported Together', icon: Users, status: 'COMMUNITY_IMPACT' },
]

const partnerCategories = [
  { icon: Building2, title: 'Institutional Partners', description: 'Governments, multilateral organizations, and international bodies that validate and support our mission.', count: 4, accent: '#00C28A' },
  { icon: Cpu, title: 'Technology Partners', description: 'Technology companies and telecom operators powering our infrastructure and innovation.', count: 2, accent: '#F59E0B' },
  { icon: Users, title: 'Community Partners', description: 'Fellowships, programs, and communities that champion our vision for African innovation.', count: 2, accent: '#3B82F6' },
  { icon: Heart, title: 'Supporters & Advocates', description: 'Mentors, advisors, and advocates who believe in our journey and amplify our impact.', count: 1, accent: '#EC4899' },
]

const partnerQuotes = [
  { quote: 'Selected from over 1,500 applications across 44 AU Member States — Annita represents Africa\'s next wave of entrepreneurs ready to take on the world market.', author: 'African Union EAN Fellowship', role: 'Inaugural Cohort — Top 50 of 1,500+', icon: Building2 },
  { quote: 'Tech-driven social innovation addressing real local challenges with the potential for continental scale across Orange\'s 17 markets in Africa and the Middle East.', author: 'Orange Social Venture Prize', role: 'POESAM Liberia — 1st Place', icon: Award },
  { quote: 'MANSA-verified for cross-border due diligence and trade readiness.', author: 'Afreximbank / MANSA', role: 'Pan-African Due Diligence Repository', icon: Shield },
]

const becomePartnerSteps = [
  { step: '01', title: 'Reach Out', description: "Tell us about your organization and how you'd like to collaborate — technology, community, or institutional.", icon: Mail },
  { step: '02', title: 'Align', description: 'Our team reviews your proposal and identifies the best partnership model for mutual impact.', icon: Handshake },
  { step: '03', title: 'Onboard', description: 'Once accepted, we kick off the partnership with onboarding, goal-setting, and a shared roadmap.', icon: CheckCircle2 },
]

const partnerBenefits = [
  { icon: Globe, title: 'Continental Reach', description: 'Tap into our network across 100+ countries and 3,000+ verified MSMEs on the continent.' },
  { icon: Zap, title: 'Co-Innovation', description: 'Build together — integrate APIs, co-develop solutions, and launch joint products.' },
  { icon: TrendingUp, title: 'Growth & Visibility', description: 'Co-marketing opportunities, featured listings, and exposure to our global audience.' },
  { icon: Shield, title: 'Trusted Infrastructure', description: 'Bank-grade security, offline-first architecture, and compliance with African trade standards.' },
]

const tierColors: Record<string, string> = { institutional: '#00C28A', technology: '#F59E0B', community: '#3B82F6', supporter: '#EC4899' }
const tierLabels: Record<string, string> = { institutional: 'Institutional', technology: 'Technology', community: 'Community', supporter: 'Supporter' }

export default function PartnersPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'institutional' | 'technology' | 'community' | 'supporter'>('all')

  const filteredPartners = activeFilter === 'all' ? partners : partners.filter(p => p.tier === activeFilter)
  const filters = [
    { key: 'all' as const, label: 'All Partners', count: partners.length },
    { key: 'institutional' as const, label: 'Institutional', count: partners.filter(p => p.tier === 'institutional').length },
    { key: 'technology' as const, label: 'Technology', count: partners.filter(p => p.tier === 'technology').length },
    { key: 'community' as const, label: 'Community', count: partners.filter(p => p.tier === 'community').length },
    { key: 'supporter' as const, label: 'Supporters', count: partners.filter(p => p.tier === 'supporter').length },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground mesh-gradient tech-grid">
      <Navigation />
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4 md:px-8 py-20 md:py-28 overflow-hidden tech-scanline">
        <div className="absolute inset-0 tech-grid opacity-[0.08]" />
        <div className="absolute inset-0 bg-[var(--hero-glow)]" />
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)]/8 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/15 to-transparent" />
          <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/10 to-transparent" />
        </div>
        <span className="absolute top-8 left-8 w-6 h-6 border-t border-l border-[var(--color-accent)]/30" />
        <span className="absolute top-8 right-8 w-6 h-6 border-t border-r border-[var(--color-accent)]/30" />
        <span className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-[var(--color-accent)]/30" />
        <span className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-[var(--color-accent)]/30" />
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="hidden md:block absolute top-[20%] left-[12%] opacity-20"><Handshake className="w-10 h-10 text-[var(--color-accent)]" /></motion.div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="hidden md:block absolute top-[25%] right-[15%] opacity-20"><Globe className="w-12 h-12 text-[var(--color-accent)]" /></motion.div>
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="hidden md:block absolute bottom-[25%] left-[18%] opacity-15"><Building2 className="w-10 h-10 text-[var(--color-accent)]" /></motion.div>
        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }} className="hidden md:block absolute bottom-[30%] right-[12%] opacity-20"><Heart className="w-11 h-11 text-[var(--color-accent)]" /></motion.div>
        <div className="hidden lg:block absolute bottom-6 left-8 font-mono text-[9px] text-[var(--color-text-tertiary)]/30 space-y-1 select-none pointer-events-none">
          <div>[INDEX: PARTNERS_LEDGER.log]</div><div>TELEMETRY: BROADCAST // SECURE: TRUE</div><div>ENTRIES: {partners.length} // STATUS: VERIFIED</div>
        </div>
        <div className="hidden lg:block absolute bottom-6 right-8 font-mono text-[9px] text-[var(--color-text-tertiary)]/30 space-y-1 text-right select-none pointer-events-none">
          <div>PARTNERS_VERIFIED: ACTIVE</div><div>COLLAB_STATUS: OPEN</div><div>NODE: GLOBAL_PARTNERSHIP</div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'var(--color-accent-soft)', border: '1px solid var(--color-border-accent)' }}>
            <Handshake className="w-4 h-4 text-[var(--color-accent)]" /><span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)] font-mono">PARTNERS &amp; SUPPORTERS</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-4xl md:text-6xl font-bold mb-6 font-syne text-[var(--color-text-primary)] leading-tight">
            Building Africa&apos;s Future,<br /><span className="gradient-text">Together</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed mb-8">
            We are proud to be recognized and supported by world-class institutions, technology leaders, and communities who share our vision of a digitally connected, economically empowered Africa.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-row items-center justify-center gap-4">
            <Link href="/partnerships" className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-semibold text-sm md:text-base transition-all button-glow" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-foreground)' }}>
              Become a Partner <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-semibold text-sm md:text-base border transition-all hover:border-[var(--color-accent)]/50" style={{ borderColor: 'var(--color-border-default)', color: 'var(--color-text-primary)' }}>
              Our Story <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partnerStats.map((stat, index) => { const Icon = stat.icon; return (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative p-6 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/40 hover:bg-[var(--color-surface-raised)]/80 transition-all duration-300 group overflow-hidden tech-glow-card">
              <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center justify-between text-[8px] font-mono text-[var(--color-text-tertiary)] mb-2 select-none">
                  <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-[var(--color-accent)] animate-pulse" />{stat.status}</span><span>NODE_LBR</span>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] flex items-center justify-center"><Icon className="w-5 h-5 text-[var(--color-accent)]" /></div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold gradient-text font-syne"><AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} /></div>
                    <p className="text-xs uppercase tracking-wider font-mono text-[var(--color-text-secondary)] mt-1">{stat.label}</p>
                  </div>
                </div>
                <div className="w-full h-[2px] bg-[var(--color-border-default)] mt-4 rounded-full overflow-hidden relative">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1.5, delay: index * 0.1 }} className="h-full bg-gradient-to-r from-[var(--color-accent)]/30 to-[var(--color-accent)]" />
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">Our Ecosystem</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-syne text-[var(--color-text-primary)]">Types of Partnerships</h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-sm">From continental institutions to grassroots communities — every partnership drives our mission forward.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerCategories.map((cat, index) => { const Icon = cat.icon; return (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="glass rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group tech-glow-card theme-card">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: `${cat.accent}15`, color: cat.accent }}><Icon className="w-6 h-6" /></div>
              <h3 className="text-lg font-bold mb-2 text-[var(--color-text-primary)]">{cat.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">{cat.description}</p>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-1 rounded-full" style={{ backgroundColor: `${cat.accent}15`, color: cat.accent }}>{cat.count} {cat.count === 1 ? 'Partner' : 'Partners'}</span>
            </motion.div>
          )})}
        </div>
      </section>

      {/* Partners Grid with Filters */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">Verified Network</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-syne text-[var(--color-text-primary)]">Our Partners &amp; Supporters</h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-sm">Organizations and communities who stand with us in building Africa&apos;s digital future.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button key={filter.key} onClick={() => setActiveFilter(filter.key)} className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-mono uppercase tracking-wider transition-all ${activeFilter === filter.key ? 'bg-[var(--color-accent)] text-[var(--color-accent-foreground)]' : 'border border-[var(--color-border-default)] text-[var(--color-text-tertiary)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text-primary)]'}`}>
              {filter.label}<span className={`text-[9px] px-1.5 py-0.5 rounded-full ${activeFilter === filter.key ? 'bg-[var(--color-accent-foreground)]/20' : 'bg-[var(--color-surface-elevated-2)]'}`}>{filter.count}</span>
            </button>
          ))}
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((partner, index) => { const Icon = partner.icon; const tierColor = tierColors[partner.tier]; return (
              <motion.div key={partner.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.08 }} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="relative glass rounded-2xl p-6 hover:shadow-xl transition-all group tech-glow-card theme-card overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to right, ${tierColor}, transparent)` }} />
                <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden" style={{ backgroundColor: `${tierColor}15`, color: tierColor }}>
                      {partner.logo ? (
                        <Image src={partner.logo} alt={`${partner.name} logo`} width={56} height={56} className="w-full h-full object-cover" unoptimized={partner.logoType === 'remote'} />
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-1 rounded-full" style={{ backgroundColor: `${tierColor}15`, color: tierColor }}>{tierLabels[partner.tier]}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-[var(--color-text-primary)]">
                    {partner.website ? (
                      <a href={partner.website} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1.5">
                        {partner.name}
                        <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      partner.name
                    )}
                  </h3>
                  <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] mb-3 uppercase tracking-wider">{partner.category}</p>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">{partner.description}</p>
                  {partner.location && <p className="text-xs text-[var(--color-text-tertiary)] mb-3 flex items-center gap-1"><Globe className="w-3 h-3" />{partner.location}</p>}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {partner.tags.map(tag => <span key={tag} className="text-[9px] font-mono px-2 py-1 rounded-md bg-[var(--color-surface-elevated-2)] text-[var(--color-text-tertiary)]">{tag}</span>)}
                  </div>
                  {partner.metric && (
                    <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border-default)]/50">
                      <div>
                        <div className="text-xl font-bold font-syne" style={{ color: tierColor }}>{partner.metric}</div>
                        <div className="text-[9px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)]">{partner.metricLabel}</div>
                      </div>
                      <CheckCircle2 className="w-5 h-5" style={{ color: tierColor }} />
                    </div>
                  )}
                </div>
              </motion.div>
            )})}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Quotes */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">Voices of Support</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-syne text-[var(--color-text-primary)]">What Our Partners Say</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnerQuotes.map((q, index) => { const Icon = q.icon; return (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass rounded-2xl p-6 tech-glow-card theme-card relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10"><Icon className="w-16 h-16 text-[var(--color-accent)]" /></div>
              <div className="relative z-10">
                <div className="text-4xl text-[var(--color-accent)]/30 font-serif mb-2">&ldquo;</div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">{q.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border-default)]/50">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] flex items-center justify-center"><Icon className="w-5 h-5 text-[var(--color-accent)]" /></div>
                  <div>
                    <div className="text-sm font-bold text-[var(--color-text-primary)]">{q.author}</div>
                    <div className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider">{q.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">Mutual Value</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-syne text-[var(--color-text-primary)]">Why Partner With Us?</h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-sm">We believe in partnerships where everyone wins. Here&apos;s what we bring to the table.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerBenefits.map((benefit, index) => { const Icon = benefit.icon; return (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="glass rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group tech-glow-card theme-card">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-colors"><Icon className="w-6 h-6" /></div>
              <h3 className="text-lg font-bold mb-2 text-[var(--color-text-primary)]">{benefit.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{benefit.description}</p>
            </motion.div>
          )})}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">Join Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-syne text-[var(--color-text-primary)]">Become a Partner</h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-sm">Ready to build Africa&apos;s digital future with us? Here&apos;s how it works.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {becomePartnerSteps.map((step, index) => { const Icon = step.icon; return (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative glass rounded-2xl p-8 text-center tech-glow-card theme-card overflow-hidden">
              <div className="absolute top-4 right-4 text-5xl font-bold font-syne opacity-5 text-[var(--color-accent)]">{step.step}</div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent-soft)] flex items-center justify-center mx-auto mb-4"><Icon className="w-7 h-7 text-[var(--color-accent)]" /></div>
                <h3 className="text-lg font-bold mb-2 text-[var(--color-text-primary)]">{step.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          )})}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <Link href="/partnerships" className="inline-flex items-center gap-2 px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all button-glow" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-foreground)' }}>
            Start the Conversation <ArrowRight className="w-4 h-4" />
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
                <Image src="/annita-real-logo.png" alt="Annita Logo" width={40} height={40} className="rounded-lg" />
                <div>
                  <div className="font-bold text-[var(--color-text-primary)]">Annita<span className="text-[var(--color-accent)]">.</span></div>
                  <div className="text-[10px] font-mono text-[var(--color-accent)]">SYSTEM: ONLINE</div>
                </div>
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)] mb-4 leading-relaxed">Annita is Africa&apos;s first all-in-one digital ecosystem, integrating e-commerce, fintech, AI, communication, marketing, logistics, and more into a single, connected system.</p>
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
            <p className="text-[10px] font-mono text-[var(--color-text-muted)]">&copy; 2026 Annita LLC. All rights reserved.</p>
            <p className="text-[10px] font-mono text-[var(--color-text-muted)]">Built in Liberia. Built for the World.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
