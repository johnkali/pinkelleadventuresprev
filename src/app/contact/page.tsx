export const metadata = {
  title: 'Contact Us | Pinkelle Adventures',
  description: 'Get in touch with Pinkelle Adventures for tours, visas, safaris, and travel planning support.',
}

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-brandPink">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div>
          <h2 className="text-xl font-semibold">Dubai Office</h2>
          <p className="mt-3 text-slate-600">M15 CityGate Building, Port Saeed, Dubai, UAE</p>
          <p className="text-slate-600">+971 55 488 4801</p>
          <h2 className="text-xl font-semibold mt-8">Kenya Office</h2>
          <p className="mt-3 text-slate-600">Suite 104, 1st Floor, AACC Building, Waiyaki Way, Westlands, Nairobi</p>
          <p className="text-slate-600">+254 704 320 350</p>
        </div>
        <form className="rounded-2xl border p-6 shadow-sm space-y-4">
          <input className="w-full rounded-xl border px-4 py-3" placeholder="Your name" />
          <input className="w-full rounded-xl border px-4 py-3" placeholder="Your email" />
          <textarea className="w-full rounded-xl border px-4 py-3 min-h-[140px]" placeholder="How can we help?"/>
          <button className="rounded-full bg-brandPink px-6 py-3 text-white">Send inquiry</button>
        </form>
      </div>
    </section>
  )
}
