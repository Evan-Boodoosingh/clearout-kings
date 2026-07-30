import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { siteConfig } from "../../config/site.config"

const leftVariants: Variants = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }
const rightVariants: Variants = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ backgroundImage: `url(/assets/cardboard-texture.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 w-full">
        <motion.div className="flex items-center gap-4 mb-10 md:mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <div className="h-px w-12" style={{ background: siteConfig.theme.accentColor }} />
          <span className="text-md text-white tracking-widest uppercase">Why Clearout Kings</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div variants={leftVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="flex flex-col gap-8">
            <h2 className="font-sans font-bold text-white leading-tight" style={{ fontSize: "clamp(36px, 4vw, 58px)" }}>Trusted in <br /><em className="italic" style={{ color: siteConfig.theme.accentColor }}>Your Home.</em></h2>
            <p className="text-white/80 leading-relaxed text-base">We're not just hauling junk. We're entering your home, handling your belongings, and working in your private space. That takes trust, and we take it seriously. Every crew member is careful, respectful, and treats your things like their own.</p>
            <p className="text-white/80 leading-relaxed text-base">Whether it's clearing decades of storage from your attic or organizing a basement that's gotten out of hand, we do it fast, we do it right, and we leave the space spotless. Most jobs are done in a single day.</p>
          </motion.div>

          <motion.div variants={rightVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <div className="relative overflow-hidden rounded-2xl p-8" style={{ border: `1px solid ${siteConfig.theme.accentColor}35`, background: `linear-gradient(180deg, ${siteConfig.theme.accentColor}10, transparent)` }}>
              <h3 className="font-sans font-bold text-xl mb-3" style={{ color: "#ecc86e" }}>{siteConfig.cashOffer?.heading || "Found something worth keeping?"}</h3>
              <p className="text-white/80 text-base leading-relaxed">{siteConfig.cashOffer?.body || "Anything in good condition that you'd rather part with, we'll make a fair cash offer for on the spot. You get paid instead of paying to haul it away."}</p>
              <div className="flex flex-wrap gap-4 mt-8" style={{ borderTop: `1px solid rgba(255,255,255,0.08)`, paddingTop: "1.5rem" }}>
                <div className="flex flex-col gap-1">
                  <span className="font-sans font-bold text-3xl" style={{ color: siteConfig.theme.accentColor }}>Same Day</span>
                  <span className="text-white/60 text-xs tracking-widest uppercase">Estimates</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-sans font-bold text-3xl" style={{ color: siteConfig.theme.accentColor }}>1 Day</span>
                  <span className="text-white/60 text-xs tracking-widest uppercase">Most Jobs Done</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-sans font-bold text-3xl" style={{ color: siteConfig.theme.accentColor }}>$0</span>
                  <span className="text-white/60 text-xs tracking-widest uppercase">Hidden Fees</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}