"use client"
import React from 'react'
import { Globe } from 'lucide-react'
import Image from 'next/image'

interface Project {
  label: string
  title: string
  description: string
  imageUrl: string
  link?: string
}

const projects: Project[] = [
  {
    label: "Featured Project",
    title: "NeuraWeb – Futuristic AI Website Landing Design",
    description: "A sleek, dark-themed AI-powered landing page concept built in Figma. Designed for modern startups and futuristic digital products, it features glowing neon visuals, immersive UI, and a dynamic tone. The design encapsulates the cutting-edge possibilities of AI and tech, offering a glimpse into the future of online experiences for tech-forward companies.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZwUh6tgtWQW83LF6Nygz4735c5nWS4.png",
    link: "#"
  },
  {
    label: "Featured Project",
    title: "Apple Vision Pro – HR Software Design",
    description: "A futuristic HR software concept designed for Apple Vision Pro, built in Figma to reimagine attendance, leave tracking, and employee experience – all in one immersive interface.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eROMklhA3TDiz4Cn3hKLsC2eQ33k6q.png",
    link: "#"
  }
]

const ProjectCard = ({ project, reverse = false }: { project: Project; reverse?: boolean }) => {
  return (
    <div className={`flex flex-col gap-8 lg:gap-16 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start lg:items-center`}>
      {/* Text Content */}
      <div className="flex flex-col gap-6 lg:w-1/2">
        {/* Label */}
        <span className="text-sm font-medium tracking-wide text-purple-500 uppercase">
          {project.label}
        </span>
        
        {/* Title */}
        <h3 className="text-3xl font-bold leading-tight text-white lg:text-4xl xl:text-5xl text-balance">
          {project.title}
        </h3>
        
        {/* Description Card */}
        <div className="p-6 border rounded-2xl bg-zinc-900/80 border-zinc-800">
          <p className="leading-relaxed text-zinc-300">
            {project.description}
          </p>
        </div>
        
        {/* Link Icon */}
        {project.link && (
          <a 
            href={project.link} 
            className="flex items-center justify-center transition-colors border rounded-full w-11 h-11 border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500"
            aria-label="Visit project"
          >
            <Globe className="w-5 h-5" />
          </a>
        )}
      </div>
      
      {/* Image */}
      <div className="relative w-full lg:w-1/2">
        <div className="relative overflow-hidden shadow-2xl rounded-xl aspect-video shadow-purple-500/10">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  )
}

const FeaturedProjects = () => {
  return (
    <section className="relative w-full px-6 py-20 overflow-hidden bg-background lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
