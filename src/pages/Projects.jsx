import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTABand from '../sections/CTABand'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

const EASE = [0.22, 1, 0.36, 1]
const filters = ['all', 'residential', 'commercial', 'industrial']

// Projects / Gallery page — grid of Project cards with a type filter.
export default function Projects() {
  const [active, setActive] = useState('all')
  const shown = active === 'all' ? projects : projects.filter((p) => p.type === active)

  return (
    <main className="font-body">
      <PageHeader
        eyebrow="Our Projects"
        title="Rooftops We've Powered."
        subtitle="A look at residential, commercial and industrial installs delivered across Uttarakhand and Uttar Pradesh."
      />

      <section className="bg-white px-5 py-24 sm:px-8 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`cursor-pointer rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-200 ${
                  active === f
                    ? 'bg-brand-green text-white shadow-lg shadow-brand-green/25'
                    : 'bg-neutral-100 text-black/60 hover:bg-neutral-200 hover:text-black'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {shown.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ delay: (i % 3) * 0.06, duration: 0.45, ease: EASE }}
                  className="group cursor-pointer overflow-hidden rounded-3xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-brand-green px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white">
                      {project.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-black">
                        {project.title}
                      </h3>
                      <span className="whitespace-nowrap font-display text-sm font-semibold text-brand-blue">
                        {project.capacityKw} kW
                      </span>
                    </div>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-black/55">
                      <MapPin className="h-4 w-4 text-brand-green" />
                      {project.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <p className="mt-12 text-center text-xs uppercase tracking-[0.2em] text-black/40">
            Project photos are placeholders — real installs coming soon.
          </p>
        </div>
      </section>

      <CTABand />
      <Footer />
    </main>
  )
}
