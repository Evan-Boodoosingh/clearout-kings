import { siteConfig } from "../../config/site.config"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="w-full"
      style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Main footer — two columns, logo left, contact right */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Left — Logo and tagline */}
        <div className="flex flex-col gap-2">
          <div className="font-serif font-bold text-white text-sm uppercase tracking-widest">
            Prestige{" "}
            <span style={{ color: siteConfig.theme.accentColor }}>Lawn & Landscape</span>
          </div>
          <p className="text-white/30 text-xs leading-relaxed max-w-[200px]">
            Premium lawn care for homeowners who refuse to settle for average.
          </p>
        </div>

        {/* Right — Contact info in 2 columns */}
        <div className="flex flex-col gap-3">
          <div className="text-white/25 text-xs tracking-widest uppercase">
            Contact
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2">
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="text-white/50 text-xs hover:text-white transition-colors duration-200 no-underline"
            >
              {siteConfig.business.phone}
            </a>
            <span className="text-white/50 text-xs">{siteConfig.business.hours}</span>
            <a
              href={`mailto:${siteConfig.business.email}`}
              className="text-white/50 text-xs hover:text-white transition-colors duration-200 no-underline"
            >
              {siteConfig.business.email}
            </a>
            <span className="text-white/50 text-xs">{siteConfig.business.address}</span>
          </div>
        </div>

      </div>

      {/* Copyright bar */}
      <div
        className="border-t px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-2"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <span className="text-white/25 text-xs">
          © {currentYear} Prestige Lawn & Landscape. All rights reserved.
        </span>
        <span className="text-white/25 text-xs">
          Designed & built by{" "}
          <a
            href="https://evanboodoosingh.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 no-underline"
            style={{ color: siteConfig.theme.accentColor }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            &nbsp;Evan Boodoosingh
          </a>
        </span>
      </div>

    </footer>
  )
}