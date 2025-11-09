import Header from "@/components/header"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Opportunity from "@/components/opportunity"
import Speakers from "@/components/speakers"
import QuizSection from "@/components/quiz-section"
import RegistrationForm from "@/components/registration-form"
import SuperYacht from "@/components/super-yacht"
import Partners from "@/components/partners"
import Testimonials from "@/components/testimonials"
import EventHighlights from "@/components/event-highlights"
import Footer from "@/components/footer"
import TicketModal from "@/components/ticket-model"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <TicketModal />
      <Header />
      <Hero />
      <Stats />
      <Opportunity />
      <Speakers />
      <QuizSection />
      <div id="registration-form">
        <RegistrationForm />
      </div>
      <SuperYacht />
      <Partners />
      <Testimonials />
      <EventHighlights />
      <Footer />
    </main>
  )
}
