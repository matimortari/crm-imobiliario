import { pool } from "~~/server/lib/db"

export default defineEventHandler(async () => {
  try {
    const result = await pool.query("SELECT * FROM imovel ORDER BY id")
    return { success: true, imoveis: result.rows }
  }
  catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    return { success: false, message }
  }
})
