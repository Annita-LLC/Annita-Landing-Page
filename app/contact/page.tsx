'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, Loader2, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'
import Navigation from '@/components/navigation'
import { useState } from 'react'
import { submitContactForm, ContactUsFormData } from '@/lib/api'
import { FormFeedbackModal } from '@/components/FormFeedbackModal'
import { checkServerHealthWithRetry } from '@/lib/health-check'
import { HoneypotField } from '@/components/HoneypotField'
import NewsletterSection from '@/components/newsletter-section'

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactUsFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    website_url: ''
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
    setModalMessage('Submitting your message...')
    
    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setModalType('success')
        setModalMessage('Thank you for contacting Annita! We will respond within 1-2 business days.')
        setModalLatency(healthCheck.latency)
        setFormData({ name: '', email: '', phone: '', message: '', website_url: '' })
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div className="min-h-screen tech-grid theme-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center px-4 md:px-8 py-16 md:py-20 overflow-hidden tech-scanline">
        <div className="absolute inset-0 tech-grid opacity-[0.08]" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 50% -20%, rgba(0, 194, 138, 0.15), transparent 70%), linear-gradient(135deg, rgba(0, 194, 138, 0.03) 0%, transparent 50%), linear-gradient(225deg, rgba(0, 194, 138, 0.03) 0%, transparent 50%)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px'
        }} />
        
        {/* Corner micro brackets */}
        <span className="absolute top-8 left-8 w-6 h-6 border-t border-l border-[var(--color-accent)]/20" />
        <span className="absolute top-8 right-8 w-6 h-6 border-t border-r border-[var(--color-accent)]/20" />
        <span className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-[var(--color-accent)]/20" />
        <span className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-[var(--color-accent)]/20" />

        {/* Floating System Telemetry Log */}
        <div className="hidden lg:block absolute bottom-6 left-8 font-mono text-[9px] text-[var(--color-text-tertiary)]/25 space-y-1 select-none pointer-events-none">
          <div>[GATEWAY: CONTACT_CHANNEL.sh]</div>
          <div>PORT: HTTPS_443 // SSL: SIGNED</div>
        </div>
        <div className="hidden lg:block absolute bottom-6 right-8 font-mono text-[9px] text-[var(--color-text-tertiary)]/25 space-y-1 text-right select-none pointer-events-none">
          <div>COMMUNICATION_LINK: SECURE</div>
          <div>LOGGING: telemetry_active</div>
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
              SYS_NODE // <span className="text-[var(--color-accent)] font-bold">CONTACT_GATEWAY</span>
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 word-break"
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}
          >
            <span className="gradient-text">Let's Build</span><br />
            <span className="gradient-text">Together.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-[var(--color-text-secondary)]"
          >
            Questions, partnerships, or project inquiries — our team is ready to help you build what's next.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-28 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 tech-glow-card theme-card relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--color-accent)]/30" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--color-accent)]/30" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)]">FORM_NODE // ENCRYPTED</span>
              </div>
              <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
                Send us a message
              </h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]">
                <p className="text-sm text-[var(--color-accent)]">
                  Thank you for contacting Annita! We'll respond within 1-2 business days.
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
              <HoneypotField onChange={(value) => setFormData(prev => ({ ...prev, website_url: value }))} />
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all theme-input"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all theme-input"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all theme-input"
                  placeholder="+231 77 505 7227"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none theme-input"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 button-glow"
                style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-foreground)' }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 text-center tech-glow-card theme-card group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-accent)]/10 transition-colors" />
              <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-all">
                  <Mail className="w-8 h-8 text-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>Email</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">info@an-nita.com</p>
                <div className="mt-3 text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-widest">Response: 1-2 Business Days</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl p-8 text-center tech-glow-card theme-card group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-accent)]/10 transition-colors" />
              <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-all">
                  <Phone className="w-8 h-8 text-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>Phone</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">+231 77 505 7227</p>
                <div className="mt-3 text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-widest">Mon-Fri: 9AM - 6PM GMT</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl p-8 text-center tech-glow-card theme-card group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-accent)]/10 transition-colors" />
              <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-all">
                  <MapPin className="w-8 h-8 text-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>Location</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">Monrovia, Liberia</p>
                <div className="mt-3 text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-widest">HQ: Sinkor District</div>
              </div>
            </motion.div>

            {/* WhatsApp Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl p-8 text-center tech-glow-card theme-card group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-accent)]/10 transition-colors" />
              <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-all">
                  <MessageSquare className="w-8 h-8 text-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>WhatsApp</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">Contact us directly</p>
                <div className="space-y-2">
                  <a
                    href="https://wa.me/231886213748"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-all text-sm w-full justify-center"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>+231 886 213 748</span>
                  </a>
                  <a
                    href="https://wa.me/231775057227"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-all text-sm w-full justify-center"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>+231 77 505 7227</span>
                  </a>
                </div>
              </div>
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
      <section className="py-24 px-4 md:px-8 max-w-[1600px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
            Ready to start your project?
          </h2>
          <p className="text-lg mb-8 text-[var(--color-text-secondary)]">
            Submit your project brief and our team will get back to you within 1-2 business days.
          </p>
          <Link 
            href="/solutions/request" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:brightness-110 button-glow"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-foreground)', borderRadius: '100px' }}
          >
            Start Your Request
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <NewsletterSection
          title="Stay Ahead of Africa's Digital Revolution"
          subtitle="Get ecosystem updates, product launches, and exclusive insights from Annita delivered to your inbox. No spam — ever."
        />
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-[var(--color-border-card)]" style={{ backgroundColor: 'var(--color-surface-base)' }}>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none tech-grid" />
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-accent)]/5 to-transparent animate-scanline" />
        </div>

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
