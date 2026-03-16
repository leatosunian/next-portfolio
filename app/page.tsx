import { DockComponent } from '@/components/DockComponent';
import Navbar from '@/components/Navbar';
import Projects from '@/components/sections/projects/Projects';
import Hero from '@/components/sections/Hero';
import { SmoothCursor } from '@/components/ui/smooth-cursor';
import { TooltipProvider } from '@/components/ui/tooltip';
import TechStack from '../components/sections/tech-stack/TechStack';

export default function Home() {
  return (
    <main className="overflow-x-hidden dark bg-background">
      <TooltipProvider>
        <SmoothCursor />
        <Navbar />
        <Hero />
        <Projects />
        <TechStack />
        <DockComponent />
      </TooltipProvider>
      {/* <ContactSection /> */}
    </main>
  );
}
