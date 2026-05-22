'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'

const blogPosts = [
  { id: 1, title: '10 Ways to Style a Silk Saree for Every Occasion', excerpt: 'From traditional draping to modern fusion looks, discover how to make the most of your silk saree collection.', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=400&fit=crop', category: 'Style Guide', author: 'Priya S.', date: 'Jan 15, 2024' },
  { id: 2, title: 'The Art of Mixing Traditional and Western Wear', excerpt: 'Learn how to create stunning fusion outfits that celebrate both worlds of fashion.', image: 'https://images.unsplash.com/photo-1583391733956-6c78276aba4f?w=600&h=400&fit=crop', category: 'Fashion Tips', author: 'Ananya P.', date: 'Jan 10, 2024' },
  { id: 3, title: 'Sustainable Fashion: Our Commitment to the Planet', excerpt: 'Discover how Eden Attire is working towards a more sustainable and ethical fashion industry.', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=400&fit=crop', category: 'Behind the Scenes', author: 'Rahul V.', date: 'Jan 5, 2024' },
  { id: 4, title: 'Wedding Season: A Complete Guide to Guest Attire', excerpt: 'Navigate wedding dress codes with confidence using our comprehensive guide.', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=400&fit=crop', category: 'Style Guide', author: 'Priya S.', date: 'Dec 28, 2023' },
  { id: 5, title: 'Fabric Care 101: Making Your Clothes Last', excerpt: 'Expert tips on washing, storing, and maintaining your favorite garments.', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop', category: 'Care Tips', author: 'Meera K.', date: 'Dec 20, 2023' },
  { id: 6, title: 'Color Theory: How to Build a Cohesive Wardrobe', excerpt: 'Understanding color combinations that work together for a versatile closet.', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop', category: 'Fashion Tips', author: 'Ananya P.', date: 'Dec 15, 2023' },
]

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">The Eden Journal</h1>
            <p className="text-warm-gray">Fashion tips, style guides, and stories from behind the scenes</p>
          </motion.div>

          {/* Featured Post */}
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-16">
            <Link href={`/blog/${featuredPost.id}`} className="grid md:grid-cols-2 gap-8 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64 md:h-auto"><Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover" /></div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-gold text-sm font-medium">{featuredPost.category}</span>
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal mt-2 mb-4 hover:text-gold transition-colors">{featuredPost.title}</h2>
                <p className="text-warm-gray mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-warm-gray">
                  <span className="flex items-center gap-1"><User className="h-4 w-4" />{featuredPost.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{featuredPost.date}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-gold font-medium mt-4">Read More<ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>
          </motion.article>

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => (
              <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                <Link href={`/blog/${post.id}`} className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="relative h-48"><Image src={post.image} alt={post.title} fill className="object-cover" /></div>
                  <div className="p-6">
                    <span className="text-gold text-sm font-medium">{post.category}</span>
                    <h3 className="font-serif text-lg text-charcoal mt-1 mb-2 hover:text-gold transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-warm-gray text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-warm-gray">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
