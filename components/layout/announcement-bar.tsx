'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-charcoal text-cream overflow-hidden relative"
        >
          <div className="flex items-center justify-center py-2.5 px-4">
            <div className="overflow-hidden flex-1">
              <motion.div
                animate={{ x: ['100%', '-100%'] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="whitespace-nowrap text-sm tracking-wide"
              >
                <span className="mx-8">Free Shipping on Orders Over Rs. 999</span>
                <span className="mx-8 text-gold">|</span>
                <span className="mx-8">New Collection Just Arrived</span>
                <span className="mx-8 text-gold">|</span>
                <span className="mx-8">Easy Returns within 7 Days</span>
                <span className="mx-8 text-gold">|</span>
                <span className="mx-8">Free Shipping on Orders Over Rs. 999</span>
                <span className="mx-8 text-gold">|</span>
                <span className="mx-8">New Collection Just Arrived</span>
              </motion.div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close announcement"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
