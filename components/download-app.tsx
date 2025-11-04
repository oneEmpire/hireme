"use client"

import { Button } from "@/components/ui/button"
import { Apple, Smartphone } from "lucide-react"

export default function DownloadApp() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Download the SkillHaus App</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get instant access to skilled domestic workers right from your phone. Download now and get started in
              minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 flex items-center gap-2 px-6 py-6 text-lg">
                <Apple className="w-5 h-5" />
                Download for iOS
              </Button>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 flex items-center gap-2 px-6 py-6 text-lg">
                <Smartphone className="w-5 h-5" />
                Download for Android
              </Button>
            </div>

            <p className="text-sm text-blue-200 mt-6">
              Available on App Store and Google Play. Free to download and use.
            </p>
          </div>

          <div className="relative">
            <img
              src="/mobile-app-phone-screen-skillhaus-interface.jpg"
              alt="SkillHaus App on Mobile"
              className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
