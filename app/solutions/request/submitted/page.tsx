'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle2, FileText, Phone, Calendar } from 'lucide-react'
import Link from 'next/link'
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
  const [formData, setFormData] = useState<any>(null)

  useEffect(() => {
    const saved = localStorage.getItem('solutionsFormSubmitted')
    if (saved) {
      try {
        setFormData(JSON.parse(saved))
        // Clear the saved data after loading
        localStorage.removeItem('solutionsFormSubmitted')
      } catch (e) {
        console.error('Error loading form data:', e)
      }
    }
  }, [])

  const firstName = formData?.fullName?.split(' ')[0] || 'there'
  const email = formData?.email || 'your email'
  return (
    <div className="min-h-screen tech-grid" style={{ backgroundColor: '#080D1A', color: '#F0F4FF' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-16 overflow-hidden tech-scanline" style={{ minHeight: '100svh' }}>
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(135deg, rgba(0, 194, 138, 0.03) 0%, transparent 50%), linear-gradient(225deg, rgba(0, 194, 138, 0.03) 0%, transparent 50%)',
          backgroundSize: '40px 40px'
        }} />
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
            Thank you, {firstName}. We have received your Custom Solutions request and our team will review it within 1–2 business days. Expect to hear from us at {email}.
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

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 max-w-[1400px] mx-auto" style={{ backgroundColor: '#080D1A', borderTop: '1px solid #1A2640' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm" style={{ color: '#8A9BBB' }}>© 2026 Annita LLC. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link href="/login" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Annita Ecosystem</Link>
            <a href="https://www.an-nitapay.com" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>AnnitaPay</a>
            <a href="https://www.an-nita-pulse.org" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Annita Pulse</a>
            <a href="https://www.ezri-africa.com" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Ezri</a>
            <a href="https://www.aiim.com" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>AIIM</a>
            <Link href="/solutions" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Custom Solutions</Link>
            <Link href="/awards" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Awards</Link>
            <Link href="/contact" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Contact Us</Link>
            <Link href="/contact-sales" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Contact Sales</Link>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm" style={{ color: '#8A9BBB' }}>Built in Liberia. Built for the World.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
