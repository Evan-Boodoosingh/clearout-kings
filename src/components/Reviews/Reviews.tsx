import { useState, useRef } from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { siteConfig } from "../../config/site.config"

const reviews = [
  { id: 1, name: "Review 1", location: "Chelsea, MA", rating: 5, review: "Your uncle's first real Facebook review goes here. Replace this text with the actual review." },
  { id: 2, name: "Review 2", location: "Chelsea, MA", rating: 5, review: "Your uncle's second real Facebook review goes here. Replace this text with the actual review." },
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