import type { Metadata } from "next";
import { Award, Building2, Users } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { AboutSection } from "@/sections/about-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the firm's legacy, expertise, and client-first approach.",
  alternates: {
    canonical: "/about"
  }
};

const values = [
  {
    icon: Building2,
    title: "Established firm identity",
    text: "A credible brand story that feels trustworthy and polished."
  },
  {
    icon: Award,
    title: "Experienced counsel",
    text: "Clear presentation of legal expertise across core practice areas."
  },
  {
    icon: Users,
    title: "Client-centered service",
    text: "Reassurance, responsiveness, and confidence in every interaction."
  }
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="A legacy of disciplined advocacy and trusted client relationships."
        description={`${site.name} is built to present the firm's story with authority and clarity for clients and search engines alike.`}
        primaryCtaHref="/contact"
        primaryCtaLabel="Book a Consultation"
        secondaryCtaHref="/services"
        secondaryCtaLabel="Explore Services"
      />

      <AboutSection />

      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article key={value.title} className="rounded-3xl border border-[var(--border)] p-6 shadow-soft">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-50 text-gold-700">
                    <Icon size={22} />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-navy-900">{value.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{value.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
