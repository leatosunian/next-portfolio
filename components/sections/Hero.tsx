"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { AuroraText } from '../ui/aurora-text'
import { Particles } from '../ui/particles'
import { Button } from '../ui/button'
import { BorderBeam } from '../ui/border-beam'
import Link from 'next/link'
import { Download } from 'lucide-react';

const fadeInUp = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.15,
         delayChildren: 0.2
      }
   }
}

const Hero = () => {
   return (
      <>
         <div className="relative flex items-center justify-center w-full h-screen overflow-hidden" id='hero'>
            {/* Particles Background */}
            <Particles
               className="absolute bg-[#0e0e10] inset-0 w-full h-full"
               quantity={100}
               ease={80}
               refresh />

            {/* text container */}
            <motion.div 
               className="relative z-10 flex flex-col items-start justify-center h-full max-w-3xl gap-16 px-6 2xl:max-w-5xl sm:gap-9"
               variants={staggerContainer}
               initial="hidden"
               animate="visible"
            >

               {/* title */}
               <motion.div 
                  className='flex flex-col w-full'
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
               >
                  <h1 className="text-4xl font-bold leading-snug text-white text-wrap 2xl:text-6xl md:text-5xl sm:text-4xl">
                     ¡Hola! Soy <AuroraText speed={2} colors={["#ad46ff", "#7e4ca5", "#b57edc"]} className='font-bold text-purple-500 text-wrap'>Leandro Tosunian</AuroraText>,
                     <br />
                     <AuroraText speed={2} colors={["#ad46ff", "#7e4ca5", "#b57edc"]} className='font-bold text-purple-500 text-wrap'>Desarrollador Web</AuroraText>.
                  </h1>
               </motion.div>

               {/* description */}
               <motion.div 
                  className='w-full'
                  variants={fadeInUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
               >
                  <p className='text-lg text-white 2xl:text-2xl sm:text-xl'>
                     Diseño y desarrollo aplicaciones web de principio a fin. TypeScript, Next.js y Node.js son el centro de mi stack actual. Enfocado en código escalable, mantenible y soluciones eficientes.
                  </p>
               </motion.div>

               {/* CTA buttons */}
               <motion.div 
                  className='flex w-full gap-5 sm:gap-4 sm:w-fit h-fit'
                  variants={fadeInUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
               >
                  <motion.div
                     whileHover={{ scale: 1.03 }}
                     whileTap={{ scale: 0.98 }}
                  >
                     <Button 
                        className="relative overflow-hidden text-white transition-colors duration-300 bg-transparent border border-white/20 hover:bg-purple-500 hover:border-purple-500" 
                        size="lg" 
                        variant="outline"
                     >
                        Proyectos
                        <BorderBeam
                           size={60}
                           className="from-transparent via-purple-500 to-transparent"
                        />
                     </Button>
                  </motion.div>

                  <Link href="https://drive.google.com/file/d/1T5ys_UxPdNVaPX4I4JWOVs6GqJJBtLPd/view?usp=sharing" className="relative overflow-hidden text-white">
                     <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                     >
                        <Button 
                           className="relative overflow-hidden text-white transition-colors duration-300 bg-transparent border border-white/20 hover:bg-purple-500 hover:border-purple-500" 
                           size="lg" 
                           variant="outline"
                        >
                           <Download className="w-5 h-5" />
                           Descargar CV
                        </Button>
                     </motion.div>
                  </Link>
               </motion.div>
            </motion.div>
         </div>
      </>
   )
}

export default Hero
