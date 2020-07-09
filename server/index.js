/* eslint-disable no-console */
// require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
// const db = require('../database-sql');
const fetchers = require('../database-sql/models');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/traits/:product_id', (req, res) => {
  const traits = fetchers.fetchTraitsForProduct(req.params.product_id);
  traits
    .then((results) => {
      const traitProducts = results.traits.reduce((acc, trait) => {
        return acc.concat(fetchers.fetchProductsForTrait(trait));
      }, []);
      Promise.all(traitProducts).then((resultsFinal) => {
        resultsFinal.forEach((result) => {
          while (result.products.length < 4) {
            let filler = Math.ceil(Math.random() * 100);
            if (!result.products.includes(filler)) {
              result.products.push(filler);
            }
          }
        });
        const imagesNeeded = resultsFinal.reduce((acc, result) => {
          return acc.concat(result.products);
        }, []);
        console.log(imagesNeeded);
        const requestArray = encodeURI(JSON.stringify(imagesNeeded));
        const requestURL = `http://127.0.0.1:3000/api/${requestArray}?type=thumbnail`;
        console.log(requestURL);
        axios
          .get(requestURL)
          .then((results) => {
            console.log(results.body);
          })
          .catch((err) => {
            if (err) {
              res.status(505).send('Please try again');
            }
          });
        // res.send(requestArray);
      });
    })
    .catch((err) => {
      if (err) {
        res.status(505).send('Please try again');
      }
    });
  // .then((results) => {
  //   Promise.all(results.traits.map((trait) => {
  //     fetchers.fetchProductsForTrait(trait)
  //    }))
  // .catch((err) => {
  //   if (err) {
  //     res.status(505).send(err, 'Please try again');
  //   }
  // });
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
        res.status(505).send(err, 'Please try again');
      }
    });
});

module.exports = app;
