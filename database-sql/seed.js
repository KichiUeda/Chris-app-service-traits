/* eslint-disable import/newline-after-import */
/* eslint-disable no-plusplus */
require('dotenv').config();

const faker = require('faker');
const db = require('./index.js');
const traitsSeedQueryString = 'INSERT INTO traits(trait) VALUES (?)';
const productIdSeedQueryString = 'INSERT INTO products(product_id) VALUES(?)';
const traitsToProductSeedQueryString =
  'INSERT INTO traits_products(product_id, trait_id) VALUES(?,?)';

// general generator for types of words, decided to only use descriptors for the time being
const generateArray = (array, type) => {
  const word =
    type === 'describe'
      ? faker.fake('{{company.catchPhraseDescriptor}}')
      : faker.fake('{{company.catchPhraseNoun}}');

  if (!array.includes(word)) {
    array.push(word);
  }
  if (array.length === 100) {
    return array;
  }
  return generateArray(array, type);
};

// insert items from an array into DB
const seedDB = (array, queryString) => {
  db.connection.query('USE traitsDB', () => {
    for (let i = 0; i < array.length; i++) {
      let queryParams = [array[i]];

      if (array.length > 100) {
        queryParams = [array[i][0], array[i][1]];
      }
      db.connection.query(queryString, queryParams, (err) => {
        if (err) {
          console.log('Error: ', err);
          return;
        }
        console.log('item added');
      });
    }
  });
};

// create array of product to trait mappings, three traits for every product
const mapTraitsToProducts = (array) => {
  const products = [];
  for (let j = 1; j <= array.length; j++) {
    const indexes = [];
    while (indexes.length < 3) {
      const randomIndex = Math.ceil(Math.random() * array.length);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
        products.push([j, array[randomIndex - 1]]);
      }
    }
  }
  return products;
};

const traits = generateArray([], 'describe');
const productIds = Array.from(Array(101).keys()).slice(1);
const traitsToProductsArray = mapTraitsToProducts(productIds);

seedDB(traits, traitsSeedQueryString);
seedDB(productIds, productIdSeedQueryString);
seedDB(traitsToProductsArray, traitsToProductSeedQueryString);

module.exports.traits = traits;
