'use client'

import { motion } from 'framer-motion'
import { Ruler } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const womenSizes = [
  { size: 'XS', bust: '32"', waist: '24"', hip: '34"' },
  { size: 'S', bust: '34"', waist: '26"', hip: '36"' },
  { size: 'M', bust: '36"', waist: '28"', hip: '38"' },
  { size: 'L', bust: '38"', waist: '30"', hip: '40"' },
  { size: 'XL', bust: '40"', waist: '32"', hip: '42"' },
  { size: 'XXL', bust: '42"', waist: '34"', hip: '44"' },
]

const menSizes = [
  { size: 'S', chest: '36"', waist: '30"', shoulder: '17"' },
  { size: 'M', chest: '38"', waist: '32"', shoulder: '18"' },
  { size: 'L', chest: '40"', waist: '34"', shoulder: '19"' },
  { size: 'XL', chest: '42"', waist: '36"', shoulder: '20"' },
  { size: 'XXL', chest: '44"', waist: '38"', shoulder: '21"' },
]

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="p-4 bg-gold/10 rounded-full w-fit mx-auto mb-4"><Ruler className="h-8 w-8 text-gold" /></div>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Size Guide</h1>
            <p className="text-warm-gray">Find your perfect fit with our comprehensive size charts</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-lg shadow-sm p-8">
            <Tabs defaultValue="women" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="women">Women</TabsTrigger>
                <TabsTrigger value="men">Men</TabsTrigger>
              </TabsList>

              <TabsContent value="women">
                <h2 className="font-serif text-xl text-charcoal mb-4">Women&apos;s Size Chart</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead><tr className="bg-cream-dark"><th className="text-left py-3 px-4 text-charcoal font-medium">Size</th><th className="text-left py-3 px-4 text-charcoal font-medium">Bust</th><th className="text-left py-3 px-4 text-charcoal font-medium">Waist</th><th className="text-left py-3 px-4 text-charcoal font-medium">Hip</th></tr></thead>
                    <tbody>
                      {womenSizes.map((row, i) => (
                        <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}><td className="py-3 px-4 font-medium text-charcoal">{row.size}</td><td className="py-3 px-4 text-warm-gray">{row.bust}</td><td className="py-3 px-4 text-warm-gray">{row.waist}</td><td className="py-3 px-4 text-warm-gray">{row.hip}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="men">
                <h2 className="font-serif text-xl text-charcoal mb-4">Men&apos;s Size Chart</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead><tr className="bg-cream-dark"><th className="text-left py-3 px-4 text-charcoal font-medium">Size</th><th className="text-left py-3 px-4 text-charcoal font-medium">Chest</th><th className="text-left py-3 px-4 text-charcoal font-medium">Waist</th><th className="text-left py-3 px-4 text-charcoal font-medium">Shoulder</th></tr></thead>
                    <tbody>
                      {menSizes.map((row, i) => (
                        <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}><td className="py-3 px-4 font-medium text-charcoal">{row.size}</td><td className="py-3 px-4 text-warm-gray">{row.chest}</td><td className="py-3 px-4 text-warm-gray">{row.waist}</td><td className="py-3 px-4 text-warm-gray">{row.shoulder}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-serif text-lg text-charcoal mb-4">How to Measure</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-warm-gray">
                <div><p className="font-medium text-charcoal mb-2">Bust/Chest</p><p>Measure around the fullest part of your bust/chest, keeping the tape horizontal.</p></div>
                <div><p className="font-medium text-charcoal mb-2">Waist</p><p>Measure around your natural waistline, keeping the tape comfortably loose.</p></div>
                <div><p className="font-medium text-charcoal mb-2">Hip</p><p>Measure around the fullest part of your hips and bottom.</p></div>
                <div><p className="font-medium text-charcoal mb-2">Shoulder</p><p>Measure from the edge of one shoulder to the other across the back.</p></div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gold/10 rounded-lg">
              <p className="text-charcoal"><strong>Pro Tip:</strong> If you&apos;re between sizes, we recommend going up a size for a more comfortable fit. Need help? Contact our support team for personalized sizing advice.</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
