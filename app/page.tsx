import { AnnouncementBar } from '@/components/layout/announcement-bar'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/landing/hero-section'
import { FeaturedCategories } from '@/components/landing/featured-categories'
import { ProductCarousel, ProductGrid } from '@/components/shared/product-card'
import { WhyEdenAttire } from '@/components/landing/why-eden-attire'
import { FounderMessage } from '@/components/landing/founder-message'
import { Testimonials } from '@/components/landing/testimonials'
import { InstagramGallery } from '@/components/landing/instagram-gallery'
import { getTrendingProducts, getNewArrivals, products } from '@/lib/data/products'

export default function Home() {
  const trendingProducts = getTrendingProducts()
  const newArrivals = getNewArrivals()

  return (
    <>
      {/* <AnnouncementBar /> */}
      <Header />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <ProductCarousel
          products={trendingProducts}
          title="Trending Now"
          subtitle="Most Loved"
          viewAllLink="/trending"
        />
        <ProductGrid
          products={newArrivals}
          title="New Arrivals"
          subtitle="Just In"
          viewAllLink="/new-arrivals"
        />
        <WhyEdenAttire />
        <FounderMessage />
        <Testimonials />
        <InstagramGallery />
      </main>
      <Footer />
    </>
  )
}
