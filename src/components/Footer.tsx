import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">div.finance</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              The first non-custodial protocol for automated yield diversification. 
              Protect your principal while building a diversified portfolio on autopilot.
            </p>
            <p className="text-sm text-gray-500">
              © 2025 div.finance. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Protocol</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#safety" className="hover:text-white transition-colors">Safety</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://github.com/div-finance"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/DivFinance1479"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
            <p className="text-sm text-gray-500 text-center">
              This protocol is currently in development. No financial advice is provided. 
              Always do your own research before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
