/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/newline-after-import */
require('dotenv').config();
// const mysql = require('mysql');  //------Uncomment to run integration tests
const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
// const db = require('../database-sql/index.js');
const app = require('../server/index.js');
const request = require('supertest');
// const { expect } = require('chai');
// const chai = require('chai');
// const expect = chai.expect;
// chai.use(sinonChai);

describe('Unit tests for server routes', () => {
  let getStub;

  afterAll((done) => {
    app.close();
    done();
  });

  beforeEach(() => {
    getStub = sinon.stub(request(app), 'get');
  });

  afterEach(() => {
    getStub.restore();
  });

  it('Responds to GET req to /', () => {
    getStub.returns({ statusCode: 200 });
    const result = getStub('/');

    expect(result.statusCode).toBe(200);
  });

  it('Responds to GET req to /traits/:product_id', () => {
    getStub.returns({
      statusCode: 200,
      body: { product_id: '43', traits: ['one', 'two', 'three'] }
    });
    const result = getStub('/traits/43');

    expect(result.statusCode).toBe(200);
    expect(result.body.product_id).toEqual('43');
    expect(typeof result.body.traits[0]).toBe('string');
  });

  it('Responds to GET req to /traits/products/:trait', () => {
    getStub.returns({
      statusCode: 200,
      body: { trait: 'heuristic', products: [1, 2, 3] }
    });
    const result = getStub('/traits/products/heuristic');

    expect(result.statusCode).toBe(200);
    expect(typeof result.body.trait).toBe('string');
    expect(result.body.trait).toBe('heuristic');
    expect(typeof result.body.products[0]).toBe('number');
  });
});
//----- WORKING INTEGRATION TESTS, UNCOMMENT TO USE--------
// describe('Integration tests for server routes', () => {
//   afterAll((done) => {
//     db.connection.destroy();
//     app.close();
//     done();
//   });
//   test('Responds to GET req to "/"', () => {
//     return request(app)
//       .get('/')
//       .then((response) => {
//         expect(response.statusCode).toBe(200);
//       });
//   });
//   test('Responds to GET req to "/traits/:product_id"', () => {
//     return request(app)
//       .get('/traits/43')
//       .then((response) => {
//         expect(response.statusCode).toBe(200);
//         expect(response.body.product_id).toEqual('43');
//         expect(response.body.traits.length).toEqual(3);
//         expect(typeof response.body.traits[0]).toEqual('string');
//       });
//   });
//   test('Responds to GET req to "/traits/:product_id"', () => {
//     return request(app)
//       .get('/traits/products/heuristic')
//       .then((response) => {
//         expect(response.statusCode).toBe(200);
//         expect(response.body.trait).toEqual('heuristic');
//         expect(typeof response.body.products[0]).toEqual('number');
//       });
//   });
// });
