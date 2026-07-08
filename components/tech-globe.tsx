'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
// @ts-ignore
import countries from 'world-map-country-shapes'

// --- Hotspot cities shown directly on the globe surface ---
const hotspots = [
  { label: 'Monrovia', x: 46, y: 55, region: 'West Africa', color: '#00C28A', primary: true },
  { label: 'Lagos', x: 52, y: 52, region: 'West Africa', color: '#00C28A' },
  { label: 'Accra', x: 49, y: 54, region: 'West Africa', color: '#00C28A' },
  { label: 'Abidjan', x: 47, y: 54, region: 'West Africa', color: '#00C28A' },
  { label: 'Nairobi', x: 63, y: 56, region: 'East Africa', color: '#4ECCA3' },
  { label: 'Johannesburg', x: 57, y: 70, region: 'Southern Africa', color: '#4ECCA3' },
  { label: 'Cairo', x: 58, y: 42, region: 'North Africa', color: '#4ECCA3' },
  { label: 'London', x: 50, y: 30, region: 'Europe', color: '#6B8DD6' },
  { label: 'Dubai', x: 66, y: 46, region: 'Middle East', color: '#6B8DD6' },
  { label: 'New York', x: 25, y: 38, region: 'N. America', color: '#F5A623' },
  { label: 'Singapore', x: 75, y: 58, region: 'SE Asia', color: '#F5A623' },
  { label: 'Beijing', x: 76, y: 36, region: 'Asia', color: '#F5A623' },
]

// --- Orbiting satellite paths (inclined ring angles) ---
const orbits = [
  { duration: 12, tiltX: 70, tiltZ: 0,   size: 108, color: 'rgba(0, 194, 138, 0.25)', dotColor: '#00C28A', dotSize: 5 },
  { duration: 18, tiltX: 50, tiltZ: 45,  size: 116, color: 'rgba(100, 150, 200, 0.18)', dotColor: '#6B8DD6', dotSize: 4 },
  { duration: 22, tiltX: 30, tiltZ: -30, size: 124, color: 'rgba(245, 166, 35, 0.15)',  dotColor: '#F5A623', dotSize: 3.5 },
]

// --- Live activity events rotating through the feed ---
const activities = [
  { flag: 'LR', msg: 'New merchant onboarded · Monrovia', time: 'now',  type: 'success' },
  { flag: 'NG', msg: 'Payment processed · \u20a6142,000',      time: '2s',  type: 'tx' },
  { flag: 'GH', msg: 'Store verified in Accra',            time: '5s',  type: 'success' },
  { flag: 'KE', msg: 'User signup · Nairobi',              time: '8s',  type: 'info' },
  { flag: 'GB', msg: 'Diaspora order shipped · London',   time: '11s', type: 'tx' },
  { flag: 'ZA', msg: 'Vendor approved · Johannesburg',    time: '14s', type: 'success' },
  { flag: 'AE', msg: 'Remittance settled · Dubai',        time: '17s', type: 'tx' },
  { flag: 'SG', msg: 'API handshake · Singapore node',    time: '20s', type: 'info' },
  { flag: 'CI', msg: 'Listing published · Abidjan',       time: '23s', type: 'success' },
  { flag: 'US', msg: 'Diaspora order · New York',         time: '26s', type: 'tx' },
]

const typeColors: Record<string, string> = {
  success: '#00C28A',
  tx:      '#F5A623',
  info:    '#6B8DD6',
}

const typeLabel: Record<string, string> = {
  success: 'SUCCESS',
  tx:      'TRANSACTION',
  info:    'INFO',
}

const stats = [
  { label: 'Countries', value: '54+', icon: '\ud83c\udf0d' },
  { label: 'Merchants', value: '12K+', icon: '\ud83c\udfe5' },
  { label: 'Volume', value: '$2.4M', icon: '\ud83d\udcb8' },
  { label: 'Users', value: '180K+', icon: '\ud83d\udc65' },
]

