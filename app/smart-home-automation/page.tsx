import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Smart Home Automation Wiring — South Florida | Metro Electric",
  description:
    "Smart home wiring and automation installation across South Florida. Nest, Lutron, Ring, Cat5/Cat6, and full house automation systems — licensed, permitted, and professionally installed.",
};

export default function SmartHomeAutomationPage() {
  return (
    <>
      <PageHeroSection
        title="Smart Home Automation"
        subtitle="Professional smart home wiring and automation systems for South Florida homes — Nest, Lutron, Ring, and full house integration."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Smart Home Automation" },
        ]}
      />
      <ServiceDetailSection
        activeService="Smart Home Automation"
        sidebarImage="/images/service-smart-home.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Smart Home & House Automation"
        intro={[
          "Smart home systems require more than plugging devices in — they need proper low-voltage wiring, dedicated circuits, and a licensed electrician who understands how these systems work together. Metro Electric installs and wires complete home automation setups across South Florida.",
          "We work with Nest, Lutron, Ring, and full Cat5/Cat6 structured wiring for seamless integration of lighting, security, climate, and entertainment systems throughout your home.",
        ]}
        whatWeDo={[
          "Nest thermostat and smart climate control installation",
          "Lutron smart lighting and dimmer systems",
          "Ring doorbell and security camera wiring",
          "Cat5 & Cat6 structured cabling for data and AV",
          "Whole-home automation system wiring",
          "Low-voltage installation and configuration",
          "WiFi, USB, TV, and high-speed data outlet installation",
          "Dedicated circuit installation for automation hubs and devices",
        ]}
        whyChooseUs={[
          "Experienced with all major smart home platforms",
          "Licensed low-voltage and electrical work in one team",
          "Clean wiring — no exposed runs, no shortcuts",
          "Serving South Florida smart home projects since 2003",
          "Bilingual team — English and Spanish",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
