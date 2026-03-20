"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { IProject } from '@/app/interfaces/IProject'
import { TechIcons } from '@/components/ui/tech-icons'
import { ImageGallery } from './ImageGallery'
import { Globe } from 'lucide-react'

// project card component
export const ProjectCard = ({ project, reverse = false }: { project: IProject; reverse?: boolean }) => {
  return (
    <div className={`flex flex-col gap-8 lg:gap-16 min-w-0 w-full ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start lg:items-center`}>
      {/* Text Content */}
      <div className="flex flex-col gap-5 lg:w-1/2">
        {/* Label */}
        <span className="text-sm font-medium tracking-wide text-purple-500 uppercase">
          {project.label}
        </span>

        {/* Title */}
        <h3 className="text-4xl font-bold leading-tight text-white lg:text-4xl xl:text-5xl text-balance">
          {project.title}
        </h3>

        {/* Description Card */}
        <motion.div 
          className="p-6 border rounded-2xl bg-zinc-900/80 border-zinc-800"
          whileHover={{ scale: 1.01, borderColor: "rgba(168, 85, 247, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <p className="leading-relaxed text-zinc-300">
            {project.description}
          </p>
        </motion.div>

        {/* Link Button and Tech Stack */}
        <div className="flex flex-wrap items-center gap-3">
          {project.link && project.domain && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-full cursor-none border-zinc-700 text-zinc-300 hover:text-white hover:border-purple-500 bg-zinc-900/50"
              >
                <Globe className="w-4 h-4" />
                {project.domain}
              </Link>
            </motion.div>
          )}

          {/* Tech Icons */}
          <div className="flex items-center gap-2">
            {project.technologies.map((tech, index) => {
              const IconComponent = TechIcons[tech]
              return (
                <motion.div
                  key={tech}
                  className="flex items-center justify-center w-10 h-10 transition-colors border rounded-full border-zinc-700 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-purple-500"
                  title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                >
                  <IconComponent />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <motion.div 
        className="relative w-full min-w-0 lg:w-1/2"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative overflow-hidden shadow-2xl rounded-xl aspect-video shadow-purple-500/10">
          <ImageGallery images={project.projectImages} galleryImages={project.galleryImages} title={project.title} />
        </div>
      </motion.div>

    </div>
  )
}
