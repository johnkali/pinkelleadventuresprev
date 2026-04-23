import { DubaiToursGrid } from '@/components/sections/dubai-tours-grid'
import { DubaiToursCTA } from '@/components/sections/dubai-tours-cta'
import { CurrencyToggle } from '@/components/currency-toggle'

export const metadata = {
  title: 'Dubai Tour Packages',
  description:
    'Explore Dubai tour packages including desert safari, city tours, dhow cruises and more.',
}

export default function DubaiToursPage() {
  return (
    <>
      {/* HERO */}
      <section className="section text-center">

        <p className="text-xs uppercase tracking-widest text-primary mb-3">
          Handpicked Experiences
        </p>

        <h1>Dubai Tour Packages</h1>

        <p className="max-w-2xl mx-auto mt-4 mb-6">
          From thrilling desert safaris to iconic city landmarks — explore our handpicked Dubai experiences with transparent pricing.
        </p>

        {/* Currency Toggle */}
        <CurrencyToggle />
        {/* <div className="flex justify-center gap-3">
          <button className="px-5 py-2 rounded-full bg-primary text-white text-sm font-medium">
            AED (د.إ)
          </button>
          <button className="px-5 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium">
            USD ($)
          </button>
        </div> */}

      </section>

      <DubaiToursGrid />

      <section className="section">
        <DubaiToursCTA />
      </section>
    </>
  )
}