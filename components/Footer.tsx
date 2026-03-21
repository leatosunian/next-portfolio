"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronUp } from "lucide-react";
import { ShineBorder } from "./ui/shine-border";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const navLinks = [
  { label: "Inicio", id: "hero" },
  { label: "Proyectos", id: "projects" },
  { label: "Stack", id: "tech-stack" },
  { label: "Certificaciones", id: "certificates" },
  { label: "Contacto", id: "contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leandrotosunian/" },
  { label: "GitHub", href: "https://github.com/leatosunian" },
  { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=5492235423025" },
  { label: "Instagram", href: "https://www.instagram.com/tosunian.dev/" },
  { label: "Email", href: "mailto:leandrotosunian@hotmail.com" },
];

export default function Footer() {
  const smoothScroll = useSmoothScroll()

  return (
    <motion.footer
      className="bg-[#0e0e10] text-white overflow-hidden border-t border-white/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="px-6 py-10 mx-auto sm:py-20 max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">

          {/* CTA card */}
          <motion.div
            className="relative overflow-hidden flex flex-col items-start justify-between gap-6 rounded-xl bg-[#131316] p-8 sm:flex-row sm:items-center lg:items-center lg:flex-1 lg:min-h-40"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
          >
            <ShineBorder
              shineColor={["#a855f7", "#c084fc", "#7c3aed"]}
              duration={14}
              borderWidth={1}
            />
            <div>
              <h3 className="text-2xl font-bold font-headline">
                ¿Listo para empezar tu proyecto?
              </h3>
              <p className="mt-1 text-sm font-body text-zinc-400">
                Comencemos a desarrollar tu idea.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="https://api.whatsapp.com/send?phone=5492235423025"
                target="_blank"
                className="group flex cursor-none items-center gap-2 rounded-full border border-white/10 bg-[#1f1f22] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500 hover:text-white whitespace-nowrap"
              >
                Contactar
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Nav + Social */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:gap-16 lg:shrink-0">

            {/* Nav links */}
            <motion.div
              className="flex flex-col gap-4"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="font-label text-[0.65rem] font-bold uppercase tracking-widest text-zinc-500">
                Navegación
              </p>
              <nav className="flex flex-col gap-3">
                {navLinks.map(({ label, id }, index) => (
                  <motion.button
                    key={label}
                    onClick={() => smoothScroll(id)}
                    className="text-sm font-medium transition-colors font-label w-fit text-zinc-300 hover:text-purple-500"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2, delay: index * 0.02 }}
                  >
                    {label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex flex-col gap-4"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <p className="font-label text-[0.65rem] font-bold uppercase tracking-widest text-zinc-500">
                Social
              </p>
              <nav className="flex flex-col gap-3">
                {socialLinks.map(({ label, href }, index) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2, delay: index * 0.02 }}
                  >
                    <Link
                      href={href}
                      target="_blank"
                      className="text-sm font-medium transition-colors font-label w-fit text-zinc-300 hover:text-purple-500"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="border-t border-white/5"
        variants={fadeInUp}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <div className="flex flex-col items-center justify-between gap-4 px-6 py-6 mx-auto max-w-7xl sm:flex-row sm:items-center">
          <p className="text-xs font-body text-zinc-500">
            © 2026 Leandro Tosunian | www.tosunian.dev
          </p>
          {/* <motion.button
            onClick={() => smoothScroll("projects")}
            className="items-center justify-center hidden w-8 h-8 transition-all border rounded-full sm:flex border-white/10 text-zinc-400 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
            aria-label="Back to top"
          >
            <ChevronUp size={16} />
          </motion.button> */}
        </div>
      </motion.div>
    </motion.footer>
  );
}
