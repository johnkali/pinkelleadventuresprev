import { services } from '@/lib/data/services'

export function ServicesGrid() {
  return (
    <section className="section bg-slate-50">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
       {services.map((service, i) => {
  const Icon = service.icon

  return (
    <div key={i} className="card card-hover relative">

      {/* BADGE */}
      {service.badge && (
        <span className="absolute top-4 right-4 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
          {service.badge}
        </span>
      )}

      {/* ICON */}
      <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition">
        <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition" />
      </div>

      {/* TITLE */}
      <h3 className="mb-2">{service.title}</h3>

      {/* TEXT */}
      <p className="text-sm mb-4">{service.description}</p>

      {/* CTA */}
      <a
        href="/contact"
        className="text-primary font-medium text-sm hover:underline"
      >
        Enquire Now →
      </a>

    </div>
  )
})}
      </div>
    </section>
  )
}