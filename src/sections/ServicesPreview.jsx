import { motion } from 'framer-motion'
import Button from '../components/Button'
import Kicker from '../components/Kicker'
import { services } from '../data/services'

const EASE = [0.22, 1, 0.36, 1]

// Home services preview — first 4 services from data/services.js, on the glass
// system so it reads as one page with the sections above.
export default function ServicesPreview() {
  const preview = services.slice(0, 4)

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 md:px-12 md:py-32"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Kicker>What We Do</Kicker>
            <h2
              className="mt-5 font-display font-bold tracking-tight text-ink"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05 }}
            >
              Our Services
            </h2>
          </div>
          <Button to="/services" variant="green" className="self-start sm:self-auto">
            View All
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
                className="glass group cursor-pointer p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.4),0px_20px_44px_rgba(4,23,10,0.12)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
