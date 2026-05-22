'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronDown } from 'lucide-react'
import { navItems } from '@/lib/data/products'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
      }}
      transition={{ duration: 0.3 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-shadow duration-300',
        isScrolled && 'shadow-sm'
      )}
    >
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
  className={cn(
    'flex items-center justify-between transition-all duration-300',
    isScrolled ? 'h-16' : 'h-24'
  )}
>
          {/* Left Section - Mobile Menu & Desktop Nav */}
          <div className="flex items-center gap-6">
            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="lg:hidden p-2 -ml-2 text-charcoal hover:text-gold transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-cream p-0">
                <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
              </SheetContent>
            </Sheet>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.slice(0, 3).map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  isScrolled={isScrolled}
                  onHover={() => setActiveDropdown(item.name)}
                  onLeave={() => setActiveDropdown(null)}
                  isActive={activeDropdown === item.name}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Center - Logo */}
          {/* Center - Logo */}
<Link
  href="/"
  className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50"
>
  <motion.div
    animate={{
      scale: isScrolled ? 0.8 : 1,
    }}
    transition={{ duration: 0.3 }}
    className="relative"
  >
    <Image
      src="/logo.png"
      alt="Eden Attire"
      width={isScrolled ? 90 : 90}
      height={isScrolled ? 50 : 50}
      className="object-contain"
      priority
    />
  </motion.div>
</Link>

          {/* Right Section - Nav & Icons */}
          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.slice(3).map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  isScrolled={isScrolled}
                  onHover={() => setActiveDropdown(item.name)}
                  onLeave={() => setActiveDropdown(null)}
                  isActive={activeDropdown === item.name}
                  isSale={item.name === 'Sale'}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-1 sm:gap-3">
              <IconButton icon={Search} label="Search" isScrolled={isScrolled} />
              <IconButton icon={Heart} label="Wishlist" isScrolled={isScrolled} className="hidden sm:flex" href="/wishlist" />
              <IconButton icon={ShoppingBag} label="Cart" isScrolled={isScrolled} badge={2} href="/cart" />
              <IconButton icon={User} label="Account" isScrolled={isScrolled} className="hidden sm:flex" href="/account" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeDropdown && ['Women', 'Men', 'Accessories'].includes(activeDropdown) && (
          <MegaMenu
            category={activeDropdown}
            onClose={() => setActiveDropdown(null)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function NavLink({
  href,
  children,
  isScrolled,
  onHover,
  onLeave,
  isActive,
  isSale = false,
}: {
  href: string
  children: React.ReactNode
  isScrolled: boolean
  onHover: () => void
  onLeave: () => void
  isActive: boolean
  isSale?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        'relative text-sm font-medium tracking-wide uppercase transition-colors duration-200 py-2',
        isSale ? 'text-red-600 hover:text-red-700' : 'text-charcoal hover:text-gold'
      )}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <span className="flex items-center gap-1">
        {children}
        {['Women', 'Men', 'Accessories'].includes(children as string) && (
          <ChevronDown className={cn(
            'h-3.5 w-3.5 transition-transform duration-200',
            isActive && 'rotate-180'
          )} />
        )}
      </span>
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-gold"
        initial={{ width: 0 }}
        animate={{ width: isActive ? '100%' : 0 }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  )
}

function IconButton({
  icon: Icon,
  label,
  isScrolled,
  badge,
  className,
  href,
}: {
  icon: React.ElementType
  label: string
  isScrolled: boolean
  badge?: number
  className?: string
  href?: string
}) {
  const buttonContent = (
    <>
      <Icon className="h-5 w-5" />
      {badge && badge > 0 && (
        <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-gold text-white text-xs flex items-center justify-center font-medium">
          {badge}
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          'relative p-2 rounded-full transition-colors duration-200',
          'text-charcoal hover:text-gold hover:bg-gold/10',
          className
        )}
        aria-label={label}
      >
        {buttonContent}
      </Link>
    )
  }

  return (
    <button
      className={cn(
        'relative p-2 rounded-full transition-colors duration-200',
        'text-charcoal hover:text-gold hover:bg-gold/10',
        className
      )}
      aria-label={label}
    >
      {buttonContent}
    </button>
  )
}

