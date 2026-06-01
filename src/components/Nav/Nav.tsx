import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "../../config/site.config"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <AnimatePresence>

      {/* ── DESKTOP NAV ── */}
      <motion.header
        key="desktop-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:flex fixed top-4 left-0 right-0 z-50 justify-center px-6"
      >
        <div
          className={`
            flex items-center justify-between
            w-full max-w-5xl
            px-6 py-4 md:px-8 rounded-full
            border border-white/10
            backdrop-blur-md
            transition-all duration-300
            ${scrolled ? "bg-black/70 shadow-lg" : "bg-black/50"}
          `}
        >
          {/* Logo — clicking takes you back to top via #home */}
          <a
            href="#home"
            className="font-serif text-base font-bold text-white uppercase tracking-widest whitespace-nowrap no-underline"
          >
            Prestige{" "}
            <span style={{ color: siteConfig.theme.accentColor }}>
              Lawn
            </span>
          </a>

          {/* Desktop links */}
          <nav className="flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 text-xs font-medium tracking-widest uppercase hover:text-white transition-colors duration-200 no-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="
              text-xs font-bold tracking-widest uppercase
              px-6 py-2.5 rounded-full
              bg-white text-black
              hover:bg-white/90
              transition-all duration-200
              no-underline whitespace-nowrap
            "
          >
            Free Quote
          </a>
        </div>
      </motion.header>

      {/* ── MOBILE NAV ── */}
      <motion.header
        key="mobile-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:hidden fixed top-3 left-0 right-0 z-50 px-4"
      >
        <div
          className={`
            flex items-center justify-between
            px-5 py-2 rounded-full
            border border-white/10
            backdrop-blur-md
            transition-all duration-300
            ${scrolled ? "bg-black/60" : "bg-black/60"}
          `}
        >
          {/* Logo — clicking takes you back to top via #home */}
          <a
            href="#home"
            className="font-serif text-sm font-bold text-white uppercase tracking-widest no-underline"
          >
            Prestige{" "}
            <span style={{ color: siteConfig.theme.accentColor }}>
              Lawn
            </span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col items-center justify-center gap-1.5 w-9 h-9 p-1 bg-transparent border-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <motion.span
              className="block h-px w-5 rounded-full bg-white"
              animate={menuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.span
              className="block h-px w-5 rounded-full bg-white"
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.span
              className="block h-px w-5 rounded-full bg-white"
              animate={menuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />
          </button>
        </div>
      </motion.header>

      {/* ── MOBILE OVERLAY MENU ── */}
      {menuOpen && (
        <motion.div
          key="mobile-overlay"
          className="fixed inset-0 z-40 flex flex-col justify-between px-8 py-9 md:hidden"
          style={{ background: "rgba(8, 8, 8, 1)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <nav className="flex flex-col mt-12">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{
                  duration: 0.5,
                  delay: 0.08 + i * 0.06,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    block py-5 border-b border-white/5
                    font-serif font-light text-5xl
                    text-white/20 hover:text-white
                    transition-colors duration-200
                    no-underline
                  "
                >
                  {link.label}
                </a>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs tracking-widest uppercase text-white/30">
                Call Us
              </span>
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="text-sm tracking-wider no-underline"
                style={{ color: siteConfig.theme.accentColor }}
              >
                {siteConfig.business.phone}
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="
                w-full text-center
                text-xs tracking-widest uppercase
                px-6 py-4 rounded-full
                border border-white text-white
                hover:bg-white hover:text-black
                transition-all duration-200
                no-underline
              "
            >
              Get a Free Quote
            </a>
          </motion.div>
        </motion.div>
      )}

    </AnimatePresence>
  )
}