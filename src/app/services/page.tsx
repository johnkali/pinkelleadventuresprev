import { ServicesGrid } from '@/components/sections/services-grid'
import { ServicesCTA } from '@/components/sections/services-cta'

export const metadata = {
  title: 'Our Services',
  description:
    'Explore UAE visas, Dubai tours, global travel services, and more with Pinkelle Adventures.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-secondary text-white">
        <div className="section-tight text-center">

          <p className="text-xs tracking-widest uppercase text-white/80 mb-3">
            What We Offer
          </p>

          <h1 className="text-white">Our Services</h1>

          <div className="w-16 h-[3px] bg-gradient-to-r from-primary to-white mx-auto mt-4 mb-6 rounded-full" />

          <p className="max-w-2xl mx-auto text-white/90">
            From UAE visa processing to worldwide holiday packages — everything you need for seamless travel, all under one roof.
          </p>

        </div>
      </section>

      {/* Services */}
      <ServicesGrid />

      {/* CTA */}
      <section className="section">
        <ServicesCTA />
      </section>
    </>
  )
}