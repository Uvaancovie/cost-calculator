// db/drizzle.ts
import { config } from 'dotenv'
import { neon } from '@neondatabase/serverless'    // <-- use neon(...) instead
import { drizzle } from 'drizzle-orm/neon-http'

config({ path: '.env' })

// 1. Create a Neon HTTP client with neon(...)
const sql = neon(process.env.DATABASE_URL!, {
  // Optional config e.g. arrayMode, fullResults, fetchOptions...
})

// 2. Pass this to Drizzle's neon-http driver
export const db = drizzle(sql)
