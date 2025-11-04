"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$9.99",
      period: "/month",
      description: "Perfect for occasional needs",
      features: [
        "5 service requests per month",
        "Access to 100+ workers",
        "Basic customer support",
        "Ratings and reviews",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$29.99",
      period: "/month",
      description: "For regular household needs",
      features: [
        "Unlimited service requests",
        "Access to 500+ workers",
        "Priority customer support",
        "Ratings and reviews",
        "Scheduling & reminders",
        "Monthly reports",
      ],
      cta: "Most Popular",
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$49.99",
      period: "/month",
      description: "Complete household management",
      features: [
        "Unlimited service requests",
        "Dedicated worker matching",
        "24/7 premium support",
        "Ratings and reviews",
        "Scheduling & reminders",
        "Monthly reports",
        "Custom preferences",
        "Loyalty rewards",
      ],
      cta: "Go Premium",
      highlighted: false,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Simple, Transparent Pricing</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Choose the plan that fits your needs</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl transform scale-105"
                  : "bg-white shadow-md"
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <p className={plan.highlighted ? "text-blue-100 mb-6" : "text-gray-600 mb-6"}>{plan.description}</p>
              <div className="mb-6">
                <span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                <span className={plan.highlighted ? "text-blue-100" : "text-gray-600"}>{plan.period}</span>
              </div>
              <Button
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                }`}
              >
                {plan.cta}
              </Button>
              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
