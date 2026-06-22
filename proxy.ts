// ============================================================================
// FORTUNE 500 / PENTAGON-GRADE SECURITY PROXY
// ============================================================================
// Landing Page Security Proxy (Next.js Proxy Convention)
// - Request ID generation for distributed tracing
// - Bot detection and classification
// - Rate limiting (application-level backup to Envoy)
// - Security headers validation and injection
// - IP reputation scoring
// - Request sanitization
// - DDoS protection patterns
// ============================================================================

import { NextRequest, NextResponse } from 'next/server'

// ============================================================================
// SECURITY CONFIGURATION
// ============================================================================
const SECURITY_CONFIG = {
  // Rate limiting configuration
  RATE_LIMIT: {
    WINDOW_MS: 60 * 1000, // 1 minute
    MAX_REQUESTS: 100, // 100 requests per minute per IP
    BURST_LIMIT: 150, // Allow burst traffic
  },
  
  // Bot detection patterns
  BOT_PATTERNS: [
    /bot/i,
    /crawl/i,
    /spider/i,
    /scraper/i,
    /curl/i,
    /wget/i,
    /python/i,
    /java/i,
    /go-http-client/i,
    /headless/i,
    /phantom/i,
    /selenium/i,
    /puppeteer/i,
    /playwright/i,
    /axios/i,
    /node/i,
  ],
  
  // Malicious user agent patterns
  MALICIOUS_UA: [
    /sqlmap/i,
    /nmap/i,
    /metasploit/i,
    /burp/i,
    /owasp/i,
    /nikto/i,
    /w3af/i,
    /hydra/i,
    /medusa/i,
    /john/i,
  ],
  
  // Suspicious request patterns
  SUSPICIOUS_PATTERNS: [
    /\.\./, // Path traversal
    /<script/i, // XSS attempt
    /javascript:/i, // XSS attempt
    /onerror=/i, // XSS attempt
    /onload=/i, // XSS attempt
    /eval\(/i, // Code injection
    /exec\(/i, // Command injection
    /union.*select/i, // SQL injection
    /drop.*table/i, // SQL injection
    /<\?php/i, // PHP injection
  ],
  
  // Trusted origins
  TRUSTED_ORIGINS: [
    'https://an-nita.com',
    'https://www.an-nita.com',
    'http://localhost:3000',
    'http://localhost:8080',
  ],
  
  // IP reputation thresholds
  IP_REPUTATION: {
    SUSPICIOUS_THRESHOLD: 3,
    MALICIOUS_THRESHOLD: 5,
    BLOCK_THRESHOLD: 10,
  },
}

// ============================================================================
// IN-MEMORY RATE LIMITING (Backup to Envoy Redis-based rate limiting)
// ============================================================================
interface RateLimitEntry {
  count: number
  resetTime: number
  blocked: boolean
}

const rateLimitStore = new Map<string, RateLimitEntry>()
const ipReputationStore = new Map<string, number>()

// ============================================================================
// REQUEST ID GENERATOR
// ============================================================================
function generateRequestId(): string {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substring(2, 15)
  const counter = (Math.random() * 1000).toString(36)
  return `${timestamp}-${random}-${counter}`.toUpperCase()
}

// ============================================================================
// IP ADDRESS EXTRACTION
// ============================================================================
function extractIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  return request.headers.get('x-real-ip') || 'unknown'
}

// ============================================================================
// BOT DETECTION
// ============================================================================
function detectBot(userAgent: string): { isBot: boolean; botType: string } {
  const ua = userAgent.toLowerCase()
  
  for (const pattern of SECURITY_CONFIG.BOT_PATTERNS) {
    if (pattern.test(ua)) {
      return { isBot: true, botType: pattern.source }
    }
  }
  
  return { isBot: false, botType: 'none' }
}

// ============================================================================
// MALICIOUS USER AGENT DETECTION
// ============================================================================
function detectMaliciousUA(userAgent: string): boolean {
  const ua = userAgent.toLowerCase()
  return SECURITY_CONFIG.MALICIOUS_UA.some(pattern => pattern.test(ua))
}

// ============================================================================
// SUSPICIOUS REQUEST PATTERN DETECTION
// ============================================================================
function detectSuspiciousPatterns(url: string, body?: string): boolean {
  const combined = url + (body || '')
  return SECURITY_CONFIG.SUSPICIOUS_PATTERNS.some(pattern => pattern.test(combined))
}

// ============================================================================
// IP REPUTATION SCORING
// ============================================================================
function updateIpReputation(ip: string, score: number): number {
  const currentScore = ipReputationStore.get(ip) || 0
  const newScore = Math.max(0, currentScore + score)
  ipReputationStore.set(ip, newScore)
  
  // Decay reputation over time (reset after 1 hour)
  setTimeout(() => {
    const stored = ipReputationStore.get(ip)
    if (stored === newScore) {
      ipReputationStore.delete(ip)
    }
  }, 60 * 60 * 1000)
  
  return newScore
}

// ============================================================================
// RATE LIMITING CHECK
// ============================================================================
function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)
  
  if (!entry || now > entry.resetTime) {
    // Create new entry or reset expired entry
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + SECURITY_CONFIG.RATE_LIMIT.WINDOW_MS,
      blocked: false,
    })
    return { allowed: true, remaining: SECURITY_CONFIG.RATE_LIMIT.MAX_REQUESTS - 1, resetTime: now + SECURITY_CONFIG.RATE_LIMIT.WINDOW_MS }
  }
  
  if (entry.blocked) {
    return { allowed: false, remaining: 0, resetTime: entry.resetTime }
  }
  
  entry.count++
  
  if (entry.count > SECURITY_CONFIG.RATE_LIMIT.MAX_REQUESTS) {
    entry.blocked = true
    updateIpReputation(ip, 2) // Penalize IP for rate limit violation
    return { allowed: false, remaining: 0, resetTime: entry.resetTime }
  }
  
  const remaining = SECURITY_CONFIG.RATE_LIMIT.MAX_REQUESTS - entry.count
  return { allowed: true, remaining, resetTime: entry.resetTime }
}

