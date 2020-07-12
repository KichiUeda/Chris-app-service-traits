/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: 'traitsDB'
});

// connection.query('USE traitsDB', (error) => {
//   if (error) {
//     throw error;
//   }
//   console.log('using traitsDB as id: ', connection.threadId);
// });

module.exports.connection = connection;
