import { siteConfig } from "../../config/site.config"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src="/assets/crown.png" alt="" className="w-5 h-auto" />
            <span className="font-sans font-bold text-white text-sm uppercase tracking-widest">Clearout <span style={{ color: siteConfig.theme.accentColor }}>Kings</span></span>
          </div>
          <p className="text-white/30 text-xs leading-relaxed max-w-[240px]">Attic, crawlspace, and basement cleanouts across greater Boston. Licensed and insured.</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-white/25 text-xs tracking-widest uppercase">Contact</div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2">
            <a href={`tel:${siteConfig.business.phone.replace(/[^0-9]/g, "")}`} className="text-white/50 text-xs hover:text-white transition-colors duration-200 no-underline">{siteConfig.business.phone}</a>
            <span className="text-white/50 text-xs">{siteConfig.business.hours}</span>
            <a href={`mailto:${siteConfig.business.email}`} className="text-white/50 text-xs hover:text-white transition-colors duration-200 no-underline">{siteConfig.business.email}</a>
            <span className="text-white/50 text-xs">{siteConfig.business.address}</span>
          </div>
        </div>
      </div>
      <div className="border-t px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-2" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <span className="text-white/25 text-xs">© {currentYear} Clearout Kings. All rights reserved.</span>
        <span className="text-white/25 text-xs">Designed & built by <a href="https://evanboodoosingh.vercel.app" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 no-underline" style={{ color: siteConfig.theme.accentColor }}>&nbsp;Evan Boodoosingh</a></span>
      </div>
    </footer>
  )
}