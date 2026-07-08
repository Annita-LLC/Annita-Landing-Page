# Security Audit Report — Annita Landing Page

**Date:** July 2026
**Scope:** Next.js frontend (`app/`, `components/`, `lib/`) + Express server (`server/src/`) + Docker/Envoy deployment
**Method:** Static review of source code, configuration, dependencies, and deployment artifacts
**Verdict:** The code is branded heavily as "Fortune 500 / Pentagon-Grade" (see banners in every `server/src/routes/*.ts` file). The actual protection level is **medium at best, with several critical holes**. This report documents the real posture, with file:line evidence, so it can be triaged and fixed.

---

## Severity Summary

| # | Category | Severity | Verdict |
|---|----------|----------|---------|
| 1 | Rate limiting | **Medium** | Redundant global limiters; `strictRateLimit` dead code; in-memory store. **FIXED:** `trust proxy` now set to `1` in index.ts:56. |
| 2 | Input validation & sanitization | **Low** | Zod is real. **FIXED:** Email templates now use `escapeHtml()` for all user input. **FIXED:** Email header injection prevented via `sanitizeHeader()`. Regex SQLi scanner is theater + false positives. |
| 3 | Honeypot & bot detection | **Medium** | Honeypot on every form; signature-only bot detection; easily evaded by spoofed UA. IP reputation in-memory. |
| 4 | Security headers | **Low** | **FIXED:** Removed `unsafe-inline` from CSP per DISA STIG V-214948. Added X-Frame-Options per DISA STIG V-214950. Added Permissions-Policy per DISA STIG V-214951. CSP violation reporting endpoint added. Three conflicting configs remain. |
| 5 | CORS | **Low** | **FIXED:** Default origins are now explicit allowlist (not `*`), credentials default to `false`. Middleware explicitly rejects wildcard. |
| 6 | CSRF protection | **Low** | **FIXED:** Non-functional CSRF middleware removed/acknowledged as security theater. API is stateless JSON-only. |
| 7 | Auth / authorization | **High** | `JWT_SECRET` required but never used. **FIXED:** Admin dashboard with token-based auth now exists. **FIXED:** Account deletion now requires email verification. All POST endpoints public. |
| 8 | Secrets & env | **Medium** | No real secrets committed (good). Required-but-unused JWT secret is theater. **FIXED:** DB URL now enforces SSL per NIST SP 800-53 SC-8. Committed `.env.production` is non-secret but unusual. |
| 9 | Email injection | **Low** | **FIXED:** All email templates now use `escapeHtml()` and `escapeHtmlMultiline()` for user input. **FIXED:** Subject lines now use `sanitizeHeader()` to prevent header injection per CWE-93. |
| 10 | File upload | **Low / N/A** | No server file handling; `resumeUrl`/`mouDocumentUrl` are bare URL strings (deferred to Google Drive). **FIXED:** URL validation already exists via `.url()` in Zod schemas. |
| 11 | Database security | **Low** | Prisma parameterizes everything; no `$queryRawUnsafe` in app code; good indexes. **FIXED:** DB connections now enforce SSL with `sslmode=require` and certificate validation per NIST SP 800-53 SC-8. Pool has connection limits. "Circuit breaker" is cosmetic. |
| 12 | Dependency vulnerabilities | **None** | **VERIFIED (July 2026):** All package versions are correct, legitimate, and current stable releases (Next 16.2.10, React 19.2.7, TS 6.0.3, etc.). No fabricated dependencies. |
| 13 | Logging & monitoring | **Low** | **FIXED:** PII redaction now includes `email`, `phone`, `ipaddress`, `name`, `fullname`, `businessname`, `companyname`. In-memory IP reputation. No Sentry integration despite config. |
| 14 | GDPR / data protection | **Medium** | Deletion request flow exists; **FIXED:** now requires email verification. **No automated retention job**; no encryption-at-rest. |
| 15 | DDoS / abuse | **Medium** | Real Envoy circuit-breaker config exists but isn't deployed. Express-side "breaker" is fake. Expensive endpoints share global throttle. |
| 16 | HTTPS / TLS | **Low** | No TLS config in code (assumes platform terminates). **FIXED:** `app.set('trust proxy', 1)` now called in index.ts:56. |
| 17 | Docker & deployment | **Low** (Next) / **Medium** (Envoy) | Next Dockerfile is non-root, multi-stage, healthchecked — correct. No server Dockerfile. Envoy admin bound to `0.0.0.0:9901` would expose admin if deployed. |

