const request = require('supertest');
const app = require('../server')

describe('📄 Testing GET route', () => {
  test('🙏 Get a random apology', async (done) => {
    return request(app)
      .get('/apology')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
        done();
      }).catch((err) => {
        console.log(err)
      });
  });
});
describe('📄 Testing an unknown route', () => {
  test('Get a 404 Not Found error', async (done) => {
    return request(app)
      .get('/sincerity')
      .then((response) => {
        expect(response.statusCode).toBe(404);
        expect(response.type).toBe('application/json');
        done();
      }).catch((err) => {
        console.log(err)
      });
  });
});
