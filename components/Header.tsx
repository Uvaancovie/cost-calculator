// components/Header.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3">
        <Image
          src="/logo.png"
          alt="Enlightment Foods Logo"
          width={40}
          height={40}
          priority
        />
        <h1 className="font-semibold text-lg text-green-800">
          Enlightment Foods
        </h1>
      </div>

      {/* Navigation */}
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
</nav>
    </header>
  )
}
