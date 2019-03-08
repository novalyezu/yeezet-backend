"use strict";

const Model = use("Model");
const Database = use("Database");

class Product extends Model {
  static get table() {
    return "products";
  }

  static get primaryKey() {
    return "id";
  }

  carts() {
    return this.hasMany("App/Models/Cart");
  }

  async products() {
    return await Database.select("*").from("products");
  }
}

module.exports = Product;
