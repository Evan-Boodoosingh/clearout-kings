
import { useState } from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { siteConfig } from "../../config/site.config"

const headingVariants: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }
const blockVariants: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }

export default function Contact() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", phone: "", service: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <motion.div className="text-center mb-10 relative z-10" variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <h2 className="font-sans font-bold text-white leading-tight" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>Ready to Reclaim<br /><em className="italic" style={{ color: siteConfig.theme.accentColor }}>Your Space?</em></h2>
        <p className="text-white/90 mt-4 text-sm max-w-md mx-auto leading-relaxed">Get your free same-day estimate. No pressure, no obligation, just honest pricing from a crew you can trust.</p>
      </motion.div>

      <motion.div className="relative z-10 max-w-5xl mx-auto overflow-hidden rounded-3xl bg-center bg-[length:600px] md:bg-[length:800px]" variants={blockVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} style={{ backgroundImage: "url(/assets/cardboard-texture.jpg)" }}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 p-10 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <div>
                <h3 className="font-sans font-bold text-white text-2xl mb-2">{"Let's Talk"}</h3>
                <p className="text-white/80 text-sm leading-relaxed">Fill out the form and we will get back to you the same day. Or give us a call.</p>
              </div>
              <div className="flex flex-col gap-5">
                <a href={"tel:" + siteConfig.business.phone.replace(/[^0-9]/g, "")} className="flex items-center gap-4 no-underline group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200" style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.12)" }}><Phone size={16} style={{ color: siteConfig.theme.accentColor }} /></div>
                  <div><div className="text-white/40 text-xs tracking-widest uppercase mb-0.5">Phone</div><div className="text-white text-sm font-medium">{siteConfig.business.phone}</div></div>
                </a>
                <a href={"mailto:" + siteConfig.business.email} className="flex items-center gap-4 no-underline group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200" style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.12)" }}><Mail size={16} style={{ color: siteConfig.theme.accentColor }} /></div>
                  <div><div className="text-white/40 text-xs tracking-widest uppercase mb-0.5">Email</div><div className="text-white text-sm font-medium">{siteConfig.business.email}</div></div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.12)" }}><MapPin size={16} style={{ color: siteConfig.theme.accentColor }} /></div>
                  <div><div className="text-white/40 text-xs tracking-widest uppercase mb-0.5">Service Area</div><div className="text-white text-sm font-medium">{siteConfig.business.serviceAreas.join(", ")}</div></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.12)" }}><Clock size={16} style={{ color: siteConfig.theme.accentColor }} /></div>
                  <div><div className="text-white/40 text-xs tracking-widest uppercase mb-0.5">Hours</div><div className="text-white text-sm font-medium">{siteConfig.business.hours}</div></div>
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.12)" }}><span style={{ color: siteConfig.theme.accentColor }} className="text-2xl">&#10003;</span></div>
                <h3 className="text-white font-sans font-bold text-xl">Request Sent!</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">Thanks for reaching out. We will get back to you the same day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs tracking-widest uppercase">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.12)" }} onFocus={(e) => { e.target.style.borderColor = siteConfig.theme.accentColor }} onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.12)" }} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs tracking-widest uppercase">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Smith" required className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.12)" }} onFocus={(e) => { e.target.style.borderColor = siteConfig.theme.accentColor }} onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.12)" }} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-widest uppercase">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(857) 555-0000" required className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.12)" }} onFocus={(e) => { e.target.style.borderColor = siteConfig.theme.accentColor }} onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.12)" }} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-widest uppercase">Service Needed</label>
                  <select name="service" value={formData.service} onChange={handleChange} required className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <option value="" style={{ background: "#1a1a1a" }}>Select a service</option>
                    <option value="attic" style={{ background: "#1a1a1a" }}>Attic Cleanout</option>
                    <option value="crawlspace" style={{ background: "#1a1a1a" }}>Crawlspace Cleanout</option>
                    <option value="organize" style={{ background: "#1a1a1a" }}>Clean and Organize</option>
                    <option value="hauling" style={{ background: "#1a1a1a" }}>Full Hauling and Disposal</option>
                    <option value="sanitize" style={{ background: "#1a1a1a" }}>Deep Clean and Sanitize</option>
                    <option value="other" style={{ background: "#1a1a1a" }}>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-widest uppercase">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your space and what you need..." rows={4} className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200 resize-none" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.12)" }} onFocus={(e) => { e.target.style.borderColor = siteConfig.theme.accentColor }} onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.12)" }} />
                </div>
                <button type="submit" disabled={loading} className="w-full py-4 rounded-full text-black font-bold text-sm tracking-widest uppercase transition-all duration-200 mt-2 hover:opacity-90 disabled:opacity-50" style={{ background: siteConfig.theme.accentColor }}>{loading ? "Sending..." : "Send My Estimate Request"}</button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