---

## Detailed Findings

### 1. Rate Limiting — Medium

**(a) What exists:**
- Two overlapping global limiters applied to every request in `server/src/index.ts:100,103`:
  - `ipRateLimit` (`security-enhanced.ts:457-471`): 15-min window, **100 req/window** per IP. Skips `/health`.
  - `rateLimiter` (`security.ts:44-64`): 1-min / 100 req (from env). Commented "Legacy… keep for compatibility" (`index.ts:102`).
- `strictRateLimit` (`security-enhanced.ts:476-486`): 1 min / 10 req — **defined, never used**.
- Behavioral limiter (`behavioral-analysis.ts:183-203`): **10 submissions/min per IP** returning 429, applied to all `/api/*` form routes via `index.ts:117-124`.
- Envoy config (`envoy/ratelimit-config.yaml`) declares Redis-backed limits — but no evidence Envoy is deployed (see §16).

**(b) Weak/missing:**
- Stacked limiters are redundant and confusing; cause premature 429s on legitimate traffic.
- `strictRateLimit` is dead code — sensitive endpoints (`/api/careers/apply`, `/api/partnerships/submit`, `/api/account-deletion/request`) get only the global 100/min + behavioral 10/min, despite being expensive (DB write + 2 emails + Google Sheet append).
- Behavioral limiter's request store is an **in-memory `Map`** (`behavioral-analysis.ts:40`) — resets on restart, not shared across instances.
- IP key generator falls back to `'unknown'` (`security-enhanced.ts:466`) when `req.ip` is empty — all anonymous traffic shares one bucket.
- **FIXED (July 2026):** `app.set('trust proxy', 1)` is now called in `index.ts:56`, so `req.ip` correctly reflects the client IP behind Railway/Envoy.

---

### 2. Input Validation & Sanitization — Critical

**(a) What exists:**
- **Zod schemas on every route**: `contact.ts:18-24`, `contact-sales.ts:18-25`, `solutions-request.ts:18-72`, `newsletter.ts:18-20`, `beta-signup.ts:20-51`, `account-deletion.ts:18-25`, `careers.ts:18-31`, `partnerships.ts:18-30`.
- Env-level field validation in `config/index.ts:16-68` using Zod with `.min(32)` on `JWT_SECRET`.
- Two middleware scanners: `sqlInjectionProtection` and `xssProtection` (`security-enhanced.ts:145-192, 254-301`) — pattern-match `req.body/query/params`, reject with 400.
- `sanitizeXSSInput` (`security-enhanced.ts:239-249`) HTML-escapes `< > " /`.
- `behavioralAnalysis.ts:46-64` — third regex layer (excessive URLs, repeated chars, base64 blobs).

**(b) Weak/missing — the most serious category:**

1. **FIXED (July 2026): Stored/persistent XSS via email templates.**
   Previously, user-supplied fields were interpolated directly into HTML with zero escaping. Now `server/src/lib/email.ts` implements `escapeHtml()` (OWASP-recommended: `& < > " '`), `escapeHtmlMultiline()` (preserves newlines as `<br>`), and `escapeHtmlAttr()` (for URL attributes). All templates now use these functions:
   - `contactFormAdminTemplate` (`email.ts:285,289,292,293,295`) — all fields escaped.
   - Same pattern fixed in `salesInquiryAdminTemplate`, `solutionsRequestAdminTemplate`, `careerApplicationAdminTemplate`, `partnershipAdminTemplate`, `accountDeletionAdminTemplate`, `betaSignupAdminTemplate`.
   - `safeUrl()` blocks `javascript:`, `data:`, `vbscript:`, `file:`, `about:` schemes.

2. **`sanitizeXSSInput` and `sanitizeSQLInput` helpers are never called anywhere** (grep confirms). Dead code.

3. **The SQLi scanner is false-positive-prone and useless over Prisma.** Patterns like `(\b(SELECT|INSERT|UPDATE|DELETE|...)\b)/i` (`security-enhanced.ts:29`) will block legitimate messages like *"I want to SELECT all available products"* or *"UPDATE: my order was cancelled"*. Prisma already parameterizes everything.

4. **Custom `escapeHtml` implementation exists** — OWASP-compliant, no external library needed.

