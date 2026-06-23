'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Target, Heart, Shield, Globe, Users, Zap, Award } from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'
import Navigation from '@/components/navigation'

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Mission-Driven',
    description: 'Every decision we make is guided by our commitment to transforming Africa through technology.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'People-First',
    description: 'We believe in empowering people and communities through accessible digital solutions.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Trust & Integrity',
    description: 'Building lasting relationships through transparency, honesty, and ethical business practices.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Impact',
    description: 'Thinking globally while acting locally to create meaningful change across Africa.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Collaboration',
    description: 'Success is achieved together. We partner with governments, MSMEs, and communities.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Innovation',
    description: 'Constantly pushing boundaries to deliver cutting-edge solutions for real-world challenges.',
  },
]

const stats = [
  { value: '3,000+', label: 'Verified MSMEs', status: 'ACTIVE_NODE' },
  { value: 'Top 55/200', label: 'Global Ranking', status: 'RANKED_GLB' },
  { value: '6', label: 'Portfolio Companies', status: 'PORTFOLIO' },
  { value: '100+', label: 'Countries Reached', status: 'REACH_GLB' },
  { value: '$12,500+', label: 'Grants Raised', status: 'FUND_SECURE' },
  { value: '12+', label: 'Recognitions & Awards', status: 'CERTIFIED' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen tech-grid" style={{ backgroundColor: '#080D1A', color: '#F0F4FF' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center px-4 md:px-8 py-16 md:py-20 overflow-hidden tech-scanline">
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
          <div>[MANIFEST: ABOUT_MANIFEST.md]</div>
          <div>INDEX: DIRECTORY // STATUS: STABLE</div>
        </div>
        <div className="hidden lg:block absolute bottom-6 right-8 font-mono text-[9px] text-[#8A9BBB]/25 space-y-1 text-right select-none pointer-events-none">
          <div>CLUSTER_CORE: ACTIVE</div>
          <div>LOC: LIBERIA/GLOBAL_OUTPOST</div>
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
              SYS_NODE // <span className="text-[#00C28A] font-bold">ABOUT_MANIFEST</span>
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 word-break"
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}
          >
            <span style={{ color: '#F0F4FF' }}>Africa's</span><br />
            <span style={{ color: '#F0F4FF' }}>Digital Heartbeat.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#8A9BBB' }}
          >
            Annita is building Africa's first all-in-one digital ecosystem — integrating e-commerce, fintech, AI, communication, marketing, logistics, and more into a single, connected system.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-28 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 tech-glow-card"
            style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 194, 138, 0.1)' }}>
              <Target className="w-8 h-8" style={{ color: '#00C28A' }} />
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>Our Mission</h2>
            <p className="text-base leading-relaxed" style={{ color: '#8A9BBB' }}>
              To democratize access to digital infrastructure across Africa by providing MSMEs, governments, and strategic partners with affordable, scalable, and integrated technology solutions that drive economic growth and social impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl p-8 tech-glow-card"
            style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 194, 138, 0.1)' }}>
              <Award className="w-8 h-8" style={{ color: '#00C28A' }} />
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>Our Vision</h2>
            <p className="text-base leading-relaxed" style={{ color: '#8A9BBB' }}>
              To become Africa's leading digital ecosystem, powering the continent's transformation into a globally competitive digital economy where every business and individual has access to world-class technology.
            </p>
          </motion.div>
        </div>
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
                  <div className="text-2xl md:text-3xl font-bold mb-2 font-syne gradient-text">
                    {stat.value}
                  </div>
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

      {/* Values Section */}
      <section className="py-28 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#00C28A' }}>Our Values</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>What Drives Us</h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#8A9BBB' }}>
            Our core values are the foundation of everything we do, guiding our decisions and shaping our culture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl p-8 tech-glow-card"
              style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(0, 194, 138, 0.1)' }}>
                <div style={{ color: '#00C28A' }}>{value.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>{value.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8A9BBB' }}>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-28 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#00C28A' }}>Our Story</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>From Liberia to the World</h2>
          </div>

          <div className="rounded-2xl p-8 md:p-12 tech-glow-card" style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}>
            <div className="space-y-6 text-base leading-relaxed" style={{ color: '#8A9BBB' }}>
              <p>
                Founded in Liberia, Annita LLC emerged from a simple yet powerful observation: while the world was rapidly digitizing, Africa's MSMEs and communities lacked access to integrated, affordable digital infrastructure.
              </p>
              <p>
                We set out to change that. Not by importing solutions designed elsewhere, but by building technology specifically for Africa's unique challenges and opportunities. Technology that works offline as seamlessly as it does online. Technology that respects local contexts while enabling global connectivity.
              </p>
              <p>
                Today, Annita is a diversified ecosystem spanning marketplace infrastructure, fintech, digital health, AI, and custom technology solutions. We've grown from a vision into a movement — one that's empowering thousands of MSMEs, creating jobs, and positioning Liberia as a hub for African innovation.
              </p>
              <p>
                But we're just getting started. Our journey continues as we expand our reach, deepen our impact, and work towards our vision of becoming Africa's digital heartbeat — powering the continent's transformation into a globally competitive digital economy.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-4 md:px-8 max-w-[1400px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>
            Join Our Mission
          </h2>
          <p className="text-lg mb-8" style={{ color: '#8A9BBB' }}>
            Be part of Africa's digital transformation. Whether you're a business, government, or individual — there's a place for you in our ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/solutions" 
              className="group px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: '#00C28A', color: '#080D1A', borderRadius: '100px' }}
            >
              Build With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="group px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 border-2 hover:bg-[#00C28A] hover:text-[#080D1A] hover:border-[#00C28A]"
              style={{ borderColor: '#00C28A', color: '#00C28A', borderRadius: '100px' }}
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
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
