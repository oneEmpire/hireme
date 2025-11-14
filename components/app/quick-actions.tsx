"use client"

import { useState } from "react"

interface QuickActionsProps {
  balance: number
  setBalance: (value: number) => void
  onAddFunds?: (amount: number) => void
}

export default function QuickActions({ balance, setBalance, onAddFunds }: QuickActionsProps) {
  const [showAddFunds, setShowAddFunds] = useState(false)
  const [amount, setAmount] = useState("")

  const handleAddFunds = () => {
    const addAmount = Number.parseInt(amount)
    if (addAmount > 0) {
      setBalance(balance + addAmount)
      onAddFunds?.(addAmount)
      setAmount("")
      setShowAddFunds(false)
    }
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <button className="bg-card border border-border rounded-lg p-4 hover:bg-input transition flex flex-col items-center gap-2">
          <span className="text-2xl">🔄</span>
          <span className="text-xs font-semibold">Transfer</span>
        </button>
        <button
          onClick={() => setShowAddFunds(true)}
          className="bg-card border border-border rounded-lg p-4 hover:bg-input transition flex flex-col items-center gap-2"
        >
          <span className="text-2xl">➕</span>
          <span className="text-xs font-semibold">Add Funds</span>
        </button>
        <button className="bg-card border border-border rounded-lg p-4 hover:bg-input transition flex flex-col items-center gap-2">
          <span className="text-2xl">📊</span>
          <span className="text-xs font-semibold">History</span>
        </button>
      </div>

      {showAddFunds && (
        <div className="fixed inset-0 bg-black/50 flex items-end z-50">
          <div className="bg-card w-full rounded-t-2xl p-6 animate-in slide-in-from-bottom">
            <h3 className="text-xl font-bold mb-4">Add Funds</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Amount</label>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">₦</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex-1 px-4 py-2 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {[5000, 10000, 20000, 50000].map((quickAmount) => (
                  <button
                    key={quickAmount}
                    onClick={() => setAmount(quickAmount.toString())}
                    className="bg-input border border-border rounded-lg py-2 text-sm font-semibold hover:bg-primary hover:text-white transition"
                  >
                    ₦{(quickAmount / 1000).toFixed(0)}k
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowAddFunds(false)}
                  className="flex-1 bg-card border border-border py-3 rounded-lg font-semibold hover:bg-input transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddFunds}
                  className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
                >
                  Add Funds
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
