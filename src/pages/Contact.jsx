import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ReceiptText, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import { company } from '../data/team'

const EASE = [0.22, 1, 0.36, 1]

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { delay, duration: 0.6, ease: EASE },
})

// Contact page — details, GST, enquiry form (mailto), map embed.
export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Solar enquiry from ${form.name || 'website'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
  }

  const details = [
    {
      icon: MapPin,
      label: 'Visit Us',
      value: company.address,
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: company.phones.join('  ·  '),
      links: company.phones.map((p) => `tel:${p.replace(/\s+/g, '')}`),
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: company.email,
      link: `mailto:${company.email}`,
    },
    {
      icon: ReceiptText,
      label: 'GST',
      value: company.gst,
    },
  ]

  const inputBase =
    'w-full rounded-2xl border border-black/10 bg-neutral-50 px-4 py-3.5 text-sm text-black placeholder-black/40 outline-none transition-all duration-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20'

  return (
    <main className="font-body">
      <PageHeader
        eyebrow="Contact"
        title="Let's Talk Solar."
        subtitle="Questions about sizing, savings or a site visit? Reach out — we usually reply the same day."
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-[1500px] px-6 sm:px-8 lg:px-12 grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Details */}
          <motion.div {...reveal()}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-green">
              Get In Touch
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Reach Maanvi Solar
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-black/60">
              Serving {company.coverage}. Call, email, or send the form and our team will
              get right back to you.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {details.map((d) => {
                const Icon = d.icon
                return (
                  <div
                    key={d.label}
                    className="rounded-3xl border border-black/10 bg-neutral-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-black/45">
                      {d.label}
                    </h3>
                    {d.link ? (
                      <a
                        href={d.link}
                        className="mt-1.5 block text-sm font-medium leading-relaxed text-black transition-colors hover:text-brand-green"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1.5 text-sm font-medium leading-relaxed text-black/80">
                        {d.value}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Enquiry form */}
          <motion.form
            {...reveal(0.1)}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-black/10 bg-white p-7 shadow-xl shadow-black/5 sm:p-9"
          >
            <h3 className="font-display text-2xl font-bold tracking-tight text-black">
              Send an Enquiry
            </h3>
            <p className="mt-2 text-sm text-black/55">
              Fill this in and we'll open your email client to send it over.
            </p>

            <div className="mt-7 flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-black/55">
                  Name
                </label>
                <input id="name" name="name" type="text" required value={form.name} onChange={update} placeholder="Your name" className={inputBase} />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-black/55">
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={update} placeholder="+91 …" className={inputBase} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-black/55">
                    Email
                  </label>
                  <input id="email" name="email" type="email" value={form.email} onChange={update} placeholder="you@email.com" className={inputBase} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-black/55">
                  Message
                </label>
                <textarea id="message" name="message" required rows={4} value={form.message} onChange={update} placeholder="Tell us about your roof, load and budget…" className={`${inputBase} resize-none`} />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-green/25 active:scale-[0.98]"
              >
                Send Enquiry
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Map embed */}
      <section className="bg-neutral-50 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12">
          <div className="overflow-hidden rounded-3xl border border-black/10">
            <iframe
              title="Maanvi Solar Energy location"
              src="https://www.google.com/maps?q=Kuanwala,Dehradun,Uttarakhand&output=embed"
              className="h-[360px] w-full md:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
