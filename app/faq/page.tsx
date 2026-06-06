import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import FAQSection from "@/components/custom/faq/FAQSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "FAQ — Metro Electric Services | Electrical Questions Answered",
  description:
    "Answers to the most common questions about Metro Electric's residential, commercial, and industrial electrical services across South Florida.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeroSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our electrical services, process, and service area."
        bgImage="/images/equipment-3.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <FAQSection />
      {/* <NeedServicesSection /> */}
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
