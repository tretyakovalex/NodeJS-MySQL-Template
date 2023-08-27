const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'your_mysql_user',
    password: 'your_mysql_pw',
    database: 'your_mysql_database'
});

module.exports = { pool };