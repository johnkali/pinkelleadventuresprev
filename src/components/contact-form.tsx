'use client'

import { useState } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-green-700">
        Thank you for reaching out. Our team will contact you shortly.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
      <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Full name" required />
      <input type="email" className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Email address" required/>
      <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Phone or WhatsApp" />
      <textarea className="w-full rounded-xl border border-slate-200 px-4 py-3 min-h-[140px]" placeholder="Tell us about your travel plans" required/>
      <button type="submit" className="rounded-full bg-brandPink px-6 py-3 text-white font-medium hover:opacity-90">
        Send inquiry
      </button>
    </form>
  )
}
