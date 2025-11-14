"use client"

import { useState } from "react"
import WorkerProfile from "./worker-profile"

interface HistoryBooking {
  id: string
  service: string
  worker: string
  date: string
  time: string
  amount: number
  status: "completed" | "upcoming" | "cancelled"
  workerDetails?: {
    name: string
    avatar: string
    rating: number
    reviews: number
    experience: string
  }
}

interface BookingHistoryProps {
  bookings: HistoryBooking[]
}

export default function BookingHistory({ bookings }: BookingHistoryProps) {
  const [selectedWorker, setSelectedWorker] = useState<any>(null)
  const [filterStatus, setFilterStatus] = useState<"all" | "upcoming" | "completed">("all")

  const filteredBookings = filterStatus === "all" ? bookings : bookings.filter((b) => b.status === filterStatus)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700"
      case "upcoming":
        return "bg-blue-100 text-blue-700"
      case "cancelled":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "✓"
      case "upcoming":
        return "⏱"
      case "cancelled":
        return "✕"
      default:
        return "•"
    }
  }

  return (
    <div className="safe-area">
      <h1 className="text-2xl font-bold mb-6">Booking History</h1>

      <div className="flex gap-2 mb-6">
        {(["all", "upcoming", "completed"] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filterStatus === status ? "bg-primary text-white" : "bg-card border border-border hover:border-primary/50"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredBookings.length > 0 ? (
          filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="font-bold mb-1">{booking.service}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{booking.worker}</p>
                  <p className="text-xs text-muted-foreground">
                    {booking.date} at {booking.time}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(booking.status)}`}
                >
                  {getStatusIcon(booking.status)} {booking.status}
                </span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <p className="font-bold text-primary">₦{booking.amount.toLocaleString()}</p>
                {booking.status === "completed" && (
                  <button
                    onClick={() => setSelectedWorker(booking.workerDetails)}
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    View Worker
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No bookings found</p>
            <p className="text-muted-foreground text-sm">
              {filterStatus === "all" ? "Start by booking a service" : `No ${filterStatus} bookings`}
            </p>
          </div>
        )}
      </div>

      {selectedWorker && (
        <WorkerProfile
          worker={selectedWorker}
          onClose={() => setSelectedWorker(null)}
          onBook={() => setSelectedWorker(null)}
        />
      )}
    </div>
  )
}
