"use client"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="bg-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight text-balance">
              Find Domestic Workers for Your Home
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Hire skilled professionals for cleaning, cooking, washing, and more easily. Quality services, vetted
              professionals, peace of mind.
            </p>

            <div className="flex gap-3 mb-12">
              <input
                type="text"
                placeholder="Search for a service"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/domestic-worker-cooking-with-apron-smiling-happy-p.jpg"
              alt="Domestic worker"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
