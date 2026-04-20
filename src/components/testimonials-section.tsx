const testimonials = [
  {
    name: 'Amina',
    text: 'Pinkelle Adventures made our Dubai trip seamless from start to finish. The support was warm, clear, and professional.',
  },
  {
    name: 'James',
    text: 'Our safari planning was smooth and well organized. I would absolutely recommend them to anyone traveling to East Africa.',
  },
  {
    name: 'Linet',
    text: 'The team was responsive, helpful, and genuinely cared about our experience. We felt supported throughout.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-brandPink">What our clients say</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-600 leading-7">“{item.text}”</p>
              <p className="mt-4 font-semibold text-slate-900">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
