'use client'

import { createContext, useContext, useState } from 'react'

type Currency = 'AED' | 'USD'

const CurrencyContext = createContext<{
  currency: Currency
  setCurrency: (c: Currency) => void
}>({
  currency: 'AED',
  setCurrency: () => {},
})

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('AED')

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  return useContext(CurrencyContext)
}