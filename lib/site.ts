import { routing } from '@/i18n/routing';

export const SITE_URL = 'https://tosunian.dev';

// URL canónica de cada idioma, usada para hreflang en metadata y sitemap
export const LANGUAGE_ALTERNATES = Object.fromEntries(
  routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}`])
) as Record<(typeof routing.locales)[number], string>;
