"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SH</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Skillhours</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <Link href="#home" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition">
              How It Works
            </Link>
            <Link href="#team" className="text-gray-700 hover:text-blue-600 transition">
              Team
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>

          <div className="flex gap-3 items-center">
            <Button
              variant="outline"
              className="hidden sm:flex gap-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              <Download className="w-4 h-4" />
              Download App
            </Button>
            <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
