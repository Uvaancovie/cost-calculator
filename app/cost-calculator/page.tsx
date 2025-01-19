// app/cost-calculator/page.tsx

'use client'
import { useState } from 'react'

export default function CostCalculatorPage() {
  // 1. Form states for input data
  const [date, setDate] = useState('')
  const [volumeOfMilk, setVolumeOfMilk] = useState('')
  const [milkCostPerLiter, setMilkCostPerLiter] = useState('')
  const [gasUsage, setGasUsage] = useState('')
  const [gasCostPerUnit, setGasCostPerUnit] = useState('')
  const [electricityUsage, setElectricityUsage] = useState('')
  const [electricityCostPerKwh, setElectricityCostPerKwh] = useState('')
  const [electricityVat, setElectricityVat] = useState('')
  const [staffCount, setStaffCount] = useState('')
  const [staffWagePerHour, setStaffWagePerHour] = useState('')
  const [staffHours, setStaffHours] = useState('')
  const [outputWeight, setOutputWeight] = useState('')

  // 2. Computed result states
  const [totalMilkCost, setTotalMilkCost] = useState(0)
  const [totalGasCost, setTotalGasCost] = useState(0)
  const [totalStaffCost, setTotalStaffCost] = useState(0)
  const [totalElectricityCost, setTotalElectricityCost] = useState(0)
  const [totalProductionCost, setTotalProductionCost] = useState(0)
  const [costPerKg, setCostPerKg] = useState(0)

  // 3. Calculation Handler
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()

    // Convert strings to numbers
    const volMilk = parseFloat(volumeOfMilk) || 0
    const milkCost = parseFloat(milkCostPerLiter) || 0
    const gasUsed = parseFloat(gasUsage) || 0
    const gasCost = parseFloat(gasCostPerUnit) || 0
    const elecUsed = parseFloat(electricityUsage) || 0
    const elecCost = parseFloat(electricityCostPerKwh) || 0
    const vat = parseFloat(electricityVat) || 0
    const staffNum = parseInt(staffCount) || 0
    const wage = parseFloat(staffWagePerHour) || 0
    const hours = parseFloat(staffHours) || 0
    const weight = parseFloat(outputWeight) || 1 // avoid division by zero

    // Milk Cost
    const milkCostTotal = volMilk * milkCost

    // Gas Cost
    const gasCostTotal = gasUsed * gasCost

    // Staff Cost
    // e.g., totalStaffCost = staffNum * wage * hours
    const staffCostTotal = staffNum * wage * hours

    // Electricity Cost
    // e.g., electricityUsage * costPerKwh + vat
    const electricityCostTotal = elecUsed * elecCost + vat

    // Summation
    const productionCost = milkCostTotal + gasCostTotal + staffCostTotal + electricityCostTotal
    const perKg = productionCost / weight

    // Update states
    setTotalMilkCost(milkCostTotal)
    setTotalGasCost(gasCostTotal)
    setTotalStaffCost(staffCostTotal)
    setTotalElectricityCost(electricityCostTotal)
    setTotalProductionCost(productionCost)
    setCostPerKg(perKg)
  }

  // 4. Save to Outputs Table (Optional)
  const handleSave = async () => {
    try {
      const body = {
        date,
        total_milk_cost: totalMilkCost,
        total_gas_cost: totalGasCost,
        total_staff_cost: totalStaffCost,
        total_electricity_cost: totalElectricityCost,
        total_production_cost: totalProductionCost,
        output_weight: parseFloat(outputWeight) || 1,
        cost_per_kg: costPerKg,
      }

      const res = await fetch('/api/outputs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (res.ok) {
        alert('Successfully saved to Outputs table!')
      } else {
        alert(`Error saving: ${data.error}`)
      }
    } catch (error) {
      console.error(error)
      alert('Error saving to Outputs table.')
    }
  }

  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cost Calculator</h1>
      <form onSubmit={handleCalculate} className="grid grid-cols-2 gap-4 mb-6">
        {/* Date */}
        <label className="col-span-2">
          Date:
          <input
            type="date"
            className="block border p-1 w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>

        {/* Volume of Milk */}
        <label>
          Volume of Milk (L):
          <input
            type="number"
            step="0.01"
            className="block border p-1 w-full"
            value={volumeOfMilk}
            onChange={(e) => setVolumeOfMilk(e.target.value)}
            required
          />
        </label>

        {/* Milk Cost per Liter */}
        <label>
          Milk Cost/Liter:
          <input
            type="number"
            step="0.01"
            className="block border p-1 w-full"
            value={milkCostPerLiter}
            onChange={(e) => setMilkCostPerLiter(e.target.value)}
            required
          />
        </label>

        {/* Gas Usage */}
        <label>
          Gas Usage (units):
          <input
            type="number"
            className="block border p-1 w-full"
            value={gasUsage}
            onChange={(e) => setGasUsage(e.target.value)}
            required
          />
        </label>

        {/* Gas Cost per Unit */}
        <label>
          Gas Cost/Unit:
          <input
            type="number"
            step="0.01"
            className="block border p-1 w-full"
            value={gasCostPerUnit}
            onChange={(e) => setGasCostPerUnit(e.target.value)}
            required
          />
        </label>

        {/* Electricity Usage */}
        <label>
          Electricity Usage (kWh):
          <input
            type="number"
            className="block border p-1 w-full"
            value={electricityUsage}
            onChange={(e) => setElectricityUsage(e.target.value)}
            required
          />
        </label>

        {/* Electricity Cost per kWh */}
        <label>
          Elec Cost/kWh:
          <input
            type="number"
            step="0.01"
            className="block border p-1 w-full"
            value={electricityCostPerKwh}
            onChange={(e) => setElectricityCostPerKwh(e.target.value)}
            required
          />
        </label>

        {/* Electricity VAT */}
        <label>
          Elec VAT (float):
          <input
            type="number"
            step="0.01"
            className="block border p-1 w-full"
            value={electricityVat}
            onChange={(e) => setElectricityVat(e.target.value)}
            required
          />
        </label>

        {/* Staff Count */}
        <label>
          Staff Count:
          <input
            type="number"
            className="block border p-1 w-full"
            value={staffCount}
            onChange={(e) => setStaffCount(e.target.value)}
            required
          />
        </label>

        {/* Staff Wage per Hour */}
        <label>
          Staff Wage/Hour:
          <input
            type="number"
            step="0.01"
            className="block border p-1 w-full"
            value={staffWagePerHour}
            onChange={(e) => setStaffWagePerHour(e.target.value)}
            required
          />
        </label>

        {/* Staff Hours */}
        <label>
          Staff Hours:
          <input
            type="number"
            step="0.01"
            className="block border p-1 w-full"
            value={staffHours}
            onChange={(e) => setStaffHours(e.target.value)}
            required
          />
        </label>

        {/* Output Weight */}
        <label>
          Output Weight (kg):
          <input
            type="number"
            step="0.01"
            className="block border p-1 w-full"
            value={outputWeight}
            onChange={(e) => setOutputWeight(e.target.value)}
            required
          />
        </label>

        {/* Submit Button */}
        <div className="col-span-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Calculate
          </button>
        </div>
      </form>

      {/* Display Calculations */}
      <section className="bg-gray-100 p-4 rounded mb-4">
        <h2 className="font-semibold mb-2">Results</h2>
        <p>Total Milk Cost: {totalMilkCost.toFixed(2)}</p>
        <p>Total Gas Cost: {totalGasCost.toFixed(2)}</p>
        <p>Total Staff Cost: {totalStaffCost.toFixed(2)}</p>
        <p>Total Electricity Cost: {totalElectricityCost.toFixed(2)}</p>
        <p className="font-bold">Total Production Cost: {totalProductionCost.toFixed(2)}</p>
        <p className="font-bold">Cost per kg: {costPerKg.toFixed(2)}</p>
      </section>

      {/* Save to DB */}
      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded"
        disabled={!totalProductionCost}
      >
        Save to Outputs
      </button>
    </main>
  )
}
