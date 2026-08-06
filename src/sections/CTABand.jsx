import { Phone, Mail, ArrowUpRight } from 'lucide-react'
import { company } from '../data/team'

// "Book a Consultation" CTA band with phone + email.
export default function CTABand() {
  return (
    <section id="contact" className="bg-brand-green px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            Go Solar With Maanvi
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
            Book a Consultation
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/75">
            Rooftop, commercial and industrial solar across {company.coverage}. Talk to
            our team about sizing, savings and installation.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 lg:w-auto">
          {company.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="flex cursor-pointer items-center gap-3 rounded-full bg-white/10 px-6 py-4 text-sm font-medium uppercase tracking-[0.12em] text-white transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:text-brand-green"
            >
              <Phone className="h-5 w-5" />
              {phone}
            </a>
          ))}
          <a
            href={`mailto:${company.email}`}
            className="flex cursor-pointer items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-medium text-brand-green transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-black/10"
          >
            <Mail className="h-5 w-5" />
            <span>{company.email}</span>
            <ArrowUpRight className="ml-auto h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
