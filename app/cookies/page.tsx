'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import NewsletterSection from '@/components/newsletter-section'
import { Trash2, Mail, Phone, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { HoneypotField } from '@/components/HoneypotField'

const NextImage = Image

export default function CookiesPage() {
  const [formData, setFormData] = useState({
    email: '',
    softwareProduct: '',
    reason: '',
    communicationChannel: 'email',
    alternativeContact: '',
    website_url: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/account-deletion/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ email: '', softwareProduct: '', reason: '', communicationChannel: 'email', alternativeContact: '', website_url: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const whatsappNumbers = [
    { name: 'Customer Service 1', number: '+231886213748' },
    { name: 'Customer Service 2', number: '+231775057227' }
  ]
  return (
    <div className="min-h-screen tech-grid theme-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[30vh] flex items-center justify-center px-4 md:px-8 py-16 overflow-hidden tech-scanline">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
              SYS_NODE // <span className="text-[var(--color-accent)] font-bold">COOKIE_POLICY</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}
          >
            <span className="text-[var(--color-text-primary)]">Cookie</span><br />
            <span className="text-[var(--color-text-primary)]">Policy.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-[var(--color-text-secondary)]"
          >
            How we use cookies to enhance your experience.
          </motion.p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-12 tech-glow-card theme-card"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
              What Are Cookies?
            </h2>
            <p className="text-base leading-relaxed mb-6 text-[var(--color-text-secondary)]">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by allowing the website to remember your preferences and understand how you use our services.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-10 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
              How We Use Cookies
            </h2>
            <ul className="space-y-4 mb-6 text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-[var(--color-text-primary)]">Essential Cookies:</strong> Required for the website to function properly, including security and basic features.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-[var(--color-text-primary)]">Performance Cookies:</strong> Help us understand how visitors use our website by collecting anonymous analytics data.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-[var(--color-text-primary)]">Functionality Cookies:</strong> Remember your preferences and settings to provide a more personalized experience.
                </div>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-10 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
              Managing Cookies
            </h2>
            <p className="text-base leading-relaxed mb-6 text-[var(--color-text-secondary)]">
              You can control and manage cookies through your browser settings. Please note that disabling essential cookies may affect the functionality of our website. For more information on how to manage cookies in your browser, please refer to your browser's help documentation.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-10 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
              Third-Party Cookies
            </h2>
            <p className="text-base leading-relaxed mb-6 text-[var(--color-text-secondary)]">
              We may use third-party services that place cookies on your device, such as Google Analytics for website analytics. These third parties have their own privacy policies, and we encourage you to review them.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-10 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
              Updates to This Policy
            </h2>
            <p className="text-base leading-relaxed mb-6 text-[var(--color-text-secondary)]">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay informed about how we use cookies.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-10 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
              Contact Us
            </h2>
            <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
              If you have any questions about our use of cookies, please contact us at{' '}
              <a href="mailto:info@an-nita.com" className="text-[var(--color-accent)] hover:underline">
                info@an-nita.com
              </a>
            </p>

            <div className="mt-10 pt-8 border-t border-[var(--color-border-card)]">
              <p className="text-sm text-[var(--color-text-muted)]">
                Last Updated: June 2026
              </p>
            </div>
          </motion.div>

          {/* Account Deletion Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-12 mt-8 border border-[var(--color-accent)]/30 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Request Account Deletion</h2>
                <p className="text-sm text-[var(--color-text-tertiary)]">Submit a request to delete your account and associated data (GDPR Compliance)</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <HoneypotField onChange={(value) => setFormData(prev => ({ ...prev, website_url: value }))} />
              
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Software Product *
                </label>
                <select
                  required
                  value={formData.softwareProduct}
                  onChange={(e) => setFormData({ ...formData, softwareProduct: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                >
                  <option value="">Select a product</option>
                  <option value="annita-ecosystem">Annita Ecosystem</option>
                  <option value="annita-pay">AnnitaPay</option>
                  <option value="annita-pulse">Annita Pulse</option>
                  <option value="ezri">Ezri AI</option>
                  <option value="aiim-hub">AIIM Hub</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Reason for Deletion *
                </label>
                <textarea
                  required
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
                  placeholder="Please explain why you want to delete your account..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Preferred Communication Channel *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'email', icon: Mail, label: 'Email' },
                    { value: 'phone', icon: Phone, label: 'Phone' },
                    { value: 'in-app', icon: MessageSquare, label: 'In-App' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, communicationChannel: option.value })}
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg border transition-all ${
                        formData.communicationChannel === option.value
                          ? 'border-[var(--color-accent)] bg-[var(--color-accent-soft)]'
                          : 'border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 hover:border-[var(--color-accent)]/50'
                      }`}
                    >
                      <option.icon className="w-5 h-5" />
                      <span className="text-xs">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Alternative Contact (Optional)
                </label>
                <input
                  type="text"
                  value={formData.alternativeContact}
                  onChange={(e) => setFormData({ ...formData, alternativeContact: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  placeholder="Phone number or alternative email"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-500 text-sm">
                  Your deletion request has been submitted successfully. We will process it within 30 days.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm">
                  An error occurred. Please try again or contact customer support directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] rounded-lg font-semibold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Deletion Request'}
              </button>
            </form>

            {/* WhatsApp Contact */}
            <div className="mt-6 pt-6 border-t border-[var(--color-border-card)]">
              <p className="text-sm text-[var(--color-text-tertiary)] mb-3">
                Need immediate assistance? Contact our customer service via WhatsApp:
              </p>
              <div className="flex flex-wrap gap-3">
                {whatsappNumbers.map((contact) => (
                  <a
                    key={contact.number}
                    href={`https://wa.me/${contact.number.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-all text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{contact.name}: {contact.number}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <NewsletterSection
          title="Stay Informed on Cookie & Privacy Updates"
          subtitle="Important updates to our cookie policy, privacy practices, and data protection announcements delivered to your inbox."
        />
      </section>

      {/* Techy Footer */}
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
                <Link href="/login" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Annita Ecosystem</Link>
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
