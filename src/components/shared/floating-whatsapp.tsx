import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingWhatsapp() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105"
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={24} />
    </a>
  );
}
