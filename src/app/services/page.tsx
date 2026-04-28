import type { Metadata } from "next";
import { BadgeCheck, BriefcaseBusiness, Gavel } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { ServicesSection } from "@/sections/services-section";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the firm's practice areas, including corporate, family, and criminal law.",
  alternates: {
    canonical: "/services"
  }
};

const processSteps = [
  {
    icon: BriefcaseBusiness,
    title: "Initial consultation",
    text: "We listen to the matter and understand the legal goal."
  },
  {
    icon: Gavel,
    title: "Strategy and execution",
    text: "Clear legal direction and confident representation."
  },
  {
    icon: BadgeCheck,
    title: "Resolution and follow-through",
    text: "Professional closure with client communication throughout."
  }
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Focused legal practice areas presented with clarity and authority."
        description="Each service gets its own space, improving both readability and SEO relevance for the firm."
        primaryCtaHref="/contact"
        primaryCtaLabel="Book a Consultation"
        secondaryCtaHref="/success-stories"
        secondaryCtaLabel="View Success Stories"
      />

      <ServicesSection />

      <section className="section-padding">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article key={step.title} className="rounded-3xl bg-white p-6 shadow-soft">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-900">
                    <Icon size={22} />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-navy-900">{step.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
