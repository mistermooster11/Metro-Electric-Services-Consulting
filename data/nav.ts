export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services-page",
    children: [
      { label: "Residential Electrical",  href: "/residential-electrical" },
      { label: "Commercial Electrical",   href: "/commercial-electrical" },
      { label: "Industrial Electrical",   href: "/industrial-electrical" },
      { label: "Panel Upgrades",          href: "/panel-upgrade" },
      { label: "Smart Home Automation",   href: "/smart-home-automation" },
      { label: "Generator Services",      href: "/generator-services" },
    ],
  },
  { label: "About",   href: "/about-us" },
  { label: "FAQ",     href: "/faq" },
  { label: "Contact", href: "/contact-us" },
];

/* ── Footer links ─────────────────────────────── */
export type FooterLink = { label: string; href: string };

export const quickLinks: FooterLink[] = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about-us" },
  { label: "Services", href: "/services-page" },
  { label: "FAQ",      href: "/faq" },
  { label: "Contact",  href: "/contact-us" },
];

export const servicesLinks: FooterLink[] = [
  { label: "Residential Electrical",  href: "/residential-electrical" },
  { label: "Commercial Electrical",   href: "/commercial-electrical" },
  { label: "Industrial Electrical",   href: "/industrial-electrical" },
  { label: "Panel Upgrades",          href: "/panel-upgrade" },
  { label: "Smart Home Automation",   href: "/smart-home-automation" },
  { label: "Generator Services",      href: "/generator-services" },
];
