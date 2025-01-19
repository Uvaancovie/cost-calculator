import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/db/drizzle'
import { outputs } from '@/db/schema'
import { eq } from 'drizzle-orm'

// GET all outputs
export async function GET() {
  try {
    const allOutputs = await db.select().from(outputs)
    return NextResponse.json(allOutputs)
  } catch (error) {
    console.error('Error fetching outputs:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

// POST a new output
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const inserted = await db.insert(outputs).values({
      date: new Date(body.date).toISOString(),
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
    console.error('Error inserting output:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

// PUT to update an existing output
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    const updated = await db
      .update(outputs)
      .set({
        total_milk_cost: body.total_milk_cost,
        total_gas_cost: body.total_gas_cost,
        total_staff_cost: body.total_staff_cost,
        total_electricity_cost: body.total_electricity_cost,
        total_production_cost: body.total_production_cost,
        output_weight: body.output_weight,
        cost_per_kg: body.cost_per_kg,
      })
      .where(eq(outputs.id, body.id))
    return NextResponse.json(updated)
  } catch (error) {
    console.error('Error updating output:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

// DELETE an output by id
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const id = Number(searchParams.get('id'))
    const deleted = await db.delete(outputs).where(eq(outputs.id, id))
    return NextResponse.json(deleted)
  } catch (error) {
    console.error('Error deleting output:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
