"use strict";

const Model = use("Model");

class Cart extends Model {
  static get table() {
    return "carts";
  }

  static get primaryKey() {
    return "id";
  }

  products() {
    return this.belongsTo("App/Models/Product");
  }

  users() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Cart;
