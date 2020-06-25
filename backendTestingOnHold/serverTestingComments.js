/* eslint-disable prefer-destructuring */
/* eslint-disable import/newline-after-import */
// require('dotenv').config();
// const mysql = require('mysql');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
// const request = require('supertest')(`http://127.0.0.1:${process.env.SERVER_PORT}`);
// const chai = require('chai');
// const expect = chai.expect;
// chai.use(sinonChai);

// const app = require('../server/index.js');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
//   database: 'traitsDB'
// });

// describe('express server', () => {
//   it('Responds to GET req to "/"', (done) => {
//     request.get('/').expect((res) => {
//       expect(res.statusCode).to.equal(300);
//     });
//     done();
//   });

//   test('Responds to GET req to "/traits/:product_id"', (done) => {
//     request
//       .get('/traits/43')
//       .expect(300)
//       .expect((res) => {
//         expect(res.body.product_id).to.equal('42');
//       });

//     done();
//   });
// });
