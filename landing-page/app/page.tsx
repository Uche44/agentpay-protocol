import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Vision from './components/Vision'
import HowItWorks from './components/HowItWorks'
import Architecture from './components/Architecture'
import UseCases from './components/UseCases'
import Roadmap from './components/Roadmap'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Vision />
        <HowItWorks />
        <Architecture />
        <UseCases />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
