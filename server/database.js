import mysql from 'mysql2'
import { pass } from './password_database.js';
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: pass,
    database: process.env.MYSQL_DATABASE,
  }).promise()


  async function getNote(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM notes
    WHERE id = ? 
    `, [id])
    return rows[0]
  }

  async function createNote(title, content) {
    await pool.query(`
    INSERT INTO notes (title, content)
    VALUES (?, ?)
    `, [title, content])
  }