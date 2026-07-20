'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import NewsletterSection from '@/components/newsletter-section'
import { Trash2, Mail, Phone, MessageSquare, Cookie, Smartphone, Globe, Shield, Settings, Clock, FileText } from 'lucide-react'
import { useState } from 'react'
import { HoneypotField } from '@/components/HoneypotField'
import { submitAccountDeletionRequest } from '@/lib/api'

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
            <span className="text-[var(--color-text-primary)] tracking-[0.05em]">Cookie</span>
            <span className="text-[var(--color-text-primary)] tracking-[0.05em] ml-4">Policy.</span>
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
        <div className="max-w-[1400px] mx-auto space-y-8">
          {/* 1. What Are Cookies? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Cookie className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">1. What Are Cookies?</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Cookies are small text files that are placed on your device when you visit our website or use our mobile applications. They help us provide you with a better experience by allowing the website to remember your preferences, maintain your session, and understand how you use our services.
            </p>
            <p className="text-[var(--color-text-secondary)]">
              Cookies are widely used to make websites work efficiently and to provide information to site owners. Cookies do not contain viruses, cannot install malware on your device, and do not damage your device. However, they do store personal data, which is why we are transparent about their use.
            </p>
          </motion.div>

          {/* 2. Types of Cookies We Use */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Settings className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">2. Types of Cookies We Use</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-6">
              We categorize cookies into four types based on their purpose and duration:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-border-card)]">
                    <th className="text-left py-3 px-4 text-[var(--color-text-primary)] font-bold">Cookie Name</th>
                    <th className="text-left py-3 px-4 text-[var(--color-text-primary)] font-bold">Type</th>
                    <th className="text-left py-3 px-4 text-[var(--color-text-primary)] font-bold">Purpose</th>
                    <th className="text-left py-3 px-4 text-[var(--color-text-primary)] font-bold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--color-text-secondary)]">
                  <tr className="border-b border-[var(--color-border-card)]/50">
                    <td className="py-3 px-4 font-mono text-xs">annita_session</td>
                    <td className="py-3 px-4">Essential</td>
                    <td className="py-3 px-4">Maintains your logged-in session</td>
                    <td className="py-3 px-4">Session (deleted on logout)</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border-card)]/50">
                    <td className="py-3 px-4 font-mono text-xs">annita_token</td>
                    <td className="py-3 px-4">Essential</td>
                    <td className="py-3 px-4">Authentication token for API requests</td>
                    <td className="py-3 px-4">7 days</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border-card)]/50">
                    <td className="py-3 px-4 font-mono text-xs">annita_theme</td>
                    <td className="py-3 px-4">Preference</td>
                    <td className="py-3 px-4">Remembers your dark/light theme choice</td>
                    <td className="py-3 px-4">365 days</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border-card)]/50">
                    <td className="py-3 px-4 font-mono text-xs">annita_lang</td>
                    <td className="py-3 px-4">Preference</td>
                    <td className="py-3 px-4">Remembers your selected language</td>
                    <td className="py-3 px-4">365 days</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border-card)]/50">
                    <td className="py-3 px-4 font-mono text-xs">annita_consent</td>
                    <td className="py-3 px-4">Essential</td>
                    <td className="py-3 px-4">Records your cookie consent preferences</td>
                    <td className="py-3 px-4">180 days</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border-card)]/50">
                    <td className="py-3 px-4 font-mono text-xs">_ga</td>
                    <td className="py-3 px-4">Analytics</td>
                    <td className="py-3 px-4">Google Analytics — distinguishes unique users</td>
                    <td className="py-3 px-4">2 years</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border-card)]/50">
                    <td className="py-3 px-4 font-mono text-xs">_ga_XXXXXX</td>
                    <td className="py-3 px-4">Analytics</td>
                    <td className="py-3 px-4">Google Analytics 4 — session state</td>
                    <td className="py-3 px-4">2 years</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-xs">annita_cart</td>
                    <td className="py-3 px-4">Functionality</td>
                    <td className="py-3 px-4">Remembers items in your shopping cart</td>
                    <td className="py-3 px-4">30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[var(--color-text-tertiary)] text-xs mt-4">
              Note: This table may not include cookies set by third-party services. Third-party cookies are governed by their respective privacy policies.
            </p>
          </motion.div>

          {/* 3. Cookie Categories Explained */}
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
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">3. Cookie Categories Explained</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[var(--color-text-primary)] font-semibold mb-2">Essential Cookies</p>
                <p className="text-[var(--color-text-secondary)]">Required for the website to function properly. These cookies enable core functionality such as security, network management, accessibility, and your session. The website cannot function properly without these cookies, so they cannot be disabled.</p>
              </div>
              <div>
                <p className="text-[var(--color-text-primary)] font-semibold mb-2">Preference Cookies</p>
                <p className="text-[var(--color-text-secondary)]">Remember your settings and preferences — such as language, theme (dark/light mode), and display options — to provide a more personalized experience. These cookies are optional and can be disabled.</p>
              </div>
              <div>
                <p className="text-[var(--color-text-primary)] font-semibold mb-2">Analytics Cookies</p>
                <p className="text-[var(--color-text-secondary)]">Help us understand how visitors use our website and mobile apps by collecting anonymous analytics data. This data is aggregated and used to improve performance, fix bugs, and enhance user experience. We use Google Analytics 4 for this purpose.</p>
              </div>
              <div>
                <p className="text-[var(--color-text-primary)] font-semibold mb-2">Functionality Cookies</p>
                <p className="text-[var(--color-text-secondary)]">Remember your choices — such as items in your shopping cart, recently viewed products, and form data — to provide enhanced and more personalized features. These cookies are optional.</p>
              </div>
            </div>
          </motion.div>

          {/* 4. Mobile App Tracking */}
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
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">4. Mobile App Tracking Technologies</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Our mobile applications use technologies similar to cookies to provide functionality and analytics:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li><strong className="text-[var(--color-text-primary)]">Local Storage:</strong> Stores your session data, cart contents, and preferences on your device for offline-first functionality</li>
              <li><strong className="text-[var(--color-text-primary)]">Secure Keychain (iOS) / Keystore (Android):</strong> Stores authentication tokens and credentials securely in the device's encrypted storage</li>
              <li><strong className="text-[var(--color-text-primary)]">Firebase Analytics SDK:</strong> Collects anonymous usage data (screen views, events, session duration) to help us improve the app</li>
              <li><strong className="text-[var(--color-text-primary)]">Sentry SDK:</strong> Collects crash reports and performance data when errors occur, including device model, OS version, and stack traces</li>
              <li><strong className="text-[var(--color-text-primary)]">Apple Advertising Identifier (IDFA) / Google Advertising ID (AAID):</strong> We do <strong className="text-[var(--color-text-primary)]">not</strong> collect or use these identifiers for advertising tracking</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              You can reset the advertising identifier on your device at any time through Settings &gt; Privacy &gt; Advertising (iOS) or Settings &gt; Google &gt; Ads (Android).
            </p>
          </motion.div>

          {/* 5. Third-Party Cookies & SDKs */}
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
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">5. Third-Party Cookies & SDKs</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              We use the following third-party services that may set cookies or use tracking technologies on your device:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li><strong className="text-[var(--color-text-primary)]">Google Analytics 4:</strong> Web analytics — <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Google's Cookie Policy</a></li>
              <li><strong className="text-[var(--color-text-primary)]">Firebase:</strong> Mobile app analytics and crash reporting — <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Firebase Privacy Policy</a></li>
              <li><strong className="text-[var(--color-text-primary)]">Sentry:</strong> Error tracking and performance monitoring — <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Sentry Privacy Policy</a></li>
              <li><strong className="text-[var(--color-text-primary)]">Resend:</strong> Email delivery service — <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Resend Privacy Policy</a></li>
              <li><strong className="text-[var(--color-text-primary)]">Apple Sign-In / Google Sign-In:</strong> Authentication providers that may set cookies on their own domains</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              We encourage you to review the privacy policies of these third parties to understand how they use cookies and tracking technologies.
            </p>
          </motion.div>

          {/* 6. Managing Cookies in Your Browser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Settings className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">6. Managing Cookies in Your Browser</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              You can control and manage cookies through your browser settings. Here are instructions for the most popular browsers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { browser: 'Google Chrome', instructions: 'Settings > Privacy and security > Cookies and other site data' },
                { browser: 'Safari (macOS)', instructions: 'Safari > Preferences > Privacy > Manage cookies and website data' },
                { browser: 'Mozilla Firefox', instructions: 'Settings > Privacy & Security > Cookies and Site Data' },
                { browser: 'Microsoft Edge', instructions: 'Settings > Cookies and site permissions > Cookies and site data' },
                { browser: 'Opera', instructions: 'Settings > Privacy & security > Cookies' },
                { browser: 'Safari (iOS)', instructions: 'Settings > Safari > Privacy & Security > Block All Cookies' },
              ].map((browser) => (
                <div key={browser.browser} className="p-4 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/20">
                  <p className="text-[var(--color-text-primary)] font-semibold text-sm mb-1">{browser.browser}</p>
                  <p className="text-[var(--color-text-tertiary)] text-xs font-mono">{browser.instructions}</p>
                </div>
              ))}
            </div>
            <p className="text-[var(--color-text-secondary)] mt-4">
              Please note that disabling essential cookies may affect the functionality of our website. You may not be able to log in, make purchases, or access certain features.
            </p>
          </motion.div>

          {/* 7. Cookie Duration & Expiration */}
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
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">7. Cookie Duration & Expiration</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Cookies are categorized by how long they remain on your device:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li><strong className="text-[var(--color-text-primary)]">Session Cookies:</strong> Temporary cookies that expire when you close your browser. Used for maintaining your session during a single visit</li>
              <li><strong className="text-[var(--color-text-primary)]">Persistent Cookies:</strong> Remain on your device for a set period or until you manually delete them. Used for remembering preferences and analytics</li>
              <li><strong className="text-[var(--color-text-primary)]">First-Party Cookies:</strong> Set by Annita directly on our domain. These are the cookies listed in the table above</li>
              <li><strong className="text-[var(--color-text-primary)]">Third-Party Cookies:</strong> Set by external services (Google Analytics, Firebase) on their own domains. We have limited control over these cookies</li>
            </ul>
          </motion.div>

          {/* 8. Your Cookie Consent */}
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
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">8. Your Cookie Consent</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              When you first visit our website, we display a cookie consent banner that allows you to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li><strong className="text-[var(--color-text-primary)]">Accept All:</strong> Consent to all cookie categories, including analytics and functionality cookies</li>
              <li><strong className="text-[var(--color-text-primary)]">Essential Only:</strong> Only allow essential cookies required for the website to function</li>
              <li><strong className="text-[var(--color-text-primary)]">Manage Preferences:</strong> Selectively enable or disable individual cookie categories</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              Your consent is stored in the <code className="text-xs font-mono text-[var(--color-accent)]">annita_consent</code> cookie for 180 days. After that period, the consent banner will reappear. You can also withdraw your consent at any time by clearing your browser cookies or contacting us.
            </p>
          </motion.div>

          {/* 9. Updates to This Policy */}
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
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">9. Updates to This Policy</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices, technologies, or for other operational, legal, or regulatory reasons. When we update this policy:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>We will update the "Last Updated" date at the bottom of this page</li>
              <li>Material changes will trigger a new cookie consent banner for existing users</li>
              <li>The previous version will be available upon request</li>
              <li>We encourage you to review this policy periodically</li>
            </ul>
          </motion.div>

          {/* 10. Contact Us */}
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
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">10. Contact Us</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="space-y-2 text-[var(--color-text-secondary)]">
              <p><strong className="text-[var(--color-text-primary)]">Email:</strong> <a href="mailto:privacy@an-nita.com" className="text-[var(--color-accent)] hover:underline">privacy@an-nita.com</a></p>
              <p><strong className="text-[var(--color-text-primary)]">Phone/WhatsApp:</strong> +231 886 213 748</p>
              <p><strong className="text-[var(--color-text-primary)]">Mail:</strong> Annita LLC, Data Protection Officer, Monrovia, Liberia</p>
            </div>
            <div className="mt-6 pt-6 border-t border-[var(--color-border-card)]">
              <p className="text-sm text-[var(--color-text-muted)]">
                Last Updated: July 2026
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
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
