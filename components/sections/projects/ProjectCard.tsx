"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Globe, Expand } from 'lucide-react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import image_420app2 from '@/public/420app2.png'
import image_altiva from '@/public/altiva.png'
import image_sacaturnoscreen from '@/public/sacaturnoscreen.png'
import image_telovendo from '@/public/telovendo.png'
import image_encino from '@/public/encino.png'
import image_cannabica from "@/public/cannabica.png"
import image_telovendopanel from "@/public/telovendopanel.png"
import image_emartscreen1 from "@/public/emartscreen1.png"
import image_emartscreen2 from "@/public/emartscreen2.png"
import Link from 'next/link'
import { Project } from '@/app/interfaces/IProject'
import { TechIcons } from '@/components/ui/tech-icons'
import { FullscreenGallery } from '@/components/ui/fullscreen-gallery'
import { useGallery } from '@/components/context/gallery-context'

// Image Gallery Carousel with auto-rotation, swipe support, and fullscreen modal
const ImageGallery = ({ images, title }: { images: StaticImageData[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false)
  const [direction, setDirection] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const { setIsGalleryOpen } = useGallery()

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }, [currentIndex])

  // Handle swipe gestures
  const handleDragStart = () => {
    setIsDragging(false)
  }

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Mark as dragging if moved more than 5px
    if (Math.abs(info.offset.x) > 5) {
      setIsDragging(true)
    }
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50
    const swipeVelocity = 500

    if (info.offset.x > swipeThreshold || info.velocity.x > swipeVelocity) {
      goToPrevious()
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -swipeVelocity) {
      goToNext()
    }
  }

  // Open fullscreen gallery at current index - only if not dragging
  const openFullscreen = useCallback(() => {
    if (!isDragging) {
      setIsFullscreenOpen(true)
      setIsGalleryOpen(true)
    }
  }, [isDragging, setIsGalleryOpen])

  // Close fullscreen gallery
  const closeFullscreen = useCallback(() => {
    setIsFullscreenOpen(false)
    setIsGalleryOpen(false)
  }, [setIsGalleryOpen])

  // Auto-rotation every 3.2 seconds
  useEffect(() => {
    if (images.length <= 1 || isPaused) return

    const interval = setInterval(() => {
      goToNext()
    }, 3200)

    return () => clearInterval(interval)
  }, [images.length, isPaused, goToNext])

  // Animation variants for slide transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  }

  return (
    <>
      <div
        className="relative w-full h-full overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Swipeable Images Container */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            onClick={openFullscreen}
          >
            <Image
              src={images[currentIndex]}
              alt={`${title} - imagen ${currentIndex + 1}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={currentIndex === 0}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {/* Fullscreen button */}
        <button
          onClick={openFullscreen}
          className="absolute z-20 p-2 transition-all rounded-full opacity-0 top-3 right-3 bg-black/40 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/60 group-hover:opacity-100"
          aria-label="Ver en pantalla completa"
        >
          <Expand className="w-4 h-4" />
        </button>

        {/* Navigation Arrows - Only show if more than 1 image */}
        {images.length > 1 && (
          <>
            {/* Left Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute z-20 p-2 transition-all -translate-y-1/2 rounded-full opacity-0 left-3 top-1/2 bg-black/40 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/60 group-hover:opacity-100 active:opacity-100 active:outline-none active:ring-2 active:ring-purple-500"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute z-20 p-2 transition-all -translate-y-1/2 rounded-full opacity-0 right-3 top-1/2 bg-black/40 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/60 group-hover:opacity-100 active:opacity-100 active:outline-none active:ring-2 active:ring-purple-500"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Dot Indicators - Bottom center, purple and stretched when active */}
        {images.length > 1 && (
          <div className="absolute z-20 flex items-center gap-2 -translate-x-1/2 bottom-4 left-1/2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  goToSlide(index)
                }}
                className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 focus:ring-offset-black/50 ${index === currentIndex
                  ? 'bg-purple-500 w-5 h-1.5'
                  : 'bg-white/50 hover:bg-white/80 w-1.5 h-1.5'
                  }`}
                aria-label={`Ir a imagen ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Gallery Modal */}
      <FullscreenGallery
        images={images}
        initialIndex={currentIndex}
        isOpen={isFullscreenOpen}
        onClose={closeFullscreen}
        title={title}
      />
    </>
  )
}

// Component for individual project card
export const ProjectCard = ({ project, reverse = false }: { project: Project; reverse?: boolean }) => {
  return (
    <div className={`flex flex-col gap-8 lg:gap-16 min-w-0 w-full ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start lg:items-center`}>
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

        {/* Domain Button and Tech Stack */}
        <div className="flex flex-wrap items-center gap-3">
          {project.link && project.domain && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-full border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-zinc-900/50"
            >
              <Globe className="w-4 h-4" />
              {project.domain}
            </Link>
          )}

          {/* Technology Icons */}
          <div className="flex items-center gap-2">
            {project.technologies.map((tech) => {
              const IconComponent = TechIcons[tech]
              return (
                <div
                  key={tech}
                  className="flex items-center justify-center w-10 h-10 transition-colors border rounded-full border-zinc-700 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-500"
                  title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                >
                  <IconComponent />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* Image Gallery */}
      <div className="relative w-full min-w-0 lg:w-1/2">
        <div className="relative overflow-hidden shadow-2xl rounded-xl aspect-video shadow-purple-500/10">
          <ImageGallery images={project.images} title={project.title} />
        </div>
      </div>
    </div>
  )
}
