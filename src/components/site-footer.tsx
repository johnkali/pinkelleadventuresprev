import Link from 'next/link'
import { siteConfig } from '@/lib/site'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* COLUMN 1 — BRAND */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">
            Pinkelle Adventures
          </h3>
          <p className="text-sm text-slate-300">
            Dubai tours, UAE visas, and global travel experiences tailored for you.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-primary"><Facebook size={18} /></a>
            <a href="#" className="hover:text-primary"><Instagram size={18} /></a>
            <a href="#" className="hover:text-primary"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* COLUMN 2 — NAV LINKS */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dubai-tours">Dubai Tours</Link></li>
            <li><Link href="/destinations">Other Destinations</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 — SERVICES */}
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>UAE Visit Visas</li>
            <li>Dubai Tour Packages</li>
            <li>Hotel Bookings</li>
            <li>Airport Transfers</li>
            <li>Desert Safari</li>
            <li>Worldwide Holidays</li>
            <li>Medical Tourism</li>
            <li>Air Tickets</li>
          </ul>
        </div>

        {/* COLUMN 4 — CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Get in Touch</h4>

          <div className="text-sm text-slate-300 space-y-4">

            <div>
              <p className="font-semibold text-white">🇦🇪 Dubai Office (HQ)</p>
              <p>
                M15 CityGate Building, Port Saeed, Opp Rove City Center, Near DCC Dubai — UAE
              </p>
              <p className="mt-1">+971 55 488 4801</p>
            </div>

            <div>
              <p className="font-semibold text-white">🇰🇪 Kenya Branch Office</p>
              <p>
                Suite 104, 1st Floor, AACC Building, Waiyaki Way, Westlands, Nairobi — Kenya
              </p>
              <p className="mt-1">+254 704 320 350</p>
            </div>

            <div>
              <p>{siteConfig.links.email}</p>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">

          <p>
            © {new Date().getFullYear()} Pinkelle Adventures. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/faq">FAQs</Link>
          </div>

        </div>
      </div>

    </footer>
  )
}