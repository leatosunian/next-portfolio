"use client"

import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import { FullscreenGallery } from "./FullscreenGallery";

// Image Gallery Carousel with auto-rotation, swipe support, and fullscreen modal
export const ImageGallery = ({ images, galleryImages, title }: { images: StaticImageData[]; galleryImages: StaticImageData[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false)
  const [direction, setDirection] = useState(0)

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
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50
    const swipeVelocity = 500

    if (info.offset.x > swipeThreshold || info.velocity.x > swipeVelocity) {
      goToPrevious()
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -swipeVelocity) {
      goToNext()
    }
  }

  // Open fullscreen gallery at current index
  const openFullscreen = useCallback(() => {
    setIsFullscreenOpen(true)
  }, [])

  // Auto-rotation every 3.2 seconds
  useEffect(() => {
    if (images.length <= 1 || isPaused || isFullscreenOpen) return

    const interval = setInterval(() => {
      goToNext()
    }, 3000)

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
        className="relative w-full h-full overflow-hidden group cursor-none"
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
            //drag="x"
            //dragConstraints={{ left: 0, right: 0 }}
            //dragElastic={0.7}
            //onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-none "
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
          className="absolute z-20 p-3 transition-all rounded-full opacity-0 cursor-none top-3 right-3 bg-black/40 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/60 group-hover:opacity-100"
          aria-label="Ver en pantalla completa"
        >
          <Expand className="w-5 h-5" />
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
              className="absolute z-20 p-2 transition-all -translate-y-1/2 rounded-full opacity-0 cursor-none left-3 top-1/2 bg-black/40 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/60 group-hover:opacity-100 active:opacity-100 active:outline-none active:ring-2 active:ring-purple-500"
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
              className="absolute z-20 p-2 transition-all -translate-y-1/2 rounded-full opacity-0 cursor-none right-3 top-1/2 bg-black/40 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/60 group-hover:opacity-100 active:opacity-100 active:outline-none active:ring-2 active:ring-purple-500"
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
        images={galleryImages}
        initialIndex={currentIndex}
        isOpen={isFullscreenOpen}
        onClose={() => setIsFullscreenOpen(false)}
        title={title}
      />
    </>
  )
}
