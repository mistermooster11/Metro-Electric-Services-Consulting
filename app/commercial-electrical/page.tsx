import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Commercial Electrical Services — South Florida | Metro Electric",
  description:
    "Licensed commercial electricians for hotels, restaurants, medical centers, and retail in Palm Beach, Broward & Miami-Dade. LED upgrades, backup power, site lighting, and full build-outs.",
};

export default function CommercialElectricalPage() {
  return (
    <>
      <PageHeroSection
        title="Commercial Electrical"
        subtitle="Full-service commercial electrical work for South Florida businesses — new construction, LED retrofits, backup power, and site lighting."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Commercial Electrical" },
        ]}
      />
      <ServiceDetailSection
        activeService="Commercial Electrical"
        sidebarImage="/images/service-2.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Commercial Electrical Services"
        intro={[
          "Metro Electric is the exclusive electrical contractor for many of South Florida's top general contractors and developers. We handle full commercial electrical projects — from ground-up new construction to targeted upgrades — for hotels, medical and dental centers, restaurants, supermarkets, and retail properties.",
          "Every commercial project includes in-house permit coordination, code-compliant installation, and a team that shows up on schedule. We've built our reputation on trust, and it shows.",
        ]}
        whatWeDo={[
          "Commercial new construction and renovations",
          "LED lighting system upgrades and load service upgrades",
          "Site lighting and parking lot installations and repairs",
          "Backup power systems — ATS (Automatic Transfer Switch) and generator hookup",
          "Hotels — full electrical installation and systems coordination",
          "Medical and dental centers",
          "Restaurants and supermarkets",
          "Permit processing and electrical design for commercial projects",
        ]}
        whyChooseUs={[
          "Exclusive contractor for top South Florida GCs and developers",
          "Licensed and insured for all commercial electrical work",
          "In-house permit handling and code compliance",
          "20+ years of commercial project experience across South Florida",
          "Bilingual team — English and Spanish",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
