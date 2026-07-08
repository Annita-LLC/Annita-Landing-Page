// ============================================================================
// ANNITA LANDING PAGE SERVER - CORS MIDDLEWARE
// ============================================================================
// Fortune 500 / Pentagon Grade CORS Configuration
// ============================================================================

import cors from 'cors';
import { config } from '../config/index.js';
import { logger } from '../lib/logger.js';

// Build the explicit origin allowlist. Never permit the literal `*` here,
// even if a future operator accidentally puts `*` in `CORS_ORIGIN` — that
// would re-open a footgun. We log if the wildcard is detected and ignore it.
const rawOrigins = config.security.corsOrigin
  .map(o => o.trim())
  .filter(o => o.length > 0);

if (rawOrigins.includes('*')) {
  logger.warn('CORS_ORIGIN contains wildcard "*" which is refused by the CORS middleware — ignoring the wildcard to prevent credential leakage. Use an explicit origin allowlist.');
}

const allowedOrigins = new Set(
  rawOrigins.filter(o => o !== '*')
);

// `origin` callback form lets us make per-request allow decisions and
// explicitly reject the dangerous `*` semantics even when `CORS_CREDENTIALS`
// is later flipped on. If the allowlist is empty we fall back to refusing
// cross-origin requests (more fail-safe than allowing everything).
export const corsMiddleware = cors({
  origin: (origin: string | undefined, callback: (err: Error | null, ok?: boolean) => void): void => {
    // Allow same-origin / no-Origin requests (curl, server-to-server, browser
    // same-origin fetches, browser extensions on private tabs). Per the CORS
    // spec, browsers omit the Origin header on same-origin or non-HTTP(s)
    // requests, so allowing `undefined` does not expose authenticated data.
    if (!origin) return callback(null, true);

    if (allowedOrigins.size === 0) {
      // Fail closed.
      return callback(null, false);
    }

    if (allowedOrigins.has(origin)) {
      return callback(null, true);
    }
    return callback(null, false);
  },
  credentials: config.security.corsCredentials,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-ID'],
  exposedHeaders: ['X-Request-ID', 'X-RateLimit-Limit', 'X-RateLimit-Remaining', 'X-RateLimit-Reset'],
  maxAge: 86400, // 24 hours
  optionsSuccessStatus: 204,
});
