import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { ContactSection } from "@/sections/contact-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the firm to book a consultation by phone, email, or the online form.",
  alternates: {
    canonical: "/contact"
  }
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: site.phone
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email
  },
  {
    icon: MapPin,
    label: "Office",
    value: site.address
  }
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Book a consultation through the form, email, or direct phone contact."
        description="The contact page keeps the conversion path simple and clear while staying SEO-friendly."
        primaryCtaHref="/contact"
        primaryCtaLabel="Send a Message"
        secondaryCtaHref="/services"
        secondaryCtaLabel="See Services"
      />

      <ContactSection />

      <section className="section-padding">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          {contactDetails.map((detail) => {
            const Icon = detail.icon;

            return (
              <article key={detail.label} className="rounded-3xl bg-white p-6 shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-50 text-gold-700">
                  <Icon size={22} />
                </div>
                <p className="mt-5 text-sm uppercase tracking-[0.2em] text-gold-700">{detail.label}</p>
                <p className="mt-2 text-lg font-semibold text-navy-900">{detail.value}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
