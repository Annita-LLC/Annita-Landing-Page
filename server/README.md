# Annita Landing Page Server

🏆 Fortune 500 / Pentagon Grade Enterprise Server for Annita Landing Page

## Overview

This is a standalone Express.js server for the Annita Landing Page, built with enterprise-grade security, observability, and deployment practices. It handles API requests for contact forms, newsletter subscriptions, sales inquiries, partnership inquiries, job applications, custom solutions requests, beta signups, and syncs form submissions to Google Sheets.

## Architecture

### Technology Stack
- **Runtime**: Node.js 22+
- **Framework**: Express.js 4.21.2
- **Database**: PostgreSQL (Prisma Cloud)
- **ORM**: Prisma 7.8.0
- **Language**: TypeScript 5.7.3
- **Email**: Resend API
- **Data Sync**: Google Sheets API (googleapis)
- **Deployment**: Railway

### Directory Structure

```
server/
├── src/
│   ├── config/           # Configuration management
│   ├── lib/              # Core libraries (database, logger)
│   ├── middleware/       # Express middleware (security, CORS)
│   ├── modules/          # Feature modules
│   │   └── landing/      # Landing page specific features
│   │       ├── controllers/  # Request handlers
│   │       ├── services/     # Business logic
│   │       ├── routes/       # API routes
│   │       └── models/       # Data models (Prisma)
│   ├── routes/           # Main route aggregation
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript type definitions
│   └── index.ts          # Server entry point
├── prisma/
│   ├── schema.prisma     # Database schema
│   ├── seed.ts           # Database seeding
│   └── migrations/       # Database migrations
├── logs/                 # Application logs
├── .env                  # Environment variables
├── .env.example          # Environment variables template
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript configuration
├── Dockerfile            # Docker configuration
├── railway.toml          # Railway deployment config
└── README.md             # This file
```

## Features

### Security
- Helmet.js for security headers
- CORS configuration
- Rate limiting (100 requests/minute)
- Request ID generation for tracing
- IP reputation scoring
- Bot detection
- Malicious pattern detection

### Database
- PostgreSQL via Prisma Cloud
- Prisma Accelerate support (connection pooling)
- Automatic migrations
- Seed data for development

### Observability
- Winston logging with daily rotation
- Request/response logging
- Error tracking
- Health check endpoint
- Performance metrics

### API Endpoints

#### Health Check
- `GET /health` - Server health status

#### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions (admin)

#### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter
- `DELETE /api/newsletter/:id` - Unsubscribe

#### Sales
- `POST /api/sales` - Submit sales inquiry

#### Partnerships
- `POST /api/partnerships/submit` - Submit partnership inquiry

#### Careers
- `POST /api/careers/apply` - Submit job application / join talent pool

#### Solutions
- `POST /api/solutions/request` - Submit custom solutions request

#### Beta Signup
- `POST /api/beta-signup` - Beta signup registration

#### Analytics (Future)
- `POST /api/analytics` - Track analytics events

## Getting Started

### Prerequisites
- Node.js 22+
- npm 10+
- PostgreSQL database (Prisma Cloud)

### Installation

1. **Clone and navigate to server directory**
```bash
cd "Annita-Landing Page/server"
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Set up database**
```bash
# Generate Prisma client
npm run build

# Run migrations (production)
npm run migrate:deploy

# Or push schema (development)
npm run db:push

# Seed database (development)
npx tsx prisma/seed.ts
```

5. **Start server**
```bash
# Development
npm run dev

# Production
npm start
```

### Environment Variables

See `.env.example` for all available variables. Key variables:

- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - JWT signing secret (min 32 chars)
- `CORS_ORIGIN` - Allowed CORS origins
- `NODE_ENV` - Environment (development/production)
- `RESEND_API_KEY` - Resend email API key
- `RESEND_FROM_EMAIL` - Sender email address
- `GOOGLE_SHEETS_ID` - Google Sheets ID for data sync
- `GOOGLE_SERVICE_ACCOUNT_EMAIL` - Google service account email
- `GOOGLE_PRIVATE_KEY` - Google service account private key

## Deployment

### Railway

1. **Connect Railway**
```bash
railway login
railway init
```

2. **Set environment variables**
```bash
railway variables set DATABASE_URL="your-database-url"
railway variables set JWT_SECRET="your-jwt-secret"
# ... set other variables
```

3. **Deploy**
```bash
railway up
```

### Docker

```bash
# Build image
docker build -t annita-landing-server .

# Run container
docker run -p 3001:3001 \
  -e DATABASE_URL="your-database-url" \
  -e JWT_SECRET="your-jwt-secret" \
  annita-landing-server
```

## Development

### Running Tests
```bash
npm test
```

### Code Quality
```bash
npm run lint
npm run security:check
```

### Database Management
```bash
# Create migration
npx prisma migrate dev --name migration_name

# Reset database
npx prisma migrate reset

# Open Prisma Studio
npx prisma studio
```

## Security Best Practices

1. **Never commit `.env` files**
2. **Use strong JWT secrets (min 32 characters)**
3. **Enable rate limiting in production**
4. **Keep dependencies updated**
5. **Use HTTPS in production**
6. **Regular security audits**
7. **Monitor logs for suspicious activity**

## Monitoring

### Health Check
```bash
curl http://localhost:3001/health
```

### Logs
Logs are stored in `./logs/` with daily rotation:
- `error-YYYY-MM-DD.log` - Error logs
- `combined-YYYY-MM-DD.log` - All logs

## Troubleshooting

### Database Connection Issues
- Verify `DATABASE_URL` is correct
- Check database is accessible
- Ensure Prisma Cloud credentials are valid

### Port Already in Use
- Change `PORT` in `.env`
- Kill process using port 3001

### Prisma Client Generation
```bash
npx prisma generate
```

## Support

For issues or questions:
- GitHub: https://github.com/Annita-LLC/Annita-v1
- Email: info@an-nita.com

## License

MIT License - Annita LLC
