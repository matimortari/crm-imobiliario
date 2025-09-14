import { pool } from "~~/server/lib/db"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { titulo, local, status, cliente_id } = body

  try {
    const result = await pool.query(
      "INSERT INTO imovel (titulo, local, status, cliente_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [titulo, local, status, cliente_id || null],
    )
    return { success: true, imovel: result.rows[0] }
  }
  catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    return { success: false, message }
  }
})
