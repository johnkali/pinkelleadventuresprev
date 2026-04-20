import Image from 'next/image'
import Link from 'next/link'
import { featuredTours } from '@/lib/tours'

export function FeaturedTours() {
  return (
    <section className="section bg-slate-50">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2>Featured Tours</h2>
        <div className="luxury-divider mx-auto mt-4 mb-4" />
        <p>
          Discover our most popular travel experiences, carefully curated to give you unforgettable memories.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredTours.map((tour, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
          >

            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={tour.image}
                alt={`${tour.title} in ${tour.location}`}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Location Badge */}
              <div className="absolute top-4 left-4 bg-white/90 text-xs px-3 py-1 rounded-full">
                {tour.location}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">

              <h3 className="mb-2">
                {tour.title}
              </h3>

              <p className="text-sm text-slate-500 mb-4">
                {tour.duration}
              </p>

              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <span className="text-primary font-semibold">
                  {tour.price}
                </span>

                <Link
                  href="/contact"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View Details →
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}