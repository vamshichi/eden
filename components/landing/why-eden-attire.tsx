'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Gem, Sparkles, Truck, ShieldCheck, RefreshCw } from 'lucide-react'
import { features } from '@/lib/data/products'

const iconMap: Record<string, React.ElementType> = {
  gem: Gem,
  sparkles: Sparkles,
  truck: Truck,
  'shield-check': ShieldCheck,
  'refresh-cw': RefreshCw,
}

export function WhyEdenAttire() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal mt-2 text-balance">
            The Eden Attire Promise
          </h2>
          <p className="mt-4 text-warm-gray max-w-xl mx-auto">
            We are committed to delivering excellence in every thread
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Gem
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="group text-center p-6 rounded-xl bg-cream hover:bg-gold/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
