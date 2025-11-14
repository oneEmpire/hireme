"use client"

import { useState } from "react"

interface PaymentDetails {
  amount: number
  service: string
  worker: string
  date: string
  time: string
}

interface PaymentProcessorProps {
  isOpen: boolean
  paymentDetails: PaymentDetails | null
  currentBalance: number
  onClose: () => void
  onSuccess?: (transaction: any) => void
}

export default function PaymentProcessor({
  isOpen,
  paymentDetails,
  currentBalance,
  onClose,
  onSuccess,
}: PaymentProcessorProps) {
  const [step, setStep] = useState<"confirm" | "processing" | "success" | "failed">("confirm")
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<"wallet" | "card">("wallet")
  const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvv: "" })

  const sufficientBalance = paymentDetails && currentBalance >= paymentDetails.amount

  const handlePayment = async () => {
    if (!sufficientBalance && selectedPaymentMethod === "wallet") {
      setStep("failed")
      return
    }

    setStep("processing")
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const transaction = {
      id: Date.now().toString(),
      type: "debit",
      description: `${paymentDetails?.service} with ${paymentDetails?.worker}`,
      amount: paymentDetails?.amount,
      date: new Date().toLocaleDateString(),
      status: "completed",
      paymentMethod: selectedPaymentMethod,
      bookingDate: paymentDetails?.date,
      bookingTime: paymentDetails?.time,
    }

    onSuccess?.(transaction)
    setStep("success")
  }

  if (!isOpen || !paymentDetails) return null

  const insufficientFunds = !sufficientBalance && selectedPaymentMethod === "wallet"

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card w-full max-w-sm rounded-2xl p-6 shadow-lg animate-in">
        {/* Confirm Step */}
        {step === "confirm" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Complete Payment</h2>
              <p className="text-muted-foreground">Review and confirm your payment</p>
            </div>

            <div className="bg-input rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service</span>
                <span className="font-semibold">{paymentDetails.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Worker</span>
                <span className="font-semibold">{paymentDetails.worker}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date & Time</span>
                <span className="font-semibold text-sm">
                  {paymentDetails.date} {paymentDetails.time}
                </span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-bold">Amount</span>
                <span className="text-lg font-bold text-primary">₦{paymentDetails.amount.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium">Payment Method</label>

              <button
                onClick={() => setSelectedPaymentMethod("wallet")}
                className={`w-full p-4 rounded-lg border-2 transition text-left ${
                  selectedPaymentMethod === "wallet"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold">Wallet</p>
                    <p className="text-sm text-muted-foreground">Available: ₦{currentBalance.toLocaleString()}</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedPaymentMethod === "wallet" ? "border-primary bg-primary" : "border-border"
                    }`}
                  >
                    {selectedPaymentMethod === "wallet" && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </div>
              </button>

              <button
                onClick={() => setSelectedPaymentMethod("card")}
                className={`w-full p-4 rounded-lg border-2 transition text-left ${
                  selectedPaymentMethod === "card"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold">Credit/Debit Card</p>
                    <p className="text-sm text-muted-foreground">Visa, Mastercard, Verve</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedPaymentMethod === "card" ? "border-primary bg-primary" : "border-border"
                    }`}
                  >
                    {selectedPaymentMethod === "card" && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </div>
              </button>
            </div>

            {selectedPaymentMethod === "card" && (
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-2">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium mb-2">Expiry</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      maxLength={3}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {insufficientFunds && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 text-sm font-medium">Insufficient wallet balance</p>
                <p className="text-red-600 text-xs mt-1">
                  You need ₦{(paymentDetails.amount - currentBalance).toLocaleString()} more
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 bg-card border border-border py-3 rounded-lg font-semibold hover:bg-input transition"
              >
                Cancel
              </button>
              <button
                onClick={handlePayment}
                disabled={insufficientFunds && selectedPaymentMethod === "wallet"}
                className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Pay ₦{paymentDetails.amount.toLocaleString()}
              </button>
            </div>
          </div>
        )}

        {/* Processing Step */}
        {step === "processing" && (
          <div className="space-y-6 text-center py-8">
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-border border-t-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Processing Payment</h3>
              <p className="text-muted-foreground">Please wait while we process your transaction...</p>
            </div>
          </div>
        )}

        {/* Success Step */}
        {step === "success" && (
          <div className="space-y-6 text-center py-8">
            <div className="text-6xl">✅</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
              <p className="text-muted-foreground mb-4">Your booking has been confirmed</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-green-700 font-semibold">₦{paymentDetails.amount.toLocaleString()} deducted</p>
                <p className="text-green-600 text-sm">
                  {paymentDetails.service} with {paymentDetails.worker}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Done
            </button>
          </div>
        )}

        {/* Failed Step */}
        {step === "failed" && (
          <div className="space-y-6 text-center py-8">
            <div className="text-6xl">❌</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Payment Failed</h3>
              <p className="text-muted-foreground mb-4">Unable to process your payment</p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <p className="text-red-700 font-semibold">Insufficient Funds</p>
                <p className="text-red-600 text-sm">Please add funds to your wallet and try again</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
