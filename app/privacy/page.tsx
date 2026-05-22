'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Privacy Policy</h1>
            <p className="text-warm-gray">Last updated: January 1, 2024</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="prose prose-gray max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">1. Information We Collect</h2>
                <p className="text-warm-gray">We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes:</p>
                <ul className="list-disc list-inside text-warm-gray space-y-2 mt-3">
                  <li>Name, email address, phone number, and shipping address</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                  <li>Order history and preferences</li>
                  <li>Communications with our customer service team</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">2. How We Use Your Information</h2>
                <p className="text-warm-gray">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-warm-gray space-y-2 mt-3">
                  <li>Process and fulfill your orders</li>
                  <li>Send order confirmations, shipping updates, and delivery notifications</li>
                  <li>Respond to your questions and provide customer support</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Improve our products, services, and website</li>
                  <li>Detect and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">3. Information Sharing</h2>
                <p className="text-warm-gray">We do not sell your personal information. We may share your information with:</p>
                <ul className="list-disc list-inside text-warm-gray space-y-2 mt-3">
                  <li>Service providers who assist in our operations (shipping, payment processing)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your consent</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">4. Data Security</h2>
                <p className="text-warm-gray">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment transactions are encrypted using SSL technology.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">5. Cookies</h2>
                <p className="text-warm-gray">We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">6. Your Rights</h2>
                <p className="text-warm-gray">You have the right to:</p>
                <ul className="list-disc list-inside text-warm-gray space-y-2 mt-3">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-charcoal mb-4">7. Contact Us</h2>
                <p className="text-warm-gray">If you have any questions about this Privacy Policy, please contact us at:</p>
                <p className="text-warm-gray mt-2"><strong>Email:</strong> privacy@edenattire.com<br /><strong>Address:</strong> Eden Attire, Bangalore, India</p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
