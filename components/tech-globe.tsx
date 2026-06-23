'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Route {
  from: { x: number; y: number; label: string }
  to: { x: number; y: number; label: string }
  delay: number
}

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

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.2) % 360)
    }, 50)
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
        {/* Globe sphere */}
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(0, 194, 138, 0.3), rgba(8, 13, 26, 0.9))',
            border: '2px solid rgba(0, 194, 138, 0.3)',
            boxShadow: '0 0 60px rgba(0, 194, 138, 0.2), inset 0 0 60px rgba(0, 194, 138, 0.1)'
          }}
        >
          {/* Grid lines on globe */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Latitude lines */}
              {[20, 40, 60, 80].map(lat => (
                <ellipse
                  key={lat}
                  cx="50"
                  cy="50"
                  rx="45"
                  ry={45 * Math.sin((lat * Math.PI) / 180)}
                  fill="none"
                  stroke="rgba(0, 194, 138, 0.15)"
                  strokeWidth="0.3"
                />
              ))}
              {/* Longitude lines */}
              {[0, 30, 60, 90, 120, 150].map(lon => (
                <ellipse
                  key={lon}
                  cx="50"
                  cy="50"
                  rx={45 * Math.cos((lon * Math.PI) / 180)}
                  ry="45"
                  fill="none"
                  stroke="rgba(0, 194, 138, 0.15)"
                  strokeWidth="0.3"
                  transform={`rotate(${lon} 50 50)`}
                />
              ))}
            </svg>
          </div>

          {/* Country markers */}
          {expansionRoutes.map((route, idx) => (
            <div
              key={`from-${idx}`}
              className="absolute w-2 h-2 rounded-full bg-[#00C28A] animate-pulse"
              style={{
                left: `${route.from.x}%`,
                top: `${route.from.y}%`,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 10px rgba(0, 194, 138, 0.8)'
              }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-mono text-[#00C28A] whitespace-nowrap">
                {route.from.label}
              </div>
            </div>
          ))}
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
          <div>REGION: WEST_AFRICA</div>
        </div>
      </div>
    </div>
  )
}
