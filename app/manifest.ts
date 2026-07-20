import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Annita LLC | Africa\'s Unified Digital Infrastructure & Ecosystem',
    short_name: 'Annita',
    description: 'Africa\'s first all-in-one digital ecosystem integrating e-commerce, fintech, AI, communication, marketing, logistics, and more.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0f1c',
    theme_color: '#00C28A',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
