"use client"

import { useState } from "react"
import { Bell } from "lucide-react"

export default function WalletPage({ onServiceSelect }: { onServiceSelect?: (service: string) => void }) {
  const [balance] = useState(20.6)
  const userName = "Isaac"

  const topWorkers = [
    {
      name: "Aneza",
      rating: 4.8,
      initial: "A",
      color: "from-blue-300 to-blue-600",
    },
    {
      name: "Maria",
      rating: 4.9,
      initial: "M",
      color: "from-orange-300 to-orange-600",
    },
    {
      name: "Grace",
      rating: 4.7,
      initial: "G",
      color: "from-pink-300 to-pink-600",
    },
  ]

  const services = [
    { id: 1, name: "Cleaning", icon: "🧹" },
    { id: 2, name: "Hair", icon: "✂️" },
    { id: 3, name: "Fashion", icon: "👗" },
    { id: 4, name: "Washing", icon: "🧺" },
    { id: 5, name: "Cooking", icon: "🍴" },
    { id: 6, name: "Repair", icon: "🔨" },
    { id: 7, name: "Babysitting", icon: "👶" },
    { id: 8, name: "Others", icon: "❓" },
  ]

  const handleServiceClick = (serviceName: string) => {
    if (onServiceSelect) {
      onServiceSelect(serviceName)
    }
  }

  return (
    <main className="pb-24 pt-4 px-4">
      {/* Header with greeting and notification */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {userName.charAt(0)}
          </div>
          <h1 className="text-xl font-bold text-foreground">Hi {userName}</h1>
        </div>
        <Bell size={24} className="text-blue-500" />
      </div>

      {/* Wallet Balance Section */}
      <div className="bg-white rounded-3xl p-6 mb-6 shadow-sm border border-gray-100">
        <div className="mb-6">
          <p className="text-gray-600 text-sm mb-2">Wallet balance</p>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-foreground">₦{balance.toFixed(2)}</h2>
            <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-50 transition">
              Add money
            </button>
          </div>
        </div>

        {/* Top Rating Section - Now shows three top-rated workers */}
        <div className="mb-6 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-bold text-gray-700 mb-4">TOP rating for a week</h3>
          <div className="space-y-3">
            {topWorkers.map((worker) => (
              <div key={worker.name} className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${worker.color} rounded-full flex items-center justify-center text-white font-bold`}
                >
                  {worker.initial}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-foreground">{worker.name}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="font-semibold text-foreground">{worker.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid - Made clickable to route to category workers */}
        <div>
          <h3 className="text-sm font-bold text-gray-700 mb-4">Services</h3>
          <div className="grid grid-cols-4 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.name)}
                className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-70 transition"
              >
                <div className="w-12 h-12 flex items-center justify-center text-2xl">{service.icon}</div>
                <p className="text-xs text-center font-medium text-foreground">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advertisement Section */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-6 mb-4 text-center">
        <p className="text-xs font-bold text-gray-600 mb-2">ADVERTISEMENT</p>
        <p className="text-gray-700 text-sm">Ad text goes here</p>
      </div>
    </main>
  )
}
