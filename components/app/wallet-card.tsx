"use client"

import { useState } from "react"
import QuickActions from "./quick-actions"

interface Transaction {
  id: string
  type: "debit" | "credit"
  description: string
  amount: number
  date: string
  status: "completed" | "pending"
}

export default function WalletCard() {
  const [balance, setBalance] = useState(25000)
  const [showBalance, setShowBalance] = useState(true)
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: "1", type: "debit", description: "Cleaning Service", amount: 5000, date: "Nov 5, 2024", status: "completed" },
    { id: "2", type: "debit", description: "Cooking Service", amount: 8000, date: "Nov 3, 2024", status: "completed" },
    { id: "3", type: "credit", description: "Added Funds", amount: 10000, date: "Oct 28, 2024", status: "completed" },
  ])

  const addTransaction = (transaction: Omit<Transaction, "id">) => {
    setTransactions([{ ...transaction, id: Date.now().toString() }, ...transactions])
  }

  return (
    <div className="safe-area">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">SkillHaus</h1>
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">👤</div>
      </div>

      <div className="wallet-card mb-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-white/80 text-sm mb-2">Wallet Balance</p>
            <h2 className="text-3xl font-bold">{showBalance ? `₦${balance.toLocaleString()}` : "••••••"}</h2>
          </div>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="bg-white/20 hover:bg-white/30 rounded-lg p-2 transition"
          >
            {showBalance ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>

        <div className="flex justify-between text-white/80 text-sm">
          <span>Card Holder</span>
          <span>Valid Thru</span>
        </div>
        <div className="flex justify-between text-white mt-2 mb-6">
          <span className="font-semibold">Your Name</span>
          <span>12/26</span>
        </div>

        <div className="flex justify-between">
          <div className="text-2xl font-bold text-white">₦</div>
          <span className="text-white/80">Visa</span>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-bold text-lg mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {transactions.length > 0 ? (
            transactions.map((tx) => (
              <div
                key={tx.id}
                className="flex justify-between items-center bg-card border border-border rounded-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      tx.type === "debit" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                    }`}
                  >
                    {tx.type === "debit" ? "-" : "+"}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{tx.description}</p>
                    <p className="text-xs text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${tx.type === "debit" ? "text-red-600" : "text-green-600"}`}>
                    {tx.type === "debit" ? "-" : "+"}₦{tx.amount.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground capitalize">{tx.status}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground text-sm py-4">No transactions yet</p>
          )}
        </div>
      </div>

      <QuickActions
        balance={balance}
        setBalance={setBalance}
        onAddFunds={(amount) => {
          setBalance(balance + amount)
          addTransaction({
            type: "credit",
            description: "Added Funds",
            amount,
            date: new Date().toLocaleDateString(),
            status: "completed",
          })
        }}
      />
    </div>
  )
}
