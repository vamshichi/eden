'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'
import { Button } from '@/components/ui/button'

const openings = [
  { id: 1, title: 'Senior Fashion Designer', department: 'Design', location: 'Bangalore', type: 'Full-time' },
  { id: 2, title: 'E-commerce Manager', department: 'Operations', location: 'Bangalore', type: 'Full-time' },
  { id: 3, title: 'Customer Experience Lead', department: 'Support', location: 'Remote', type: 'Full-time' },
  { id: 4, title: 'Social Media Manager', department: 'Marketing', location: 'Bangalore', type: 'Full-time' },
  { id: 5, title: 'Warehouse Supervisor', department: 'Logistics', location: 'Mumbai', type: 'Full-time' },
]

const benefits = [
  'Competitive salary packages', 'Health insurance coverage', 'Flexible work hours', 'Employee discount on products',
  'Learning & development budget', 'Work from home options', 'Team outings & events', 'Growth opportunities',
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero */}
        <div className="relative h-80 bg-charcoal overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop)' }} />
          <div className="relative h-full flex items-center justify-center text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Join Our Team</h1>
              <p className="text-cream/80 text-lg">Help us shape the future of fashion</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why Join */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-16 text-center">
            <h2 className="font-serif text-3xl text-charcoal mb-6">Why Work at Eden Attire?</h2>
            <p className="text-warm-gray max-w-2xl mx-auto mb-12">We&apos;re a passionate team of fashion enthusiasts, tech innovators, and customer advocates working together to create something beautiful. Here, your ideas matter, your growth is valued, and your work has impact.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div key={benefit} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-sm text-charcoal">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Open Positions */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-16 border-t border-border">
            <h2 className="font-serif text-3xl text-charcoal mb-8">Open Positions</h2>
            <div className="space-y-4">
              {openings.map((job, index) => (
                <motion.div key={job.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <h3 className="font-medium text-charcoal">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-warm-gray">
                      <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" />{job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{job.type}</span>
                    </div>
                  </div>
                  <Button className="bg-gold hover:bg-gold-dark gap-2 whitespace-nowrap">Apply Now<ArrowRight className="h-4 w-4" /></Button>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* No Match */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-16 text-center bg-charcoal rounded-lg">
            <h2 className="font-serif text-2xl text-white mb-4">Don&apos;t See Your Role?</h2>
            <p className="text-cream/70 mb-6">We&apos;re always looking for talented people. Send us your resume and we&apos;ll keep you in mind for future opportunities.</p>
            <Link href="mailto:careers@edenattire.com"><Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">Send Your Resume</Button></Link>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