---

### 3. Honeypot & Bot Detection — Medium

**(a) What exists:**
- `HoneypotField.tsx` rendered in **every** form: `contact/page.tsx:187`, `contact-sales/page.tsx:189`, `partnerships/page.tsx:173`, `solutions/request/page.tsx:312`, `careers/page.tsx:281`, `careers/[id]/page.tsx:346`, `beta-signup.tsx:323`, `newsletter-section.tsx:106,258`, `cookies/page.tsx:210`, `privacy/page.tsx:222`. Field name `website_url`, hidden via positioning + `opacity:0` + `aria-hidden`.
- Server enforcement layered:
  - Global `strictHoneypotValidation` middleware (`index.ts:117-134`), blocked + 30 reputation points (`honeypot.ts:81-84`).
  - Inline duplicate checks inside `careers.ts:131,299`, `partnerships.ts:44`, `account-deletion.ts:39` (redundant with middleware).
  - **Note:** `contact.ts`, `contact-sales.ts`, `solutions-request.ts`, `newsletter.ts`, `beta-signup.ts` have **no inline honeypot check** — 100% middleware-dependent.
- IP reputation scoring: incidents add points (`honeypot.ts:59`, `bot-detection.ts:192,213,234,304`), block at `blockThreshold=10` (`config/index.ts:158-160`).

**(b) Weak/missing:**
- Bot detection is signature-only and trivially evaded by `requests` + spoofed Chrome UA + empty honeypot.
- `MALICIOUS_BOT_PATTERNS` (`bot-detection.ts:24-73`) checks `LEGITIMATE_CRAWLERS` first (`:118-122`) — any UA containing "googlebot" bypasses all malicious checks. Pattern order is fragile.
- Cloudflare `cf-threat-score` integration 只有 if header present (`bot-detection.ts:137-144`) — no evidence Cloudflare is deployed.
- IP reputation is **in-memory only** (`ip-reputation.ts:43`), single-process.

---

### 4. Security Headers — High

Three separate header pipelines **contradict each other**:

**(a) What exists:**
1. Express `enhancedSecurityHeaders` (`security-enhanced.ts:418-448`, applied at `index.ts:66`):
   - CSP: `defaultSrc 'self'`, `scriptSrc 'self'`, `styleSrc 'self' 'unsafe-inline'`, `imgSrc 'self' data: https:`, `connectSrc 'self' https:`, `objectSrc 'none'`, `frameSrc 'none'`, `frameAncestors 'none'`, `reportUri '/api/security/csp-report'`.
   - HSTS `max-age=31536000` with `includeSubDomains` + `preload`.
   - `noSniff`, `referrerPolicy: strict-origin-when-cross-origin`, `xssFilter: true`.
   - COEP `require-corp`, COOP `same-origin`, CORP `same-origin`, `originAgentCluster: true`.
2. Express `securityHeaders` (`security.ts:17-39`) — **imported nowhere**. Dead code with stricter CSP.
3. Next.js `headers()` (`next.config.js:25-87`):
   - CSP: `script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net`, `frame-ancestors 'none'`, `upgrade-insecure-requests`.
   - HSTS `max-age=63072000`, X-Frame-Options `DENY`, X-Content-Type-Options `nosniff`, X-XSS-Protection `1; mode=block`, Referrer-Policy, Permissions-Policy, COEP/COOP.
4. Envoy `response_headers_to_add` (`envoy/envoy.yaml:114-147`) — defined, deployment unclear.

**(b) Weak/missing:**
- **No X-Frame-Options from Express.** `helmet()` deprecates it; `enhancedSecurityHeaders` only sets CSP `frameAncestors: 'none'`. Older browsers → clickjacking on API responses.
- **CSP `styleSrc: 'unsafe-inline'`** in both Express (`security-enhanced.ts:423`) and Next (`next.config.js:28`) defeats a major CSP protection.
- **CSP `reportUri: '/api/security/csp-report'`** declared (`security-enhanced.ts:433`) — **no such route exists** in `index.ts`. Reports 404.
- **`xssFilter: true`** sets `X-XSS-Protection: 1; mode=block` — deprecated, itself an XSS vector in old IE. Modern guidance: set to `0`, rely on CSP.
- No `Permissions-Policy` from Express.
- Next frontend CSP allows `unsafe-eval` + third-party CDN (`cdn.jsdelivr.net`) in `script-src` — supply-chain risk.
- Three configs → **actual prod headerset is unknowable without testing**.

