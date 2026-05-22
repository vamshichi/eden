'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, Twitter, Youtube, Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const footerLinks = {
  shop: [
    { name: 'Women', href: '/women' },
    { name: 'Men', href: '/men' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Sale', href: '/sale' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns & Exchange', href: '/returns' },
    { name: 'Size Guide', href: '/size-guide' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
  ],
}

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/edenattire' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/edenattire' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/edenattire' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/edenattire' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-charcoal text-cream">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-cream/70 mb-6">
              Be the first to know about new arrivals, exclusive offers, and fashion tips.
            </p>
            {isSubscribed ? (
              <p className="text-gold font-medium">
                Thank you for subscribing! Check your email for a welcome offer.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-cream/50 focus:border-gold focus:ring-gold"
                />
                <Button
                  type="submit"
                  className="bg-gold hover:bg-gold-dark text-white px-6 gap-2"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/eden-attire-logo.jpeg"
                alt="Eden Attire"
                width={120}
                height={72}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Elegance Delivered Online. Curating premium fashion with passion and care since 2020.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-charcoal transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-white text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-serif text-white text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-white text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-white text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="mailto:support@edenattire.com"
                  className="flex items-start gap-3 text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>support@edenattire.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+919876543210"
                  className="flex items-start gap-3 text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </Link>
              </li>
              <li className="flex items-start gap-3 text-cream/70 text-sm">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Mon - Sat: 10AM - 7PM</span>
              </li>
              <li className="flex items-start gap-3 text-cream/70 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-cream/50 text-sm">
              &copy; {new Date().getFullYear()} Eden Attire. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-cream/50 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-cream/50 hover:text-gold text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
