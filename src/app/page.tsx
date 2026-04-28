import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Scale, Timer } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: site.description,
  alternates: {
    canonical: "/"
  }
};

const highlights = [
  {
    icon: ShieldCheck,
    title: "Trusted representation",
    text: "Professional positioning for clients who want a serious, credible law firm presence."
  },
  {
    icon: Scale,
    title: "Practice-ready structure",
    text: "Separate pages for About, Services, Success Stories, and Contact keep content focused."
  },
  {
    icon: Timer,
    title: "Fast consultation flow",
    text: "Booking and contact actions stay visible across the site for stronger conversions."
  }
];

export default function HomePage() {
  return (
    <main>
      <PageHero
        eyebrow="Home"
        title="Premium legal presence built for trust, clarity, and conversions."
        description="This is the home page for the firm. The main menu now leads to separate SEO pages instead of a single long scroll page."
        primaryCtaHref="/contact"
        primaryCtaLabel="Book a Consultation"
        secondaryCtaHref="/services"
        secondaryCtaLabel="View Services"
      />

      <section className="section-padding">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="rounded-3xl bg-white p-6 shadow-soft">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-900">
                    <Icon size={22} />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-navy-900">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-[2rem] bg-navy-900 p-8 text-white md:p-10">
            <div className="grid gap-6 md:grid-cols-[1.2fr_auto] md:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gold-200">Explore the site</p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  Navigate directly to the page you need.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80">
                  Each page has its own content, its own SEO metadata, and a focused message for better search visibility.
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-4 font-semibold text-navy-900"
              >
                Start with About
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
