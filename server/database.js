import mysql from 'mysql2'
import { pass } from './password_database.js';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: pass,
    database: 'notes_app',
  }).promise()

console.log(pass);

const result = await pool.query("select * from notes")
const rows = result[0] //first item in pool is rows
console.log(rows)
  