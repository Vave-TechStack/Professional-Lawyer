"use client";

import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { site } from "@/lib/site";

type ContactStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? "")
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setStatus("error");
      setMessage("We could not send your message right now.");
      return;
    }

    setStatus("success");
    setMessage("Your message was sent successfully.");
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-white section-padding">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Contact Us"
            title="A professional contact area with booking and email-ready structure."
            description="Use this form with your SMTP provider or Formspree to capture consultation requests."
          />
          <div className="mt-8 rounded-3xl bg-navy-50 p-6">
            <p className="font-semibold text-navy-900">Direct Contact</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{site.email}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{site.phone}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl border border-[var(--border)] bg-white p-6 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" className="rounded-2xl border border-[var(--border)] px-4 py-3" placeholder="Full Name" required />
            <input
              name="email"
              type="email"
              className="rounded-2xl border border-[var(--border)] px-4 py-3"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="phone" className="rounded-2xl border border-[var(--border)] px-4 py-3" placeholder="Phone Number" required />
            <input name="subject" className="rounded-2xl border border-[var(--border)] px-4 py-3" placeholder="Subject" required />
          </div>
          <textarea
            name="message"
            className="min-h-40 rounded-2xl border border-[var(--border)] px-4 py-3"
            placeholder="Tell us about your legal matter"
            required
          />
          <button
            className="rounded-full bg-navy-900 px-6 py-4 font-semibold text-white disabled:opacity-70"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {message ? (
            <p className={`text-sm ${status === "success" ? "text-emerald-600" : "text-red-600"}`}>{message}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
