import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — Metro Electric Services | Get a Free Estimate",
  description:
    "Contact Metro Electric Services & Consulting for residential, commercial, and industrial electrical work across South Florida. Call (561) 366-2200 or request a free estimate online.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Request a free estimate for any electrical project — residential, commercial, or industrial. Serving Palm Beach, Broward & Miami-Dade."
        bgImage="/images/contact-us.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        <iframe
          title="Metro Electric Services Location — West Palm Beach, FL"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.3!2d-80.0932!3d26.7153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d8b0c0000001%3A0x0!2s1750+Osceola+Dr+%234%2C+West+Palm+Beach%2C+FL+33409!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
