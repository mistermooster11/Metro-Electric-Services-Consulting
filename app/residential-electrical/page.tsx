import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Residential Electrical Services — South Florida | Metro Electric",
  description:
    "Licensed residential electricians serving Palm Beach, Broward & Miami-Dade. Panel upgrades, smart home wiring, new construction, landscape lighting, and more since 2003.",
};

export default function ResidentialElectricalPage() {
  return (
    <>
      <PageHeroSection
        title="Residential Electrical"
        subtitle="Licensed electrical work for homes across South Florida — new construction, renovations, panel upgrades, smart home, and more."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Residential Electrical" },
        ]}
      />
      <ServiceDetailSection
        activeService="Residential Electrical"
        sidebarImage="/images/service-1.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Residential Electrical Services"
        intro={[
          "Metro Electric Services & Consulting has been the trusted residential electrician for South Florida homeowners since 2003. From new construction wiring and panel upgrades to smart home automation and landscape lighting, we handle every residential electrical need with licensed professionals and permit handling included.",
          "We serve homeowners across Palm Beach, Broward, and Miami-Dade with upfront estimates, clean workmanship, and code-compliant installations — every time.",
        ]}
        whatWeDo={[
          "New construction and renovation wiring (custom and tract homes)",
          "Electrical panel upgrades and updates",
          "Spa, pool & hot tub wiring",
          "Fixture upgrades and chandeliers (all sizes)",
          "Landscape lighting design and installation",
          "Smart home automation — Nest, Lutron, Ring, Cat5/Cat6",
          "Electrical troubleshooting and repairs",
          "Data & low-voltage installations (WiFi, USB, TV, high-speed data)",
          "Electrical home safety checks for realtors and new buyers",
          "Design, electrical calculations, and city permit processing",
        ]}
        whyChooseUs={[
          "Licensed and insured residential electricians",
          "In-house permit handling and city approval",
          "Trusted by South Florida homeowners and realtors since 2003",
          "Bilingual team — English and Spanish",
          "Fast response backed by technology",
          "$99 discount on your first service (min. $300 — restrictions apply)",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
