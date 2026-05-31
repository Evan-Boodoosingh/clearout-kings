import { useState } from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { siteConfig } from "../../config/site.config"

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Resend integration goes here when backend is set up
    // For now we simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${siteConfig.theme.grassTexture})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Section heading — sits on the grass above the stone block */}
      <motion.div
        className="text-center mb-10 relative z-10"
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
            Get In Touch
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
          Ready for a Lawn<br />
          <em
            className="italic"
            style={{ color: siteConfig.theme.accentColor }}
          >
            You're Proud Of?
          </em>
        </h2>
        <p className="text-white/90 mt-4 text-sm max-w-md mx-auto leading-relaxed">
          Get your free quote in under 2 minutes. No pressure, no obligation — just honest pricing from a team you can trust.
        </p>
      </motion.div>

      {/* Stone block — the main form container */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto overflow-hidden rounded-3xl"
        variants={blockVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        style={{
          backgroundImage: `url(/assets/concrete-texture.jpg)`,
          backgroundSize: "1000px",
          
        }}
      >
        {/* Dark overlay on stone */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content inside the stone block */}
        <div className="relative z-10 p-10 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT — Contact info */}
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <div>
                <h3
                  className="font-serif font-bold text-white text-2xl mb-2"
                >
                  Let's Talk
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Fill out the form and we'll get back to you within 24 hours. Or give us a call — we're always happy to chat.
                </p>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-5">
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="flex items-center gap-4 no-underline group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                    style={{
                      background: `${siteConfig.theme.accentColor}15`,
                      border: `1px solid ${siteConfig.theme.accentColor}30`,
                    }}
                  >
                    <Phone size={16} style={{ color: siteConfig.theme.accentColor }} />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs tracking-widest uppercase mb-0.5">Phone</div>
                    <div className="text-white text-sm font-medium">{siteConfig.business.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="flex items-center gap-4 no-underline group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                    style={{
                      background: `${siteConfig.theme.accentColor}15`,
                      border: `1px solid ${siteConfig.theme.accentColor}30`,
                    }}
                  >
                    <Mail size={16} style={{ color: siteConfig.theme.accentColor }} />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs tracking-widest uppercase mb-0.5">Email</div>
                    <div className="text-white text-sm font-medium">{siteConfig.business.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${siteConfig.theme.accentColor}15`,
                      border: `1px solid ${siteConfig.theme.accentColor}30`,
                    }}
                  >
                    <MapPin size={16} style={{ color: siteConfig.theme.accentColor }} />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs tracking-widest uppercase mb-0.5">Service Area</div>
                    <div className="text-white text-sm font-medium">{siteConfig.business.serviceAreas.join(", ")}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${siteConfig.theme.accentColor}15`,
                      border: `1px solid ${siteConfig.theme.accentColor}30`,
                    }}
                  >
                    <Clock size={16} style={{ color: siteConfig.theme.accentColor }} />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs tracking-widest uppercase mb-0.5">Hours</div>
                    <div className="text-white text-sm font-medium">{siteConfig.business.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: `${siteConfig.theme.accentColor}20`, border: `1px solid ${siteConfig.theme.accentColor}` }}
                >
                  <span style={{ color: siteConfig.theme.accentColor }} className="text-2xl">✓</span>
                </div>
                <h3 className="text-white font-serif font-bold text-xl">Message Sent!</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 order-1 lg:order-2">

                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs tracking-widest uppercase">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200"
                      style={{
                        background: "rgba(0,0,0,0.4)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                      onFocus={(e) => e.target.style.borderColor = siteConfig.theme.accentColor}
                      onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs tracking-widest uppercase">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      required
                      className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200"
                      style={{
                        background: "rgba(0,0,0,0.4)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                      onFocus={(e) => e.target.style.borderColor = siteConfig.theme.accentColor}
                      onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-widest uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(863) 555-0000"
                    required
                    className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200"
                    style={{
                      background: "rgba(0,0,0,0.4)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                    onFocus={(e) => e.target.style.borderColor = siteConfig.theme.accentColor}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
                  />
                </div>

                {/* Service */}
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-widest uppercase">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200"
                    style={{
                      background: "rgba(0,0,0,0.4)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <option value="" style={{ background: "#1a1a1a" }}>Select a service</option>
                    <option value="lawn-mowing" style={{ background: "#1a1a1a" }}>Lawn Mowing & Edging</option>
                    <option value="landscaping" style={{ background: "#1a1a1a" }}>Landscaping & Design</option>
                    <option value="irrigation" style={{ background: "#1a1a1a" }}>Irrigation & Sprinklers</option>
                    <option value="fertilization" style={{ background: "#1a1a1a" }}>Fertilization & Weed Control</option>
                    <option value="trimming" style={{ background: "#1a1a1a" }}>Hedge & Shrub Trimming</option>
                    <option value="sod" style={{ background: "#1a1a1a" }}>Sod Installation</option>
                    <option value="other" style={{ background: "#1a1a1a" }}>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-widest uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property and what you need..."
                    rows={4}
                    className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "rgba(0,0,0,0.4)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                    onFocus={(e) => e.target.style.borderColor = siteConfig.theme.accentColor}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full text-black font-bold text-sm tracking-widest uppercase transition-all duration-200 mt-2 hover:opacity-90 disabled:opacity-50"
                  style={{ background: siteConfig.theme.accentColor }}
                >
                  {loading ? "Sending..." : "Send My Free Quote Request"}
                </button>

              </form>
            )}

          </div>
        </div>
      </motion.div>

    </section>
  )
}