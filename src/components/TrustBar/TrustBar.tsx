import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { BadgeCheck, Receipt, ShieldCheck } from "lucide-react"
import { siteConfig } from "../../config/site.config"

const trustItems = [
  {
    id: 1,
    icon: BadgeCheck,
    title: "Satisfaction Guaranteed",
    description:
      "Not happy with the results? We come back and make it right. No questions asked, no excuses.",
  },
  {
    id: 2,
    icon: Receipt,
    title: "Free Estimates. No Hidden Fees.",
    description:
      "You'll know exactly what you're paying before we ever start. Transparent pricing, every time.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Licensed, Insured & On Time",
    description:
      "Fully licensed and insured in Florida. We show up when we say we will — every single visit.",
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

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
}

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
}

export default function TrustBar() {
  return (
    <section
      id="trust"
      className="relative py-24 px-6"
      style={{
        backgroundImage: `url(${siteConfig.theme.grassTexture})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Section heading */}
      <motion.div
        className="text-center mb-16"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <div
            className="h-px w-12"
            style={{ background: siteConfig.theme.accentColor }}
          />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: siteConfig.theme.accentColor }}
          >
            Our Promise
          </span>
          <div
            className="h-px w-12"
            style={{ background: siteConfig.theme.accentColor }}
          />
        </div>
        <h2
          className="font-serif font-bold text-white leading-tight"
          style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
        >
          Why Homeowners Choose Prestige
        </h2>
      </motion.div>

      {/* Cards grid — matches Services exactly */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {trustItems.map((item) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden cursor-pointer rounded-2xl"
              style={{
                backgroundImage: `url(${siteConfig.theme.concreteTexture})`,
                backgroundSize: "500px",
              }}
            >
              {/* Dark overlay — matches Services */}
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-all duration-300" />

              {/* Gold accent line on hover — matches Services */}
              {/* <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: siteConfig.theme.accentColor }}
              /> */}

              {/* Card content — relative z-10 sits above overlay */}
              <div className="relative z-10 p-10 flex flex-col items-start gap-4">

                {/* Icon */}
                <div
                  className="transition-transform duration-300 group-hover:scale-110"
                  style={{ color: siteConfig.theme.accentColor }}
                >
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-base tracking-wide">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}