import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaHref: string;
  primaryCtaLabel: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCtaHref,
  primaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaLabel
}: PageHeroProps) {
  return (
    <section className="bg-law-gradient text-white">
      <div className="container-shell grid min-h-[58vh] items-center py-20">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">
            {eyebrow}
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/82 md:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={primaryCtaHref}
              className="rounded-full bg-gold-500 px-7 py-4 text-center font-semibold text-navy-900 transition hover:bg-gold-400"
            >
              {primaryCtaLabel}
            </Link>
            {secondaryCtaHref && secondaryCtaLabel ? (
              <Link
                href={secondaryCtaHref}
                className="rounded-full border border-white/20 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                {secondaryCtaLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
