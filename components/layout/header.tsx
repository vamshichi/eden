'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingBag,
  User,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled
          ? 'rgba(255,255,255,0.92)'
          : 'rgba(255,255,255,0)',
        backdropFilter: isScrolled
          ? 'blur(12px)'
          : 'blur(0px)',
      }}
      transition={{ duration: 0.3 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled && 'shadow-sm'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={cn(
            'grid grid-cols-3 items-center transition-all duration-300',
            isScrolled ? 'h-20' : 'h-24'
          )}
        >
          {/* LEFT SIDE */}
          <div className="flex items-center gap-7">
            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet
                open={isMobileMenuOpen}
                onOpenChange={setIsMobileMenuOpen}
              >
                <SheetTrigger asChild>
                  <button className="text-charcoal">
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="left"
                  className="w-[280px] bg-[#F7F1E8] border-none p-0"
                >
                  <MobileMenu
                    onClose={() =>
                      setIsMobileMenuOpen(false)
                    }
                  />
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Left Nav */}
            <div className="hidden lg:flex items-center gap-7">
              <Link
                href="/women"
                className="text-[12px] whitespace-nowrap tracking-[3px] uppercase text-charcoal hover:text-gold transition-colors"
              >
                Women
              </Link>

              <Link
                href="/men"
                className="text-[12px] whitespace-nowrap tracking-[3px] uppercase text-charcoal hover:text-gold transition-colors"
              >
                Men
              </Link>
            </div>
          </div>

          {/* CENTER LOGO */}
          <div className="flex justify-center">
            <Link href="/">
              <motion.div
                animate={{
                  scale: isScrolled ? 0.92 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/logo.png"
                  alt="Eden Attire"
                  width={85}
                  height={45}
                  priority
                  className="object-contain"
                />
              </motion.div>
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-end gap-6">
            {/* Desktop Right Nav */}
            <div className="hidden lg:flex items-center gap-7">
              <Link
                href="/accessories"
                className="text-[12px] whitespace-nowrap tracking-[3px] uppercase text-charcoal hover:text-gold transition-colors"
              >
                Accessories
              </Link>

              <Link
                href="/new-arrivals"
                className="text-[12px] whitespace-nowrap tracking-[3px] uppercase text-charcoal hover:text-gold transition-colors"
              >
                New Arrivals
              </Link>
            </div>

            {/* Icons */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/search"
                className="p-2 rounded-full hover:bg-black/5 transition-colors"
              >
                <Search className="w-5 h-5 text-charcoal" />
              </Link>

              <Link
                href="/wishlist"
                className="p-2 rounded-full hover:bg-black/5 transition-colors"
              >
                <Heart className="w-5 h-5 text-charcoal" />
              </Link>

              <Link
                href="/cart"
                className="relative p-2 rounded-full hover:bg-black/5 transition-colors"
              >
                <ShoppingBag className="w-5 h-5 text-charcoal" />

                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C89B4D] text-white text-[10px] flex items-center justify-center">
                  2
                </span>
              </Link>

              <Link
                href="/account"
                className="p-2 rounded-full hover:bg-black/5 transition-colors"
              >
                <User className="w-5 h-5 text-charcoal" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

function MobileMenu({
  onClose,
}: {
  onClose: () => void
}) {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-black/10">
        <Image
          src="/logo.png"
          alt="Eden Attire"
          width={80}
          height={40}
          className="object-contain"
        />

        <button
          onClick={onClose}
          className="text-charcoal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Links */}
      <div className="flex flex-col px-6 py-8">
        <Link
          href="/women"
          onClick={onClose}
          className="py-4 text-[15px] tracking-[2px] uppercase text-charcoal border-b border-black/5"
        >
          Women
        </Link>

        <Link
          href="/men"
          onClick={onClose}
          className="py-4 text-[15px] tracking-[2px] uppercase text-charcoal border-b border-black/5"
        >
          Men
        </Link>

        <Link
          href="/accessories"
          onClick={onClose}
          className="py-4 text-[15px] tracking-[2px] uppercase text-charcoal border-b border-black/5"
        >
          Accessories
        </Link>

        <Link
          href="/new-arrivals"
          onClick={onClose}
          className="py-4 text-[15px] tracking-[2px] uppercase text-charcoal border-b border-black/5"
        >
          New Arrivals
        </Link>
      </div>

      {/* Mobile Icons */}
      <div className="mt-auto border-t border-black/10 p-6">
        <div className="grid grid-cols-4 gap-4">
          <Link
            href="/search"
            className="flex flex-col items-center gap-2 text-charcoal"
          >
            <Search className="w-5 h-5" />

            <span className="text-[11px] uppercase tracking-[1px]">
              Search
            </span>
          </Link>

          <Link
            href="/wishlist"
            className="flex flex-col items-center gap-2 text-charcoal"
          >
            <Heart className="w-5 h-5" />

            <span className="text-[11px] uppercase tracking-[1px]">
              Wishlist
            </span>
          </Link>

          <Link
            href="/cart"
            className="flex flex-col items-center gap-2 text-charcoal"
          >
            <ShoppingBag className="w-5 h-5" />

            <span className="text-[11px] uppercase tracking-[1px]">
              Cart
            </span>
          </Link>

          <Link
            href="/account"
            className="flex flex-col items-center gap-2 text-charcoal"
          >
            <User className="w-5 h-5" />

            <span className="text-[11px] uppercase tracking-[1px]">
              Account
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}