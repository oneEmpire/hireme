"use client"

import { Wallet, Store, LogOut, Bell } from "lucide-react"

interface NavigationProps {
  currentPage: "wallet" | "marketplace" | "category"
  setCurrentPage: (page: "wallet" | "marketplace" | "category") => void
  setIsAuthenticated: (auth: boolean) => void
  notificationCount?: number
}

export default function Navigation({
  currentPage,
  setCurrentPage,
  setIsAuthenticated,
  notificationCount = 0,
}: NavigationProps) {
  const handleLogout = () => {
    localStorage.removeItem("authToken")
    setIsAuthenticated(false)
  }

  return (
    <>
      {/* Header with Notification */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-b border-border px-4 py-3 flex items-center justify-end gap-2 z-50">
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-all">
          <Bell size={24} className="text-gray-600" />
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {notificationCount > 9 ? "9+" : notificationCount}
            </span>
          )}
        </button>
      </header>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-border flex items-center justify-between px-6 py-4">
        <button
          onClick={() => setCurrentPage("marketplace")}
          className={`flex flex-col items-center gap-2 py-2 px-4 rounded-lg transition-all ${
            currentPage === "marketplace" ? "bg-primary/10 text-primary" : "text-foreground/60 hover:text-foreground"
          }`}
        >
          <Store size={24} />
          <span className="text-xs font-medium">Marketplace</span>
        </button>

        <button
          onClick={() => setCurrentPage("wallet")}
          className={`flex flex-col items-center gap-2 py-2 px-4 rounded-lg transition-all ${
            currentPage === "wallet" ? "bg-primary/10 text-primary" : "text-foreground/60 hover:text-foreground"
          }`}
        >
          <Wallet size={24} />
          <span className="text-xs font-medium">Wallet</span>
        </button>

        <button
          onClick={handleLogout}
          className="flex flex-col items-center gap-2 py-2 px-4 rounded-lg text-foreground/60 hover:text-destructive transition-all"
        >
          <LogOut size={24} />
          <span className="text-xs font-medium">Logout</span>
        </button>
      </nav>
    </>
  )
}
