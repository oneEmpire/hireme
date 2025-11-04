"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Waitlist() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [service, setService] = useState("cleaning")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && name) {
      setSubmitted(true)
      setEmail("")
      setName("")
      setService("cleaning")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-blue-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">Join Our Waitlist</h2>
          <p className="text-center text-gray-600 text-lg mb-8">
            Be among the first to access SkillHaus and hire skilled domestic workers in your area. Early access members
            get special discounts!
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <p className="text-green-800 font-semibold text-lg">
                ✓ Thank you for joining! Check your email for updates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service You're Interested In
                </label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="cleaning">Cleaning & Housekeeping</option>
                  <option value="washing">Washing & Laundry</option>
                  <option value="cooking">Cooking & Meal Prep</option>
                  <option value="tailoring">Tailoring & Sewing</option>
                  <option value="fashion">Fashion Advice</option>
                  <option value="all">All Services</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition-colors"
              >
                Join the Waitlist
              </Button>

              <p className="text-center text-gray-500 text-sm">
                We'll never spam you. Only updates about SkillHaus and exclusive early access benefits.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
