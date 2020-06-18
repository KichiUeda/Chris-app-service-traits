/* eslint-disable no-console */
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'traitsDB'
});

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connected to mysqldb id ', db.threadId);
});

module.exports.db = db;
