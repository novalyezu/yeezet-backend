"use strict";

const Cart = use("App/Models/Cart");
class CartController {
  async index({ params, response }) {
    let carts = await Cart.query()
      .with("products")
      .where("user_id", params.uid)
      .fetch();
    return response.json(carts);
  }

  async show({ params, response }) {
    let carts = await Cart.find(params.id);
    return response.json(carts);
  }

  async getByProductId({ params, response }) {
    let carts = await Cart.query()
      .where("product_id", "=", params.id)
      .fetch();
    return response.json(carts);
  }

  async donePay({ params, response }) {
    let carts = await Cart.query()
      .where("user_id", params.uid)
      .delete();
    return response.json(carts);
  }

  async store({ request, response }) {
    let product_id = request.input("product_id");
    let qty = request.input("qty");
    let price = request.input("price");
    let user_id = request.input("user_id");

    const checkExist = await Cart.findBy("product_id", product_id);

    if (!checkExist) {
      let cart = new Cart();
      cart.product_id = product_id;
      cart.qty = qty;
      cart.price = price;
      cart.user_id = user_id;

      await cart.save();
      response.status(201).json(cart);
    } else {
      checkExist.qty = checkExist.qty + qty;
      checkExist.price = price * checkExist.qty;

      await checkExist.save();
      response.status(200).json(checkExist);
    }
  }

  async update({ params, request, response }) {
    let product_id = request.input("product_id");
    let qty = request.input("qty");
    let price = request.input("price");

    const cart = await Cart.find(params.id);
    if (!cart) {
      return response.status(404).json({ data: "Data not found!" });
    }

    cart.product_id = product_id;
    cart.qty = qty;
    cart.price = price;

    await cart.save();

    response.status(200).json(cart);
  }

  async updateqty({ params, request, response }) {
    let qty = request.input("qty");
    let price = request.input("price");

    const cart = await Cart.find(params.id);
    if (!cart) {
      return response.status(404).json({ data: "Data not found!" });
    }

    cart.qty = qty;
    cart.price = price;

    await cart.save();

    response.status(200).json(cart);
  }

  async delete({ params, request, response }) {
    const cart = await Cart.find(params.id);
    if (!cart) {
      return response.status(404).json({ data: "Data not found!" });
    }

    await cart.delete();

    response.status(200).json(params.id);
  }
}

module.exports = CartController;
