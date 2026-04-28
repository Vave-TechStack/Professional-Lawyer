import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SuccessStoriesSection } from "@/sections/success-stories-section";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Read client testimonials and success stories that build credibility and trust.",
  alternates: {
    canonical: "/success-stories"
  }
};

export default function SuccessStoriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Success Stories"
        title="Trust-building outcomes and client testimonials."
        description="A dedicated page for social proof, helping visitors see the firm's experience and results."
        primaryCtaHref="/contact"
        primaryCtaLabel="Book a Consultation"
        secondaryCtaHref="/about"
        secondaryCtaLabel="Learn About Us"
      />

      <SuccessStoriesSection />
    </main>
  );
}
