import { ShieldCheck, Users, Globe, Sparkles } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Trusted Expertise',
    description: 'Licensed travel professionals with strong Dubai experience.',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'Every trip is tailored to your needs and preferences.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Travel across UAE, Africa, Europe, and beyond.',
  },
  {
    icon: Sparkles,
    title: 'Seamless Experience',
    description: 'From visas to bookings, we handle everything for you.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section bg-white">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h2>Why Choose Pinkelle Adventures</h2>
          <div className="luxury-divider mt-4 mb-6" />

          <p className="mb-6">
            We combine local expertise with global travel knowledge to deliver seamless and memorable travel experiences.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="flex gap-3">
                  <Icon className="text-primary w-5 h-5 mt-1" />
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <img
            src="/images/why-us.jpg"
            alt="Travel planning experience with Pinkelle Adventures"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}