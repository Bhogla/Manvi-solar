import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import CTABand from '../sections/CTABand'
import Footer from '../components/Footer'
import { services } from '../data/services'

const EASE = [0.22, 1, 0.36, 1]

// Services page — full grid of all services (Service data shape).
export default function Services() {
  return (
    <main className="font-body">
      <PageHeader
        eyebrow="Our Services"
        title="Solar, Solved End To End."
        subtitle="From panels and inverters to pumps, street lights and full rooftop installs — one partner for every solar need across Uttarakhand and Uttar Pradesh."
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: (i % 3) * 0.08, duration: 0.6, ease: EASE }}
                  className="group flex cursor-pointer flex-col rounded-3xl border border-black/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-xl hover:shadow-black/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-black">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-black/60">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] text-brand-green opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Enquire
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-16 flex flex-col items-center gap-5 rounded-3xl bg-neutral-50 px-6 py-12 text-center">
            <h3 className="max-w-xl font-display text-2xl font-bold tracking-tight text-black sm:text-3xl">
              Not sure which system fits your site?
            </h3>
            <p className="max-w-lg text-[15px] leading-relaxed text-black/60">
              Tell us about your roof, load and budget — we'll size the right solution and
              share honest numbers.
            </p>
            <Button to="/contact" variant="green">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </main>
  )
}
