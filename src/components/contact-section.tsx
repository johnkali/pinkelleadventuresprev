"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "./ui/contact-form";

export function ContactSection() {
  return (
    <section className="section">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          {/* Offices */}
          <div className="card">
            <h3 className="mb-4">Our Offices</h3>

            <div className="space-y-6 text-sm">
              <div>
                <p className="font-semibold text-slate-900">
                  🇦🇪 Dubai Office (HQ)
                </p>
                <p className="text-slate-600">
                  M15 CityGate Building, Port Saeed, Opp Rove City Center, Near
                  DCC Dubai — UAE
                </p>
                <p className="mt-1">+971 55 488 4801</p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  🇰🇪 Kenya Branch Office
                </p>
                <p className="text-slate-600">
                  Suite 104, 1st Floor, AACC Building, Waiyaki Way, Westlands,
                  Nairobi — Kenya
                </p>
                <p className="mt-1">+254 704 320 350</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="card">
            <h3 className="mb-2">Email Us</h3>
            <p className="text-sm text-slate-600">
              Prefer email? Reach out anytime and we’ll respond promptly.
            </p>
            <p className="mt-3 font-medium text-primary">
              {siteConfig.links.email}
            </p>
          </div>

            {/* WhatsApp Card */}
          <div className="card bg-gradient-to-r from-primary to-primaryDark text-white text-center">
            <h3 className="mb-2">Prefer WhatsApp?</h3>

            <p className="text-sm mb-6 text-white/90">
              Chat with us directly for quick responses and instant assistance.
            </p>

            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              className="inline-block border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-primary transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
