import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.an-nita.com'
  
  const routes = [
    '',
    '/about',
    '/awards',
    '/contact',
    '/contact-sales',
    '/solutions',
    '/solutions/request',
    '/security',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : route === '/solutions' ? 0.9 : 0.8,
  }))
}
