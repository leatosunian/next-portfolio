import type { ReactNode } from 'react';

// <html> y <body> los provee app/[locale]/layout.tsx, que conoce el idioma
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