// ============================================================================
// SECURITY HEADERS GENERATION
// ============================================================================
function generateSecurityHeaders(requestId: string): Record<string, string> {
  return {
    'X-Request-ID': requestId,
    'X-Pentagon-Security': 'enabled',
    'X-Security-Version': '1.0.0',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), camera=(), microphone=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
    'X-DNS-Prefetch-Control': 'on',
  }
}

// ============================================================================
// SECURITY LOGGING
// ============================================================================
function logSecurityEvent(
  level: 'info' | 'warn' | 'error',
  event: string,
  details: Record<string, any>
): void {
  const timestamp = new Date().toISOString()
  const logEntry = {
    timestamp,
    level,
    event,
    ...details,
  }
  
  console.log(`[Security] ${JSON.stringify(logEntry)}`)
}

// ============================================================================
// MAIN PROXY HANDLER
// ============================================================================
export async function proxy(request: NextRequest) {
  const startTime = Date.now()
  const requestId = generateRequestId()
  const ip = extractIp(request)
  const userAgent = request.headers.get('user-agent') || 'unknown'
  const url = request.nextUrl.pathname
  const method = request.method
  
  // ============================================================================
  // INITIAL SECURITY CHECKS
  // ============================================================================
  
  // Check for malicious user agents
  if (detectMaliciousUA(userAgent)) {
    logSecurityEvent('error', 'MALICIOUS_UA_BLOCKED', {
      ip,
      userAgent,
      requestId,
      url,
    })
    
    updateIpReputation(ip, SECURITY_CONFIG.IP_REPUTATION.BLOCK_THRESHOLD)
    
    return new NextResponse('Forbidden', {
      status: 403,
      headers: {
        ...generateSecurityHeaders(requestId),
        'X-Block-Reason': 'malicious-user-agent',
      },
    })
  }
  
  // Bot detection
  const botDetection = detectBot(userAgent)
  if (botDetection.isBot) {
    logSecurityEvent('warn', 'BOT_DETECTED', {
      ip,
      userAgent,
      botType: botDetection.botType,
      requestId,
      url,
    })
    
    updateIpReputation(ip, 1)
  }
  
  // Check IP reputation
  const ipReputation = ipReputationStore.get(ip) || 0
  if (ipReputation >= SECURITY_CONFIG.IP_REPUTATION.BLOCK_THRESHOLD) {
    logSecurityEvent('error', 'IP_BLOCKED', {
      ip,
      reputation: ipReputation,
      requestId,
      url,
    })
    
    return new NextResponse('Forbidden', {
      status: 403,
      headers: {
        ...generateSecurityHeaders(requestId),
        'X-Block-Reason': 'ip-reputation',
        'X-IP-Reputation': ipReputation.toString(),
      },
    })
  }
  
  // Rate limiting check
  const rateLimitResult = checkRateLimit(ip)
  if (!rateLimitResult.allowed) {
    logSecurityEvent('warn', 'RATE_LIMIT_EXCEEDED', {
      ip,
      requestId,
      url,
    })
    
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        ...generateSecurityHeaders(requestId),
        'Retry-After': '60',
        'X-RateLimit-Limit': SECURITY_CONFIG.RATE_LIMIT.MAX_REQUESTS.toString(),
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
      },
    })
  }
  
  // Check for suspicious patterns in URL
  if (detectSuspiciousPatterns(url)) {
    logSecurityEvent('error', 'SUSPICIOUS_PATTERN_DETECTED', {
      ip,
      url,
      requestId,
    })
    
    updateIpReputation(ip, SECURITY_CONFIG.IP_REPUTATION.MALICIOUS_THRESHOLD)
    
    return new NextResponse('Bad Request', {
      status: 400,
      headers: {
        ...generateSecurityHeaders(requestId),
        'X-Block-Reason': 'suspicious-pattern',
      },
    })
  }
  
  // Check for suspicious patterns in request body (for POST/PUT/PATCH)
  if (['POST', 'PUT', 'PATCH'].includes(method)) {
    const contentType = request.headers.get('content-type') || ''
    if (!contentType.includes('application/json') && !contentType.includes('multipart/form-data')) {
      logSecurityEvent('warn', 'INVALID_CONTENT_TYPE', {
        ip,
        contentType,
        requestId,
        url,
      })
      
      return new NextResponse('Unsupported Media Type', {
        status: 415,
        headers: generateSecurityHeaders(requestId),
      })
    }
    
    // For JSON requests, we could validate the body here
    // This is a simplified check - in production, you'd want to parse and validate
    try {
      const clonedRequest = request.clone()
      const body = await clonedRequest.text()
      if (body && detectSuspiciousPatterns(url, body)) {
        logSecurityEvent('error', 'SUSPICIOUS_PATTERN_IN_BODY', {
          ip,
          url,
          requestId,
        })
        
        updateIpReputation(ip, SECURITY_CONFIG.IP_REPUTATION.MALICIOUS_THRESHOLD)
        
        return new NextResponse('Bad Request', {
          status: 400,
          headers: {
            ...generateSecurityHeaders(requestId),
            'X-Block-Reason': 'suspicious-pattern-body',
          },
        })
      }
    } catch (error) {
      // If we can't read the body, continue anyway
    }
  }
  
  // ============================================================================
  // ALLOW REQUEST TO PROCEED
  // ============================================================================
  
  const response = NextResponse.next()
  
  // Add security headers
  Object.entries(generateSecurityHeaders(requestId)).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  
  // Add rate limit headers
  response.headers.set('X-RateLimit-Limit', SECURITY_CONFIG.RATE_LIMIT.MAX_REQUESTS.toString())
  response.headers.set('X-RateLimit-Remaining', rateLimitResult.remaining.toString())
  response.headers.set('X-RateLimit-Reset', rateLimitResult.resetTime.toString())
  
  // Add bot detection header
  response.headers.set('X-Bot-Detection', botDetection.isBot ? 'true' : 'false')
  if (botDetection.isBot) {
    response.headers.set('X-Bot-Type', botDetection.botType)
  }
  
  // Add IP reputation header
  response.headers.set('X-IP-Reputation', ipReputation.toString())
  
  // Add timing header
  const duration = Date.now() - startTime
  response.headers.set('X-Process-Time', `${duration}ms`)
  
  // Log successful request
  logSecurityEvent('info', 'REQUEST_ALLOWED', {
    ip,
    method,
    url,
    requestId,
    botDetected: botDetection.isBot,
    ipReputation,
    duration,
  })
  
  return response
}

// ============================================================================
// PROXY CONFIGURATION
// ============================================================================
export const config = {
  // Match all paths except static files and Next.js internals
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public|api/health).*)',
  ],
}
