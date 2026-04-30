import { FAQAccordion } from '@/components/faq-accordion'
import { siteConfig } from '@/lib/site'

export const metadata = {
  title: 'FAQs | Pinkelle Adventures',
  description: 'Frequently asked questions about tours, visas, safaris, and bookings.',
}

const bookingFAQs = [
  {
    question: 'How do I book a tour or safari with Pinkelle Adventures?',
    answer:
      "Simply reach out to us via WhatsApp (+971 55 488 4801), email (info@pinkelleadventures.com), or our website contact form. Tell us your destination, dates, and preferences — we'll craft a personalized itinerary and quote for you within 24 hours.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers (AED & USD accounts), payment links via Nomod, and cash payments at our offices in Dubai or Nairobi. For B2B partners, we also support KES payments.',
  },
  {
    question: 'Do I need to pay a deposit to confirm my booking?',
    answer:
      'Yes, most bookings require a deposit (30–50%). Full payment is usually required 7 days before the service date.',
  },
  {
    question: 'Are your prices in AED or USD?',
    answer:
      'We display prices in both AED and USD. You can toggle currencies on our Dubai Tours page.',
  },
]

const dubaiFAQs = [
  {
    question: "What's included in the 5-Day Dubai Package?",
    answer:
      'Includes hotel, transfers, desert safari, dhow cruise, city tour, Burj Khalifa, Museum of the Future & breakfast.',
  },
  {
    question: 'Can you customize a Dubai tour for my group?',
    answer:
      'Yes! We create custom itineraries for families, corporates, and special occasions.',
  },
  {
    question: 'Do you provide airport pickup and drop-off?',
    answer:
      'Yes. Included in packages and available for individual bookings.',
  },
]

const safariFAQs = [
  {
    question: 'What safari packages do you offer?',
    answer:
      'We offer 3–10 day safaris in Kenya, Tanzania, and Zanzibar, including beach & bush combos.',
  },
  {
    question: 'Do you personally inspect the safari lodges?',
    answer:
      'Yes — we only recommend places we’ve personally vetted.',
  },
  {
    question: "What's the best time to visit Kenya for a safari?",
    answer:
      'July–October (Great Migration) is peak season, but Kenya is great year-round.',
  },
]

const visaFAQs = [
  {
    question: 'Can you help with UAE visa processing?',
    answer:
      'Yes — 30 & 60-day visas, visa changes, and full support included.',
  },
  {
    question: 'What documents do I need for a UAE visa?',
    answer:
      'Passport (6 months validity), photo, application form, and sometimes police clearance.',
  },
  {
    question: 'Do you assist with visas for other countries?',
    answer:
      'Yes — UK & Schengen visa assistance available.',
  },
]

const b2bFAQs = [
  {
    question: 'How can I become a B2B partner?',
    answer:
      'Contact us with your company details and we’ll onboard you.',
  },
  {
    question: 'What are your B2B rates?',
    answer:
      'AED 200 markup per passenger for Dubai services.',
  },
  {
    question: 'Do you provide ground handling in Dubai?',
    answer:
      'Yes — full DMC services including tours, hotels, and transfers.',
  },
]

const cancelFAQs = [
  {
    question: 'What is your cancellation policy?',
    answer:
      '14+ days: full refund minus 10%. 7–13 days: 50%. Less than 7 days: no refund.',
  },
  {
    question: 'Do you offer travel insurance?',
    answer:
      'We recommend it and can guide you to providers.',
  },
]

function Section({
  title,
  items,
}: {
  title: string
  items: any[]
}) {
  return (
    <section className="space-y-6">
      {/* TITLE WITH GRADIENT BAR */}
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-6 bg-gradient-to-b from-pink-500 to-teal-500 rounded-full" />
        <h2 className="text-xl font-semibold text-slate-900">
          {title}
        </h2>
      </div>

      <FAQAccordion items={items} />
    </section>
  )
}

export default function FAQPage() {
  return (
    <div className="bg-[#fafafa]">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
        <p className="text-xs tracking-[0.3em] text-pink-600 uppercase font-medium">
          Help Center
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Frequently Asked Questions
        </h1>

        <div className="w-16 h-[3px] mx-auto bg-gradient-to-r from-pink-500 to-teal-500 rounded-full" />

        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about booking with Pinkelle Adventures.
          Can't find your answer? Chat with us on WhatsApp.
        </p>
      </section>

      {/* FAQ CONTENT */}
      <section className="max-w-4xl mx-auto px-6 pb-20 space-y-12">
        <Section title="Booking & Payments" items={bookingFAQs} />
        <Section title="Dubai Tours & Experiences" items={dubaiFAQs} />
        <Section title="Safaris & African Tours" items={safariFAQs} />
        <Section title="Visas & Documentation" items={visaFAQs} />
        <Section title="B2B & Travel Agent Partnerships" items={b2bFAQs} />
        <Section title="Cancellations & Refunds" items={cancelFAQs} />
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="rounded-2xl bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white text-center px-8 py-12 space-y-6 shadow-lg">
          <h3 className="text-2xl font-semibold">
            Still Have Questions?
          </h3>

          <p className="text-slate-300">
            Our team is ready to help. Reach out on WhatsApp and we’ll get back
            to you within a few hours.
          </p>

          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 transition px-6 py-3 rounded-full text-sm font-medium"
          >
            Chat With Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}