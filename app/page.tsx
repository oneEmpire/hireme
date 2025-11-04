import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import HowItWorks from "@/components/how-it-works"
import DownloadApp from "@/components/download-app"
import Testimonials from "@/components/testimonials"
import Team from "@/components/team"
import Waitlist from "@/components/waitlist"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <DownloadApp />
      <Testimonials />
      <Team />
      <Waitlist />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