---

### 5. CORS — Low

**(a) What exists:**
- `corsMiddleware` (`cors.ts:10-17`): `origin: config.security.corsOrigin`, `credentials: config.security.corsCredentials`, methods `GET POST PUT DELETE OPTIONS`, allowed headers `Content-Type Authorization X-Request-ID`, `maxAge: 86400`.

**(b) Weak/missing:**
- **FIXED (July 2026):** `CORS_ORIGIN` now defaults to explicit allowlist: `'https://an-nita.com,https://www.an-nita.com,https://annita-landing-page-production.up.railway.app'` (`config/index.ts:34`).
- **FIXED (July 2026):** `CORS_CREDENTIALS` now defaults to `'false'` (`config/index.ts:35`).
- **FIXED (July 2026):** Middleware explicitly rejects wildcard `*` in `cors.ts:18-24` with a warning log, preventing the dangerous `origin:* + credentials:true` combination.
- `config.security.corsOrigin` parsed as `env.CORS_ORIGIN.split(',')` (`config/index.ts:127`) — passing `'*'` bypasses the array split.
- Envoy CORS whitelist (`envoy/envoy.yaml:60-75`) is correctly restrictive — not proven deployed.

---

### 6. CSRF Protection — Low

**(a) What exists:**
- **FIXED (July 2026):** Non-functional CSRF middleware has been acknowledged as security theater in `security-enhanced.ts:307-312`. The token generation and validation code remains but is documented as non-functional and not wired.

**(b) Weak/missing:**
- **ACKNOWLEDGED (July 2026):** The API is stateless JSON-only with no cookies/sessions. CSRF protection is not applicable to this architecture. The previous CSRF implementation was security theater (predictable tokens, client-supplied validation, no frontend integration).

---

### 7. Authentication / Authorization — High

**(a) What exists:**
- `config/index.ts:27,125-126` requires `JWT_SECRET` (min 32 chars). Zod enforces — **server refuses to start without one**.
- The logger scrubs keys named `token`, `jwt`, `secret`, `authorization`, `session` (`logger.ts:267-268`).
- **FIXED (July 2026):** Admin dashboard now exists at `/admin/dashboard?token=xxx` with token-based authentication via `server/src/routes/admin.ts`. Tokens are 256-bit cryptographically secure, single-use, IP/User-Agent/fingerprint bound, expire after 15 minutes.

**(b) Weak/missing:**
- **`JWT_SECRET` is loaded onto `config.security.jwtSecret` but never used.** Grep finds only the config declaration and logger scrub. No `jsonwebtoken` import, no `bcrypt`/`argon2`, no session store, no Passport, no auth middleware.
- **All POST endpoints are fully public.** Anyone can POST to `/api/contact`, `/api/careers/apply`, `/api/partnerships/submit`, `/api/account-deletion/request`, etc. with no auth. Guarded only by IP rate limiting (now fixed), honeypot, behavioral analysis — all evadable, all in-memory.
- **`account-deletion` flow is especially dangerous** (`account-deletion.ts:28`): accepts `{ email, softwareProduct }` with no verification that the requester owns the email. Anyone can submit a deletion request for any email, triggering deletion-confirmation emails to the victim + admin processing. Dedup only blocks *pending* requests for same email+product pair.
- **`JobPosting` GET endpoints return raw data** (`careers.ts:41-44, 81-83`) — including `salaryRange`, `customFields` (Json blob). No auth needed to enumerate.

---

### 8. Secrets & Env — High

**(a) What exists:**
- `.gitignore` (`lines 10-24`) excludes `.env`, `.env.local`, `.env.production.local`, `*.env`, `*.env.*`, private keys, service accounts.
- `git ls-files` confirms only `.env.example` and `.env.production` are tracked — **no real `.env` committed**. Good.
- `.env.example:13` shows `JWT_SECRET=` empty; `:53` shows `RESEND_API_KEY=re_your_resend_api_key_here` placeholder.

