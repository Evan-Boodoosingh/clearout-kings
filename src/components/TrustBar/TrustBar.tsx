import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { BadgeCheck, Receipt, ShieldCheck } from "lucide-react"
import { siteConfig } from "../../config/site.config"

// Trust items defined outside component — never recreated on re-render
// These will eventually come from Sanity CMS
// Each item directly answers a fear a homeowner has before hiring
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function TrustBar() {
  return (
    <section
      id="trust"
      className="relative py-20 px-6 overflow-hidden"
      style={{
            backgroundImage: `url(${siteConfig.theme.grassTexture})`,
        // backgroundSize: "cover",
        backgroundAttachment: "fixed",
        // backgroundPosition: "center",
        // minHeight: "100vh",
      }}
    >
      {/* Dark overlay so content reads cleanly against the grass */}
      {/* <div className="absolute inset-0 bg-black/20" /> */}

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
            className="font-serif font-bold text-white"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Why Homeowners Choose Prestige
          </h2>
        </motion.div>

        {/* Three column trust items */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl p-8 flex flex-col gap-5"
                style={{
                  background: "rgba(0,0,0,0.30)",
                  border: `1px solid rgba(255,255,255,0.08)`,
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Gold accent line at top of card — appears on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: siteConfig.theme.accentColor }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${siteConfig.theme.accentColor}15`,
                    border: `1px solid ${siteConfig.theme.accentColor}30`,
                  }}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    style={{ color: siteConfig.theme.accentColor }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-lg leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}