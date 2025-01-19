'use client'

import Image from 'next/image'
import { useState } from 'react'

interface CarouselProps {
  images: string[]
  altTexts?: string[]
}

export default function Carousel({ images, altTexts }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden mt-8">
      {/* Slide Container */}
      <div className="relative h-64 sm:h-80 md:h-96">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={src}
              alt={altTexts && altTexts[idx] ? altTexts[idx] : `Slide ${idx}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-green-700 text-white rounded p-2 hover:bg-green-600 focus:outline-none"
        aria-label="Previous Slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-green-700 text-white rounded p-2 hover:bg-green-600 focus:outline-none"
        aria-label="Next Slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === currentIndex ? 'bg-green-700' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  )
}
