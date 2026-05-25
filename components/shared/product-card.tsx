'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Heart, ShoppingBag, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { type Product, formatPrice } from '@/lib/data/products'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setCurrentImageIndex(0)
      }}
    >
      <Link href={`/products/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-cream-dark mb-4">
          {/* Images */}
          <Image
            src={product.images[currentImageIndex]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Image Navigation Dots */}
          {product.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentImageIndex(idx)
                  }}
                  className={cn(
                    'w-1.5 h-1.5 rounded-full transition-all duration-300',
                    currentImageIndex === idx
                      ? 'bg-white w-4'
                      : 'bg-white/50 hover:bg-white/80'
                  )}
                />
              ))}
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-charcoal text-white text-xs font-medium px-2.5 py-1 rounded">
                NEW
              </span>
            )}
            {discount > 0 && (
              <span className="bg-red-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                -{discount}%
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsWishlisted(!isWishlisted)
            }}
            className={cn(
              'absolute top-3 right-3 p-2 rounded-full transition-all duration-300',
              isWishlisted
                ? 'bg-red-50 text-red-500'
                : 'bg-white/80 text-charcoal hover:bg-white hover:text-gold'
            )}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart
              className={cn('h-4 w-4', isWishlisted && 'fill-red-500')}
            />
          </button>

          {/* Quick Add to Cart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-4"
          >
            <Button
              onClick={(e) => {
                e.preventDefault()
                // Add to cart logic
              }}
              className="w-full bg-charcoal hover:bg-charcoal/90 text-white gap-2"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </Button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-medium text-charcoal group-hover:text-gold transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'h-3.5 w-3.5',
                    i < Math.floor(product.rating)
                      ? 'fill-gold text-gold'
                      : 'fill-muted text-muted'
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-warm-gray">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-charcoal">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-warm-gray line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Color Options */}
          {/* {product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 pt-1">
              {product.colors.slice(0, 4).map((color) => (
                <div
                  key={color.name}
                  className="w-4 h-4 rounded-full border border-border"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-warm-gray">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          )} */}
        </div>
      </Link>
    </motion.div>
  )
}

interface ProductCarouselProps {
  products: Product[]
  title: string
  subtitle?: string
  viewAllLink?: string
}

export function ProductCarousel({ products, title, subtitle, viewAllLink }: ProductCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div>
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              {subtitle || 'Collection'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mt-2">
              {title}
            </h2>
          </div>
          {viewAllLink && (
            <Link
              href={viewAllLink}
              className="text-charcoal hover:text-gold font-medium flex items-center gap-2 transition-colors"
            >
              View All
              <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={cn(
              'absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg transition-all duration-300',
              canScrollLeft
                ? 'opacity-100 hover:bg-gold hover:text-white'
                : 'opacity-0 pointer-events-none'
            )}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={cn(
              'absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg transition-all duration-300',
              canScrollRight
                ? 'opacity-100 hover:bg-gold hover:text-white'
                : 'opacity-0 pointer-events-none'
            )}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Products */}
          <div
            ref={scrollRef}
            onScroll={updateScrollButtons}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 sm:-mx-0 sm:px-0"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[280px]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ProductGridProps {
  products: Product[]
  title: string
  subtitle?: string
  viewAllLink?: string
}

export function ProductGrid({ products, title, subtitle, viewAllLink }: ProductGridProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div>
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              {subtitle || 'Collection'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mt-2">
              {title}
            </h2>
          </div>
          {viewAllLink && (
            <Link
              href={viewAllLink}
              className="text-charcoal hover:text-gold font-medium flex items-center gap-2 transition-colors"
            >
              View All
              <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
