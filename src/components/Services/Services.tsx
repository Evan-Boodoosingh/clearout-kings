import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Scissors, Trees, Droplets, Sprout, Shrub, Layers } from "lucide-react";
import { siteConfig } from "../../config/site.config";

const services = [
  {
    id: 1,
    icon: Scissors,
    name: "Lawn Mowing & Edging",
    description:
      "A perfectly cut lawn starts with the right crew. We mow, edge, trim, and blow on every visit, leaving your property looking sharp and well-maintained every single time.",
  },
  {
    id: 2,
    icon: Trees,
    name: "Landscaping & Design",
    description:
      "From concept to completion, we design and install landscapes that enhance your property's beauty and value. Every plan is custom built around your space, your style, and your budget.",
  },
  {
    id: 3,
    icon: Droplets,
    name: "Irrigation & Sprinklers",
    description:
      "Florida lawns need consistent water to thrive. We install, repair, and maintain irrigation systems that deliver the right amount of water to every inch of your lawn automatically.",
  },
  {
    id: 4,
    icon: Sprout,
    name: "Fertilization & Weed Control",
    description:
      "Weeds don't stand a chance. Our seasonal treatment plans feed your lawn the nutrients it needs while eliminating the weeds that compete with it. keeping your turf thick, green, and healthy.",
  },
  {
    id: 5,
    icon: Shrub,
    name: "Hedge & Shrub Trimming",
    description:
      "Overgrown hedges and shrubs drag down the look of any property. Our team shapes and prunes with precision, giving your landscaping clean, defined lines that hold their shape longer.",
  },
  {
    id: 6,
    icon: Layers,
    name: "Sod Installation",
    description:
      "Whether you're starting fresh or repairing bare patches, we supply and professionally install premium sod that takes root fast. giving you a lush, green lawn you can enjoy immediately.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen py-24 px-6 flex flex-col justify-center"
    >
      {/* ── SECTION HEADING ── */}
      <motion.div
        className="text-center mb-16"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* <span className="text-xs tracking-widest uppercase text-white/40 block mb-3">
          What We Do
        </span> */}
        <h2
          className="font-serif font-bold text-white leading-tight"
          style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
        >
          Our Services
        </h2>
        <p className="text-white mt-4 text-sm max-w-md mx-auto leading-relaxed">
          Every service delivered with precision and care, every single time.
        </p>
      </motion.div>

      {/* ── SERVICES GRID ── */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {services.map((service) => {
          // We store the icon component in a variable so we can render it as JSX
          // Icon components from Lucide are just React components — they accept size and color props
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
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-all duration-300" />

              {/* Card content */}
              <div className="relative z-10 p-10 flex flex-col items-start gap-4">
                {/* Icon — size and color props are built into Lucide */}
                <div
                  className="transition-transform duration-300 group-hover:scale-110"
                  style={{ color: siteConfig.theme.accentColor }}
                >
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                {/* Service name */}
                <h3 className="text-white font-semibold text-base tracking-wide">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Learn more — appears on hover */}
                {/* <span
                  className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"
                  style={{ color: siteConfig.theme.accentColor }}
                >
                  Learn More →
                </span> */}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
