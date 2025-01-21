"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, ControllerRenderProps } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
  date: z.string().min(1, { message: "Date is required" }),
  volumeOfMilk: z.string().min(1, { message: "Volume of milk is required" }).transform(Number),
  milkCostPerLiter: z.string().min(1, { message: "Milk cost per liter is required" }).transform(Number),
  gasUsage: z.string().min(1, { message: "Gas usage is required" }).transform(Number),
  gasCostPerUnit: z.string().min(1, { message: "Gas cost per unit is required" }).transform(Number),
  electricityUsage: z.string().min(1, { message: "Electricity usage is required" }).transform(Number),
  electricityCostPerKwh: z.string().min(1, { message: "Electricity cost per kWh is required" }).transform(Number),
  electricityVat: z.string().min(1, { message: "Electricity VAT is required" }).transform(Number),
  staffCount: z.string().min(1, { message: "Staff count is required" }).transform(Number),
  staffWagePerHour: z.string().min(1, { message: "Staff wage per hour is required" }).transform(Number),
  staffHours: z.string().min(1, { message: "Staff hours is required" }).transform(Number),
  outputWeight: z.string().min(1, { message: "Output weight is required" }).transform(Number),
})

export type CostCalculatorFormValues = z.infer<typeof formSchema>

interface CostCalculatorFormProps {
  onCalculate: (values: CostCalculatorFormValues) => void
}

export function CostCalculatorForm({ onCalculate }: CostCalculatorFormProps) {
  const form = useForm<CostCalculatorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date().toISOString().split("T")[0],
      volumeOfMilk: 0,
      milkCostPerLiter: 0,
      gasUsage: 0,
      gasCostPerUnit: 0,
      electricityUsage: 0,
      electricityCostPerKwh: 0,
      electricityVat: 0,
      staffCount: 0,
      staffWagePerHour: 0,
      staffHours: 0,
      outputWeight: 0,
    },
  })

  function onSubmit(values: CostCalculatorFormValues) {
    onCalculate(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Production Inputs</CardTitle>
            <CardDescription>Enter the production details for cost calculation.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }: { field: ControllerRenderProps<CostCalculatorFormValues, "date"> }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="volumeOfMilk"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Volume of Milk (L)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="milkCostPerLiter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Milk Cost/Liter</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gasUsage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gas Usage (units)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gasCostPerUnit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gas Cost/Unit</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="electricityUsage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Electricity Usage (kWh)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="electricityCostPerKwh"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Elec Cost/kWh</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="electricityVat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Elec VAT (float)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="staffCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Staff Count</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="staffWagePerHour"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Staff Wage/Hour</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="staffHours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Staff Hours</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="outputWeight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Output Weight (kg)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" {...field} />
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
    </Form>
  )
}

