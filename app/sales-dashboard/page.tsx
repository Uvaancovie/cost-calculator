import { db } from '@/db/drizzle'
import { dailyProduction } from '@/db/schema'
import CostLineChart from '@/components/charts/CostLineChart'
import StatsSummary from '@/components/StatsSummary'

export default async function SalesDashboardPage() {
  // 1. Fetch data from Drizzle directly in a server component
  const data = await db.select().from(dailyProduction)

  // 2. We'll pass an array of { date, total_cost, output_weight, cost_per_kg } to the chart/stats
  const mappedData = data.map((row) => ({
    date: row.date.toString(),
    total_cost: row.total_cost,
    output_weight: row.output_weight,
    cost_per_kg: row.cost_per_kg
  }))

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-green-800 mb-4">
        Sales Dashboard
      </h1>
      <p className="mb-6 text-gray-700">
        Visual analytics of daily production costs and output.
      </p>

      {/* Stats summary at the top */}
      <StatsSummary data={mappedData} />

      {/* Chart showing cost over time */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold text-green-800 mb-2">Cost Over Time</h2>
        <CostLineChart data={mappedData} />
      </div>

      {/* Optional: Table of raw data */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-green-100">
              <th className="border p-2">Date</th>
              <th className="border p-2">Total Cost</th>
              <th className="border p-2">Output Weight</th>
              <th className="border p-2">Cost/kg</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td className="border p-2">{new Date(row.date).toLocaleDateString()}</td>
                <td className="border p-2">{row.total_cost.toFixed(2)}</td>
                <td className="border p-2">{row.output_weight.toFixed(2)}</td>
                <td className="border p-2">{row.cost_per_kg.toFixed(3)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
