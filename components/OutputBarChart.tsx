"use client"

import { useState, useEffect } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { TrendingUp, TrendingDown } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface OutputData {
  id: number
  date: string
  total_production_cost: number
  output_weight: number
  cost_per_kg: number
}

interface OutputsBarChartProps {
  limit?: number
}

export function OutputsBarChart({ limit }: OutputsBarChartProps) {
  const [data, setData] = useState<OutputData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/outputs")
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const result = await response.json()
        setData(limit ? result.slice(-limit) : result)
      } catch (err) {
        setError("Error fetching data")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [limit])

  const chartData = data.map((item) => ({
    date: new Date(item.date).toLocaleDateString(),
    totalCost: item.total_production_cost,
    outputWeight: item.output_weight,
    costPerKg: item.cost_per_kg,
  }))

  const latestCostPerKg = chartData[chartData.length - 1]?.costPerKg || 0
  const previousCostPerKg = chartData[chartData.length - 2]?.costPerKg || 0
  const costPerKgChange = ((latestCostPerKg - previousCostPerKg) / previousCostPerKg) * 100

  if (isLoading) {
    return (
      <Card>
        <CardContent>Loading...</CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardContent>Error: {error}</CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Production Outputs</CardTitle>
        <CardDescription>Daily production costs and output</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="h-[300px]"
          config={{
            bar: {
              label: "Bar Chart",
              color: "#8884d8"
            }
          }}
        >
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar yAxisId="left" dataKey="totalCost" fill="#8884d8" name="Total Cost" />
            <Bar yAxisId="right" dataKey="outputWeight" fill="#82ca9d" name="Output Weight" />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center">
          <span className="text-sm font-medium">Latest Cost/kg: </span>
          <span className="ml-1 text-2xl font-bold">${latestCostPerKg.toFixed(2)}</span>
        </div>
        <div className="flex items-center">
          {costPerKgChange > 0 ? (
            <TrendingUp className="mr-1 h-4 w-4 text-red-500" />
          ) : (
            <TrendingDown className="mr-1 h-4 w-4 text-green-500" />
          )}
          <span className={`text-sm font-medium R{costPerKgChange > 0 ? "text-red-500" : "text-green-500"}`}>
            {Math.abs(costPerKgChange).toFixed(2)}%
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}

