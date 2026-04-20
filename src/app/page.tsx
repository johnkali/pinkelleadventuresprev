import { HeroSection } from '@/components/hero-section'
import { FeaturedServices } from '@/components/featured-services'
import { FeaturedTours } from '@/components/featured-tours'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTABanner } from '@/components/cta-banner'
import { StatsBar } from '@/components/stats-bar'
import { WhyChooseUs } from '@/components/why-choose-us'



export default function HomePage() {
  return (
    <>
    <HeroSection />
<StatsBar />
<FeaturedServices />
<FeaturedTours />
<WhyChooseUs/>
<TestimonialsSection />
      {/* <section className="max-w-7xl mx-auto px-6 py-16"> */}
        <CTABanner/>
    </>
  )
}