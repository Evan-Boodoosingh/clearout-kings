import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { siteConfig } from "../../config/site.config";

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const statVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stats = [
  { number: "8+", label: "Years in Florida" },
  { number: "500+", label: "Lawns Transformed" },
  { number: "4.9", label: "Google Rating" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: `url(/assets/stone-texture.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 w-full">
        {/* Top accent line and label */}
        <motion.div
          className="flex items-center gap-4 mb-10 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="h-px w-12"
            style={{ background: siteConfig.theme.accentColor }}
          />
          <span
            className="text-md text-white tracking-widest uppercase"
            // style={{ color: siteConfig.theme.accentColor }}
          >
            Who We Are
          </span>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* LEFT — Photo */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ border: `1px solid ${siteConfig.theme.accentColor}25` }}
            >
              <img
                src="/assets/team-photo.jpg"
                alt="Prestige Lawn & Landscape team at work"
                className="w-full object-cover"
                style={{ height: "680px" }}
              />
              {/* Subtle gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            <h2
              className="font-serif font-bold text-white leading-tight"
              style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
            >
              Built on Pride.
              <br />
              <em
                className="italic"
                style={{ color: siteConfig.theme.accentColor }}
              >
                Rooted in Florida.
              </em>
            </h2>

            <p className="text-white/80 leading-relaxed text-base">
              Marco Rivera started Prestige Lawn with one truck, two employees,
              and a simple rule — treat every lawn like it's your own. That was
              eight years ago. Today we serve hundreds of homeowners across Polk
              County and the surrounding areas, and that rule hasn't changed.
            </p>

            <p className="text-white/80 leading-relaxed text-base">
              We specialize in premium lawn care and landscaping for homeowners
              who take pride in how their property looks. From weekly
              maintenance to full landscape transformations, we show up on time,
              communicate clearly, and never cut corners.
            </p>

            {/* Founder signature */}
            <div className="flex items-center gap-4 pt-2">
              <div
                className="w-10 h-px"
                style={{ background: siteConfig.theme.accentColor }}
              />
              <span className="text-white/70 text-sm italic">
                — Marco Rivera, Founder
              </span>
            </div>

            {/* Stats */}
            <motion.div
              className="flex flex-row justify-between pt-6 mt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={statVariants}
                  className="flex flex-col gap-2"
                >
                  <span
                    className="font-sans font-bold text-4xl"
                    style={{ color: siteConfig.theme.accentColor }}
                  >
                    {stat.number}
                    {stat.label === "Google Rating" && (
                      <span className="text-base leading-none">★</span>
                    )}
                  </span>
                  <span className="text-white/75 text-xs tracking-widest uppercase leading-relaxed">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
