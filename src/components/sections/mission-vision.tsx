export function MissionVision() {
  return (
    <section className="section bg-gradient-to-br from-slate-900 to-slate-800 text-white">

      <div className="grid md:grid-cols-2 gap-8">

        {/* MISSION */}
        <div className="glass p-6 rounded-2xl">
          <h3 className="mb-2">Our Mission</h3>
          <p className="text-white/80 text-sm">
            Design holidays that awaken joy, adventure, and connection.
            Deliver personalized, seamless, and secure travel solutions.
          </p>
        </div>

        {/* VISION */}
        <div className="glass p-6 rounded-2xl">
          <h3 className="mb-2">Our Vision</h3>
          <p className="text-white/80 text-sm">
            Inspire and connect the world through unforgettable journeys —
            building a future where every traveler feels at home.
          </p>
        </div>

      </div>

    </section>
  )
}