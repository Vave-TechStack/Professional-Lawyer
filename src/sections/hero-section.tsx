import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="bg-law-gradient text-white">
      <div className="container-shell grid min-h-[78vh] items-center gap-12 py-20 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">
            Trusted legal guidance for individuals and businesses
          </p>
          <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
            Strategic legal counsel with the presence of a premium law firm.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/82 md:text-lg">
            Build confidence with a polished, authoritative website designed to convert visitors into consultation requests.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="rounded-full bg-gold-500 px-7 py-4 text-center font-semibold text-navy-900 transition hover:bg-gold-400"
            >
              Book a Consultation
            </Link>
            <Link
              href="#services"
              className="rounded-full border border-white/20 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-soft backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            {["Trusted Counsel", "Clear Communication", "Fast Response", "Client Focus"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="font-medium">{item}</p>
                <p className="mt-2 text-sm text-white/75">
                  Premium presentation for a trustworthy legal brand.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
