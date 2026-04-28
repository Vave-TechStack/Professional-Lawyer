"use client";

import { CalendarDays, Loader2, X } from "lucide-react";
import { FormEvent, useState } from "react";

type BookingStatus = "idle" | "loading" | "success" | "error";

export function BookingModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<BookingStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      date: String(formData.get("date") ?? ""),
      time: String(formData.get("time") ?? ""),
      notes: String(formData.get("notes") ?? "")
    };

    const response = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setStatus("error");
      setMessage("We could not submit your booking request right now.");
      return;
    }

    setStatus("success");
    setMessage("Your consultation request was submitted successfully.");
    event.currentTarget.reset();
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 left-5 z-40 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-soft"
      >
        <span className="inline-flex items-center gap-2">
          <CalendarDays size={16} />
          Book a Consultation
        </span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xl font-semibold text-navy-900">Appointment Booking</p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Select a preferred date and time for your consultation.
                </p>
              </div>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)]"
                onClick={() => setOpen(false)}
                aria-label="Close booking modal"
              >
                <X size={18} />
              </button>
            </div>

            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  className="rounded-2xl border border-[var(--border)] px-4 py-3"
                  placeholder="Full Name"
                  required
                />
                <input
                  name="email"
                  type="email"
                  className="rounded-2xl border border-[var(--border)] px-4 py-3"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="date" className="rounded-2xl border border-[var(--border)] px-4 py-3" type="date" required />
                <input name="time" className="rounded-2xl border border-[var(--border)] px-4 py-3" type="time" required />
              </div>
              <textarea
                name="notes"
                className="min-h-28 rounded-2xl border border-[var(--border)] px-4 py-3"
                placeholder="Briefly describe your legal issue"
                required
              />
              <button
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 font-semibold text-navy-900"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : null}
                Submit Request
              </button>
              {message ? (
                <p className={`text-sm ${status === "success" ? "text-emerald-600" : "text-red-600"}`}>{message}</p>
              ) : null}
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
