'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Contact Us</h1>
            <p className="text-warm-gray max-w-2xl mx-auto">Have a question or feedback? We&apos;d love to hear from you. Our team is here to help.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {[
                { icon: Mail, title: 'Email', content: 'support@edenattire.com', href: 'mailto:support@edenattire.com' },
                { icon: Phone, title: 'Phone', content: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: MapPin, title: 'Address', content: 'Bangalore, India', href: null },
                { icon: Clock, title: 'Hours', content: 'Mon - Sat: 10AM - 7PM', href: null },
              ].map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="p-3 bg-gold/10 rounded-full"><item.icon className="h-5 w-5 text-gold" /></div>
                  <div>
                    <h3 className="font-medium text-charcoal">{item.title}</h3>
                    {item.href ? <a href={item.href} className="text-warm-gray hover:text-gold transition-colors">{item.content}</a> : <p className="text-warm-gray">{item.content}</p>}
                  </div>
                </motion.div>
              ))}

              <div className="p-6 bg-charcoal rounded-lg text-white">
                <MessageSquare className="h-8 w-8 text-gold mb-4" />
                <h3 className="font-serif text-xl mb-2">Live Chat</h3>
                <p className="text-cream/70 text-sm mb-4">Get instant support from our team.</p>
                <Button className="w-full bg-gold hover:bg-gold-dark">Start Chat</Button>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 bg-white rounded-lg shadow-sm p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><Send className="h-8 w-8 text-green-600" /></div>
                  <h2 className="font-serif text-2xl text-charcoal mb-2">Message Sent!</h2>
                  <p className="text-warm-gray">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="font-serif text-2xl text-charcoal mb-6">Send us a Message</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><Label htmlFor="name">Name</Label><Input id="name" placeholder="Your name" required /></div>
                    <div><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="your@email.com" required /></div>
                  </div>
                  <div><Label htmlFor="phone">Phone (Optional)</Label><Input id="phone" type="tel" placeholder="+91 98765 43210" /></div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <select id="subject" className="w-full mt-1.5 px-3 py-2 border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gold">
                      <option>General Inquiry</option>
                      <option>Order Status</option>
                      <option>Returns & Exchange</option>
                      <option>Product Question</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div><Label htmlFor="message">Message</Label><Textarea id="message" rows={5} placeholder="How can we help you?" required /></div>
                  <Button type="submit" className="bg-gold hover:bg-gold-dark gap-2"><Send className="h-4 w-4" />Send Message</Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
