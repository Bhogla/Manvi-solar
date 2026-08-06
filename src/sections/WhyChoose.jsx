import { motion } from 'framer-motion'
import Kicker from '../components/Kicker'

const EASE = [0.22, 1, 0.36, 1]

const reasons = [
  {
    n: '01',
    title: 'End-to-End Installation',
    body: 'Design, structure, mounting, wiring and grid connection — one accountable team from site survey to commissioning.',
  },
  {
    n: '02',
    title: 'Bifacial & TopCon Panels',
    body: 'High-efficiency modules that capture light on both faces, engineered for maximum yield in North-Indian conditions.',
  },
  {
    n: '03',
    title: 'AMC & Maintenance',
    body: 'Annual maintenance contracts and rapid servicing keep every system performing at peak output, year after year.',
  },
  {
    n: '04',
    title: 'Across Uttarakhand & UP',
    body: 'A local crew with two states of on-ground experience — 500+ rooftop, commercial and industrial installs delivered.',
  },
]

// "Why Choose Maanvi" — premium numbered feature list. Big muted display
// numerals, glass cards with a hover lift, one clean left alignment axis.
export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-base px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-brand-green/[0.10] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-16">
          {/* Heading rail */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <Kicker>Why Maanvi</Kicker>
            <h2
              className="mt-5 font-display font-bold tracking-tight text-ink"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05 }}
            >
              Built to outlast
              <br className="hidden sm:block" /> the payback period
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">
              Solar is a 25-year decision. These are the reasons homeowners,
              factories and institutions across the region choose us for it.
            </p>
          </motion.div>

          {/* Numbered list */}
          <div className="flex flex-col gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
                className="glass group flex items-start gap-6 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.4),0px_18px_40px_rgba(4,23,10,0.12)] sm:gap-8 sm:p-8"
              >
                <span
                  className="font-display font-bold leading-none text-ink/15 transition-colors duration-300 group-hover:text-brand-green/40"
                  style={{ fontSize: 'clamp(2.75rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}
                >
                  {r.n}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {r.title}
                  </h3>
                  <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-muted">
                    {r.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
