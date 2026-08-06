import { motion } from 'framer-motion'
import { PhoneCall, PencilRuler, Sun } from 'lucide-react'
import Kicker from '../components/Kicker'

const EASE = [0.22, 1, 0.36, 1]

const steps = [
  {
    n: '01',
    icon: PhoneCall,
    title: 'Free Consultation & Site Survey',
    body: 'We visit your rooftop, study your bills and shadow patterns, and size the system to your real energy needs.',
  },
  {
    n: '02',
    icon: PencilRuler,
    title: 'Custom Solar Design & Install',
    body: 'A tailored design with bifacial modules and the right inverter, installed end-to-end by our own certified crew.',
  },
  {
    n: '03',
    icon: Sun,
    title: 'Activation, AMC & Savings',
    body: 'We commission, connect to the grid and hand over — then keep it running at peak output with ongoing AMC.',
  },
]

// "How It Works" — the customer journey as a connected 3-step flow. Horizontal
// on desktop (with a connecting line + arrows), stacked on mobile.
export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Kicker>How It Works</Kicker>
          <h2
            className="mt-5 font-display font-bold tracking-tight text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05 }}
          >
            Three steps to going solar
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            No jargon, no runaround — a clear path from first call to a rooftop
            that pays for itself.
          </p>
        </div>

        <div className="relative mt-16">
          {/* connecting line across the row (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[38px] hidden md:block">
            <div className="mx-[16%] h-px bg-gradient-to-r from-brand-green/0 via-brand-green/40 to-brand-green/0" />
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, ease: EASE, delay: i * 0.12 }}
                  className="relative flex flex-col"
                >
                  {/* node marker sitting on the line */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-brand-green text-white shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.25),0px_12px_30px_rgba(30,122,52,0.28)]">
                      <Icon className="h-8 w-8" strokeWidth={1.6} />
                    </span>
                    <span
                      className="font-display font-bold leading-none text-ink/10"
                      style={{ fontSize: 'clamp(2.5rem, 4vw, 3.25rem)', letterSpacing: '-0.03em' }}
                    >
                      {step.n}
                    </span>
                  </div>

                  <div className="glass mt-6 flex-1 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.4),0px_18px_40px_rgba(4,23,10,0.1)]">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
