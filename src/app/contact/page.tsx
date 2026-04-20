import { ContactSection } from "@/components/contact-section";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pinkelle Adventures for tours, visas, and travel planning.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary border-b border-slate-200">
        <div className="section-tight text-center  text-white">
          <h1>Contact Us</h1>
          <p className="mt-4 max-w-xl mx-auto  text-white">
            Have questions or ready to plan your trip? Reach out to our team and
            we’ll assist you every step of the way.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
