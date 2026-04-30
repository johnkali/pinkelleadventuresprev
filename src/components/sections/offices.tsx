export function Offices() {
  return (
    <section className="section bg-slate-50 text-center">

      <p className="text-xs uppercase text-primary mb-2">
        Where We Are
      </p>

      <h2 className="mb-4">Two Offices. One Promise.</h2>

      <p className="max-w-2xl mx-auto mb-10 text-slate-500">
        With teams in Dubai and Nairobi, we offer real support, real people, and real experiences.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="p-6 bg-white rounded-2xl border card-hover hover:shadow-xl text-left">
          <h4 className="mb-2">Dubai Office (HQ)</h4>
          <p className="text-sm text-slate-500 mb-2">
            M15 CityGate Building, Port Saeed, Opp Rove City Center, Near DCC Dubai — UAE
          </p>
          <p className="text-primary font-medium">+971 55 488 4801</p>
        </div>

        <div className="p-6 bg-white rounded-2xl border card-hover hover:shadow-xl text-left">
          <h4 className="mb-2">Kenya Branch Office</h4>
          <p className="text-sm text-slate-500 mb-2">
            Suite 104, AACC Building, Waiyaki Way, Westlands, Nairobi — Kenya
          </p>
          <p className="text-[#489a94] font-medium">+254 704 320 350</p>
        </div>

      </div>

    </section>
  )
}