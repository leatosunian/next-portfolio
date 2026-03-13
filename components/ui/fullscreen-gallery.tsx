"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

interface FullscreenGalleryProps {
  images: StaticImageData[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
  title: string
}

export const FullscreenGallery = ({
  images,
  initialIndex,
  isOpen,
  onClose,
  title
}: FullscreenGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [direction, setDirection] = useState(0)

  // Reset index when modal opens with new initialIndex
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
    }
  }, [isOpen, initialIndex])

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

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

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute z-50 p-3 transition-all rounded-full top-4 right-4 bg-white/10 backdrop-blur-sm text-white/80 hover:text-white hover:bg-white/20"
            aria-label="Cerrar galería"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image counter */}
          <div className="absolute z-50 px-4 py-2 text-sm font-medium rounded-full top-4 left-4 bg-white/10 backdrop-blur-sm text-white/80">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Title */}
          <div className="absolute z-50 px-4 py-2 text-sm font-medium text-center -translate-x-1/2 rounded-full top-4 left-1/2 bg-white/10 backdrop-blur-sm text-white/80 whitespace-nowrap">
            {title}
          </div>

          {/* Main image container */}
          <div
            className="relative flex items-center justify-center w-full h-full px-4 py-20 md:px-16 lg:px-24"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                {/* Left Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevious()
                  }}
                  className="absolute z-50 p-3 transition-all -translate-y-1/2 rounded-full left-4 md:left-8 top-1/2 bg-white/10 backdrop-blur-sm text-white/80 hover:text-white hover:bg-white/20"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNext()
                  }}
                  className="absolute z-50 p-3 transition-all -translate-y-1/2 rounded-full right-4 md:right-8 top-1/2 bg-white/10 backdrop-blur-sm text-white/80 hover:text-white hover:bg-white/20"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </>
            )}

            {/* Swipeable image area */}
            <div className="relative w-full h-full max-w-6xl mx-auto overflow-hidden">
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
                  onDragEnd={handleDragEnd}
                  className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={images[currentIndex]}
                      alt={`${title} - imagen ${currentIndex + 1}`}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                      draggable={false}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dot Indicators */}
          {images.length > 1 && (
            <div className="absolute z-50 flex items-center gap-3 -translate-x-1/2 bottom-6 left-1/2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    goToSlide(index)
                  }}
                  className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    index === currentIndex
                      ? 'bg-purple-500 w-6 h-2'
                      : 'bg-white/50 hover:bg-white/80 w-2 h-2'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>
          )}

          {/* Swipe hint for mobile */}
          <div className="absolute z-50 px-4 py-2 text-xs text-center -translate-x-1/2 rounded-full bottom-14 left-1/2 text-white/50 md:hidden">
            Desliza para navegar
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
