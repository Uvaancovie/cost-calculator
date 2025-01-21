"use client"

import { useState } from "react"
import { CostCalculatorForm, type CostCalculatorFormValues } from "@/components/CostCalculator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CostCalculatorPage() {
  const [results, setResults] = useState<{
    totalMilkCost: number
    totalGasCost: number
    totalStaffCost: number
    totalElectricityCost: number
    totalProductionCost: number
    costPerKg: number
  } | null>(null)

  const handleCalculate = (values: CostCalculatorFormValues) => {
    const {
      volumeOfMilk,
      milkCostPerLiter,
      gasUsage,
      gasCostPerUnit,
      electricityUsage,
      electricityCostPerKwh,
      electricityVat,
      staffCount,
      staffWagePerHour,
      staffHours,
      outputWeight,
    } = values

    // Milk Cost
    const totalMilkCost = volumeOfMilk * milkCostPerLiter

    // Gas Cost
    const totalGasCost = gasUsage * gasCostPerUnit

    // Staff Cost
    const totalStaffCost = staffCount * staffWagePerHour * staffHours

    // Electricity Cost
    const totalElectricityCost = electricityUsage * electricityCostPerKwh + electricityVat

    // Summation
    const totalProductionCost = totalMilkCost + totalGasCost + totalStaffCost + totalElectricityCost
    const costPerKg = totalProductionCost / outputWeight

    setResults({
      totalMilkCost,
      totalGasCost,
      totalStaffCost,
      totalElectricityCost,
      totalProductionCost,
      costPerKg,
    })
  }

  const handleSave = async () => {
    if (!results) return

    try {
      const body = {
        ...results,
        date: new Date().toISOString(),
      }

      const res = await fetch("/api/outputs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (res.ok) {
        alert("Successfully saved to Outputs table!")
      } else {
        alert(`Error saving: ${data.error}`)
      }
    } catch (error) {
      console.error(error)
      alert("Error saving to Outputs table.")
    }
  }

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Cost Calculator</h1>
      <div className="space-y-8">
        <CostCalculatorForm onCalculate={handleCalculate} />

        {results && (
          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>Calculated production costs based on your inputs.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Total Milk Cost:</p>
                <p>{results.totalMilkCost.toFixed(2)}</p>
              </div>
              <div>
                <p className="font-semibold">Total Gas Cost:</p>
                <p>{results.totalGasCost.toFixed(2)}</p>
              </div>
              <div>
                <p className="font-semibold">Total Staff Cost:</p>
                <p>{results.totalStaffCost.toFixed(2)}</p>
              </div>
              <div>
                <p className="font-semibold">Total Electricity Cost:</p>
                <p>{results.totalElectricityCost.toFixed(2)}</p>
              </div>
              <div>
                <p className="font-semibold">Total Production Cost:</p>
                <p className="font-bold">{results.totalProductionCost.toFixed(2)}</p>
              </div>
              <div>
                <p className="font-semibold">Cost per kg:</p>
                <p className="font-bold">{results.costPerKg.toFixed(2)}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave}>Save to Outputs</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </main>
  )
}

