'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Handshake, Building2, Mail, Phone, FileText, Upload, Globe, MessageSquare, CheckCircle, Package, DollarSign, Wrench, type LucideIcon } from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'
import Navigation from '@/components/navigation'
import NewsletterSection from '@/components/newsletter-section'
import { HoneypotField } from '@/components/HoneypotField'
import { submitPartnershipInquiry } from '@/lib/api'

export default function PartnershipsPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: 'technology',
    companyDescription: '',
    partnershipGoals: '',
    mouDocumentUrl: '',
    proposedTerms: '',
    additionalNotes: '',
    website_url: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const result = await submitPartnershipInquiry(formData)
      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          partnershipType: 'technology',
          companyDescription: '',
          partnershipGoals: '',
          mouDocumentUrl: '',
          proposedTerms: '',
          additionalNotes: '',
          website_url: ''
        })
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

  const partnershipTypes: { value: string; label: string; icon: LucideIcon; description: string }[] = [
    { value: 'technology', label: 'Technology Partnership', icon: Wrench, description: 'Joint development, API integration, technical collaboration' },
    { value: 'distribution', label: 'Distribution Partnership', icon: Package, description: 'Market expansion, channel partnerships, reseller agreements' },
    { value: 'investment', label: 'Investment Partnership', icon: DollarSign, description: 'Strategic investment, venture capital, funding opportunities' },
    { value: 'other', label: 'Other Partnership', icon: Handshake, description: 'Custom partnership arrangements and collaborations' }
  ]

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
        
        <span className="absolute top-8 left-8 w-6 h-6 border-t border-l border-[var(--color-accent)]/20" />
        <span className="absolute top-8 right-8 w-6 h-6 border-t border-r border-[var(--color-accent)]/20" />
        <span className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-[var(--color-accent)]/20" />
        <span className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-[var(--color-accent)]/20" />

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
            <Handshake className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-[10px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">
              Partnerships // <span className="text-[var(--color-accent)] font-bold">COLLABORATE</span>
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
            <span className="gradient-text">Partner with</span><br />
            <span className="gradient-text">Annita</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Build strategic partnerships to drive innovation and growth across Africa's digital landscape. Together, we can shape the continent's digital future.
          </p>
        </motion.div>
      </section>

      {/* Partnership Types */}
      <section className="px-4 md:px-8 py-16 max-w-[1600px] mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
            Partnership Opportunities
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Explore different ways to collaborate with Annita and contribute to Africa's digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {partnershipTypes.map((type) => (
            <motion.div
              key={type.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm hover:border-[var(--color-accent)]/30 transition-all cursor-pointer group relative overflow-hidden"
              onClick={() => setFormData({ ...formData, partnershipType: type.value })}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-accent)]/10 transition-colors" />
              <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20 flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-all">
                    <type.icon className="w-6 h-6 text-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-colors" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{type.label}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{type.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-[var(--color-accent)]/30 rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />
          <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--color-accent)]/50" />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--color-accent)]/50" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[var(--color-accent)]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Submit Partnership Inquiry</h2>
              <p className="text-sm text-[var(--color-text-tertiary)]">Tell us about your company and partnership goals</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <HoneypotField onChange={(value) => setFormData(prev => ({ ...prev, website_url: value }))} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  placeholder="Your Company Ltd."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  placeholder="contact@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  placeholder="+231 ..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                Partnership Type *
              </label>
              <select
                required
                value={formData.partnershipType}
                onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
              >
                {partnershipTypes.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                Company Description *
              </label>
              <textarea
                required
                value={formData.companyDescription}
                onChange={(e) => setFormData({ ...formData, companyDescription: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your company, your mission, and what you do..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                Partnership Goals *
              </label>
              <textarea
                required
                value={formData.partnershipGoals}
                onChange={(e) => setFormData({ ...formData, partnershipGoals: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
                placeholder="What are your goals partnering with Annita? What outcomes are you looking for?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                MOU Document URL (Optional)
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-tertiary)]" />
                <input
                  type="url"
                  value={formData.mouDocumentUrl}
                  onChange={(e) => setFormData({ ...formData, mouDocumentUrl: e.target.value })}
                  className="w-full pl-10 px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  placeholder="https://drive.google.com/..."
                />
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)] mt-1">Upload your MOU or partnership document to Google Drive and paste the link here</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                Proposed Terms (Optional)
              </label>
              <textarea
                value={formData.proposedTerms}
                onChange={(e) => setFormData({ ...formData, proposedTerms: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
                placeholder="Any specific terms or conditions you'd like to propose..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                rows={2}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
                placeholder="Any other information you'd like to share..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-500 text-sm">
                Partnership inquiry submitted successfully! Our team will review your submission and get back to you.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm">
                An error occurred. Please try again or contact customer support.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] rounded-lg font-semibold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Partnership Inquiry'}
            </button>
          </form>

          {/* WhatsApp Contact */}
          <div className="mt-6 pt-6 border-t border-[var(--color-border-card)]">
            <p className="text-sm text-[var(--color-text-tertiary)] mb-3">
              Need immediate assistance? Contact our partnerships team via WhatsApp:
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
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <NewsletterSection
          title="Explore Partnership Opportunities"
          subtitle="Stay informed about new partnership programs, ecosystem integrations, and strategic collaboration opportunities with Annita."
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
