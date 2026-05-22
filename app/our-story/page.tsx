'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'

const timeline = [
  { year: '2020', title: 'The Beginning', desc: 'Eden Attire was founded with a small collection of 50 handpicked pieces and a dream to make luxury fashion accessible.' },
  { year: '2021', title: 'Growing Community', desc: 'Reached 10,000 happy customers and expanded our collection to include men\'s ethnic wear.' },
  { year: '2022', title: 'Pan India Presence', desc: 'Launched nationwide shipping and introduced our signature packaging that customers love.' },
  { year: '2023', title: 'Award Recognition', desc: 'Won "Best Emerging Fashion Brand" award and crossed 50,000 customers milestone.' },
  { year: '2024', title: 'Innovation Continues', desc: 'Introduced virtual try-on feature and sustainable packaging initiative.' },
]

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Our Journey</span>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mt-2 mb-6">The Eden Attire Story</h1>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">Every great brand starts with a story. Ours began with a passion for beautiful clothes and a mission to share that beauty with the world.</p>
          </motion.div>

          {/* Founder Section */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop" alt="Founder" fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">From Dream to Reality</h2>
                <p className="text-warm-gray leading-relaxed mb-4">&quot;I grew up surrounded by beautiful fabrics and intricate embroidery. My grandmother was a tailor, and I spent countless hours watching her transform simple cloth into works of art. That childhood wonder never left me.&quot;</p>
                <p className="text-warm-gray leading-relaxed mb-4">&quot;When I started Eden Attire, I wanted to create a space where people could find that same magic - clothes that make you feel special, that tell a story, that become a part of your own narrative.&quot;</p>
                <p className="font-signature text-2xl text-gold mt-6">Priya Sharma</p>
                <p className="text-sm text-warm-gray">Founder & CEO</p>
              </div>
            </div>
          </motion.section>

          {/* Timeline */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-2xl text-charcoal text-center mb-12">Our Milestones</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold/30" />
              {timeline.map((item, index) => (
                <motion.div key={item.year} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <span className="text-gold font-semibold">{item.year}</span>
                      <h3 className="font-serif text-lg text-charcoal mt-1 mb-2">{item.title}</h3>
                      <p className="text-warm-gray text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-cream" />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Vision */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 text-center p-12 bg-charcoal rounded-lg">
            <h2 className="font-serif text-2xl text-white mb-4">Looking Ahead</h2>
            <p className="text-cream/80 max-w-2xl mx-auto">Our journey has only just begun. We envision a future where Eden Attire becomes synonymous with accessible luxury, sustainable fashion, and timeless elegance. Join us as we write the next chapter.</p>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
