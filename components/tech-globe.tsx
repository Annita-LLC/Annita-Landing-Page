'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
// @ts-ignore
import countries from 'world-map-country-shapes'

interface Route {
  from: { x: number; y: number; label: string }
  to: { x: number; y: number; label: string }
  delay: number
}

interface Continent {
  name: string
  x: number
  y: number
  countries: { name: string; x: number; y: number }[]
}

const continents: Continent[] = [
  {
    name: 'Africa',
    x: 50,
    y: 50,
    countries: [
      { name: 'Liberia', x: 50, y: 55 },
      { name: 'Nigeria', x: 25, y: 35 },
      { name: 'Egypt', x: 52, y: 25 },
      { name: 'South Africa', x: 20, y: 65 },
      { name: 'Kenya', x: 80, y: 40 },
    ]
  },
  {
    name: 'Asia',
    x: 75,
    y: 30,
    countries: [
      { name: 'China', x: 85, y: 25 },
      { name: 'India', x: 58, y: 18 },
      { name: 'Japan', x: 75, y: 20 },
      { name: 'UAE', x: 55, y: 35 },
      { name: 'Saudi Arabia', x: 58, y: 30 },
    ]
  },
  {
    name: 'Europe',
    x: 52,
    y: 20,
    countries: [
      { name: 'UK', x: 48, y: 28 },
      { name: 'Germany', x: 55, y: 20 },
      { name: 'France', x: 52, y: 22 },
      { name: 'Netherlands', x: 50, y: 18 },
    ]
  },
  {
    name: 'North America',
    x: 15,
    y: 30,
    countries: [
      { name: 'USA', x: 15, y: 30 },
      { name: 'Canada', x: 12, y: 32 },
      { name: 'Mexico', x: 15, y: 45 },
    ]
  },
  {
    name: 'South America',
    x: 22,
    y: 55,
    countries: [
      { name: 'Brazil', x: 25, y: 35 },
      { name: 'Argentina', x: 20, y: 40 },
      { name: 'Chile', x: 18, y: 38 },
      { name: 'Colombia', x: 22, y: 42 },
    ]
  },
  {
    name: 'Oceania',
    x: 80,
    y: 60,
    countries: [
      { name: 'Australia', x: 80, y: 60 },
    ]
  }
]

