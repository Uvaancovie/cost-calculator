"use client"

import { useState } from "react"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
// You can use any icon library, e.g., lucide-react for a Menu icon:
import { Menu } from "lucide-react"

export default function Header() {
  // Mobile menu open/closed state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Main header row */}
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <span className="font-semibold text-lg text-green-800">
              Enlightment Foods
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/inputs" className="text-green-800 hover:text-green-600">
            Inputs
          </Link>
          <Link href="/data-table" className="text-green-800 hover:text-green-600">
            Outputs
          </Link>
          <Link href="/cost-calculator" className="text-green-800 hover:text-green-600">
            Production Costs
          </Link>
          <Link href="/sales-dashboard" className="text-green-800 hover:text-green-600">
            Sales Dashboard
          </Link>
          <Link href="/production-analysis" className="text-green-800 hover:text-green-600">
            Analysis
          </Link>
          <Link href="/data-table" className="text-green-800 hover:text-green-600">
            Tables
          </Link>

          <UserButton afterSignOutUrl="/" />
        </nav>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-green-800 hover:text-green-600"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              href="/inputs"
              className="text-green-800 hover:text-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inputs
            </Link>
            <Link
              href="/data-table"
              className="text-green-800 hover:text-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Outputs
            </Link>
            <Link
              href="/cost-calculator"
              className="text-green-800 hover:text-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Production Costs
            </Link>
            <Link
              href="/sales-dashboard"
              className="text-green-800 hover:text-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sales Dashboard
            </Link>
            <Link
              href="/production-analysis"
              className="text-green-800 hover:text-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Analysis
            </Link>
            <Link
              href="/data-table"
              className="text-green-800 hover:text-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tables
            </Link>

            <div>
              {/* If you want to keep the sign-out button accessible on mobile */}
              <UserButton afterSignOutUrl="/" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
