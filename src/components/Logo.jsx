// Shared brand logo — the Maanvi Solar Energy horizontal lockup (public/Logo.png).
// Control size via `className` (set a height, width stays auto).
export default function Logo({ className = 'h-9' }) {
  return (
    <img
      src="/Logo.png"
      alt="Maanvi Solar Energy"
      className={`w-auto object-contain ${className}`}
    />
  )
}
