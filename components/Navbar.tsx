'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from '@/i18n/navigation'; // ← de i18n, no next/navigation
import { useTranslations } from 'next-intl';
import logo from '@/public/logowhite.png';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { Link } from '@/i18n/navigation'; // ← Link con soporte de locale
import { Icons } from '@/components/DockComponent';
import { cn } from '@/lib/utils';

const SECTION_IDS = ['projects', 'tech-stack', 'certificates', 'contact'];

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/leatosunian/', icon: <Github size={18} strokeWidth={1.75} /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/leandrotosunian/', icon: <Linkedin size={18} strokeWidth={1.75} /> },
  { label: 'WhatsApp', href: 'https://wa.me/+5492235423025', icon: <Icons.whatsapp className="size-[18px]" /> },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const smoothScroll = useSmoothScroll();
  const t = useTranslations('Navbar');

  const isStreamingPage = pathname === '/streaming';
  const isCeloPage = pathname === '/celo';
  // En mobile el menú abierto también convierte la barra en pill
  const isPill = isScrolled || isMobileMenuOpen;

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

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Scroll-spy: marca la sección que ocupa la franja central del viewport
  useEffect(() => {
    if (pathname !== '/') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    const targets = [document.getElementById('hero'), ...SECTION_IDS.map((id) => document.getElementById(id))];
    targets.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

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
    { label: t('projects'), id: 'projects' },
    { label: t('techStack'), id: 'tech-stack' },
    { label: t('certificates'), id: 'certificates' },
    { label: t('contact'), id: 'contact' },
  ];

  // En mobile, Contacto se muestra como CTA aparte en el pie del menú
  const mobileNavItems = navItems.filter(({ id }) => id !== 'contact');

  // En la home el logo vuelve arriba; en otras rutas navega a la home
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== '/') return;
    e.preventDefault();
    setIsMobileMenuOpen(false);
    smoothScroll('hero');
  };

  const itemDelay = (index: number) => ({
    transitionDelay: isMobileMenuOpen ? `${index * 50 + 100}ms` : '0ms',
  });

  const itemClasses = cn(
    'transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]',
    isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
  );

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(
          'fixed inset-0 z-30 bg-black/45 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
      />

      {/* NAVBAR */}
      <nav
        className={cn(
          'fixed top-0 w-full z-40 transition-all duration-300 outline-none',
          isPill && 'px-4 py-2'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="relative mx-auto max-w-7xl">
          <div
            className={cn(
              'transition-all duration-300',
              isPill
                ? 'glass backdrop-blur-lg bg-[#0e0e10]/60 rounded-2xl px-6 py-3 border border-white/15'
                : 'px-6 sm:px-6 py-4 border border-transparent'
            )}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                onClick={handleLogoClick}
                className="text-lg font-bold text-white cursor-none sm:text-xl md:flex-1"
                aria-label={t('backToTop')}
              >
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
                    onClick={() => setIsMobileMenuOpen((open) => !open)}
                    className="relative flex items-center justify-center w-9 h-9 rounded-lg cursor-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    aria-label={isMobileMenuOpen ? t('closeMenu') : t('openMenu')}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                  >
                    {/* Dos líneas que rotan hasta formar una X */}
                    <span
                      className={cn(
                        'absolute left-2 right-2 h-[1.5px] rounded-full bg-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]',
                        isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[13px]'
                      )}
                    />
                    <span
                      className={cn(
                        'absolute right-2 h-[1.5px] rounded-full bg-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]',
                        isMobileMenuOpen ? 'left-2 top-1/2 -translate-y-1/2 -rotate-45' : 'left-3.5 top-[21px]'
                      )}
                    />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* DESPLEGABLE MOBILE */}
          {!isStreamingPage && !isCeloPage && (
            <div
              id="mobile-menu"
              className={cn(
                'absolute left-0 right-0 top-full mt-2 p-1.5 md:hidden origin-top',
                'rounded-2xl border border-white/10 bg-[#141417]/95 backdrop-blur-xl',
                'transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]',
                isMobileMenuOpen
                  ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none invisible'
              )}
              aria-label={t('mobileMenu')}
            >
              <ul className="flex flex-col">
                {mobileNavItems.map(({ label, id }, index) => {
                  const isActive = activeSection === id;
                  return (
                    <li key={id} style={itemDelay(index)} className={itemClasses}>
                      <button
                        onClick={() => scrollToSection(id)}
                        className={cn(
                          'flex items-center justify-between w-full px-4 py-4 text-left text-xl font-medium tracking-tight rounded-xl cursor-none',
                          'transition-colors duration-200 active:bg-white/10',
                          'focus-visible:outline-none focus-visible:bg-white/8',
                          isActive ? 'bg-white/6 text-white' : 'text-white/60 hover:text-white'
                        )}
                        aria-current={isActive ? 'location' : undefined}
                      >
                        {label}
                        <span
                          className={cn(
                            'w-1.5 h-1.5 rounded-full bg-purple-500 transition-opacity duration-200',
                            isActive ? 'opacity-100' : 'opacity-0'
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div
                style={itemDelay(mobileNavItems.length)}
                className={cn('flex gap-1.5 px-1.5 pt-3 pb-1.5 mt-1 border-t border-white/6', itemClasses)}
              >
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center justify-center flex-1 gap-2 py-3 text-sm font-medium text-[#0e0e10] bg-white rounded-xl cursor-none transition-opacity active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                >
                  <Mail size={16} strokeWidth={2} aria-hidden="true" />
                  {t('contactCta')}
                </button>
                {SOCIAL_LINKS.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-11 rounded-xl bg-white/5 text-white/70 cursor-none transition-colors hover:text-white active:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
