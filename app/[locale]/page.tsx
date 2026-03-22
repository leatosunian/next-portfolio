import { DockComponent } from '@/components/DockComponent';
import Navbar from '@/components/Navbar';
import Projects from '@/components/sections/projects/Projects';
import { Hero } from '@/components/sections/hero/Hero';
import { SmoothCursor } from '@/components/ui/smooth-cursor';
import { TooltipProvider } from '@/components/ui/tooltip';
import TechStack from '@/components/sections/tech-stack/TechStack';
import Certificates from '@/components/sections/certificates/Certificates';
import Contact from '@/components/sections/contact/Contact';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as 'es' | 'en')) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="overflow-x-hidden dark bg-[#0e0e10]">
      <TooltipProvider>
        <SmoothCursor />
        <Navbar />
        <Hero />

        <Projects />

        <Separator style={{ width: '20vw' }} className='mx-auto mt-0 sm:mt-4 ' />
        <TechStack />
        <Separator style={{ width: '20vw' }} className='mx-auto mt-0 sm:mt-4 ' />

        <Certificates />

        <Separator style={{ width: '25vw' }} className='mx-auto mt-0 sm:mt-4 ' />

        <Contact />
        <Footer />
        <DockComponent />
      </TooltipProvider>
    </main>
  );
}
