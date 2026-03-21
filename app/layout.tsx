import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import Loader from "@/components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Title and description for SEO and browser tab
  title: "Leandro Tosunian | Desarrollador Web",
  description:
    "Desarrollador web especializado en aplicaciones web, software a medida, tiendas online, páginas institucionales y landing pages. Construyo productos digitales con Next.js, Node.js y MongoDB.",

  metadataBase: new URL("https://tosunian.dev"),

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },   // fallback image
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  // Open Graph
  openGraph: {
    url: "https://tosunian.dev",
    siteName: "Leandro Tosunian",
    title: "Leandro Tosunian | Desarrollador Web",
    description:
      "Desarrollador web especializado en aplicaciones web, software a medida, tiendas online, páginas institucionales y landing pages. Construyo productos digitales con Next.js, Node.js y MongoDB.",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leandro Tosunian — Portfolio de Desarrollo Web",
      },
    ],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Loader />
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
