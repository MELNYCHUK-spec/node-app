const request = require('supertest');
const express = require('express');
const app = require('./index.js');

describe('Products API', () => {
  let createdId;

  test('POST /products', async () => {
    const res = await request(app)
      .post('/products')
      .send({ name: 'TestProduct', price: 99.99 });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('productId');
    createdId = res.body.productId;
  });

  test('GET /products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /products/:id', async () => {
    const res = await request(app).get(`/products/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('price');
  });

  test('PATCH /products/:id', async () => {
    const res = await request(app)
      .patch(`/products/${createdId}`)
      .send({ price: 149.99 });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Product updated successfully.');
  });

  test('DELETE /products/:id', async () => {
    const res = await request(app).delete(`/products/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Product deleted successfully.');
  });

  test('GET /products/:id — после удаления', async () => {
    const res = await request(app).get(`/products/${createdId}`);
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Product not found');
  });
});