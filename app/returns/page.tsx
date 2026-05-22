'use client'

import { motion } from 'framer-motion'
import { RefreshCw, Package, CheckCircle, XCircle, AlertTriangle } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Returns & Exchange</h1>
            <p className="text-warm-gray">Hassle-free returns within 7 days of delivery</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: RefreshCw, title: '7 Days', desc: 'Return window' },
              { icon: Package, title: 'Free Pickup', desc: 'We collect from you' },
              { icon: CheckCircle, title: 'Quick Refund', desc: '5-7 business days' },
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="p-3 bg-gold/10 rounded-full w-fit mx-auto mb-3"><item.icon className="h-6 w-6 text-gold" /></div>
                <h3 className="font-medium text-charcoal">{item.title}</h3>
                <p className="text-sm text-warm-gray">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="font-serif text-2xl text-charcoal mb-4">Return Policy</h2>
              <p className="text-warm-gray mb-4">We want you to love every purchase. If you&apos;re not completely satisfied, you can return or exchange items within 7 days of delivery.</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="flex items-center gap-2 font-medium text-green-700 mb-3"><CheckCircle className="h-5 w-5" />Eligible for Return</h3>
                  <ul className="text-sm text-green-600 space-y-2">
                    <li>Unused items with tags attached</li>
                    <li>Original packaging intact</li>
                    <li>Items in original condition</li>
                    <li>Within 7 days of delivery</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h3 className="flex items-center gap-2 font-medium text-red-700 mb-3"><XCircle className="h-5 w-5" />Not Eligible</h3>
                  <ul className="text-sm text-red-600 space-y-2">
                    <li>Worn, washed, or altered items</li>
                    <li>Items without original tags</li>
                    <li>Intimate wear and swimwear</li>
                    <li>Sale items (final sale)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-charcoal mb-4">How to Return</h2>
              <ol className="space-y-4">
                {[
                  { step: 1, title: 'Initiate Return', desc: 'Log in to your account and go to "My Orders". Select the item you want to return.' },
                  { step: 2, title: 'Select Reason', desc: 'Choose the reason for return and provide any additional details if needed.' },
                  { step: 3, title: 'Schedule Pickup', desc: 'Our delivery partner will pick up the item from your address within 48 hours.' },
                  { step: 4, title: 'Quality Check', desc: 'Once we receive the item, it will be inspected within 2-3 business days.' },
                  { step: 5, title: 'Refund Processed', desc: 'Refund will be credited to your original payment method within 5-7 business days.' },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-medium">{item.step}</span>
                    <div><h3 className="font-medium text-charcoal">{item.title}</h3><p className="text-sm text-warm-gray">{item.desc}</p></div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-charcoal mb-4">Exchange Policy</h2>
              <p className="text-warm-gray">Want a different size or color? You can exchange your item for a different variant:</p>
              <ul className="list-disc list-inside text-warm-gray space-y-2 mt-3">
                <li>Exchanges are subject to availability</li>
                <li>Price difference (if any) will be adjusted</li>
                <li>Same return conditions apply</li>
              </ul>
            </section>

            <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div><p className="font-medium text-yellow-800">Special Note</p><p className="text-sm text-yellow-700">Products purchased during promotional sales may have modified return policies. Please check the specific terms during checkout.</p></div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
