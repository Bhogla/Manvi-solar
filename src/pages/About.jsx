import { motion } from 'framer-motion'
import {
  Target,
  Compass,
  MapPin,
  Leaf,
  ShieldCheck,
  HeartHandshake,
  Phone,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTABand from '../sections/CTABand'
import Footer from '../components/Footer'
import { company, team } from '../data/team'

const EASE = [0.22, 1, 0.36, 1]

// Standard reveal used across the page's sections.
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { delay, duration: 0.6, ease: EASE },
})

const values = [
  {
    icon: Leaf,
    title: 'Clean By Design',
    description:
      'Every system we install cuts bills and carbon — bifacial & TOPCon technology tuned for real North-India conditions.',
  },
  {
    icon: ShieldCheck,
    title: 'Built To Last',
    description:
      'Quality components, careful workmanship and AMC support that keeps output high for the full life of the plant.',
  },
  {
    icon: HeartHandshake,
    title: 'Honest Guidance',
    description:
      'Straight advice on sizing and savings — no oversell, just the right system for your home or business.',
  },
]

const stats = [
  { number: '₹8Cr', plus: true, label: 'Annual Turnover' },
  { number: '500', plus: true, label: 'Projects Delivered' },
  { number: '9', plus: false, label: 'Solar Solutions' },
  { number: '2', plus: false, label: 'States Served' },
]

export default function About() {
  return (
    <main className="font-body">
      <PageHeader
        eyebrow="About Us"
        title="Clean Energy, Delivered End To End."
        subtitle="Maanvi Solar Energy designs, installs and maintains rooftop, commercial and industrial solar across Uttarakhand and Uttar Pradesh — turning bright rooftops into lasting savings."
      />

      {/* Company story */}
      <section className="bg-white px-5 py-24 sm:px-8 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div {...reveal()}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-green">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-black sm:text-5xl">
              A Solar Partner You Can Count On
            </h2>
          </motion.div>
          <motion.div
            {...reveal(0.1)}
            className="flex flex-col gap-5 text-[15px] leading-relaxed text-black/65"
          >
            <p>
              Founded and led by {company.contact}, Maanvi Solar Energy has grown into a
              trusted name for solar across {company.coverage}. From our base near
              Patanjali Factory in Kuanwala, Dehradun, we deliver complete solar
              solutions — panels, inverters, water heaters, pumps, street lights and
              full rooftop installations.
            </p>
            <p>
              We handle every project end to end: site assessment, system design,
              installation, grid connection and long-term maintenance. That single-window
              approach is why homeowners, businesses and industries keep coming back — and
              why we crossed{' '}
              <span className="font-medium text-black">₹8&nbsp;crore in turnover</span>{' '}
              with over 500 projects delivered.
            </p>
            <p>
              Our promise is simple: reliable, high-efficiency systems, honest guidance on
              what you actually need, and support that lasts well beyond installation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-neutral-50 px-5 py-24 sm:px-8 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div
              {...reveal()}
              className="rounded-3xl border border-black/10 bg-white p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                <Compass className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-black">
                Our Vision
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-black/65">
                A solar-powered future for every home and industry across North India —
                where clean energy is the obvious, affordable default, not the exception.
              </p>
            </motion.div>

            <motion.div
              {...reveal(0.1)}
              className="rounded-3xl border border-black/10 bg-white p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                <Target className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-black">
                Our Mission
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-black/65">
                To deliver dependable, high-efficiency solar systems backed by honest
                advice and lasting service — making the switch to solar simple, profitable
                and worry-free.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  {...reveal(i * 0.1)}
                  key={v.title}
                  className="rounded-3xl border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-xl hover:shadow-black/5"
                >
                  <Icon className="h-7 w-7 text-brand-green" strokeWidth={1.75} />
                  <h4 className="mt-5 font-display text-lg font-semibold tracking-tight text-black">
                    {v.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">
                    {v.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-white px-5 py-24 sm:px-8 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div {...reveal()}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-green">
              Where We Work
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Serving Uttarakhand &amp; Uttar Pradesh
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-black/65">
              Headquartered in Dehradun, our teams install and service solar across two
              states — from Himalayan foothill towns to the industrial belts of western
              UP. Wherever the sun reaches, we can power it.
            </p>
          </motion.div>

          <motion.div {...reveal(0.1)} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                state: 'Uttarakhand',
                places: 'Dehradun · Haridwar · Rishikesh · Roorkee',
              },
              {
                state: 'Uttar Pradesh',
                places: 'Saharanpur · Muzaffarnagar · Meerut · Bijnor',
              },
            ].map((region) => (
              <div
                key={region.state}
                className="rounded-3xl border border-black/10 bg-neutral-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <MapPin className="h-7 w-7 text-brand-green" strokeWidth={1.75} />
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-black">
                  {region.state}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  {region.places}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Turnover stat band */}
      <section className="bg-brand-green px-5 py-20 sm:px-8 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} {...reveal(i * 0.08)} className="text-center">
                <div className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
                  {stat.number}
                  {stat.plus && (
                    <span className="text-brand-yellow" style={{ fontSize: '0.5em' }}>
                      +
                    </span>
                  )}
                </div>
                <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/75 sm:text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / contacts */}
      <section className="bg-white px-5 py-24 sm:px-8 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-green">
              The People
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Talk To Our Team
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-black/65">
              Real people, ready to help you size a system and plan your install.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {team.map((person, i) => (
              <motion.div
                {...reveal(i * 0.1)}
                key={person.name}
                className="flex items-center gap-5 rounded-3xl border border-black/10 bg-neutral-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-green/10 font-display text-2xl font-bold text-brand-green">
                  {person.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-black">
                    {person.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-black/45">
                    {person.role}
                  </p>
                  <a
                    href={`tel:${person.phone.replace(/\s+/g, '')}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-brand-green transition-colors hover:text-brand-blue"
                  >
                    <Phone className="h-4 w-4" />
                    {person.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </main>
  )
}
