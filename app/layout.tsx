import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-display",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Lace, Ankara, Shadda & Quality Fabrics`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Quality fabrics, retail & wholesale`,
    description: "Lace, ankara, shadda, atiku, cashmere, voile and aso-oke. Order in store or on WhatsApp.",
    locale: "en_NG",
  },
};

export const viewport: Viewport = {
  themeColor: "#F5EFE4",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: site.name,
  url: site.url,
  telephone: site.phoneHref,
  email: site.email,
  address: site.address,
  openingHours: "Mo-Sa 08:00-18:00",
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
