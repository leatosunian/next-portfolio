import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'NotFound' });
  return { title: t('metaTitle') };
}

// Cualquier ruta bajo /[locale] que no exista cae acá y muestra app/[locale]/not-found.tsx
export default function CatchAllPage() {
  notFound();
}
