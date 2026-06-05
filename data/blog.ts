export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/do-i-need-a-200-amp-panel-upgrade/",
    image: "/images/blog-3.png",
    date: "05",
    monthYear: "Jun '26",
    category: "Electrical Tips",
    categoryHref: "/category/electrical-tips/",
    title: "Do I Need a 200-Amp Panel Upgrade? A South Florida Homeowner's Guide",
    excerpt:
      "Breakers tripping, lights flickering, or no room for new circuits? Here's how to know when your panel has reached its limit — and what an upgrade involves.",
  },
  {
    slug: "/blog/smart-home-wiring-guide/",
    image: "/images/blog-2.png",
    date: "20",
    monthYear: "May '26",
    category: "Smart Home",
    categoryHref: "/category/smart-home/",
    title: "Nest, Lutron & Ring: What to Expect When Wiring a Smart Home in South Florida",
    excerpt:
      "Smart home systems require more than plugging things in. This guide covers the low-voltage wiring, dedicated circuits, and planning that make an automation install work cleanly.",
  },
];
