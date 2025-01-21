import { ColumnDef } from "@tanstack/react-table"

// The same interface from your code
export interface OutputItem {
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

export const outputColumns: ColumnDef<OutputItem>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => {
      // Convert the date string to a readable format
      const dateStr = getValue() as string
      return new Date(dateStr).toLocaleDateString()
    },
  },
  {
    accessorKey: "total_milk_cost",
    header: "Milk Cost",
  },
  {
    accessorKey: "total_gas_cost",
    header: "Gas Cost",
  },
  {
    accessorKey: "total_staff_cost",
    header: "Staff Cost",
  },
  {
    accessorKey: "total_electricity_cost",
    header: "Elec Cost",
  },
  {
    accessorKey: "total_production_cost",
    header: "Total Cost",
  },
  {
    accessorKey: "output_weight",
    header: "Output Weight",
  },
  {
    accessorKey: "cost_per_kg",
    header: "Cost/kg",
  },
]
