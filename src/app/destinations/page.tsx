import { DestinationsList } from '@/components/sections/destinations-list'
import { DestinationsCTA } from '@/components/sections/destinations-cta'

export const metadata = {
  title: 'Other Travel Destinations',
  description:
    'Explore global travel destinations including Malaysia, Turkey, Maldives, China, East Africa and Europe.',
}

export default function DestinationsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="section text-center">

          <p className="text-xs uppercase tracking-widest text-primary mb-3">
            Explore the World
          </p>

          <h1 className="text-white">
            Other Travel Destinations
          </h1>

          <div className="w-16 h-[3px] bg-primary mx-auto mt-4 mb-6 rounded-full" />

          <p className="max-w-2xl mx-auto text-white/80 mb-8">
            Dubai is our home — but the world is our playground. We plan unforgettable holidays to Malaysia, Turkey, Maldives, China, East Africa, Europe & beyond.
          </p>

          <a
            href="/contact"
            className="btn-primary"
          >
            Get a Quote for Any Destination
          </a>

        </div>
      </section>

      {/* DESTINATIONS */}
      <DestinationsList />

      {/* CTA */}
      <section className="section">
        <DestinationsCTA />
      </section>
    </>
  )
}