'use client'

import { motion } from 'framer-motion'
import { ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'
import Navigation from '@/components/navigation'

const solutionTypes = [
  { number: '01', name: 'Mobile Applications', description: 'Native and cross-platform apps for Android and iOS — built for low-bandwidth African environments.' },
  { number: '02', name: 'Web Applications', description: 'Full-stack web apps with custom logic, dashboards, and user flows for any scale.' },
  { number: '03', name: 'Business & Government Portals', description: 'Secure multi-role portals for internal operations, citizen services, or partner management.' },
  { number: '04', name: 'Websites & Landing Pages', description: 'High-performance marketing sites, product pages, and institutional web presences.' },
  { number: '05', name: 'SaaS Platforms', description: 'Multi-tenant, subscription-based software platforms built from the ground up.' },
  { number: '06', name: 'Marketplace & E-commerce Systems', description: 'Custom marketplace infrastructure, vendor management, and commerce platforms.' },
  { number: '07', name: 'ERP & Business Management Systems', description: 'End-to-end enterprise resource planning systems tailored to your workflows.' },
  { number: '08', name: 'Fintech & Payment Infrastructure', description: 'Wallets, payment gateways, BNPL engines, and financial management systems.' },
  { number: '09', name: 'AI & Intelligent Automation', description: 'Machine learning models, AI-powered tools, chatbots, and workflow automation.' },
  { number: '10', name: 'Data Dashboards & Analytics', description: 'Real-time reporting systems, KPI dashboards, and data visualization tools.' },
  { number: '11', name: 'Digital Health Platforms', description: 'Patient management, telemedicine, records, and community health infrastructure.' },
  { number: '12', name: 'API Development & Integrations', description: 'Custom APIs and third-party integrations to connect systems and data sources.' },
  { number: '13', name: 'CMS & Content Infrastructure', description: 'Custom content management systems and editorial tooling for media and institutions.' },
  { number: '14', name: 'IoT & Hardware-Connected Systems', description: 'Software layers connecting physical devices, sensors, and hardware infrastructure.' },
  { number: '15', name: 'Custom Infrastructure & DevOps', description: 'Server setup, CI/CD pipelines, cloud architecture, and deployment infrastructure.' },
]

const targetAudiences = [
  {
    title: 'MSMEs & Startups',
    subtitle: 'Building for growth?',
    description: 'We understand the constraints and the ambition.',
  },
  {
    title: 'Governments & Institutions',
    subtitle: 'Modernizing services?',
    description: 'We build secure, auditable, accessible systems for public deployment.',
  },
  {
    title: 'Strategic Partners & NGOs',
    subtitle: 'Scaling impact?',
    description: 'We co-build with mission-driven organizations that need real infrastructure.',
  },
]

const processSteps = [
  { number: '01', title: 'Submit Your Brief', description: 'Fill in our detailed request form. Takes 5–8 minutes.' },
  { number: '02', title: 'Discovery Call', description: 'We schedule a free consultation to understand your project.' },
  { number: '03', title: 'Proposal & Scope', description: 'We send a detailed proposal with timeline, team, and pricing.' },
  { number: '04', title: 'Build & Delivery', description: 'We build, test, and deliver — on time, on spec.' },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen tech-grid" style={{ backgroundColor: '#080D1A', color: '#F0F4FF' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center px-4 md:px-8 py-16 md:py-24 overflow-hidden tech-scanline">
        <div className="absolute inset-0 tech-grid opacity-[0.08]" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 50% -20%, rgba(0, 194, 138, 0.15), transparent 70%), linear-gradient(135deg, rgba(0, 194, 138, 0.03) 0%, transparent 50%), linear-gradient(225deg, rgba(0, 194, 138, 0.03) 0%, transparent 50%)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px'
        }} />
        
        {/* Corner micro brackets */}
        <span className="absolute top-8 left-8 w-6 h-6 border-t border-l border-[#00C28A]/20" />
        <span className="absolute top-8 right-8 w-6 h-6 border-t border-r border-[#00C28A]/20" />
        <span className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-[#00C28A]/20" />
        <span className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-[#00C28A]/20" />

        {/* Floating System Telemetry Log */}
        <div className="hidden lg:block absolute bottom-6 left-8 font-mono text-[9px] text-[#8A9BBB]/25 space-y-1 select-none pointer-events-none">
          <div>[INFRA: CUSTOM_SOLUTIONS_CLUSTER]</div>
          <div>PORT: CLUSTER_3000 // STATUS: READY</div>
        </div>
        <div className="hidden lg:block absolute bottom-6 right-8 font-mono text-[9px] text-[#8A9BBB]/25 space-y-1 text-right select-none pointer-events-none">
          <div>BUILD_AGENT: SECURE // COMPILE: OK</div>
          <div>TELEMETRY_LOG: active</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-4 px-3 py-1.5 rounded-md mb-8 border border-[#00C28A]/20 bg-[#0F1729]/60 backdrop-blur-md relative overflow-hidden group"
          >
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#00C28A]/50" />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#00C28A]/50" />
            <span className="w-2 h-2 rounded-full bg-[#00C28A] animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-[#8A9BBB] uppercase">
              SYS_NODE // <span className="text-[#00C28A] font-bold">SOLUTIONS_CORE</span>
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 word-break"
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}
          >
            <span style={{ color: '#F0F4FF' }}>We Build What</span><br />
            <span style={{ color: '#F0F4FF' }}>Africa Needs.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#8A9BBB' }}
          >
            Annita delivers custom-built technology solutions for MSMEs, governments, and strategic partners across the continent. From concept to deployment — we engineer with precision.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link 
              href="/solutions/request" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all"
              style={{ backgroundColor: '#00C28A', color: '#080D1A', borderRadius: '100px' }}
            >
              Start Your Request
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What We Build Section */}
      <section className="py-28 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>Solutions we've delivered and can build for you.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionTypes.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl p-6 transition-all group card-shadow-hover tech-glow-card"
              style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
            >
              <div className="text-xs font-bold mb-3" style={{ color: '#00C28A', fontFamily: 'var(--font-syne)' }}>{solution.number}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#F0F4FF' }}>{solution.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8A9BBB' }}>{solution.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm mb-4" style={{ color: '#8A9BBB' }}>Don't see your project type? Describe it anyway — we've built things that didn't have a category yet.</p>
          <Link 
            href="/solutions/request" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all"
            style={{ backgroundColor: '#00C28A', color: '#080D1A', borderRadius: '100px' }}
          >
            Start Your Request
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Who We Build For Section */}
      <section className="py-28 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {targetAudiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl p-8 transition-all group card-shadow-hover tech-glow-card"
              style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
            >
              <h3 className="text-xl font-bold mb-2" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>{audience.title}</h3>
              <p className="text-sm font-semibold mb-4" style={{ color: '#00C28A' }}>{audience.subtitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#8A9BBB' }}>{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Strip Section */}
      <section className="py-28 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>How It Works</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl p-6 transition-all tech-glow-card"
              style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
            >
              <div className="text-xs font-bold mb-3" style={{ color: '#00C28A', fontFamily: 'var(--font-syne)' }}>{step.number}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#F0F4FF' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8A9BBB' }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      {/* Techy Footer */}
      <footer className="relative overflow-hidden" style={{ backgroundColor: '#080D1A', borderTop: '1px solid #1A2640' }}>
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 194, 138, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 194, 138, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C28A]/5 to-transparent animate-scanline" />
        </div>

        <div className="relative z-10 py-12 px-4 md:px-8 max-w-[1400px] mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <NextImage
                  src="/annita-real-logo.png"
                  alt="Annita Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <div className="font-bold text-white">Annita<span className="text-[#00C28A]">.</span></div>
                  <div className="text-[10px] font-mono text-[#00C28A]">SYSTEM: ONLINE</div>
                </div>
              </div>
              <p className="text-xs text-[#8A9BBB] mb-4 leading-relaxed">
                Building Africa's digital infrastructure with world-class technology solutions.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#4A5775]">
                <span className="w-1.5 h-1.5 bg-[#00C28A] rounded-full animate-pulse" />
                <span>STATUS: OPERATIONAL</span>
              </div>
            </div>

            {/* Ecosystem Links */}
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#4A5775] mb-4 flex items-center gap-2">
                <span className="w-1 h-1 bg-[#00C28A] rounded-full" />
                Ecosystem
              </div>
              <div className="space-y-2">
                <Link href="/login" className="block text-sm text-[#8A9BBB] hover:text-[#00C28A] transition-colors">Annita Ecosystem</Link>
                <a href="https://www.an-nitapay.com" className="block text-sm text-[#8A9BBB] hover:text-[#00C28A] transition-colors">AnnitaPay</a>
                <a href="https://www.an-nita-pulse.org" className="block text-sm text-[#8A9BBB] hover:text-[#00C28A] transition-colors">Annita Pulse</a>
                <a href="https://www.ezri-africa.com" className="block text-sm text-[#8A9BBB] hover:text-[#00C28A] transition-colors">Ezri</a>
                <a href="https://an-nitaimpactinnovationhub.com" className="block text-sm text-[#8A9BBB] hover:text-[#00C28A] transition-colors">AIIM Hub</a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#4A5775] mb-4 flex items-center gap-2">
                <span className="w-1 h-1 bg-[#00C28A] rounded-full" />
                Company
              </div>
              <div className="space-y-2">
                <Link href="/solutions" className="block text-sm text-[#8A9BBB] hover:text-[#00C28A] transition-colors">Custom Solutions</Link>
                <Link href="/about" className="block text-sm text-[#8A9BBB] hover:text-[#00C28A] transition-colors">About Us</Link>
                <Link href="/awards" className="block text-sm text-[#8A9BBB] hover:text-[#00C28A] transition-colors">Awards</Link>
                <Link href="/contact" className="block text-sm text-[#8A9BBB] hover:text-[#00C28A] transition-colors">Contact Us</Link>
                <Link href="/contact-sales" className="block text-sm text-[#8A9BBB] hover:text-[#00C28A] transition-colors">Contact Sales</Link>
              </div>
            </div>

            {/* Tech Stats */}
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#4A5775] mb-4 flex items-center gap-2">
                <span className="w-1 h-1 bg-[#00C28A] rounded-full" />
                System Metrics
              </div>
              <div className="space-y-2 text-[10px] font-mono">
                <div className="flex justify-between">
                  <span className="text-[#8A9BBB]">LATENCY</span>
                  <span className="text-[#00C28A]">18ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A9BBB]">UPTIME</span>
                  <span className="text-[#00C28A]">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A9BBB]">REGIONS</span>
                  <span className="text-[#00C28A]">6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A9BBB]">VERSION</span>
                  <span className="text-[#00C28A]">v2.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-[#1A2640]/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-[10px] font-mono text-[#4A5775]">© 2026 Annita LLC. All rights reserved.</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[10px] font-mono text-[#4A5775]">Built in Liberia. Built for the World.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
