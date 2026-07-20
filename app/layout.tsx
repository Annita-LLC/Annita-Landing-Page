import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import SiteLoaderWrapper from '@/components/site-loader-wrapper'
import { Analytics } from '@vercel/analytics/next'
import CookiesBanner from '@/components/cookies-banner'
import ScrollProgress from '@/components/scroll-progress'
import TechCursor from '@/components/tech-cursor'
import ParticleBackground from '@/components/particle-background'
import CommandPalette from '@/components/command-palette'
import SoundEffects from '@/components/sound-effects'
import WhatsAppFloat from '@/components/whatsapp-float'
import SecurityAwarenessModal from '@/components/security-awareness-modal'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const syne = Syne({ subsets: ['latin'], variable: '--font-syne', weight: ['600', '700', '800'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.an-nita.com'),
  title: {
    default: 'Annita LLC | Africa\'s Unified Digital Infrastructure & Ecosystem',
    template: '%s | Annita LLC'
  },
  description: 'Annita LLC is Africa\'s premier digital ecosystem, integrating secure payment infrastructure (AnnitaPay), AI recruiting solutions (Ezri AI), decentralized health ledgers (Pulse Health), e-commerce, and logistics automation.',
  keywords: [
    'Annita', 'Annita LLC', 'AnnitaPay', 'Ezri AI', 'Pulse Health',
    'Africa Fintech', 'Digital Infrastructure Africa', 'MSME Digitization',
    'African Tech Ecosystem', 'AI Recruitment Africa', 'Distributed Health Ledger'
  ],
  authors: [{ name: 'Annita LLC Engineering' }],
  creator: 'Annita LLC',
  publisher: 'Annita LLC',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/annita-real-logo.png', sizes: 'any', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: ['/favicon.png'],
  },
  manifest: '/manifest.webmanifest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Annita LLC | Africa\'s Unified Digital Infrastructure & Ecosystem',
    description: 'Building Africa\'s first unified digital heartbeat. Explore payment, health ledger, AI recruitment, and custom enterprise software development.',
    url: 'https://www.an-nita.com',
    siteName: 'Annita LLC',
    images: [
      {
        url: '/annita-real-logo.png',
        width: 1200,
        height: 630,
        alt: 'Annita LLC - Africa\'s Unified Digital Ecosystem',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Annita LLC | Africa\'s Unified Digital Infrastructure & Ecosystem',
    description: 'Africa\'s first all-in-one digital ecosystem integrating fintech, healthcare tech, and AI recruitment.',
    images: [
      {
        url: '/annita-real-logo.png',
        width: 1200,
        height: 630,
        alt: 'Annita LLC - Africa\'s Unified Digital Ecosystem',
      }
    ],
    creator: '@AnnitaLLC',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-id-placeholder',
    yandex: 'yandex-verification-id-placeholder',
    yahoo: 'yahoo-verification-id-placeholder',
    other: {
      me: ['security@an-nita.com'],
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#00C28A' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0f1c' },
  ],
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Annita LLC',
  'alternateName': 'Annita',
  'url': 'https://www.an-nita.com',
  'logo': {
    '@type': 'ImageObject',
    'url': 'https://www.an-nita.com/annita-real-logo.png',
    'width': 1200,
    'height': 630,
  },
  'sameAs': [
    'https://twitter.com/AnnitaLLC',
    'https://github.com/Annita-LLC'
  ],
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '',
    'contactType': 'sales',
    'email': 'sales@an-nita.com',
    'availableLanguage': 'en'
  },
  'description': 'Africa\'s first all-in-one digital ecosystem, integrating secure payment infrastructure (AnnitaPay), AI recruiting solutions (Ezri AI), decentralized health ledgers (Pulse Health), e-commerce, and logistics. Verified on MANSA, Afreximbank\'s due diligence repository, for cross-border trade readiness.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${syne.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="mask-icon" href="/favicon.png" color="#00C28A" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="application-name" content="Annita LLC" />
        <meta name="apple-mobile-web-app-title" content="Annita" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider>
          <SiteLoaderWrapper>
            {children}
          </SiteLoaderWrapper>
        </ThemeProvider>
        <SoundEffects />
        <ParticleBackground />
        <TechCursor />
        <ScrollProgress />
        <CommandPalette />
        <CookiesBanner />
        <WhatsAppFloat />
        <SecurityAwarenessModal />
        <Analytics />
      </body>
    </html>
  )
}

