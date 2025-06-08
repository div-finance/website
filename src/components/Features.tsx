import React from 'react'
import { Coins, Target, BarChart3, Settings } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Principal Protection",
      description: "Set your protected principal amount. The protocol can only access yield above this threshold, ensuring your core investment remains safe."
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "ERC-4626 Compatible",
      description: "Works with any ERC-4626 compliant yield-bearing token. From staking rewards to lending protocols, diversify any yield source."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Smart Reinvestment",
      description: "Choose between steady cashflow (USDC conversion) or portfolio diversification through automated swaps to new assets."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Configurable Limits",
      description: "Set maximum reinvestment amounts per cycle. You control how much yield gets reinvested and how often."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Diversification Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Concentration risk is one of the biggest threats to long-term wealth building. 
            Our protocol helps you automatically spread risk while maintaining the safety of your principal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 card-hover">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
