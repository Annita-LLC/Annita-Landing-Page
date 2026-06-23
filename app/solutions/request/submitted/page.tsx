'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, FileText, Phone, Calendar } from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'
import Navigation from '@/components/navigation'

const nextSteps = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Our team reviews your brief carefully.',
    description: '',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'We schedule a free 30-minute discovery consultation.',
    description: '',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'We send you a detailed proposal with scope, team, and pricing.',
    description: '',
  },
]

export default function SubmittedPage() {
  return (
    <div className="min-h-screen tech-grid" style={{ backgroundColor: '#080D1A', color: '#F0F4FF' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center px-4 md:px-8 py-16 overflow-hidden tech-scanline">
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
          <div>[INBOUND_GATE: SUBMIT_RECEIPT]</div>
          <div>INDEX: INGESTED // TRANSACTION: LOGGED</div>
        </div>
        <div className="hidden lg:block absolute bottom-6 right-8 font-mono text-[9px] text-[#8A9BBB]/25 space-y-1 text-right select-none pointer-events-none">
          <div>DATA_ISOLATION: SECURE</div>
          <div>TELEMETRY: registered_success</div>
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
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8"
            style={{ backgroundColor: 'rgba(0, 194, 138, 0.15)', border: '2px solid #00C28A' }}
          >
            <CheckCircle2 className="w-10 h-10" style={{ color: '#00C28A' }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: '#00C28A', fontFamily: 'var(--font-syne)' }}
          >
            REQUEST RECEIVED
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 word-break"
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, color: '#F0F4FF' }}
          >
            Your project brief is<br />in good hands.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#8A9BBB' }}
          >
            Thank you! We have received your Custom Solutions request and our team will review it within 1–2 business days. Expect to hear from us soon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all"
              style={{ backgroundColor: '#00C28A', color: '#080D1A', borderRadius: '100px' }}
            >
              Back to Annita Home
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all"
              style={{ backgroundColor: 'transparent', color: '#00C28A', border: '2px solid #00C28A', borderRadius: '100px' }}
            >
              Explore the Ecosystem
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-24 px-4 md:px-8 max-w-[720px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>WHAT HAPPENS NEXT:</h2>
        </motion.div>

        <div className="space-y-6">
          {nextSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: '#00C28A', color: '#080D1A' }}>
                {index + 1}
              </div>
              <p className="text-lg leading-relaxed pt-1" style={{ color: '#8A9BBB' }}>
                {step.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

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
