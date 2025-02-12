"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

// Define Schema for Form Validation
const formSchema = z.object({
  insuredAmount: z.string().min(1, { message: "Insured amount is required" }).transform(Number),
  monthlyPremium: z.string().min(1, { message: "Monthly premium is required" }).transform(Number),
  durationMonths: z.string().min(1, { message: "Duration in months is required" }).transform(Number),
  projectedGrowth: z.string().min(1, { message: "Projected growth (%) is required" }).transform(Number),
})

export type InsuranceCalculatorFormValues = z.infer<typeof formSchema>

interface InsuranceCalculatorFormProps {
  onCalculate: (values: InsuranceCalculatorFormValues) => void
}

export function InsuranceCalculatorForm({ onCalculate }: InsuranceCalculatorFormProps) {
  const [growthData, setGrowthData] = useState<{ year: number; value: number }[]>([])

  const form = useForm<InsuranceCalculatorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      insuredAmount: 10000,
      monthlyPremium: 200,
      durationMonths: 60,
      projectedGrowth: 5,
    },
  })

  function onSubmit(values: InsuranceCalculatorFormValues) {
    onCalculate(values)
    
    // Calculate Projected Growth Over 5 Years
    const annualGrowthRate = values.projectedGrowth / 100
    let projectedAmount = values.insuredAmount
    const chartData = []

    for (let year = 1; year <= 5; year++) {
      projectedAmount += (projectedAmount * annualGrowthRate) + (values.monthlyPremium * 12)
      chartData.push({ year, value: projectedAmount })
    }

    setGrowthData(chartData)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Insurance Growth Calculator</CardTitle>
            <CardDescription>Calculate projected insurance value over 5 years.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="insuredAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Insured Amount ($)</FormLabel>
                  <FormControl>
                    <Input type="number" step="100" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="monthlyPremium"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Premium ($)</FormLabel>
                  <FormControl>
                    <Input type="number" step="10" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="durationMonths"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration (Months)</FormLabel>
                  <FormControl>
                    <Input type="number" step="1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectedGrowth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Projected Growth (%)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Calculate</Button>
          </CardFooter>
        </Card>
      </form>

      {/* Chart Section */}
      {growthData.length > 0 && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Projected Growth Over 5 Years</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={growthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: "Year", position: "insideBottomRight", offset: -5 }} />
                <YAxis label={{ value: "Value ($)", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}
    </Form>
  )
}
