'use client'

import React, { useState, useEffect } from 'react'
import Loader from './loader'

export default function SiteLoaderWrapper({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const hasLoaded = sessionStorage.getItem('annita_loaded')
    if (hasLoaded === 'true') {
      setShowLoader(false)
    }
  }, [])

  const handleFinished = () => {
    sessionStorage.setItem('annita_loaded', 'true')
    setShowLoader(false)
  }

  // To prevent hydration mismatch, render the children directly on first pass.
  // The loader is mounted as an absolute overlay only after the client component mounts.
  return (
    <>
      {children}
      {mounted && showLoader && (
        <Loader onFinished={handleFinished} />
      )}
    </>
  )
}
