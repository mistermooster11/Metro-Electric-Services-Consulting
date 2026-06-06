import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Electrical Tips & News — Metro Electric Services | South Florida",
  description:
    "Electrical tips, guides, and news from Metro Electric Services & Consulting. Covering panel upgrades, smart home wiring, generators, and South Florida electrical codes.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Electrical Tips & News"
        subtitle="Guides, tips, and insights from the Metro Electric team — helping South Florida homeowners and businesses make smart electrical decisions."
        bgImage="/images/service-residential.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <CTAFormSection />
    </>
  );
}
