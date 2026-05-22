'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Minus, Plus, X, ShoppingBag, ArrowRight, Truck, Shield, Tag } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { products, formatPrice } from '@/lib/data/products'

const initialCart = [
  { product: products[0], quantity: 1, size: 'M', color: products[0].colors[0].name },
  { product: products[3], quantity: 2, size: 'L', color: products[3].colors[0].name },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart)
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)

  const updateQuantity = (index: number, delta: number) => {
    setCartItems(prev => prev.map((item, i) => 
      i === index ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ))
  }

  const removeItem = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const discount = promoApplied ? subtotal * 0.1 : 0
  const shipping = subtotal > 999 ? 0 : 99
  const total = subtotal - discount + shipping

  const applyPromo = () => {
    if (promoCode.toLowerCase() === 'eden10') {
      setPromoApplied(true)
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
              <ShoppingBag className="h-16 w-16 mx-auto text-warm-gray mb-4" />
              <h2 className="font-serif text-2xl text-charcoal mb-2">Your cart is empty</h2>
              <p className="text-warm-gray mb-6">Looks like you haven&apos;t added anything to your cart yet.</p>
              <Link href="/women"><Button className="bg-gold hover:bg-gold-dark gap-2">Start Shopping<ArrowRight className="h-4 w-4" /></Button></Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item, index) => (
                  <motion.div key={`${item.product.id}-${index}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <Link href={`/products/${item.product.id}`} className="relative w-24 h-32 flex-shrink-0 rounded-md overflow-hidden">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link href={`/products/${item.product.id}`} className="font-medium text-charcoal hover:text-gold transition-colors line-clamp-1">{item.product.name}</Link>
                          <p className="text-sm text-warm-gray mt-1">Size: {item.size} | Color: {item.color}</p>
                        </div>
                        <button onClick={() => removeItem(index)} className="p-1 text-warm-gray hover:text-red-500 transition-colors"><X className="h-5 w-5" /></button>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-border rounded-md">
                          <button onClick={() => updateQuantity(index, -1)} className="p-2 hover:bg-cream-dark transition-colors"><Minus className="h-4 w-4" /></button>
                          <span className="w-10 text-center font-medium">{item.quantity}</span>
                          <button onClick={() => updateQuantity(index, 1)} className="p-2 hover:bg-cream-dark transition-colors"><Plus className="h-4 w-4" /></button>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-charcoal">{formatPrice(item.product.price * item.quantity)}</p>
                          {item.product.originalPrice && <p className="text-sm text-warm-gray line-through">{formatPrice(item.product.originalPrice * item.quantity)}</p>}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-32">
                  <h2 className="font-serif text-xl text-charcoal mb-6">Order Summary</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-warm-gray"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                    {promoApplied && <div className="flex justify-between text-green-600"><span>Promo Discount (10%)</span><span>-{formatPrice(discount)}</span></div>}
                    <div className="flex justify-between text-warm-gray"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span></div>
                    <div className="border-t border-border pt-3 flex justify-between font-semibold text-charcoal text-lg"><span>Total</span><span>{formatPrice(total)}</span></div>
                  </div>
                  
                  {/* Promo Code */}
                  <div className="mb-6">
                    <div className="flex gap-2">
                      <Input placeholder="Promo code" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} className="flex-1" disabled={promoApplied} />
                      <Button variant="outline" onClick={applyPromo} disabled={promoApplied || !promoCode}>{promoApplied ? 'Applied' : 'Apply'}</Button>
                    </div>
                    {promoApplied && <p className="text-sm text-green-600 mt-2 flex items-center gap-1"><Tag className="h-3 w-3" />Code EDEN10 applied!</p>}
                  </div>

                  <Button className="w-full bg-gold hover:bg-gold-dark py-6 text-base gap-2">Proceed to Checkout<ArrowRight className="h-4 w-4" /></Button>

                  {/* Trust Badges */}
                  <div className="mt-6 pt-6 border-t border-border space-y-3">
                    <div className="flex items-center gap-3 text-sm text-warm-gray"><Truck className="h-4 w-4 text-gold" /><span>Free shipping on orders above Rs. 999</span></div>
                    <div className="flex items-center gap-3 text-sm text-warm-gray"><Shield className="h-4 w-4 text-gold" /><span>Secure payment guaranteed</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
