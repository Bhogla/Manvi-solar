import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Kicker from '../components/Kicker'
import { testimonials } from '../data/testimonials'

const EASE = [0.22, 1, 0.36, 1]

// Home testimonials — 3 entries from data/testimonials.js, on the glass system.
export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <Kicker center>Client Voices</Kicker>
          <h2
            className="mt-5 font-display font-bold tracking-tight text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05 }}
          >
            What our clients say
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
              className="glass flex flex-col p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.4),0px_20px_44px_rgba(4,23,10,0.12)]"
            >
              <Quote className="h-8 w-8 text-brand-yellow" />
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/75">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 border-t border-black/10 pt-5">
                <div className="font-display text-sm font-semibold uppercase tracking-tight text-ink">
                  {t.name}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                  {t.location}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
