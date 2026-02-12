"use client"
import { DockComponent } from '@/components/DockComponent';
import Navbar from '@/components/navbar';
import ContactSection from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import { Pointer } from '@/components/ui/pointer';
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
