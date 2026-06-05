import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Generator Installation & Backup Power — South Florida | Metro Electric",
  description:
    "Licensed generator installation and backup power services in South Florida. Home generators, commercial ATS hookups, and automatic transfer switch installation — permitted and inspected.",
};

export default function GeneratorServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Generator Services"
        subtitle="Home and commercial generator installation, hookup, and backup power systems across Palm Beach, Broward & Miami-Dade."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Generator Services" },
        ]}
      />
      <ServiceDetailSection
        activeService="Generator Services"
        sidebarImage="/images/service-1.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Generator Installation & Backup Power"
        intro={[
          "South Florida's storm seasons make reliable backup power essential for homes and businesses alike. Metro Electric installs and hooks up home standby generators, portable generator transfer switches, and full commercial backup power systems including ATS (Automatic Transfer Switch) equipment.",
          "Every generator installation includes electrical design, permit processing, and final inspection — so your system is safe, code-compliant, and ready when you need it.",
        ]}
        whatWeDo={[
          "Home generator service and standby generator installation",
          "Automatic Transfer Switch (ATS) installation and hookup",
          "Commercial backup power system design and installation",
          "Portable generator transfer switch installation",
          "Generator electrical connections and wiring",
          "City permit processing and inspection",
          "Electrical load calculations for generator sizing",
        ]}
        whyChooseUs={[
          "Licensed and insured for generator and backup power installations",
          "In-house permit handling — every qualifying install is fully permitted",
          "Commercial and residential generator experience",
          "Trusted by South Florida businesses and homeowners since 2003",
          "Bilingual team — English and Spanish",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
