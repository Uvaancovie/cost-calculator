import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/drizzle"; // Ensure this is correctly imported
import { outputs } from "@/db/schema"; // Ensure the correct schema is imported

// GET all insurance calculations
export async function GET() {
  try {
    const data = await db.select().from(outputs);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

// POST: Save insurance calculation
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const inserted = await db.insert(outputs).values({
      date: new Date(body.date).toISOString(),
      total_milk_cost: body.total_milk_cost,
      total_gas_cost: body.total_gas_cost,
      total_staff_cost: body.total_staff_cost,
      total_electricity_cost: body.total_electricity_cost,
      total_production_cost: body.total_production_cost,
      output_weight: body.output_weight,
      cost_per_kg: body.cost_per_kg,
    });

    return NextResponse.json({ message: "Data inserted successfully", inserted });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json({ error: "Failed to insert data" }, { status: 500 });
  }
}
