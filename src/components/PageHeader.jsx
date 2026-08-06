import { motion } from 'framer-motion'
import Nav from './Nav'

const EASE = [0.22, 1, 0.36, 1]

// Shared interior-page header — the glass Nav over a brand-green gradient.
// Reused by every non-home page so the nav treatment stays identical to the
// hero. Pass an eyebrow, title, and optional subtitle.
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="relative overflow-hidden bg-brand-green">
      {/* Depth: darker green vignette + soft yellow sun glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/25" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-yellow/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />

      <div className="relative z-10">
        {/* TEMP: interior heroes are still dark green until each page is refactored
            to the light base; keep the nav's dark variant so links stay legible.
            Flip to the default light variant when this page is refactored. */}
        <Nav theme="dark" />

        <div className="pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12">
            {eyebrow && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="text-xs font-medium uppercase tracking-[0.2em] text-white/70"
              >
                {eyebrow}
              </motion.p>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.6, ease: EASE }}
              className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
              style={{ letterSpacing: '-0.03em', lineHeight: 0.9 }}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.6, ease: EASE }}
                className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
