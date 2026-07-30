import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Phone, Truck, Sparkles, ThumbsUp } from "lucide-react";
import { siteConfig } from "../../config/site.config";

const steps = [
  {
    id: 1,
    icon: Phone,
    title: "Call or Text",
    description:
      "Reach out for a free same-day estimate. We'll ask a few quick questions about your space and schedule a time that works.",
  },
  {
    id: 2,
    icon: Truck,
    title: "We Show Up",
    description:
      "Our crew arrives on time, assesses the space, and gets to work. Most cleanouts are done in a single day.",
  },
  {
    id: 3,
    icon: Sparkles,
    title: "We Clear It All",
    description:
      "Everything gets hauled out, sorted, and disposed of responsibly. Anything valuable? We make you a cash offer on the spot.",
  },
  {
    id: 4,
    icon: ThumbsUp,
    title: "You Get Your Space Back",
    description:
      "We leave the space swept, clean, and usable. You pay after the job is done, not before.",
  },
];

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const stepVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Process() {
  return (
    <section id="process" className="relative py-24 px-6">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
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
            <span className="text-md text-white tracking-widest uppercase">
              How It Works
            </span>
            <div
              className="h-px w-12"
              style={{ background: siteConfig.theme.accentColor }}
            />
          </div>
          <h2
            className="font-sans font-bold text-white leading-tight"
            style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
          >
            Simple Process.
            <br />
            <em
              className="italic"
              style={{ color: siteConfig.theme.accentColor }}
            >
              Stress-Free Results.
            </em>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="group relative overflow-hidden rounded-2xl"
                style={{
                  backgroundImage: `url(${siteConfig.theme.concreteTexture})`,
                  backgroundSize: "500px",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: siteConfig.theme.accentColor }}
                />
                <div className="relative z-10 p-8 flex flex-col items-center text-center gap-5">
                  <span className="text-xs tracking-widest uppercase font-semibold text-white">
                    Step {step.id}
                  </span>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(0,0,0,0.45)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      style={{ color: siteConfig.theme.accentColor }}
                    />
                  </div>
                  <h3 className="text-white font-semibold text-base tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded-full text-black text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-200 no-underline"
            style={{ background: siteConfig.theme.accentColor }}
          >
            Get Your Free Estimate
          </a>
        </motion.div>
      </div>
    </section>
  );
}
