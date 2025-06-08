import React from 'react'
import { Github, Twitter } from 'lucide-react'

const ComingSoon = () => {
  return (
    <section id="coming-soon" className="py-20 bg-gradient-to-br from-primary-600 to-accent-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Coming Soon
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
            We're putting the finishing touches on the protocol. 
            Follow our development progress and be the first to know when div.finance launches.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Q1 2025</h3>
              <p className="text-primary-100">Testnet launch with limited features</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Q2 2025</h3>
              <p className="text-primary-100">Mainnet beta with select partners</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Q3 2025</h3>
              <p className="text-primary-100">Full public launch</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/div-finance"
              className="text-white hover:text-primary-200 transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://twitter.com/DivFinance1479"
              className="text-white hover:text-primary-200 transition-colors"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComingSoon
