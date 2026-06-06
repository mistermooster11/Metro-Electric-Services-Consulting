import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import AboutSection from "@/components/custom/about/AboutSection";
import WhyChooseSection from "@/components/custom/why-choose/WhyChooseSection";
import FleetSection from "@/components/custom/fleet/FleetSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "About Us — Metro Electric Services | Licensed South Florida Electricians",
  description:
    "Metro Electric Services & Consulting has been South Florida's trusted electrical contractor since 2003. Licensed, insured, and bilingual — residential, commercial, and industrial.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        title="About Us"
        subtitle="South Florida's trusted electrical contractor since 2003 — residential, commercial, and industrial. Licensed, insured, and bilingual."
        bgImage="/images/about-electrician.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutSection />
      <WhyChooseSection />
      <FleetSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
