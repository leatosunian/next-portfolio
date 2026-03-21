"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { AuroraText } from "../../ui/aurora-text"
import { Particles } from "../../ui/particles"
import { Button } from "../../ui/button"
import { BorderBeam } from "../../ui/border-beam"
import Link from "next/link"
import { Download } from "lucide-react"

// ─ Animation Variants (Variants type — no function variants) 

const fadeInUp: Variants = {
   hidden: { opacity: 0, y: 24 },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
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
         duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      },
   },
}

// ─ Code lines (data-driven, no raw apostrophes in JSX text) 

type PartColor = "purple" | "muted" | "dim" | "empty"

interface CodePart {
   text: string
   color: PartColor
}

interface CodeLine {
   num: string
   parts: CodePart[]
}

const CODE_LINES: CodeLine[] = [
   {
      num: "01",
      parts: [
         { text: "import", color: "purple" },
         { text: " { WebDeveloper } ", color: "muted" },
         { text: "from", color: "purple" },
         { text: " '@tosunian/dev'", color: "dim" },
      ],
   },
   {
      num: "02",
      parts: [{ text: "\u00a0", color: "empty" }],
   },
   {
      num: "03",
      parts: [
         { text: "const", color: "purple" },
         { text: " portfolio ", color: "muted" },
         { text: "= ", color: "muted" },
         { text: "new ", color: "purple" },
         { text: "Architect", color: "dim" },
         { text: "({", color: "muted" },
      ],
   },
   {
      num: "04",
      parts: [
         { text: "  name: ", color: "muted" },
         { text: "'Leandro'", color: "dim" },
         { text: ",", color: "muted" },
      ],
   },
   {
      num: "05",
      parts: [
         { text: "  focus: ", color: "muted" },
         { text: "'Performance'", color: "dim" },
         { text: ",", color: "muted" },
      ],
   },
   {
      num: "06",
      parts: [
         { text: "  stack: [", color: "muted" },
         { text: "'Next.js'", color: "dim" },
         { text: ", ", color: "muted" },
         { text: "'Node.js'", color: "dim" },
         { text: ", ", color: "muted" },
         { text: "'MongoDB'", color: "dim" },
         { text: "]", color: "muted" },
      ],
   },
   {
      num: "07",
      parts: [{ text: "});", color: "muted" }],
   },
]

const COLOR_MAP: Record<PartColor, string> = {
   purple: "text-[#ad46ff]",
   muted: "text-white/75",
   dim: "text-purple-300",
   empty: "opacity-0 select-none",
}

// ─ GlassPanel 

interface GlassPanelProps {
   children: React.ReactNode
   className?: string
}

const GlassPanel = ({ children, className = "" }: GlassPanelProps) => (
   <div
      className={`rounded-2xl border border-white/[0.07] shadow-2xl ${className}`}
      style={{
         background: "rgba(18, 18, 24, 0.65)",
         backdropFilter: "blur(18px)",
         WebkitBackdropFilter: "blur(18px)",
      }}
   >
      {children}
   </div>
)

// ─ CodeMockup 

const STACK_ICONS = [
   { icon: "⚡", label: "TypeScript" },
   { icon: "▲", label: "Next.js" },
   { icon: "⬡", label: "Node.js" },
] as const

const CodeMockup = () => (
   <GlassPanel className="relative p-5 overflow-hidden sm:p-6">
      {/* Window chrome */}
      <div className="flex items-center justify-between mb-6">
         <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
            <div className="w-3 h-3 rounded-full bg-[#ad46ff]/50" />
         </div>
         <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-white/25">
            VS CODE — PAGE.TSX
         </span>
      </div>

      {/* Code lines */}
      <div className="space-y-2.5 font-mono text-xs sm:text-sm leading-relaxed">
         {CODE_LINES.map((line, i) => (
            <motion.div
               key={line.num}
               className="flex items-center gap-3 sm:gap-4"
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.9 + i * 0.07, duration: 0.4, ease: "easeOut" }}
            >
               <span className="text-[#ad46ff]/30 w-5 text-right shrink-0 select-none tabular-nums">
                  {line.num}
               </span>
               <span>
                  {line.parts.map((part, j) => (
                     <span key={j} className={COLOR_MAP[part.color]}>
                        {part.text}
                     </span>
                  ))}
               </span>
            </motion.div>
         ))}
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between pt-5 mt-8 border-t border-white/6">
         <div className="flex -space-x-2.5">
            {STACK_ICONS.map(({ icon, label }) => (
               <div
                  key={label}
                  title={label}
                  className="w-9 h-9 rounded-full border-2 border-[#0e0e10] bg-[#1a1a22] flex items-center justify-center"
               >
                  <span className="text-[#ad46ff] text-xs font-bold">{icon}</span>
               </div>
            ))}
         </div>
         <motion.div
            className="text-[9px] sm:text-[10px] text-[#ad46ff] font-bold tracking-widest uppercase bg-[#ad46ff]/10 px-3 py-1 rounded-full"
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
         >
            Deploying…
         </motion.div>
      </div>
   </GlassPanel>
)

// ─ FloatingTechChip 
// Uses a single animate object for both entry + float loop.
// NO variant arrays — avoids the "variants + animate array" conflict.

interface FloatingTechChipProps {
   icon: string
   label: string
   sublabel: string
   color: string
   className?: string
   entryDelay?: number
   floatAmplitude?: number
}

