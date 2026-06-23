'use client'

import { useEffect, useRef } from 'react'

export default function SoundEffects() {
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    // Initialize audio context on first user interaction
    const initAudio = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
    }

    document.addEventListener('click', initAudio, { once: true })
    document.addEventListener('keydown', initAudio, { once: true })

    return () => {
      document.removeEventListener('click', initAudio)
      document.removeEventListener('keydown', initAudio)
    }
  }, [])

  const playHoverSound = () => {
    if (!audioContextRef.current) return

    const ctx = audioContextRef.current
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.frequency.setValueAtTime(800, ctx.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05)

    gainNode.gain.setValueAtTime(0.05, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.05)
  }

  const playClickSound = () => {
    if (!audioContextRef.current) return

    const ctx = audioContextRef.current
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.frequency.setValueAtTime(400, ctx.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1)

    gainNode.gain.setValueAtTime(0.1, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.1)
  }

  useEffect(() => {
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        playHoverSound()
      }
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        playClickSound()
      }
    }

    document.addEventListener('mouseover', handleHover)
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('mouseover', handleHover)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}
