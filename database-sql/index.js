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
  user: process.env.SQL_USER,
  password: process.env.SQL_PWD,
  port: process.env.SQL_PORT,
  database: 'traitsDB'
});

module.exports.connection = connection;