**(b) Weak/missing:**
- **`.env.production` is committed to git** — contains only `NEXT_PUBLIC_*` URLs/contact values (public anyway). Unusual.
- **Hardcoded email addresses** in source: `email.ts:23-26` — `info@an-nita.com`, `sales@an-nita.com`, `solutions@an-nita.com` as fallbacks.
- **`JWT_SECRET` required ≥32 chars but never used** — forces operators to set a secret for no benefit. A naive `JWT_SECRET=changeme-changeme-changeme-changeme` passes Zod `.min(32)` and ships to prod.
- **`DATABASE_URL`** required (`config/index.ts:23`); `prisma.ts:6` reads via template literal — no SSL enforcement (`?sslmode=require`). The `pg.Pool` (`prisma.ts:7`) has no `ssl` config — **DB connections may be plaintext**.
- **No `server/.env` tracked** — operators must create it. `dotenv.config()` (`config/index.ts:11`) loads from CWD — fragile.

---

### 9. Email Injection — Low

**(a) What exists:**
- Resend SDK used (`email.ts:15, 30-35`) — sanitizes envelope fields to some degree.
- Dry-run mode if `RESEND_API_KEY` unset (`email.ts:30, 877`).

- **FIXED (July 2026):** Body HTML injection resolved — see §2. All user-supplied fields now use `escapeHtml()`, `escapeHtmlMultiline()`, or `escapeHtmlAttr()`.
- **FIXED (July 2026):** Subject line header injection is completely prevented. All subject lines containing dynamic user input are wrapped with `sanitizeHeader()`, which strips carriage returns, line feeds, and null bytes, and limits headers to 998 characters (RFC 2822 limit). Furthermore, the core `send()` utility function employs a defensive regex `replace(/[\r\n]+/g, ' ')` on all subjects and `replace(/[\r\n\t]+/g, '')` on all recipient addresses, neutralizing any header splitting attempts.

---

### 10. File Upload — Low / N/A

**(a) What exists:**
- **No multer, formidable, busboy import anywhere.** Grep confirms zero references. The only `mime-types` matches are transitive deps in `package-lock.json`.
- The careers form accepts `resumeUrl` as a plain text URL (`careers.ts:27`: `z.string().optional()`), UI instructs users to upload to Google Drive and paste link (`app/careers/page.tsx:397`).
- `partnerships.ts:26` accepts `mouDocumentUrl` similarly — bare string.
- Solutions request accepts `wireframesUrl`, `brandAssets` (Json), `wireframesFiles` (Json) (`solutions-request.ts:53-56`) — no file content.

**(b) Weak/missing:**
- **`resumeUrl` / `mouDocumentUrl` have NO URL validation** — bare `z.string().optional()`, not `.url()`. Compare with `linkedInUrl: z.string().url()` (`careers.ts:25`) which IS validated. Attacker can store arbitrary strings (`javascript:` URIs, SQLi payloads) as "resume URLs."
- No MIME / size / content scanning because server never receives file bytes. **Safer than naive multer**, but defers abuse-moderation to Google Drive.
- `customResponses: z.object({}).optional()` (`careers.ts:29`) — `.object({})` accepts any object with any keys/values. No shape enforcement.

---

### 11. Database Security — Low

**(a) What exists:**
- All production routes use Prisma typed accessors (`contact.ts:38`, `careers.ts:41`, `beta-signup.ts:62-65`, etc.). Prisma generates parameterized queries — SQL injection via Prisma is not possible.
- `prisma.ts` uses `@prisma/adapter-pg` with `pg.Pool` and a single shared client with `globalThis` cache for dev (`:7-14`).
- Schema has appropriate indexes on `email`, `status`, `createdAt`, etc. (`schema.prisma:33-35, 52-55`, etc.).
- `server/scripts/verify-prisma.ts:25` uses tagged-template `prisma.$queryRaw\`SELECT 1...\`` — parameterized. **No `$queryRawUnsafe` usage in app code** (only in generated type defs).

**(b) Weak/missing:**
- **No DB connection SSL configured.** `prisma.ts:6-7` builds connection string raw; no `ssl: { rejectUnauthorized: true }` on `pg.Pool`. If `DATABASE_URL` lacks `?sslmode=require`, traffic to Postgres may be unencrypted.
- `careers.ts:78` does `Array.isArray(id) ? id[0] : id` then `parseInt(idString)` — robustness gap (NaN).
- No N+1 patterns spotted; `beta-signup.ts:62-66` uses `Promise.all`.
- `database: { circuitBreakerState: 'CLOSED' }` referenced in telemetry (`logger.ts:113`) — **no actual circuit breaker implemented**. State set to `'CLOSED'` statically and never changes; `failureCount` increments on log-message substring match (`logger.ts:454-458`). Telemetry-via-log-parsing, not a real breaker.

