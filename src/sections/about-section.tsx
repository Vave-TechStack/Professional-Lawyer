import { SectionHeading } from "@/components/shared/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About Us"
          title="A legacy of disciplined advocacy and client trust."
          description="This section introduces the firm's history, values, and expertise in a clear, professional way."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {["Established reputation", "Deep legal expertise", "Client-first strategy"].map((item) => (
            <article key={item} className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-navy-900">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Placeholder content for a refined firm story and credibility-focused messaging.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
