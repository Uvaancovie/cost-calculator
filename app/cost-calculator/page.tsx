"use client"

import { useState } from "react"
import { InsuranceCalculatorForm, type InsuranceCalculatorFormValues } from "@/components/InsuranceCalculator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function InsuranceCalculatorPage() {
  const [results, setResults] = useState<{
    insuredAmount: number
    monthlyPremium: number
    durationMonths: number
    projectedGrowth: number
    futureValue: number
  } | null>(null)

  const handleCalculate = (values: InsuranceCalculatorFormValues) => {
    const { insuredAmount, monthlyPremium, durationMonths, projectedGrowth } = values

    // Future value using compound growth
    const futureValue = insuredAmount * Math.pow(1 + projectedGrowth / 100, durationMonths / 12)

    setResults({
      insuredAmount,
      monthlyPremium,
      durationMonths,
      projectedGrowth,
      futureValue,
    })
  }

  const handleSave = async () => {
    if (!results) return

    try {
      const body = {
        ...results,
        date: new Date().toISOString(),
      }

      const res = await fetch("/api/insurance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (res.ok) {
        alert("Successfully saved to InsurancePolicies table!")
      } else {
        alert(`Error saving: ${data.error}`)
      }
    } catch (error) {
      console.error(error)
      alert("Error saving to InsurancePolicies table.")
    }
  }

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Insurance Cost Calculator</h1>
      <div className="space-y-8">
        <InsuranceCalculatorForm onCalculate={handleCalculate} />

        {results && (
          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>Calculated insurance values based on your inputs.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Insured Amount:</p>
                <p>${results.insuredAmount.toFixed(2)}</p>
              </div>
              <div>
                <p className="font-semibold">Monthly Premium:</p>
                <p>${results.monthlyPremium.toFixed(2)}</p>
              </div>
              <div>
                <p className="font-semibold">Duration (Months):</p>
                <p>{results.durationMonths} months</p>
              </div>
              <div>
                <p className="font-semibold">Projected Growth Rate:</p>
                <p>{results.projectedGrowth.toFixed(2)}%</p>
              </div>
              <div>
                <p className="font-semibold">Projected Future Value:</p>
                <p className="font-bold">${results.futureValue.toFixed(2)}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave}>Save Policy</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </main>
  )
}
