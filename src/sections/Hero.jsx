import { motion, useReducedMotion } from 'framer-motion'
import { Instagram, Send, Facebook, Globe, ArrowUpRight } from 'lucide-react'
import Nav from '../components/Nav'

const EASE = [0.22, 1, 0.36, 1]

// Editorial light hero modelled on the Verdro reference, adapted to solar.
// hero-centerpiece.webp (transparent floating solar island) is the focal visual.
export default function Hero() {
  const reduce = useReducedMotion()

  // fadeUp: fires on load, completes fast so nothing is ever left half-faded.
  const fadeUp = (index) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: index * 0.08, duration: 0.5, ease: EASE },
  })

  const pills = [
    { top: 'High-yield', main: 'Bifacial Panels' },
    { top: 'Turnkey', main: 'End-to-End Install' },
    { top: 'Included', main: 'AMC Cover' },
  ]

  const socials = [
    { Icon: Instagram, label: 'Instagram' },
    { Icon: Send, label: 'Telegram' },
    { Icon: Facebook, label: 'Facebook' },
  ]

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col bg-[#F4F4F2]"
    >
      {/* Faint top-left brand glow (clipped in its own wrapper so the section
          keeps no overflow — that would break the sticky nav). */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-green/[0.12] blur-[130px]" />
        <div className="absolute left-24 -top-24 h-[460px] w-[460px] rounded-full bg-brand-blue/[0.10] blur-[140px]" />
      </div>

      <Nav theme="light" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col px-6 sm:px-8 lg:px-12">
        <div className="relative grid flex-1 grid-cols-1 content-start items-center gap-y-6 pt-6 lg:grid-cols-12 lg:content-center lg:gap-x-2 lg:gap-y-4 lg:pt-0">
          {/* Left rail — socials + language (desktop only, decorative) */}
          <motion.div
            {...fadeUp(0)}
            className="absolute left-0 top-4 z-30 hidden flex-col items-center gap-4 lg:flex"
          >
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white transition-transform duration-200 hover:scale-110"
              >
                <Icon className="h-4 w-4" strokeWidth={1.9} />
              </a>
            ))}
            <span className="mt-1 h-8 w-px bg-ink/15" />
            <button
              aria-label="Language"
              className="flex flex-col items-center gap-1 text-[11px] font-medium leading-none text-muted transition-colors hover:text-ink"
            >
              <Globe className="h-4 w-4" strokeWidth={1.8} />
              <span className="text-ink">En</span>
              <span>DE</span>
            </button>
          </motion.div>

          {/* Visual column — the floating solar island (source order puts it
              first: island above text on mobile, island-left on desktop). */}
          <div className="relative lg:col-span-7 lg:pl-14">
            {/* soft ground shadow so the island reads as floating */}
            <div className="pointer-events-none absolute inset-x-10 bottom-6 h-24 rounded-[50%] bg-black/20 blur-2xl lg:bottom-16" />

            {/* Continuous gentle bob on the island (wrapper keeps the loop
                separate from the img's load-in scale/opacity entrance). */}
            <motion.div
              animate={reduce ? {} : { y: [0, -11, 0] }}
              transition={
                reduce ? {} : { duration: 4, repeat: Infinity, ease: 'easeInOut' }
              }
            >
              <motion.img
                initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: EASE }}
                src="/hero-centerpiece.webp"
                alt="Floating solar island — rooftop-scale panels set in a landscaped micro-terrain"
                width={1200}
                height={960}
                className="relative mx-auto w-full max-w-[680px] drop-shadow-[0_36px_50px_rgba(0,0,0,0.22)] lg:max-w-none lg:scale-[1.06] lg:origin-center"
              />
            </motion.div>

            {/* Feature pills near the island base */}
            <motion.div
              {...fadeUp(4)}
              className="relative z-20 -mt-2 flex flex-wrap justify-center gap-2.5 lg:absolute lg:bottom-2 lg:left-[190px] lg:mt-0 lg:justify-start"
            >
              {pills.map((p) => (
                <div
                  key={p.main}
                  className="rounded-2xl border border-black/[0.06] bg-white/80 px-4 py-2 backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white"
                >
                  <div className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted">
                    {p.top}
                  </div>
                  <div className="text-sm font-semibold tracking-tight text-brand-green">
                    {p.main}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Text column */}
          <div className="relative z-20 flex flex-col items-start lg:col-span-5 lg:-ml-4">
            <motion.h1
              {...fadeUp(1)}
              className="font-display font-bold tracking-[-0.02em] text-ink"
              style={{
                fontSize: 'clamp(2.25rem, 4.4vw, 4rem)',
                lineHeight: 1.03,
                textWrap: 'balance',
              }}
            >
              Powering <span className="text-brand-green">Clean</span> Futures for a
              brighter tomorrow
            </motion.h1>

            <motion.p
              {...fadeUp(2)}
              className="mt-5 max-w-md text-base leading-relaxed text-muted"
            >
              Rooftop, commercial &amp; industrial solar across Uttarakhand &amp; UP.
            </motion.p>

            {/* View Our Work pill with circular thumb + arrow */}
            <motion.div {...fadeUp(3)} className="mt-8">
              <a
                href="/projects"
                className="group inline-flex items-center gap-4 rounded-full bg-ink py-2 pl-7 pr-2 text-white transition-transform duration-200 hover:scale-[1.02]"
              >
                <span className="text-sm font-medium tracking-tight">
                  View Our Work
                </span>
                <ArrowUpRight
                  className="h-4 w-4 text-white/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                  strokeWidth={2.2}
                />
                <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/20">
                  <img
                    src="/thumb-btn.png"
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </span>
              </a>
            </motion.div>

            {/* Real-metric stat card — left edge sits on the text column's
                spine (aligned with the heading, subhead and "View Our Work"
                button stacked above it). */}
            <motion.div
              {...fadeUp(5)}
              className="glass mt-8 w-[240px] rounded-[22px] p-4"
            >
              <div className="flex items-start justify-between">
                <div
                  className="font-display font-bold leading-none text-ink"
                  style={{ fontSize: '2.25rem', letterSpacing: '-0.02em' }}
                >
                  ₹8Cr<span className="text-brand-green">+</span>
                </div>
                <div className="pt-1 text-right text-[11px] font-medium uppercase leading-tight tracking-[0.12em] text-muted">
                  Annual
                  <br />
                  Turnover
                </div>
              </div>
              <div className="mt-3 h-[88px] w-full overflow-hidden rounded-2xl">
                <img
                  src="/thumb-stat.png"
                  alt="Close-up of installed solar panels"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Secondary floating accent — small wind + solar scene anchored to
                the far-right corner. Bottom-aligned with the stat card and
                right-aligned with the heading's right edge; fluid width fills
                the corner and keeps a comfortable gap from the card across
                breakpoints. Shown from xl up, where the right corner has room
                for it without crowding the stat card; below xl the island +
                text + card already balance the hero. */}
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 right-0 z-10 hidden w-[clamp(200px,17vw,300px)] xl:block"
            >
              <motion.img
                src="/hero-side.webp"
                alt=""
                width={1200}
                height={960}
                animate={reduce ? {} : { y: [0, -9, 0] }}
                transition={
                  reduce
                    ? {}
                    : { duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
                }
                className="h-auto w-full object-contain drop-shadow-[0_18px_22px_rgba(0,0,0,0.18)]"
              />
            </motion.div>
          </div>
        </div>

        {/* Two muted caption lines under the hero */}
        <motion.div
          {...fadeUp(6)}
          className="grid gap-5 pb-10 pt-6 sm:grid-cols-2 lg:pb-14 lg:pt-2"
        >
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Rooftop, commercial and industrial solar — engineered for maximum yield
            and decades of clean output.
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-muted sm:justify-self-end sm:text-right">
            Smart inverters, monitoring and AMC — clean power that keeps paying back,
            year after year.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
