"use client"

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Ask for Service",
      description: "Describe your request or household chores",
      icon: "📝",
      color: "bg-yellow-100",
      role: "User",
    },
    {
      number: "2",
      title: "Book a Worker",
      description: "Find and hire the right professional",
      icon: "👤",
      color: "bg-blue-100",
      role: "User & Worker",
    },
    {
      number: "3",
      title: "Pay via Wallet",
      description: "Securely pay from your SkillHaus wallet",
      icon: "💳",
      color: "bg-orange-100",
      role: "User",
    },
    {
      number: "4",
      title: "Work Gets Done",
      description: "Professional completes the task with quality",
      icon: "✓",
      color: "bg-green-100",
      role: "Worker",
    },
    {
      number: "5",
      title: "Worker Receives",
      description: "Payment automatically transferred to worker's app",
      icon: "💰",
      color: "bg-emerald-100",
      role: "Worker",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">How It Works</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          A seamless five-step process connecting users with trusted professionals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div
                className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mx-auto mb-4`}
              >
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{step.description}</p>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full mb-4">
                {step.role}
              </span>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 w-6 h-1 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why SkillHaus is Your Trusted Middleman</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">✓</span>
                  <span>
                    <strong>Secure Payments:</strong> Your funds are protected in our wallet system
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">✓</span>
                  <span>
                    <strong>Fair Pricing:</strong> Transparent rates for both users and workers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">✓</span>
                  <span>
                    <strong>Worker Protection:</strong> Guaranteed payment directly to worker apps
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">✓</span>
                  <span>
                    <strong>Quality Assurance:</strong> Vetted professionals and customer reviews
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">✓</span>
                  <span>
                    <strong>Dispute Resolution:</strong> We mediate any issues between parties
                  </span>
                </li>
              </ul>
            </div>
            <img
              src="/secure-payment-transaction-middleman-platform.jpg"
              alt="Secure payment flow"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
