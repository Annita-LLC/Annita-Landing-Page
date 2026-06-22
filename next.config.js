/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
    ],
    unoptimized: true,
  },
  // Security headers (additional layer beyond Envoy)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), camera=(), microphone=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
          },
        ],
      },
    ]
  },
  // Output configuration for Docker
  output: 'standalone',
  // Security optimizations
  poweredByHeader: false,
  compress: true,
  // Experimental features for security
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
