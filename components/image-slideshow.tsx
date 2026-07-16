'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

type Slide = {
  src: string
  alt: string
  caption: string
  sub: string
}

const slides: Slide[] = [
  {
    src: '/slide-marketplace.png',
    alt: 'Annita Marketplace — Digital Commerce for African MSMEs',
    caption: 'Powering Digital Commerce Across Africa',
    sub: 'Connecting 3,000+ verified MSMEs through offline-first marketplace infrastructure.',
  },
  {
    src: '/slide-infrastructure.png',
    alt: 'Annita Smart-City Digital Infrastructure',
    caption: 'Building the Digital Backbone of a Continent',
    sub: 'Deploying smart infrastructure across Africa\'s fastest-growing cities.',
  },
  {
    src: '/slide-fintech.png',
    alt: 'AnnitaPay — Borderless Fintech Payments',
    caption: 'Borderless Payments, Built for Africa',
    sub: 'AnnitaPay delivers secure, cross-border financial infrastructure for the African economy.',
  },
  {
    src: '/slide-health.png',
    alt: 'Annita Pulse — Digital Health Infrastructure',
    caption: 'Bringing Healthcare to Every Community',
    sub: 'Annita Pulse connects communities to quality care through real-time digital health technology.',
  },
  {
    src: '/slide-innovation.png',
    alt: 'Annita Impact-Innovation Hub — Entrepreneurs & Builders',
    caption: 'Where Africa\'s Innovators Build the Future',
    sub: 'AIIM is the home for Africa\'s next generation of entrepreneurs, builders, and dreamers.',
  },
  {
    src: '/slide-globe.png',
    alt: 'Annita Global — 100+ Countries Reached',
    caption: 'Africa-Born. World-Ready.',
    sub: 'Operating across 100+ countries and expanding — one city, one community at a time.',
  },
  {
    src: '/msme-businesswoman.jpg',
    alt: 'African MSME Businesswoman — Empowered by Annita',
    caption: 'Empowering the Backbone of Africa\'s Economy',
    sub: 'Thousands of women-led MSMEs growing their businesses with Annita\'s digital tools.',
  },
  {
    src: '/african-women-shopping-food-stuff-local-market-paying-doing-mobile-transfer-via-phone-trader-african-woman-shopping-166608929.webp',
    alt: 'African Market — Mobile Payment via AnnitaPay',
    caption: 'Real Commerce, Real Impact',
    sub: 'From local markets to digital storefronts — Annita brings every business online.',
  },
  {
    src: '/delivery-rider-city.jpg',
    alt: 'Delivery Rider — Last-Mile Logistics Powered by Annita',
    caption: 'Last-Mile Delivery, Powered by Tech',
    sub: 'Connecting riders, merchants, and customers through seamless logistics infrastructure.',
  },
  {
    src: '/chat-commerce.jpg',
    alt: 'Chat Commerce — Annita Conversational Commerce',
    caption: 'Commerce in Every Conversation',
    sub: 'Buy, sell, and transact directly through chat — bringing commerce to where people already are.',
  },
  {
    src: '/Orange Social Venture Prize award.jpg',
    alt: 'Orange Social Venture Prize 2024 — 1st Place Winner Liberia',
    caption: '1st Place — Orange Social Venture Prize 2024',
    sub: 'Won $3,000 at the Orange Digital Center in Liberia for empowering MSMEs through eCommerce.',
  },
  {
    src: '/African Union Top 50 Business EAN FEllowship.jpg',
    alt: 'African Union Top 50 Businesses & EAN Fellowship',
    caption: 'Top 50 Businesses in Africa — African Union',
    sub: 'Named among Africa\'s Top 50 Businesses by the AU and selected as an EAN Fellow.',
  },
  {
    src: '/Smart Liberia.jpg',
    alt: 'Smart Liberia Recognition Award',
    caption: 'Recognized by Smart Liberia',
    sub: 'Honored for driving digital transformation and innovation across Liberia.',
  },
  {
    src: '/Representing Liberia at IATF 2025.jpg',
    alt: 'IATF 2025 — Representing Liberia at Intra-African Trade Fair',
    caption: 'Representing Liberia at IATF 2025',
    sub: 'First and only Liberian startup selected for the AU Youth Start-Up Program in Algiers.',
  },
  {
    src: '/slide-award-asc.jpg',
    alt: 'African Startup Conference 2025 — $7,000 Grant Award',
    caption: '$7,000 Grant at African Startup Conference 2025',
    sub: 'Recognized for building scalable digital infrastructure for Africa at IATF Algiers.',
  },
  {
    src: '/Moonshot award certificate.jpg',
    alt: 'Moonshot Borderless Awards 2025 — Top 15 from 139 Countries',
    caption: 'Top 15 at Moonshot Borderless Awards 2025',
    sub: 'Shortlisted from 1,500+ applicants across 139 countries for borderless innovation.',
  },
  {
    src: '/slide-award-aiw.jpg',
    alt: 'Africa Industrial Week 2025 — AfCFTA & Trade Observatory',
    caption: 'Africa Industrial Week 2025 — Kampala, Uganda',
    sub: 'Joined a high-level masterclass on data-to-industrialization and the African Trade Observatory.',
  },
  {
    src: '/World Youth Development Forum China.jpg',
    alt: 'APGYD 2026 — World Youth Development Forum in China',
    caption: 'Top 55/200 at World Youth Development Forum — China',
    sub: 'Ranked Top 3 in our cluster at the 2026 Acceleration Week in Shanghai and Wuhan.',
  },
]

const SLIDE_DURATION = 5000

export default function ImageSlideshow() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [next])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) next()
      else prev()
    }
    touchStartX.current = 0
    touchEndX.current = 0
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl"
      style={{
        border: '1px solid var(--color-border-default)',
        background: 'var(--color-surface-raised)',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Annita image slideshow"
    >
      <div className="relative w-full aspect-square sm:aspect-[16/10] md:aspect-[16/8] lg:aspect-[16/7]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 1 : 0,
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="(max-width: 1400px) 100vw, 1400px"
              style={{ objectPosition: 'center' }}
            />

            {/* Subtle Ken Burns zoom on active slide */}
            {i === current && (
              <div
                className="absolute inset-0"
                style={{
                  animation: 'kenBurns 6s ease-out forwards',
                }}
              />
            )}

            {/* Gradient overlay for text readability */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.55) 100%)',
              }}
            />

            {/* Caption */}
            {i === current && (
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-14">
                <h3
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-2 max-w-xl"
                  style={{
                    fontFamily: 'var(--font-syne)',
                    textShadow: '0 2px 12px rgba(0,0,0,0.7)',
                    animation: 'slideCaptionUp 0.8s ease-out',
                  }}
                >
                  {slide.caption}
                </h3>
                <p
                  className="text-xs sm:text-sm text-white/80 max-w-md leading-relaxed"
                  style={{
                    textShadow: '0 1px 8px rgba(0,0,0,0.6)',
                    animation: 'slideCaptionUp 0.8s ease-out 0.15s both',
                  }}
                >
                  {slide.sub}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Minimal progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-10">
        <div
          key={current}
          className="h-full"
          style={{
            background: 'var(--color-accent)',
            animation: `progressBar ${SLIDE_DURATION}ms linear forwards`,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        @keyframes slideCaptionUp {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes progressBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}
