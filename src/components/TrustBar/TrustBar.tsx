import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { ShieldCheck, Receipt, Clock } from "lucide-react"
import { siteConfig } from "../../config/site.config"

const trustItems = [
  { id: 1, icon: ShieldCheck, title: "Your Valuables Stay Safe", description: "Careful, respectful crews who treat your belongings like their own. Licensed and insured for your peace of mind." },
  { id: 2, icon: Receipt, title: "Upfront Pricing. No Surprises.", description: "You'll know exactly what you're paying before we start. Free estimates, no hidden fees, pay after the job is done." },
  { id: 3, icon: Clock, title: "Fast. Same-Day Available.", description: "Most jobs are completed in a single day. Same-day and next-day service available across greater Boston." },
]

const containerVariants: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const cardVariants: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }
const headingVariants: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }

export default function TrustBar() {
  return (
    <section id="trust" className="relative py-24 px-6">
      <motion.div className="text-center mb-16" variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12" style={{ background: siteConfig.theme.accentColor }} />
          <span className="text-md tracking-widest uppercase text-white">The Promise</span>
          <div className="h-px w-12" style={{ background: siteConfig.theme.accentColor }} />
        </div>
        <h2 className="font-sans font-bold text-white leading-tight" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>Why Homeowners Choose Clearout Kings</h2>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        {trustItems.map((item) => {
          const Icon = item.icon
          return (
            <motion.div key={item.id} variants={cardVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="group relative overflow-hidden cursor-pointer rounded-2xl" style={{ backgroundImage: `url(${siteConfig.theme.concreteTexture})`, backgroundSize: "500px" }}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/15 transition-all duration-300" />
              <div className="relative z-10 p-10 flex flex-col items-start gap-4">
                <div className="transition-transform duration-300 group-hover:scale-110" style={{ color: siteConfig.theme.accentColor }}><Icon size={28} strokeWidth={1.5} /></div>
                <h3 className="text-white font-semibold text-base tracking-wide">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}