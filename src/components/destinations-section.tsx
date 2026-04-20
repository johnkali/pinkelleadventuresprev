import Image from 'next/image'

const destinations = [
  {
    name: 'Dubai',
    image: '/images/destinations/dubai.jpg',
  },
  {
    name: 'Abu Dhabi',
    image: '/images/destinations/abu-dhabi.jpg',
  },
  {
    name: 'Zanzibar',
    image: '/images/destinations/zanzibar.jpg',
  },
  {
    name: 'Turkey',
    image: '/images/destinations/turkey.jpg',
  },
]

export function DestinationsSection() {
  return (
    <section className="section bg-slate-50">

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2>Explore Destinations</h2>
        <div className="luxury-divider mx-auto mt-4 mb-4" />
        <p>
          From Dubai to global destinations, discover your next adventure.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest, i) => (
          <div
            key={i}
            className="relative h-64 rounded-2xl overflow-hidden group"
          >
            <Image
              src={dest.image}
              alt={`${dest.name} travel destination`}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40" />

            <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
              {dest.name}
            </h3>
          </div>
        ))}
      </div>

    </section>
  )
}