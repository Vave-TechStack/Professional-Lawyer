"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/lib/site";

export function SuccessStoriesSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    <section id="success-stories" className="section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Success Stories"
          title="Client outcomes presented as a clean testimonial slider."
          description="A lightweight, mobile-friendly carousel is now in place for showcasing wins and client confidence."
        />

        <div className="mt-10 rounded-[2rem] bg-navy-900 p-6 text-white shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <figure>
              <blockquote className="max-w-3xl text-xl leading-8 text-white/90 md:text-2xl">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold">{active.name}</p>
                <p className="text-sm text-gold-200">{active.role}</p>
              </figcaption>
            </figure>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => setIndex((current) => (current + 1) % testimonials.length)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="mt-8 flex gap-2">
            {testimonials.map((item, slideIndex) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(slideIndex)}
                className={`h-2.5 rounded-full transition-all ${
                  slideIndex === index ? "w-10 bg-gold-400" : "w-2.5 bg-white/30"
                }`}
                aria-label={`Go to testimonial ${slideIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
