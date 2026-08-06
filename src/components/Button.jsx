import { ArrowUpRight } from 'lucide-react'
import NavLink from './NavLink'

// Shared primary CTA — solid green, rounded-[16px], inner-highlight depth, and a
// white circular arrow chip, with a scale + soft-glow hover. One interactive
// language across every page. variant: 'green' | 'white'.
// Pass `to` (+ optional `hash`) for router navigation, or `href` for an anchor.
export default function Button({
  href,
  to,
  hash,
  children,
  variant = 'green',
  icon = true,
  className = '',
  ...props
}) {
  const base =
    'group inline-flex items-center gap-3 rounded-[16px] py-2 pl-6 pr-2 text-sm font-medium tracking-[-0.01em] transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]'
  const variants = {
    green:
      'bg-brand-green text-white shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.25),0px_8px_24px_rgba(30,122,52,0.18)] hover:shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.25),0px_12px_34px_rgba(30,122,52,0.36)]',
    white:
      'bg-white text-brand-green ring-1 ring-black/10 shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.6),0px_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0px_12px_34px_rgba(0,0,0,0.14)]',
  }
  const chip = {
    green: 'bg-white text-brand-green',
    white: 'bg-brand-green text-white',
  }
  const classes = `${base} ${variants[variant]} ${className}`
  const content = (
    <>
      <span className="leading-none">{children}</span>
      {icon && (
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${chip[variant]}`}
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <NavLink to={to} hash={hash} className={classes} {...props}>
        {content}
      </NavLink>
    )
  }

  return (
    <a href={href || '#contact'} className={classes} {...props}>
      {content}
    </a>
  )
}
