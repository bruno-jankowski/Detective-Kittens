import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '#####',
    database: 'notes_app',
  }).promise()

const result = await pool.query("select * from notes")
console.log(result)
  