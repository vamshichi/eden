'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Gem, Users, Award } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="relative h-96 bg-charcoal overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop)' }} />
          <div className="relative h-full flex items-center justify-center text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">About Eden Attire</h1>
              <p className="text-xl text-cream/80 font-signature">Elegance Delivered Online</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Story */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-gold font-medium text-sm uppercase tracking-wider">Our Story</span>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-2 mb-6">Curating Elegance Since 2020</h2>
                <p className="text-warm-gray leading-relaxed mb-4">Eden Attire was born from a passion for timeless fashion and a vision to make premium clothing accessible to everyone. What started as a small boutique has grown into a beloved brand trusted by thousands of customers across India.</p>
                <p className="text-warm-gray leading-relaxed">We believe that every person deserves to feel confident and elegant. Our carefully curated collection blends traditional craftsmanship with contemporary design, creating pieces that transcend seasons and trends.</p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" alt="Our Story" fill className="object-cover" />
              </div>
            </div>
          </motion.section>

          {/* Values */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-20 border-t border-border">
            <div className="text-center mb-12">
              <span className="text-gold font-medium text-sm uppercase tracking-wider">What We Stand For</span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-2">Our Values</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Gem, title: 'Quality First', desc: 'We never compromise on the quality of fabrics and craftsmanship.' },
                { icon: Heart, title: 'Customer Love', desc: 'Your satisfaction is at the heart of everything we do.' },
                { icon: Users, title: 'Inclusivity', desc: 'Fashion for everyone, regardless of size, age, or style.' },
                { icon: Award, title: 'Authenticity', desc: 'Genuine products with transparent sourcing and pricing.' },
              ].map((value, index) => (
                <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center p-6">
                  <div className="p-4 bg-gold/10 rounded-full w-fit mx-auto mb-4"><value.icon className="h-8 w-8 text-gold" /></div>
                  <h3 className="font-serif text-xl text-charcoal mb-2">{value.title}</h3>
                  <p className="text-warm-gray text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Stats */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-20 bg-charcoal -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '50K+', label: 'Happy Customers' },
                { number: '500+', label: 'Products' },
                { number: '100+', label: 'Cities Served' },
                { number: '4.8', label: 'Average Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-4xl md:text-5xl text-gold mb-2">{stat.number}</p>
                  <p className="text-cream/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Team */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-20">
            <div className="text-center mb-12">
              <span className="text-gold font-medium text-sm uppercase tracking-wider">The People Behind Eden</span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-2">Meet Our Team</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { name: 'Priya Sharma', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
                { name: 'Rahul Verma', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
                { name: 'Ananya Patel', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden"><Image src={member.image} alt={member.name} fill className="object-cover" /></div>
                  <h3 className="font-serif text-lg text-charcoal">{member.name}</h3>
                  <p className="text-warm-gray text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
