"use client"

import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Simplify Your Life?</h2>
        <p className="text-lg md:text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have found reliable, professional domestic workers through
          SkillHaus.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">Start Now</Button>
          <Button className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">Learn More</Button>
        </div>
        <img
          src="/happy-family-at-home-smiling-satisfied.jpg"
          alt="Happy customers"
          className="mt-12 w-full h-64 object-cover rounded-xl"
        />
      </div>
    </section>
  )
}
