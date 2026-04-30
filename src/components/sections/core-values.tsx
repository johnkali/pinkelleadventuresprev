export function CoreValues() {
  const values = [
    {
      title: 'Authenticity',
      text: 'We design real experiences — honest, genuine, and meaningful.',
    },
    {
      title: 'Trust & Transparency',
      text: 'Clear communication, no hidden costs, full honesty.',
    },
    {
      title: 'Reliability',
      text: 'We solve problems before they reach you — every time.',
    },
    {
      title: 'Lasting Value',
      text: 'We create experiences people remember and return for.',
    },
  ]

  return (
    <section className="section text-center">

      <p className="text-xs uppercase text-primary mb-2">
        What We Stand For
      </p>

      <h2 className="mb-2">Our Core Values</h2>
      <div className="luxury-divider mx-auto mb-10" />

      <div className="grid md:grid-cols-4 gap-6">

        {values.map((v, i) => (
          <div
            key={i}
            className="p-6 border rounded-2xl card-hover hover:shadow-xl transition"
          >
            <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-slate-100" />
            <h4 className="mb-2">{v.title}</h4>
            <p className="text-sm text-slate-500">{v.text}</p>
          </div>
        ))}

      </div>

    </section>
  )
}