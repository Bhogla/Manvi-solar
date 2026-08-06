import { motion } from 'framer-motion'
import { services } from '../data/services'
import Kicker from '../components/Kicker'

const EASE = [0.22, 1, 0.36, 1]

// Experience band — big bold numbers on the light base. Service-type count is
// pulled live from the services data so it never drifts from the real list.
const stats = [
  { number: '₹8Cr', plus: true, label: 'Annual Turnover' },
  { number: '500', plus: true, label: 'Projects Delivered' },
  { number: '2', plus: false, label: 'States Served' },
  { number: String(services.length), plus: true, label: 'Service Types' },
]

export default function StatBand() {
  return (
    <section className="relative overflow-hidden bg-base py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-brand-green/[0.12] blur-[130px]" />
        <div className="absolute -right-20 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-brand-yellow/[0.08] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-center text-center"
        >
          <Kicker center>By The Numbers</Kicker>
          <h2
            className="mt-5 max-w-2xl font-display font-bold tracking-tight text-ink"
            style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.08 }}
          >
            A track record you can build a rooftop on
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-x-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
              className="flex flex-col items-center text-center md:border-l md:border-black/10 md:first:border-l-0"
            >
              <div
                className="font-display font-bold tracking-[-0.03em] text-ink"
                style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)', lineHeight: 1 }}
              >
                {stat.number}
                {stat.plus && (
                  <span className="text-brand-green" style={{ fontSize: '0.45em' }}>
                    +
                  </span>
                )}
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
