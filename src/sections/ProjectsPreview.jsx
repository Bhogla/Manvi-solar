import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Button from '../components/Button'
import Kicker from '../components/Kicker'
import { projects } from '../data/projects'

const EASE = [0.22, 1, 0.36, 1]

// Home projects preview — 3 project cards from data/projects.js, on the base +
// glass system for cohesion with the sections above.
export default function ProjectsPreview() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-base px-5 py-24 sm:px-8 md:px-12 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-16 h-[420px] w-[420px] rounded-full bg-brand-blue/[0.10] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Kicker>Recent Work</Kicker>
            <h2
              className="mt-5 font-display font-bold tracking-tight text-ink"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05 }}
            >
              Our Projects
            </h2>
          </div>
          <Button to="/projects" variant="green" className="self-start sm:self-auto">
            View All
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
              className="glass group cursor-pointer overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.4),0px_20px_44px_rgba(4,23,10,0.14)]"
            >
              <div className="relative m-2 overflow-hidden rounded-[12px]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-brand-green px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white">
                    {project.type}
                  </span>
                </div>
              </div>
              <div className="px-6 pb-6 pt-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <span className="whitespace-nowrap font-display text-sm font-semibold text-brand-blue">
                    {project.capacityKw} kW
                  </span>
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                  <MapPin className="h-4 w-4 text-brand-green" />
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
