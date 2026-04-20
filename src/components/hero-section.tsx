"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-white">
      {/* Background Image */}
      <Image
        src="/images/hero-image.png" // 👉 placeholder
        alt="Dubai skyline at sunset with modern skyscrapers"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-sm uppercase tracking-widest text-secondary mb-4 font-extrabold">
            Dubai Visa & Tours • Worldwide Travel
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Your Global Travel Partner.
            <br />
            <span className="text-primary">Dubai Experts.</span>
          </h1>

          <p className="text-gray-200 text-lg mb-8 max-w-xl">
            Licensed Dubai travel experts with offices in UAE & Kenya. We handle
            UAE visas, Dubai tours, desert safaris, and luxury packages tailored
            just for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primaryDark transition px-6 py-3 rounded-full font-medium"
            >
              Start Your Journey
            </Link>

            <Link
              href="/dubai-tours"
              className="bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 transition px-6 py-3 rounded-full font-medium"
            >
              Explore Dubai Packages
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE (Floating Card) */}
        <div className="hidden md:flex justify-end">
          <div className="bg-white/90 backdrop-blur-lg text-gray-800 p-6 rounded-2xl shadow-xl max-w-sm">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Why travel with Pinkelle?
            </h3>

            <ul className="space-y-3 text-sm">
              <li>✔ Dual-office presence in Dubai and Nairobi</li>
              <li>✔ Warm, personalized support</li>
              <li>✔ Trusted travel planning and coordination</li>
              <li>
                ✔ Curated packages for leisure, business, and group travel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
