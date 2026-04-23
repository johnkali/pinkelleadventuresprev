"use client";

import { tours } from "@/lib/data/dubai-tours";
import { useCurrency } from "@/lib/currency-context";

export function DubaiToursGrid() {
  const { currency } = useCurrency();
  return (
    <section className="section bg-white">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour, i) => (
          <div
            key={i}
            className="tour-card bg-white rounded-2xl overflow-hidden border"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-52 object-cover"
              />

              {/* TAG */}
              <span className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                {tour.tag}
              </span>

              {/* DURATION */}
              <span className="absolute top-4 right-4 bg-white/20 backdrop-blur text-white text-xs px-3 py-1 rounded-full">
                {tour.duration}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="mb-2">{tour.title}</h3>

              {/* PRICE */}
              <p className="mb-3">
                {currency === "AED" ? (
                  <>
                    <span className="text-primary font-bold">
                      AED {tour.priceAED}
                    </span>
                    <span className="text-slate-500 text-sm">
                      {" "}
                      / ${tour.priceUSD} per person
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-[#489a94] font-bold">
                      ${tour.priceUSD}
                    </span>
                    <span className="text-slate-500 text-sm">
                      {" "}
                      / AED {tour.priceAED} per person
                    </span>
                  </>
                )}
              </p>

              {/* INCLUDES */}
              <p className="text-xs font-semibold mb-2">INCLUDES:</p>

              <div className="grid grid-cols-2 gap-2 text-sm text-[#489a94] mb-6">
                {tour.includes.map((item, idx) => (
                  <span key={idx}>{item}</span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#"
                className="block text-center bg-primary text-white py-3 rounded-full font-medium hover:opacity-90 transition"
              >
                Book Now on WhatsApp →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
