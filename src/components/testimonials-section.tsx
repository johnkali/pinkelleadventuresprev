const testimonials = [
  {
    name: 'Sarah K.',
    text: 'Pinkelle made our Dubai trip seamless and unforgettable!',
  },
  {
    name: 'James M.',
    text: 'Excellent service and well-organized tours. Highly recommend!',
  },
  {
    name: 'Amina N.',
    text: 'Professional team with great attention to detail.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="section">

      <div className="text-center mb-12">
        <h2>What Our Clients Say</h2>
        <div className="luxury-divider mx-auto mt-4 mb-4" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="card card-hover">
            <p className="mb-4">“{t.text}”</p>
            <h4 className="font-semibold text-primary">{t.name}</h4>
          </div>
        ))}
      </div>

    </section>
  )
}