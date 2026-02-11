import Navbar from '@/components/navbar';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <main className="dark bg-background ">
      <Navbar />
      <Hero />
      <Hero />
    </main>
  );
}
