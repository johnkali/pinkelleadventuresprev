import { Plane, Globe, Map, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Plane,
    title: 'Dubai Tours',
    description:
      'Explore Dubai with curated city tours, desert safaris, and luxury experiences.',
  },
  {
    icon: Globe,
    title: 'International Travel',
    description:
      'Discover destinations across Europe, Asia, and Africa with tailored packages.',
  },
  {
    icon: Map,
    title: 'Visa Assistance',
    description:
      'Hassle-free UAE visa processing with expert guidance and fast turnaround.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Travel',
    description:
      'Professional travel planning for business trips, events, and group bookings.',
  },
]

export function FeaturedServices() {
  return (
    <section className="section">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2>Our Services</h2>
        <div className="luxury-divider mx-auto mt-4 mb-4" />
        <p>
          From Dubai experiences to global travel, we provide seamless planning and personalized service every step of the way.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon

          return (
            <div
              key={i}
              className="card card-hover text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10">
                <Icon className="text-primary w-6 h-6" />
              </div>

              <h3 className="mb-2">{service.title}</h3>

              <p className="text-sm">
                {service.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}