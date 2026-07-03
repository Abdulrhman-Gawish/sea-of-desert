import { Routes, Route } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import ScrollToTop from './components/ScrollToTop'

// Pages
import HomePage from './pages/HomePage'
import BusinessSolutionsPage from './pages/BusinessSolutionsPage'
import SupplyChainPage from './pages/SupplyChainPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <LangProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/business-solutions" element={<BusinessSolutionsPage />} />
        <Route path="/supply-chain" element={<SupplyChainPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <FloatingCTA />
    </LangProvider>
  )
}
