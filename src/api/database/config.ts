import mysql from 'mysql'

let pool: mysql.Pool | null = null

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'my_db'
}

export async function createConnection() {
  if (pool) return pool

  try {
    pool = mysql.createPool(dbConfig)
    console.log('Conexão com o banco de dados estabelecida')
    return pool
  } catch (err) {
    console.error(err)
    throw new Error('Não foi possível conectar ao banco')
  }
}

export async function closeConnection() {
  if (pool) {
    try {
      await pool.end()
      console.log('Conexão com o banco de dados fechada')
      pool = null // Resetar a variável do pool após o fechamento
    } catch (err) {
      console.error('Erro ao fechar a conexão com o banco de dados:', err)
      throw err
    }
  }
}

export async function getPool() {
  if (!pool) {
    await createConnection()
  }
  return pool
}
