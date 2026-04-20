'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/dubai-tours', label: 'Dubai Tours' },
  { href: '/destinations', label: 'Other Destinations' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <><header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-medium text-slate-700 hover:text-primary transition" >
        <img className="h-[4rem]" src="/images/logo.png" alt="Pinkelle Adventures Logo" />
      </Link>


      <nav className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-primary transition" >
          {item.label}
      </Link>
      ))}
      <Link
  href="/contact"
  className="ml-4 bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primaryDark transition"
>
  Plan Your Trip
</Link>
    </nav><button
      className="md:hidden"
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
    >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-primary transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
    </>
  )
}