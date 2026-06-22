'use client'

import { motion } from 'framer-motion'
import { Award, Trophy, Users, Globe, ChevronRight, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/navigation'

export default function AwardsPage() {
  const awards = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'UN STI Forum 2026',
      description: 'SDG Solutions Book Innovation #05 - Recognized for contributing to sustainable development goals through technology innovation.',
      category: 'Global Recognition',
      year: '2026',
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'APGYD 2026',
      description: 'Excellence Program - UN & China Government-backed recognition for outstanding youth development initiatives.',
      category: 'International Excellence',
      year: '2026',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Top 55 / 200',
      description: 'Global Programs Shanghai & Wuhan - Selected among top global programs for innovation and impact.',
      category: 'Global Leadership',
      year: '2026',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '3,000+ MSMEs',
      description: 'Verified MSMEs Onboarded - Trusted by thousands of MSMEs across Liberia and beyond.',
      category: 'Community Impact',
      year: 'Ongoing',
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Orange Social Venture Prize',
      description: '1st Place Winner (POESAM Liberia) - Awarded for outstanding tech-driven social innovation and entrepreneurship addressing key local challenges.',
      category: 'Social Venture',
      year: '2024',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Top 50 African Businesses',
      description: 'African Union EAN Fellowship - Selected by the African Union as one of the top 50 innovative small businesses in Africa under the inaugural Enterprise African Network Fellowship Programme.',
      category: 'Continental Excellence',
      year: '2024',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground mesh-gradient tech-grid">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-8 py-24 overflow-hidden tech-scanline">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(29,78,216,0.14),transparent_55%)]" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/12 border border-accent/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Excellence Recognized</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            <span className="gradient-text">Awards &</span><br />
            <span className="gradient-text">Recognitions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Global recognition for innovation, impact, and excellence in building Africa's digital future.
          </motion.p>
        </motion.div>
      </section>

      {/* Awards Section */}
      <section className="py-28 px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass rounded-2xl p-8 hover:shadow-xl transition-all group relative overflow-hidden tech-glow-card tech-grid"
            >
              {/* Grid backdrop */}
              <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
              
              {/* Corner tech accents */}
              <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#00C28A]/30 group-hover:border-[#00C28A] transition-colors" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#00C28A]/30 group-hover:border-[#00C28A] transition-colors" />
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/12 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors border border-accent/20">
                    {award.icon}
                  </div>
                  <span className="px-3 py-1 bg-accent/12 text-accent text-xs font-semibold rounded-full border border-accent/20 font-mono">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 gradient-text font-syne">{award.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {award.description}
                </p>
                <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm">
                  <span className="cyber-bracket-left cyber-bracket-right font-mono text-xs">{award.category}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-all premium-shadow hover:glow-effect"
          >
            Back to Home
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
