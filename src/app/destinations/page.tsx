export const metadata = {
  title: 'Destinations | Pinkelle Adventures',
  description: 'Explore Dubai, East Africa, Europe, and more with Pinkelle Adventures.',
}

const destinations = [
  'Dubai & UAE',
  'Kenya Safaris',
  'Tanzania & Zanzibar',
  'Uganda Adventures',
  'Turkey & Europe',
  'Asia Holidays',
]

export default function DestinationsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-brandPink">Our Destinations</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {destinations.map((item) => (
          <div key={item} className="rounded-2xl border p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold">{item}</h2>
            <p className="text-slate-600 mt-3">Tailored packages and trusted support for your next journey.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
