'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Terms of Service</h1>
            <p className="text-warm-gray">Last updated: January 1, 2024</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="prose prose-gray max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">1. Acceptance of Terms</h2>
                <p className="text-warm-gray">By accessing and using the Eden Attire website (www.edenattire.com), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">2. Use of Website</h2>
                <p className="text-warm-gray">You agree to use this website only for lawful purposes and in a way that does not infringe upon the rights of others. You must not:</p>
                <ul className="list-disc list-inside text-warm-gray space-y-2 mt-3">
                  <li>Use the website for any illegal or unauthorized purpose</li>
                  <li>Attempt to gain unauthorized access to any part of the website</li>
                  <li>Interfere with or disrupt the website or servers</li>
                  <li>Transmit any viruses or malicious code</li>
                  <li>Collect or harvest user information without consent</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">3. Account Registration</h2>
                <p className="text-warm-gray">When creating an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">4. Products and Pricing</h2>
                <p className="text-warm-gray">We strive to display accurate product information and pricing. However, errors may occur. We reserve the right to:</p>
                <ul className="list-disc list-inside text-warm-gray space-y-2 mt-3">
                  <li>Correct any errors in pricing or product descriptions</li>
                  <li>Cancel orders resulting from such errors</li>
                  <li>Limit quantities of products available for purchase</li>
                  <li>Refuse service to anyone at our discretion</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">5. Orders and Payment</h2>
                <p className="text-warm-gray">By placing an order, you are making an offer to purchase products. We reserve the right to accept or decline your order. Payment must be made in full at the time of purchase. We accept major credit cards, debit cards, UPI, and other payment methods as displayed at checkout.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">6. Shipping and Delivery</h2>
                <p className="text-warm-gray">Shipping times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers, customs, or circumstances beyond our control. Risk of loss passes to you upon delivery to the carrier.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">7. Returns and Refunds</h2>
                <p className="text-warm-gray">Our return policy allows returns within 7 days of delivery. Please refer to our Returns & Exchange page for detailed information about eligibility, process, and refund timelines.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">8. Intellectual Property</h2>
                <p className="text-warm-gray">All content on this website, including text, images, logos, and designs, is the property of Eden Attire and is protected by copyright and trademark laws. You may not use, reproduce, or distribute any content without our written permission.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">9. Limitation of Liability</h2>
                <p className="text-warm-gray">Eden Attire shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products. Our total liability shall not exceed the amount you paid for the product in question.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">10. Changes to Terms</h2>
                <p className="text-warm-gray">We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">11. Contact Information</h2>
                <p className="text-warm-gray">For questions about these Terms of Service, please contact us at:</p>
                <p className="text-warm-gray mt-2"><strong>Email:</strong> legal@edenattire.com<br /><strong>Address:</strong> Eden Attire, Bangalore, India</p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
