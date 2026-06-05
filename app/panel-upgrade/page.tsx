import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Electrical Panel Upgrades — South Florida | Metro Electric",
  description:
    "Licensed panel upgrade electricians serving Palm Beach, Broward & Miami-Dade. 200-amp upgrades, panel replacements, and load service increases — permitted and inspected.",
};

export default function PanelUpgradePage() {
  return (
    <>
      <PageHeroSection
        title="Panel Upgrades"
        subtitle="Electrical panel upgrades and replacements for homes and businesses across South Florida — permitted, inspected, done right."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Panel Upgrades" },
        ]}
      />
      <ServiceDetailSection
        activeService="Panel Upgrades"
        sidebarImage="/images/service-3.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Electrical Panel Upgrades & Replacements"
        intro={[
          "An outdated electrical panel can't support modern appliances, EV chargers, smart home systems, or added circuits. Metro Electric upgrades residential and commercial panels to handle today's electrical demands — safely, legally, and with full permit processing included.",
          "Whether you need a 200-amp service upgrade, a panel replacement, or a commercial load service increase, our licensed team handles it from estimate to final inspection sign-off.",
        ]}
        whatWeDo={[
          "200-amp service upgrades for homes and commercial properties",
          "Panel replacements for outdated or unsafe equipment",
          "Commercial load service upgrades",
          "Circuit additions for new appliances or EV chargers",
          "City permit processing and final inspection",
          "Electrical calculations and design documentation",
        ]}
        whyChooseUs={[
          "Licensed and insured — residential and commercial panels",
          "In-house permit handling and city approval",
          "Inspections passed first time, every time",
          "Trusted by South Florida homeowners and GCs since 2003",
          "Bilingual team — English and Spanish",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
