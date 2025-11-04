"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "How do I book a worker?",
      answer:
        "Simply describe your service needs, browse available workers, check their ratings and reviews, and book a time that works for you. It takes just 3 steps!",
    },
    {
      question: "Are your workers vetted and trusted?",
      answer:
        "Yes! All our workers go through a thorough vetting process including background checks, skills verification, and customer reviews.",
    },
    {
      question: "What if I am not satisfied with the service?",
      answer:
        "We offer a satisfaction guarantee. If you are not happy with the service, you can request a replacement or full refund within 24 hours.",
    },
    {
      question: "How much does it cost?",
      answer:
        "We offer flexible pricing plans starting from $9.99/month for occasional needs to $49.99/month for premium household management.",
    },
    {
      question: "Can I reschedule or cancel?",
      answer:
        "Yes, you can reschedule or cancel your bookings up to 24 hours before the scheduled time without any penalty.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Absolutely. We use industry-leading encryption and security measures to protect your payment information.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Find answers to common questions about our service</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && <div className="px-6 pb-6 text-gray-600 bg-gray-50">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
