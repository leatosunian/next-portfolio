import { DockComponent } from '@/components/DockComponent';
import Navbar from '@/components/Navbar';
import Projects from '@/components/sections/projects/Projects';
import Hero from '@/components/sections/Hero';
import { SmoothCursor } from '@/components/ui/smooth-cursor';
import { GalleryProvider } from '@/components/context/gallery-context';

export default function Home() {
  return (
    <GalleryProvider>
      <main className="overflow-x-hidden dark bg-background">
        <SmoothCursor />
        <Navbar />
        <Hero />
        <Projects />
        <DockComponent />
        {/* <ContactSection /> */}
      </main>
    </GalleryProvider>
  );
}
