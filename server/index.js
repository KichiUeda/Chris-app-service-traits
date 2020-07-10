/* eslint-disable no-console */
// require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
// const db = require('../database-sql');
const fetchers = require('../database-sql/models');
const { restart } = require('nodemon');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/traits/:product_id', (req, res) => {
  const id = req.params.product_id;
  const traits = fetchers.fetchTraitsForProduct(id);
  traits
    .then((results) => {
      const traitProducts = results.traits.reduce((acc, trait) => {
        return acc.concat(fetchers.fetchProductsForTrait(trait, id));
      }, []);
      Promise.all(traitProducts).then((resultsFinal) => {
        resultsFinal.forEach((result) => {
          console.log('results', result.products);
          // if (result.products.indexOf(req.params.product_id) >= 0) {
          //   console.log('duplicate!');
          // }
          while (result.products.length < 4) {
            let filler = Math.ceil(Math.random() * 100);
            if (!result.products.includes(filler) && !result.products.includes(id)) {
              result.products.push(filler);
            }
          }
        });
        res.set({ 'Access-Control-Allow-Origin': '*' });
        console.log(resultsFinal);
        res.send(JSON.stringify(resultsFinal));
        const imagesNeeded = resultsFinal.reduce((acc, result) => {
          return acc.concat(result.products);
        }, []);
        console.log('products to Micko', imagesNeeded);
        const requestArray = encodeURI(JSON.stringify(imagesNeeded));
        // const requestURL = `http://127.0.0.1:3000/api/${requestArray}?type=thumbnail`;
        // console.log(requestURL);
        // axios
        //   .get(requestURL)
        //   .then((results) => {
        //     console.log(results.body);
        //   })
        //   .catch((err) => {
        //     if (err) {
        //       res.status(505).send('Please try again');
        //     }
        //   });
        // res.send(traitProducts);
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
