# 🛡️ Annita Landing Page & Gateway Portal
> **FORTUNE 500 / PENTAGON-LEVEL HIGH-SECURITY ENTERPRISE SPECIFICATION**

[![Framework: Next.js 16](https://img.shields.io/badge/Framework-Next.js%2016-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![Security Class: Confidential](https://img.shields.io/badge/Security%20Class-Confidential-red?style=for-the-badge&logo=probot)](#)
[![Vulnerabilities: 0](https://img.shields.io/badge/Vulnerabilities-0-success?style=for-the-badge)](#)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-blue?style=for-the-badge)](#)

This repository houses the production-ready marketing website, enterprise portal, and security gateway for **Annita LLC**. Serving as the official entry point (landing page) for the Annita ecosystem, this project hosts high-performance marketing pages, dynamic solution request pipelines, the **AnnitaPlug** download page with live app loading simulation, and acts as the gatekeeper directing traffic securely to the standalone **AnnitaPlug** application.

**AnnitaPlug** is launching on two platforms (iOS & Android) as part of the Annita ecosystem — one app, one ecosystem.

---

## 🏛️ System & Security Architecture

```mermaid
graph TD
    Client[Web Browser / Client] -->|HTTPS Requests| Envoy[Envoy Reverse Proxy: Port 80/443]
    Envoy -->|Rate Limit / Filter Traffic| NextApp[Next.js Gateway / Landing Page]
    
    NextApp -->|Referrer Policy Header| TargetApp[Standalone AnnitaPlug Login Page]
    TargetApp -->|Middleware: Check Referer/Session| Validate{Referer Validation}
    
    Validate -->|Matches landing page / Authenticated| AccessGranted[Access Granted]
    Validate -->|No Referer / Untrusted| RedirectLanding[Redirect to Landing Page]
    
    NextApp -->|API Requests| LandingServer[Landing Page Server: Port 3001]
    LandingServer -->|Database Operations| PostgreSQL[(PostgreSQL Database)]
    LandingServer -->|Email Sending| Resend[Resend Email Service]
    
    NextApp -->|Production API Requests| ProdAPI[Secure REST Backend API: api.an-nita.com]
```

### 🔒 Client-Server Communication Architecture

The landing page consists of two main components that communicate via REST API:

**1. Next.js Client (Frontend)**
- **Port**: 3000 (development)
- **Framework**: Next.js 16.2.10 with React 19.2.7
- **Responsibilities**: 
  - Render marketing pages, download page, and interactive components
  - Handle user interactions (forms, navigation, command palette)
  - Make API requests to the landing page server
  - Implement client-side security (CSRF tokens, honeypot fields, input validation)
  - AnnitaPlug app loading simulation with phone mockup

**2. Express Server (Backend)**
- **Port**: 3001 (development)
- **Framework**: Express.js 4.21.2 with TypeScript 5.7.3
- **Responsibilities**:
  - Handle API endpoints (contact, newsletter, sales, careers, partnerships, solutions, beta signup)
  - Process and validate incoming requests
  - Interact with PostgreSQL database via Prisma
  - Send emails via Resend API
  - Sync data to Google Sheets via Google Sheets API
  - Implement server-side security middleware

**Communication Flow:**
```
Client (Next.js) → HTTP/HTTPS → Server (Express) → Database/Email Service
     ↓                    ↓                    ↓
  Form Data        Security Middleware    Business Logic
  API Requests     (SQLi, XSS, CSRF)    Data Persistence
  JSON Response    Rate Limiting        Email Delivery
```

**API Endpoints:**
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Subscribe to newsletter
- `POST /api/sales` - Submit sales inquiry
- `POST /api/partnerships/submit` - Submit partnership inquiry
- `POST /api/careers/apply` - Submit job application / join talent pool
- `POST /api/solutions/request` - Submit custom solutions request
- `POST /api/beta-signup` - Beta signup registration
- `GET /api/maintenance` - Maintenance mode status
- `GET /health` - Server health check with telemetry

### 🔒 Core Security Controls

1. **Referer Verification Gate (Client Middleware)**:
   - Access to the standalone **AnnitaPlug** login route (`/login`) is locked down at the edge via Next.js middleware.
   - The middleware inspects the `Referer` header of incoming requests. Direct traffic or untrusted domains are blocked and redirected to the landing page domain (`https://www.an-nita.com`), preventing bypass of the gateway portal.
   
2. **Envoy Reverse Proxy & Rate Limiting**:
   - Pre-configured Envoy proxy settings inside the `envoy/` directory protect the gateway from Distributed Denial of Service (DDoS) and automated brute-force scripts.
   - Includes rate-limiting configuration rules (`ratelimit-config.yaml`) mapping client connection quotas before hitting server runtimes.

3. **Zero-Trust Secret Isolation (Pentagon-Grade `.gitignore`)**:
   - Engineered to strictly block credential leakage by ignoring all local environment variables (`*.env`, `*.env.local`), database engines (`*.sqlite`, `*.db`), private keys/keysets (`*.pem`, `*.key`), diagnostic dumps, and developer-specific settings, while maintaining clean public-only configurations.

4. **Headers & Content Security Policy (CSP)**:
   - Configured with strict security headers (CORS control, Content Security Policy, Frame Options, Strict Transport Security) to protect browser instances and eliminate cross-site scripting (XSS) and clickjacking vectors.

5. **Server-Side Security Middleware (Fortune 500/Pentagon-Grade)**:
   - **SQL Injection Protection**: 100+ attack patterns detected and blocked
   - **XSS Protection**: 20+ XSS patterns detected and sanitized
   - **CSRF Protection**: Token-based validation for state-changing requests
   - **Request Size Limits**: 1mb payload limit to prevent DoS attacks
   - **Enhanced Security Headers**: Helmet with CSP, HSTS, frame protection
   - **IP-based Rate Limiting**: 100 requests per 15 minutes per IP
   - **Input Validation**: Email, phone, and URL format validation

---

## � Package Dependencies

### Client (Next.js)

**Dependencies:**
- `@vercel/analytics`: ^2.0.1 - Vercel analytics integration
- `framer-motion`: ^11.15.0 - Animation library for React
- `lucide-react`: ^0.468.0 - Icon library
- `next`: ^16.2.10 - React framework for production
- `next-themes`: ^0.4.4 - Theme management for Next.js
- `react`: ^19.2.7 - React library
- `react-dom`: ^19.2.7 - React DOM renderer
- `sharp`: ^0.35.0 - Image optimization
- `world-map-country-shapes`: 1.0.0 - World map SVG shapes

**DevDependencies:**
- `@tailwindcss/postcss`: ^4.0.0 - Tailwind CSS PostCSS plugin
- `@types/node`: ^22.10.2 - TypeScript definitions for Node.js
- `@types/react`: ^19.2.17 - TypeScript definitions for React
- `@types/react-dom`: ^19.2.3 - TypeScript definitions for React DOM
- `autoprefixer`: ^10.4.20 - PostCSS plugin for autoprefixing
- `eslint`: ^9.18.0 - JavaScript linter
- `eslint-config-next`: ^16.2.10 - ESLint config for Next.js
- `postcss`: ^8.4.49 - CSS transformation tool
- `tailwindcss`: ^4.0.0 - Utility-first CSS framework
- `typescript`: ^5.7.3 - TypeScript compiler

**Package Overrides:**
- `postcss`: ^8.4.49 - Pinned to fix XSS vulnerability

### Server (Express)

**Dependencies:**
- `@prisma/adapter-pg`: ^7.8.0 - PostgreSQL adapter for Prisma
- `@prisma/client`: ^7.8.0 - Prisma client for database access
- `@prisma/extension-accelerate`: ^3.0.0 - Prisma Accelerate extension
- `@react-email/render`: ^2.0.0 - React Email rendering
- `cors`: ^2.8.5 - CORS middleware for Express
- `dotenv`: ^16.4.7 - Environment variable loader
- `express`: ^4.21.2 - Fast, unopinionated web framework
- `express-rate-limit`: ^7.5.1 - Rate limiting middleware
- `express-validator`: ^7.2.0 - Request validation middleware
- `googleapis`: ^140.0.0 - Google Sheets API integration
- `helmet`: ^8.2.0 - Security headers middleware
- `pg`: ^8.13.1 - PostgreSQL client
- `prisma`: ^7.8.0 - Prisma ORM toolkit
- `resend`: ^6.16.0 - Email sending service
- `tsx`: ^4.19.2 - TypeScript execution engine
- `zod`: ^4.4.3 - TypeScript-first schema validation

**DevDependencies:**
- `@types/cors`: ^2.8.17 - TypeScript definitions for CORS
- `@types/express`: ^5.0.6 - TypeScript definitions for Express
- `@types/node`: ^22.10.2 - TypeScript definitions for Node.js
- `@types/pg`: ^8.11.10 - TypeScript definitions for pg
- `typescript`: ^5.7.3 - TypeScript compiler

**Package Overrides:**
- `@hono/node-server`: 1.19.13 - Pinned to fix middleware bypass vulnerability
- `uuid`: ^11.1.1 - Pinned for security

**Security Status:**
- **Client**: 0 vulnerabilities ✅
- **Server**: 0 vulnerabilities ✅

---

## � Key Features

* **AnnitaPlug Download Page**: Features a phone mockup with animated app loading simulation (boot sequence, circular progress, boot logs), platform badges for iOS & Android, milestone timeline, and notify-me signup.
* **Awards & Recognitions Timeline**: Interactive timeline with numbered nodes, animated stat counters, metric badges, and entries for UN STI Forum, APGYD, Orange Social Venture Prize, AU EAN Fellowship, and MANSA Platform onboarding.
* **Ecosystem Page**: AnnitaPlug announcement with two-platform messaging and ecosystem module directory.
* **Interactive Live Coding Terminal**: Supports real-time execution logs for multithreaded systems (`annita_pay.ts`, `ezri_ai.py`, and `pulse_health.go`), including run script actions and state-saving parameters.
* **Session-Aware Loader**: Optimized loading sequencing checks `sessionStorage` to serve the bootscreen only on the initial page visit, bypassing it on subsequent tab navigation for instant loading.
* **Viewport-Triggered Stats**: Counter modules count up dynamically from `0` to real stats matching the company's verified global statistics when they enter the user's viewport.
* **Command Palette**: Keyboard-accessible command palette (Cmd/Ctrl+K) for quick navigation across the site.
* **Tech Cursor & Particle Background**: Custom animated cursor and particle background effects for a modern, techy aesthetic.
* **Scroll Progress Indicator**: Visual progress bar tracking scroll position through the page.
* **Sound Effects**: Interactive sound effects on key UI interactions.
* **Cookies Banner**: GDPR-compliant cookie consent banner.
* **Responsive Layout Spacing**: Standardized vertical spacing (`py-28`) across components ensures consistent visual flow on all mobile, tablet, and desktop screens.
* **Enterprise Email Service**: Resend API integration for contact forms, newsletter subscriptions, sales inquiries, partnership inquiries, and job applications with beautiful HTML email templates.
* **Google Sheets Integration**: Form submissions sync to Google Sheets via the Google Sheets API for team visibility.
* **Custom Enterprise Logger**: Dependency-free logger with real-time telemetry, structured logging, crash handlers, and system health monitoring.
* **Database Integration**: PostgreSQL database via Prisma ORM with connection pooling and automatic migrations.
* **Honeypot Anti-Spam**: Hidden honeypot fields on all forms to detect and block bot submissions.
* **GitHub Actions Security Workflow**: Automated security scanning via Snyk on every push and PR.

---

## 📂 Project Structure

```
Annita-Landing-Page/
├── app/                       # Next.js App Router root directory
│   ├── about/                 # About Us with mission, vision, values, and story
│   ├── admin/                 # Admin dashboard
│   │   └── dashboard/         # Admin management interface
│   ├── awards/                # Awards & recognitions timeline with animated stats
│   ├── api/                   # Next.js API routes
│   │   └── maintenance/       # Maintenance mode status endpoint
│   ├── contact/               # Contact form with WhatsApp integration
│   ├── contact-sales/         # Enterprise sales pipeline forms
│   ├── careers/               # Job listings and talent pool application
│   ├── download/              # AnnitaPlug download page with app loading simulation
│   ├── ecosystem/             # Ecosystem modules and AnnitaPlug announcement
│   ├── login/                 # Ecosystem redirect landing point
│   ├── partnerships/          # Partnership inquiry form and types
│   ├── solutions/             # Solutions catalog and request pipeline
│   │   ├── request/           # Multi-step solutions request form
│   │   └── page.tsx           # Solutions directory landing
│   ├── globals.css            # Global CSS custom properties and styles
│   ├── layout.tsx             # Root layout with metadata, JSON-LD, and site loader
│   ├── page.tsx               # Homepage with interactive code playground
│   └── robots.ts              # SEO robots configuration
├── components/                # Reusable UI component modules
│   ├── beta-signup.tsx        # Beta signup form component
│   ├── command-palette.tsx    # Cmd/Ctrl+K command palette navigation
│   ├── cookies-banner.tsx     # GDPR cookie consent banner
│   ├── FormFeedbackModal.tsx  # Reusable form success/error modal
│   ├── HoneypotField.tsx      # Anti-spam honeypot field component
│   ├── live-coding-terminal.tsx # Tabbed script terminal emulator
│   ├── loader.tsx             # Spinning visual loader component
│   ├── newsletter-section.tsx # Reusable newsletter signup section
│   ├── particle-background.tsx # Animated particle background effect
│   ├── scroll-progress.tsx    # Scroll position progress indicator
│   ├── site-loader-wrapper.tsx # Session-aware mounting container
│   ├── sound-effects.tsx      # Interactive UI sound effects
│   ├── tech-cursor.tsx        # Custom animated tech cursor
│   ├── theme-provider.tsx     # Custom hydration-safe theme wrapper
│   └── theme-toggle.tsx      # Dark/light theme toggle button
├── envoy/                     # Envoy reverse proxy configurations
│   ├── docker-compose.yml     # Standalone Envoy container config
│   ├── envoy.yaml             # Cluster and routing proxy layout
│   └── ratelimit-config.yaml  # Rate limits for inbound endpoint routes
├── lib/                       # Utility functions and API integrations
│   ├── api.ts                 # Form submission helpers to production API
│   └── health-check.ts        # Server health check utilities
├── public/                    # Optimized logos, icons, and image assets
├── server/                    # Express.js backend server
│   ├── src/
│   │   ├── config/           # Configuration management
│   │   ├── jobs/             # Background jobs (Google Sheets sync)
│   │   ├── lib/              # Core libraries (database, logger, email)
│   │   ├── middleware/       # Express middleware (security, CORS)
│   │   └── index.ts          # Server entry point
│   ├── prisma/
│   │   ├── schema.prisma     # Database schema
│   │   ├── seed.ts           # Database seeding
│   │   └── migrations/       # Database migrations
│   ├── scripts/              # Utility scripts
│   │   ├── setup-sheet-headers.ts # Google Sheets header setup
│   │   ├── test-sheets.ts    # Google Sheets integration test
│   │   └── verify-prisma.ts  # Prisma connection verification
│   ├── .env.example          # Environment variables template
│   ├── Dockerfile            # Docker container configuration
│   ├── package.json          # Server dependencies
│   ├── railway.toml          # Railway deployment config
│   └── README.md             # Server documentation
├── types/                     # TypeScript type declarations
├── .github/workflows/         # GitHub Actions CI/CD
│   └── security.yml           # Snyk security scan workflow
├── .env.example               # Standard mock environment configurations
├── .env.production            # Production endpoints for redirection and API
├── netlify.toml               # Netlify deployment configuration
├── package.json               # Client dependencies
├── tsconfig.json              # TypeScript engine configurations
└── README.md                 # This file
```

---

## 🛠️ Local Development & Setup

### Prerequisites
- Node.js 22+ (required for server)
- npm 10+ (required for both client and server)

### 1. Installation

**Client (Next.js):**
```bash
cd Annita-Landing-Page
npm install
```

**Server (Express):**
```bash
cd Annita-Landing-Page/server
npm install
```

### 2. Configure Environment Variables

**Client (.env.local):**
```properties
# Development client app target
NEXT_PUBLIC_CLIENT_URL=http://localhost:3001

# Production / Mock API backend endpoint
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Server (.env):**
```properties
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/annita_landing

# Server
PORT=3001
NODE_ENV=development

# Security
JWT_SECRET=your-jwt-secret-min-32-chars
CORS_ORIGIN=http://localhost:3000

# Email (Resend)
RESEND_API_KEY=your-resend-api-key
RESEND_FROM_EMAIL="Annita LLC" <annita@an-nita.com>

# Logging
LOG_LEVEL=INFO
LOG_FORMAT=json
```

### 3. Run Development Servers

**Start Client:**
```bash
cd Annita-Landing-Page
npm run dev
```
Open `http://localhost:3000` in your web browser.

**Start Server:**
```bash
cd Annita-Landing-Page/server
npm run dev
```
Server runs on `http://localhost:3001`

### 4. Build for Production

**Client:**
```bash
cd Annita-Landing-Page
npm run build
npm run start
```

**Server:**
```bash
cd Annita-Landing-Page/server
npm run build
npm start
```

---

## 🌐 Deployment Configuration

### Client Deployment (Netlify / Vercel)

The landing page client is configured for deployment on both Netlify and Vercel as a standalone Next.js application.

**Netlify Integration:**
The `netlify.toml` file is pre-configured with build settings and redirects. Connect this repository in the Netlify dashboard to deploy.

**Vercel Integration:**
To deploy to Vercel, link this directory as a Next.js project.

**Environment Variables:**
Ensure the following Environment Variables are configured in your deployment dashboard:
- `NEXT_PUBLIC_CLIENT_URL` = `https://annita-v1.vercel.app` (The standalone client dashboard application)
- `NEXT_PUBLIC_API_URL` = `https://api.an-nita.com` (The production backend API endpoint)

### Server Deployment (Railway)

The landing page server is configured to run on Railway with PostgreSQL database.

**Railway Integration:**
1. Connect Railway:
```bash
cd server
railway login
railway init
```

2. Set environment variables:
```bash
railway variables set DATABASE_URL="your-database-url"
railway variables set JWT_SECRET="your-jwt-secret"
railway variables set RESEND_API_KEY="your-resend-api-key"
# ... set other variables
```

3. Deploy:
```bash
railway up
```

**Environment Variables:**
See `server/.env.example` for all available variables. Key variables:
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - JWT signing secret (min 32 chars)
- `CORS_ORIGIN` - Allowed CORS origins
- `RESEND_API_KEY` - Resend email API key
- `NODE_ENV` - Environment (development/production)

---

## 🔒 Security Vulnerability Reporting

This repository operates under strict security guidelines. If you discover a vulnerability, do not open a public issue. Instead, report it immediately to our security response team at `security@an-nita.com`. All reports will receive an immediate response and will be triaged within 24 hours.
