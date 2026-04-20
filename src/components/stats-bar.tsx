export function StatsBar() {
  const stats = [
    { value: '2', label: 'Offices (Dubai & Nairobi)' },
    { value: '4+', label: 'Continents Covered' },
    { value: '100%', label: 'Personalized Trips' },
    { value: '24/7', label: 'Customer Support' },
  ]

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="section grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold text-primary">
              {stat.value}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}