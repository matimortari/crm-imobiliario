import { pool } from "~~/server/lib/db"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  const body = await readBody(event)
  const { titulo, local, status, cliente_id } = body

  try {
    const result = await pool.query(
      "UPDATE imovel SET titulo=$1, local=$2, status=$3, cliente_id=$4 WHERE id=$5 RETURNING *",
      [titulo, local, status, cliente_id || null, id],
    )
    return { success: true, imovel: result.rows[0] }
  }
  catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    return { success: false, message }
  }
})
