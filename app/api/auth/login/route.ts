import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { email, password } = await req.json();

    // Check if the email and password were provided
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    // Query the database for the user
    const user = await db.select().from(users).where(eq(users.email, email)).limit(1);

    if (!user.length) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user[0].password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    // If successful, return user details (excluding password)
    const { password: _, ...userWithoutPassword } = user[0];

    return NextResponse.json({
      message: "Login successful.",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Error in login route:", error);
    return NextResponse.json(
      { error: "An error occurred while logging in." },
      { status: 500 }
    );
  }
}
