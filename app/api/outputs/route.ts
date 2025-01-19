// app/api/outputs/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/db/drizzle'
import { outputs } from '@/db/schema'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    // Body might look like:
    // {
    //   date: '2024-12-02',
    //   total_milk_cost: 22324.03,
    //   total_gas_cost: 1015.00,
    //   total_staff_cost: 1706.25,
    //   total_electricity_cost: 2750.00,
    //   total_production_cost: 27795.25,
    //   output_weight: 102.85,
    //   cost_per_kg: 270.25
    // }

    const inserted = await db.insert(outputs).values({
      date: body.date,
      total_milk_cost: body.total_milk_cost,
      total_gas_cost: body.total_gas_cost,
      total_staff_cost: body.total_staff_cost,
      total_electricity_cost: body.total_electricity_cost,
      total_production_cost: body.total_production_cost,
      output_weight: body.output_weight,
      cost_per_kg: body.cost_per_kg,
    })

    return NextResponse.json(inserted)
  } catch (error) {
    console.error('Error inserting into Outputs:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
