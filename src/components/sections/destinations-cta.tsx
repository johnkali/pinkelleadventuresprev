import { siteConfig } from '@/lib/site'

export function DestinationsCTA() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-12 text-center">

      <h2 className="mb-4">
        Don’t See Your Destination?
      </h2>

      <p className="max-w-xl mx-auto mb-8 text-white/80">
        We plan trips to virtually anywhere in the world. Tell us where you want to go and we’ll create a custom package just for you.
      </p>

      <a
        href={siteConfig.links.whatsapp}
        target="_blank"
        className="btn-primary"
      >
        Plan My Trip on WhatsApp
      </a>

    </div>
  )
}