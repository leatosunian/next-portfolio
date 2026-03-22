"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { AuroraText } from "../../ui/aurora-text"
import { Particles } from "../../ui/particles"
import { Button } from "../../ui/button"
import { BorderBeam } from "../../ui/border-beam"
import Link from "next/link"
import { Download } from "lucide-react"
import { useLoader } from "@/app/context/LoaderContext"
import { CodeMockup } from "./CodeMockup"
import { FloatingTechCard } from "./FloatingTech"
import { useTranslations } from "next-intl"

// Animation Variants  
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


// Hero 
export const Hero = () => {
   const { isLoaded } = useLoader();
   const t = useTranslations("hero");
   
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

         {/* background glow orbs */}
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
               animate={isLoaded ? "visible" : "hidden"}
            >
               {/* Eyebrow */}
               <motion.div className="flex items-center gap-3" variants={fadeInUp}>
                  <span className="w-5 h-px bg-[#ad46ff]" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#ad46ff]">
                     {t("eyebrow")}
                  </span>
               </motion.div>

               {/* Headline*/}
               <motion.div className="flex flex-col w-full" variants={fadeInUp}>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold leading-[1.1] text-white tracking-tight">
                     <span className="block">{t("greeting")} </span>
                     <span className="block whitespace-nowrap">
                        <AuroraText speed={2} colors={["#ad46ff", "#a448eb", "#b983df"]} className="font-bold">
                           {t("name")}
                        </AuroraText>
                        {","}
                     </span>
                     <span className="block whitespace-nowrap">
                        <AuroraText speed={2} colors={["#ad46ff", "#7e4ca5", "#b57edc"]} className="font-bold">
                           {t("role")}
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
                  {t("description")}
               </motion.p>

               {/* CTA Buttons */}
               <motion.div className="flex flex-wrap gap-4 cursor-none " variants={fadeInUp}>
                  <Button
                     className="relative overflow-hidden text-white transition-all duration-300 bg-[#1f1f22] border border-white/20 hover:bg-[#ad46ff] hover:border-[#ad46ff] cursor-none px-7 py-3"
                     size="lg"
                     variant="outline"
                  >
                     {t("projectsButton")}
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
                        {t("downloadCV")}
                     </Button>
                  </Link>
               </motion.div>
            </motion.div>

            {/*  Right column (vscode mockup) (desktop only)  */}
            <motion.div
               className="relative items-center justify-center hidden lg:flex"
               variants={cardReveal}
               initial="hidden"
               animate={isLoaded ? "visible" : "hidden"}
            >
               <div className="relative w-full mx-auto max-w-120">
                  {/* vscode mockup */}
                  <CodeMockup />

                  {/* Mongodb chip */}
                  <FloatingTechCard
                     icon="🗄️"
                     label="MongoDB"
                     sublabel={t("mongodbLabel")}
                     color="#b983df"
                     className="-top-11 -right-8 xl:-right-12"
                     entryDelay={1.0}
                     floatAmplitude={-8}
                  />

                  {/* Node chip */}
                  <FloatingTechCard
                     icon="⬡"
                     label="Node.js"
                     sublabel={t("nodeLabel")}
                     color="#ad46ff"
                     className=" top-10 -left-8 xl:-left-14"
                     entryDelay={1.2}
                     floatAmplitude={8}
                  />

                  {/* Next.js chip */}
                  <FloatingTechCard
                     icon="▲"
                     label="Next.js"
                     sublabel={t("nextjsLabel")}
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
