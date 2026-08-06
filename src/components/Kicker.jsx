// Branded section eyebrow — a short green uppercase label with a leading rule.
// One consistent kicker system across the home sections (deliberate brand
// grammar, not a per-section reflex). `center` centres the rule + label.
export default function Kicker({ children, center = false }) {
  return (
    <div
      className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}
    >
      <span className="h-px w-8 bg-brand-green/50" />
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
        {children}
      </span>
    </div>
  )
}
