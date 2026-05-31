import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { ClipboardList, MapPin, Hammer, Smile } from "lucide-react"
import { siteConfig } from "../../config/site.config"

const steps = [
  {
    id: 1,
    icon: ClipboardList,
    title: "Get Your Free Quote",
    description:
      "Call, text, or fill out our form. We respond within 24 hours — guaranteed. No pressure, no obligation, just honest pricing from a team you can trust.",
  },
  {
    id: 2,
    icon: MapPin,
    title: "We Come To You",
    description:
      "A Prestige team member visits your property, assesses your needs in person, and builds a custom plan tailored to your lawn. No guesswork, no surprises.",
  },
  {
    id: 3,
    icon: Hammer,
    title: "We Get To Work",
    description:
      "Your dedicated crew shows up on the agreed date, on time, and gets straight to work. We treat your property with care and deliver results you can see immediately.",
  },
  {
    id: 4,
    icon: Smile,
    title: "Sit Back & Enjoy",
    description:
      "We handle everything on your schedule, every visit. Your only job is stepping outside and enjoying a lawn you're genuinely proud of.",
  },
]

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 px-6"
      style={{
        backgroundImage: `url(${siteConfig.theme.grassTexture})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full">

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
              className="text-md text-white tracking-widest uppercase"
            //   style={{ color: siteConfig.theme.accentColor }}
            >
              How It Works
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
            Simple Process.<br />
            <em
              className="italic"
              style={{ color: siteConfig.theme.accentColor }}
            >
              Exceptional Results.
            </em>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="group relative overflow-hidden rounded-2xl"
                style={{
                  // Stone texture — same image as About section
                 backgroundImage: `url(${siteConfig.theme.concreteTexture})`,
backgroundSize: "500px",
                }}
              >
                {/* Dark overlay — matches About section exactly at bg-black/70 */}
                <div className="absolute inset-0 bg-black/65 group-hover:bg-black/60 transition-all duration-300" />

                {/* Gold accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: siteConfig.theme.accentColor }}
                />

                {/* Card content */}
                <div className="relative z-10 p-8 flex flex-col items-center text-center gap-5">

                  {/* Step number */}
                  <span
                    className="text-xs tracking-widest uppercase font-semibold"
                    style={{ color: siteConfig.theme.accentColor }}
                  >
                    Step {step.id}
                  </span>

                  {/* Icon circle */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${siteConfig.theme.accentColor}15`,
                      border: `1px solid ${siteConfig.theme.accentColor}40`,
                    }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      style={{ color: siteConfig.theme.accentColor }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-semibold text-base tracking-wide">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>

                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded-full bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-all duration-200 no-underline"
          >
            Start With a Free Quote
          </a>
        </motion.div>

      </div>
    </section>
  )
}