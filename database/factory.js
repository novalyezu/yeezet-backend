"use strict";

const Factory = use("Factory");

Factory.blueprint("App/Models/Product", async (faker, index, data) => {
  return {
    name: data[index].name,
    image: data[index].image,
    price: data[index].price,
    rating: data[index].rating,
    description: data[index].desc
  };
});
