import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Industrial Electrical Services — South Florida | Metro Electric",
  description:
    "Industrial electrical contractors in South Florida. Control panels, industrial pump installations, gas station and car wash electrical, and facility improvements.",
};

export default function IndustrialElectricalPage() {
  return (
    <>
      <PageHeroSection
        title="Industrial Electrical"
        subtitle="Industrial electrical work across South Florida — control panels, pump installations, gas stations, car washes, and facility build-outs."
        bgImage="/images/equipment-1.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Industrial Electrical" },
        ]}
      />
      <ServiceDetailSection
        activeService="Industrial Electrical"
        sidebarImage="/images/service-panel.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Industrial Electrical Services"
        intro={[
          "Metro Electric brings licensed industrial electrical expertise to facilities across South Florida. We handle complex installations including control panels, industrial pump systems, gas station electrical, and car wash wiring — all with full permit processing and code compliance.",
          "Industrial projects require precision, experience, and coordination. Metro Electric has been delivering that for South Florida industrial clients since 2003.",
        ]}
        whatWeDo={[
          "New construction, improvements, and additions for industrial facilities",
          "Gas station electrical — installation and repairs",
          "Car wash electrical — full wiring and systems",
          "Control panel design and installation",
          "Industrial pump installations",
          "Facility electrical upgrades and system improvements",
          "Permit processing and electrical calculations",
        ]}
        whyChooseUs={[
          "Experienced with complex industrial electrical systems",
          "Licensed and insured for industrial scope work",
          "In-house permit handling and code compliance",
          "Serving South Florida industrial facilities since 2003",
          "Bilingual team — English and Spanish",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
