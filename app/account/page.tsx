'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { User, Package, Heart, MapPin, CreditCard, Settings, LogOut, ChevronRight, Eye, EyeOff } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { formatPrice } from '@/lib/data/products'

const mockOrders = [
  { id: 'ORD001', date: '2024-01-15', status: 'Delivered', total: 3498, items: 2 },
  { id: 'ORD002', date: '2024-01-10', status: 'In Transit', total: 1899, items: 1 },
  { id: 'ORD003', date: '2024-01-05', status: 'Processing', total: 5297, items: 3 },
]

const mockAddresses = [
  { id: '1', name: 'Home', address: '123 Main Street, Apartment 4B, Mumbai, Maharashtra 400001', phone: '+91 98765 43210', isDefault: true },
  { id: '2', name: 'Office', address: '456 Business Park, Floor 5, Bangalore, Karnataka 560001', phone: '+91 98765 43211', isDefault: false },
]

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-cream">
        <AnnouncementBar />
        <Header />
        <main className="pt-32 pb-20">
          <div className="max-w-md mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-lg shadow-sm p-8">
              <div className="text-center mb-8">
                <Image src="/images/eden-attire-logo.jpeg" alt="Eden Attire" width={100} height={60} className="mx-auto mb-4" />
                <h1 className="font-serif text-2xl text-charcoal">Welcome Back</h1>
                <p className="text-warm-gray mt-1">Sign in to your account</p>
              </div>
              
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                  <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true) }} className="space-y-4">
                    <div><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="your@email.com" required /></div>
                    <div><Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input id="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" required />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray hover:text-charcoal">{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded border-border" /><span className="text-warm-gray">Remember me</span></label>
                      <Link href="/forgot-password" className="text-sm text-gold hover:underline">Forgot password?</Link>
                    </div>
                    <Button type="submit" className="w-full bg-gold hover:bg-gold-dark">Sign In</Button>
                  </form>
                </TabsContent>
                <TabsContent value="register">
                  <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true) }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div><Label htmlFor="firstName">First Name</Label><Input id="firstName" placeholder="John" required /></div>
                      <div><Label htmlFor="lastName">Last Name</Label><Input id="lastName" placeholder="Doe" required /></div>
                    </div>
                    <div><Label htmlFor="regEmail">Email</Label><Input id="regEmail" type="email" placeholder="your@email.com" required /></div>
                    <div><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" placeholder="+91 98765 43210" required /></div>
                    <div><Label htmlFor="regPassword">Password</Label><Input id="regPassword" type="password" placeholder="Create a password" required /></div>
                    <label className="flex items-start gap-2 text-sm"><input type="checkbox" className="rounded border-border mt-0.5" required /><span className="text-warm-gray">I agree to the <Link href="/terms" className="text-gold hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link></span></label>
                    <Button type="submit" className="w-full bg-gold hover:bg-gold-dark">Create Account</Button>
                  </form>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">My Account</h1>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center"><User className="h-6 w-6 text-gold" /></div>
                  <div><p className="font-medium text-charcoal">John Doe</p><p className="text-sm text-warm-gray">john@example.com</p></div>
                </div>
                <nav className="space-y-1">
                  {[
                    { id: 'profile', icon: User, label: 'Profile' },
                    { id: 'orders', icon: Package, label: 'Orders' },
                    { id: 'wishlist', icon: Heart, label: 'Wishlist' },
                    { id: 'addresses', icon: MapPin, label: 'Addresses' },
                    { id: 'payments', icon: CreditCard, label: 'Payment Methods' },
                    { id: 'settings', icon: Settings, label: 'Settings' },
                  ].map((item) => (
                    <button key={item.id} onClick={() => setActiveTab(item.id)} className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${activeTab === item.id ? 'bg-gold/10 text-gold' : 'text-warm-gray hover:bg-cream-dark hover:text-charcoal'}`}>
                      <span className="flex items-center gap-2"><item.icon className="h-4 w-4" />{item.label}</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ))}
                </nav>
                <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center gap-2 px-3 py-2 mt-4 text-sm text-red-500 hover:bg-red-50 rounded-md transition-colors"><LogOut className="h-4 w-4" />Sign Out</button>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-lg shadow-sm p-6">
                {activeTab === 'profile' && (
                  <>
                    <h2 className="font-serif text-xl text-charcoal mb-6">Profile Information</h2>
                    <form className="space-y-4 max-w-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div><Label>First Name</Label><Input defaultValue="John" /></div>
                        <div><Label>Last Name</Label><Input defaultValue="Doe" /></div>
                      </div>
                      <div><Label>Email</Label><Input type="email" defaultValue="john@example.com" /></div>
                      <div><Label>Phone</Label><Input type="tel" defaultValue="+91 98765 43210" /></div>
                      <div><Label>Date of Birth</Label><Input type="date" /></div>
                      <Button className="bg-gold hover:bg-gold-dark">Save Changes</Button>
                    </form>
                  </>
                )}
                {activeTab === 'orders' && (
                  <>
                    <h2 className="font-serif text-xl text-charcoal mb-6">Order History</h2>
                    <div className="space-y-4">
                      {mockOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div>
                            <p className="font-medium text-charcoal">{order.id}</p>
                            <p className="text-sm text-warm-gray">{order.date} | {order.items} items</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-charcoal">{formatPrice(order.total)}</p>
                            <span className={`text-xs px-2 py-1 rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : order.status === 'In Transit' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>{order.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {activeTab === 'wishlist' && (
                  <>
                    <h2 className="font-serif text-xl text-charcoal mb-6">Wishlist</h2>
                    <p className="text-warm-gray">View and manage your saved items.</p>
                    <Link href="/wishlist"><Button className="mt-4 bg-gold hover:bg-gold-dark">Go to Wishlist</Button></Link>
                  </>
                )}
                {activeTab === 'addresses' && (
                  <>
                    <div className="flex items-center justify-between mb-6"><h2 className="font-serif text-xl text-charcoal">Saved Addresses</h2><Button variant="outline" size="sm">Add New Address</Button></div>
                    <div className="grid gap-4">
                      {mockAddresses.map((addr) => (
                        <div key={addr.id} className={`p-4 border rounded-lg ${addr.isDefault ? 'border-gold bg-gold/5' : 'border-border'}`}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-charcoal">{addr.name}</span>
                            {addr.isDefault && <span className="text-xs px-2 py-1 bg-gold/10 text-gold rounded">Default</span>}
                          </div>
                          <p className="text-sm text-warm-gray">{addr.address}</p>
                          <p className="text-sm text-warm-gray mt-1">{addr.phone}</p>
                          <div className="flex gap-3 mt-3"><button className="text-sm text-gold hover:underline">Edit</button><button className="text-sm text-red-500 hover:underline">Delete</button></div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {activeTab === 'payments' && (
                  <>
                    <h2 className="font-serif text-xl text-charcoal mb-6">Payment Methods</h2>
                    <p className="text-warm-gray">No saved payment methods yet.</p>
                    <Button className="mt-4" variant="outline">Add Payment Method</Button>
                  </>
                )}
                {activeTab === 'settings' && (
                  <>
                    <h2 className="font-serif text-xl text-charcoal mb-6">Account Settings</h2>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between py-3 border-b border-border"><div><p className="font-medium text-charcoal">Email Notifications</p><p className="text-sm text-warm-gray">Receive updates about orders and promotions</p></div><input type="checkbox" defaultChecked className="toggle" /></div>
                      <div className="flex items-center justify-between py-3 border-b border-border"><div><p className="font-medium text-charcoal">SMS Notifications</p><p className="text-sm text-warm-gray">Get order updates via SMS</p></div><input type="checkbox" className="toggle" /></div>
                      <div className="pt-4"><Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">Delete Account</Button></div>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
