'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, X, ShoppingBag, ArrowRight } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'
import { Button } from '@/components/ui/button'
import { products, formatPrice } from '@/lib/data/products'

const initialWishlist = [products[0], products[2], products[4], products[6]]

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlist)

  const removeItem = (id: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">My Wishlist</h1>
          <p className="text-warm-gray mb-8">{wishlistItems.length} items saved</p>

          {wishlistItems.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
              <Heart className="h-16 w-16 mx-auto text-warm-gray mb-4" />
              <h2 className="font-serif text-2xl text-charcoal mb-2">Your wishlist is empty</h2>
              <p className="text-warm-gray mb-6">Save items you love to your wishlist and shop them later.</p>
              <Link href="/women"><Button className="bg-gold hover:bg-gold-dark gap-2">Explore Collection<ArrowRight className="h-4 w-4" /></Button></Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlistItems.map((product, index) => (
                <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="group relative bg-white rounded-lg overflow-hidden shadow-sm">
                  <Link href={`/products/${product.id}`} className="block">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image src={product.images[0]} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      {product.originalPrice && <span className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">-{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%</span>}
                    </div>
                  </Link>
                  <button onClick={() => removeItem(product.id)} className="absolute top-3 right-3 p-2 bg-white/90 rounded-full text-warm-gray hover:text-red-500 hover:bg-white transition-colors shadow-sm"><X className="h-4 w-4" /></button>
                  <div className="p-4">
                    <Link href={`/products/${product.id}`} className="font-medium text-charcoal hover:text-gold transition-colors line-clamp-1">{product.name}</Link>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-semibold text-charcoal">{formatPrice(product.price)}</span>
                      {product.originalPrice && <span className="text-sm text-warm-gray line-through">{formatPrice(product.originalPrice)}</span>}
                    </div>
                    <Button className="w-full mt-3 bg-gold hover:bg-gold-dark gap-2" size="sm"><ShoppingBag className="h-4 w-4" />Add to Cart</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
