'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Filter, Grid3X3, LayoutGrid, SlidersHorizontal, X } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'
import { ProductCard } from '@/components/shared/product-card'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { products, formatPrice } from '@/lib/data/products'

const subcategories = ['All', 'Sarees', 'Kurta Sets', 'Dresses', 'Tops', 'Ethnic Wear', 'Western Wear']
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
const colors = [
  { name: 'Black', hex: '#1a1a1a' },
  { name: 'White', hex: '#ffffff' },
  { name: 'Red', hex: '#ef4444' },
  { name: 'Blue', hex: '#3b82f6' },
  { name: 'Green', hex: '#22c55e' },
  { name: 'Gold', hex: '#C9A050' },
]

export default function WomenPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('All')
  const [gridView, setGridView] = useState<'grid' | 'large'>('grid')
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('featured')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const womenProducts = products.filter(p => p.category === 'women')

  const filteredProducts = useMemo(() => {
    let filtered = [...womenProducts]
    
    // Filter by price
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    
    // Filter by size
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(p => p.sizes.some(s => selectedSizes.includes(s)))
    }
    
    // Sort
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
        filtered = filtered.filter(p => p.isNew).concat(filtered.filter(p => !p.isNew))
        break
    }
    
    return filtered
  }, [womenProducts, priceRange, selectedSizes, sortBy])

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    )
  }

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    )
  }

  const clearFilters = () => {
    setPriceRange([0, 5000])
    setSelectedSizes([])
    setSelectedColors([])
    setSortBy('featured')
  }

  const hasActiveFilters = selectedSizes.length > 0 || selectedColors.length > 0 || priceRange[0] > 0 || priceRange[1] < 5000

  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Banner */}
        <div className="relative h-64 bg-charcoal overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=600&fit=crop)' }}
          />
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-4xl md:text-5xl text-white mb-3"
              >
                Women&apos;s Collection
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-cream/80"
              >
                {womenProducts.length} Products
              </motion.p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          {/* Subcategory Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubcategory(sub)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedSubcategory === sub
                    ? 'bg-gold text-white'
                    : 'bg-white text-charcoal hover:bg-gold/10'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between py-4 border-b border-border">
            <div className="flex items-center gap-4">
              {/* Mobile Filter Button */}
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="lg:hidden gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                    {hasActiveFilters && (
                      <span className="h-5 w-5 rounded-full bg-gold text-white text-xs flex items-center justify-center">
                        !
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] bg-cream">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <FilterSidebar
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    selectedSizes={selectedSizes}
                    toggleSize={toggleSize}
                    selectedColors={selectedColors}
                    toggleColor={toggleColor}
                    clearFilters={clearFilters}
                    hasActiveFilters={hasActiveFilters}
                  />
                </SheetContent>
              </Sheet>

              <p className="text-sm text-warm-gray hidden sm:block">
                Showing {filteredProducts.length} products
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>

              {/* Grid Toggle */}
              <div className="hidden sm:flex items-center gap-1 border border-border rounded-md p-1">
                <button
                  onClick={() => setGridView('grid')}
                  className={`p-1.5 rounded ${gridView === 'grid' ? 'bg-gold text-white' : 'text-warm-gray hover:text-charcoal'}`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setGridView('large')}
                  className={`p-1.5 rounded ${gridView === 'large' ? 'bg-gold text-white' : 'text-warm-gray hover:text-charcoal'}`}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex gap-8 mt-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <FilterSidebar
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedSizes={selectedSizes}
                toggleSize={toggleSize}
                selectedColors={selectedColors}
                toggleColor={toggleColor}
                clearFilters={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-warm-gray mb-4">No products found matching your filters.</p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <motion.div 
                  layout
                  className={`grid gap-6 ${
                    gridView === 'grid' 
                      ? 'grid-cols-2 md:grid-cols-3' 
                      : 'grid-cols-1 sm:grid-cols-2'
                  }`}
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function FilterSidebar({
  priceRange,
  setPriceRange,
  selectedSizes,
  toggleSize,
  selectedColors,
  toggleColor,
  clearFilters,
  hasActiveFilters,
}: {
  priceRange: number[]
  setPriceRange: (range: number[]) => void
  selectedSizes: string[]
  toggleSize: (size: string) => void
  selectedColors: string[]
  toggleColor: (color: string) => void
  clearFilters: () => void
  hasActiveFilters: boolean
}) {
  return (
    <div className="space-y-6">
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="flex items-center gap-2 text-sm text-gold hover:underline"
        >
          <X className="h-4 w-4" />
          Clear all filters
        </button>
      )}

      {/* Price Range */}
      <div>
        <h3 className="font-medium text-charcoal mb-4">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={5000}
          step={100}
          className="mb-2"
        />
        <div className="flex items-center justify-between text-sm text-warm-gray">
          <span>{formatPrice(priceRange[0])}</span>
          <span>{formatPrice(priceRange[1])}</span>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="font-medium text-charcoal mb-4">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`px-3 py-1.5 text-sm border rounded-md transition-colors ${
                selectedSizes.includes(size)
                  ? 'bg-gold text-white border-gold'
                  : 'border-border text-charcoal hover:border-gold'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="font-medium text-charcoal mb-4">Color</h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => toggleColor(color.name)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                selectedColors.includes(color.name)
                  ? 'ring-2 ring-gold ring-offset-2'
                  : 'hover:scale-110'
              }`}
              style={{ backgroundColor: color.hex, borderColor: color.hex === '#ffffff' ? '#e5e5e5' : color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-medium text-charcoal mb-4">Availability</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox />
            <span className="text-sm text-warm-gray">In Stock</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox />
            <span className="text-sm text-warm-gray">On Sale</span>
          </label>
        </div>
      </div>
    </div>
  )
}
