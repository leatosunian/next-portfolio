import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import Loader from "@/components/Loader";
import { LoaderProvider } from "../context/LoaderContext";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  
  const isSpanish = locale === 'es';
  
  return {
    title: isSpanish 
      ? "Leandro Tosunian | Desarrollador Web"
      : "Leandro Tosunian | Web Developer",
    description: isSpanish
      ? "Desarrollador web especializado en aplicaciones web, software a medida, tiendas online, páginas institucionales y landing pages. Construyo productos digitales con Next.js, Node.js y MongoDB."
      : "Web developer specialized in web applications, custom software, online stores, corporate websites and landing pages. I build digital products with Next.js, Node.js and MongoDB.",

    metadataBase: new URL("https://tosunian.dev"),

    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [
        { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
    },

    openGraph: {
      url: "https://tosunian.dev",
      siteName: "Leandro Tosunian",
      title: isSpanish 
        ? "Leandro Tosunian | Desarrollador Web"
        : "Leandro Tosunian | Web Developer",
      description: isSpanish
        ? "Desarrollador web especializado en aplicaciones web, software a medida, tiendas online, páginas institucionales y landing pages. Construyo productos digitales con Next.js, Node.js y MongoDB."
        : "Web developer specialized in web applications, custom software, online stores, corporate websites and landing pages. I build digital products with Next.js, Node.js and MongoDB.",
      locale: isSpanish ? "es_AR" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: isSpanish 
            ? "Leandro Tosunian — Portfolio de Desarrollo Web"
            : "Leandro Tosunian — Web Development Portfolio",
        },
      ],
    },

    alternates: {
      canonical: 'https://tosunian.dev',
      languages: {
        'es': 'https://tosunian.dev',
        'en': 'https://tosunian.dev/en',
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as 'es' | 'en')) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <LoaderProvider>
            <Loader />
            <TooltipProvider>
              {children}
            </TooltipProvider>
          </LoaderProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
