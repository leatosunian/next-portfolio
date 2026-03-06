"use client"
import { DockComponent } from '@/components/DockComponent';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import { SmoothCursor } from '@/components/ui/smooth-cursor';

export default function Home() {
  return (
    <main className="dark bg-background ">
      <SmoothCursor />
      <Navbar />
      <Hero />
      <DockComponent/>
      {/* <ContactSection /> */}
    </main>
  );
}
