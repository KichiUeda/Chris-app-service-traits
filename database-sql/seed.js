/* eslint-disable no-plusplus */
require('dotenv').config();
const faker = require('faker');
// const mysql = require('mysql');
const db = require('./index.js');

const seedQueryString = 'INSERT INTO traits(trait) VALUES (?)';
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

const describe = generateArray([], 'describe');
const noun = generateArray([], 'noun');

const generateStringsFromWords = (array1, array2) => {
  const traits = [];
  while (traits.length <= 100) {
    const random1 = Math.floor(Math.random() * 100);
    const random2 = Math.floor(Math.random() * 100);
    const traitString = `${array1[random1]} ${array2[random2]}`;

    if (!traits.includes(traitString)) {
      traits.push(traitString);
    }
  }
  return traits;
};

const traitsArray = generateStringsFromWords(describe, noun);

const seedDB = (array) => {
  db.connection.query('USE traitsDB', () => {
    for (let i = 1; i <= array.length; i++) {
      db.connection.query(seedQueryString, [array[i]], (err) => {
        if (err) {
          console.log('Error: ', err);
          return;
        }
        console.log('item added');
      });
    }
  });
};

seedDB(describe);
