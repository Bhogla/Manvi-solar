import Hero from '../sections/Hero'
import BenefitsBlock from '../sections/BenefitsBlock'
import WhyChoose from '../sections/WhyChoose'
import HowItWorks from '../sections/HowItWorks'
import StatBand from '../sections/StatBand'
import ServicesPreview from '../sections/ServicesPreview'
import ProjectsPreview from '../sections/ProjectsPreview'
import Testimonials from '../sections/Testimonials'
import CTABand from '../sections/CTABand'
import Footer from '../components/Footer'

// Home page — editorial light hero + benefits block, then the layered stack of
// light sections, closing with the shared CTA + Footer.
export default function Home() {
  return (
    <main className="font-body">
      <Hero />
      <BenefitsBlock />
      <WhyChoose />
      <HowItWorks />
      <StatBand />
      <ServicesPreview />
      <ProjectsPreview />
      <Testimonials />
      <CTABand />
      <Footer />
    </main>
  )
}