function MegaMenu({
  category,
  onClose,
}: {
  category: string
  onClose: () => void
}) {
  const menuContent = {
    Women: {
      categories: ['Sarees', 'Kurta Sets', 'Dresses', 'Tops', 'Ethnic Wear', 'Western Wear'],
      featured: 'New Silk Collection',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276aba4f?w=400&h=500&fit=crop',
    },
    Men: {
      categories: ['Kurtas', 'Shirts', 'Blazers', 'Ethnic Wear', 'Casual Wear', 'Formal Wear'],
      featured: 'Wedding Collection',
      image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=400&h=500&fit=crop',
    },
    Accessories: {
      categories: ['Bags', 'Jewelry', 'Scarves', 'Watches', 'Belts', 'Sunglasses'],
      featured: 'Statement Pieces',
      image: 'https://images.unsplash.com/photo-1611923134239-b9be5816e23e?w=400&h=500&fit=crop',
    },
  }

  const content = menuContent[category as keyof typeof menuContent]

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 right-0 bg-white shadow-lg border-t border-border"
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Categories */}
          <div className="col-span-4">
            <h3 className="font-serif text-lg text-charcoal mb-4">Shop {category}</h3>
            <ul className="space-y-2">
              {content.categories.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${category.toLowerCase()}/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-warm-gray hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={`/${category.toLowerCase()}`}
              className="inline-flex items-center mt-4 text-gold font-medium hover:underline"
            >
              View All {category}
            </Link>
          </div>

          {/* Featured */}
          <div className="col-span-4">
            <h3 className="font-serif text-lg text-charcoal mb-4">Featured</h3>
            <div className="space-y-2">
              <Link href="/new-arrivals" className="block text-warm-gray hover:text-gold transition-colors">
                New Arrivals
              </Link>
              <Link href="/trending" className="block text-warm-gray hover:text-gold transition-colors">
                Trending Now
              </Link>
              <Link href="/sale" className="block text-red-600 hover:text-red-700 transition-colors">
                Sale - Up to 50% Off
              </Link>
            </div>
          </div>

          {/* Featured Image */}
          <div className="col-span-4">
            <div className="relative h-48 rounded-lg overflow-hidden group">
              <Image
                src={content.image}
                alt={content.featured}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-serif text-lg">{content.featured}</p>
                <Link
                  href={`/${category.toLowerCase()}`}
                  className="text-gold text-sm font-medium hover:underline"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Image
          src="/images/eden-attire-logo.jpeg"
          alt="Eden Attire"
          width={80}
          height={48}
          className="object-contain"
        />
        <button
          onClick={onClose}
          className="p-2 text-charcoal hover:text-gold transition-colors"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        {navItems.map((item) => (
          <div key={item.name} className="border-b border-border/50">
            <button
              onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
              className={cn(
                'flex items-center justify-between w-full px-4 py-3 text-left',
                item.name === 'Sale' ? 'text-red-600' : 'text-charcoal'
              )}
            >
              <span className="font-medium">{item.name}</span>
              {['Women', 'Men', 'Accessories'].includes(item.name) && (
                <ChevronDown className={cn(
                  'h-4 w-4 transition-transform duration-200',
                  expandedItem === item.name && 'rotate-180'
                )} />
              )}
            </button>
            <AnimatePresence>
              {expandedItem === item.name && ['Women', 'Men', 'Accessories'].includes(item.name) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden bg-cream-dark"
                >
                  <div className="px-4 py-2 space-y-2">
                    <Link
                      href={`/${item.name.toLowerCase()}`}
                      className="block py-2 text-sm text-warm-gray hover:text-gold"
                      onClick={onClose}
                    >
                      View All
                    </Link>
                    <Link
                      href={`/${item.name.toLowerCase()}/new`}
                      className="block py-2 text-sm text-warm-gray hover:text-gold"
                      onClick={onClose}
                    >
                      New Arrivals
                    </Link>
                    <Link
                      href={`/${item.name.toLowerCase()}/trending`}
                      className="block py-2 text-sm text-warm-gray hover:text-gold"
                      onClick={onClose}
                    >
                      Trending
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="border-t border-border p-4 space-y-3">
        <Link
          href="/account"
          className="flex items-center gap-3 px-4 py-2 text-charcoal hover:text-gold transition-colors"
          onClick={onClose}
        >
          <User className="h-5 w-5" />
          <span>My Account</span>
        </Link>
        <Link
          href="/wishlist"
          className="flex items-center gap-3 px-4 py-2 text-charcoal hover:text-gold transition-colors"
          onClick={onClose}
        >
          <Heart className="h-5 w-5" />
          <span>Wishlist</span>
        </Link>
      </div>
    </div>
  )
}
