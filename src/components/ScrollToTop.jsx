import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// On route change (with no hash target), jump to the top of the new page.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
