import { HeroSection } from '@/components/hero-section'
import { StatsBar } from '@/components/stats-bar'
import { FeaturedServices } from '@/components/featured-services'
import { WhyChooseUs } from '@/components/why-choose-us'
import { FeaturedTours } from '@/components/featured-tours'
import { DestinationsSection } from '@/components/destinations-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTABanner } from '@/components/cta-banner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturedServices />
      <WhyChooseUs />
      <FeaturedTours />
      <DestinationsSection />
      <TestimonialsSection />
      <section className="section">
        <CTABanner />
      </section>
    </>
  )
}