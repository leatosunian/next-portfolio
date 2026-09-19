"use client"

import { motion, Variants } from "framer-motion"
import { useTranslations } from "next-intl"
import { ArrowLeft, FolderOpen } from "lucide-react"
import { AuroraText } from "@/components/ui/aurora-text"
import { Particles } from "@/components/ui/particles"
import { Button } from "@/components/ui/button"
import { BorderBeam } from "@/components/ui/border-beam"
import { Link, usePathname } from "@/i18n/navigation"
import { RouteTerminal } from "./RouteTerminal"

// Mismas curvas que el hero para que la 404 se sienta parte de la landing
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.2 },
  },
}

const cardReveal: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export const NotFound = () => {
  const t = useTranslations("NotFound")
  const pathname = usePathname()

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen overflow-hidden">
      <Particles
        className="absolute bg-[#0e0e10] inset-0 w-full h-full"
        quantity={100}
        ease={80}
        refresh
      />

      {/* Background glow orbs */}
      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none -top-32 -left-32 w-120 h-120 opacity-20"
        style={{
          background: "radial-gradient(circle, #ad46ff 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 rounded-full pointer-events-none -right-24 w-100 h-100 opacity-15"
        style={{
          background: "radial-gradient(circle, #7e4ca5 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 grid items-center w-full grid-cols-1 gap-12 pt-24 pb-20 mx-auto px-7 max-w-7xl lg:grid-cols-2 lg:px-12 xl:px-10 2xl:px-0">

        {/* Left column */}
        <motion.div
          className="flex flex-col items-start gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div className="flex items-center gap-3" variants={fadeInUp}>
            <span className="w-5 h-px bg-[#ad46ff]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#ad46ff]">
              {t("eyebrow")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div className="flex flex-col w-full" variants={fadeInUp}>
            {/* Mismos colores que el titular; la máscara lo desvanece hacia abajo sin alterar el tono */}
            <span
              aria-hidden="true"
              className="font-mono text-7xl font-bold leading-none tracking-tighter select-none sm:text-8xl"
              style={{
                maskImage: "linear-gradient(to bottom, black 35%, transparent 110%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 35%, transparent 110%)",
              }}
            >
              <AuroraText
                speed={2}
                colors={["#ad46ff", "#a448eb", "#b983df"]}
                className="font-bold"
              >
                404
              </AuroraText>
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl 2xl:text-6xl font-bold leading-[1.1] text-white tracking-tight">
              <span className="block">{t("title")}</span>
              <span className="block">
                <AuroraText
                  speed={2}
                  colors={["#ad46ff", "#a448eb", "#b983df"]}
                  className="font-bold"
                >
                  {t("titleHighlight")}
                </AuroraText>
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            className="max-w-xl text-base leading-relaxed 2xl:text-lg text-white/60"
            variants={fadeInUp}
          >
            {t("description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-wrap gap-4 cursor-none" variants={fadeInUp}>
            <Link href="/" className="cursor-none">
              <Button
                className="relative overflow-hidden text-white transition-all duration-300 bg-[#1f1f22] border border-white/20 hover:bg-[#ad46ff] hover:border-[#ad46ff] cursor-none px-7 py-3"
                size="lg"
                variant="outline"
                tabIndex={-1}
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                {t("ctaHome")}
                <BorderBeam
                  size={60}
                  className="from-transparent via-[#ad46ff] to-transparent"
                />
              </Button>
            </Link>

            <Link href="/#projects" className="cursor-none">
              <Button
                className="relative overflow-hidden text-white transition-colors duration-300 bg-transparent border cursor-none border-white/20 hover:bg-[#ad46ff] hover:border-[#ad46ff] px-7 py-3"
                size="lg"
                variant="outline"
                tabIndex={-1}
              >
                <FolderOpen className="w-4 h-4 mr-1.5" />
                {t("ctaProjects")}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right column — terminal mockup (desktop only) */}
        <motion.div
          className="relative items-center justify-center hidden lg:flex"
          variants={cardReveal}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full mx-auto max-w-120">
            <RouteTerminal pathname={pathname} status={t("terminalStatus")} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
