const request = require("supertest");
const express = require("express");
const { app, db } = require("./index.js");

describe("Products API", () => {
  let createdId;

  test("POST /api/products", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({ name: "TestProduct", price: 99.99 });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("productId");
    createdId = res.body.productId;
  });

  test("GET /api/products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /api/products/:id", async () => {
    const res = await request(app).get(`/api/products/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("price");
  });

  test("PATCH /api/products/:id", async () => {
    const res = await request(app)
      .patch(`/api/products/${createdId}`)
      .send({ price: 149.99 });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Product updated successfully.");
  });

  test("DELETE /api/products/:id", async () => {
    const res = await request(app).delete(`/api/products/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Product deleted successfully.");
  });

  test("GET /api/products/:id", async () => {
    const res = await request(app).get(`/api/products/${createdId}`);
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe("Product not found");
  });
});
