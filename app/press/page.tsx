'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'
import { Button } from '@/components/ui/button'

const pressReleases = [
  { date: 'Jan 2024', title: 'Eden Attire Launches Sustainable Fashion Initiative', desc: 'New eco-friendly packaging and sustainable sourcing practices.' },
  { date: 'Dec 2023', title: 'Eden Attire Wins Best Emerging Fashion Brand Award', desc: 'Recognition for excellence in online fashion retail.' },
  { date: 'Oct 2023', title: 'Eden Attire Expands to 100+ Cities', desc: 'Pan-India delivery network reaches new milestone.' },
  { date: 'Aug 2023', title: 'Launch of Men\'s Ethnic Wear Collection', desc: 'Expanding product range to serve all fashion needs.' },
]

const mediaFeatures = [
  { name: 'Vogue India', logo: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=200&h=100&fit=crop', quote: '"Eden Attire is redefining accessible luxury in Indian fashion."' },
  { name: 'Fashion Forward', logo: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=200&h=100&fit=crop', quote: '"A fresh voice in the ethnic wear market."' },
  { name: 'Style Today', logo: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=200&h=100&fit=crop', quote: '"The online boutique experience done right."' },
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Press & Media</h1>
            <p className="text-warm-gray max-w-2xl mx-auto">Stay updated with the latest news, press releases, and media coverage about Eden Attire.</p>
          </motion.div>

          {/* Media Kit */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 p-8 bg-charcoal rounded-lg text-center">
            <h2 className="font-serif text-2xl text-white mb-4">Media Kit</h2>
            <p className="text-cream/70 mb-6">Download our media kit for logos, brand guidelines, and high-resolution images.</p>
            <Button className="bg-gold hover:bg-gold-dark gap-2"><Download className="h-4 w-4" />Download Media Kit</Button>
          </motion.section>

          {/* Press Releases */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="font-serif text-2xl text-charcoal mb-8">Press Releases</h2>
            <div className="space-y-4">
              {pressReleases.map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex flex-col sm:flex-row gap-4 p-6 bg-white rounded-lg shadow-sm">
                  <span className="text-gold font-medium text-sm whitespace-nowrap">{item.date}</span>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">{item.title}</h3>
                    <p className="text-warm-gray text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Media Features */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="font-serif text-2xl text-charcoal mb-8">Featured In</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {mediaFeatures.map((item) => (
                <div key={item.name} className="p-6 bg-white rounded-lg shadow-sm text-center">
                  <div className="h-12 flex items-center justify-center mb-4">
                    <p className="font-serif text-xl text-charcoal">{item.name}</p>
                  </div>
                  <p className="text-warm-gray text-sm italic">{item.quote}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Press Contact */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-8 bg-gold/10 rounded-lg">
            <h2 className="font-serif text-2xl text-charcoal mb-4">Press Inquiries</h2>
            <p className="text-warm-gray mb-6">For press inquiries, interview requests, or collaboration opportunities, please contact our PR team.</p>
            <Link href="mailto:press@edenattire.com"><Button className="bg-gold hover:bg-gold-dark gap-2"><Mail className="h-4 w-4" />press@edenattire.com</Button></Link>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
