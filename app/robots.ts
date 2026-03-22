import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // rutas que no querés indexar
    },
    sitemap: 'https://tosunian.dev/sitemap.xml',
  }
}