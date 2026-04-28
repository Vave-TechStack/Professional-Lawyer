import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BookingModal } from "@/components/shared/booking-modal";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsapp } from "@/components/shared/floating-whatsapp";
import { Header } from "@/components/layout/header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: {
    default: `${site.name} | Trusted Legal Services`,
    template: "%s | Professional Law Firm"
  },
  description:
    "A modern, responsive, and SEO-friendly website for a professional law firm.",
  keywords: ["law firm", "legal services", "corporate law", "family law", "criminal defense"],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: site.name,
    description: "Trusted legal services with a modern digital presence.",
    type: "website",
    url: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsapp />
        <BookingModal />
      </body>
    </html>
  );
}
