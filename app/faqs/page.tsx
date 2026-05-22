'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'
import { Input } from '@/components/ui/input'

const faqs = [
  { category: 'Orders', questions: [
    { q: 'How can I track my order?', a: 'Once your order is shipped, you will receive a tracking link via email and SMS. You can also track your order from the "My Orders" section in your account.' },
    { q: 'Can I modify or cancel my order?', a: 'Orders can be modified or cancelled within 2 hours of placement. Please contact our support team immediately if you need to make changes.' },
    { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards, UPI, net banking, and popular wallets like Paytm and PhonePe. Cash on Delivery is available for select locations.' },
  ]},
  { category: 'Shipping', questions: [
    { q: 'What are the shipping charges?', a: 'Shipping is FREE on all orders above Rs. 999. For orders below Rs. 999, a flat shipping fee of Rs. 99 applies.' },
    { q: 'How long does delivery take?', a: 'Standard delivery takes 5-7 business days. Express delivery (available in select cities) takes 2-3 business days.' },
    { q: 'Do you ship internationally?', a: 'Currently, we ship only within India. International shipping will be available soon.' },
  ]},
  { category: 'Returns', questions: [
    { q: 'What is your return policy?', a: 'We offer a 7-day hassle-free return policy. Items must be unused, unwashed, and in original packaging with all tags attached.' },
    { q: 'How do I initiate a return?', a: 'Log in to your account, go to "My Orders", select the order, and click "Return Item". Our team will arrange a pickup within 48 hours.' },
    { q: 'When will I receive my refund?', a: 'Refunds are processed within 5-7 business days after we receive and inspect the returned item. The amount will be credited to your original payment method.' },
  ]},
  { category: 'Products', questions: [
    { q: 'How do I find the right size?', a: 'Check our detailed Size Guide available on each product page. You can also contact our support team for personalized size recommendations.' },
    { q: 'Are the colors accurate?', a: 'We strive to display colors as accurately as possible. However, slight variations may occur due to screen settings and lighting conditions.' },
    { q: 'How do I care for my garments?', a: 'Care instructions are provided on the product label and description. Generally, we recommend gentle machine wash or hand wash in cold water.' },
  ]},
]

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Frequently Asked Questions</h1>
            <p className="text-warm-gray mb-8">Find answers to common questions about orders, shipping, returns, and more.</p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-warm-gray" />
              <Input placeholder="Search questions..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
            </div>
          </motion.div>

          <div className="space-y-8">
            {filteredFaqs.map((category, catIndex) => (
              <motion.div key={category.category} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: catIndex * 0.1 }}>
                <h2 className="font-serif text-xl text-charcoal mb-4">{category.category}</h2>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {category.questions.map((item, index) => {
                    const id = `${category.category}-${index}`
                    const isOpen = openItems.includes(id)
                    return (
                      <div key={id} className="border-b border-border last:border-0">
                        <button onClick={() => toggleItem(id)} className="w-full flex items-center justify-between p-4 text-left hover:bg-cream-dark transition-colors">
                          <span className="font-medium text-charcoal pr-4">{item.q}</span>
                          <ChevronDown className={`h-5 w-5 text-warm-gray flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                              <p className="px-4 pb-4 text-warm-gray">{item.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <p className="text-center text-warm-gray py-12">No results found for &quot;{searchQuery}&quot;. Try a different search term.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
