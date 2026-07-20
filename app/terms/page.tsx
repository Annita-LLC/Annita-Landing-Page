'use client'

import { motion } from 'framer-motion'
import { FileText, Scale, AlertTriangle, Gavel, CheckCircle, Smartphone, CreditCard, RefreshCw, Users, Globe, Zap, Shield, Ban, BookOpen, Building2, ShieldAlert, KeyRound, BadgeCheck, LifeBuoy } from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'
import Navigation from '@/components/navigation'
import NewsletterSection from '@/components/newsletter-section'

export default function TermsPage() {
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
            <FileText className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-[10px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">
              Legal // <span className="text-[var(--color-accent)] font-bold">TERMS</span>
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--color-text-primary)] tracking-[0.05em]" style={{ fontFamily: 'var(--font-syne)' }}>
            Terms &amp; Conditions
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Please read these terms carefully before using any Annita services.
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="px-4 md:px-8 py-16 max-w-[1600px] mx-auto">
        <div className="max-w-[1400px] mx-auto space-y-16">
          {/* Table of Contents / Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-accent)]/20 rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Quick Navigation</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {[
                '1. Definitions',
                '2. Acceptance of Terms',
                '3. Eligibility',
                '4. Service Usage',
                '5. User Accounts',
                '6. Mobile Applications',
                '7. Subscriptions & Payments',
                '8. Refund Policy',
                '9. User-Generated Content',
                '10. Intellectual Property',
                '11. Prohibited Activities',
                '12. Third-Party Services',
                '13. Disclaimers',
                '14. Limitation of Liability',
                '15. Termination',
                '16. Dispute Resolution',
                '17. Force Majeure',
                '18. Fraud & Scam Prevention',
                '19. Changes to Terms',
              ].map((item) => (
                <div key={item} className="text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors cursor-default">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* 1. Definitions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">1. Definitions</h2>
            </div>
            <div className="space-y-3 text-[var(--color-text-secondary)]">
              <p><strong className="text-[var(--color-text-primary)]">"Annita," "we," "us," "our"</strong> refers to Annita LLC, a Liberian-registered limited liability company.</p>
              <p><strong className="text-[var(--color-text-primary)]">"Services"</strong> refers to all products, platforms, applications, and tools operated by Annita LLC, including but not limited to Annita Ecosystem, AnnitaPay, Annita Pulse, Ezri AI, AIIM Hub, and any future products.</p>
              <p><strong className="text-[var(--color-text-primary)]">"User," "you," "your"</strong> refers to any individual or entity who accesses or uses our Services.</p>
              <p><strong className="text-[var(--color-text-primary)]">"Mobile Applications"</strong> refers to our iOS and Android applications available through the Apple App Store and Google Play Store, respectively.</p>
              <p><strong className="text-[var(--color-text-primary)]">"Content"</strong> refers to all data, text, images, listings, reviews, and other material uploaded, posted, or transmitted through our Services.</p>
              <p><strong className="text-[var(--color-text-primary)]">"Marketplace"</strong> refers to the Annita Ecosystem digital commerce platform connecting MSMEs, buyers, and service providers.</p>
              <p><strong className="text-[var(--color-text-primary)]">"Transaction"</strong> refers to any commercial exchange conducted through our Services, including payments, orders, and subscriptions.</p>
            </div>
          </motion.div>

          {/* Acceptance of Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">2. Acceptance of Terms</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              By accessing or using any Annita LLC services, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.
            </p>
            <p className="text-[var(--color-text-secondary)]">
              These terms apply to all Annita services including Annita Ecosystem, AnnitaPay, Annita Pulse, Ezri AI, and AIIM Hub.
            </p>
          </motion.div>

          {/* 3. Eligibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Users className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">3. Eligibility</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              You must be at least <strong className="text-[var(--color-text-primary)]">18 years of age</strong> to create an account and use our Services. By registering, you represent and warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>You are at least 18 years old and of legal age in your jurisdiction of residence</li>
              <li>You have the legal capacity to enter into a binding agreement under Liberian law</li>
              <li>You are not prohibited from using our Services under any applicable laws</li>
              <li>If registering on behalf of a business, you have authority to bind that entity</li>
              <li>You will not allow minors under 18 to use your account or access our Services</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              We do not knowingly collect personal information from children under 18. If you believe a child has provided us with personal data, please contact us immediately at <a href="mailto:privacy@an-nita.com" className="text-[var(--color-accent)] hover:underline">privacy@an-nita.com</a>.
            </p>
          </motion.div>

          {/* 4. Service Usage */}
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
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">4. Service Usage</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              You agree to use our services only for lawful purposes and in accordance with these terms. You must not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Transmit viruses, malware, or any malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Use the service to harass, abuse, or harm others</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </motion.div>

          {/* User Accounts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">5. User Accounts</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              To use certain features of our services, you must create an account. You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Providing accurate and complete information</li>
              <li>Keeping your contact information up to date</li>
            </ul>
          </motion.div>

          {/* 6. Mobile Applications */}
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
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">6. Mobile Applications</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Our mobile applications are available for download from the Apple App Store and Google Play Store. By downloading and using our mobile apps, you acknowledge and agree to the following:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>These Terms govern your use of the mobile apps, in addition to any terms imposed by Apple or Google</li>
              <li>Annita is solely responsible for the functionality, content, and updates of our apps</li>
              <li>You are responsible for any data charges incurred while using the mobile apps</li>
              <li>We may require certain device permissions (camera, location, notifications, storage) to provide full functionality — you may revoke these at any time through your device settings</li>
              <li>We may release app updates that modify functionality, add features, or discontinue certain capabilities</li>
              <li>Apple and Google are third-party beneficiaries of these Terms as they relate to their respective platforms</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              <strong className="text-[var(--color-text-primary)]">Apple App Store Specific Terms:</strong> Licensed Application End User License Agreement (EULA) between you and Apple governs your use of the app on iOS devices. Annita, not Apple, is responsible for addressing any claims related to the app, including product liability, legal compliance, and intellectual property infringement.
            </p>
            <p className="text-[var(--color-text-secondary)] mt-4">
              <strong className="text-[var(--color-text-primary)]">Google Play Store Specific Terms:</strong> Google Play Terms of Service apply in addition to these Terms. Annita, not Google, is responsible for the app's functionality, content, and any claims arising from its use on Android devices.
            </p>
          </motion.div>

          {/* 7. Subscriptions & Payments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">7. Subscriptions & Payments</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Certain features of our Services require paid subscriptions or transaction fees. By purchasing a subscription or conducting a transaction, you agree to the following:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>All fees are clearly disclosed before you confirm a purchase</li>
              <li>Subscriptions auto-renew at the end of each billing cycle unless auto-renew is disabled at least 24 hours before the renewal date</li>
              <li>You can manage and cancel subscriptions through your Apple App Store, Google Play Store, or Annita account settings</li>
              <li>Payment is processed through Apple In-App Purchase, Google Play Billing, or AnnitaPay, depending on the platform</li>
              <li>We reserve the right to change pricing with at least 30 days' notice before the next billing cycle</li>
              <li>Transaction fees for marketplace purchases are clearly displayed before checkout confirmation</li>
              <li>Currency conversion rates, where applicable, are determined by your payment provider</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              <strong className="text-[var(--color-text-primary)]">AnnitaPay:</strong> Financial services through AnnitaPay are provided in accordance with applicable Liberian financial regulations. AnnitaPay is not a bank and funds stored in AnnitaPay wallets are not FDIC-insured or protected by any deposit insurance scheme.
            </p>
          </motion.div>

          {/* 8. Refund Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">8. Refund Policy</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              We strive to ensure satisfaction with all our Services. Our refund policy is as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li><strong className="text-[var(--color-text-primary)]">Mobile App Subscriptions:</strong> Refunds for in-app purchases are governed by Apple's and Google's respective refund policies. Contact Apple Support or Google Play Support for refund requests related to platform-billed subscriptions</li>
              <li><strong className="text-[var(--color-text-primary)]">Web Subscriptions:</strong> You may request a full refund within 14 days of the initial purchase or renewal, provided you have not significantly used the Service during that period</li>
              <li><strong className="text-[var(--color-text-primary)]">Marketplace Transactions:</strong> Buyer protection is available for eligible transactions. Disputes must be filed within 7 days of the transaction date</li>
              <li><strong className="text-[var(--color-text-primary)]">AnnitaPay:</strong> Failed or erroneous transfers are eligible for investigation and reversal within 30 days of the transaction date</li>
              <li>Refunds, where approved, are processed to the original payment method within 5-10 business days</li>
              <li>Chargebacks initiated through your bank or card issuer without first contacting Annita support may result in account suspension</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              To request a refund, contact us at <a href="mailto:billing@an-nita.com" className="text-[var(--color-accent)] hover:underline">billing@an-nita.com</a> with your transaction ID and reason for the request.
            </p>
          </motion.div>

          {/* 9. User-Generated Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Users className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">9. User-Generated Content</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Our Marketplace and other Services allow users to upload, post, and share content including product listings, reviews, images, and communications. You are solely responsible for all Content you submit. By posting Content, you grant Annita a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display that Content within our Services.
            </p>
            <p className="text-[var(--color-text-secondary)] mb-4">
              You represent and warrant that your Content:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>Does not violate any intellectual property rights of third parties</li>
              <li>Is accurate, truthful, and not misleading</li>
              <li>Does not contain defamatory, offensive, or discriminatory material</li>
              <li>Complies with all applicable laws, including consumer protection and trade regulations</li>
              <li>Does not contain personal or confidential information of others without their consent</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              We reserve the right to remove, hide, or modify any Content that violates these Terms or that we deem objectionable, without prior notice. Repeated violations may result in permanent account termination.
            </p>
          </motion.div>

          {/* 10. Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Scale className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">10. Intellectual Property</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              All content, features, and functionality of our services are owned by Annita LLC and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-[var(--color-text-secondary)]">
              You may not reproduce, modify, distribute, or create derivative works of any content without our express written permission.
            </p>
          </motion.div>

          {/* 11. Prohibited Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Ban className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">11. Prohibited Activities</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              In addition to the general restrictions in Section 4, the following specific activities are strictly prohibited and may result in immediate account termination:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>Selling counterfeit, stolen, or illegal goods through the Marketplace</li>
              <li>Engaging in money laundering, fraud, or any financial crime through AnnitaPay</li>
              <li>Using bots, scrapers, or automated tools to extract data from our Services</li>
              <li>Creating multiple accounts to circumvent restrictions or manipulate reviews</li>
              <li>Posting fake reviews, whether positive or negative, for any business or product</li>
              <li>Attempting to reverse engineer, decompile, or disassemble our applications</li>
              <li>Distributing malware, ransomware, or any malicious code through our platform</li>
              <li>Impersonating another person, business, or Annita staff member</li>
              <li>Using our Services to facilitate human trafficking, arms dealing, or terrorism</li>
              <li>Violating export controls or economic sanctions applicable to Liberian or international law</li>
            </ul>
          </motion.div>

          {/* 12. Third-Party Services */}
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
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">12. Third-Party Services</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Our Services may integrate with or contain links to third-party websites, services, and applications that are not owned or controlled by Annita LLC. We are not responsible for the practices or content of these third parties.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>Third-party payment processors (banks, mobile money operators) have their own terms and privacy policies</li>
              <li>Logistics partners handling deliveries operate under their own service agreements</li>
              <li>Analytics and crash-reporting SDKs (Google Analytics, Sentry) collect data per their respective policies</li>
              <li>Social media sharing features are subject to the terms of the respective platforms</li>
              <li>We do not warrant the availability, accuracy, or security of any third-party service</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              You acknowledge that Annita shall not be liable for any damage or loss caused by your use of any third-party service accessed through or in connection with our Services.
            </p>
          </motion.div>

          {/* 13. Disclaimers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">13. Disclaimers</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Your use of our Services is at your sole risk. The Services are provided on an <strong className="text-[var(--color-text-primary)]">"AS IS"</strong> and <strong className="text-[var(--color-text-primary)]">"AS AVAILABLE"</strong> basis, without warranties of any kind, either express or implied.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>We do not warrant that our Services will be uninterrupted, error-free, or secure</li>
              <li>We do not guarantee the accuracy, completeness, or reliability of any Content on our platform</li>
              <li>Medical information provided through Annita Pulse is not a substitute for professional medical advice</li>
              <li>AI-generated content from Ezri AI may contain inaccuracies and should be independently verified</li>
              <li>Marketplace transactions are between buyers and sellers; Annita facilitates but does not guarantee fulfillment</li>
              <li>AnnitaPay financial services are subject to availability and regulatory approvals in your jurisdiction</li>
              <li>We disclaim all warranties, including merchantability, fitness for a particular purpose, and non-infringement</li>
            </ul>
          </motion.div>

          {/* 14. Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">14. Limitation of Liability</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              To the maximum extent permitted by law, Annita LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
            </p>
            <p className="text-[var(--color-text-secondary)]">
              Our total liability for any claims arising from or related to these terms or our services shall not exceed the amount you paid, if any, for using the services.
            </p>
          </motion.div>

          {/* 15. Termination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Gavel className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">15. Termination</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              We reserve the right to suspend or terminate your access to our services at any time, with or without cause, with or without notice.
            </p>
            <p className="text-[var(--color-text-secondary)]">
              Upon termination, your right to use the services will immediately cease. All provisions of these terms shall survive termination.
            </p>
          </motion.div>

          {/* 16. Dispute Resolution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Scale className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">16. Dispute Resolution</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Any disputes arising from these terms shall be governed by the laws of the Republic of Liberia. We endeavor to resolve disputes amicably through direct communication.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>Parties shall first attempt to resolve disputes through good-faith negotiation within 30 days</li>
              <li>If negotiation fails, disputes shall be submitted to mediation in Monrovia, Liberia</li>
              <li>If mediation fails, disputes shall be resolved through binding arbitration under the rules of the Liberian National Bar Association</li>
              <li>Class action lawsuits are waived to the maximum extent permitted by law</li>
              <li>You agree not to participate in a class-wide or representative arbitration</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              For any questions or concerns regarding these terms, please contact us at <a href="mailto:legal@an-nita.com" className="text-[var(--color-accent)] hover:underline">legal@an-nita.com</a>.
            </p>
          </motion.div>

          {/* 17. Force Majeure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">17. Force Majeure</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Annita LLC shall not be held liable for any failure or delay in performance of our obligations caused by events beyond our reasonable control, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>Natural disasters, floods, earthquakes, or severe weather events</li>
              <li>Pandemics, epidemics, or public health emergencies</li>
              <li>War, terrorism, civil unrest, or government actions</li>
              <li>Power outages, telecommunications failures, or internet infrastructure disruptions</li>
              <li>Labor strikes or supply chain disruptions</li>
              <li>Regulatory or legal changes that prevent service operation</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              We will use commercially reasonable efforts to resume performance as soon as practicable after the force majeure event ceases.
            </p>
          </motion.div>

          {/* 18. Fraud & Scam Prevention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-red-500/20 rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <ShieldAlert className="w-5 h-5 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">18. Fraud &amp; Scam Prevention</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Annita LLC is committed to protecting our users from fraud, phishing, and scams. This section outlines our policies and your responsibilities regarding security.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li><strong className="text-[var(--color-text-primary)]">We will never ask for sensitive credentials:</strong> Annita will never request your password, OTP, PIN, full card number, or verification codes via phone, email, SMS, WhatsApp, or social media</li>
              <li><strong className="text-[var(--color-text-primary)]">Verified communications only:</strong> All legitimate Annita emails originate from <code className="text-[var(--color-accent)]">@an-nita.com</code> domains. Always verify the sender&apos;s email address before responding</li>
              <li><strong className="text-[var(--color-text-primary)]">Verify before you act:</strong> If you receive any suspicious communication claiming to be from Annita, contact our customer service team before taking any action. We are always willing to help verify legitimacy</li>
              <li><strong className="text-[var(--color-text-primary)]">Official phone numbers:</strong> Only trust phone numbers listed on our official website. Scammers can spoof caller ID to impersonate legitimate numbers</li>
              <li><strong className="text-[var(--color-text-primary)]">No payment for verification:</strong> Annita will never ask you to send money, gift cards, or cryptocurrency to verify your identity or unlock your account</li>
              <li><strong className="text-[var(--color-text-primary)]">Report fraud immediately:</strong> If you suspect you have been targeted by a scam, report it to <a href="mailto:support@an-nita.com" className="text-[var(--color-accent)] hover:underline">support@an-nita.com</a> or via our official WhatsApp numbers</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              For comprehensive fraud awareness information, visit our <Link href="/security" className="text-[var(--color-accent)] hover:underline">Security &amp; Fraud Awareness page</Link>.
            </p>
          </motion.div>

          {/* 19. Changes to Terms */}
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
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">19. Changes to Terms</h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              We reserve the right to modify these Terms & Conditions at any time. When we do, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>Update the "Last Updated" date at the bottom of this page</li>
              <li>Provide at least 30 days' notice for material changes via email or in-app notification</li>
              <li>Continue providing access to the previous version of the Terms upon request</li>
              <li>Your continued use of our Services after changes take effect constitutes acceptance of the updated Terms</li>
            </ul>
            <p className="text-[var(--color-text-secondary)] mt-4">
              We encourage you to review this page periodically to stay informed of any updates.
            </p>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm text-[var(--color-text-tertiary)]"
          >
            <p>Last Updated: July 2026</p>
            <p className="mt-2">Annita LLC © 2024-2026. All rights reserved.</p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <NewsletterSection
          title="Stay Updated on Terms & Policies"
          subtitle="Important updates to our terms of service, legal policies, and user agreements delivered to your inbox."
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
