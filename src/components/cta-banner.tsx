import Link from 'next/link'

export function CTABanner() {
  return (
    <section className="rounded-2xl bg-gradient-to-r from-primary to-secondary text-white p-10 text-center">

      <h2 className="mb-4">
        Ready to Plan Your Next Adventure?
      </h2>

      <p className="mb-6">
        Let our experts handle everything while you enjoy the journey.
      </p>

      <Link
        href="/contact"
        className="bg-white text-primary px-6 py-3 rounded-full font-medium"
      >
        Get Started
      </Link>

    </section>
  )
}