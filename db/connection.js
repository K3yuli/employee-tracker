// connect mysql database. import mysql2
const mysql = require('mysql2');

// connects application to the mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // mysql username
        user: 'root',
        // mysql password
        password: '69Sql552',
        database: 'business_organizer'
    },
    console.log('Connected to the election database.')
);

module.exports = db;