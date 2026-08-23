import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";

/**
 * Fontes auto-hospedadas (variable woff2) — sem dependência do Google Fonts.
 * Melhor performance (sem DNS/handshake externo) e conformidade com a LGPD.
 */
const outfit = localFont({
  variable: "--font-outfit",
  display: "swap",
  src: [
    {
      path: "../fonts/Outfit-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
});

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    {
      path: "../fonts/Inter-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} — ${site.tagline}`,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  keywords: [
    "SMARTER by i5 stay",
    "i5 Stay",
    "Águas Claras",
    "apartamento Águas Claras",
    "apartamento inteligente Águas Claras",
    "investimento imobiliário DF",
    "i5 Incorp",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.brand,
    title: `${site.brand} — ${site.tagline}`,
    description: site.description,
    images: [{ url: "/img/facade-dusk.jpg", width: 1600, height: 899 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — ${site.tagline}`,
    description: site.description,
    images: ["/img/facade-dusk.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#04070d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
