const mysql = require('mysql')

mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '', 
    database: 'notes_app'
})