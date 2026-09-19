'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

// Solo desktop: aparece cuando el hero sale por completo del viewport
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const smoothScroll = useSmoothScroll();
  const t = useTranslations('Navbar');

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(!entry.isIntersecting));
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scroll-to-top"
          onClick={() => smoothScroll('hero')}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          className="fixed z-40 items-center justify-center hidden transition-colors border rounded-full md:flex bottom-6 right-6 w-11 h-11 cursor-none border-white/15 bg-[#0e0e10]/60 backdrop-blur-lg text-white/75 hover:text-white hover:border-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          aria-label={t('backToTop')}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
