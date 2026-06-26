# 🛡️ Annita Landing Page & Gateway Portal
> **FORTUNE 500 / PENTAGON-LEVEL HIGH-SECURITY ENTERPRISE SPECIFICATION**

[![Framework: Next.js 16](https://img.shields.io/badge/Framework-Next.js%2016-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![Security Class: Confidential](https://img.shields.io/badge/Security%20Class-Confidential-red?style=for-the-badge&logo=probot)](#)
[![Vulnerabilities: 0](https://img.shields.io/badge/Vulnerabilities-0-success?style=for-the-badge)](#)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-blue?style=for-the-badge)](#)

This repository houses the production-ready marketing website, enterprise portal, and security gateway for **Annita LLC**. Serving as the official entry point (landing page) for the Annita ecosystem, this project hosts high-performance marketing pages, dynamic solution request pipelines, and acts as the gatekeeper directing traffic securely to the standalone **AnnitaPlug** application.

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
- **Framework**: Next.js 16.2.9 with React 19.2.7
- **Responsibilities**: 
  - Render marketing pages and interactive components
  - Handle user interactions (forms, navigation)
  - Make API requests to the landing page server
  - Implement client-side security (CSRF tokens, input validation)

**2. Express Server (Backend)**
- **Port**: 3001 (development)
- **Framework**: Express.js 5.2.1 with TypeScript 6.0.3
- **Responsibilities**:
  - Handle API endpoints (contact forms, newsletter, analytics)
  - Process and validate incoming requests
  - Interact with PostgreSQL database via Prisma
  - Send emails via Resend API
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

### Client (Next.js) - All Packages Pinned to Latest Versions

**Dependencies:**
- `@vercel/analytics`: 2.0.1 - Vercel analytics integration
- `framer-motion`: 12.42.0 - Animation library for React
- `lucide-react`: 1.21.0 - Icon library
- `next`: 16.2.9 - React framework for production
- `next-themes`: 0.4.6 - Theme management for Next.js
- `react`: 19.2.7 - React library
- `react-dom`: 19.2.7 - React DOM renderer
- `world-map-country-shapes`: 1.0.0 - World map SVG shapes

**DevDependencies:**
- `@types/node`: 26.0.1 - TypeScript definitions for Node.js
- `@types/react`: 19.2.17 - TypeScript definitions for React
- `@types/react-dom`: 19.2.3 - TypeScript definitions for React DOM
- `autoprefixer`: 10.5.2 - PostCSS plugin for autoprefixing
- `eslint`: 10.5.0 - JavaScript linter
- `eslint-config-next`: 16.2.9 - ESLint config for Next.js
- `postcss`: 8.5.15 - CSS transformation tool
- `tailwindcss`: 4.3.1 - Utility-first CSS framework
- `typescript`: 6.0.3 - TypeScript compiler

**Package Overrides:**
- `postcss`: 8.5.15 - Pinned to fix XSS vulnerability

### Server (Express) - All Packages Pinned to Latest Versions

**Dependencies:**
- `@prisma/adapter-pg`: 7.8.0 - PostgreSQL adapter for Prisma
- `@prisma/client`: 7.8.0 - Prisma client for database access
- `@prisma/extension-accelerate`: 3.0.1 - Prisma Accelerate extension
- `@react-email/render`: 2.0.9 - React Email rendering
- `cors`: 2.8.6 - CORS middleware for Express
- `dotenv`: 17.4.2 - Environment variable loader
- `express`: 5.2.1 - Fast, unopinionated web framework
- `express-rate-limit`: 8.5.2 - Rate limiting middleware
- `express-validator`: 7.3.2 - Request validation middleware
- `helmet`: 8.2.0 - Security headers middleware
- `pg`: 8.22.0 - PostgreSQL client
- `react`: 19.2.7 - React library (for email templates)
- `react-dom`: 19.2.7 - React DOM (for email templates)
- `resend`: 6.16.0 - Email sending service
- `zod`: 4.4.3 - TypeScript-first schema validation

**DevDependencies:**
- `@types/cors`: 2.8.19 - TypeScript definitions for CORS
- `@types/express`: 5.0.6 - TypeScript definitions for Express
- `@types/node`: 26.0.1 - TypeScript definitions for Node.js
- `@types/pg`: 8.20.0 - TypeScript definitions for pg
- `prisma`: 7.8.0 - Prisma ORM toolkit
- `tsx`: 4.22.4 - TypeScript execution engine
- `typescript`: 6.0.3 - TypeScript compiler

**Package Overrides:**
- `@hono/node-server`: 1.19.13 - Pinned to fix middleware bypass vulnerability

**Security Status:**
- **Client**: 0 vulnerabilities ✅
- **Server**: 0 vulnerabilities ✅

---

## � Key Features

* **Interactive Live Coding Terminal**: Supports real-time execution logs for multithreaded systems (`annita_pay.ts`, `ezri_ai.py`, and `pulse_health.go`), including run script actions and state-saving parameters.
* **Session-Aware Loader**: Optimized loading sequencing checks `sessionStorage` to serve the bootscreen only on the initial page visit, bypassing it on subsequent tab navigation for instant loading.
* **Viewport-Triggered Stats**: Counter modules count up dynamically from `0` to real stats matching the company's verified global statistics when they enter the user's viewport.
* **Responsive Layout Spacing**: Standardized vertical spacing (`py-28`) across components ensures consistent visual flow on all mobile, tablet, and desktop screens.
* **Enterprise Email Service**: Resend API integration for contact forms, newsletter subscriptions, and sales inquiries with beautiful HTML email templates.
* **Custom Enterprise Logger**: Dependency-free logger with real-time telemetry, structured logging, crash handlers, and system health monitoring.
* **Database Integration**: PostgreSQL database via Prisma ORM with connection pooling and automatic migrations.

---

## 📂 Project Structure

```
Annita-Landing-Page/
├── app/                       # Next.js App Router root directory
│   ├── about/                 # About Us and verified team stats
│   ├── awards/                # Global recognitions page
│   ├── contact/               # Contact support and location index
│   ├── contact-sales/         # Enterprise sales pipeline forms
│   ├── login/                 # Ecosystem redirect landing point
│   ├── solutions/             # Solutions catalog and request pipeline
│   │   ├── request/           # Multi-step solutions request form
│   │   └── page.tsx           # Solutions directory landing
│   ├── globals.css            # Global CSS custom properties and styles
│   ├── layout.tsx             # Root layout with metadata and site loader
│   └── page.tsx               # Homepage and interactive code playground
├── components/                # Reusable UI component modules
│   ├── live-coding-terminal.tsx # Tabbed script terminal emulator
│   ├── loader.tsx             # Spinning visual loader component
│   ├── site-loader-wrapper.tsx # Session-aware mounting container
│   ├── navigation.tsx         # Responsive sticky header navigation
│   └── theme-provider.tsx     # Custom hydration-safe theme wrapper
├── envoy/                     # Envoy reverse proxy configurations
│   ├── docker-compose.yml     # Standalone Envoy container config
│   ├── envoy.yaml             # Cluster and routing proxy layout
│   └── ratelimit-config.yaml  # Rate limits for inbound endpoint routes
├── lib/                       # Utility functions and API integrations
│   └── api.ts                 # Form submission helpers to production API
├── public/                    # Optimized logos, icons, and image assets
├── server/                    # Express.js backend server
│   ├── src/
│   │   ├── config/           # Configuration management
│   │   ├── lib/              # Core libraries (database, logger, email)
│   │   ├── middleware/       # Express middleware (security, CORS)
│   │   │   ├── security-enhanced.ts  # Pentagon-grade security middleware
│   │   │   ├── security.ts            # Basic security middleware
│   │   │   └── cors.ts                 # CORS configuration
│   │   └── index.ts          # Server entry point
│   ├── prisma/
│   │   └── schema.prisma     # Database schema
│   ├── .env                  # Environment variables
│   ├── package.json          # Server dependencies
│   ├── railway.toml          # Railway deployment config
│   └── README.md             # Server documentation
├── .env.example               # Standard mock environment configurations
├── .env.production            # Production endpoints for redirection and API
├── vercel.json                # Vercel routing parameters and build path settings
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

### Client Deployment (Vercel)

The landing page client is configured to run as a standalone Next.js deployment on Vercel.

**Vercel Integration:**
To deploy to Vercel, link this directory as a Next.js project. The root `vercel.json` or repository-specific settings will direct traffic accordingly.

**Environment Variables:**
Ensure the following Environment Variables are configured in the Vercel dashboard:
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
