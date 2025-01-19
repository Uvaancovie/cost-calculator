// app/api/sales/route.ts
import { NextResponse } from 'next/server'
import { db } from '@/db/drizzle'
import { dailyProduction } from '@/db/schema'

export async function GET() {
  try {
    const data = await db.select().from(dailyProduction)
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}