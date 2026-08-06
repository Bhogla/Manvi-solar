import { useNavigate, useLocation } from 'react-router-dom'

// Router-aware nav link that also supports a `hash` target on the destination
// route. Navigating to a hash scrolls the section into view (even cross-page).
export default function NavLink({ to, hash, className, children, onClick, ...props }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = (e) => {
    e.preventDefault()
    onClick?.()

    if (hash) {
      if (location.pathname === to) {
        // Same page — just scroll to the section.
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        // Different page — navigate, then scroll once the section mounts.
        navigate(to)
        requestAnimationFrame(() => {
          setTimeout(
            () => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }),
            80,
          )
        })
      }
    } else {
      navigate(to)
    }
  }

  return (
    <a href={`${to}${hash || ''}`} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  )
}
