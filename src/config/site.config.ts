export const siteConfig = {
  business: {
    name: "Prestige Lawn",
    phone: "(863) 555-0190",
    email: "hello@prestigelawn.com",
    address: "Polk County, FL",
    hours: "Mon–Sat, 7am–6pm",
    serviceAreas: ["Lakeland", "Winter Haven", "Haines City", "Davenport"],
  },
  hero: {
    type: "video" as "video" | "image",
    src: "/assets/hero-video.mp4",
    headline: "Your Lawn.",
    headlineAccent: "Perfected.",
    subheading:
      "Premium lawn care and landscaping for homeowners who refuse to settle for average.",
  },
  theme: {
    accentColor: "#C9A84C",
    grassTexture: "/assets/grass-texture.jpg",
    concreteTexture: "/assets/concrete-texture.jpg",
  },
  sections: {
    services: true,
    about: true,
    trustBar: true,
    gallery: true,
    promotions: true,
    reviews: true,
    contact: true,
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

export type SiteConfig = typeof siteConfig;
