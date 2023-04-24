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
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  }).promise()

  export async function getUserNotes(user) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM notes
    WHERE user = ?`, [user])
    return rows
  }

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

  export async function getUser(username){
    const [rows] = await pool.query(`
    SELECT * 
    FROM users
    WHERE name = ?
    `, [username])
    return rows[0]
  }

  export async function getUserFriends(username){
    const [rows] = await pool.query(`
    SELECT friends 
    FROM users
    WHERE name = ?
    `, [username])
    return rows[0]
  }

  export async function addUserFriends(username, userfriend){
    const [result] = await pool.query(`
    UPDATE users SET friends = JSON_ARRAY_APPEND(friends, '$', ?) WHERE name = ?;
    `, [userfriend, username])
    return result
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

  export async function createNote(title, contents, user) {
    const [result] = await pool.query(`
    INSERT INTO notes (title, contents, user)
    VALUES (?, ?, ?)
    `, [title, contents, user])
    const id = result.insertId
    return getNote(id)
  }

  export async function createUser(name, password) {
    const [result] = await pool.query(`
    INSERT INTO users (name, password)
    VALUES (?, ?)
    `, [name, password])
    return result.name
  }

  