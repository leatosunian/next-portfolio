'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTransition } from 'react';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const isSpanish = locale === 'es';

  const handleToggle = () => {
    const nextLocale = isSpanish ? 'en' : 'es';
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      aria-label={isSpanish ? 'Switch to English' : 'Cambiar a Español'}
      className={`
        flex items-center space-x-2 px-3 py-2
        text-white transition-colors rounded-lg cursor-none
        hover:text-purple-500/80 glass
        ${isPending ? 'opacity-50 pointer-events-none' : ''}
      `}
    >
      <Globe size={16} />
      <span className="text-sm font-medium">
        {isSpanish ? 'ES' : 'EN'}
      </span>
    </button>
  );
}