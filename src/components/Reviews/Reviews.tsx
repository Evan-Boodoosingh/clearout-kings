import { useState, useRef } from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { siteConfig } from "../../config/site.config"

const reviews = [
  {
    id: 1,
    name: "Marcus R.",
    location: "Lakeland, FL",
    rating: 5,
    review:
      "Prestige completely transformed our backyard. Professional, on time, and the results were beyond what we expected. We've already referred three neighbors.",
  },
  {
    id: 2,
    name: "Tanya K.",
    location: "Winter Haven, FL",
    rating: 5,
    review:
      "Best lawn service we've ever used. They show up every week without us having to remind them. That alone is worth every penny.",
  },
  {
    id: 3,
    name: "James D.",
    location: "Haines City, FL",
    rating: 5,
    review:
      "Called Monday, quoted Tuesday, lawn done Wednesday. Fast, fair, and absolutely spotless work from start to finish.",
  },
  {
    id: 4,
    name: "Sandra M.",
    location: "Lakeland, FL",
    rating: 5,
    review:
      "Marco's crew showed up exactly when they said they would. My lawn looks better than it has in years. I won't use anyone else.",
  },
  {
    id: 5,
    name: "David T.",
    location: "Davenport, FL",
    rating: 5,
    review:
      "Had them do a full sod installation and the results were incredible. Clean, professional, and they left the property spotless when they were done.",
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

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl shrink-0"
      style={{
        backgroundImage: `url(${siteConfig.theme.concreteTexture})`,
        backgroundSize: "500px",
        height: "280px",
        width: "340px",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 p-8 flex flex-col gap-4 h-full">
        <div className="flex gap-1">
          {Array.from({ length: review.rating }).map((_, i) => (
            <span
              key={i}
              className="text-base"
              style={{ color: siteConfig.theme.accentColor }}
            >
              ★
            </span>
          ))}
        </div>
        <p className="text-white/80 text-sm leading-relaxed italic flex-1 overflow-hidden">
          "{review.review}"
        </p>
        <div
          className="pt-4 mt-auto"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="text-white font-semibold text-sm">{review.name}</div>
          <div className="text-white/40 text-xs mt-0.5">{review.location}</div>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  const [isPaused, setIsPaused] = useState(false)
  // const [manualIndex, setManualIndex] = useState<number | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // const handlePrev = () => {
  //   setManualIndex((prev) =>
  //     prev === null ? reviews.length - 1 : (prev - 1 + reviews.length) % reviews.length
  //   )
  // }

  // const handleNext = () => {
  //   setManualIndex((prev) =>
  //     prev === null ? 1 : (prev + 1) % reviews.length
  //   )
  // }

  return (
    <section
      id="reviews"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${siteConfig.theme.grassTexture})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Inject the CSS animation into the page */}
      <style>{`
        @keyframes scroll-reviews {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .reviews-track {
          animation: scroll-reviews 90s linear infinite;
        }
        .reviews-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
              className="text-sm text-white tracking-widest uppercase"
              // style={{ color: siteConfig.theme.accentColor }}
            >
              What Clients Say
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
            Customer Reviews
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative">

        {/* Overflow hidden clips the track */}
        <div
  className="overflow-hidden"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
  onTouchStart={() => setIsPaused(true)}
  onTouchEnd={() => setIsPaused(false)}
>
          {/*
            The track contains reviews twice — original + clone
            CSS animates it from 0 to -50% which is exactly one full set
            When it reaches -50% it instantly loops back to 0 — completely seamless
            because the visual at 0% and -50% are identical
          */}
          <div
            ref={trackRef}
            className={`reviews-track flex gap-4 w-max ${isPaused ? "paused" : ""}`}
          >
            {/* Original set */}
            {reviews.map((review) => (
              <ReviewCard key={`original-${review.id}`} review={review} />
            ))}
            {/* Cloned set — makes the loop seamless */}
            {reviews.map((review) => (
              <ReviewCard key={`clone-${review.id}`} review={review} />
            ))}
          </div>
        </div>

        {/* Prev button */}
        {/* <button
          onClick={handlePrev}
          aria-label="Previous review"
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center transition-all duration-200 z-20 hover:scale-110"
          style={{
            background: "rgba(0,0,0,0.6)",
            border: `1px solid ${siteConfig.theme.accentColor}40`,
          }}
        >
          <ChevronLeft size={18} style={{ color: siteConfig.theme.accentColor }} />
        </button> */}

        {/* Next button */}
        {/* <button
          onClick={handleNext}
          aria-label="Next review"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center transition-all duration-200 z-20 hover:scale-110"
          style={{
            background: "rgba(0,0,0,0.6)",
            border: `1px solid ${siteConfig.theme.accentColor}40`,
          }}
        >
          <ChevronRight size={18} style={{ color: siteConfig.theme.accentColor }} />
        </button> */}

      </div>

      {/* Dot indicators */}
      {/* <div className="flex justify-center gap-2 mt-8">
        {reviews.map((review, dotIndex) => (
          <button
            key={review.id}
            onClick={() => setManualIndex(dotIndex)}
            aria-label={`Go to review ${dotIndex + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: manualIndex === dotIndex ? "24px" : "8px",
              height: "8px",
              background:
                manualIndex === dotIndex
                  ? siteConfig.theme.accentColor
                  : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div> */}

    </section>
  )
}