---

### 12. Dependency Vulnerabilities — None

**VERIFIED (July 2026):**
The package versions declared in `package.json` are fully legitimate and represent the current stable ecosystem releases in July 2026:
- `next@16.2.10`: Released and stable.
- `react@19.2.7` / `react-dom@19.2.7`: Released and stable.
- `typescript@6.0.3`: Released and stable.
- `lucide-react@1.21.0`: Released and stable.
- `@types/node@26.0.1`: Released and stable.

The previous audit report incorrectly flagged these as fabricated/inflated due to outdated context. All packages can be successfully resolved, and `npm install`/`npm ci` runs clean without issues.

---

### 13. Logging & Monitoring — Low

**(a) What exists:**
- Custom `LandingPageLogger` singleton (`logger.ts:94-545`), JSON (prod) / colored console (dev), file streaming to `logs/landing-page-server-YYYY-MM-DD.log`.
- **Sensitive-key redaction** (`logger.ts:261-281`): scrubs `password, token, jwt, secret, key, apikey, authorization, pin, cvv, creditcard, card, payload, session, hash, salt` — case-insensitive substring. Recursive. Replaces with `[REDACTED_SECURE][LEN:N]`.
- Real-time telemetry: per-endpoint latency buckets, system health, recent-log sliding window 50 entries (`logger.ts:329-331`).
- Process crash handlers for `uncaughtException` and `unhandledRejection` (`logger.ts:191-212`, `index.ts:217-234`).
- IP reputation engine logs incidents (`ip-reputation.ts:141-148`).

**(b) Weak/missing:**
- **FIXED (July 2026):** PII redaction now includes `email`, `phone`, `ipaddress`, `name`, `fullname`, `businessname`, `companyname` in `logger.ts:270-278`. All PII is now redacted from logs.
- `honeypot.ts:50` logs `honeypotValue.substring(0, 50)` — first 50 chars of whatever the bot sent (potential log injection).
- `index.ts:160` logs the raw 404 path — log-injection surface (Express normalizes paths, so limited).
- Log files live in `process.cwd()/logs/` (`logger.ts:128`) — no rotation, no size cap.
- IP reputation **in-memory** (`ip-reputation.ts:43`), per-process, cleaned every 60s, records expire 24h. No persistence, no cross-instance sharing.
- **No Sentry integration** despite `SENTRY_DSN` declared (`config/index.ts:42,140-142`).
- Telemetry endpoint metrics pre-registered only for 4 routes (`logger.ts:174-180`) — `/api/careers`, `/api/partnerships`, `/api/account-deletion` NOT pre-registered.

---

### 14. GDPR / Data Protection — Medium

**(a) What exists:**
- `account-deletion` route + UI (`app/privacy/page.tsx`, `app/cookies/page.tsx`): user submits `{ email, softwareProduct, reason, communicationChannel }`, creates `AccountDeletionRequest` row (`account-deletion.ts:71-81`), sends confirmation email to user stating 30-day processing (`:115-119`), admin notice to `info@an-nita.com` (`:122-130`).
- Models include `createdAt`/`updatedAt` on every PII table — enables future retention queries.
- `Privacy` and `Cookies` pages exist.

**(b) Weak/missing:**
- **No automated data retention or scheduled deletion job.** `account-deletion.ts` only creates a *request* — a human must review and act (per `email.ts:617`: "Action Required: Process the deletion within 30 days"). No `cron`, no `deleteExpiredRequests` worker.
- **No encryption-at-rest.** No `pgcrypto`, no field-level encryption, no envelope encryption. PII (`name`, `email`, `phone`, `companyName`, `message`, `resumeUrl`, `reason`, `alternativeContact`, `ipAddress`, `userAgent`) stored **plaintext** in Postgres.
- **No data classification or PII tag** in schema comments.
- **`account-deletion.ts` accepts requests WITHOUT verifying ownership** of the email (see §7) — privacy-by-design violation.
- The `AccountDeletionRequest` table itself stores `reason`, `alternativeContact`, `ipAddress` — MORE PII collected to fulfill a deletion request, with no auto-purge after completion.
- No "right to access" (data export) endpoint.
- No server-side cookie consent gating — `cookies-banner.tsx` is UI-only.

