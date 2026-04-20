'use client'

import { useState } from 'react'

export function ContactForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // TODO: connect to backend or email service

    setTimeout(() => {
      setLoading(false)
      alert('Message sent successfully!')
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6">

      <h3>Send Us a Message</h3>

      {/* Name */}
      <div>
        <label className="block text-sm mb-1">Full Name</label>
        <input
          type="text"
          required
          className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm mb-1">Email Address</label>
        <input
          type="email"
          required
          className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm mb-1">Phone Number</label>
        <input
          type="tel"
          className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          rows={4}
          required
          className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

    </form>
  )
}