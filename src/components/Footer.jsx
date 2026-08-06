import { Phone, Mail, MapPin } from 'lucide-react'
import Logo from './Logo'
import NavLink from './NavLink'
import { company, navLinks } from '../data/team'

// Shared footer — logo, quick links, contact block, coverage line. Used by every page.
export default function Footer() {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand + coverage */}
          <div>
            <div className="inline-flex rounded-xl bg-white p-4">
              <Logo className="h-12" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Rooftop, commercial and industrial solar across {company.coverage}.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Quick Links
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    hash={link.hash}
                    className="cursor-pointer text-sm font-medium uppercase tracking-[0.12em] text-white/80 transition-colors hover:text-brand-yellow"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact block */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
                <span>{company.address}</span>
              </li>
              {company.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-brand-yellow" />
                  <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-yellow" />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.15em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {company.name}. All Rights Reserved.
          </span>
          <span>GST {company.gst}</span>
        </div>
      </div>
    </footer>
  )
}
