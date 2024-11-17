import "dotenv/config"
import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

import * as schema from "@/db/schema"

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, {schema})

const main = async () => {
  try {

    console.log("seeding database");

    // DELETE ALL EXISTING DATA
    await Promise.all([
      db.delete(schema.userProgress),
      db.delete(schema.challenges),
      db.delete(schema.units),
      db.delete(schema.lessons),
      db.delete(schema.courses),
      db.delete(schema.challengeOptions),
    ])

  }
  catch(error) {
    console.error(error)
    throw new Error("Failed to seed database")
  }
}
