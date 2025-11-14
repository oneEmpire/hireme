"use client"

import { useState } from "react"

interface WorkerProfileProps {
  worker: {
    id: number
    name: string
    rating: number
    reviews: number
    avatar: string
    experience: string
    bio?: string
    services?: string[]
    responseTime?: string
    completedJobs?: number
  }
  onClose: () => void
  onBook?: () => void
}

export default function WorkerProfile({ worker, onClose, onBook }: WorkerProfileProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const reviews = [
    { name: "Adekunle", rating: 5, text: "Excellent service! Very professional.", date: "Nov 3, 2024" },
    { name: "Chioma", rating: 5, text: "Jane is amazing. Highly recommended!", date: "Oct 28, 2024" },
    { name: "Tunde", rating: 4, text: "Good service, will use again.", date: "Oct 15, 2024" },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end z-50">
      <div className="bg-card w-full rounded-t-2xl p-6 max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom">
        <button onClick={onClose} className="absolute top-6 right-6 text-2xl hover:opacity-50">
          ✕
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl">{worker.avatar}</div>
            <div>
              <h2 className="text-2xl font-bold">{worker.name}</h2>
              <p className="text-muted-foreground">{worker.experience} experience</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-bold text-lg">⭐ {worker.rating}</span>
                <span className="text-muted-foreground">({worker.reviews} reviews)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-input rounded-lg p-3 text-center">
              <p className="text-muted-foreground text-xs mb-1">Completed</p>
              <p className="font-bold text-lg">{worker.completedJobs || 150}</p>
            </div>
            <div className="bg-input rounded-lg p-3 text-center">
              <p className="text-muted-foreground text-xs mb-1">Response Time</p>
              <p className="font-bold text-sm">{worker.responseTime || "2 mins"}</p>
            </div>
            <div className="bg-input rounded-lg p-3 text-center">
              <p className="text-muted-foreground text-xs mb-1">Success Rate</p>
              <p className="font-bold text-lg">98%</p>
            </div>
          </div>

          {worker.bio && (
            <div className="mb-6">
              <h3 className="font-bold mb-2">About</h3>
              <p className="text-muted-foreground text-sm">{worker.bio}</p>
            </div>
          )}

          {worker.services && worker.services.length > 0 && (
            <div className="mb-6">
              <h3 className="font-bold mb-3">Services</h3>
              <div className="flex flex-wrap gap-2">
                {worker.services.map((service) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(selectedService === service ? null : service)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      selectedService === service
                        ? "bg-primary text-white"
                        : "bg-input border border-border hover:border-primary/50"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h3 className="font-bold mb-4">Customer Reviews</h3>
          <div className="space-y-4">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-input rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <span className="text-sm">{"⭐".repeat(review.rating)}</span>
                </div>
                <p className="text-sm text-muted-foreground">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onBook}
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
        >
          Book {worker.name}
        </button>
      </div>
    </div>
  )
}
