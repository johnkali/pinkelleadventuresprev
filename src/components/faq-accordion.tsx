'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i

        return (
          <div
            key={i}
            className={`rounded-xl border transition-all duration-300 ${
              isOpen
                ? 'border-pink-500 bg-pink-50'
                : 'border-slate-200 bg-white'
            }`}
          >
            {/* QUESTION */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className={`w-full flex items-center justify-between px-6 py-5 text-left transition ${
                isOpen ? 'text-pink-600' : 'text-slate-800'
              }`}
            >
              <span className="font-semibold text-sm md:text-base">
                {item.question}
              </span>

              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  isOpen ? 'rotate-180 text-pink-600' : 'text-slate-400'
                }`}
              />
            </button>

            {/* ANSWER */}
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'
              }`}
            >
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}