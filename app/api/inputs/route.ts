import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/db/drizzle'
import { inputs } from '@/db/schema'
import { eq } from 'drizzle-orm'

// GET all inputs
export async function GET() {
  try {
    const allInputs = await db.select().from(inputs)
    return NextResponse.json(allInputs)
  } catch (error) {
    console.error('Error fetching inputs:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

// POST a new input
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const inserted = await db.insert(inputs).values({
      date: new Date(body.date).toISOString(),
      volume_of_milk: body.volume_of_milk,
      gas_usage: body.gas_usage,
      electricity_usage: body.electricity_usage,
      staff_count: body.staff_count,
      staff_hours: body.staff_hours,
    })
    return NextResponse.json(inserted)
  } catch (error) {
    console.error('Error inserting input:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

// PUT or PATCH to update an existing input (if needed)
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    const updated = await db
      .update(inputs)
      .set({
        volume_of_milk: body.volume_of_milk,
        gas_usage: body.gas_usage,
        electricity_usage: body.electricity_usage,
        staff_count: body.staff_count,
        staff_hours: body.staff_hours,
      })
      .where(eq(inputs.id, body.id))
    return NextResponse.json(updated)
  } catch (error) {
    console.error('Error updating input:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

// DELETE an input by id
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const id = Number(searchParams.get('id'))
    const deleted = await db.delete(inputs).where(eq(inputs.id, id))
    return NextResponse.json(deleted)
  } catch (error) {
    console.error('Error deleting input:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