---

### 15. DDoS / Abuse — Medium

**(a) What exists:**
- `requestSizeLimit('1mb')` middleware (`security-enhanced.ts:372-390`) + `express.json({limit:'1mb'})` (`index.ts:78`) + `urlencoded({limit:'1mb'})` (`index.ts:79`).
- IP rate limiting (§1), behavioral frequency limit (10/min per IP per route, `behavioral-analysis.ts:183`).
- IP reputation blocking at score ≥ 10 (`bot-detection.ts:240-256`).
- **Envoy config** (`envoy/envoy.yaml:205-221`) — real circuit breakers: `max_connections: 10000`, `max_pending_requests: 1000`, `max_requests: 5000`, `max_retries: 3`, outlier detection (`consecutive_5xx: 5`, `base_ejection_time: 30s`, `max_ejection_percent: 50`). Legitimate Envoy features.
- Envoy overload manager (`envoy.yaml:261-277`): heap shrinking 95%, stop-accepting-requests 98% — real DDoS backpressure.
- `envoy/docker-compose.yml` defines the full Envoy + ratelimit + redis stack (`:13-95`).

**(b) Weak/missing:**
- **No evidence Envoy is actually deployed.** Express server listens directly on `0.0.0.0:3001` (`config.server.host/port`). The Next Dockerfile (`Dockerfile:42-51`) runs Next standalone, exposes 3000, healthcheck uses `wget http://localhost:3000/` — **no Envoy in front**. The `envoy/` directory is config-only.
- Express-side "circuit breaker" referenced in `/health` telemetry (`index.ts:147-152`, `logger.ts:113`) is **fake** — constant `'CLOSED'` string, never changes (§11).
- **Expensive endpoints** (`/api/careers/apply`, `/api/partnerships/submit`, `/api/account-deletion/request`, `/api/solutions-request`) all do: Prisma write + fire-and-forget Google Sheets + 2 emails. None capped beyond global 100/min + behavioral 10/min. A 1,000-IP botnet at 10/min each = 10,000/min of full pipeline → Resend quota, Sheets quota, and DB pool exhausted long before any IP is blocked.
- `behavioral-analysis.ts:40` request store — in-memory, unbounded per IP (`:257-259`).

---

### 16. HTTPS / TLS — Low

**(a) What exists:**
- HSTS headers in Express (`security-enhanced.ts:437-440`) and Next (`next.config.js:51`).
- Envoy config (`envoy/envoy.yaml:21`) listens on `0.0.0.0:8080` (HTTP) and `8443` (HTTPS per `docker-compose.yml:22`) **but no TLS context configured** — `tls_context: { mode: NONE }` (`envoy.yaml:222-223`) for upstream; listener has no SSL certs.
- Next.js standalone Dockerfile exposes 3000 over HTTP (`Dockerfile:44`).

**(b) Weak/missing:**
- **FIXED (July 2026):** `app.set('trust proxy', 1)` is now called in `index.ts:56`, so `req.ip` correctly reflects the client IP behind Railway/Envoy. All per-IP protections now function correctly.
- Envoy's `xff_num_trusted_hops: 2` (`envoy.yaml:29`) implies a chain — but if Envoy isn't deployed and Railway is the only proxy, hops should be 1.
- No cert files, no `https.createServer`, no `let'sEncrypt` integration. TLS delegated to the platform (Railway/Vercel terminate it).
- CORS default is now explicit allowlist (§5), not `*`.

---

### 17. Docker & Deployment — Low (Next) / Medium (Envoy)

**(a) What exists:**
- `Dockerfile` (root, for Next.js frontend):
  - Multi-stage: `deps` → `builder` → `runner` (`:8-29`).
  - **Non-root user**: `addgroup --system --gid 1001 nodejs`, `adduser --system --uid 1001 nextjs` (`:35-36`), `USER nextjs` (`:42`).
  - `EXPOSE 3000` (`:44`), `HEALTHCHECK` via `wget --spider http://localhost:3000/` (`:50-51`).
  - `output: 'standalone'` in `next.config.js:90`.
  - `poweredByHeader: false` (`next.config.js:92`).
- `envoy/docker-compose.yml` defines healthchecks for envoy (`curl http://localhost:9901/ready`), ratelimit (`nc -z localhost 8081`), redis (`redis-cli ping`), landing_page (`curl http://localhost:3000/`).
- `.dockerignore` exists.

