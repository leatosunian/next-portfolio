"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { useTranslations } from 'next-intl'

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
  title,
}: FullscreenGalleryProps) => {
  const t = useTranslations("Gallery")

  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (isOpen) setCurrentIndex(initialIndex)
  }, [isOpen, initialIndex])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') goToPrevious()
      else if (e.key === 'ArrowRight') goToNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose]) // eslint-disable-line react-hooks/exhaustive-deps

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

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50
    const swipeVelocity = 500
    if (info.offset.x > swipeThreshold || info.velocity.x > swipeVelocity) {
      goToPrevious()
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -swipeVelocity) {
      goToNext()
    }
  }

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0 }),
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center z-60 bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute z-50 p-3 transition-all rounded-full cursor-none top-4 right-4 bg-white/10 backdrop-blur-sm text-white/80 hover:text-white hover:bg-white/20"
            aria-label={t("closeGallery")}
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
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrevious() }}
                  className="absolute z-50 p-2 transition-all -translate-y-1/2 rounded-full left-4 md:left-8 top-1/2 bg-white/10 backdrop-blur-sm text-white/80 hover:text-white hover:bg-white/20"
                  aria-label={t("prevImage")}
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); goToNext() }}
                  className="absolute z-50 p-2 transition-all -translate-y-1/2 rounded-full right-4 md:right-8 top-1/2 bg-white/10 backdrop-blur-sm text-white/80 hover:text-white hover:bg-white/20"
                  aria-label={t("nextImage")}
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
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
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-0 flex items-center justify-center cursor-none"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={images[currentIndex]}
                      alt={t("imageAlt", { title, number: currentIndex + 1 })}
                      fill
                      className="object-contain rounded-2xl"
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
                  onClick={(e) => { e.stopPropagation(); goToSlide(index) }}
                  className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    index === currentIndex
                      ? 'bg-purple-500 w-6 h-2'
                      : 'bg-white/50 hover:bg-white/80 w-2 h-2'
                  }`}
                  aria-label={t("goToImage", { number: index + 1 })}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}