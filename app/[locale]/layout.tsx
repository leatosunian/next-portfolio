import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { TooltipProvider } from '@/components/ui/tooltip';
import Loader from '@/components/Loader';
import { LoaderProvider } from '../context/LoaderContext';
import { LANGUAGE_ALTERNATES, SITE_URL } from '@/lib/site';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  return {
    title: isEn
      ? 'Leandro Tosunian | Web Developer'
      : 'Leandro Tosunian | Desarrollador Web',
    description: isEn
      ? 'Web developer specialized in web applications, custom software, online stores, institutional pages and landing pages. Building digital products with Next.js, Node.js and MongoDB.'
      : 'Desarrollador web especializado en aplicaciones web, software a medida, tiendas online, páginas institucionales y landing pages. Construyo productos digitales con Next.js, Node.js y MongoDB.',
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
    },
    openGraph: {
      url: `${SITE_URL}/${locale}`,
      siteName: 'Leandro Tosunian',
      title: isEn
        ? 'Leandro Tosunian | Web Developer'
        : 'Leandro Tosunian | Desarrollador Web',
      description: isEn
        ? 'Web developer specialized in web applications, custom software, online stores, institutional pages and landing pages.'
        : 'Desarrollador web especializado en aplicaciones web, software a medida, tiendas online, páginas institucionales y landing pages.',
      locale: isEn ? 'en_US' : 'es_AR',
      alternateLocale: isEn ? 'es_AR' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: isEn
            ? 'Leandro Tosunian — Web Development Portfolio'
            : 'Leandro Tosunian — Portfolio de Desarrollo Web',
        },
      ],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        ...LANGUAGE_ALTERNATES,
        'x-default': SITE_URL,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Si el locale no existe en la config → 404
  if (!routing.locales.includes(locale as 'es' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  // <html> y <body> viven acá (y no en app/layout.tsx) para poder setear lang={locale}
  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <LoaderProvider>
              <Loader />
              <TooltipProvider>
                {children}
              </TooltipProvider>
            </LoaderProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}