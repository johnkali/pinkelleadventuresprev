export const metadata = {
  title: 'Services | Pinkelle Adventures',
  description: 'Travel services including Dubai tours, UAE visas, safaris, hotel bookings, and business travel support.',
}

const services = [
  'Dubai Tours',
  'UAE Visit Visas',
  'East African Safaris',
  'Hotel Reservations',
  'Medical Tourism',
  'Business Travel Support',
  'Group Travel',
  'B2B Travel Partnerships',
]

export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-brandPink">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {services.map((service) => (
          <div key={service} className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{service}</h2>
            <p className="mt-3 text-slate-600">Professional support designed to make your travel planning smooth and stress-free.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
