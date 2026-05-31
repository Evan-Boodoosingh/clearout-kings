import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { siteConfig } from "../../config/site.config"

// Gallery items defined outside component — never recreated on re-render
// Each item has a before and after image, a label, and a location
// These will eventually come from Sanity CMS
const galleryItems = [
  {
    id: 1,
    label: "Lawn Transformation",
    location: "Lakeland, FL",
    before: "/assets/gallery/before-1.jpg",
    after: "/assets/gallery/after-1.jpg",
  },
  {
    id: 2,
    label: "Landscape Install",
    location: "Winter Haven, FL",
    before: "/assets/gallery/before-2.jpg",
    after: "/assets/gallery/after-2.jpg",
  },
  {
    id: 3,
    label: "Sod Installation",
    location: "Haines City, FL",
    before: "/assets/gallery/before-3.jpg",
    after: "/assets/gallery/after-3.jpg",
  },
  {
    id: 4,
    label: "Hedge Trimming",
    location: "Lakeland, FL",
    before: "/assets/gallery/before-4.jpg",
    after: "/assets/gallery/after-4.jpg",
  },
  {
    id: 5,
    label: "Fertilization Treatment",
    location: "Davenport, FL",
    before: "/assets/gallery/before-5.jpg",
    after: "/assets/gallery/after-5.jpg",
  },
  {
    id: 6,
    label: "Full Yard Renovation",
    location: "Winter Haven, FL",
    before: "/assets/gallery/before-6.jpg",
    after: "/assets/gallery/after-6.jpg",
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
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

// Individual gallery card component
// Separated so each card manages its own state independently
// This means each card has its own before/after toggle and auto-loop
function GalleryCard({ item }: { item: typeof galleryItems[0] }) {
  // true = showing "after", false = showing "before"
  const [showAfter, setShowAfter] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Auto-loop effect
  // Alternates between before and after every 2.5 seconds
  // Pauses when the user hovers — they take manual control
  // Restarts when they mouse out
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setShowAfter((prev) => !prev)
      }, 5000)
    }

    // Cleanup — clear the interval when hover state changes or component unmounts
    // Without this we'd have multiple intervals running simultaneously
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered])

  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{ aspectRatio: "4/3" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        // Don't reset the state on mouse leave
        // Let the auto-loop continue from wherever it left off
      }}
    >
      {/* BEFORE image */}
      {/* opacity transitions create the crossfade effect */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: showAfter ? 0 : 1 }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${item.before})`,
            backgroundColor: "#1a1a1a",
          }}
        />
      </div>

      {/* AFTER image */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: showAfter ? 1 : 0 }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${item.after})`,
            backgroundColor: "#1a1a1a",
          }}
        />
      </div>

      {/* Placeholder shown when no real image is loaded */}
      {/* This sits behind the image divs and shows through until real photos are added */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60">
        <div
          className="text-xs tracking-widest uppercase font-semibold"
          style={{ color: siteConfig.theme.accentColor }}
        >
          {showAfter ? "After" : "Before"}
        </div>
        <div className="text-white/20 text-xs tracking-widest uppercase">
          Photo coming soon
        </div>
      </div>

      {/* Dark gradient overlay at bottom — always visible */}
      {/* Creates space for the card info to be readable */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/90 to-transparent" />

      {/* Card info — label and location */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
        <div>
          <div className="text-white font-semibold text-sm">
            {item.label}
          </div>
          <div className="text-white/50 text-xs mt-0.5">
            {item.location}
          </div>
        </div>

        {/* Before/After toggle buttons — visible on hover */}
        {/* opacity-0 by default, appears when card is hovered */}
        <div
          className={`flex gap-1.5 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => setShowAfter(false)}
            className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
            style={{
              background: !showAfter
                ? siteConfig.theme.accentColor
                : "rgba(255,255,255,0.15)",
              color: !showAfter ? "#111" : "#fff",
            }}
          >
            Before
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
            style={{
              background: showAfter
                ? siteConfig.theme.accentColor
                : "rgba(255,255,255,0.15)",
              color: showAfter ? "#111" : "#fff",
            }}
          >
            After
          </button>
        </div>
      </div>

      {/* Before/After indicator pill — visible when NOT hovered */}
      {/* Teaches the user there are two states without being intrusive */}
      <div
        className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background: "rgba(0,0,0,0.6)",
          border: `1px solid ${siteConfig.theme.accentColor}50`,
          color: siteConfig.theme.accentColor,
        }}
      >
        {showAfter ? "After" : "Before"}
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(/assets/stone-texture.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay on stone */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-6xl mx-auto">

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
              Proof of Work
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
            Before & After
          </h2>
          <p className="text-white/50 mt-4 text-sm max-w-md mx-auto leading-relaxed">
            Hover over any photo to see the transformation. Every project is real work by our team.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}