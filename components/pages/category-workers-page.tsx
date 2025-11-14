"use client"

import { ArrowLeft, Search } from "lucide-react"
import { useState } from "react"

interface Worker {
  id: string
  name: string
  avatar: string
  rating: number
  category: string
  location: string
}

interface CategoryWorkersPageProps {
  category: string
  onBack: () => void
}

export default function CategoryWorkersPage({ category, onBack }: CategoryWorkersPageProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const categoryWorkers: Record<string, Worker[]> = {
    cleaning: [
      {
        id: "1",
        name: "Mary P",
        avatar: "/female-cleaner-profile.jpg",
        rating: 4,
        category: "cleaning",
        location: "Surulere, Lagos",
      },
      {
        id: "2",
        name: "Anna O",
        avatar: "/female-cleaner-profile.jpg",
        rating: 4,
        category: "cleaning",
        location: "Alagomeji, Lagos",
      },
      {
        id: "3",
        name: "Amaka P",
        avatar: "/female-cleaner-profile.jpg",
        rating: 4,
        category: "cleaning",
        location: "Alagomeji, Lagos",
      },
      {
        id: "4",
        name: "Grace C",
        avatar: "/female-cleaner-profile.jpg",
        rating: 4,
        category: "cleaning",
        location: "Victoria Island, Lagos",
      },
      {
        id: "5",
        name: "Zainab A",
        avatar: "/female-cleaner-profile.jpg",
        rating: 4,
        category: "cleaning",
        location: "Ikeja, Lagos",
      },
      {
        id: "6",
        name: "Comfort O",
        avatar: "/female-cleaner-profile.jpg",
        rating: 4,
        category: "cleaning",
        location: "Lekki, Lagos",
      },
      {
        id: "7",
        name: "Blessing N",
        avatar: "/female-cleaner-profile.jpg",
        rating: 4,
        category: "cleaning",
        location: "Ikoyi, Lagos",
      },
      {
        id: "8",
        name: "Tunde M",
        avatar: "/male-worker-profile.jpg",
        rating: 4,
        category: "cleaning",
        location: "Yaba, Lagos",
      },
    ],
    cooking: [
      {
        id: "9",
        name: "Chef John",
        avatar: "/male-chef-profile.jpg",
        rating: 5,
        category: "cooking",
        location: "Surulere, Lagos",
      },
      {
        id: "10",
        name: "Priya S",
        avatar: "/female-chef-profile.jpg",
        rating: 5,
        category: "cooking",
        location: "Alagomeji, Lagos",
      },
      {
        id: "11",
        name: "Marco L",
        avatar: "/male-chef-profile.jpg",
        rating: 4,
        category: "cooking",
        location: "Victoria Island, Lagos",
      },
      {
        id: "12",
        name: "Ade C",
        avatar: "/male-chef-profile.jpg",
        rating: 5,
        category: "cooking",
        location: "Ikeja, Lagos",
      },
      {
        id: "13",
        name: "Chioma A",
        avatar: "/female-chef-profile.jpg",
        rating: 4,
        category: "cooking",
        location: "Lekki, Lagos",
      },
      {
        id: "14",
        name: "Kunle O",
        avatar: "/male-chef-profile.jpg",
        rating: 5,
        category: "cooking",
        location: "Ikoyi, Lagos",
      },
      {
        id: "15",
        name: "Fatima M",
        avatar: "/female-chef-profile.jpg",
        rating: 4,
        category: "cooking",
        location: "Yaba, Lagos",
      },
      {
        id: "16",
        name: "Sola B",
        avatar: "/male-chef-profile.jpg",
        rating: 5,
        category: "cooking",
        location: "Shomolu, Lagos",
      },
    ],
    washing: [
      {
        id: "17",
        name: "James W",
        avatar: "/male-worker-profile.jpg",
        rating: 4,
        category: "washing",
        location: "Surulere, Lagos",
      },
      {
        id: "18",
        name: "Lisa T",
        avatar: "/female-worker-profile.jpg",
        rating: 4,
        category: "washing",
        location: "Alagomeji, Lagos",
      },
      {
        id: "19",
        name: "Ahmed H",
        avatar: "/male-worker-profile.jpg",
        rating: 4,
        category: "washing",
        location: "Victoria Island, Lagos",
      },
      {
        id: "20",
        name: "Zainab K",
        avatar: "/female-worker-profile.jpg",
        rating: 5,
        category: "washing",
        location: "Ikeja, Lagos",
      },
      {
        id: "21",
        name: "Chidi E",
        avatar: "/male-worker-profile.jpg",
        rating: 4,
        category: "washing",
        location: "Lekki, Lagos",
      },
      {
        id: "22",
        name: "Aisha R",
        avatar: "/female-worker-profile.jpg",
        rating: 5,
        category: "washing",
        location: "Ikoyi, Lagos",
      },
      {
        id: "23",
        name: "Emeka V",
        avatar: "/male-worker-profile.jpg",
        rating: 4,
        category: "washing",
        location: "Yaba, Lagos",
      },
      {
        id: "24",
        name: "Nkechi P",
        avatar: "/female-worker-profile.jpg",
        rating: 5,
        category: "washing",
        location: "Shomolu, Lagos",
      },
    ],
    tailoring: [
      {
        id: "25",
        name: "Emma T",
        avatar: "/female-tailor-profile.jpg",
        rating: 4,
        category: "tailoring",
        location: "Surulere, Lagos",
      },
      {
        id: "26",
        name: "Sophia G",
        avatar: "/female-tailor-profile.jpg",
        rating: 5,
        category: "tailoring",
        location: "Alagomeji, Lagos",
      },
      {
        id: "27",
        name: "Tom S",
        avatar: "/male-tailor-profile.jpg",
        rating: 4,
        category: "tailoring",
        location: "Victoria Island, Lagos",
      },
      {
        id: "28",
        name: "Peju L",
        avatar: "/female-tailor-profile.jpg",
        rating: 5,
        category: "tailoring",
        location: "Ikeja, Lagos",
      },
      {
        id: "29",
        name: "Segun A",
        avatar: "/male-tailor-profile.jpg",
        rating: 4,
        category: "tailoring",
        location: "Lekki, Lagos",
      },
      {
        id: "30",
        name: "Maryam B",
        avatar: "/female-tailor-profile.jpg",
        rating: 5,
        category: "tailoring",
        location: "Ikoyi, Lagos",
      },
      {
        id: "31",
        name: "Yemi D",
        avatar: "/male-tailor-profile.jpg",
        rating: 4,
        category: "tailoring",
        location: "Yaba, Lagos",
      },
      {
        id: "32",
        name: "Okafor U",
        avatar: "/male-tailor-profile.jpg",
        rating: 5,
        category: "tailoring",
        location: "Shomolu, Lagos",
      },
    ],
  }

  const workers = categoryWorkers[category] || []
  const filteredWorkers = workers.filter((w) => w.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const categoryNames: Record<string, string> = {
    cleaning: "Cleaning",
    cooking: "Cooking",
    washing: "Washing",
    tailoring: "Tailoring",
    gardening: "Gardening",
    care: "Care",
  }

  return (
    <main className="pb-24 bg-white min-h-screen">
      {/* Header with Back and Search */}
      <div className="sticky top-0 bg-white pt-4 px-4 pb-4 border-b border-gray-100">
        <div className="max-w-md mx-auto flex items-center justify-between mb-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg transition-all">
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <span className="text-gray-400 text-sm">Search</span>
          <Search size={20} className="text-gray-400" />
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Workers List - Changed from grid to vertical list layout with 6 visible workers before scroll */}
      <div className="max-w-md mx-auto px-4 pt-4">
        {filteredWorkers.length > 0 ? (
          <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {filteredWorkers.map((worker) => (
              <div
                key={worker.id}
                className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:border-blue-500 transition-all"
              >
                {/* Profile Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200">
                  <img
                    src={worker.avatar || "/placeholder.svg"}
                    alt={worker.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Worker Info */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900">{worker.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-gray-500 text-sm">📍</span>
                    <p className="text-gray-500 text-sm">{worker.location}</p>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-black">★ ★ ★ ★</span>
                    <span className="text-gray-900 font-semibold text-sm">{worker.rating}</span>
                  </div>
                </div>

                {/* Book Button */}
                <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all flex-shrink-0">
                  Book
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-sm">No workers found</p>
          </div>
        )}
      </div>
    </main>
  )
}
