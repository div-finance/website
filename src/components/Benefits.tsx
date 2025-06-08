import React from 'react'
import { PieChart, DollarSign, Clock, TrendingUp } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: <PieChart className="w-12 h-12" />,
      title: "Automatic Diversification",
      description: "Reduce concentration risk by automatically spreading your yield across different assets and strategies.",
      stats: "Reduce portfolio risk by up to 40%"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Steady Cashflow",
      description: "Convert a portion of your yield to stablecoins for predictable income while maintaining growth potential.",
      stats: "Generate consistent monthly income"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Time Efficiency",
      description: "Set it once and forget it. No need to manually monitor yields or execute complex DeFi strategies.",
      stats: "Save 10+ hours per month"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Compound Growth",
      description: "Your diversified yield continues to generate its own yield, creating a compounding effect across your portfolio.",
      stats: "Maximize long-term returns"
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Diversify on Autopilot?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manual portfolio management is time-consuming and often leads to suboptimal decisions. 
            Automation ensures consistent, emotion-free diversification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm card-hover">
              <div className="text-primary-600 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <div className="bg-primary-50 px-4 py-2 rounded-lg">
                <span className="text-primary-700 font-medium">{benefit.stats}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Diversification Advantage</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-600">Concentrated Position: High risk, volatile returns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Diversified Portfolio: Lower risk, stable growth</span>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                Studies show that diversified portfolios consistently outperform concentrated positions 
                over the long term while significantly reducing downside risk.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Comparison</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Single Asset</span>
                    <span className="text-sm text-gray-900">High Volatility</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Diversified</span>
                    <span className="text-sm text-gray-900">Low Volatility</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '35%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
