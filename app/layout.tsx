import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import SiteLoaderWrapper from '@/components/site-loader-wrapper'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const syne = Syne({ subsets: ['latin'], variable: '--font-syne', weight: ['600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Annita LLC - Africa\'s Digital Heartbeat',
  description: 'Africa\'s first all-in-one digital ecosystem — integrating e-commerce, fintech, AI, communication, marketing, logistics, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${syne.variable}`}>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider>
          <SiteLoaderWrapper>
            {children}
          </SiteLoaderWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
