"use client";

import Link from "next/link";
import { ArrowRight, ChevronUp } from "lucide-react";
import { ShineBorder } from "./ui/shine-border";
// Si lo instalaste con la CLI, el path puede ser:
// import { ShineBorder } from "@/registry/magicui/shine-border";

// ─── Data ────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Proyectos", href: "#" },
  { label: "Stack", href: "#" },
  { label: "Certificaciones", href: "#" },
  { label: "Contacto", href: "#" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leandrotosunian/" },
  { label: "GitHub", href: "https://github.com/leatosunian" },
  { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=5492235423025" },
  { label: "Instagram", href: "https://www.instagram.com/tosunian.dev/" },
  { label: "Email", href: "mailto:leandrotosunian@hotmail.com" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0e0e10] text-white border-t border-white/5">
      {/* ── Top section ── */}
      <div className="px-6 py-20 mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">

          {/* ── CTA card con ShineBorder ──
              IMPORTANTE: el padre debe tener `relative` y `overflow-hidden` obligatoriamente.
              ShineBorder se coloca como primer hijo y es position:absolute,
              por eso el contenido va DESPUÉS de él dentro del mismo div.
          */}
          <div className="relative overflow-hidden flex flex-col items-start justify-between gap-6 rounded-xl bg-[#131316] p-8 sm:flex-row sm:items-center lg:items-center lg:flex-1 lg:min-h-40">
            <ShineBorder
              shineColor={["#a855f7", "#c084fc", "#7c3aed"]}
              duration={14}
              borderWidth={1}
            />

            {/* Contenido — va después de ShineBorder */}
            <div>
              <h3 className="text-2xl font-bold font-headline">
                ¿Listo para empezar tu proyecto?
              </h3>
              <p className="mt-1 text-sm font-body text-zinc-400">
                Comencemos a desarrollar tu idea.
              </p>
            </div>
            <Link
              href="https://api.whatsapp.com/send?phone=5492235423025"
              target="_blank"
              className="group flex cursor-none items-center gap-2 rounded-full border border-white/10 bg-[#1f1f22] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500 hover:text-white whitespace-nowrap"
            >
              Contactar
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* ── Nav + Social ── */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:gap-16 lg:shrink-0">

            {/* Nav links */}
            <div className="flex flex-col gap-4">
              <p className="font-label text-[0.65rem] font-bold uppercase tracking-widest text-zinc-500">
                Navegación
              </p>
              <nav className="flex flex-col gap-3">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-sm font-medium transition-colors font-label w-fit text-zinc-300 hover:text-purple-500"
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
                    target="_blank"
                    className="text-sm font-medium transition-colors font-label w-fit text-zinc-300 hover:text-purple-500"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5">
        <div className="flex flex-col items-center justify-between gap-4 px-6 py-6 mx-auto max-w-7xl sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-xs font-body text-zinc-500">
              © 2026 Leandro Tosunian | www.tosunian.dev
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="items-center justify-center hidden w-8 h-8 transition-all border rounded-full sm:flex border-white/10 text-zinc-400 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
            aria-label="Back to top"
          >
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
