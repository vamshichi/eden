'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Grid3X3, LayoutGrid, SlidersHorizontal, X } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'
import { ProductCard } from '@/components/shared/product-card'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { products, formatPrice } from '@/lib/data/products'

const subcategories = ['All', 'Bags', 'Jewelry', 'Scarves', 'Watches', 'Belts', 'Sunglasses']
const colors = [
  { name: 'Black', hex: '#1a1a1a' },
  { name: 'Brown', hex: '#92400e' },
  { name: 'Gold', hex: '#C9A050' },
  { name: 'Silver', hex: '#9ca3af' },
  { name: 'White', hex: '#ffffff' },
]

export default function AccessoriesPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('All')
  const [gridView, setGridView] = useState<'grid' | 'large'>('grid')
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('featured')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const accessoryProducts = products.filter(p => p.category === 'accessories')

  const filteredProducts = useMemo(() => {
    let filtered = [...accessoryProducts]
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    switch (sortBy) {
      case 'price-low': filtered.sort((a, b) => a.price - b.price); break
      case 'price-high': filtered.sort((a, b) => b.price - a.price); break
      case 'rating': filtered.sort((a, b) => b.rating - a.rating); break
      case 'newest': filtered = filtered.filter(p => p.isNew).concat(filtered.filter(p => !p.isNew)); break
    }
    return filtered
  }, [accessoryProducts, priceRange, sortBy])

  const toggleColor = (color: string) => setSelectedColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color])
  const clearFilters = () => { setPriceRange([0, 5000]); setSelectedColors([]); setSortBy('featured') }
  const hasActiveFilters = selectedColors.length > 0 || priceRange[0] > 0 || priceRange[1] < 5000

  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        <div className="relative h-64 bg-charcoal overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1611923134239-b9be5816e23e?w=1920&h=600&fit=crop)' }} />
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-5xl text-white mb-3">Accessories</motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-cream/80">{accessoryProducts.length} Products</motion.p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {subcategories.map((sub) => (
              <button key={sub} onClick={() => setSelectedSubcategory(sub)} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedSubcategory === sub ? 'bg-gold text-white' : 'bg-white text-charcoal hover:bg-gold/10'}`}>{sub}</button>
            ))}
          </div>
          <div className="flex items-center justify-between py-4 border-b border-border">
            <div className="flex items-center gap-4">
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="lg:hidden gap-2">
                    <SlidersHorizontal className="h-4 w-4" />Filters{hasActiveFilters && <span className="h-5 w-5 rounded-full bg-gold text-white text-xs flex items-center justify-center">!</span>}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] bg-cream">
                  <SheetHeader><SheetTitle>Filters</SheetTitle></SheetHeader>
                  <FilterContent priceRange={priceRange} setPriceRange={setPriceRange} selectedColors={selectedColors} toggleColor={toggleColor} clearFilters={clearFilters} hasActiveFilters={hasActiveFilters} colors={colors} />
                </SheetContent>
              </Sheet>
              <p className="text-sm text-warm-gray hidden sm:block">Showing {filteredProducts.length} products</p>
            </div>
            <div className="flex items-center gap-4">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="text-sm border border-border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gold">
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <div className="hidden sm:flex items-center gap-1 border border-border rounded-md p-1">
                <button onClick={() => setGridView('grid')} className={`p-1.5 rounded ${gridView === 'grid' ? 'bg-gold text-white' : 'text-warm-gray hover:text-charcoal'}`}><Grid3X3 className="h-4 w-4" /></button>
                <button onClick={() => setGridView('large')} className={`p-1.5 rounded ${gridView === 'large' ? 'bg-gold text-white' : 'text-warm-gray hover:text-charcoal'}`}><LayoutGrid className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
          <div className="flex gap-8 mt-8">
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <FilterContent priceRange={priceRange} setPriceRange={setPriceRange} selectedColors={selectedColors} toggleColor={toggleColor} clearFilters={clearFilters} hasActiveFilters={hasActiveFilters} colors={colors} />
            </aside>
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20"><p className="text-warm-gray mb-4">No products found matching your filters.</p><Button onClick={clearFilters} variant="outline">Clear Filters</Button></div>
              ) : (
                <motion.div layout className={`grid gap-6 ${gridView === 'grid' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'}`}>
                  {filteredProducts.map((product, index) => (
                    <motion.div key={product.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}><ProductCard product={product} /></motion.div>
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

function FilterContent({ priceRange, setPriceRange, selectedColors, toggleColor, clearFilters, hasActiveFilters, colors }: { priceRange: number[]; setPriceRange: (r: number[]) => void; selectedColors: string[]; toggleColor: (c: string) => void; clearFilters: () => void; hasActiveFilters: boolean; colors: { name: string; hex: string }[] }) {
  return (
    <div className="space-y-6">
      {hasActiveFilters && <button onClick={clearFilters} className="flex items-center gap-2 text-sm text-gold hover:underline"><X className="h-4 w-4" />Clear all filters</button>}
      <div><h3 className="font-medium text-charcoal mb-4">Price Range</h3><Slider value={priceRange} onValueChange={setPriceRange} max={5000} step={100} className="mb-2" /><div className="flex items-center justify-between text-sm text-warm-gray"><span>{formatPrice(priceRange[0])}</span><span>{formatPrice(priceRange[1])}</span></div></div>
      <div><h3 className="font-medium text-charcoal mb-4">Color</h3><div className="flex flex-wrap gap-3">{colors.map((color) => (<button key={color.name} onClick={() => toggleColor(color.name)} className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColors.includes(color.name) ? 'ring-2 ring-gold ring-offset-2' : 'hover:scale-110'}`} style={{ backgroundColor: color.hex, borderColor: color.hex === '#ffffff' ? '#e5e5e5' : color.hex }} title={color.name} />))}</div></div>
      <div><h3 className="font-medium text-charcoal mb-4">Availability</h3><div className="space-y-3"><label className="flex items-center gap-2 cursor-pointer"><Checkbox /><span className="text-sm text-warm-gray">In Stock</span></label><label className="flex items-center gap-2 cursor-pointer"><Checkbox /><span className="text-sm text-warm-gray">On Sale</span></label></div></div>
    </div>
  )
}
