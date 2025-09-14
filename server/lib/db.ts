import pkg from "pg"

const { Pool } = pkg

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "crm-imobiliario",
  password: "postgres",
  port: 5432,
})

export async function query(sql: string, params?: any[]) {
  const client = await pool.connect()
  try {
    const res = await client.query(sql, params)
    return res
  }
  finally {
    client.release()
  }
}
