"use client";

import Link from "next/link";
import { ArrowRight, ChevronUp } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Stack", href: "#" },
  { label: "Journal", href: "#" },
];

const socialLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0e0e10] text-white border-t border-white/5">
      {/* ── Top section ── */}
      <div className="px-6 py-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold leading-tight tracking-tight font-headline">
              Stay in the loop.
            </h2>
            <p className="mt-4 text-sm leading-relaxed font-body text-zinc-400">
              Receive occasional updates on new projects, tech experiments, and
              design resources.
            </p>
            <div className="mt-8 flex items-center overflow-hidden rounded-lg border border-white/10 bg-[#131316]">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 text-sm text-white bg-transparent outline-none placeholder-zinc-500"
              />
              <button className="m-1 rounded-md bg-purple-500 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-purple-400 whitespace-nowrap">
                Join Newsletter
              </button>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-4 lg:col-span-1 lg:pl-16">
            <p className="font-label text-[0.65rem] font-bold uppercase tracking-widest text-zinc-500">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm font-medium transition-colors font-label w-fit text-zinc-300 hover:text-purple-400"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-4">
            <p className="font-label text-[0.65rem] font-bold uppercase tracking-widest text-zinc-500">
              Social
            </p>
            <nav className="flex flex-col gap-3">
              {socialLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm font-medium transition-colors font-label w-fit text-zinc-300 hover:text-purple-400"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="px-6 pb-12 mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-white/5 bg-[#131316] p-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-bold font-headline">
              Have a vision in mind?
            </h3>
            <p className="mt-1 text-sm font-body text-zinc-400">
              Let&apos;s build something exceptional together.
            </p>
          </div>
          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-[#1f1f22] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400 whitespace-nowrap"
          >
            Get in touch
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5">
        <div className="flex flex-col items-start justify-between gap-4 px-6 py-6 mx-auto max-w-7xl sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-xs font-body text-zinc-500">
              © 2024 Developer Portfolio. Built with minimalist design.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="font-label text-[0.65rem] font-bold uppercase tracking-widest text-zinc-600 transition-colors hover:text-zinc-400"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="font-label text-[0.65rem] font-bold uppercase tracking-widest text-zinc-600 transition-colors hover:text-zinc-400"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-8 h-8 transition-all border rounded-full border-white/10 text-zinc-400 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
            aria-label="Back to top"
          >
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
