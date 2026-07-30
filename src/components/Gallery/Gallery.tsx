import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { siteConfig } from "../../config/site.config";

const galleryItems = [
  {
    id: 1,
    label: "Lawn Transformation",
    before: "/assets/gallery/before-1.jpg",
    after: "/assets/gallery/after-1.jpg",
  },
  {
    id: 2,
    label: "Landscape Install",
    before: "/assets/gallery/before-2.jpg",
    after: "/assets/gallery/after-2.jpg",
  },
  {
    id: 3,
    label: "Sod Installation",
    before: "/assets/gallery/before-3.jpg",
    after: "/assets/gallery/after-3.jpg",
  },
  {
    id: 4,
    label: "Hedge Trimming",
    before: "/assets/gallery/before-4.jpg",
    after: "/assets/gallery/after-4.jpg",
  },
  {
    id: 5,
    label: "Fertilization Treatment",
    before: "/assets/gallery/before-5.jpg",
    after: "/assets/gallery/after-5.jpg",
  },
  {
    id: 6,
    label: "Full Yard Renovation",
    before: "/assets/gallery/before-6.jpg",
    after: "/assets/gallery/after-6.jpg",
  },
];

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function GalleryCard({ item }: { item: (typeof galleryItems)[0] }) {
  return (
    <motion.div
      variants={cardVariants}
      className="relative overflow-hidden rounded-2xl"
      style={{ aspectRatio: "4/3" }}
    >
      <ReactCompareSlider
        style={{ width: "100%", height: "100%" }}
        itemOne={
          <div className="relative w-full h-full">
            <ReactCompareSliderImage
              src={item.before}
              alt={`Before — ${item.label}`}
              style={{ objectFit: "cover" }}
            />
            <div
              className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-semibold tracking-wide pointer-events-none"
              style={{
                background: "rgba(0,0,0,0.6)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Before
            </div>
          </div>
        }
        itemTwo={
          <div className="relative w-full h-full">
            <ReactCompareSliderImage
              src={item.after}
              alt={`After — ${item.label}`}
              style={{ objectFit: "cover" }}
            />
            <div
              className="absolute top-3 right-3 px-2 py-1 rounded text-xs font-semibold tracking-wide pointer-events-none"
              style={{
                background: "rgba(0,0,0,0.6)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              After
            </div>
          </div>
        }
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: "blur(4px)",
              background: siteConfig.theme.accentColor,
              border: "none",
              color: "#111",
              boxShadow: "0 0 12px rgba(0,0,0,0.4)",
              width: "36px",
              height: "36px",
            }}
            linesStyle={{
              background: siteConfig.theme.accentColor,
              width: "2px",
              opacity: 0.8,
            }}
          />
        }
      />

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 px-6 overflow-hidden bg-center bg-[length:600px] md:bg-cover"
      style={{ backgroundImage: `url(/assets/cardboard-texture.jpg)` }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-6xl mx-auto">
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
            <span className="text-sm text-white tracking-widest uppercase">
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
            Drag the slider to reveal the transformation. Every project is real
            work by our team.
          </p>
        </motion.div>

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
  );
}