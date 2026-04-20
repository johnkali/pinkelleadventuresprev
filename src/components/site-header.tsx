'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/dubai-tours', label: 'Dubai Tours' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/services', label: 'Services' },
  { href: '/activities', label: 'Activities' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <><header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-brandPink" >
        <img className="h-[4rem]" src="/images/logo.png" alt="Pinkelle Adventures Logo" />
      </Link>


      <nav className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-brandPink" >
          {item.label}
      </Link>
      ))}
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
                className="py-3 text-sm font-medium text-slate-700 hover:text-brandPink"
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