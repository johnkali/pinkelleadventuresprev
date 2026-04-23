import { destinations } from '@/lib/data/destinations'

export function DestinationsList() {
  return (
    <section className="section bg-white">
      <div className="space-y-24">

        {destinations.map((dest, i) => {
          const isReverse = i % 2 !== 0

          const accent =
            dest.color === 'pink' ? '#ec008c' : '#489a94'

          return (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                isReverse ? 'md:[&>div:first-child]:order-2' : ''
              }`}
            >

              {/* LEFT CONTENT */}
              <div>

                <h2 className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{dest.flag}</span>
                  {dest.name}
                </h2>

                <p
                  className="text-sm font-medium mb-4"
                  style={{ color: accent }}
                >
                  {dest.tagline}
                </p>

                <p className="mb-4 leading-relaxed">
                  {dest.description}
                </p>

                <p className="text-sm text-slate-500">
                  <span className="font-semibold">Best for:</span>{' '}
                  {dest.bestFor}
                </p>

              </div>

              {/* RIGHT CARD */}
              <div className="rounded-2xl p-6 bg-[#fafaf8] border border-slate-200">

                <h4 className="text-sm font-bold text-slate-900 mb-4">
                  Popular Experiences
                </h4>

                <ul className="space-y-3 mb-6">
                  {dest.experiences.map((exp, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: accent }}
                      />
                      {exp}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 font-medium text-sm"
                  style={{ color: accent }}
                >
                  Get a Quote for {dest.name}
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </a>

              </div>

            </div>
          )
        })}

      </div>
    </section>
  )
}