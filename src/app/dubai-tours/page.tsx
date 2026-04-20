'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CurrencyToggle } from '@/components/currency-toggle'
import { toUSD } from '@/lib/currency'

const tours = [
  {
    name: '5-Day Dubai Experience',
    aed: 2500,
    details: 'Desert safari, dhow cruise, city tour, Burj Khalifa, Museum of the Future.',
  },
  {
    name: 'Dubai City Escape',
    aed: 1850,
    details: 'Short-stay package with city highlights and smooth transfers.',
  },
  {
    name: 'Luxury Dubai Getaway',
    aed: 3900,
    details: 'Premium hotel stay, private transfers, and curated luxury experiences.',
  },
]

export default function DubaiToursPage() {
  const [currency, setCurrency] = useState<'AED' | 'USD'>('AED')

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-brandPink">Dubai Tour Packages</h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            Explore curated Dubai experiences designed for comfort, fun, and unforgettable memories.
          </p>
        </div>
        <CurrencyToggle currency={currency} setCurrency={setCurrency}/>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tours.map((tour) => (
          <div key={tour.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{tour.name}</h2>
            <p className="mt-2 font-bold text-brandTeal">
              {currency === 'AED' ? `AED ${tour.aed}` : `$${toUSD(tour.aed)}`}
            </p>
            <p className="mt-3 text-slate-600">{tour.details}</p>
            <Link href="/contact" className="mt-5 inline-block rounded-full bg-brandPink px-5 py-3 text-white" >
              Book this package
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}