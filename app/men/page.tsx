'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Grid3X3, LayoutGrid } from 'lucide-react'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'
import { ProductCard } from '@/components/shared/product-card'

import { products } from '@/lib/data/products'

const subcategories = [
  'All',
  'Kurtas',
  'Shirts',
  'Blazers',
  'Ethnic Wear',
  'Casual Wear',
  'Formal Wear',
]

export default function MenPage() {
  const [selectedSubcategory, setSelectedSubcategory] =
    useState('All')

  const [gridView, setGridView] = useState<
    'grid' | 'large'
  >('grid')

  const [sortBy, setSortBy] =
    useState('featured')

  const menProducts = products.filter(
    (p) => p.category === 'men'
  )

  const filteredProducts = useMemo(() => {
    let filtered = [...menProducts]

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break

      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break

      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break

      case 'newest':
        filtered = filtered.filter((p) => p.isNew)
        break
    }

    return filtered
  }, [menProducts, sortBy])

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* <AnnouncementBar /> */}

      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Banner */}
        <div className="relative h-[320px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=1920&h=700&fit=crop)',
            }}
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-5xl md:text-7xl text-white"
              >
                Men&apos;s Collection
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-white/80 text-sm tracking-[3px] uppercase"
              >
                {menProducts.length} Products
              </motion.p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12">
          {/* Categories */}
          {/* <div className="flex items-center gap-3 overflow-x-auto pb-4">
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() =>
                  setSelectedSubcategory(sub)
                }
                className={`px-5 py-2 text-[12px] tracking-[2px] uppercase whitespace-nowrap transition-all duration-300 border ${
                  selectedSubcategory === sub
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-black/10 hover:border-black'
                }`}
              >
                {sub}
              </button>
            ))}
          </div> */}

          {/* Toolbar */}
          <div className="flex items-center justify-between py-6 border-b border-black/10">
            <p className="text-sm text-[#6B6257]">
              Showing {filteredProducts.length}{' '}
              products
            </p>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
                className="text-sm border border-black/10 rounded-none px-4 py-2 bg-white focus:outline-none"
              >
                <option value="featured">
                  Featured
                </option>

                <option value="newest">
                  Newest
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>

                <option value="rating">
                  Top Rated
                </option>
              </select>

              {/* Grid Toggle */}
              <div className="hidden sm:flex items-center gap-1 border border-black/10 p-1">
                <button
                  onClick={() =>
                    setGridView('grid')
                  }
                  className={`p-2 ${
                    gridView === 'grid'
                      ? 'bg-black text-white'
                      : 'text-black'
                  }`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>

                <button
                  onClick={() =>
                    setGridView('large')
                  }
                  className={`p-2 ${
                    gridView === 'large'
                      ? 'bg-black text-white'
                      : 'text-black'
                  }`}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="mt-10">
            <motion.div
              layout
              className={`grid gap-6 ${
                gridView === 'grid'
                  ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                  : 'grid-cols-1 sm:grid-cols-2'
              }`}
            >
              {filteredProducts.map(
                (product, index) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <ProductCard
                      product={product}
                    />
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}