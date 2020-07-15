/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  port: 3306,
  database: 'traitsDB'
});

// connection.query('USE traitsDB', (error) => {
//   if (error) {
//     throw error;
//   }
//   console.log('using traitsDB as id: ', connection.threadId);
// });

module.exports.connection = connection;
