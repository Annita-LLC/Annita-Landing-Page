# ============================================================================
# ANNITA LANDING PAGE SERVER - DOCKERFILE
# ============================================================================
# Fortune 500 / Pentagon Grade Production Dockerfile
# Based on OWASP Node.js Docker Cheat Sheet & Snyk Best Practices
# ============================================================================

# Use explicit image digest for deterministic builds (CIS Benchmark)
FROM node:22.12.0-alpine@sha256:16e22a550f3863206a3f701448c45f7912c6896a62de43add43bb9c86130c3e2 AS deps

# Set working directory
WORKDIR /app

# Security: Install dumb-init for proper signal handling (CIS Benchmark)
RUN apk add --no-cache dumb-init

# Copy package files with checksum for cache busting
COPY package*.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./

# Install only production dependencies (OWASP/Snyk)
# Use --omit=dev instead of deprecated --only=production
RUN npm ci --omit=dev && \
    npx prisma generate

# Stage 2: Builder
FROM node:22.12.0-alpine@sha256:16e22a550f3863206a3f701448c45f7912c6896a62de43add43bb9c86130c3e2 AS builder
WORKDIR /app

# Copy dependencies and generated Prisma client
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/prisma ./prisma
COPY --from=deps /app/prisma.config.ts ./
COPY --from=deps /app/generated ./generated

# Copy application source
COPY --chown=appuser:nodejs src ./src
COPY --chown=appuser:nodejs package*.json ./

# Stage 3: Runner - Minimal runtime image
FROM node:22.12.0-alpine@sha256:16e22a550f3863206a3f701448c45f7912c6896a62de43add43bb9c86130c3e2 AS runner

WORKDIR /app

# Security: Install dumb-init for proper signal handling (CIS Benchmark)
RUN apk add --no-cache dumb-init

# Security: Create non-root user with specific UID/GID (OWASP)
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 --ingroup nodejs --shell /sbin/nologin appuser

# Security: Set ownership for all copied files (OWASP)
COPY --from=deps --chown=appuser:nodejs /app/node_modules ./node_modules
COPY --from=deps --chown=appuser:nodejs /app/prisma ./prisma
COPY --from=deps --chown=appuser:nodejs /app/prisma.config.ts ./
COPY --from=deps --chown=appuser:nodejs /app/generated ./generated
COPY --from=builder --chown=appuser:nodejs /app/src ./src
COPY --from=builder --chown=appuser:nodejs /app/package*.json ./

# Security: Ensure proper permissions on writable directories
RUN chown -R appuser:nodejs /app/generated && \
    mkdir -p /app/logs && \
    chown -R appuser:nodejs /app/logs

# Security: Set environment variables (OWASP/Snyk)
ENV NODE_ENV=production \
    NODE_OPTIONS=--max-old-space-size=512 \
    TZ=UTC

# Security: Switch to non-root user (OWASP/CIS)
USER appuser

# Expose port
EXPOSE 8080

# Security: Health check with proper timeout and retries (CIS Benchmark)
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:${PORT:-8080}/health || exit 1

# Security: Use dumb-init for proper signal handling (OWASP/CIS)
ENTRYPOINT ["dumb-init", "--"]

# Start server
CMD ["node", "--import=tsx", "src/index.ts"]