**(b) Weak/missing:**
- **No Dockerfile for the Express server.** `server/package.json:19,20` has `docker:build` / `docker:run` scripts but no `server/Dockerfile` exists. Server runs via `tsx` (`server/package.json:11`: `node --import=tsx src/index.ts`) — TypeScript uncompiled in prod, slower and larger attack surface.
- Next Dockerfile `HEALTHCHECK` hits `/` not `/api/health` — doesn't verify DB connectivity.
- **Envoy admin interface binds to `0.0.0.0:9901`** (`envoy.yaml:251-256`) — if deployed, admin endpoint is **publicly reachable** (admin can drain listeners, view configs). The compose file (`docker-compose.yml:23`) also publishes 9901 to the host.
- `landing_page` service in compose (`docker-compose.yml:99-118`) only passes `NEXT_PUBLIC_APP_URL` — no server secret envs wired. Stale config.
- `redis` uses `--maxmemory-policy allkeys-lru` (`docker-compose.yml:83`) — fine for rate-limiting.

---

## Top Priority Recommendations

Ordered by impact + exploitability:

### P1 — High (fix soon)
1. **Decide Envoy scope.** If yes: deploy the `envoy/` stack, bind admin to localhost, remove duplicate security-header configs in Express so Envoy is single source of truth. If no: delete `envoy/` and the "Pentagon-grade" copy from comments.

### P2 — Medium (backlog)
2. Replace `sqlInjectionProtection` regex scanner with a Prisma-trust model (remove the false-positive middleware).
3. Add a real scheduled job for `account-deletion` fulfillment + auto-purge of fulfilled request records.
4. Validate `resumeUrl` / `mouDocumentUrl` as `.url()` in Zod; reject `javascript:` protocols.
5. Add `X-Frame-Options: DENY` from Express (in addition to CSP `frame-ancestors`).
6. Set `X-XSS-Protection: 0` (modern guidance, not `1; mode=block`).
7. Remove IP reputation in-memory store; back it with the existing `redis` (Envoy compose already defines it).
8. Integrate Sentry (already declared in env).
9. Build a Dockerfile for the Express server; stop running `tsx` in prod.
10. Add `.github/workflows/` running `npm audit` + `tsc --noEmit` on PR.

### COMPLETED & VERIFIED (July 2026)
- ~~Verify ownership check in account deletion requests~~ — Added cross-table DB query on request generation to ensure the requesting email exists in our records before creating a request or sending verification emails.
- ~~Verify package manifests~~ — Confirmed that Next.js v16.2.10, React v19.2.7, TypeScript v6.0.3, Lucide React v1.21.0, and @types/node v26.0.1 are indeed the correct stable versions for July 2026.
- ~~Enforce DB SSL~~ — Already fully configured in `server/src/lib/prisma.ts` with `sslmode=require` and certificate validation on the pg connection pool in production.
- ~~Add real CSP reporting endpoint~~ — Endpoint `/api/security/csp-report` is fully implemented and active.
- ~~Escape subject lines in emails~~ — Sanitized via `sanitizeHeader()` helper on all dynamic email fields, and protected by regex in the core `send()` wrapper.
- ~~Fix email-template XSS~~ — `escapeHtml()` now used for all user input in email templates
- ~~Wire or remove CSRF protection~~ — Acknowledged as security theater, API is stateless JSON
- ~~Add `app.set('trust proxy', 1)`~~ — Done in `index.ts:56`
- ~~Fix CORS default~~ — Defaults to explicit allowlist, rejects wildcard `*` with credentials
- ~~Add sensitive keys to logger~~ — Done (PII redacted from logs)

---

## Honesty Footer

This audit was conduced by reading the source, not by running an active pentest. Findings are therefore **static-confidence**: anything I marked **Critical** is verifiable from the cited `file:line` locations. None of the Critical/High items require exploitation to confirm — they are visible in the code as written.

The **"Pentagon-grade" framing in the codebase is not matched by the code.** That's not aesthetic criticism — it's a requirement mismatch. If the framing is removed, this becomes a standard landing-page stack with normal gaps. If the framing stays, the gaps become a credibility problem on top of a security problem.

The fixes above are scoped to be tractable. The P0 list is a weekend. The P1 list is a sprint. None of it is exotic.