const FloatingTechChip = ({
   icon,
   label,
   sublabel,
   color,
   className = "",
   entryDelay = 1.0,
   floatAmplitude = -8,
}: FloatingTechChipProps) => (
   <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
         opacity: { duration: 0.5, delay: entryDelay },
         scale: {
            duration: 0.5, delay: entryDelay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
         },
      }}
   >
      <motion.div
         animate={{ y: [0, floatAmplitude, 0] }}
         transition={{
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: entryDelay },
         }}
      >
         <GlassPanel className="px-3 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5 sm:gap-3">
            <div
               className="flex items-center justify-center w-8 h-8 rounded-lg sm:w-10 sm:h-10 shrink-0"
               style={{ background: `${color}18` }}
            >
               <span className="text-base sm:text-lg" style={{ color }}>
                  {icon}
               </span>
            </div>
            <div>
               <div className="text-[11px] sm:text-xs font-bold text-white leading-none mb-0.5">
                  {label}
               </div>
               <div className="text-[9px] sm:text-[10px] text-white/40">{sublabel}</div>
            </div>
         </GlassPanel>
      </motion.div>
   </motion.div>
)

// ─ Hero 

const Hero = () => {
   return (
      <div
         className="relative flex items-center justify-center w-full min-h-screen overflow-hidden"
         id="hero"
      >
         {/* Particles background */}
         <Particles
            className="absolute bg-[#0e0e10] inset-0 w-full h-full"
            quantity={100}
            ease={80}
            refresh
         />

         {/* Glow orbs */}
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

         {/* Content grid */}
         <div className="relative z-10 grid items-center w-full grid-cols-1 gap-12 pt-24 pb-20 mx-auto px-7 max-w-7xl lg:grid-cols-2 lg:px-12 xl:px-10 2xl:px-0">

            {/* Left column  */}
            <motion.div
               className="flex flex-col items-start gap-10 sm:gap-10"
               variants={staggerContainer}
               initial="hidden"
               animate="visible"
            >
               {/* Eyebrow */}
               <motion.div className="flex items-center gap-3" variants={fadeInUp}>
                  <span className="w-5 h-px bg-[#ad46ff]" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#ad46ff]">
                     ¡BIENVENIDO!
                  </span>
               </motion.div>

               {/* Headline*/}
               <motion.div className="flex flex-col w-full" variants={fadeInUp}>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold leading-[1.1] text-white tracking-tight">
                     <span className="block">{"¡Hola! Soy "}</span>
                     <span className="block whitespace-nowrap">
                        <AuroraText speed={2} colors={["#ad46ff", "#a448eb", "#b983df"]} className="font-bold">
                           Leandro Tosunian
                        </AuroraText>
                        {","}
                     </span>
                     <span className="block whitespace-nowrap">
                        <AuroraText speed={2} colors={["#ad46ff", "#7e4ca5", "#b57edc"]} className="font-bold">
                           Desarrollador Web
                        </AuroraText>
                        {"."}
                     </span>
                  </h1>
               </motion.div>

               {/* Description */}
               <motion.p
                  className="max-w-xl text-base leading-relaxed sm:text-lg xl:text-xl text-white/60"
                  variants={fadeInUp}
               >
                  Diseño y desarrollo aplicaciones web de principio a fin. TypeScript, Next.js y Node.js
                  son el centro de mi stack actual. Enfocado en código escalable, mantenible y soluciones
                  eficientes.
               </motion.p>

               {/* CTA Buttons */}
               <motion.div className="flex flex-wrap gap-4 cursor-none " variants={fadeInUp}>
                  <Button
                     className="relative overflow-hidden text-white transition-all duration-300 bg-[#1f1f22] border border-white/20 hover:bg-[#ad46ff] hover:border-[#ad46ff] cursor-none px-7 py-3"
                     size="lg"
                     variant="outline"
                  >
                     Proyectos
                     <BorderBeam
                        size={60}
                        className="from-transparent via-[#ad46ff] to-transparent"
                     />
                  </Button>

                  <Link
                     href="https://drive.google.com/file/d/1T5ys_UxPdNVaPX4I4JWOVs6GqJJBtLPd/view?usp=sharing"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Button
                        className="relative overflow-hidden text-white transition-colors duration-300 bg-transparent border cursor-none border-white/20 hover:bg-[#ad46ff] hover:border-[#ad46ff] px-7 py-3"
                        size="lg"
                        variant="outline"
                     >
                        <Download className="w-4 h-4 mr-1.5" />
                        Descargar CV
                     </Button>
                  </Link>
               </motion.div>
            </motion.div>

            {/*  Right column (desktop only)  */}
            <motion.div
               className="relative items-center justify-center hidden lg:flex"
               variants={cardReveal}
               initial="hidden"
               animate="visible"
            >
               <div className="relative w-full mx-auto max-w-120">
                  <CodeMockup />

                  {/* Mongodb chip */}
                  <FloatingTechChip
                     icon="🗄️"
                     label="MongoDB"
                     sublabel="Base de Datos"
                     color="#b983df"
                     className="-top-11 -right-8 xl:-right-12"
                     entryDelay={1.0}
                     floatAmplitude={-8}
                  />

                  {/* Node chip */}
                  <FloatingTechChip
                     icon="⬡"
                     label="Node.js"
                     sublabel="Backend Framework"
                     color="#ad46ff"
                     className=" top-10 -left-8 xl:-left-14"
                     entryDelay={1.2}
                     floatAmplitude={8}
                  />

                  {/* Next.js chip */}
                  <FloatingTechChip
                     icon="▲"
                     label="Next.js"
                     sublabel="Fullstack Framework"
                     color="#b983df"
                     className="-bottom-6 right-8 xl:right-12"
                     entryDelay={1.4}
                     floatAmplitude={-7}
                  />
               </div>
            </motion.div>

         </div>
      </div>
   )
}

export default Hero
