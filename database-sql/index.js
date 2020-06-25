/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: 'traitsDB'
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
});

connection.query('USE traitsDB', (err) => {
  if (err) {
    throw err;
  }
  console.log('using traitsDB');
});

module.exports.connection = connection;
