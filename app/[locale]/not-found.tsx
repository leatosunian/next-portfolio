import Navbar from '@/components/Navbar';
import { NotFound } from '@/components/sections/not-found/NotFound';
import { SmoothCursor } from '@/components/ui/smooth-cursor';

// El <title> lo define generateMetadata en app/[locale]/[...rest]/page.tsx
export default function LocaleNotFound() {
  return (
    <main className="overflow-x-hidden dark bg-[#0e0e10]">
      <SmoothCursor />
      <Navbar />
      <NotFound />
    </main>
  );
}
