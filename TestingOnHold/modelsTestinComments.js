/* eslint-disable import/newline-after-import */
// require('dotenv').config();

// const mysql = require('mysql');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
// const request = require('supertest')(`http://127.0.0.1:${process.env.SERVER_PORT}`);
// const chai = require('chai');
// const expect = chai.expect;
// const models = require('../database-sql/models/index.js');
// const db = require('../database-sql/index.js');
// const { stub } = require('sinon');
// chai.use(sinonChai);

// describe('fetchTraitsFromProduct', () => {
//   const query = sinon.stub(db.connection, 'query');
//   query.resolves({
//     product_id: '42',
//     traits: ['asymmetric', 'human-resource', 'multi-tasking']
//   });

//   const result = models.fetchTraitsForProduct(42);

//   expect(result).to.be.an('object');
//   expect(result.product_id).to.equal('42');

//   query.restore();
// });
