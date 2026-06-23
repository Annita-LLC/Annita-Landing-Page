'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/navigation'

export default function CookiesPage() {
  return (
    <div className="min-h-screen tech-grid" style={{ backgroundColor: '#080D1A', color: '#F0F4FF' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[30vh] flex items-center justify-center px-4 md:px-8 py-16 overflow-hidden tech-scanline">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
              SYS_NODE // <span className="text-[#00C28A] font-bold">COOKIE_POLICY</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}
          >
            <span style={{ color: '#F0F4FF' }}>Cookie</span><br />
            <span style={{ color: '#F0F4FF' }}>Policy.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#8A9BBB' }}
          >
            How we use cookies to enhance your experience.
          </motion.p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-12 tech-glow-card"
            style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>
              What Are Cookies?
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#8A9BBB' }}>
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by allowing the website to remember your preferences and understand how you use our services.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-10" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>
              How We Use Cookies
            </h2>
            <ul className="space-y-4 mb-6" style={{ color: '#8A9BBB' }}>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00C28A] mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-white">Essential Cookies:</strong> Required for the website to function properly, including security and basic features.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00C28A] mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-white">Performance Cookies:</strong> Help us understand how visitors use our website by collecting anonymous analytics data.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00C28A] mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-white">Functionality Cookies:</strong> Remember your preferences and settings to provide a more personalized experience.
                </div>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-10" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>
              Managing Cookies
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#8A9BBB' }}>
              You can control and manage cookies through your browser settings. Please note that disabling essential cookies may affect the functionality of our website. For more information on how to manage cookies in your browser, please refer to your browser's help documentation.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-10" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>
              Third-Party Cookies
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#8A9BBB' }}>
              We may use third-party services that place cookies on your device, such as Google Analytics for website analytics. These third parties have their own privacy policies, and we encourage you to review them.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-10" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>
              Updates to This Policy
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#8A9BBB' }}>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay informed about how we use cookies.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-10" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>
              Contact Us
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#8A9BBB' }}>
              If you have any questions about our use of cookies, please contact us at{' '}
              <a href="mailto:info@an-nita.com" className="text-[#00C28A] hover:underline">
                info@an-nita.com
              </a>
            </p>

            <div className="mt-10 pt-8 border-t border-[#1A2640]">
              <p className="text-sm" style={{ color: '#4A5775' }}>
                Last Updated: June 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
                <div className="w-10 h-10 rounded-lg bg-[#00C28A]/10 flex items-center justify-center">
                  <span className="text-[#00C28A] font-bold text-lg">A</span>
                </div>
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

            {/* Legal Links */}
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#4A5775] mb-4 flex items-center gap-2">
                <span className="w-1 h-1 bg-[#00C28A] rounded-full" />
                Legal
              </div>
              <div className="space-y-2">
                <Link href="/cookies" className="block text-sm text-[#8A9BBB] hover:text-[#00C28A] transition-colors">Cookie Policy</Link>
                <Link href="/privacy" className="block text-sm text-[#8A9BBB] hover:text-[#00C28A] transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block text-sm text-[#8A9BBB] hover:text-[#00C28A] transition-colors">Terms of Service</Link>
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
