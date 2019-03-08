"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
const Database = use("Database");

class CartSchema extends Schema {
  up() {
    this.create("carts", table => {
      table.increments();
      table
        .integer("product_id")
        .unsigned()
        .references("id")
        .inTable("products");
      table.integer("qty");
      table.double("price");
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.timestamps();
    });
  }

  down() {
    this.drop("carts");
  }
}

module.exports = CartSchema;
