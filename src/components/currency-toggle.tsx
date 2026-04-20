'use client'

type Currency = 'AED' | 'USD'

interface CurrencyToggleProps {
  currency: Currency
  setCurrency: (currency: Currency) => void
}

export function CurrencyToggle({ currency, setCurrency }: CurrencyToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-slate-200 p-1 bg-white">
      {(['AED', 'USD'] as Currency[]).map((item) => (
        <button
          key={item}
          onClick={() => setCurrency(item)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            currency === item ? 'bg-brandPink text-white' : 'text-slate-600'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
