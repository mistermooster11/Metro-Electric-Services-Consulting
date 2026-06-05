import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Metro Electric Services & Consulting — Licensed Electricians | South Florida",
    template: "%s | Metro Electric Services",
  },
  description:
    "Licensed electrical contractors serving Palm Beach, Broward & Miami-Dade since 2003. Residential, commercial, and industrial electrical work — panels, smart home, generators, and more.",
  alternates: {
    canonical: "https://[TODO: production-domain]",
  },
  openGraph: {
    type: "website",
    siteName: "Metro Electric Services & Consulting",
    title: "Metro Electric Services & Consulting — Licensed Electricians | South Florida",
    description:
      "Licensed electrical contractors serving Palm Beach, Broward & Miami-Dade since 2003. Residential, commercial, and industrial electrical work — panels, smart home, generators, and more.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Metro Electric Services & Consulting" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "Metro Electric Services & Consulting",
  "telephone": "+15613662200",
  "url": "https://[TODO: production-domain]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1750 Osceola Drive, Suite #4",
    "addressLocality": "West Palm Beach",
    "addressRegion": "FL",
    "postalCode": "33409",
    "addressCountry": "US",
  },
  "areaServed": [
    { "@type": "County", "name": "Palm Beach County" },
    { "@type": "County", "name": "Broward County" },
    { "@type": "County", "name": "Miami-Dade County" },
  ],
  "openingHours": "[TODO: Mo-Fr 08:00-16:30 — confirm with client]",
  "priceRange": "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <PageTransition />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
