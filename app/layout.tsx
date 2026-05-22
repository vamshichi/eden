import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const greatVibes = Great_Vibes({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Eden Attire | Elegance Delivered Online',
  description: 'Discover premium fashion at Eden Attire. Shop curated collections for women, men, and accessories. Quality fabrics, elegant designs, and exceptional service.',
  keywords: ['fashion', 'luxury clothing', 'women fashion', 'men fashion', 'accessories', 'online shopping', 'Eden Attire'],
  authors: [{ name: 'Eden Attire' }],
  creator: 'Eden Attire',
  icons: {
    icon: '/images/eden-attire-logo.jpeg',
    apple: '/images/eden-attire-logo.jpeg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://edenattire.com',
    siteName: 'Eden Attire',
    title: 'Eden Attire | Elegance Delivered Online',
    description: 'Discover premium fashion at Eden Attire. Shop curated collections for women, men, and accessories.',
    images: [
      {
        url: '/images/eden-attire-logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Eden Attire - Elegance Delivered Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eden Attire | Elegance Delivered Online',
    description: 'Discover premium fashion at Eden Attire.',
    images: ['/images/eden-attire-logo.jpeg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#C9A050',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
