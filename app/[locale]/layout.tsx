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
    metadataBase: new URL('https://tosunian.dev'),
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
      url: 'https://tosunian.dev',
      siteName: 'Leandro Tosunian',
      title: isEn
        ? 'Leandro Tosunian | Web Developer'
        : 'Leandro Tosunian | Desarrollador Web',
      description: isEn
        ? 'Web developer specialized in web applications, custom software, online stores, institutional pages and landing pages.'
        : 'Desarrollador web especializado en aplicaciones web, software a medida, tiendas online, páginas institucionales y landing pages.',
      locale: isEn ? 'en_US' : 'es_AR',
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
      canonical: 'https://tosunian.dev',
      languages: {
        es: 'https://tosunian.dev',
        en: 'https://tosunian.dev/en',
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

  // ⚠️ SIN <html> ni <body> — los provee app/layout.tsx
  // Solo agregamos las clases de fuente al div wrapper y los providers
  return (
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
  );
}