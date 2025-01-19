'use client'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3">
        <Link href="/">
          <span className="font-semibold text-lg text-green-800">Enlightment Foods</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex items-center space-x-4">
        <Link href="/inputs" className="text-green-800 hover:text-green-600">
          Inputs
        </Link>
        <Link href="/outputs" className="text-green-800 hover:text-green-600">
          Outputs
        </Link>
        <Link href="/cost-calculator" className="text-green-800 hover:text-green-600">
          Production Costs
        </Link>

        <Link href="/sales-dashboard" className="text-green-800 hover:text-green-600">
          Sales Dashboard
        </Link>
        
        {/* Clerk user button includes sign in/out */}
        <UserButton afterSignOutUrl="/" />
      </nav>
    </header>
  )
}
