import { useState } from 'react'
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
// STRUCTURE is identical everywhere — sticky at top-[30px], logo left, a centered
// w-fit .glass link group, the primary CTA top-right. The `theme` prop swaps ONLY
// link colors. The whole site now uses the light #DFDFDF base, so `light` is the
// default; `dark` remains only for any page still on a dark hero (flips text to
// white without changing structure).
export default function Nav({ theme = 'light' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const dark = theme === 'dark'

  // Swap the whole glass material on dark so nav chips read on the near-black
  // hero (a light milky panel would kill white-text contrast).
  const glassClass = dark ? 'glass-dark' : 'glass'
  const linkClass = `cursor-pointer rounded-[10px] px-3.5 py-1.5 text-[13px] font-medium tracking-[0.02em] transition-colors duration-200 ${
    dark ? 'text-white/85 hover:text-white' : 'text-ink hover:text-brand-green'
  }`

  return (
    <>
      <div className="sticky top-[30px] z-40 mt-[30px] px-5 sm:px-8 md:px-12">
        <nav className="relative mx-auto flex max-w-[1600px] items-center justify-between">
          {/* Left — logo (routes home) */}
          <motion.div {...fadeDown(0)} className="shrink-0">
            <NavLink to="/" aria-label="Maanvi Solar Energy — home">
              {dark ? (
                // The logo lockup has dark text — give it a light chip so it
                // stays legible on the near-black hero.
                <span className="inline-flex rounded-2xl bg-white/95 px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                  <Logo className="h-9 sm:h-11 md:h-12" />
                </span>
              ) : (
                <Logo className="h-12 sm:h-14 md:h-16" />
              )}
            </NavLink>
          </motion.div>

          {/* Center — links in a single centered glass group (hidden on mobile) */}
          <motion.div
            {...fadeDown(1)}
            className={`${glassClass} absolute left-1/2 hidden w-fit -translate-x-1/2 items-center gap-1 px-2 py-2 md:flex`}
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

          {/* Right — primary CTA (md+) + glass hamburger (mobile) */}
          <div className="flex items-center gap-3">
            <motion.div {...fadeDown(2)} className="hidden md:block">
              {dark ? (
                // TEMP bridge: on a still-green interior hero the solid-green primary
                // CTA would be green-on-green, so use a glass CTA until the page is
                // refactored to the light base (then it falls back to <Button/>).
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
              ) : (
                <Button to={consultationTarget.to} hash={consultationTarget.hash}>
                  Book a Consultation
                </Button>
              )}
            </motion.div>

            <motion.button
              {...fadeDown(2)}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className={`${glassClass} flex h-11 w-11 flex-col items-center justify-center gap-1 transition-transform duration-200 hover:scale-[1.03] md:hidden`}
            >
              <span className={`h-0.5 w-4 ${dark ? 'bg-white' : 'bg-ink'}`} />
              <span className={`h-0.5 w-4 ${dark ? 'bg-white' : 'bg-ink'}`} />
              <span className={`h-0.5 w-4 ${dark ? 'bg-white' : 'bg-ink'}`} />
            </motion.button>
          </div>
        </nav>
      </div>

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
