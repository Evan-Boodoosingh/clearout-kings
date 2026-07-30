import { useState, useRef } from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { siteConfig } from "../../config/site.config"

const reviews = [
  { id: 1, name: "Sarah M.", rating: 5, review: "I was dreading tackling our attic after living in our house for 15 years. The crew was incredible! They cleared out the whole space in just a few hours. The best part? They tested our old working power tools and retro stereo equipment and gave us $250 cash on the spot! It completely offset the service cost. Highly recommend!" },
  { id: 2, name: "David L.", rating: 5, review: "Our crawlspace had become a dumping ground for previous homeowners' junk, and I honestly didn't even want to step foot down there. These guys wore proper gear, worked efficiently, and left the crawlspace completely spotless and disinfected. They even spotted a working dehumidifier and portable generator and paid us cash for them. Outstanding service from start to finish." },
  { id: 3, name: "Elena R.", rating: 5, review: "As a realtor, I frequently need companies that can handle last-minute cleanouts before closing. They were polite, fast, and extremely fair. Instead of throwing everything into a landfill, they salvaged a working window AC unit and a few vintage sewing machines, paying cash directly to the estate. My clients were thrilled!" },
  { id: 4, name: "Marcus V.", rating: 5, review: "10/10 experience! I usually do DIY projects, but clearing out 20 years of attic clutter in the summer heat was beyond me. They showed up right on time, swept up every bit of dust before leaving, and were super transparent about their pricing. I was shocked when they offered me cash for an old working treadmill and amplifier I thought were useless." },
  { id: 5, name: "Brenda & Tom K.", rating: 5, review: "We are downsizing and needed our crawlspace cleared out before putting our home on the market. The team handled everything with care and respect. It made us feel so much better knowing our working appliances and tools weren't going to a dump. Professional, honest, and hardworking team." },
  { id: 6, name: "Jason T.", rating: 5, review: "I rarely write reviews, but this company earned it. They transformed a dark, dusty attic nightmare into a clean, usable space. The crew was super friendly, efficient, and didn't leave a single speck of dirt in the hallways on their way out. Walked away with a clean house and $180 in my pocket for an old working pressure washer and guitar amp." },
]

const headingVariants: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl shrink-0" style={{ backgroundImage: `url(${siteConfig.theme.concreteTexture})`, backgroundSize: "500px", height: "280px", width: "340px" }}>
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 p-8 flex flex-col gap-4 h-full">
        <div className="flex gap-1">
          {Array.from({ length: review.rating }).map((_, i) => (
            <span key={i} className="text-base" style={{ color: siteConfig.theme.accentColor }}>★</span>
          ))}
        </div>
        <p className="text-white/80 text-sm leading-relaxed italic flex-1 overflow-hidden">"{review.review}"</p>
        <div className="pt-4 mt-auto" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="text-white font-semibold text-sm">{review.name}</div>
          <div className="text-white/40 text-xs mt-0.5">{review.location}</div>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  const [isPaused, setIsPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  return (
    <section id="reviews" className="relative py-24 overflow-hidden">
      <style>{`
        @keyframes scroll-reviews { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .reviews-track { animation: scroll-reviews 90s linear infinite; }
        .reviews-track.paused { animation-play-state: paused; }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-16" variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12" style={{ background: siteConfig.theme.accentColor }} />
            <span className="text-sm text-white tracking-widest uppercase">What Clients Say</span>
            <div className="h-px w-12" style={{ background: siteConfig.theme.accentColor }} />
          </div>
          <h2 className="font-sans font-bold text-white leading-tight" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>Customer Reviews</h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onTouchStart={() => setIsPaused(true)} onTouchEnd={() => setIsPaused(false)}>
          <div ref={trackRef} className={`reviews-track flex gap-4 w-max ${isPaused ? "paused" : ""}`}>
            {reviews.map((review) => (<ReviewCard key={`original-${review.id}`} review={review} />))}
            {reviews.map((review) => (<ReviewCard key={`clone-${review.id}`} review={review} />))}
          </div>
        </div>
      </div>
    </section>
  )
}