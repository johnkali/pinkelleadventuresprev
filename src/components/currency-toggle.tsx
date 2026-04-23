'use client'

import { useCurrency } from '@/lib/currency-context'

export function CurrencyToggle() {
  const { currency, setCurrency } = useCurrency()

  return (
    <div className="flex justify-center gap-3">

      {/* AED */}
      <button
        onClick={() => setCurrency('AED')}
        className={`px-5 py-2 rounded-full text-sm font-medium transition
          ${
            currency === 'AED'
              ? 'bg-primary text-white'
              : 'bg-slate-200 text-slate-700'
          }`}
      >
        AED (د.إ)
      </button>

      {/* USD */}
      <button
        onClick={() => setCurrency('USD')}
        className={`px-5 py-2 rounded-full text-sm font-medium transition
          ${
            currency === 'USD'
              ? 'bg-[#489a94] text-white'
              : 'bg-slate-200 text-slate-700'
          }`}
      >
        USD ($)
      </button>

    </div>
  )
}