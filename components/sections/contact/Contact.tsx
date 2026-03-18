"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, UserRound, Code2, AtSign, ArrowRight, Instagram } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';

// ─── Data ────────────────────────────────────────────────────────────────────

const links = [
  {
    icon: <FaLinkedin size={20} />,
    label: "LinkedIn",
    value: "in/leandrotosunian",
    href: "https://www.linkedin.com/in/leandrotosunian/",
  },
  {
    icon: <FaGithub size={20} />,
    label: "GitHub",
    value: "/leatosunian",
    href: "https://github.com/leatosunian",
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
    value: "+54 223-5423025",
    href: "https://api.whatsapp.com/send?phone=5492235423025",
  },
  {
    icon: <FaInstagram size={20} />,
    label: "Instagram",
    value: "tosunian.dev",
    href: "https://www.instagram.com/tosunian.dev/",
  },
  {
    icon: <Mail size={20} />,
    label: "Correo electrónico",
    value: "leandrotosunian@hotmail.com",
    href: "mailto:leandrotosunian@hotmail.com",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <section className="relative h-fit overflow-hidden bg-[#0e0e10] text-white">
      {/* Background glows */}
      {/* <div className="absolute top-1/2 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-48 -right-48 -z-10 h-[600px] w-[600px] rounded-full bg-fuchsia-400/5 blur-[100px] pointer-events-none" /> */}

      {/* Decorative glow */}
      <div
        className="absolute -inset-10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: `rgba(199, 153, 255, 0.2)` }}
      />

      <div className="flex flex-col justify-between gap-0 px-6 py-14 mx-auto lg:gap-20 lg:flex-row max-w-7xl">
        {/* Header */}
        <header className="mb-10 space-y-4 lg:mb-24">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-purple-500" />
            <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-purple-500">
              Redes sociales
            </span>
          </div>

          <h1
            className="max-w-4xl text-5xl font-extrabold leading-none tracking-tighter md:text-7xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Pongamonos en{" "}
            <span className="text-purple-500">contacto</span>
          </h1>

          <p className="max-w-2xl mt-8 text-lg leading-relaxed font-body text-zinc-400">
            Si llegaste hasta acá, probablemente tengamos algo para hablar. Escribime sin compromiso, sea para un proyecto o para una oportunidad laboral.
          </p>

          <div className="items-center self-start hidden gap-3 px-6 py-4 mt-8 bg-black border rounded-full sm:flex w-fit border-white/5">
            <div className="h-2 w-2 animate-pulse rounded-full bg-purple-500 shadow-[0_0_8px_rgba(199,153,255,0.8)]" />
            <span className="font-label text-[0.7rem] uppercase tracking-widest text-zinc-400">
              Respuesta antes de 24 horas
            </span>
          </div>
        </header>

        {/* Content grid */}
        <div className="mb-24 space-y-4">

          {/* Right — Connect links */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {/* Section label */}
            <div className="pb-2">
              <h2 className="text-2xl font-bold font-headline">Links</h2>
              <div className="w-12 h-1 mt-2 bg-purple-400 rounded-full" />
            </div>

            {links.map(({ icon, label, value, href }) => (
              <ContactLink
                key={value}
                icon={icon}
                label={label}
                value={value}
                href={href}
              />
            ))}

            {/* Status indicator */}
            <div className="flex items-center self-start gap-3 px-6 py-4 mt-4 bg-black border rounded-full sm:hidden border-white/5">
              <div className="h-2 w-2 animate-pulse rounded-full bg-purple-500 shadow-[0_0_8px_rgba(199,153,255,0.8)]" />
              <span className="font-label text-[0.7rem] uppercase tracking-widest text-zinc-400">
                Respuesta antes de 24 horas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Link Card ────────────────────────────────────────────────────────

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group cursor-none flex items-center justify-between rounded-xl border border-white/5 bg-[#131316] p-3 transition-all duration-300 hover:bg-[#19191c]"
    >
      <div className="flex items-center gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#262529] text-purple-500 transition-all duration-300 group-hover:bg-purple-500 group-hover:text-[#2e0155]">
          {icon}
        </div>
        <div>
          <p className="font-label mb-0.5 text-[0.65rem] font-bold uppercase tracking-widest text-zinc-400">
            {label}
          </p>
          <p className="text-lg font-semibold font-headline">{value}</p>
        </div>
      </div>

      <ArrowRight
        size={18}
        className="text-purple-400 transition-all duration-300 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </Link>
  );
}
