'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data/products'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [isPaused, nextTestimonial])

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 bg-cream"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal mt-2 text-balance">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 p-3 rounded-full bg-white shadow-lg hover:bg-gold hover:text-white transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 p-3 rounded-full bg-white shadow-lg hover:bg-gold hover:text-white transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm"
              >
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <Quote className="h-10 w-10 text-gold/30" />
                  </div>

                  {/* Testimonial Text */}
                  <p className="font-serif text-xl sm:text-2xl text-charcoal leading-relaxed mb-8 text-balance">
                    &ldquo;{testimonials[currentIndex].comment}&rdquo;
                  </p>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'h-5 w-5',
                          i < testimonials[currentIndex].rating
                            ? 'fill-gold text-gold'
                            : 'fill-muted text-muted'
                        )}
                      />
                    ))}
                  </div>

                  {/* Customer Info */}
                  <div>
                    <p className="font-medium text-charcoal">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-warm-gray">
                      {testimonials[currentIndex].location}
                      {testimonials[currentIndex].verified && (
                        <span className="ml-2 text-green-600">Verified Purchase</span>
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  currentIndex === index
                    ? 'w-8 bg-gold'
                    : 'w-2 bg-gold/30 hover:bg-gold/50'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
