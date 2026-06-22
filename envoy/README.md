# ============================================================================
# FORTUNE 500 / PENTAGON-GRADE LANDING PAGE PROXY
# ============================================================================

## Overview

This directory contains the Envoy proxy configuration for the Annita landing page with Pentagon-grade security features.

## Architecture

```
Internet → Envoy Proxy (Port 8080) → Rate Limit Service → Landing Page (Port 3000)
                    ↓
                 Redis
```

## Security Features

### 1. **Global Rate Limiting**
- Redis-backed distributed rate limiting
- 100 requests per second per IP
- Path-specific rate limits for API routes
- Burst protection up to 150 requests
- Automatic IP blocking for repeated violations

### 2. **Security Headers**
- Strict-Transport-Security (HSTS)
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: restricted access to sensitive APIs
- Content-Security-Policy: strict CSP with allowed sources

### 3. **CORS Protection**
- Strict origin validation
- Whitelisted domains only
- Configurable allowed methods and headers
- Credential support for authenticated requests

### 4. **DDoS Protection**
- Circuit breaker patterns
- Outlier detection for unhealthy backends
- Automatic request throttling
- Health checks with automatic failover

### 5. **Request Validation**
- Maximum header count limits
- Request size limits
- Protocol validation (HTTP/1.1, HTTP/2, HTTP/3)
- Timeout configurations

### 6. **Observability**
- Comprehensive access logging
- Request ID tracking for distributed tracing
- Performance metrics
- Upstream service time tracking
- Bot detection headers

## Services

### Envoy Proxy
- **Image**: envoyproxy/envoy:v1.29.0
- **Ports**: 8080 (HTTP), 8443 (HTTPS), 9901 (Admin)
- **Configuration**: envoy.yaml

### Rate Limit Service
- **Image**: envoyproxy/ratelimit:latest
- **Port**: 8081
- **Configuration**: ratelimit-config.yaml

### Redis
- **Image**: redis:7-alpine
- **Port**: 6379
- **Memory**: 128MB with LRU eviction

### Landing Page
- **Image**: Built from Dockerfile
- **Port**: 3000
- **Framework**: Next.js 16.2.9

## Quick Start

### 1. Build and Start Services

```bash
cd envoy
docker-compose up -d
```

### 2. Check Service Status

```bash
docker-compose ps
```

### 3. View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f envoy
docker-compose logs -f ratelimit
docker-compose logs -f landing_page
```

### 4. Access Services

- **Landing Page**: http://localhost:8080
- **Envoy Admin**: http://localhost:9901
- **Direct Landing Page**: http://localhost:3000 (internal only)

## Configuration

### Environment Variables

Create a `.env` file in the envoy directory:

```bash
# Redis Configuration
REDIS_PASSWORD=your_redis_password

# JWT Configuration (if needed for future auth)
JWT_SECRET=your_jwt_secret
JWT_ISSUER=https://an-nita.com
JWT_AUDIENCE=annita-landing-page

# Application Configuration
NEXT_PUBLIC_APP_URL=https://an-nita.com
```

### Rate Limit Configuration

Edit `ratelimit-config.yaml` to adjust rate limits:

```yaml
descriptors:
  - key: remote_address
    rate_limit:
      unit: second
      requests_per_unit: 100  # Adjust as needed
```

### Security Headers

Edit `envoy.yaml` to modify security headers:

```yaml
response_headers_to_add:
  - header:
      key: "Content-Security-Policy"
      value: "default-src 'self'; ..."  # Customize CSP
```

## Monitoring

### Envoy Admin Interface

Access http://localhost:9901 for:
- Cluster statistics
- Listener statistics
- Route configurations
- Health check status

### Logs

Security events are logged with the following format:
```
[Security] {"timestamp":"...","level":"info","event":"REQUEST_ALLOWED",...}
```

### Metrics

Envoy provides comprehensive metrics:
- Request counts and latencies
- Upstream health status
- Rate limit statistics
- Connection statistics

## Security Best Practices

### 1. **Production Deployment**
- Enable TLS/SSL termination
- Use strong Redis passwords
- Configure IP allowlists
- Enable Redis ACL
- Use secret management (AWS Secrets Manager, HashiCorp Vault)

### 2. **Rate Limiting**
- Monitor rate limit violations
- Adjust limits based on traffic patterns
- Implement IP reputation scoring
- Use distributed Redis for multi-instance deployments

### 3. **Monitoring**
- Set up alerts for:
  - High error rates
  - Rate limit violations
  - Unusual traffic patterns
  - Backend health failures
- Integrate with monitoring tools (Prometheus, Datadog, New Relic)

### 4. **Updates**
- Keep Envoy image updated
- Regularly review security headers
- Update rate limit configurations
- Review and update bot detection patterns

## Troubleshooting

### High Rate Limit Errors
- Check rate limit configuration in `ratelimit-config.yaml`
- Verify Redis connectivity
- Review logs for specific IP violations

### Backend Connection Issues
- Check backend health status in Envoy admin
- Verify backend service is running
- Check network connectivity between containers

### Memory Issues
- Adjust Redis maxmemory setting
- Review Envoy heap size configuration
- Check for memory leaks in landing page application

## Maintenance

### Regular Tasks
- Review and rotate Redis passwords
- Update rate limit configurations
- Review security logs for patterns
- Update Envoy image to latest stable version
- Backup Redis data

### Scaling
- Add more Envoy instances behind a load balancer
- Use external Redis cluster for rate limiting
- Scale landing page instances horizontally
- Configure health checks for auto-scaling

## Security Compliance

This configuration follows:
- **OWASP Top 10** security best practices
- **NIST Cybersecurity Framework** guidelines
- **Pentagon-grade** security standards
- **Fortune 500** enterprise requirements

## Support

For issues or questions:
1. Check logs: `docker-compose logs`
2. Review Envoy admin interface: http://localhost:9901
3. Consult Envoy documentation: https://www.envoyproxy.io/docs
4. Review security configuration in `envoy.yaml`

## License

Proprietary - Annita LLC
