import React from 'react'
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react'

const Safety = () => {
  const safetyFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Non-Custodial Design",
      description: "Your tokens never leave your wallet. The protocol only has permission to monitor balances and execute swaps on detected yield.",
      highlight: "Zero custody risk"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Principal Protection",
      description: "The protocol can only access funds above your configured principal amount. Your core investment remains untouchable.",
      highlight: "100% principal safety"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparent Operations",
      description: "All transactions are on-chain and verifiable. You can see exactly what the protocol is doing with your yield at all times.",
      highlight: "Full transparency"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Configurable Limits",
      description: "Set maximum reinvestment amounts per cycle. You control the pace and scale of diversification to match your risk tolerance.",
      highlight: "You stay in control"
    }
  ]

  return (
    <section id="safety" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Safety First
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with security and user control as the top priorities. 
            Your assets remain in your wallet while the protocol works its magic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {safetyFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl card-hover">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-3">{feature.description}</p>
                  <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {feature.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Power of Non-Custodial
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Unlike traditional yield farming platforms, div.finance never takes custody of your assets. 
              You approve specific actions, but your tokens remain in your wallet at all times. 
              This eliminates counterparty risk while enabling automated diversification.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium">No Smart Contract Risk</span>
              <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium">No Platform Risk</span>
              <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium">No Custody Risk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Safety
