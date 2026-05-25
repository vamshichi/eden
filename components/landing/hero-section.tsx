'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80])

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <Image
          src="/hero-bg.png"
          alt="Fashion Hero"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-white/5" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 h-full flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-[620px] pt-10">
            
            {/* Heading */}
            <div className="space-y-1">
              <h1 className="font-serif text-[52px] sm:text-[68px] md:text-[62px] leading-[0.92] tracking-[-3px] text-[#2C241E]">
                <span className="block">
                  Elegance Delivered
                </span>

                <span className="block text-[#C89B4D] pt-3">
                  Online
                </span>
              </h1>

              {/* Line */}
              <div className="w-28 h-[1px] bg-[#C89B4D] mt-6" />
            </div>

            {/* Description */}
            <p className="mt-8 max-w-[500px] text-[15px] sm:text-[17px] leading-[1.9] text-[#5E564F]">
              Discover curated collections of premium fashion,
              crafted with passion and delivered with care.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                className="h-[54px] px-10 rounded-none bg-[#C89B4D] hover:bg-[#b78a3f] text-white text-[13px] tracking-[2px] uppercase shadow-none"
              >
                <Link href="/women">
                  Shop Women
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-[54px] px-10 rounded-none border border-[#2C241E] bg-transparent hover:bg-[#2C241E] hover:text-white text-[#2C241E] text-[13px] tracking-[2px] uppercase"
              >
                <Link href="/men">
                  Shop Men
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-[54px] px-10 rounded-none border border-[#C89B4D] bg-transparent hover:bg-[#C89B4D] hover:text-white text-[#C89B4D] text-[13px] tracking-[2px] uppercase"
              >
                <Link href="/accessories">
                  Accessories
                </Link>
              </Button>
            </div>

            {/* Features */}
            <div className="mt-12 flex flex-wrap items-center gap-8 sm:gap-12 text-[#7A726B]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C89B4D]" />
                <span className="text-[13px]">
                  Premium Quality
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C89B4D]" />
                <span className="text-[13px]">
                  Free Shipping
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C89B4D]" />
                <span className="text-[13px]">
                  Easy Returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="flex flex-col items-center text-[#5E564F]"
        >
          <span className="text-[10px] tracking-[4px] uppercase">
            Scroll
          </span>

          <ChevronDown className="w-4 h-4 mt-1" />
        </motion.div>
      </motion.div>
    </section>
  )
}