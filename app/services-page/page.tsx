import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServicesSection from "@/components/custom/services/ServicesSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Our Services — Metro Electric | South Florida Electrical Contractors",
  description:
    "Explore Metro Electric's full range of electrical services: residential, commercial, industrial, panel upgrades, smart home, and generator installation across South Florida.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Our Services"
        subtitle="Licensed electrical services for homes, businesses, and industrial facilities across Palm Beach, Broward & Miami-Dade since 2003."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
