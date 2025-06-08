import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Safety from './components/Safety'
import Benefits from './components/Benefits'
import ComingSoon from './components/ComingSoon'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Safety />
      <Benefits />
      <ComingSoon />
      <Footer />
    </div>
  )
}

export default App
