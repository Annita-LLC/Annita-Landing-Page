'use client'

import { motion } from 'framer-motion'
import {
  ShieldAlert, KeyRound, Mail, Phone, BadgeCheck, LifeBuoy,
  Lock, Eye, FileText, AlertTriangle, CheckCircle, XCircle, Globe,
} from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'
import Navigation from '@/components/navigation'
import NewsletterSection from '@/components/newsletter-section'

export default function SecurityPage() {
  const redFlags = [
    'Urgent or threatening language — "Your account will be suspended in 24 hours"',
    'Requests for your password, OTP, PIN, or full card number',
    'Links to websites that look like Annita but have a different URL',
    'Unsolicited messages claiming you won a prize or lottery',
    'Requests to send money to "verify" or "unlock" your account',
    'Messages from email addresses that do not end in @an-nita.com',
    'Calls from people claiming to be Annita staff but who pressure you to act fast',
    'Requests to install remote access software on your device',
  ]

  const dosAndDonts = [
    { type: 'do', icon: CheckCircle, title: 'Verify the sender', text: 'Check that emails come from @an-nita.com. If unsure, contact us directly using official channels.' },
    { type: 'do', icon: CheckCircle, title: 'Contact customer service', text: 'When in doubt, reach out. Our team is always willing to help verify any message, call, or email you receive.' },
    { type: 'do', icon: CheckCircle, title: 'Use official channels only', text: 'Only access Annita services through our official website (an-nita.com) or our verified mobile apps on the App Store and Google Play.' },
    { type: 'do', icon: CheckCircle, title: 'Enable two-factor authentication', text: 'Protect your account with 2FA. This adds an extra layer of security even if your password is compromised.' },
    { type: 'dont', icon: XCircle, title: 'Never share your password', text: 'Annita will never ask for your password, OTP, PIN, full card number, or verification codes — not by phone, email, SMS, or social media.' },
    { type: 'dont', icon: XCircle, title: 'Don\'t click suspicious links', text: 'Avoid clicking links in unsolicited emails or SMS. Type the official URL directly into your browser instead.' },
    { type: 'dont', icon: XCircle, title: 'Don\'t be pressured', text: 'Scammers create false urgency. Take your time. A legitimate Annita representative will never rush you into making a decision.' },
    { type: 'dont', icon: XCircle, title: 'Don\'t send money to "verify"', text: 'Annita will never ask you to send money, gift cards, or cryptocurrency to verify your identity or unlock your account.' },
  ]

  const verifiedChannels = [
    { label: 'Official Website', value: 'www.an-nita.com', icon: Globe },
    { label: 'Customer Support Email', value: 'support@an-nita.com', icon: Mail },
    { label: 'WhatsApp', value: '+231 886 213 748', icon: Phone },
    { label: 'WhatsApp (Alternate)', value: '+231 775 057 227', icon: Phone },
    { label: 'Privacy Email', value: 'privacy@an-nita.com', icon: Mail },
    { label: 'Legal Email', value: 'legal@an-nita.com', icon: Mail },
  ]

  return (
    <div className="min-h-screen tech-grid theme-bg">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center px-4 md:px-8 py-16 md:py-20 overflow-hidden tech-scanline">
        <div className="absolute inset-0 tech-grid opacity-[0.08]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% -20%, rgba(239, 68, 68, 0.12), transparent 70%)' }} />
        <span className="absolute top-8 left-8 w-6 h-6 border-t border-l border-red-500/20" />
        <span className="absolute top-8 right-8 w-6 h-6 border-t border-r border-red-500/20" />
        <span className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-red-500/20" />
        <span className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-red-500/20" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="inline-flex items-center gap-4 px-3 py-1.5 rounded-md mb-8 border border-red-500/20 bg-[var(--color-surface-card)]/60 backdrop-blur-md relative overflow-hidden group">
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-red-500/50" />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-red-500/50" />
            <ShieldAlert className="w-4 h-4 text-red-500" />
            <span className="text-[10px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">Security // <span className="text-red-500 font-bold">FRAUD AWARENESS</span></span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--color-text-primary)] tracking-[0.05em]" style={{ fontFamily: 'var(--font-syne)' }}>Stay Safe from Scams</h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">Annita will never ask you for your password, OTP, PIN, or full card number. Learn how to spot fraud and protect yourself.</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="px-4 md:px-8 py-16 max-w-[1600px] mx-auto">
        <div className="max-w-[1400px] mx-auto space-y-16">
          {/* Quick Nav */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-red-500/20 rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <FileText className="w-5 h-5 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Quick Navigation</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {['1. Our Promise to You', '2. How to Spot a Scam', '3. Do\'s and Don\'ts', '4. Verified Annita Channels', '5. What to Do If You\'re Targeted', '6. Report a Scam'].map((item) => (
                <div key={item} className="text-[var(--color-text-tertiary)] hover:text-red-500 transition-colors cursor-default">{item}</div>
              ))}
            </div>
          </motion.div>

          {/* 1. Our Promise */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center"><Lock className="w-5 h-5 text-[var(--color-accent)]" /></div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">1. Our Promise to You</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">At Annita, your security is our highest priority. We are committed to protecting you from fraud, phishing, and scams. Here is what you need to know:</p>
            <ul className="space-y-3 text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-3"><KeyRound className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /><span><strong className="text-[var(--color-text-primary)]">We will never ask for your password, OTP, PIN, or full card number</strong> — by phone, email, SMS, WhatsApp, or social media. Not now, not ever.</span></li>
              <li className="flex items-start gap-3"><BadgeCheck className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" /><span><strong className="text-[var(--color-text-primary)]">Always look for verified Annita emails</strong> — legitimate Annita emails will always come from an <code className="text-[var(--color-accent)]">@an-nita.com</code> domain.</span></li>
              <li className="flex items-start gap-3"><BadgeCheck className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" /><span><strong className="text-[var(--color-text-primary)]">Always verify phone numbers</strong> — only trust the official numbers listed on this page. Scammers can spoof caller ID to make fake numbers look real.</span></li>
              <li className="flex items-start gap-3"><LifeBuoy className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" /><span><strong className="text-[var(--color-text-primary)]">Always reach out to customer service to verify</strong> — our team is always willing to help. If you receive any suspicious message or call, contact us before taking any action.</span></li>
              <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /><span><strong className="text-[var(--color-text-primary)]">Don&apos;t fall for scams or phishing attacks</strong> — fraudsters use urgency, fear, and false promises to trick you. Stay calm, stay skeptical, and verify everything.</span></li>
            </ul>
          </motion.div>

          {/* 2. How to Spot a Scam */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)' }}><Eye className="w-5 h-5 text-red-500" /></div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">2. How to Spot a Scam</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">Scammers are becoming increasingly sophisticated. Watch out for these red flags:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {redFlags.map((flag, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/20">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /><span className="text-sm text-[var(--color-text-secondary)]">{flag}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3. Do's and Don'ts */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center"><ShieldAlert className="w-5 h-5 text-[var(--color-accent)]" /></div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">3. Do&apos;s and Don&apos;ts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dosAndDonts.map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: item.type === 'do' ? 'var(--color-accent)' + '/20' : 'rgba(239, 68, 68, 0.2)', backgroundColor: item.type === 'do' ? 'var(--color-accent-soft)' + '/20' : 'rgba(239, 68, 68, 0.04)' }}>
                  <item.icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: item.type === 'do' ? 'var(--color-accent)' : '#EF4444' }} />
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-1">{item.type === 'do' ? 'DO: ' : 'DON\'T: '}{item.title}</h3>
                    <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4. Verified Channels */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-[var(--color-accent)]/20 rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center"><BadgeCheck className="w-5 h-5 text-[var(--color-accent)]" /></div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">4. Verified Annita Channels</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">Only trust communications from these official Annita channels. If you receive a message from any other source claiming to be Annita, it is not legitimate.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {verifiedChannels.map((ch) => (
                <div key={ch.label} className="flex items-center gap-3 p-4 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/20">
                  <ch.icon className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-muted)]">{ch.label}</p>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">{ch.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 5. What to Do If Targeted */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center"><LifeBuoy className="w-5 h-5 text-[var(--color-accent)]" /></div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">5. What to Do If You&apos;re Targeted</h2>
            </div>
            <ol className="list-decimal list-inside space-y-3 text-[var(--color-text-secondary)]">
              <li><strong className="text-[var(--color-text-primary)]">Stop and don&apos;t respond.</strong> Do not reply to the message, click any links, or provide any information.</li>
              <li><strong className="text-[var(--color-text-primary)]">Contact Annita customer service immediately.</strong> Reach out via our verified WhatsApp numbers or email to confirm whether the communication is legitimate.</li>
              <li><strong className="text-[var(--color-text-primary)]">Change your password</strong> if you suspect your account may have been compromised. Enable two-factor authentication if you haven&apos;t already.</li>
              <li><strong className="text-[var(--color-text-primary)]">Report the scam.</strong> Forward suspicious emails to <a href="mailto:support@an-nita.com" className="text-[var(--color-accent)] hover:underline">support@an-nita.com</a> so we can investigate and warn other users.</li>
              <li><strong className="text-[var(--color-text-primary)]">Report to local authorities</strong> if you have lost money or personal information. In Liberia, contact the Liberia Telecommunications Authority or your local law enforcement.</li>
            </ol>
          </motion.div>

          {/* 6. Report a Scam */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-red-500/30 rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)' }}><AlertTriangle className="w-5 h-5 text-red-500" /></div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">6. Report a Scam</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">If you encounter a scam, phishing attempt, or suspicious activity impersonating Annita, report it to us immediately. Your report helps protect the entire Annita community.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="mailto:support@an-nita.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:brightness-110" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-foreground)' }}>
                <Mail className="w-4 h-4" /> Report via Email
              </a>
              <a href="https://wa.me/231886213748" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-[var(--color-border-card)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/50 transition-all">
                <Phone className="w-4 h-4" /> Report via WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Last Updated */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-sm text-[var(--color-text-tertiary)]">
            <p>Last Updated: July 2026</p>
            <p className="mt-2">Annita LLC © 2024-2026. All rights reserved.</p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <NewsletterSection title="Stay Informed About Security" subtitle="Receive important security alerts and fraud prevention tips to keep your account safe." />
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-[var(--color-border-card)]" style={{ backgroundColor: 'var(--color-surface-base)' }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none tech-grid" />
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
              <p className="text-xs text-[var(--color-text-tertiary)] mb-4 leading-relaxed">Annita is Africa&apos;s first all-in-one digital ecosystem, integrating e-commerce, fintech, AI, communication, marketing, logistics, and more into a single, connected system.</p>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">Legal</div>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Terms &amp; Conditions</Link>
                <Link href="/cookies" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Cookie Policy</Link>
                <Link href="/security" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Security &amp; Fraud Awareness</Link>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">Contact</div>
              <div className="space-y-2">
                <Link href="/contact" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Contact Us</Link>
                <Link href="/contact-sales" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Contact Sales</Link>
                <a href="mailto:support@an-nita.com" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Customer Support</a>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">Ecosystem</div>
              <div className="space-y-2">
                <Link href="/ecosystem" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Annita Ecosystem</Link>
                <a href="https://www.an-nitapay.com" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">AnnitaPay</a>
                <a href="https://www.an-nita-pulse.org" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Annita Pulse</a>
                <a href="https://www.ezri-africa.com" className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors">Ezri</a>
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
