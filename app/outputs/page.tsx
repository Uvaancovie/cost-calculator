'use client'

import { useEffect, useState } from 'react'

interface OutputItem {
  id: number
  date: string
  total_milk_cost: number
  total_gas_cost: number
  total_staff_cost: number
  total_electricity_cost: number
  total_production_cost: number
  output_weight: number
  cost_per_kg: number
}

export default function OutputsPage() {
  const [outputs, setOutputs] = useState<OutputItem[]>([])

  // Optional form for new output
  const [formData, setFormData] = useState({
    date: '',
    total_milk_cost: '',
    total_gas_cost: '',
    total_staff_cost: '',
    total_electricity_cost: '',
    total_production_cost: '',
    output_weight: '',
    cost_per_kg: '',
  })

  // Fetch outputs from /api/outputs
  useEffect(() => {
    fetch('/api/outputs')
      .then((res) => res.json())
      .then((data) => setOutputs(data))
      .catch((err) => console.error(err))
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/outputs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: formData.date,
          total_milk_cost: Number(formData.total_milk_cost),
          total_gas_cost: Number(formData.total_gas_cost),
          total_staff_cost: Number(formData.total_staff_cost),
          total_electricity_cost: Number(formData.total_electricity_cost),
          total_production_cost: Number(formData.total_production_cost),
          output_weight: Number(formData.output_weight),
          cost_per_kg: Number(formData.cost_per_kg),
        }),
      })
      if (!response.ok) throw new Error('Error adding output')
      const data = await response.json()
      setOutputs((prev) => [...prev, ...data])
      // clear form
      setFormData({
        date: '',
        total_milk_cost: '',
        total_gas_cost: '',
        total_staff_cost: '',
        total_electricity_cost: '',
        total_production_cost: '',
        output_weight: '',
        cost_per_kg: '',
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-green-800">Manage Outputs</h1>

      {/* Form to add outputs (if you want manual insertion) */}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-6 max-w-lg">
        <label className="col-span-2">
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="block border p-1 w-full"
            required
          />
        </label>
        <label>
          Total Milk Cost:
          <input
            type="number"
            step="0.01"
            name="total_milk_cost"
            value={formData.total_milk_cost}
            onChange={handleChange}
            className="block border p-1 w-full"
            required
          />
        </label>
        <label>
          Total Gas Cost:
          <input
            type="number"
            step="0.01"
            name="total_gas_cost"
            value={formData.total_gas_cost}
            onChange={handleChange}
            className="block border p-1 w-full"
            required
          />
        </label>
        <label>
          Total Staff Cost:
          <input
            type="number"
            step="0.01"
            name="total_staff_cost"
            value={formData.total_staff_cost}
            onChange={handleChange}
            className="block border p-1 w-full"
            required
          />
        </label>
        <label>
          Total Electricity Cost:
          <input
            type="number"
            step="0.01"
            name="total_electricity_cost"
            value={formData.total_electricity_cost}
            onChange={handleChange}
            className="block border p-1 w-full"
            required
          />
        </label>
        <label>
          Total Production Cost:
          <input
            type="number"
            step="0.01"
            name="total_production_cost"
            value={formData.total_production_cost}
            onChange={handleChange}
            className="block border p-1 w-full"
            required
          />
        </label>
        <label>
          Output Weight (kg):
          <input
            type="number"
            step="0.01"
            name="output_weight"
            value={formData.output_weight}
            onChange={handleChange}
            className="block border p-1 w-full"
            required
          />
        </label>
        <label>
          Cost per kg:
          <input
            type="number"
            step="0.01"
            name="cost_per_kg"
            value={formData.cost_per_kg}
            onChange={handleChange}
            className="block border p-1 w-full"
            required
          />
        </label>

        <div className="col-span-2">
          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Add Output
          </button>
        </div>
      </form>

      {/* Table listing all outputs */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Milk Cost</th>
            <th className="border p-2">Gas Cost</th>
            <th className="border p-2">Staff Cost</th>
            <th className="border p-2">Elec Cost</th>
            <th className="border p-2">Total Cost</th>
            <th className="border p-2">Output Weight</th>
            <th className="border p-2">Cost/kg</th>
          </tr>
        </thead>
        <tbody>
          {outputs.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.id}</td>
              <td className="border p-2">
                {new Date(item.date).toLocaleDateString()}
              </td>
              <td className="border p-2">{item.total_milk_cost}</td>
              <td className="border p-2">{item.total_gas_cost}</td>
              <td className="border p-2">{item.total_staff_cost}</td>
              <td className="border p-2">{item.total_electricity_cost}</td>
              <td className="border p-2">{item.total_production_cost}</td>
              <td className="border p-2">{item.output_weight}</td>
              <td className="border p-2">{item.cost_per_kg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
