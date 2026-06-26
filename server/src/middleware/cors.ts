// ============================================================================
// ANNITA LANDING PAGE SERVER - CORS MIDDLEWARE
// ============================================================================
// Fortune 500 / Pentagon Grade CORS Configuration
// ============================================================================

import cors from 'cors';
import { config } from '../config/index.js';

export const corsMiddleware = cors({
  origin: config.security.corsOrigin,
  credentials: config.security.corsCredentials,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-ID'],
  exposedHeaders: ['X-Request-ID', 'X-RateLimit-Limit', 'X-RateLimit-Remaining', 'X-RateLimit-Reset'],
  maxAge: 86400, // 24 hours
});
