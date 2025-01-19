// app/page.tsx

import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      {/* Heading and Intro */}
      <h1 className="text-3xl font-bold mb-6">Enlightment Food Cost System</h1>
      <p className="max-w-md text-center mb-8">
        Welcome to the Enlightment Food Cost System! This application helps you 
        track daily production inputs, manage cost data, and calculate overall 
        production costs in real time—no forecasting needed.
      </p>

      {/* Features Section */}
      <section className="max-w-lg w-full space-y-4 mb-8 text-left">
        <h2 className="text-xl font-semibold mb-2">Core Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Input Management:</strong> Record milk volumes, gas usage, 
            electricity usage, staff data, and more.
          </li>
          <li>
            <strong>Cost Calculator:</strong> Calculate total production costs 
            (milk, gas, staff, electricity) and get cost per kg instantly.
          </li>
          <li>
            <strong>Outputs Dashboard:</strong> Review total production cost data, 
            track output weight, and compare historical costs.
          </li>
          <li>
            <strong>Interactive UI:</strong> Input your data, view results, and 
            optionally save them to the database for future reference.
          </li>
        </ul>
      </section>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="/cost-calculator"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Calculate Costs
        </Link>
        {/* If you have separate pages/routes for inputs and outputs, link them here */}
        <Link
          href="/inputs"
          className="border border-blue-600 text-blue-600 px-5 py-2 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Manage Inputs
        </Link>
        <Link
          href="/outputs"
          className="border border-blue-600 text-blue-600 px-5 py-2 rounded hover:bg-blue-600 hover:text-white transition"
        >
          View Outputs
        </Link>
      </div>
    </main>
  )
}
