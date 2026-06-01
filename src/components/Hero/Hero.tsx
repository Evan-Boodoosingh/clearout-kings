import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { siteConfig } from "../../config/site.config"

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* VIDEO BACKGROUND */}
      {siteConfig.hero.type === "video" ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={siteConfig.hero.src} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${siteConfig.hero.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* HERO CONTENT */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center px-6 pt-28 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        {/* <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 mb-8"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: siteConfig.theme.accentColor }}
          />
          <span className="text-xs tracking-widest uppercase text-white/70">
            Serving Central Florida
          </span>
        </motion.div> */}

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-serif font-black text-white leading-none mb-6"
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

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-white/65 font-light leading-relaxed mb-10 max-w-lg"
          style={{ fontSize: "clamp(15px, 2vw, 18px)" }}
        >
          {siteConfig.hero.subheading}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-all duration-200 no-underline whitespace-nowrap"
          >
            Get a Free Quote
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full border border-white/40 text-white text-sm font-medium tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all duration-200 no-underline whitespace-nowrap"
          >
            View Our Work
          </a>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      {/* Absolutely positioned so it never affects the flex layout above */}
      {/* bottom-8 pins it near the bottom of the hero section */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-linear-to-b from-white/30 to-transparent"
        />
      </motion.div>

    </section>
  )
}