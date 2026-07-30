export const siteConfig = {
  business: {
    name: "Clearout Kings",
    phone: "857-615-9906",
    email: "clearoutkings@gmail.com",
    address: "Chelsea, MA",
    hours: "Mon–Sun, 7am–7pm",
    serviceAreas: ["Greater Boston Area"],
  },
  hero: {
    type: "image" as "video" | "image",
    src: "/assets/hero.JPG",
    headline: "We clear it out.",
    headlineAccent: "You get your space back.",
    subheading:
      "Fast, careful attic, crawlspace, and basement cleanouts across greater Boston. We haul it all away and leave the space spotless.",
  },
  theme: {
    accentColor: "#C9A24C",
    grassTexture: "/assets/wood-texture.jpg",
    concreteTexture: "/assets/cardboard-texture.jpg",
    stoneTexture: "/assets/cardboard-texture.jpg",
  },
  sections: {
    services: true,
    about: true,
    trustBar: true,
    gallery: true,
    promotions: false,
    reviews: true,
    contact: true,
  },
    cashOffer: {
    heading: "Found something worth keeping?",
    body: "As we clear your space, anything in good condition that you'd rather part with, we'll make a fair cash offer for on the spot. You get paid instead of paying to haul it away.",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};
export type SiteConfig = typeof siteConfig;