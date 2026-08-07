import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { X, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import NavLink from './NavLink'
import Button from './Button'
import { navLinks, consultationTarget } from '../data/team'

const EASE = [0.22, 1, 0.36, 1]

// fadeDown for nav items: {opacity:0,y:-20} -> {opacity:1,y:0}, delay index*0.1s.
const fadeDown = (index) => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: index * 0.1, duration: 0.5, ease: EASE },
})

// Shared top navigation, used by every page so the five navbars never drift.
// A FIXED full-width bar so it stays visible through every section, not just the
// hero. At the very top it's transparent (blended with the hero); once scrolled
// past ~60px it fades in a frosted-white bar with a hairline border + soft
// shadow. STRUCTURE is identical everywhere — logo left, a centered w-fit .glass
// link group, the primary CTA top-right. The `theme` prop sets the AT-TOP link
// colors (light hero → dark links; dark/green hero → white links); once scrolled
// onto light content the bar goes frosted-white and links always read dark.
export default function Nav({ theme = 'light' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const barRef = useRef(null)
  const [barHeight, setBarHeight] = useState(0)
  const dark = theme === 'dark'

  // Once scrolled, the frosted-white bar means the nav sits on a LIGHT surface
  // regardless of the page's hero theme, so links/logo must read dark. `onLight`
  // is true on the light home hero always, and on any page once scrolled.
  const onLight = scrolled || !dark

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Measure the fixed bar so the in-flow spacer below reserves exactly its
  // height — keeps every page's layout identical to before the nav went fixed.
  useLayoutEffect(() => {
    const el = barRef.current
    if (!el) return
    const measure = () => setBarHeight(el.offsetHeight)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const glassClass = onLight ? 'glass' : 'glass-dark'
  const linkClass = `cursor-pointer rounded-[10px] px-3.5 py-1.5 text-[13px] font-medium tracking-[0.02em] transition-colors duration-200 ${
    onLight ? 'text-ink hover:text-brand-green' : 'text-white/85 hover:text-white'
  }`

  return (
    <>
      <div
        ref={barRef}
        className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
          scrolled
            ? 'border-black/5 bg-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl'
            : 'border-transparent bg-transparent shadow-none'
        }`}
      >
        {/* Same content grid as the hero and every page section
            (mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12), so the logo's left
            edge and the CTA's right edge line up exactly with the page content
            below rather than floating in the raw viewport. 3-track grid:
            logo | centered links | CTA. The center track is auto-width and
            truly centered by the equal 1fr side tracks, so the link group can't
            drift into the logo or CTA the way an absolute-centered element does
            (Framer Motion resets the inline transform after its entrance, which
            would wipe a -translate-x-1/2). */}
        <nav className="mx-auto grid w-full max-w-[1500px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-3 sm:px-8 lg:px-12 lg:py-4">
          {/* Left — logo (routes home) */}
          <motion.div {...fadeDown(0)} className="col-start-1 justify-self-start">
            <NavLink to="/" aria-label="Maanvi Solar Energy — home">
              {onLight ? (
                <Logo className="h-12 sm:h-14 md:h-16" />
              ) : (
                // The logo lockup has dark text — over the dark/green hero give
                // it a light chip so it stays legible.
                <span className="inline-flex rounded-2xl bg-white/95 px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                  <Logo className="h-9 sm:h-11 md:h-12" />
                </span>
              )}
            </NavLink>
          </motion.div>

          {/* Center — links in a single centered glass group. Shown from lg up,
              where there's room for logo + links + CTA without collision;
              below lg the hamburger menu carries every link. */}
          <motion.div
            {...fadeDown(1)}
            className={`${glassClass} col-start-2 hidden w-fit items-center gap-1 justify-self-center px-2 py-2 lg:flex`}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                hash={link.hash}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>

          {/* Right — primary CTA (lg+) + glass hamburger (below lg) */}
          <div className="col-start-3 flex items-center gap-3 justify-self-end">
            <motion.div {...fadeDown(2)} className="hidden lg:block">
              {onLight ? (
                <Button to={consultationTarget.to} hash={consultationTarget.hash}>
                  Book a Consultation
                </Button>
              ) : (
                // Over the green interior hero the solid-green primary CTA would
                // be green-on-green, so use a glass CTA there; once scrolled onto
                // light content this flips back to the solid <Button/>.
                <NavLink
                  to={consultationTarget.to}
                  hash={consultationTarget.hash}
                  className="glass-dark group inline-flex cursor-pointer items-center gap-3 py-2 pl-6 pr-2 text-sm font-medium tracking-[-0.01em] text-white transition-transform duration-200 hover:scale-[1.02]"
                >
                  Book a Consultation
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-green transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                </NavLink>
              )}
            </motion.div>

            <motion.button
              {...fadeDown(2)}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className={`${glassClass} flex h-11 w-11 flex-col items-center justify-center gap-1 transition-transform duration-200 hover:scale-[1.03] lg:hidden`}
            >
              <span className={`h-0.5 w-4 ${onLight ? 'bg-ink' : 'bg-white'}`} />
              <span className={`h-0.5 w-4 ${onLight ? 'bg-ink' : 'bg-white'}`} />
              <span className={`h-0.5 w-4 ${onLight ? 'bg-ink' : 'bg-white'}`} />
            </motion.button>
          </div>
        </nav>
      </div>

      {/* In-flow spacer: reserves the fixed bar's exact height so page content
          starts below it (no overlap, no layout shift). Sits inside each page's
          first section, so its hero/header background shows through behind the
          transparent bar at the top. */}
      <div aria-hidden="true" style={{ height: barHeight }} />

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white px-5 py-5 sm:px-8">
          <div className="flex items-center justify-between">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              <Logo className="h-11 sm:h-12" />
            </NavLink>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <X className="h-4 w-4 text-white" strokeWidth={2.5} />
            </button>
          </div>

          <div className="mt-16 flex flex-col gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                hash={link.hash}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl font-bold uppercase tracking-tight text-black transition-colors hover:text-brand-green"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <NavLink
            to={consultationTarget.to}
            hash={consultationTarget.hash}
            onClick={() => setMenuOpen(false)}
            className="mt-auto flex items-center gap-2 text-xl font-medium uppercase tracking-[0.12em] text-brand-green"
          >
            Book a Consultation
            <ArrowUpRight className="h-6 w-6" />
          </NavLink>
        </div>
      )}
    </>
  )
}
