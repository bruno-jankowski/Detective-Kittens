import mysql from 'mysql2'
import { pass } from './password_database.js';
import dotenv from 'dotenv'
dotenv.config()
//*In this file i make an API i guess for database to interact with backend which then interacts with frontend 
//*I make async functions and export them to be used in server.js 
//*This way server interacts only with Https and this file interacts only with database 


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: pass,
    database: process.env.MYSQL_DATABASE,
  }).promise()

  export async function getNotes() {
    const [rows] = await pool.query(`
    SELECT * 
    FROM notes`)
    return rows
  }

  export async function getUsers(){
    const [rows] = await pool.query(`
    SELECT * 
    FROM users`)
    return rows
  }

  export async function getNote(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM notes
    WHERE id = ? 
    `, [id])
    return rows[0]
  }
  
  export async function deleteNote(id) {
    const [rows] = await pool.query(`
    DELETE FROM notes 
    WHERE id= ?
    `, [id])
    return rows[0]
  }

  export async function createNote(title, contents) {
    const [result] = await pool.query(`
    INSERT INTO notes (title, contents)
    VALUES (?, ?)
    `, [title, contents])
    const id = result.insertId
    return getNote(id)
  }

  const result = await getNotes()
  console.log(result);