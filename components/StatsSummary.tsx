'use client'

interface StatsProps {
  data: {
    total_cost: number
    output_weight: number
    cost_per_kg: number
  }[]
}

export default function StatsSummary({ data }: StatsProps) {
  if (!data || data.length === 0) {
    return <p>No data available.</p>
  }

  // Example: compute total of total_cost, average cost_per_kg
  const totalCostSum = data.reduce((acc, row) => acc + row.total_cost, 0)
  const avgCostPerKg =
    data.reduce((acc, row) => acc + row.cost_per_kg, 0) / data.length
  const totalWeight = data.reduce((acc, row) => acc + row.output_weight, 0)

  return (
    <div className="grid grid-cols-3 gap-4 text-center mb-6">
      <div className="bg-green-100 p-4 rounded">
        <h3 className="text-lg font-semibold text-green-800">Total Cost</h3>
        <p className="text-2xl text-green-700">
          {totalCostSum.toFixed(2)}
        </p>
      </div>
      <div className="bg-green-100 p-4 rounded">
        <h3 className="text-lg font-semibold text-green-800">Avg Cost/kg</h3>
        <p className="text-2xl text-green-700">
          {avgCostPerKg.toFixed(2)}
        </p>
      </div>
      <div className="bg-green-100 p-4 rounded">
        <h3 className="text-lg font-semibold text-green-800">Total Weight</h3>
        <p className="text-2xl text-green-700">
          {totalWeight.toFixed(2)}
        </p>
      </div>
    </div>
  )
}
