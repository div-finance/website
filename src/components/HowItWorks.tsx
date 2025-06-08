import React from 'react'
import { ArrowRight, CheckCircle, Repeat, TrendingUp } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Approve & Configure",
      description: "Approve the protocol to monitor your ERC-4626 tokens and set your protected principal amount."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Yield Detection",
      description: "The protocol continuously monitors your balance for yield growth above your principal threshold."
    },
    {
      icon: <Repeat className="w-8 h-8" />,
      title: "Automatic Reinvestment",
      description: "When yield is detected, it's automatically reinvested according to your preferences - either as cashflow or diversification."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple three-step process that puts your yield diversification on autopilot 
            while keeping your assets completely under your control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-sm card-hover text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6 text-primary-600">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Example Scenario</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Your Setup:</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  You have 1000 stETH earning 4% APY
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  You set 1000 stETH as your protected principal
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  You configure 50% to USDC, 50% to diversify
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What Happens:</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Protocol detects 40 stETH yield after one year
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  20 stETH converted to USDC for cashflow
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  20 stETH swapped to other assets for diversification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
