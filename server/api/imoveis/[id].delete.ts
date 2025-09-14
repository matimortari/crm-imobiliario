import { pool } from "~~/server/lib/db"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id

  try {
    await pool.query("DELETE FROM imovel WHERE id=$1", [id])
    return { success: true }
  }
  catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    return { success: false, message }
  }
})
