import { Facebook, Linkedin, Twitter } from "lucide-react";
import { site } from "@/lib/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-navy-900">{site.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">
            {site.description}
          </p>
        </div>

        <div>
          <p className="font-semibold text-navy-900">Pages</p>
          <div className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {site.menu.map((item) => (
              <Link key={item.href} href={item.href} className="block transition hover:text-navy-900">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-navy-900">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            <p>{site.email}</p>
            <p>{site.phone}</p>
            <p>{site.address}</p>
          </div>
        </div>

        <div>
          <p className="font-semibold text-navy-900">Social</p>
          <div className="mt-3 flex items-center gap-3">
            <a href={site.socials.linkedin} className="rounded-full border border-[var(--border)] p-3 text-navy-800">
              <Linkedin size={18} />
            </a>
            <a href={site.socials.twitter} className="rounded-full border border-[var(--border)] p-3 text-navy-800">
              <Twitter size={18} />
            </a>
            <a href={site.socials.facebook} className="rounded-full border border-[var(--border)] p-3 text-navy-800">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
