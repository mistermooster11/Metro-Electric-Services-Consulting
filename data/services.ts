export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Residential Electrical",  href: "/residential-electrical/" },
  { label: "Commercial Electrical",   href: "/commercial-electrical/" },
  { label: "Industrial Electrical",   href: "/industrial-electrical/" },
  { label: "Panel Upgrades",          href: "/panel-upgrade/" },
  { label: "Smart Home Automation",   href: "/smart-home-automation/" },
  { label: "Generator Services",      href: "/generator-services/" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Residential Electrical",
    image: "/images/service-1.png",
    href: "/residential-electrical/",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Commercial Electrical",
    image: "/images/service-2.png",
    href: "/commercial-electrical/",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Panel Upgrades",
    image: "/images/service-3.webp",
    href: "/panel-upgrade/",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Smart Home Automation",
    image: "/images/service-4.webp",
    href: "/smart-home-automation/",
    width: 535,
    height: 643,
  },
];
