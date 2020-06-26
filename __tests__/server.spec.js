/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/newline-after-import */
require('dotenv').config();
// const mysql = require('mysql');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
const db = require('../database-sql/index.js');
const app = require('../server/index.js');
const request = require('supertest');
// const chai = require('chai');
// const expect = chai.expect;
// chai.use(sinonChai);

// describe('Unit tests for server routes', () => {
//   let getStub;
//   beforeEach(() => {
//     getStub = sinon.stub(app, 'get').returns({ statusCode: 200 });
//   });
//   afterEach(() => {
//     getStub.restore();
//   });
//   it('Responds to GET req to /', () => {
//     const result = request(app).getStub('/');
//     expect(result.statusCode).toBe(200);
//   });
// });

describe('Integration tests for server routes', () => {
  afterAll((done) => {
    db.connection.destroy();
    app.close();
    done();
  });
  test('Responds to GET req to "/"', () => {
    return request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test('Responds to GET req to "/traits/:product_id"', () => {
    return request(app)
      .get('/traits/43')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.product_id).toEqual('43');
        expect(response.body.traits.length).toEqual(3);
        expect(typeof response.body.traits[0]).toEqual('string');
      });
  });
  test('Responds to GET req to "/traits/:product_id"', () => {
    return request(app)
      .get('/traits/products/heuristic')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.trait).toEqual('heuristic');
        expect(typeof response.body.products[0]).toEqual('number');
      });
  });
});
