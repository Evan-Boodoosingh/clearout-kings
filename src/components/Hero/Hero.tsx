import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { siteConfig } from "../../config/site.config";

const telHref = `tel:${siteConfig.business.phone.replace(/[^0-9]/g, "")}`;

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
    className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${siteConfig.hero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-10 bg-black/60" />

      <motion.div
      className="relative z-20 flex flex-col items-center text-center px-6 pt-28 pb-16 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs font-medium tracking-[.22em] uppercase mb-6"
          style={{ color: "#ecc86e" }}
        >
          {/* Attic · Crawlspace */}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-sans font-black text-white leading-none mb-6"
          style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
        >
          {siteConfig.hero.headline}{" "}
          <em
            className="italic"
            style={{ color: siteConfig.theme.accentColor }}
          >
            {siteConfig.hero.headlineAccent}
          </em>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-white/65 font-light leading-relaxed mb-10 max-w-lg"
          style={{ fontSize: "clamp(15px, 2vw, 18px)" }}
        >
          {siteConfig.hero.subheading}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-full text-black text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-200 no-underline whitespace-nowrap"
            style={{ background: siteConfig.theme.accentColor }}
          >
            Get a Same-Day Estimate
          </a>
          <a
            href={telHref}
            className="px-8 py-4 rounded-full border text-sm font-medium tracking-widest uppercase hover:bg-white/10 transition-all duration-200 no-underline whitespace-nowrap"
            style={{
              borderColor: siteConfig.theme.accentColor,
              color: "#ecc86e",
            }}
          >
            Call or Text Now
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 mt-8"
        >
          {[
            "Licensed & insured",
            "Same-day estimates",
            // "Your valuables stay safe",
          ].map((item) => (
            <span
              key={item}
              className="text-xs text-white/70 border border-white/15 rounded-full px-3 py-1.5 bg-black/30 backdrop-blur-sm"
            >
              <span
                style={{ color: siteConfig.theme.accentColor }}
                className="mr-1.5"
              >
                ✓
              </span>
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      > */}
        {/* <span className="text-white/30 text-xs tracking-widest uppercase">
          Scroll
        </span> */}
        {/* <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-linear-to-b from-white/30 to-transparent"
        />
      </motion.div> */}
    </section>
  );
}