const expansionRoutes: Route[] = [
  // West Africa
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 25, y: 35, label: 'Nigeria' }, delay: 0 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 55, y: 45, label: 'Ghana' }, delay: 0.3 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 30, y: 50, label: 'Ivory Coast' }, delay: 0.6 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 35, y: 25, label: 'Senegal' }, delay: 0.9 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 32, y: 30, label: 'Guinea' }, delay: 1.2 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 38, y: 28, label: 'Sierra Leone' }, delay: 1.5 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 42, y: 32, label: 'Guinea-Bissau' }, delay: 1.8 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 45, y: 38, label: 'Togo' }, delay: 2.1 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 48, y: 40, label: 'Benin' }, delay: 2.4 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 28, y: 42, label: 'Mali' }, delay: 2.7 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 33, y: 45, label: 'Burkina Faso' }, delay: 3.0 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 40, y: 35, label: 'Niger' }, delay: 3.3 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 22, y: 38, label: 'Gambia' }, delay: 3.6 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 35, y: 48, label: 'Cape Verde' }, delay: 3.9 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 30, y: 55, label: 'São Tomé' }, delay: 4.2 },
  
  // East Africa
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 80, y: 40, label: 'Kenya' }, delay: 4.5 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 75, y: 45, label: 'Tanzania' }, delay: 4.8 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 78, y: 38, label: 'Uganda' }, delay: 5.1 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 85, y: 42, label: 'Ethiopia' }, delay: 5.4 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 82, y: 35, label: 'Rwanda' }, delay: 5.7 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 80, y: 33, label: 'Burundi' }, delay: 6.0 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 88, y: 40, label: 'Somalia' }, delay: 6.3 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 70, y: 48, label: 'Mozambique' }, delay: 6.6 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 72, y: 50, label: 'Madagascar' }, delay: 6.9 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 65, y: 52, label: 'Zambia' }, delay: 7.2 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 68, y: 55, label: 'Zimbabwe' }, delay: 7.5 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 75, y: 55, label: 'Malawi' }, delay: 7.8 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 60, y: 48, label: 'DRC' }, delay: 8.1 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 62, y: 45, label: 'Congo' }, delay: 8.4 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 55, y: 42, label: 'Gabon' }, delay: 8.7 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 52, y: 40, label: 'Cameroon' }, delay: 9.0 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 50, y: 38, label: 'Equatorial Guinea' }, delay: 9.3 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 48, y: 35, label: 'Central African Republic' }, delay: 9.6 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 58, y: 38, label: 'Chad' }, delay: 9.9 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 65, y: 35, label: 'South Sudan' }, delay: 10.2 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 70, y: 30, label: 'Sudan' }, delay: 10.5 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 75, y: 28, label: 'Eritrea' }, delay: 10.8 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 78, y: 30, label: 'Djibouti' }, delay: 11.1 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 20, y: 65, label: 'South Africa' }, delay: 11.4 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 25, y: 60, label: 'Namibia' }, delay: 11.7 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 22, y: 55, label: 'Botswana' }, delay: 12.0 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 30, y: 58, label: 'Lesotho' }, delay: 12.3 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 28, y: 56, label: 'Eswatini' }, delay: 12.6 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 35, y: 52, label: 'Angola' }, delay: 12.9 },
  
  // North Africa
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 52, y: 25, label: 'Egypt' }, delay: 13.2 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 48, y: 22, label: 'Libya' }, delay: 13.5 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 45, y: 20, label: 'Tunisia' }, delay: 13.8 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 42, y: 18, label: 'Algeria' }, delay: 14.1 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 38, y: 22, label: 'Morocco' }, delay: 14.4 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 40, y: 20, label: 'Western Sahara' }, delay: 14.7 },
  
  // Global
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 85, y: 25, label: 'China' }, delay: 15.0 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 15, y: 30, label: 'USA' }, delay: 15.3 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 48, y: 28, label: 'UK' }, delay: 15.6 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 52, y: 22, label: 'France' }, delay: 15.9 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 55, y: 20, label: 'Germany' }, delay: 16.2 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 50, y: 18, label: 'Netherlands' }, delay: 16.5 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 58, y: 18, label: 'India' }, delay: 16.8 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 75, y: 20, label: 'Japan' }, delay: 17.1 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 78, y: 22, label: 'South Korea' }, delay: 17.4 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 82, y: 25, label: 'Singapore' }, delay: 17.7 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 80, y: 60, label: 'Australia' }, delay: 18.0 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 25, y: 35, label: 'Brazil' }, delay: 18.3 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 20, y: 40, label: 'Argentina' }, delay: 18.6 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 18, y: 38, label: 'Chile' }, delay: 18.9 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 22, y: 42, label: 'Colombia' }, delay: 19.2 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 15, y: 45, label: 'Mexico' }, delay: 19.5 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 55, y: 35, label: 'UAE' }, delay: 19.8 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 58, y: 30, label: 'Saudi Arabia' }, delay: 20.1 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 60, y: 28, label: 'Qatar' }, delay: 20.4 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 62, y: 32, label: 'Turkey' }, delay: 20.7 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 53, y: 25, label: 'Israel' }, delay: 21.0 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 56, y: 26, label: 'Jordan' }, delay: 21.3 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 65, y: 25, label: 'Iran' }, delay: 21.6 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 70, y: 28, label: 'Pakistan' }, delay: 21.9 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 68, y: 30, label: 'Afghanistan' }, delay: 22.2 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 72, y: 32, label: 'Bangladesh' }, delay: 22.5 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 75, y: 35, label: 'Thailand' }, delay: 22.8 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 78, y: 38, label: 'Vietnam' }, delay: 23.1 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 80, y: 40, label: 'Philippines' }, delay: 23.4 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 77, y: 42, label: 'Indonesia' }, delay: 23.7 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 73, y: 45, label: 'Malaysia' }, delay: 24.0 },
  { from: { x: 50, y: 55, label: 'Liberia' }, to: { x: 12, y: 32, label: 'Canada' }, delay: 24.3 },
]

