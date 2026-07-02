import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Products from './components/Products'
import Partners from './components/Partners'
import WhyUs from './components/WhyUs'
import Vision2030 from './components/Vision2030'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Partners />
      <WhyUs />
      <Vision2030 />
      <Stats />
      <Contact />
      <Footer />
      <FloatingCTA />
    </LangProvider>
  )
}
