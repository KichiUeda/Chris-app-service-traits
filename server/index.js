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
  const id = req.params.product_id;
  const traits = fetchers.fetchTraitsForProduct(id);
  traits.then((traitsData) => {
    const traitProducts = traitsData.traits.reduce((acc, trait) => {
      return acc.concat(fetchers.fetchProductsForTrait(trait, id));
    }, []);
    Promise.all(traitProducts)
      .then((resultsFinal) => {
        resultsFinal.forEach((result) => {
          console.log('results', result.products);
          // if (result.products.indexOf(req.params.product_id) >= 0) {
          //   console.log('duplicate!');
          // }
          while (result.products.length < 4) {
            const filler = Math.ceil(Math.random() * 100);
            if (!result.products.includes(filler) && filler !== id) {
              result.products.push(filler);
            }
          }
          console.log('resultsFinal', resultsFinal);
        });
        axios
          .all(
            resultsFinal.map((result) => {
              const requestArray = encodeURI(JSON.stringify(result.products));
              const requestURL = `http://127.0.0.1:3000/api/${requestArray}?type=thumbnail`;

              return axios.get(requestURL);
            })
          )
          .then((resArray) => {
            let productArray = resArray.map((response) => {
              return response.data;
            });
            console.log('productArray', productArray);
            for (var i = 0; i < productArray.length; i++) {
              if (
                productArray[i].every((item, index) => {
                  console.log('resultsFinal product', resultsFinal[i].products);
                  console.log('item', item.product_id);
                  return resultsFinal[i].products.includes(item.product_id);
                })
              ) {
                console.log('trait', resultsFinal[i].trait);
                productArray[i].push(resultsFinal[i].trait.toUpperCase());
              }
            }
            console.log('From Micko ', productArray);
            return productArray;
          })
          .then((resToClient) => {
            res.set({ 'Access-Control-Allow-Origin': '*' });
            res.send(resToClient);
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
  });
});
// .catch((err) => {
//   if (err) {
//     res.status(505).send('Please try again');
//   }
// });

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

// axios
//   .get(requestURL)
//   .then((results) => {
//     console.log('From Micko', results.data);
//     res.set({ 'Access-Control-Allow-Origin': '*' });
//     res.send(results.data);
//   })
//   .catch((err) => {
//     if (err) {
//       throw err;
//     }
//   });

// .then((results) => {
//   Promise.all(results.traits.map((trait) => {
//     fetchers.fetchProductsForTrait(trait)
//    }))
// .catch((err) => {
//   if (err) {
//     res.status(505).send(err, 'Please try again');
//   }
// });

// res.set({ 'Access-Control-Allow-Origin': '*' });
// console.log(resultsFinal);
// res.send(JSON.stringify(resultsFinal));
// const imagesNeeded = resultsFinal.reduce((acc, result) => {
//   return acc.concat(result.products);
// }, []);
// console.log('products to Micko', imagesNeeded);
// for (let i = 0; i < resultsFinal.length; i++) {
//   const requestArray = encodeURI(JSON.stringify(resultsFinal[i].products));
//   const requestURL = `http://127.0.0.1:3000/api/${requestArray}?type=thumbnail`;
//   console.log(requestURL);

// }
