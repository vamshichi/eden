'use client'

import { useState, use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, ShoppingBag, Share2, Truck, RefreshCw, Shield, Star, ChevronLeft, ChevronRight, Minus, Plus, Check } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'
import { ProductCard } from '@/components/shared/product-card'
import { Button } from '@/components/ui/button'
import { products, formatPrice } from '@/lib/data/products'
import { cn } from '@/lib/utils'

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const product = products.find(p => p.id === resolvedParams.id) || products[0]
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const [activeTab, setActiveTab] = useState<'description' | 'details' | 'reviews'>('description')

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    if (!selectedSize) return
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="min-h-screen bg-cream">
      {/* <AnnouncementBar /> */}
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-warm-gray mb-8">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href={`/${product.category}`} className="hover:text-gold capitalize">{product.category}</Link>
            <span>/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[3/4] bg-white rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.images[selectedImage]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="px-3 py-1 bg-gold text-white text-xs font-medium rounded-full">
                      NEW
                    </span>
                  )}
                  {discount > 0 && (
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                      -{discount}%
                    </span>
                  )}
                </div>

                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImage(prev => prev === 0 ? product.images.length - 1 : prev - 1)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setSelectedImage(prev => prev === product.images.length - 1 ? 0 : prev + 1)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        'relative w-20 h-24 rounded-md overflow-hidden border-2 transition-colors',
                        selectedImage === index ? 'border-gold' : 'border-transparent hover:border-gold/50'
                      )}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
                {product.name}
              </h1>
              
              {/* Rating */}
              {/* <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'h-4 w-4',
                        i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-gray-300'
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-warm-gray">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div> */}

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-semibold text-charcoal">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-warm-gray line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="text-sm font-medium text-red-500">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-warm-gray mb-8 leading-relaxed">
                {product.description || 'Experience the perfect blend of comfort and style with this premium piece from our collection. Crafted with the finest materials for lasting elegance.'}
              </p>

              {/* Color Selection */}
              {/* <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-charcoal">Color: {selectedColor.name}</span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        'w-10 h-10 rounded-full border-2 transition-all',
                        selectedColor.name === color.name
                          ? 'ring-2 ring-gold ring-offset-2'
                          : 'hover:scale-110'
                      )}
                      style={{ 
                        backgroundColor: color.hex, 
                        borderColor: color.hex === '#ffffff' ? '#e5e5e5' : color.hex 
                      }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div> */}

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-charcoal">Size</span>
                  <Link href="/size-guide" className="text-sm text-gold hover:underline">
                    Size Guide
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        'min-w-[48px] px-4 py-2 text-sm font-medium border rounded-md transition-colors',
                        selectedSize === size
                          ? 'bg-gold text-white border-gold'
                          : 'border-border text-charcoal hover:border-gold'
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-sm text-red-500 mt-2">Please select a size</p>
                )}
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <span className="text-sm font-medium text-charcoal mb-3 block">Quantity</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-md">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="p-3 hover:bg-cream-dark transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="p-3 hover:bg-cream-dark transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-8">
                <Button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className={cn(
                    'flex-1 gap-2 py-6 text-base',
                    addedToCart ? 'bg-green-600 hover:bg-green-700' : 'bg-gold hover:bg-gold-dark'
                  )}
                >
                  {addedToCart ? (
                    <>
                      <Check className="h-5 w-5" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-5 w-5" />
                      Add to Cart
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={cn(
                    'h-14 w-14 border-border',
                    isWishlisted && 'text-red-500 border-red-500'
                  )}
                >
                  <Heart className={cn('h-5 w-5', isWishlisted && 'fill-current')} />
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14 border-border">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-cream-dark rounded-lg">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto text-gold mb-2" />
                  <p className="text-xs text-warm-gray">Free Shipping</p>
                  <p className="text-xs text-charcoal font-medium">Above Rs. 999</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="h-6 w-6 mx-auto text-gold mb-2" />
                  <p className="text-xs text-warm-gray">Easy Returns</p>
                  <p className="text-xs text-charcoal font-medium">7 Day Policy</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto text-gold mb-2" />
                  <p className="text-xs text-warm-gray">Secure Payment</p>
                  <p className="text-xs text-charcoal font-medium">100% Protected</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-16">
            <div className="flex border-b border-border">
              {(['description', 'details', 'reviews'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'px-6 py-4 text-sm font-medium capitalize transition-colors relative',
                    activeTab === tab ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
                  )}
                >
                  {tab}
                  {tab === 'reviews' && ` (${product.reviews})`}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="py-8">
              {activeTab === 'description' && (
                <div className="prose max-w-none text-warm-gray">
                  <p>
                    {product.description || 'Experience the perfect blend of comfort and style with this premium piece from our collection. Crafted with the finest materials for lasting elegance.'}
                  </p>
                  <p className="mt-4">
                    Each piece in our collection is carefully selected to ensure you receive only the highest quality. 
                    Our designers blend traditional craftsmanship with modern aesthetics to create timeless pieces that 
                    you&apos;ll treasure for years to come.
                  </p>
                </div>
              )}
              {activeTab === 'details' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 max-w-md">
                    <span className="text-warm-gray">Material</span>
                    <span className="text-charcoal">Premium Cotton Blend</span>
                    <span className="text-warm-gray">Care</span>
                    <span className="text-charcoal">Machine Wash Cold</span>
                    <span className="text-warm-gray">Fit</span>
                    <span className="text-charcoal">Regular Fit</span>
                    <span className="text-warm-gray">Origin</span>
                    <span className="text-charcoal">Made in India</span>
                  </div>
                </div>
              )}
              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-4xl font-semibold text-charcoal">{product.rating}</div>
                      <div className="flex items-center justify-center gap-1 my-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              'h-4 w-4',
                              i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-gray-300'
                            )}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-warm-gray">{product.reviews} reviews</div>
                    </div>
                  </div>
                  <p className="text-warm-gray">Customer reviews will be displayed here.</p>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16">
              <h2 className="font-serif text-2xl text-charcoal mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
