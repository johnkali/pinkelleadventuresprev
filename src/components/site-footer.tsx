import Link from "next/link";

export function SiteFooter() {
  return (
    <>
      <footer className="mt-16 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-brandPink">
              Pinkelle Adventures
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Let’s create memories together. Your adventure, our expertise.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/dubai-tours">Dubai Tours</Link>
              </li>
              <li>
                <Link href="/destinations">Destinations</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <div className="mt-4 space-y-4 text-sm text-slate-300">
              <p>Dubai: M15 CityGate Building, Port Saeed, Dubai</p>
              <p>Kenya: Suite 104, AACC Building, Westlands, Nairobi</p>
              <p>+971 55 488 4801</p>
              <p>info@pinkelleadventures.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
