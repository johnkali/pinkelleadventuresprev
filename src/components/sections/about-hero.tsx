export function AboutHero() {
  return (
    <section className="section">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>

          <p className="text-xs uppercase tracking-widest text-primary mb-3">
            Our Story
          </p>

          <h1 className="mb-4">
            We Don’t Just Plan Trips.{' '}
            <span className="text-gradient">We Build Trust.</span>
          </h1>

          <div className="luxury-divider mb-6" />

          <p className="mb-4 leading-relaxed">
            Pinkelle Adventures is a licensed, established tour company headquartered in Dubai with a branch office in Nairobi, Kenya.
            We design holidays that awaken joy, adventure, and genuine connection — for individuals, families, corporate groups, and travel agents.
          </p>

          <p className="mb-4 leading-relaxed">
            We don’t just book trips. We personally inspect our partner hotels. We handpick every experience.
            We answer the phone when you call. When you trust us with your holiday, your family trip, or your business travel —
            that trust means everything to us.
          </p>

          <p className="text-primary italic">
            “Your adventure, our expertise. Let’s create memories together.”
          </p>

        </div>

        {/* IMAGE */}
        <div className="relative">
          <img
            src="images/about-hero.jpg"
            alt="Pinkelle Adventures team"
            className="rounded-2xl w-full h-[420px] object-cover"
          />

          {/* FLOAT BADGE */}
          <div className="absolute bottom-4 left-4 bg-white shadow-lg px-4 py-2 rounded-xl text-sm">
            Licensed & Registered
          </div>
        </div>

      </div>
    </section>
  )
}