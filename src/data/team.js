// TeamContact shape: { name, role, phone }
// Known contact from the Maanvi company profile (design.md).
export const team = [
  {
    name: 'Dharmendra Singh Negi',
    role: 'Owner / Primary Contact',
    phone: '+91 7818806374',
  },
  {
    name: 'Maanvi Solar Energy',
    role: 'Sales & Support',
    phone: '+91 9664471744',
  },
]

// Shared company info reused across pages (nav, footer, CTA, contact).
export const company = {
  name: 'Maanvi Solar Energy',
  contact: 'Dharmendra Singh Negi',
  phones: ['+91 7818806374', '+91 9664471744'],
  email: 'maanvisolarenergy@gmail.com',
  address: 'Near Patanjali Factory, Kuanwala, Dehradun, Uttarakhand – 248001',
  gst: '05AIBPN9879P1ZA',
  coverage: 'Uttarakhand & Uttar Pradesh',
}

// Global navigation links — shared by Nav, mobile menu, and Footer.
// `to` is the route path; `hash` (optional) scrolls to a section on that route.
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

// Where every "Book a Consultation" CTA points.
export const consultationTarget = { to: '/contact' }
