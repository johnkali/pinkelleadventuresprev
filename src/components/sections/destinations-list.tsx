import { destinations } from '@/lib/data/destinations'

export function DestinationsList() {
  return (
    <section className="section bg-slate-50">
      <div className="space-y-20">

        {destinations.map((dest, i) => {
          const isReverse = i % 2 !== 0

          return (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                isReverse ? 'md:[&>div:first-child]:order-2' : ''
              }`}
            >

              {/* LEFT TEXT */}
              <div>
                <h2 className="mb-2">{dest.name}</h2>

                <p className="text-primary text-sm mb-3">
                  {dest.tagline}
                </p>

                <p className="mb-4">
                  {dest.description}
                </p>

                <p className="text-xs text-slate-500 uppercase tracking-wide">
                  Best for: {dest.bestFor}
                </p>
              </div>

              {/* RIGHT CARD */}
              <div className="card">
                <h4 className="mb-4 text-sm uppercase tracking-wide text-slate-500">
                  Popular Experiences
                </h4>

                <ul className="space-y-2 mb-4">
                  {dest.experiences.map((exp, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {exp}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Get a Quote →
                </a>
              </div>

            </div>
          )
        })}

      </div>
    </section>
  )
}