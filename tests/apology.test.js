const request = require('supertest');
const app = require('../server')
let mongoose = require('mongoose');

beforeAll(done => {
  done();
});

afterAll(done => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close()
  done()
});

// getting all
describe('📄 Testing getting all apologies', () => {
  test('Get all apologies', async (done) => {
    return request(app)
      .get('/apology/all')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
        done();
      }).catch((err) => {
        console.log(err)
      });
  });
});
