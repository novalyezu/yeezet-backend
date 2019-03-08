"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
const Database = use("Database");

class ProductSchema extends Schema {
  up() {
    this.create("products", table => {
      table.increments();
      table.string("name").nullable();
      table.string("image").nullable();
      table.double("price").nullable();
      table.integer("rating").nullable();
      table.text("description").nullable();
      table.timestamps();
    });

    // this.schedule(async trx => {
    //   const products = await Database.table("products").transacting(trx);
    //   await Database.table("new_products")
    //     .transacting(trx)
    //     .insert(products);
    // });

    // this.drop("products");
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductSchema;
