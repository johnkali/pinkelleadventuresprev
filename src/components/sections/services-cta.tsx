import Link from 'next/link'
import { siteConfig } from '@/lib/site'

export function ServicesCTA() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-10 md:p-14 text-center shadow-lg">

      <h2 className="mb-4">Need Something Specific?</h2>

      <p className="max-w-xl mx-auto mb-8 text-white/90">
        Don't see exactly what you need? We customize everything. Tell us your requirements and we'll make it happen.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4">

        {/* WhatsApp */}
        <a
          href={siteConfig.links.whatsapp}
          target="_blank"
          className="bg-white text-primary px-6 py-3 rounded-full font-medium"
        >
          Chat on WhatsApp
        </a>

        {/* Form */}
        <Link
          href="/contact"
          className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-primary transition"
        >
          Send a Message
        </Link>

      </div>

    </div>
  )
}