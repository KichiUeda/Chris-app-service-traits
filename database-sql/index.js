/* eslint-disable no-console */
const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
//   database: 'traitsDB'
// });

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'traits1692',
  port: 3306,
  database: 'traitsDB'
});

module.exports.connection = connection;
