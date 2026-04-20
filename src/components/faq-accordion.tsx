'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question} className="rounded-2xl border border-slate-200 bg-white">
            <button
              className="flex w-full items-center justify-between px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-semibold text-slate-900">{item.question}</span>
              <ChevronDown className={`h-5 w-5 transition ${isOpen ? 'rotate-180' : ''}`}/>
            </button>
            {isOpen && <div className="px-6 pb-5 text-slate-600">{item.answer}</div>}
          </div>
        )
      })}
    </div>
  )
}
