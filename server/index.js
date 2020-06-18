/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-sql');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/traits/:product_id', (req, res) => {
  console.log(req.params);
  console.log('got request');
  res.send('got request');
  res.end();
});

app.listen(process.env.SERVER_PORT, (err) => {
  if (err) {
    console.log('something went wrong: ', err);
  }
  console.log('server running on port', process.env.SERVER_PORT);
});
