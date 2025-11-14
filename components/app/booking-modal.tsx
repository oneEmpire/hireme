"use client"

import { useState } from "react"

interface Worker {
  id: number
  name: string
  rating: number
  reviews: number
  avatar: string
  experience: string
}

interface BookingModalProps {
  service: any
  onClose: () => void
  onConfirm?: (booking: any) => void
}

const workers: Worker[] = [
  { id: 1, name: "Jane Doe", rating: 4.8, reviews: 124, avatar: "👩", experience: "5 years" },
  { id: 2, name: "Mary Smith", rating: 4.9, reviews: 98, avatar: "👩", experience: "7 years" },
  { id: 3, name: "Sarah Johnson", rating: 4.7, reviews: 156, avatar: "👩", experience: "3 years" },
]

export default function BookingModal({ service, onClose, onConfirm }: BookingModalProps) {
  const [step, setStep] = useState<"details" | "worker" | "confirm">("details")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null)
  const [notes, setNotes] = useState("")
  const [isBooking, setIsBooking] = useState(false)

  const handleNext = () => {
    if (step === "details" && date && time) {
      setStep("worker")
    } else if (step === "worker" && selectedWorker) {
      setStep("confirm")
    }
  }

  const handleConfirm = async () => {
    if (date && time && selectedWorker) {
      setIsBooking(true)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const booking = {
        service: service.name,
        date,
        time,
        worker: selectedWorker,
        notes,
        amount: service.price,
      }

      onConfirm?.(booking)
      setIsBooking(false)
      onClose()
    }
  }

  const handleBack = () => {
    if (step === "worker") setStep("details")
    if (step === "confirm") setStep("worker")
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end z-50">
      <div className="bg-card w-full rounded-t-2xl p-6 animate-in slide-in-from-bottom max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {step === "details" && `Book ${service.name}`}
            {step === "worker" && "Select Worker"}
            {step === "confirm" && "Confirm Booking"}
          </h2>
          <button onClick={onClose} className="text-2xl hover:opacity-50">
            ✕
          </button>
        </div>

        {/* Step 1: Date & Time Selection */}
        {step === "details" && (
          <div className="space-y-6">
            <div className="bg-secondary/20 rounded-lg p-4 border border-secondary/30">
              <p className="text-sm text-muted-foreground mb-1">Price per session</p>
              <p className="text-2xl font-bold text-primary">₦{service.price.toLocaleString()}</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Select Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Select Time</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Choose a time</option>
                <option value="08:00">8:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="18:00">6:00 PM</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Notes (Optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Add any special requests..."
                rows={3}
              />
            </div>
          </div>
        )}

        {/* Step 2: Worker Selection */}
        {step === "worker" && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground mb-4">Choose your preferred worker</p>
            {workers.map((worker) => (
              <button
                key={worker.id}
                onClick={() => setSelectedWorker(worker)}
                className={`w-full p-4 rounded-lg border-2 transition ${
                  selectedWorker?.id === worker.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{worker.avatar}</div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold">{worker.name}</h4>
                    <p className="text-sm text-muted-foreground">{worker.experience} experience</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm font-medium">⭐ {worker.rating}</span>
                      <span className="text-xs text-muted-foreground">({worker.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === "confirm" && (
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service</span>
                <span className="font-semibold">{service.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Worker</span>
                <span className="font-semibold">{selectedWorker?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date & Time</span>
                <span className="font-semibold">
                  {date} at {time}
                </span>
              </div>
              {notes && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Notes</span>
                  <span className="font-semibold text-right max-w-xs">{notes}</span>
                </div>
              )}
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-bold">Total Amount</span>
                <span className="text-xl font-bold text-primary">₦{service.price.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3 mt-8">
          {step !== "details" && (
            <button
              onClick={handleBack}
              className="flex-1 bg-card border border-border py-3 rounded-lg font-semibold hover:bg-input transition"
            >
              Back
            </button>
          )}
          {step !== "confirm" ? (
            <button
              onClick={handleNext}
              disabled={(step === "details" && (!date || !time)) || (step === "worker" && !selectedWorker)}
              className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleConfirm}
              disabled={isBooking}
              className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50"
            >
              {isBooking ? "Processing..." : "Confirm & Pay"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