export default function TechGlobe() {
  const [rotation, setRotation] = useState(0)
  const [currentView, setCurrentView] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.3) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentView(prev => (prev + 1) % continents.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 194, 138, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 194, 138, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Globe container */}
      <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
        {/* Globe sphere with realistic Earth colors and axial tilt */}
        <motion.div
          animate={{ rotateY: rotation }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #1a4d7a, #0a1628)',
            border: '2px solid rgba(100, 150, 200, 0.3)',
            boxShadow: '0 0 60px rgba(100, 150, 200, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.5)',
            transformStyle: 'preserve-3d',
            transform: 'rotateX(23.5deg)'
          }}
        >
          {/* Realistic world map with country shapes */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 2000 1001" 
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Subtle latitude/longitude grid */}
              {[20, 40, 60, 80].map(lat => (
                <ellipse
                  key={lat}
                  cx="1000"
                  cy="500"
                  rx="900"
                  ry={900 * Math.sin((lat * Math.PI) / 180)}
                  fill="none"
                  stroke="rgba(100, 150, 200, 0.1)"
                  strokeWidth="2"
                />
              ))}
              
              {/* Country shapes from world-map-country-shapes */}
              {countries.map((country) => (
                <path
                  key={country.id}
                  d={country.shape}
                  fill="rgba(34, 139, 34, 0.6)"
                  stroke="rgba(34, 139, 34, 0.8)"
                  strokeWidth="1"
                  className="hover:fill-green-400 transition-colors cursor-pointer"
                />
              ))}
            </svg>
          </div>

          {/* Cloud layer */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)',
              mixBlendMode: 'overlay'
            }}
            animate={{ rotate: rotation * 0.8 }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Cloud patches */}
              <ellipse cx="30" cy="25" rx="10" ry="5" fill="rgba(255, 255, 255, 0.2)" />
              <ellipse cx="60" cy="35" rx="12" ry="6" fill="rgba(255, 255, 255, 0.15)" />
              <ellipse cx="45" cy="55" rx="8" ry="4" fill="rgba(255, 255, 255, 0.18)" />
              <ellipse cx="75" cy="45" rx="9" ry="5" fill="rgba(255, 255, 255, 0.2)" />
              <ellipse cx="20" cy="50" rx="7" ry="3" fill="rgba(255, 255, 255, 0.15)" />
            </svg>
          </motion.div>

          {/* Atmospheric glow */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, transparent 60%, rgba(100, 150, 200, 0.1) 100%)',
              boxShadow: 'inset 0 0 30px rgba(100, 150, 200, 0.2)'
            }}
          />

          {/* Day/night shadow overlay */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'linear-gradient(to right, transparent 40%, rgba(0, 0, 0, 0.7) 100%)',
              mixBlendMode: 'multiply'
            }}
          />

          {/* Sun reflection highlight */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 25% 35%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)',
              mixBlendMode: 'overlay'
            }}
          />

          {/* Continent labels */}
          {continents.map((continent, idx) => (
            <motion.div
              key={continent.name}
              className="absolute"
              style={{
                left: `${continent.x}%`,
                top: `${continent.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                opacity: currentView === idx ? 1 : 0.3,
                scale: currentView === idx ? 1.2 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[10px] font-bold font-mono text-[#00C28A] whitespace-nowrap text-center">
                {continent.name}
              </div>
            </motion.div>
          ))}

          {/* Country markers for all continents */}
          {continents.flatMap((continent, cIdx) =>
            continent.countries.map((country, idx) => (
              <motion.div
                key={`${continent.name}-${country.name}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#00C28A]"
                style={{
                  left: `${country.x}%`,
                  top: `${country.y}%`,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 8px rgba(0, 194, 138, 0.6)'
                }}
                animate={{
                  opacity: currentView === cIdx ? 1 : 0.4,
                  scale: currentView === cIdx ? 1.3 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 text-[7px] font-mono text-[#8A9BBB] whitespace-nowrap"
                  animate={{ opacity: currentView === cIdx ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {country.name}
                </motion.div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Expansion arrows */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          {expansionRoutes.map((route, idx) => (
            <g key={idx}>
              {/* Arrow path */}
              <motion.path
                d={`M ${route.from.x} ${route.from.y} Q ${(route.from.x + route.to.x) / 2} ${(route.from.y + route.to.y) / 2 - 10} ${route.to.x} ${route.to.y}`}
                fill="none"
                stroke="rgba(0, 194, 138, 0.4)"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: route.delay, repeat: Infinity, repeatDelay: 3 }}
              />
              
              {/* Moving dot along path */}
              <motion.circle
                r="1"
                fill="#00C28A"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 3, delay: route.delay, repeat: Infinity, repeatDelay: 2 }}
                style={{
                  filter: 'drop-shadow(0 0 4px rgba(0, 194, 138, 0.8))'
                }}
              >
                <animateMotion
                  dur="3s"
                  begin={`${route.delay}s`}
                  repeatCount="indefinite"
                  path={`M ${route.from.x} ${route.from.y} Q ${(route.from.x + route.to.x) / 2} ${(route.from.y + route.to.y) / 2 - 10} ${route.to.x} ${route.to.y}`}
                />
              </motion.circle>

              {/* Destination marker */}
              <motion.circle
                cx={route.to.x}
                cy={route.to.y}
                r="1.5"
                fill="rgba(0, 194, 138, 0.6)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1, 1.5, 1], opacity: [0, 1, 0.8, 0.6] }}
                transition={{ duration: 2, delay: route.delay + 2.5, repeat: Infinity, repeatDelay: 3 }}
              />
              
              {/* Destination label */}
              <motion.text
                x={route.to.x}
                y={route.to.y - 3}
                fontSize="2"
                fill="#8A9BBB"
                fontFamily="monospace"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2, delay: route.delay + 2.5, repeat: Infinity, repeatDelay: 3 }}
              >
                {route.to.label}
              </motion.text>
            </g>
          ))}
        </svg>

        {/* Orbital rings */}
        <motion.div
          className="absolute inset-0 rounded-full border border-[#00C28A]/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ transform: 'rotateX(60deg)' }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border border-[#00C28A]/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ transform: 'rotateX(60deg) rotateY(45deg)' }}
        />
      </div>

      {/* Stats overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] font-mono text-[#8A9BBB]">
        <div>
          <div className="text-[#00C28A]">EXPANSION_NETWORK</div>
          <div>ACTIVE_ROUTES: {expansionRoutes.length}</div>
        </div>
        <div className="text-right">
          <div>STATUS: LIVE</div>
          <motion.div
            key={currentView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div>REGION: {continents[currentView].name.toUpperCase()}</div>
            <div>COUNTRIES: {continents[currentView].countries.length}</div>
          </motion.div>
        </div>
      </div>

      {/* Continent indicator */}
      <div className="absolute top-4 left-4 right-4 flex justify-center gap-2">
        {continents.map((continent, idx) => (
          <motion.div
            key={continent.name}
            className="w-2 h-2 rounded-full cursor-pointer"
            style={{
              backgroundColor: currentView === idx ? '#00C28A' : 'rgba(0, 194, 138, 0.3)'
            }}
            onClick={() => setCurrentView(idx)}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  )
}
