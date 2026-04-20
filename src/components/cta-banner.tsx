import Link from 'next/link'
import { siteConfig } from '@/lib/site'

export function CTABanner() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-brandPink to-brandTeal p-8 md:p-12 text-white">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold">Ready to plan your next chapter?</h2>
        <p className="mt-4 text-white/90">
          From Dubai tours to East African safaris, we’re here to make your journey smooth, memorable, and stress-free.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-brandPink font-semibold" >
            Contact us
          </Link>
          <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-white px-6 py-3 font-semibold">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
