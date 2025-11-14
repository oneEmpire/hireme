"use client"

type Page = "home" | "browse" | "bookings" | "profile"

const navItems = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "browse", label: "Browse", icon: "🔍" },
  { id: "bookings", label: "Bookings", icon: "📋" },
  { id: "profile", label: "Profile", icon: "👤" },
]

export default function BottomNavigation({
  currentPage,
  setCurrentPage,
}: { currentPage: Page; setCurrentPage: (page: Page) => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border max-w-md mx-auto">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id as Page)}
            className={`flex-1 py-3 flex flex-col items-center gap-1 transition ${
              currentPage === item.id ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-xs font-semibold">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
