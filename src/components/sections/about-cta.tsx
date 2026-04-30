export function AboutCTA() {
  return (
    <section className="section text-center">

      <h2 className="mb-4">
        Ready to Travel With People Who Actually Care?
      </h2>

      <p className="text-slate-500 mb-6">
        Tell us where you want to go. We'll handle everything else.
      </p>

      <div className="flex justify-center gap-4">

        <a
          href="#"
          className="bg-primary text-white px-6 py-3 rounded-full"
        >
          Chat on WhatsApp
        </a>

        <a
          href="/contact"
          className="border border-slate-300 px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
        >
          Send a Message
        </a>

      </div>

    </section>
  )
}