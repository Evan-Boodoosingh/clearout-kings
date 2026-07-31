import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Home,
  ArrowDownToLine,
  Sparkles,
  DollarSign,
  Truck,
  SprayCan,
} from "lucide-react";
import { siteConfig } from "../../config/site.config";

const services = [
  {
    id: 1,
    icon: Home,
    name: "Attic Cleanouts",
    description:
      "We haul out years of boxes, furniture, and forgotten clutter, then leave the space swept and usable. Most attics are cleared in a single day.",
  },
  {
    id: 2,
    icon: ArrowDownToLine,
    name: "Crawlspace Cleanouts",
    description:
      "Tight, awkward crawlspaces are our specialty. We remove the debris and stored items you can't easily reach and leave the area clean.",
  },
  {
    id: 3,
    icon: Sparkles,
    name: "Clean & Organize",
    description:
      "We don't just empty the space. We leave whatever stays neatly sorted and organized, so it's actually usable when we're done.",
  },
  {
    id: 4,
    icon: SprayCan,
    name: "Deep Clean & Sanitize",
    description:
      "After the cleanout, we sweep, dust, and sanitize the entire space so it's not just empty, it's actually clean and ready to use.",
  },
  {
    id: 5,
    icon: Truck,
    name: "Full Hauling & Disposal",
    description:
      "Everything we remove gets hauled away and disposed of responsibly. Nothing gets left in your driveway or on the curb. We take it all.",
  },
  {
    id: 6,
    icon: DollarSign,
    name: "We Buy Your Valuables",
    description:
      "Found something worth keeping? Anything in good condition that you'd rather part with, we'll make a fair cash offer on the spot. You get paid instead of paying to haul it away.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen py-24 px-6 flex flex-col justify-center"
    >
      <motion.div
        className="text-center mb-16"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2
          className="font-sans font-bold text-white leading-tight"
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            color: siteConfig.theme.accentColor,
          }}
        >
          Our Services
        </h2>
        <p className="text-white mt-4 text-sm max-w-md mx-auto leading-relaxed">
          Every cleanout handled with care, speed, and respect for your space.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden cursor-pointer rounded-2xl min-h-72"
              style={{
                backgroundImage: `url(${siteConfig.theme.concreteTexture})`,
                backgroundSize: "500px",
              }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/15 transition-all duration-300" />
              <div className="relative z-10 p-10 flex flex-col items-start gap-4">
                <div
                  className="transition-transform duration-300 group-hover:scale-110"
                  style={{ color: siteConfig.theme.accentColor }}
                >
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-base tracking-wide">
                  {service.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* <motion.div className="max-w-3xl mx-auto mt-16 rounded-2xl overflow-hidden p-8 md:p-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} style={{ border: `1px solid ${siteConfig.theme.accentColor}35`, background: `linear-gradient(180deg, ${siteConfig.theme.accentColor}10, transparent)` }}>
        <h3 className="font-sans font-bold text-xl mb-3" style={{ color: "#ecc86e" }}>{siteConfig.cashOffer?.heading || "Found something worth keeping?"}</h3>
        <p className="text-white/80 text-base leading-relaxed">{siteConfig.cashOffer?.body || "As we clear your space, anything in good condition that you'd rather part with, we'll make a fair cash offer for on the spot. You get paid instead of paying to haul it away."}</p>
      </motion.div> */}
    </section>
  );
}
