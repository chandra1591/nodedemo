// server.test.js
const request = require('supertest');
const app = require('./server');

describe('Express Server API Tests', () => {
  test('GET /hello should return Hello, World!', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello, World!');
  });

  test('POST /sum should return the sum of two numbers', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 10, b: 15 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(25);
  });

  test('POST /sum should return 400 for invalid input', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 'foo', b: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Invalid input. Numbers expected.');
  });
});
