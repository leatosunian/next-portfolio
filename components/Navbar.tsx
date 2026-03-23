'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from '@/i18n/navigation'; // ← de i18n, no next/navigation
import { useTranslations } from 'next-intl';
import logo from '@/public/logowhite.png';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { Link } from '@/i18n/navigation'; // ← Link con soporte de locale

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const smoothScroll = useSmoothScroll();
  const t = useTranslations('Navbar');

  const isStreamingPage = pathname === '/streaming';
  const isCeloPage = pathname === '/celo';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const router = useRouter();

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false); // ← mover acá arriba, siempre se ejecuta
    if (pathname !== '/') {
      router.push(`/#${id}`);
      return;
    }
    smoothScroll(id);
  };

  const navItems = [
    { label: t('home'), id: 'hero', number: '01' },
    { label: t('projects'), id: 'projects', number: '02' },
    { label: t('techStack'), id: 'tech-stack', number: '03' },
    { label: t('certificates'), id: 'certificates', number: '04' },
    { label: t('contact'), id: 'contact', number: '05' },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 outline-none ${isScrolled ? 'px-4 py-2' : ''
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className={`max-w-7xl mx-auto transition-all duration-300 ${isScrolled
              ? 'glass backdrop-blur-lg bg-[#0e0e10]/60 rounded-2xl px-6 py-3 border border-white/15'
              : 'px-6 sm:px-6 py-4 border border-transparent'
            }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-lg font-bold text-white cursor-none sm:text-xl md:flex-1">
              <Image src={logo} width={43} height={43} alt="Logo" />
            </Link>

            {/* Desktop nav links */}
            {!isStreamingPage && !isCeloPage && (
              <div className="items-center hidden mr-6 space-x-8 md:flex">
                {navItems.map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="relative px-3 py-2 transition-colors text-white/75 hover:text-white cursor-none group"
                    aria-label={`Navigate to ${label} section`}
                  >
                    {label}
                    <span className="absolute bottom-0 w-0 h-px transition-all duration-300 -translate-x-1/2 bg-white left-1/2 group-hover:w-full" />
                  </button>
                ))}
              </div>
            )}

            {/* Desktop: Language Switcher */}
            <div className="items-center hidden gap-3 md:flex">
              <LanguageSwitcher />
            </div>

            {/* Mobile controls */}
            <div className="flex items-center space-x-3 md:hidden">
              {/* Language switcher en mobile también */}
              <LanguageSwitcher />

              {(isStreamingPage || isCeloPage) && (
                <Link
                  href="/"
                  className="p-2 text-white transition-colors rounded-lg hover:text-white/80 glass"
                  aria-label="Back to home"
                >
                  <ArrowLeft size={20} />
                </Link>
              )}

              {!isStreamingPage && !isCeloPage && (
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="text-white transition-colors rounded-lg hover:text-white/80 glass cursor-none"
                  aria-label="Open mobile menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <Menu size={24} />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-md transition-opacity duration-300 md:hidden ${isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden="true"
      />

      {/* PANEL LATERAL MOBILE */}
      <div
        className={`fixed top-0 right-0 h-full w-[78vw] max-w-xs z-60 md:hidden
          transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Fondo glassmorphism */}
        <div className="absolute inset-0 bg-[#0e0e10]/80 backdrop-blur-2xl border-l border-white/10" />

        {/* Gradiente decorativo superior */}
        <div className="absolute top-0 left-0 w-full h-48 pointer-events-none bg-linear-to-b from-white/6 to-transparent" />
        {/* Gradiente decorativo inferior */}
        <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-linear-to-t from-white/3 to-transparent" />

        {/* Botón X */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ transitionDelay: isMobileMenuOpen ? '80ms' : '0ms' }}
          className={`absolute top-5 right-5 z-10
            flex items-center justify-center w-9 h-9 rounded-xl
            border border-white/10 bg-white/5
            hover:bg-white/10 hover:border-white/20
            text-white/60 hover:text-white
            transition-all duration-300 cursor-none
            ${isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          aria-label="Close mobile menu"
        >
          <X size={16} strokeWidth={1.75} />
        </button>

        {/* Contenido del panel */}
        <div className="relative flex flex-col h-full px-6 pt-20 pb-10">
          <nav className="flex flex-col gap-1">
            {navItems.map(({ label, id, number }, index) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${index * 60 + 120}ms`
                    : '0ms',
                }}
                className={`group flex items-center gap-4 w-full text-left px-3 py-3.5 rounded-xl
                  transition-all duration-300
                  hover:bg-white/5 active:bg-white/10
                  ${isMobileMenuOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                  }`}
                aria-label={`Navigate to ${label} section`}
              >
                <span className="text-[10px] font-mono text-purple-500 tracking-widest w-5 group-hover:text-white/50 transition-colors duration-200">
                  {number}
                </span>
                <span className="text-sm font-medium tracking-wide transition-colors duration-200 text-white/70 group-hover:text-white">
                  {label}
                </span>
                <span className="ml-auto text-xs transition-all duration-200 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-white/40">
                  →
                </span>
              </button>
            ))}
          </nav>

          <div className="mt-auto">
            <div className="h-px mb-6 bg-white/10" />
            <p className="text-white/20 text-[10px] font-mono tracking-widest uppercase text-center">
              www.tosunian.dev
            </p>
          </div>
        </div>
      </div>
    </>
  );
}