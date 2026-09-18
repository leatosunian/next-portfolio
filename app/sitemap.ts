import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { LANGUAGE_ALTERNATES, SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
    alternates: {
      languages: { ...LANGUAGE_ALTERNATES, 'x-default': SITE_URL },
    },
  }))
}
