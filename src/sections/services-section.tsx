import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Services"
          title="Practice areas presented in a clean and persuasive grid."
          description="Each service card is structured to support SEO and make the firm's expertise easy to scan on mobile and desktop."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service} className="rounded-3xl border border-[var(--border)] p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <h3 className="text-lg font-semibold text-navy-900">{service}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Brief service summary with a premium, confidence-building tone.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
