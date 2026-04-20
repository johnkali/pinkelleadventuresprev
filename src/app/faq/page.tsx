import { FAQAccordion } from '@/components/faq-accordion'

const faqs = [
  {
    question: 'Do you help with UAE visit visas?',
    answer: 'Yes, we assist with selected UAE visit visa options and guide clients through the process clearly and professionally.',
  },
  {
    question: 'Can you arrange custom Dubai packages?',
    answer: 'Yes, we create custom packages based on your budget, travel goals, and preferred experiences.',
  },
  {
    question: 'Do you support group travel?',
    answer: 'Yes, we support group travel, corporate trips, family travel, and curated safari experiences.',
  },
]

export default function FAQPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold text-brandPink">Frequently Asked Questions</h1>
      <p className="mt-4 text-slate-600">Helpful answers to common questions about our tours, visas, safaris, and travel support.</p>
      <div className="mt-10">
        <FAQAccordion items={faqs}/>
      </div>
    </section>
  )
}