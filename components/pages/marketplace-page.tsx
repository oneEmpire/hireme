"use client"

import { useState } from "react"
import { Search, ArrowLeft } from "lucide-react"

interface Worker {
  id: string
  name: string
  avatar: string
  rating: number
}

interface MarketplacePageProps {
  onCategorySelect?: (category: string) => void
}

export default function MarketplacePage({ onCategorySelect }: MarketplacePageProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Category workers with profile circles
  const categoryWorkers: Record<string, Worker[]> = {
    cleaning: [
      { id: "1", name: "Sarah", avatar: "/female-cleaner-profile.jpg", rating: 4.8 },
      { id: "2", name: "Maria", avatar: "/female-cleaner-profile.jpg", rating: 4.9 },
      { id: "3", name: "Rosa", avatar: "/female-cleaner-profile.jpg", rating: 4.7 },
    ],
    cooking: [
      { id: "4", name: "Chef John", avatar: "/male-chef-profile.jpg", rating: 4.9 },
      { id: "5", name: "Priya", avatar: "/female-chef-profile.jpg", rating: 4.8 },
      { id: "6", name: "Marco", avatar: "/male-chef-profile.jpg", rating: 4.7 },
    ],
    washing: [
      { id: "7", name: "James", avatar: "/male-worker-profile.jpg", rating: 4.7 },
      { id: "8", name: "Lisa", avatar: "/female-worker-profile.jpg", rating: 4.8 },
      { id: "9", name: "Ahmed", avatar: "/male-worker-profile.jpg", rating: 4.6 },
    ],
    tailoring: [
      { id: "10", name: "Emma", avatar: "/female-tailor-profile.jpg", rating: 4.6 },
      { id: "11", name: "Sophia", avatar: "/female-tailor-profile.jpg", rating: 4.9 },
      { id: "12", name: "Tom", avatar: "/male-tailor-profile.jpg", rating: 4.7 },
    ],
  }

  const categories = [
    { id: "cleaning", name: "Cleaning", emoji: "🧹", color: "bg-blue-50" },
    { id: "cooking", name: "Cooking", emoji: "👨‍🍳", color: "bg-orange-50" },
    { id: "washing", name: "Washing", emoji: "👕", color: "bg-purple-50" },
    { id: "tailoring", name: "Tailoring", emoji: "✂️", color: "bg-pink-50" },
    { id: "gardening", name: "Gardening", emoji: "🌱", color: "bg-green-50" },
    { id: "care", name: "Care", emoji: "🏥", color: "bg-red-50" },
  ]

  const filteredWorkers = selectedCategory
    ? (categoryWorkers[selectedCategory] || []).filter((w) => w.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : []

  return (
    <main className="pb-24 pt-16 px-4 min-h-screen bg-white">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          {selectedCategory && (
            <button
              onClick={() => {
                setSelectedCategory(null)
                setSearchQuery("")
              }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all"
            >
              <ArrowLeft size={24} className="text-gray-700" />
            </button>
          )}
          <h1 className="text-2xl font-bold text-gray-900">SkillHaus</h1>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
            <Search size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search Categories"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {!selectedCategory ? (
          <>
            {/* Select Categories Section */}
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4">Select Categories</h3>
              <div className="grid grid-cols-3 gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id)
                      onCategorySelect?.(category.id)
                    }}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-all group"
                  >
                    <div
                      className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center text-3xl group-hover:scale-105 transition-transform`}
                    >
                      {category.emoji}
                    </div>
                    <span className="text-xs font-medium text-gray-700 text-center">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Workers */}
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4">Featured Workers</h3>
              <div className="grid grid-cols-3 gap-4">
                {[...Object.values(categoryWorkers).flat().slice(0, 6)].map((worker) => (
                  <button key={worker.id} className="flex flex-col items-center gap-2 group">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-blue-500 transition-all group-hover:scale-105">
                      <img
                        src={worker.avatar || "/placeholder.svg"}
                        alt={worker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-medium text-gray-900">{worker.name}</p>
                      <p className="text-xs text-blue-600 font-semibold">⭐ {worker.rating}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Picks CTA */}
            <button className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all">
              Community Forums
            </button>
          </>
        ) : (
          <>
            {/* Selected Category Workers */}
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4 capitalize">{selectedCategory} Workers</h3>
              {filteredWorkers.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                  {filteredWorkers.map((worker) => (
                    <button key={worker.id} className="flex flex-col items-center gap-2 group">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-blue-500 transition-all group-hover:scale-105">
                        <img
                          src={worker.avatar || "/placeholder.svg"}
                          alt={worker.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-medium text-gray-900">{worker.name}</p>
                        <p className="text-xs text-blue-600 font-semibold">⭐ {worker.rating}</p>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-sm text-gray-600">No workers found</p>
                </div>
              )}
            </div>

            {/* Book Worker CTA */}
            <button className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all">
              Book a Worker
            </button>
          </>
        )}
      </div>
    </main>
  )
}
