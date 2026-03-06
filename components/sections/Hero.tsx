"use client"
import React from 'react'
import { AuroraText } from '../ui/aurora-text'
import { Particles } from '../ui/particles'
import { Button } from '../ui/button'

const Hero = () => {
   return (
      <>
         <style>
            {`
               @keyframes heartbeat {
                  0% {
                     box-shadow: 0 0 0 0 rgba(255,255, 255, 0);
                  }
                  50% {
                     box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.7);
                  }
                  100% {
                     box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
                  }
               }
               .animate-heartbeat {
                  animation: heartbeat 3s ease-out infinite;
                  background-color: black;
               }
            `}
         </style>

         <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
            {/* Particles Background */}
            <Particles
               className="absolute inset-0 w-full h-full"
               quantity={100}
               ease={80}
               refresh />

            {/* text container */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-3xl gap-16 px-6 2xl:max-w-5xl sm:gap-9 ">

               {/* title */}
               <div className='flex flex-col w-full '>
                  <h1 className="text-4xl font-bold leading-snug text-white text-wrap 2xl:text-6xl md:text-5xl sm:text-4xl">
                     ¡Hola!👋 Soy <AuroraText speed={2} colors={["#552586", "#4c1c72", "#7e4ca5", "#b57edc"]} className='font-bold text-purple-900 text-wrap'>Leandro Tosunian</AuroraText>,
                     <br />
                     <AuroraText speed={2} colors={["#552586", "#4c1c72", "#7e4ca5", "#b57edc"]} className='font-bold text-purple-900 text-wrap'>Desarrollador Web</AuroraText>.
                  </h1>
               </div>
               {/* description */}
               <div className='w-full '>
                  <p className='text-lg text-white 2xl:text-2xl sm:text-xl'>
                     Especializado en Next.js, Node.js y TypeScript, desarrollo aplicaciones full stack con arquitecturas limpias, SSR/ISR optimizado y buenas prácticas de escalabilidad. Enfocado en código mantenible y soluciones eficientes.
                  </p>
               </div>
               {/* CTA buttons */}
               <div className='flex w-full gap-5 sm:gap-4 sm:w-fit h-fit'>
                  <Button variant='default' style={{ backgroundColor: '#0a0a0a' }} className='flex-1 text-white sm:flex-none sm:w-32 cursor-none animate-heartbeat dark:bg-destructive'>
                     Proyectos
                  </Button>
                  <Button variant={'outline'} style={{ backgroundColor: '#0a0a0a' }} className='flex-1 text-white sm:flex-none sm:w-32 cursor-none'>
                     CV
                  </Button>
               </div>
            </div>


            {/* background */}
            {/* <AnimatedGridPattern numSquares={40}
               maxOpacity={0.05}
               duration={3}F
               repeatDelay={1}
               className={cn(
                  "mask-[radial-gradient(800px_circle_at_center,white,transparent)]",
                  "inset-x-0 inset-y-[0%] h-[200%] skew-y-12"
               )} /> */}

            {/* <LightRays /> */}

         </div>
      </>
   )
}

export default Hero