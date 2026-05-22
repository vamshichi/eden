'use client'

import { motion } from 'framer-motion'
import { Truck, Clock, MapPin, Package, AlertCircle } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Shipping Information</h1>
            <p className="text-warm-gray">Everything you need to know about our delivery services</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'On orders above Rs. 999' },
              { icon: Clock, title: '5-7 Days', desc: 'Standard delivery time' },
              { icon: MapPin, title: 'Pan India', desc: 'We deliver across India' },
              { icon: Package, title: 'Safe Packaging', desc: 'Carefully packed items' },
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="p-3 bg-gold/10 rounded-full"><item.icon className="h-6 w-6 text-gold" /></div>
                <div><h3 className="font-medium text-charcoal">{item.title}</h3><p className="text-sm text-warm-gray">{item.desc}</p></div>
              </motion.div>
            ))}
          </div>

          <div className="prose prose-gray max-w-none">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-lg shadow-sm p-8 space-y-8">
              <section>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Delivery Times</h2>
                <table className="w-full">
                  <thead><tr className="border-b border-border"><th className="text-left py-3 text-charcoal">Shipping Method</th><th className="text-left py-3 text-charcoal">Delivery Time</th><th className="text-left py-3 text-charcoal">Cost</th></tr></thead>
                  <tbody className="text-warm-gray">
                    <tr className="border-b border-border"><td className="py-3">Standard Shipping</td><td className="py-3">5-7 business days</td><td className="py-3">Rs. 99 (Free above Rs. 999)</td></tr>
                    <tr className="border-b border-border"><td className="py-3">Express Shipping</td><td className="py-3">2-3 business days</td><td className="py-3">Rs. 199</td></tr>
                    <tr><td className="py-3">Same Day Delivery*</td><td className="py-3">Within 24 hours</td><td className="py-3">Rs. 299</td></tr>
                  </tbody>
                </table>
                <p className="text-sm text-warm-gray mt-3">*Same day delivery available in select metro cities for orders placed before 12 PM.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Shipping Zones</h2>
                <p className="text-warm-gray">We currently deliver to all major cities and towns across India. Delivery times may vary based on your location:</p>
                <ul className="list-disc list-inside text-warm-gray space-y-2 mt-3">
                  <li><strong>Metro Cities:</strong> Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad - 3-5 days</li>
                  <li><strong>Tier 2 Cities:</strong> Pune, Ahmedabad, Jaipur, Lucknow, etc. - 5-7 days</li>
                  <li><strong>Other Areas:</strong> 7-10 days depending on accessibility</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Order Tracking</h2>
                <p className="text-warm-gray">Once your order is shipped, you will receive:</p>
                <ul className="list-disc list-inside text-warm-gray space-y-2 mt-3">
                  <li>Email notification with tracking number</li>
                  <li>SMS updates on delivery status</li>
                  <li>Real-time tracking through our website</li>
                </ul>
              </section>

              <div className="flex items-start gap-4 p-4 bg-gold/10 rounded-lg">
                <AlertCircle className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                <div><p className="font-medium text-charcoal">Important Note</p><p className="text-sm text-warm-gray">Delivery times may be affected during festive seasons, sales, or unforeseen circumstances. We&apos;ll keep you updated via email and SMS.</p></div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
