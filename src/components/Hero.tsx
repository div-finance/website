import React from 'react'
import { TrendingUp, Shield, Zap } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Diversify Your Yield
            <span className="block gradient-text">On Autopilot</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A non-custodial protocol that automatically reinvests your yield while protecting your principal. 
            Turn your passive income into a diversified portfolio without ever losing control of your assets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Learn How It Works
            </button>
            <button 
              onClick={() => scrollToSection('coming-soon')}
              className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              View Timeline
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Non-Custodial</h3>
              <p className="text-gray-600 text-center">Your tokens never leave your wallet. You maintain full control.</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated</h3>
              <p className="text-gray-600 text-center">Set your preferences once and let the protocol handle the rest.</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Diversified</h3>
              <p className="text-gray-600 text-center">Transform yield into a balanced portfolio automatically.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
