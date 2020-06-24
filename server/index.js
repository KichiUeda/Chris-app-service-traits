/* eslint-disable no-console */
// require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const db = require('../database-sql');
const fetchers = require('../database-sql/models');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/traits/:product_id', (req, res) => {
  fetchers
    .fetchTraitsForProduct(req.params.product_id)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

app.get('/traits/products/:trait', (req, res) => {
  console.log(req.params);
  fetchers
    .fetchProductsForTrait(req.params.trait)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

module.exports = app;
