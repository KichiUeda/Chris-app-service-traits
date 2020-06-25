require('dotenv').config();
const mysql = require('mysql');
const request = require('supertest');
const { expect } = require('chai');
const app = require('../server/index.js');

const db = require('../database-sql/index.js');

describe('express server', () => {
  // beforeEach((connection) => {
  //   connection.connect();
  // });
  afterEach(() => {
    db.connection.destroy();
  });

  test('Responds to GET req to "/"', (done) => {
    request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
  });
});

describe('server endpoints', () => {
  afterEach(() => {
    db.connection.destroy();
  });
  test('Responds to GET req to "/traits/:product_id"', (done) => {
    request(app)
      .get('/traits/43')
      .then((response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.body.product_id).to.equal('43');
        done();
      });
  });
});
