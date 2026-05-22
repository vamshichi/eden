'use client'

import { motion } from 'framer-motion'
import { Tag } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'
import { ProductCard } from '@/components/shared/product-card'
import { products } from '@/lib/data/products'

export default function SalePage() {
  const saleProducts = products.filter(p => p.originalPrice && p.originalPrice > p.price)

  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        <div className="relative h-64 bg-red-600 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1920&h=600&fit=crop)' }} />
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 mb-3">
                <Tag className="h-8 w-8 text-white" />
                <h1 className="font-serif text-4xl md:text-5xl text-white">Sale</h1>
              </motion.div>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/90 text-xl">Up to 50% Off on Selected Items</motion.p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {saleProducts.map((product, index) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}><ProductCard product={product} /></motion.div>
            ))}
          </motion.div>
          {saleProducts.length === 0 && <p className="text-center text-warm-gray py-20">No sale items at the moment. Check back soon!</p>}
        </div>
      </main>
      <Footer />
    </div>
  )
}
