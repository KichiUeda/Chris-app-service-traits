/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: 'traitsDB'
});

connection.connect();

connection.query('USE traitsDB', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('using traitsDB');
});

connection.query(queryString, queryParams, (err, results) => {
  return results;
});

module.exports.connection = connection;
