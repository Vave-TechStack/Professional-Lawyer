"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gold-500/15 bg-navy-900 text-white shadow-[0_12px_40px_rgba(16,37,59,0.18)]">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="#home" className="inline-flex items-center gap-3 text-lg font-semibold tracking-wide">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-sm font-bold text-navy-900">
            PL
          </span>
          <span>{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {site.menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition hover:text-gold-200 ${
                pathname === item.href ? "text-gold-200" : "text-white/90"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-navy-900 transition hover:bg-gold-400"
          >
            Book a Consultation
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-navy-900 md:hidden">
          <div className="container-shell flex flex-col gap-3 py-4">
            {site.menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-3 py-2 text-sm hover:bg-white/5 ${
                  pathname === item.href ? "bg-white/5 text-gold-200" : "text-white/90"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-semibold text-navy-900"
              onClick={() => setOpen(false)}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
