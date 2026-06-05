export type Review = {
  name: string;
  rating: number;
  text: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    name: "Carlos M.",
    rating: 5,
    text: "Metro Electric upgraded our panel at our West Palm Beach home. On time, professional, and done in one day. Already recommended them to two neighbors.",
    avatar: "https://ui-avatars.com/api/?name=Carlos+M&background=1a3a5c&color=fff&size=40",
  },
  {
    name: "Sandra R.",
    rating: 5,
    text: "We've used Metro Electric for our restaurant's electrical needs for years. LED upgrades, emergency repairs, generator hookup — they handle it all. Trusted and responsive.",
    avatar: "https://ui-avatars.com/api/?name=Sandra+R&background=1a3a5c&color=fff&size=40",
  },
  {
    name: "David T.",
    rating: 5,
    text: "Had them wire our smart home — Nest, Lutron, Ring throughout the house. Clean work, no mess, and they walked us through everything before leaving. Genuinely tech-forward.",
    avatar: "https://ui-avatars.com/api/?name=David+T&background=1a3a5c&color=fff&size=40",
  },
  {
    name: "M.V.",
    rating: 5,
    text: "Called for a generator hookup at our Broward commercial property. Fast response, fair pricing, passed inspection first try. Will use for all our electrical work going forward.",
    avatar: "https://ui-avatars.com/api/?name=MV&background=1a3a5c&color=fff&size=40",
  },
  {
    name: "Patricia L.",
    rating: 5,
    text: "As a realtor, I send all my clients to Metro Electric for safety checks before closings. Thorough, professional, and always available. My go-to referral in South Florida.",
    avatar: "https://ui-avatars.com/api/?name=Patricia+L&background=1a3a5c&color=fff&size=40",
  },
  {
    name: "R.G.",
    rating: 5,
    text: "Exclusive electrical contractor for two of our Palm Beach commercial buildings. They show up when they say they will, the work is done right, and pricing is straightforward.",
    avatar: "https://ui-avatars.com/api/?name=RG&background=1a3a5c&color=fff&size=40",
  },
];
