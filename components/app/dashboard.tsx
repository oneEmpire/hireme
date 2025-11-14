"use client"

import { useState } from "react"
import WalletCard from "./wallet-card"
import ServiceBrowser from "./service-browser"
import BottomNavigation from "./bottom-navigation"
import PaymentProcessor from "./payment-processor"
import BookingHistory from "./booking-history"

type Page = "home" | "browse" | "bookings" | "profile"

interface PaymentDetails {
  amount: number
  service: string
  worker: string
  date: string
  time: string
}

interface BookingRecord {
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

export default function AppDashboard({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) {
  const [currentPage, setCurrentPage] = useState<Page>("home")
  const [balance, setBalance] = useState(25000)
  const [showPayment, setShowPayment] = useState(false)
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null)
  const [bookings, setBookings] = useState<BookingRecord[]>([
    {
      id: "1",
      service: "Cleaning",
      worker: "Jane Doe",
      date: "Nov 5, 2024",
      time: "2:00 PM",
      amount: 5000,
      status: "completed",
      workerDetails: {
        name: "Jane Doe",
        avatar: "👩",
        rating: 4.8,
        reviews: 124,
        experience: "5 years",
      },
    },
    {
      id: "2",
      service: "Cooking",
      worker: "Mike John",
      date: "Nov 10, 2024",
      time: "6:00 PM",
      amount: 8000,
      status: "upcoming",
      workerDetails: {
        name: "Mike John",
        avatar: "👨",
        rating: 4.9,
        reviews: 98,
        experience: "7 years",
      },
    },
  ])

  const handleBookingConfirm = (booking: any) => {
    setPaymentDetails({
      amount: booking.amount,
      service: booking.service,
      worker: booking.worker.name,
      date: booking.date,
      time: booking.time,
    })
    setShowPayment(true)
  }

  const handlePaymentSuccess = (transaction: any) => {
    setBalance(balance - transaction.amount)

    const newBooking: BookingRecord = {
      id: transaction.id,
      service: transaction.description.split(" with ")[0],
      worker: transaction.description.split(" with ")[1],
      date: transaction.bookingDate,
      time: transaction.bookingTime,
      amount: transaction.amount,
      status: "upcoming",
      workerDetails: {
        name: transaction.description.split(" with ")[1],
        avatar: "👤",
        rating: 4.8,
        reviews: 100,
        experience: "5 years",
      },
    }

    setBookings([newBooking, ...bookings])
  }

  return (
    <div className="mobile-container flex flex-col min-h-screen">
      <div className="flex-1 overflow-y-auto pb-20">
        {currentPage === "home" && <WalletCard />}
        {currentPage === "browse" && <ServiceBrowser onBookingConfirm={handleBookingConfirm} />}
        {currentPage === "bookings" && <BookingHistory bookings={bookings} />}
        {currentPage === "profile" && <ProfilePage setIsAuthenticated={setIsAuthenticated} />}
      </div>

      <BottomNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <PaymentProcessor
        isOpen={showPayment}
        paymentDetails={paymentDetails}
        currentBalance={balance}
        onClose={() => setShowPayment(false)}
        onSuccess={handlePaymentSuccess}
      />
    </div>
  )
}

function ProfilePage({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) {
  return (
    <div className="safe-area">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="bg-card border border-border rounded-lg p-4 mb-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
            👤
          </div>
          <div>
            <h3 className="font-bold text-lg">John Doe</h3>
            <p className="text-sm text-muted-foreground">john@example.com</p>
          </div>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("authToken")
            localStorage.removeItem("userEmail")
            setIsAuthenticated(false)
          }}
          className="w-full bg-destructive text-destructive-foreground py-2 rounded-lg font-semibold"
        >
          Log Out
        </button>
      </div>
    </div>
  )
}
