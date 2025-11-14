"use client"

import { useState } from "react"
import BookingModal from "./booking-modal"

const services = [
  { id: 1, name: "Cleaning", emoji: "🧹", price: 5000, rating: 4.8, workers: 24 },
  { id: 2, name: "Cooking", emoji: "👨‍🍳", price: 8000, rating: 4.9, workers: 18 },
  { id: 3, name: "Laundry", emoji: "👕", price: 3500, rating: 4.7, workers: 15 },
  { id: 4, name: "Babysitting", emoji: "👶", price: 6000, rating: 4.9, workers: 12 },
  { id: 5, name: "Gardening", emoji: "🌱", price: 4500, rating: 4.6, workers: 9 },
  { id: 6, name: "Pet Care", emoji: "🐕", price: 3000, rating: 4.8, workers: 10 },
]

interface ServiceBrowserProps {
  onBookingConfirm?: (booking: any) => void
}

interface Booking {
  id?: string
  service: string
  date: string
  time: string
  worker: any
  notes: string
  amount: number
}

export default function ServiceBrowser({ onBookingConfirm }: ServiceBrowserProps) {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)
  const [showBooking, setShowBooking] = useState(false)

  const handleBookingConfirm = (booking: any) => {
    onBookingConfirm?.(booking)
    setShowBooking(false)
  }

  return (
    <div className="safe-area">
      <h1 className="text-2xl font-bold mb-6">Services</h1>

      <div className="grid grid-cols-2 gap-4">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => {
              setSelectedService(service)
              setShowBooking(true)
            }}
            className="bg-card border border-border rounded-lg p-4 hover:shadow-md hover:border-primary/50 transition"
          >
            <div className="text-4xl mb-2">{service.emoji}</div>
            <h3 className="font-bold mb-1">{service.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">₦{service.price.toLocaleString()}</p>
            <div className="flex items-center gap-1 text-xs">
              <span>⭐ {service.rating}</span>
              <span className="text-muted-foreground">({service.workers})</span>
            </div>
          </button>
        ))}
      </div>

      {showBooking && selectedService && (
        <BookingModal
          service={selectedService}
          onClose={() => setShowBooking(false)}
          onConfirm={handleBookingConfirm}
        />
      )}
    </div>
  )
}
