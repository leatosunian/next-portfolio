import { DockComponent } from '@/components/DockComponent';
import Navbar from '@/components/Navbar';
import Projects from '@/components/sections/projects/Projects';
import Hero from '@/components/sections/Hero';
import { SmoothCursor } from '@/components/ui/smooth-cursor';

export default function Home() {
  return (
    <main className="overflow-x-hidden dark bg-background">
      <SmoothCursor />
      <Navbar />
      <Hero />
      <Projects />
      <DockComponent />
      {/* <ContactSection /> */}
    </main>
  );
}
