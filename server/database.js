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

console.log(pass);

const result = await pool.query("select * from notes")
const rows = result[0] //first item in pool is rows
console.log(rows)
  