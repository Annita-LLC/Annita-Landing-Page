'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight, ChevronRight, Monitor, Network, Cloud, Shield,
  Headphones, Code2, Briefcase,
} from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'
import Navigation from '@/components/navigation'
import NewsletterSection from '@/components/newsletter-section'

const pillars = [
  {
    icon: <Monitor className="w-5 h-5" />,
    number: '01',
    title: 'Workplace Technology & End-User Services',
    tag: 'WORKPLACE',
    services: [
      { name: 'New Employee Tech Setup', desc: 'Standardized provisioning of hardware, software, and secure device shipping.' },
      { name: 'Hardware Lifecycle Replacement', desc: 'Proactive upgrade schedule for aging laptops, desktops, and servers.' },
      { name: 'Software License Provisioning', desc: 'On-demand access management for SaaS and enterprise applications.' },
      { name: 'Peripheral & Accessory Fulfillment', desc: 'Micro-procurement of monitors, docks, keyboards, and accessories.' },
      { name: 'Mobile Device Management (MDM)', desc: 'Centralized security and policy enforcement for corporate and BYOD devices.' },
    ],
  },
  {
    icon: <Network className="w-5 h-5" />,
    number: '02',
    title: 'Network & Infrastructure',
    tag: 'NETWORK',
    services: [
      { name: 'Branch Office Network Deployment', desc: 'Architecture and rollout of remote facility connectivity and VPN tunnels.' },
      { name: 'Wi-Fi Site Survey & Optimization', desc: 'RF assessment and wireless engineering to maximize coverage and throughput.' },
      { name: 'SD-WAN Implementation', desc: 'Software-defined traffic routing for uptime and lower telecom costs.' },
      { name: 'On-Premise Server Management', desc: 'Physical server administration, patching, and hardware maintenance.' },
      { name: 'Structured Cabling Systems', desc: 'Physical layer installation of Cat6, fiber, and low-voltage data cabling.' },
    ],
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    number: '03',
    title: 'Cloud & Data Management',
    tag: 'CLOUD',
    services: [
      { name: 'Cloud Migration Services', desc: 'Relocate legacy infrastructure and databases to public, private, or hybrid cloud.' },
      { name: 'Cloud Cost Optimization', desc: 'Financial auditing of cloud consumption to eliminate waste and reduce spend.' },
      { name: 'File Share Setup & Permissions', desc: 'Secure centralized storage with role-based access control (RBAC).' },
      { name: 'Database Administration (DBA)', desc: 'Query optimization, schema management, and engine performance tuning.' },
      { name: 'Data Warehouse Engineering', desc: 'Consolidate data silos into structured repositories for BI and reporting.' },
    ],
  },
  {
    icon: <Shield className="w-5 h-5" />,
    number: '04',
    title: 'Cybersecurity & Compliance',
    tag: 'SECURITY',
    services: [
      { name: 'Security Awareness Training', desc: 'Mandatory cybersecurity courses and simulated phishing tests.' },
      { name: 'Endpoint Detection & Response (EDR)', desc: 'Next-gen malware prevention and zero-day threat detection on endpoints.' },
      { name: 'Vulnerability & Penetration Testing', desc: 'Automated scans and ethical hacking to find and fix weaknesses.' },
      { name: 'Identity & Access Management (IAM)', desc: 'SSO, MFA, and credential vaults to secure user authentication.' },
      { name: 'Compliance Framework Alignment', desc: 'Hardening for HIPAA, GDPR, PCI-DSS, or SOC 2 audit readiness.' },
    ],
  },
  {
    icon: <Headphones className="w-5 h-5" />,
    number: '05',
    title: 'Managed IT & Support Services',
    tag: 'MANAGED',
    services: [
      { name: 'Help Desk L1-L3 Support', desc: 'Tiered troubleshooting from password resets to complex engineering issues.' },
      { name: 'Routine System Patch Management', desc: 'Scheduled updates, security patches, and firmware upgrades across all systems.' },
      { name: 'Backup & Disaster Recovery (BDR)', desc: 'Automated backups and hot-site failovers for operational continuity.' },
      { name: 'Network Operations Center (NOC)', desc: '24/7/365 monitoring of routers, switches, and critical infrastructure.' },
      { name: 'IT Asset Management (ITAM)', desc: 'Lifecycle tracking of procurement, warranties, assignments, and depreciation.' },
    ],
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    number: '06',
    title: 'Software & Digital Solutions',
    tag: 'SOFTWARE',
    services: [
      { name: 'Custom Software Development', desc: 'Tailored application creation for unique business workflow requirements.' },
      { name: 'Web & Mobile App Development', desc: 'Responsive websites and native or cross-platform mobile applications.' },
      { name: 'AI & Robotic Process Automation', desc: 'Digital bots and AI tools to automate repetitive data and analytical tasks.' },
      { name: 'API & Integration Engineering', desc: 'Code bridges to allow disparate systems to share and sync data seamlessly.' },
      { name: 'Quality Assurance (QA) Testing', desc: 'Manual and automated testing to find bugs before code goes live.' },
    ],
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    number: '07',
    title: 'Professional & Consulting Services',
    tag: 'CONSULTING',
    services: [
      { name: 'Virtual CIO (vCIO)', desc: 'Executive-level IT guidance, roadmap design, and budgeting without a full-time hire.' },
      { name: 'Digital Transformation Audit', desc: 'Assess operational friction and recommend tech upgrades to replace manual processes.' },
      { name: 'UI/UX Design Services', desc: 'User research, wireframes, and interactive prototypes for software solutions.' },
      { name: 'DevOps Engineering', desc: 'Automate infrastructure deployment and code-testing workflows for faster shipping.' },
      { name: 'IT Vendor Management', desc: 'Technical liaison for negotiating and troubleshooting with providers and vendors.' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground mesh-gradient relative overflow-hidden tech-grid">
      <Navigation />

      {/* ═══ Hero ═══ */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center px-4 md:px-8 py-16 md:py-24 overflow-hidden tech-scanline">
        <div className="absolute inset-0 radial-pulse" />
        <div className="absolute inset-0 bg-[var(--hero-glow)]" />

        <span className="absolute top-8 left-8 w-6 h-6 border-t border-l border-[var(--color-accent)]/20" />
        <span className="absolute top-8 right-8 w-6 h-6 border-t border-r border-[var(--color-accent)]/20" />
        <span className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-[var(--color-accent)]/20" />
        <span className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-[var(--color-accent)]/20" />

        <div className="hidden lg:block absolute bottom-6 left-8 font-mono text-[9px] text-[var(--color-text-tertiary)]/25 space-y-1 select-none pointer-events-none">
          <div>[INFRA: MANAGED_SERVICES_CLUSTER]</div>
          <div>PORT: CLUSTER_7000 // STATUS: READY</div>
        </div>
        <div className="hidden lg:block absolute bottom-6 right-8 font-mono text-[9px] text-[var(--color-text-tertiary)]/25 space-y-1 text-right select-none pointer-events-none">
          <div>PILLARS: 7 // SERVICES: 35</div>
          <div>TELEMETRY_LOG: active</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-4 px-3 py-1.5 rounded-md mb-8 border border-[var(--color-accent)]/20 bg-[var(--color-surface-card)]/60 backdrop-blur-md relative overflow-hidden group"
          >
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--color-accent)]/50" />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--color-accent)]/50" />
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">
              SYS_NODE // <span className="text-[var(--color-accent)] font-bold">MANAGED_SERVICES</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 word-break"
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}
          >
            <span style={{ color: 'var(--color-text-primary)' }}>Managed IT.</span><br />
            <span className="gradient-text">End-to-end.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-[var(--color-text-secondary)]"
          >
            7 pillars. 35 services. One partner for all your technology needs — from workplace devices to cloud architecture, cybersecurity, and strategic consulting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:brightness-110 button-glow"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-foreground)', borderRadius: '100px' }}
            >
              Request a Service
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ Pillars Overview — quick nav strip ═══ */}
      <section className="py-8 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {pillars.map((pillar, index) => (
            <motion.a
              key={index}
              href={`#pillar-${pillar.number}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group flex flex-col items-center gap-2 p-3 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/40 hover:bg-[var(--color-surface-raised)]/80 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--color-accent-soft)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-colors">
                {pillar.icon}
              </div>
              <span className="text-[9px] font-mono text-[var(--color-text-muted)] tracking-wider">{pillar.tag}</span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ═══ Pillar Sections ═══ */}
      {pillars.map((pillar, pIndex) => (
        <section
          key={pillar.number}
          id={`pillar-${pillar.number}`}
          className={`py-16 px-4 md:px-8 max-w-[1600px] mx-auto ${pIndex % 2 === 1 ? 'border-t border-b border-[var(--color-border-card)]/50 bg-[var(--color-surface-card)]/10 relative overflow-hidden' : ''}`}
        >
          {pIndex % 2 === 1 && <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />}

          <div className="relative z-10">
            {/* Pillar header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                {pillar.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono text-[var(--color-accent)] font-bold">{pillar.number}</span>
                  <span className="px-2 py-0.5 text-[9px] font-mono font-bold rounded bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-accent)]/20">{pillar.tag}</span>
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
                  {pillar.title}
                </h2>
              </div>
            </motion.div>

            {/* Service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {pillar.services.map((service, sIndex) => (
                <motion.div
                  key={sIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: sIndex * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="relative rounded-2xl p-5 md:p-6 transition-all group card-shadow-hover tech-glow-card theme-card overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-accent)]/10 transition-colors" />
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[8px] font-mono text-[var(--color-text-muted)] tracking-widest">{pillar.tag}_{String(sIndex + 1).padStart(2, '0')}</span>
                      <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] animate-pulse" />
                    </div>
                    <h3 className="text-sm md:text-base font-bold mb-2 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ═══ CTA ═══ */}
      <section className="py-10 md:py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass rounded-3xl p-6 md:p-16 overflow-hidden border border-[var(--color-border-card)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-soft)] via-transparent to-[var(--color-accent-soft)]" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>Need a service not listed here?</h2>
            <p className="text-sm md:text-lg text-[var(--color-text-secondary)] mb-8">
              We deliver custom technology solutions too. Tell us what you need — we'll build it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/solutions" className="group px-6 py-3 md:px-8 md:py-4 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] rounded-lg font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2 premium-shadow hover:glow-effect">
                Custom Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="px-6 py-3 md:px-8 md:py-4 border-2 border-[var(--color-border-default)] rounded-lg font-semibold hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all glass">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ Newsletter ═══ */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <NewsletterSection
          title="Stay Updated on Managed IT Services"
          subtitle="New service offerings, security alerts, and infrastructure updates from Annita."
        />
      </section>

      {/* ═══ Footer ═══ */}
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
