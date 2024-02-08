const mysql = require('mysql'); 

const pool = mysql.createPool({
    connectionLimit: 10, // Maximum number of connections to keep in the cache for idle use 
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'nodemysql',
}) 

module.exports = pool;