import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Radio } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]
const VIDEO_URL = '/hero.mp4'

const tags = ['Rooftop Solar', 'Commercial', 'AMC & Service']

const stats = [
  { number: '₹8Cr', plus: true, label: 'Annual Turnover' },
  { number: '500', plus: true, label: 'Projects' },
  { number: '2', plus: false, label: 'States' },
]

// Benefits block modelled on the Verdro reference's second section: text +
// outline tags + stat row on the left, a rounded landscape media card on the right.
export default function BenefitsBlock() {
  const videoRef = useRef(null)
  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <section className="bg-[#F4F4F2] px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — copy, tags, stats */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="font-display font-bold tracking-[-0.02em] text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05 }}
          >
            Discover the <span className="text-brand-green">benefits</span> of clean
            solar power
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
            className="mt-5 max-w-md text-base leading-relaxed text-muted"
          >
            Sustainable, low-maintenance and built to cut your power bills for decades
            of dependable output.
          </motion.p>

          {/* Outline tag pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="cursor-default rounded-full border border-black/15 px-5 py-2 text-sm font-medium tracking-tight text-ink transition-colors duration-200 hover:border-brand-green hover:text-brand-green"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Stat row */}
          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.08 }}
              >
                <div
                  className="font-display font-bold tracking-[-0.03em] text-ink"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}
                >
                  {stat.number}
                  {stat.plus && <span className="text-brand-green">+</span>}
                </div>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — rounded landscape media card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="glass relative overflow-hidden rounded-[20px] p-2"
        >
          <div className="relative overflow-hidden rounded-[14px] bg-[#DFDFDF]">
            <video
              ref={videoRef}
              className="aspect-[4/3] w-full translate-y-[7%] scale-105 object-contain p-3 sm:aspect-[16/10]"
              src={VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="pointer-events-none absolute inset-0 rounded-[14px] shadow-[inset_0_0_60px_rgba(0,0,0,0.12)]" />

            {/* Floating label pill */}
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 backdrop-blur-md">
              <Radio className="h-4 w-4 text-brand-green" strokeWidth={2} />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                Live Install
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