export default function TechGlobe() {
  const [activeHotspot, setActiveHotspot] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHotspot(prev => (prev + 1) % hotspots.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full flex items-center justify-center py-6 overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(0,194,138,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,138,0.15) 1px, transparent 1px)`,
        backgroundSize: '48px 48px'
      }} />


      {/* Globe */}
      <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] flex-shrink-0 z-10">

        {/* Atmospheric outer glow */}
        <div className="absolute inset-0 rounded-full pointer-events-none"
          style={{ boxShadow: '0 0 80px rgba(0,194,138,0.15), 0 0 30px rgba(100,150,200,0.1)' }}
        />

        {/* Orbital rings */}
        {orbits.map((orbit, i) => {
          const offset = (orbit.size - 100) / 2
          return (
            <div
              key={i}
              className="absolute rounded-full border pointer-events-none"
              style={{
                top: `${-offset}%`,
                left: `${-offset}%`,
                width: `${orbit.size}%`,
                height: `${orbit.size}%`,
                transform: `rotateX(${orbit.tiltX}deg) rotateZ(${orbit.tiltZ}deg)`,
                borderColor: orbit.color,
                borderWidth: '1px',
                transformOrigin: `${50 + offset}% ${50 + offset}%`,
              }}
            >
              <motion.div
                className="absolute rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: orbit.duration, repeat: Infinity, ease: 'linear' }}
                style={{ width: '100%', height: '100%', top: 0, left: 0 }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    width: orbit.dotSize,
                    height: orbit.dotSize,
                    background: orbit.dotColor,
                    top: 0,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: `0 0 10px ${orbit.dotColor}, 0 0 20px ${orbit.dotColor}66`,
                  }}
                />
              </motion.div>
            </div>
          )
        })}

        {/* Globe sphere - smooth Earth rotation */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #1a4d7a, #0a1628)',
            border: '2px solid rgba(100,150,200,0.3)',
            boxShadow: '0 0 60px rgba(100,150,200,0.3), inset 0 0 60px rgba(0,0,0,0.5)',
            transformStyle: 'preserve-3d',
            animation: 'globe-spin 30s linear infinite',
          }}
        >
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 2000 1001" preserveAspectRatio="xMidYMid slice">
              {[20, 40, 60, 80].map(lat => (
                <ellipse key={lat} cx="1000" cy="500" rx="900"
                  ry={900 * Math.sin((lat * Math.PI) / 180)}
                  fill="none" stroke="rgba(100,150,200,0.08)" strokeWidth="2" />
              ))}
              {[0, 30, 60, 90, 120, 150].map(lng => (
                <line key={lng}
                  x1={1000 + 900 * Math.sin((lng * Math.PI) / 180)} y1="0"
                  x2={1000 - 900 * Math.sin((lng * Math.PI) / 180)} y2="1001"
                  stroke="rgba(100,150,200,0.04)" strokeWidth="2" />
              ))}
              {countries.map((country: any) => (
                <path key={country.id} d={country.shape}
                  fill="rgba(34,139,34,0.55)"
                  stroke="rgba(0,194,138,0.4)" strokeWidth="1.5" />
              ))}
            </svg>
          </div>

          {/* Cloud layer */}
          <div className="absolute inset-0 rounded-full pointer-events-none"
            style={{ animation: 'cloud-spin 22s linear infinite', mixBlendMode: 'overlay' }}>
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <ellipse cx="28" cy="22" rx="11" ry="5" fill="rgba(255,255,255,0.18)" />
              <ellipse cx="62" cy="33" rx="13" ry="6" fill="rgba(255,255,255,0.13)" />
              <ellipse cx="44" cy="58" rx="9"  ry="4" fill="rgba(255,255,255,0.16)" />
              <ellipse cx="76" cy="44" rx="10" ry="5" fill="rgba(255,255,255,0.19)" />
              <ellipse cx="18" cy="48" rx="8"  ry="3" fill="rgba(255,255,255,0.14)" />
            </svg>
          </div>

          {/* Day/night shadow */}
          <div className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: 'linear-gradient(to right, transparent 35%, rgba(0,0,0,0.65) 100%)', mixBlendMode: 'multiply' }} />

          {/* Sun highlight */}
          <div className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle at 28% 32%, rgba(255,255,255,0.14) 0%, transparent 45%)', mixBlendMode: 'overlay' }} />
        </div>

        {/* Pulsing city hotspots */}
        {hotspots.map((spot, idx) => {
          const isActive = activeHotspot === idx
          return (
            <div key={spot.label} className="absolute pointer-events-none"
              style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: 'translate(-50%,-50%)', zIndex: isActive ? 20 : 10 }}>
              {isActive && (
                <motion.div className="absolute rounded-full"
                  style={{ border: `1px solid ${spot.color}`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                  animate={{ width: [8, 30], height: [8, 30], opacity: [0.9, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                />
              )}
              <motion.div className="rounded-full"
                animate={{ scale: isActive ? 1.7 : 1, opacity: isActive ? 1 : spot.primary ? 0.85 : 0.5 }}
                transition={{ duration: 0.4 }}
                style={{
                  width: spot.primary ? 7 : 5,
                  height: spot.primary ? 7 : 5,
                  background: spot.color,
                  boxShadow: isActive ? `0 0 14px ${spot.color}` : 'none',
                }}
              />
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: -10 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-mono font-bold"
                    style={{ bottom: '100%', fontSize: 8, color: spot.color }}
                  >
                    {spot.label}
                    <span style={{ color: '#8A9BBB', fontWeight: 400, marginLeft: 3 }}>· {spot.region}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}

        {/* LIVE badge */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#0a1628]/90 border border-[#00C28A]/30 rounded-full px-3 py-1 z-20">
          <motion.div className="w-1.5 h-1.5 rounded-full bg-[#00C28A]"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-[#00C28A] text-[9px] font-mono font-bold tracking-widest">LIVE · GLOBAL</span>
        </div>
      </div>


    </div>
  )
}
