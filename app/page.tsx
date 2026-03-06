import { DockComponent } from '@/components/DockComponent';
import Navbar from '@/components/navbar';
import ContactSection from '@/components/sections/Contact';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Hero from '@/components/sections/Hero';
import { SmoothCursor } from '@/components/ui/smooth-cursor';

export default function Home() {
  return (
    <main className="dark bg-background ">
      <SmoothCursor />
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <DockComponent/>
      {/* <ContactSection /> */}
    </main>
  );
}
