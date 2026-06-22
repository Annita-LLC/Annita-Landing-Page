import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/.env',
          '/*.env',
          '/api/',
          '/_next/',
          '/static/',
          '/vercel/',
        ],
      },
      {
        // Explicitly welcome search & AI crawlers for deep discovery
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Claude-Web',
          'ClaudeBot',
          'Google-Extended',
          'Googlebot',
          'OAI-SearchBot',
          'Bingbot',
          'Applebot',
          'Baiduspider',
          'YandexBot',
        ],
        allow: '/',
      }
    ],
    sitemap: 'https://www.an-nita.com/sitemap.xml',
  }
}
