'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'

export function FounderMessage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full bg-gold/10">
              <Quote className="h-8 w-8 text-gold" />
            </div>
          </div>

          {/* Quote */}
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-cream leading-relaxed mb-10 text-balance">
            &ldquo;At Eden Attire, we believe that fashion is not just about clothing - it&apos;s about confidence, expression, and the joy of looking your best. Every piece we curate is chosen with love and care, because you deserve nothing less than elegance.&rdquo;
          </blockquote>

          {/* Signature */}
          <div className="space-y-2">
            <p 
              className="text-4xl text-gold"
              style={{ fontFamily: 'var(--font-great-vibes), cursive' }}
            >
              Sowmya
            </p>
            <p className="font-serif text-cream/80 text-sm tracking-widest uppercase">
              Founder & CEO
            </p>
          </div>

          {/* Decorative Line */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
