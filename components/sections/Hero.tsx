"use client"
import React from 'react'
import { LightRays } from '../ui/light-rays'
import { cn } from '@/lib/utils'
import { DotPattern } from '../ui/dot-pattern'

const Hero = () => {
   return (
      <>
         <div className="relative w-full h-screen overflow-hidden border rounded-lg">
            <div className="relative z-10 flex flex-col justify-center h-full gap-4 px-6 text-center">
               <span className="text-2xl font-semibold text-white">
                  ¡Hola! Soy
               </span>
               <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                  Leandro Tosunian
               </h1>
               <p className="">
                  Desarrollador Web Full Stack
               </p>
            </div>
            {/* <LightRays  color='#440a8c42'  /> */}
            <DotPattern
               glow={true}
               color='#440a8c'
               className={cn(
                  "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
               )}
            />
         </div>
      </>
   )
}

export default Hero