'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    src: '/slide-marketplace.png',
    alt: 'Annita Marketplace — Digital Commerce for African MSMEs',
    label: 'Marketplace',
    caption: 'Powering Digital Commerce Across Africa',
    sub: 'Connecting 3,000+ verified MSMEs through offline-first marketplace infrastructure.',
    tag: 'ANNITA ECOSYSTEM',
  },
  {
    src: '/slide-infrastructure.png',
    alt: 'Annita Smart-City Digital Infrastructure',
    label: 'Infrastructure',
    caption: 'Building the Digital Backbone of a Continent',
    sub: 'Deploying smart infrastructure across Africa\'s fastest-growing cities.',
    tag: 'ANNITA LLC',
  },
  {
    src: '/slide-fintech.png',
    alt: 'AnnitaPay — Borderless Fintech Payments',
    label: 'Fintech',
    caption: 'Borderless Payments, Built for Africa',
    sub: 'AnnitaPay delivers secure, cross-border financial infrastructure for the African economy.',
    tag: 'ANNITAPAY',
  },
  {
    src: '/slide-health.png',
    alt: 'Annita Pulse — Digital Health Infrastructure',
    label: 'Digital Health',
    caption: 'Bringing Healthcare to Every Community',
    sub: 'Annita Pulse connects communities to quality care through real-time digital health technology.',
    tag: 'ANNITA PULSE',
  },
  {
    src: '/slide-innovation.png',
    alt: 'Annita Impact-Innovation Hub — Entrepreneurs & Builders',
    label: 'Innovation Hub',
    caption: 'Where Africa\'s Innovators Build the Future',
    sub: 'AIIM is the home for Africa\'s next generation of entrepreneurs, builders, and dreamers.',
    tag: 'AIIM HUB',
  },
  {
    src: '/slide-globe.png',
    alt: 'Annita Global — 100+ Countries Reached',
    label: 'Global Reach',
    caption: 'Africa-Born. World-Ready.',
    sub: 'Operating across 100+ countries and expanding — one city, one community at a time.',
    tag: 'GLOBAL_REACH',
  },
]

export default function ImageSlideshow() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback((index: number, dir: 'next' | 'prev') => {
    setDirection(dir)
    setCurrent(index)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 'next')
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, 'prev')
  }, [current, goTo])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isPaused, next])

  const slideVariants: Variants = {
    enter: (dir: 'next' | 'prev') => ({
      x: dir === 'next' ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: 'easeInOut' },
    },
    exit: (dir: 'next' | 'prev') => ({
      x: dir === 'next' ? '-100%' : '100%',
      opacity: 0,
      transition: { duration: 0.75, ease: 'easeInOut' },
    }),
  }

  return (
    <section
      className="relative w-full overflow-hidden rounded-3xl"
      style={{
        border: '1px solid var(--color-border-default)',
        background: 'var(--color-surface-raised)',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Annita image slideshow"
    >
      {/* Slide images */}
      <div className="relative w-full" style={{ aspectRatio: '16/7' }}>
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover"
              priority={current === 0}
              sizes="(max-width: 1400px) 100vw, 1400px"
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)',
              }}
            />

            {/* Caption */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-14">
              {/* Tech badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full mb-3"
                style={{
                  backgroundColor: 'var(--color-accent-soft)',
                  border: '1px solid var(--color-border-accent)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em] font-mono"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {slides[current].tag}
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-2 max-w-xl"
                style={{ fontFamily: 'var(--font-syne)', textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
              >
                {slides[current].caption}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xs sm:text-sm text-white/75 max-w-md leading-relaxed"
              >
                {slides[current].sub}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{
            backgroundColor: 'rgba(0,0,0,0.45)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{
            backgroundColor: 'rgba(0,0,0,0.45)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Dot indicators + slide labels */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ borderTop: '1px solid var(--color-border-default)' }}
      >
        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              aria-label={`Go to slide ${i + 1}`}
              className="relative h-1 rounded-full transition-all duration-400 overflow-hidden"
              style={{
                width: i === current ? '28px' : '8px',
                backgroundColor:
                  i === current
                    ? 'var(--color-accent)'
                    : 'var(--color-border-default)',
              }}
            >
              {i === current && !isPaused && (
                <motion.span
                  key={current}
                  className="absolute inset-0 origin-left rounded-full"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: 'linear' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Slide label tabs */}
        <div className="hidden sm:flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              className="text-[10px] font-mono px-2 py-1 rounded transition-all duration-200"
              style={{
                color: i === current ? 'var(--color-accent)' : 'var(--color-text-tertiary)',
                backgroundColor: i === current ? 'var(--color-accent-soft)' : 'transparent',
                border: i === current ? '1px solid var(--color-border-accent)' : '1px solid transparent',
              }}
            >
              {slide.label}
            </button>
          ))}
        </div>

        {/* Pause/play indicator */}
        <div
          className="flex items-center gap-1.5 text-[9px] font-mono"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: isPaused ? 'var(--color-text-muted)' : 'var(--color-accent)',
              animation: isPaused ? 'none' : 'pulse 2s infinite',
            }}
          />
          {isPaused ? 'PAUSED' : 'AUTO'}
        </div>
      </div>
    </section>
  )
}
