'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Shield, Lock, Eye, Trash2, Mail, Phone, MessageSquare, Globe, Clock, Baby, Smartphone, Bell, FileText, Building2, Share2, Database } from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'
import Navigation from '@/components/navigation'
import NewsletterSection from '@/components/newsletter-section'
import { HoneypotField } from '@/components/HoneypotField'
import { submitAccountDeletionRequest } from '@/lib/api'

export default function PrivacyPage() {
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
      const result = await submitAccountDeletionRequest(formData as any)
      if (result.success) {
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
            <Shield className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-[10px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">
              Privacy // <span className="text-[var(--color-accent)] font-bold">SECURE</span>
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--color-text-primary)] tracking-[0.05em]" style={{ fontFamily: 'var(--font-syne)' }}>
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Your privacy is our priority. Learn how we collect, use, and protect your data across all Annita services.
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="px-4 md:px-8 py-16 max-w-[1600px] mx-auto">
        <div className="max-w-[1400px] mx-auto space-y-16">
          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-accent)]/20 rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Quick Navigation</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {[
                '1. Information We Collect',
                '2. How We Use Your Information',
                '3. Information Sharing & Disclosure',
                '4. Data Retention',
                '5. International Data Transfers',
                '6. Children\u2019s Privacy',
                '7. Mobile App Privacy',
                '8. Data Security',
                '9. Data Breach Notification',
                '10. Your Privacy Rights',
                '11. CCPA & CPRA Rights',
                '12. African Data Protection',
                '13. Cookies & Tracking',
                '14. Changes to This Policy',
                '15. Contact for Privacy',
              ].map((item) => (
                <div key={item} className="text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors cursor-default">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* 1. Data Collection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Eye className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">1. Information We Collect</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us. This includes:
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-[var(--color-text-primary)] font-semibold mb-2">Information You Provide</p>
                <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
                  <li>Personal information (full name, email address, phone number, business name)</li>
                  <li>Account credentials and authentication data</li>
                  <li>Profile photo and business logo uploads</li>
                  <li>Product listings, descriptions, and images (Marketplace sellers)</li>
                  <li>Messages and communications with other users or customer support</li>
                  <li>Payment information (processed securely through third-party providers — we do not store full card numbers)</li>
                </ul>
              </div>
              <div>
                <p className="text-[var(--color-text-primary)] font-semibold mb-2">Information Collected Automatically</p>
                <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
                  <li>Device information (model, OS version, unique device identifier, screen resolution)</li>
                  <li>IP address and approximate location (city/country level)</li>
                  <li>Usage data (pages visited, features used, time spent, tap/click interactions)</li>
                  <li>Crash reports and performance diagnostics (via Sentry)</li>
                  <li>Camera and photo library access (only when you choose to upload images)</li>
                  <li>Location data (only when you enable location-based features, such as nearby sellers)</li>
                </ul>
              </div>
              <div>
                <p className="text-[var(--color-text-primary)] font-semibold mb-2">Information from Third Parties</p>
                <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
                  <li>Apple Sign-In / Google Sign-In data (name, email) when you use these authentication methods</li>
                  <li>Payment verification data from banks and mobile money operators</li>
                  <li>Logistics tracking data from delivery partners</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 2. How We Use Your Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Lock className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">2. How We Use Your Information</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              We use your information to provide, maintain, and improve our services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>Processing transactions and payments</li>
              <li>Providing customer support</li>
              <li>Sending important notifications about your account</li>
              <li>Analyzing usage patterns to improve our services</li>
              <li>Ensuring security and preventing fraud</li>
              <li>Complying with legal obligations</li>
            </ul>
          </motion.div>

          {/* 3. Information Sharing & Disclosure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Share2 className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">3. Information Sharing & Disclosure</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              We do not sell your personal data. We may share your information with the following categories of recipients, only as necessary to provide our Services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li><strong className="text-[var(--color-text-primary)]">Service Providers:</strong> Payment processors, cloud hosting (Railway, Vercel), email delivery (Resend), and analytics providers — all bound by data processing agreements</li>
              <li><strong className="text-[var(--color-text-primary)]">Logistics Partners:</strong> Delivery companies receiving order fulfillment details (name, address, phone) for shipments</li>
              <li><strong className="text-[var(--color-text-primary)]">Marketplace Participants:</strong> Buyers and sellers see each other's names and contact details for transactions they are party to</li>
              <li><strong className="text-[var(--color-text-primary)]">Legal Authorities:</strong> When required by law, court order, or government regulation, including anti-fraud and AML investigations</li>
              <li><strong className="text-[var(--color-text-primary)]">Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, user data may be transferred as a business asset</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              We never share your data for advertising purposes with third-party ad networks.
            </p>
          </motion.div>

          {/* 4. Data Retention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">4. Data Retention</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li><strong className="text-[var(--color-text-primary)]">Active Accounts:</strong> Data is retained while your account is active and up to 90 days after deletion request</li>
              <li><strong className="text-[var(--color-text-primary)]">Transaction Records:</strong> Financial transaction data is retained for 7 years per Liberian financial regulations</li>
              <li><strong className="text-[var(--color-text-primary)]">Marketplace Listings:</strong> Product listings are retained for 1 year after removal for dispute resolution</li>
              <li><strong className="text-[var(--color-text-primary)]">Communications:</strong> Support tickets and messages retained for 2 years</li>
              <li><strong className="text-[var(--color-text-primary)]">Analytics Data:</strong> Aggregated, anonymized analytics retained indefinitely; individual-level data deleted after 26 months</li>
              <li><strong className="text-[var(--color-text-primary)]">Security Logs:</strong> IP addresses and access logs retained for 1 year for fraud prevention</li>
            </ul>
          </motion.div>

          {/* 5. International Data Transfers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Globe className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">5. International Data Transfers</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Annita LLC is headquartered in Liberia, but our cloud infrastructure and third-party service providers may process data in other countries, including the United States, European Union, and South Africa.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>We ensure all international transfers comply with applicable data protection laws</li>
              <li>For EU/EEA users, we rely on Standard Contractual Clauses (SCCs) for data transfers to non-adequate countries</li>
              <li>For users in countries with data localization requirements, we work to store data within the required jurisdiction where technically feasible</li>
              <li>You acknowledge that by using our Services, your data may be processed in countries with different data protection standards than your country of residence</li>
            </ul>
          </motion.div>

          {/* 6. Children's Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Baby className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">6. Children's Privacy</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Our Services are not directed to children under 18 years of age. We do not knowingly collect personal information from children under 18.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>If you are a parent or guardian and believe your child has provided us with personal data, contact us immediately at <a href="mailto:privacy@an-nita.com" className="text-[var(--color-accent)] hover:underline">privacy@an-nita.com</a></li>
              <li>We will take steps to delete such information and terminate the child's account</li>
              <li>We comply with the U.S. Children's Online Privacy Protection Act (COPPA) and the EU General Data Protection Regulation (GDPR) provisions regarding minors</li>
              <li>For users aged 13-17 in jurisdictions where parental consent is required, we seek verifiable parental consent before collecting personal data</li>
            </ul>
          </motion.div>

          {/* 7. Mobile App Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">7. Mobile App Privacy</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Our iOS and Android applications request certain permissions to provide full functionality. Below is a detailed explanation of each permission and how we use it:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li><strong className="text-[var(--color-text-primary)]">Camera:</strong> Used only when you choose to take photos for product listings, profile pictures, or support tickets. We do not access your camera without your explicit action</li>
              <li><strong className="text-[var(--color-text-primary)]">Photo Library:</strong> Used only when you choose to upload existing photos. We do not browse your photo library without your permission</li>
              <li><strong className="text-[var(--color-text-primary)]">Location:</strong> Used for location-based features such as finding nearby sellers, delivery address auto-fill, and marketplace discovery. You can disable this at any time in your device settings</li>
              <li><strong className="text-[var(--color-text-primary)]">Push Notifications:</strong> Used for order updates, payment confirmations, and important account alerts. You can customize notification preferences in app settings</li>
              <li><strong className="text-[var(--color-text-primary)]">Storage:</strong> Used for offline-first caching so you can browse listings and manage orders without an internet connection</li>
              <li><strong className="text-[var(--color-text-primary)]">Biometric (Face ID/Touch ID/Fingerprint):</strong> Used for optional secure login. Biometric data never leaves your device and is not stored on our servers</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              <strong className="text-[var(--color-text-primary)]">SDK Disclosures:</strong> Our apps integrate the following third-party SDKs: Firebase (analytics, crash reporting), Sentry (error tracking), and Resend (email delivery). Each SDK collects data in accordance with its own privacy policy.
            </p>
          </motion.div>

          {/* 8. Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">8. Data Security</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication systems</li>
              <li>Secure data storage with reputable cloud providers</li>
              <li>Compliance with GDPR and other privacy regulations</li>
            </ul>
          </motion.div>

          {/* 9. Data Breach Notification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Bell className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">9. Data Breach Notification</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>Notify affected users within 72 hours of becoming aware of the breach, in accordance with GDPR Article 34</li>
              <li>Provide details of the breach, the likely consequences, and the measures we are taking to address it</li>
              <li>Notify the relevant data protection authorities where required by law</li>
              <li>Take immediate steps to contain the breach, investigate its cause, and prevent recurrence</li>
              <li>Provide ongoing updates as new information becomes available</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              Our incident response plan is tested quarterly, and all staff are trained on breach reporting procedures.
            </p>
          </motion.div>

          {/* 10. Your Privacy Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">10. Your Privacy Rights</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Under GDPR and other privacy regulations, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              To exercise any of these rights, contact us at <a href="mailto:privacy@an-nita.com" className="text-[var(--color-accent)] hover:underline">privacy@an-nita.com</a>. We will respond to your request within 30 days.
            </p>
          </motion.div>

          {/* 11. CCPA & CPRA Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">11. CCPA & CPRA Rights</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              If you are a California resident, the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) grant you additional rights:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li><strong className="text-[var(--color-text-primary)]">Right to Know:</strong> Request disclosure of the categories and specific pieces of personal data we collect</li>
              <li><strong className="text-[var(--color-text-primary)]">Right to Delete:</strong> Request deletion of your personal data (subject to legal exceptions)</li>
              <li><strong className="text-[var(--color-text-primary)]">Right to Correct:</strong> Request correction of inaccurate personal information</li>
              <li><strong className="text-[var(--color-text-primary)]">Right to Opt-Out:</strong> Opt-out of the sale or sharing of your personal data (we do not sell your data)</li>
              <li><strong className="text-[var(--color-text-primary)]">Right to Limit:</strong> Limit the use of sensitive personal information for secondary purposes</li>
              <li><strong className="text-[var(--color-text-primary)]">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              Submit CCPA/CPRA requests to <a href="mailto:privacy@an-nita.com" className="text-[var(--color-accent)] hover:underline">privacy@an-nita.com</a> with the subject line "CCPA Request."
            </p>
          </motion.div>

          {/* 12. African Data Protection Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">12. African Data Protection Compliance</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              As a Liberia-headquartered company serving users across Africa, we are committed to complying with emerging African data protection frameworks:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li><strong className="text-[var(--color-text-primary)]">Nigeria (NDPA 2023):</strong> We comply with the Nigeria Data Protection Act for Nigerian users</li>
              <li><strong className="text-[var(--color-text-primary)]">Kenya (Data Protection Act 2019):</strong> We register cross-border data processing as required for Kenyan users</li>
              <li><strong className="text-[var(--color-text-primary)]">South Africa (POPIA):</strong> We comply with the Protection of Personal Information Act for South African users</li>
              <li><strong className="text-[var(--color-text-primary)]">Ghana (Data Protection Act 2012):</strong> We register with the Ghana Data Protection Commission as a data controller</li>
              <li><strong className="text-[var(--color-text-primary)]">AU Convention on Cyber Security:</strong> We align with the Malabo Convention principles for data protection</li>
              <li><strong className="text-[var(--color-text-primary)]">Liberia:</strong> We comply with all applicable Liberian data and telecommunications regulations</li>
            </ul>
          </motion.div>

          {/* 13. Cookies & Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Database className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">13. Cookies & Tracking Technologies</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              We use cookies and similar tracking technologies (web beacons, pixels, SDKs) to operate and improve our Services. For detailed information about the specific cookies we use and how to manage them, please review our <Link href="/cookies" className="text-[var(--color-accent)] hover:underline">Cookie Policy</Link>.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li><strong className="text-[var(--color-text-primary)]">Essential Cookies:</strong> Required for authentication, security, and core functionality</li>
              <li><strong className="text-[var(--color-text-primary)]">Analytics Cookies:</strong> Help us understand how users interact with our Services (anonymized)</li>
              <li><strong className="text-[var(--color-text-primary)]">Preference Cookies:</strong> Remember your language, theme, and display settings</li>
              <li><strong className="text-[var(--color-text-primary)]">Mobile SDKs:</strong> Firebase and Sentry SDKs collect device-level analytics and crash data</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              We do not use cookies for targeted advertising. You can control cookies through your browser settings or our cookie consent banner.
            </p>
          </motion.div>

          {/* 14. Changes to This Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">14. Changes to This Policy</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we do:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>We will update the "Last Updated" date at the bottom of this page</li>
              <li>Material changes will be communicated via email or in-app notification at least 30 days before taking effect</li>
              <li>The previous version will be available upon request</li>
              <li>Continued use of our Services after changes take effect constitutes acceptance of the updated policy</li>
            </ul>
          </motion.div>

          {/* 15. Contact for Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">15. Contact for Privacy</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our Data Protection Officer:
            </p>
            <div className="space-y-2 text-[var(--color-text-secondary)]">
              <p><strong className="text-[var(--color-text-primary)]">Email:</strong> <a href="mailto:privacy@an-nita.com" className="text-[var(--color-accent)] hover:underline">privacy@an-nita.com</a></p>
              <p><strong className="text-[var(--color-text-primary)]">Phone/WhatsApp:</strong> +231 886 213 748</p>
              <p><strong className="text-[var(--color-text-primary)]">Mail:</strong> Annita LLC, Data Protection Officer, Monrovia, Liberia</p>
            </div>
            <p className="text-[var(--color-text-secondary)] mt-4">
              You also have the right to lodge a complaint with your local data protection authority if you believe our processing of your personal data infringes applicable laws.
            </p>
          </motion.div>

          {/* Account Deletion Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-accent)]/30 rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Request Account Deletion</h2>
                <p className="text-sm text-[var(--color-text-tertiary)]">Submit a request to delete your account and associated data</p>
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
          title="Stay Informed on Privacy Updates"
          subtitle="Important updates to our privacy practices, policy changes, and data protection announcements delivered to your inbox."
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
                <Link href="/security" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Security &amp; Fraud Awareness</Link>
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
