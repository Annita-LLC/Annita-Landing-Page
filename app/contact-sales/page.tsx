'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, Building2, Loader2 } from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'
import Navigation from '@/components/navigation'
import { useState } from 'react'
import { submitSalesForm, ContactSalesFormData } from '@/lib/api'
import { FormFeedbackModal } from '@/components/FormFeedbackModal'
import { checkServerHealthWithRetry } from '@/lib/health-check'
import { HoneypotField } from '@/components/HoneypotField'

export default function ContactSalesPage() {
  const [formData, setFormData] = useState<ContactSalesFormData>({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    projectDescription: '',
    budget: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'success' | 'error' | 'server-unavailable' | 'checking'>('checking')
  const [modalMessage, setModalMessage] = useState('')
  const [modalLatency, setModalLatency] = useState<number | undefined>()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Show checking modal
    setModalType('checking')
    setModalMessage('Verifying server connection...')
    setModalOpen(true)
    setModalLatency(undefined)

    // Check server health first
    const healthCheck = await checkServerHealthWithRetry()
    
    if (!healthCheck.isHealthy) {
      setModalType('server-unavailable')
      setModalMessage(healthCheck.message)
      setModalLatency(healthCheck.latency)
      setIsSubmitting(false)
      return
    }

    // Server is healthy, proceed with submission
    setModalType('checking')
    setModalMessage('Submitting your inquiry...')
    
    try {
      const result = await submitSalesForm(formData)
      if (result.success) {
        setModalType('success')
        setModalMessage('Thank you for your interest in Annita Enterprise Solutions! Our team will contact you within 1-2 business days.')
        setModalLatency(healthCheck.latency)
        setFormData({ name: '', email: '', phone: '', companyName: '', projectDescription: '', budget: '' })
        setSubmitStatus('success')
      } else {
        setModalType('error')
        setModalMessage(result.message)
        setSubmitStatus('error')
        setErrorMessage(result.message)
      }
    } catch (error) {
      setModalType('error')
      setModalMessage('An error occurred. Please try again later.')
      setSubmitStatus('error')
      setErrorMessage('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
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
          <div>[INQUIRY: ENTERPRISE_VAL.sh]</div>
          <div>PORT: REG_TUNNEL // CLASS: SECURE</div>
        </div>
        <div className="hidden lg:block absolute bottom-6 right-8 font-mono text-[9px] text-[#8A9BBB]/25 space-y-1 text-right select-none pointer-events-none">
          <div>SALES_PIPELINE: LISTEN</div>
          <div>SENTRY: tracking_active</div>
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
              SYS_NODE // <span className="text-[#00C28A] font-bold">SALES_GATEWAY</span>
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 word-break"
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}
          >
            <span style={{ color: '#F0F4FF' }}>Enterprise</span><br />
            <span style={{ color: '#F0F4FF' }}>Solutions.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#8A9BBB' }}
          >
            Transform your organization. Our team is ready for your large-scale projects.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-28 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Sales Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 tech-glow-card"
            style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
          >
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>
              Enterprise Inquiry
            </h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(0, 194, 138, 0.1)', border: '1px solid #00C28A' }}>
                <p className="text-sm" style={{ color: '#00C28A' }}>
                  Thank you for your interest in Annita Enterprise Solutions! Our team will contact you within 1-2 business days.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid #EF4444' }}>
                <p className="text-sm" style={{ color: '#EF4444' }}>
                  {errorMessage}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <HoneypotField />
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ backgroundColor: '#1A2640', border: '1px solid #2A3A5C', color: '#F0F4FF' }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ backgroundColor: '#1A2640', border: '1px solid #2A3A5C', color: '#F0F4FF' }}
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ backgroundColor: '#1A2640', border: '1px solid #2A3A5C', color: '#F0F4FF' }}
                  placeholder="+231 77 505 7227"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ backgroundColor: '#1A2640', border: '1px solid #2A3A5C', color: '#F0F4FF' }}
                  placeholder="Acme Corporation"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>
                  Project Description *
                </label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                  style={{ backgroundColor: '#1A2640', border: '1px solid #2A3A5C', color: '#F0F4FF' }}
                  placeholder="Describe your enterprise project needs..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>
                  Budget Range *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ backgroundColor: '#1A2640', border: '1px solid #2A3A5C', color: '#F0F4FF' }}
                >
                  <option value="">Select budget range</option>
                  <option value="<$5K">Less than $5,000</option>
                  <option value="$5K-$25K">$5,000 - $25,000</option>
                  <option value="$25K-$100K">$25,000 - $100,000</option>
                  <option value="$100K+">$100,000+</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#00C28A', color: '#080D1A' }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 text-center tech-glow-card"
              style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(0, 194, 138, 0.1)' }}>
                <Mail className="w-8 h-8" style={{ color: '#00C28A' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>Email</h3>
              <p className="text-sm" style={{ color: '#8A9BBB' }}>sales@an-nita.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl p-8 text-center tech-glow-card"
              style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(0, 194, 138, 0.1)' }}>
                <Phone className="w-8 h-8" style={{ color: '#00C28A' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>Phone</h3>
              <p className="text-sm" style={{ color: '#8A9BBB' }}>+231 77 505 7227</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl p-8 text-center tech-glow-card"
              style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(0, 194, 138, 0.1)' }}>
                <Building2 className="w-8 h-8" style={{ color: '#00C28A' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>Enterprise</h3>
              <p className="text-sm" style={{ color: '#8A9BBB' }}>Government & Large Organizations</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Feedback Modal */}
      <FormFeedbackModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        message={modalMessage}
        latency={modalLatency}
      />

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>
            Start your enterprise project
          </h2>
          <p className="text-lg mb-8" style={{ color: '#8A9BBB' }}>
            Submit your project brief and our enterprise team will get back to you within 1-2 business days.
          </p>
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
