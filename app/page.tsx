import { DockComponent } from '@/components/DockComponent';
import Navbar from '@/components/Navbar';
import Projects from '@/components/sections/projects/Projects';
import Hero from '@/components/sections/Hero';
import { SmoothCursor } from '@/components/ui/smooth-cursor';
import { TooltipProvider } from '@/components/ui/tooltip';
import TechStack from '../components/sections/tech-stack/TechStack';
import Certificates from '@/components/sections/certificates/Certificates';
import Contact from '@/components/sections/contact/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden dark bg-background">
      <TooltipProvider>
        <SmoothCursor />
        <Navbar />
        <Hero />
        <Projects />
        <TechStack />
        <Certificates />
        <DockComponent />
        <Contact />
        <Footer />
      </TooltipProvider>
      {/* <ContactSection /> */}
    </main>
  );
}
