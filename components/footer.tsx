"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SH</span>
              </div>
              <span className="text-xl font-bold">SkillHaus</span>
            </div>
            <p className="text-gray-400">Connecting homes with skilled professionals for quality domestic services.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Cleaning
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Cooking
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Washing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Tailoring
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2025 SkillHaus. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition">
              Facebook
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              Twitter
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
