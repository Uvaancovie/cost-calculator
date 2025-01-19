'use client'

import { useEffect, useState } from 'react'

interface InputItem {
  id: number
  date: string
  volume_of_milk: number
  gas_usage: number
  electricity_usage: number
  staff_count: number
  staff_hours: number
}

export default function InputsPage() {
  const [inputs, setInputs] = useState<InputItem[]>([])
  const [formData, setFormData] = useState({
    date: '',
    volume_of_milk: '',
    gas_usage: '',
    electricity_usage: '',
    staff_count: '',
    staff_hours: '',
  })

  // Fetch existing inputs
  useEffect(() => {
    fetch('/api/inputs')
      .then((res) => res.json())
      .then((data) => setInputs(data))
      .catch((err) => console.error(err))
  }, [])

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Submit new input
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/inputs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: formData.date,
          volume_of_milk: Number(formData.volume_of_milk),
          gas_usage: Number(formData.gas_usage),
          electricity_usage: Number(formData.electricity_usage),
          staff_count: Number(formData.staff_count),
          staff_hours: Number(formData.staff_hours),
        }),
      })
      if (!response.ok) throw new Error('Error adding input')
      // Refresh the list
      const data = await response.json()
      setInputs((prev) => [...prev, ...data]) // data is an array from Drizzle insert
      setFormData({
        date: '',
        volume_of_milk: '',
        gas_usage: '',
        electricity_usage: '',
        staff_count: '',
        staff_hours: '',
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-green-800">Manage Inputs</h1>
      
      {/* Form for new input */}
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
          Volume of Milk (L):
          <input
            type="number"
            name="volume_of_milk"
            value={formData.volume_of_milk}
            onChange={handleChange}
            className="block border p-1 w-full"
            required
          />
        </label>
        <label>
          Gas Usage (units):
          <input
            type="number"
            name="gas_usage"
            value={formData.gas_usage}
            onChange={handleChange}
            className="block border p-1 w-full"
            required
          />
        </label>
        <label>
          Electricity Usage (kWh):
          <input
            type="number"
            name="electricity_usage"
            value={formData.electricity_usage}
            onChange={handleChange}
            className="block border p-1 w-full"
            required
          />
        </label>
        <label>
          Staff Count:
          <input
            type="number"
            name="staff_count"
            value={formData.staff_count}
            onChange={handleChange}
            className="block border p-1 w-full"
            required
          />
        </label>
        <label>
          Staff Hours:
          <input
            type="number"
            step="0.01"
            name="staff_hours"
            value={formData.staff_hours}
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
            Add Input
          </button>
        </div>
      </form>

      {/* List/Display existing inputs */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Milk (L)</th>
            <th className="border p-2">Gas (units)</th>
            <th className="border p-2">Elec (kWh)</th>
            <th className="border p-2">Staff</th>
            <th className="border p-2">Hours</th>
          </tr>
        </thead>
        <tbody>
          {inputs.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.id}</td>
              <td className="border p-2">
                {new Date(item.date).toLocaleDateString()}
              </td>
              <td className="border p-2">{item.volume_of_milk}</td>
              <td className="border p-2">{item.gas_usage}</td>
              <td className="border p-2">{item.electricity_usage}</td>
              <td className="border p-2">{item.staff_count}</td>
              <td className="border p-2">{item.staff_hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
