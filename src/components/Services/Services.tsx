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
      "Weekly and bi-weekly cuts with clean, precise edging on every visit.",
  },
  {
    id: 2,
    icon: Trees,
    name: "Landscaping & Design",
    description:
      "Full landscape design and installation tailored to your property.",
  },
  {
    id: 3,
    icon: Droplets,
    name: "Irrigation & Sprinklers",
    description:
      "System installation, repair, and seasonal maintenance to keep your lawn thriving.",
  },
  {
    id: 4,
    icon: Sprout,
    name: "Fertilization & Weed Control",
    description:
      "Customized treatment plans to eliminate weeds and feed your lawn year-round.",
  },
  {
    id: 5,
    icon: Shrub,
    name: "Hedge & Shrub Trimming",
    description:
      "Precise shaping and pruning to keep your hedges and shrubs looking sharp.",
  },
  {
    id: 6,
    icon: Layers,
    name: "Sod Installation",
    description:
      "Fresh sod supply and professional laying for an instant lawn transformation.",
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
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/55 transition-all duration-300" />

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
                <span
                  className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"
                  style={{ color: siteConfig.theme.accentColor }}
                >
                  Learn More →
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
