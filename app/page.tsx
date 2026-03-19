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
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="overflow-x-hidden dark bg-[#0e0e10]">
      <TooltipProvider>
        <SmoothCursor />
        <Navbar />
        <Hero />
        <Projects />

        <Separator style={{width:'20vw'}} className='mx-auto my-0 sm:my-4 ' />
        <TechStack />
        <Separator style={{width:'20vw'}} className='mx-auto my-0 sm:my-4 ' />

        <Certificates />

        <Separator style={{width:'25vw'}} className='mx-auto my-0 sm:my-4 ' />

        <Contact />
        <Footer />
        <DockComponent />
      </TooltipProvider>
      {/* <ContactSection /> */}
    </main>
  );
}
