"use strict";

const Product = use("App/Models/Product");

class ProductController {
  async index({ request, params, response }) {
    let { page, perPage, search, filter, sort } = request._qs;
    page = parseInt(page);
    let products = await Product.all();
    if (page) {
      if (perPage) {
        if (search) {
          if (Object.is(search, search)) {
            switch (Object.keys(search)[0]) {
              case "name":
                try {
                  products = await Product.query()
                    .where("name", "LIKE", "%" + search.name + "%")
                    .paginate(page, perPage);
                  products.pages["nextPage"] =
                    `http://192.168.0.61:3333/api/v1/products?page=${page +
                      1}&perPage=${perPage}&search[name]=` + search.name;
                  products.pages["prevPage"] =
                    `http://192.168.0.61:3333/api/v1/products?page=${page -
                      1}&perPage=${perPage}&search[name]=` + search.name;
                } catch (err) {
                  console.log("error :v " + err);
                }

                break;

              case "desc":
                try {
                  products = await Product.query()
                    .where("description", "LIKE", "%" + search.desc + "%")
                    .paginate(page, perPage);
                  products.pages[
                    "nextPage"
                  ] = `http://192.168.0.61:3333/api/v1/products?page=${page +
                    1}&perPage=${perPage}&search[desc]=${search}`;
                  products.pages[
                    "prevPage"
                  ] = `http://192.168.0.61:3333/api/v1/products?page=${page -
                    1}&perPage=${perPage}&search[desc]=${search}`;
                } catch (err) {
                  console.log("error :v " + err);
                }

                break;

              default:
                try {
                  products = await Product.query()
                    .where("name", "LIKE", "%" + search + "%")
                    .paginate(page, perPage);
                  products.pages[
                    "nextPage"
                  ] = `http://192.168.0.61:3333/api/v1/products?page=${page +
                    1}&perPage=${perPage}&search[name]=${search}`;
                  products.pages[
                    "prevPage"
                  ] = `http://192.168.0.61:3333/api/v1/products?page=${page -
                    1}&perPage=${perPage}&search[name]=${search}`;
                } catch (err) {
                  console.log("error :v " + err);
                }

                break;
            }
          } else {
            try {
              products = await Product.query()
                .where("name", "LIKE", "%" + search + "%")
                .paginate(page, perPage);
              products.pages[
                "nextPage"
              ] = `http://192.168.0.61:3333/api/v1/products?page=${page +
                1}&perPage=${perPage}&search=${search}`;
              products.pages[
                "prevPage"
              ] = `http://192.168.0.61:3333/api/v1/products?page=${page -
                1}&perPage=${perPage}&search=${search}`;
            } catch (err) {
              console.log("error :v " + err);
            }
          }
        } else {
          try {
            products = await Product.query().paginate(page, perPage);
            products.pages[
              "nextPage"
            ] = `http://192.168.0.61:3333/api/v1/products?page=${page +
              1}&perPage=${perPage}`;
            products.pages[
              "prevPage"
            ] = `http://192.168.0.61:3333/api/v1/products?page=${page -
              1}&perPage=${perPage}`;
          } catch (err) {
            console.log("error :v " + err);
          }
        }
      } else {
        if (search) {
          if (Object.is(search, search)) {
            switch (Object.keys(search)[0]) {
              case "name":
                try {
                  products = await Product.query()
                    .where("name", "LIKE", "%" + search.name + "%")
                    .paginate(page, 4);
                  products.pages["nextPage"] =
                    `http://192.168.0.61:3333/api/v1/products?page=${page +
                      1}&search[name]=` + search.name;
                  products.pages["prevPage"] =
                    `http://192.168.0.61:3333/api/v1/products?page=${page -
                      1}&search[name]=` + search.name;
                } catch (err) {
                  console.log("error :v " + err);
                }

                break;

              case "desc":
                try {
                  products = await Product.query()
                    .where("description", "LIKE", "%" + search.desc + "%")
                    .paginate(page, 4);
                  products.pages[
                    "nextPage"
                  ] = `http://192.168.0.61:3333/api/v1/products?page=${page +
                    1}&search[desc]=${search}`;
                  products.pages[
                    "prevPage"
                  ] = `http://192.168.0.61:3333/api/v1/products?page=${page -
                    1}&search[desc]=${search}`;
                } catch (err) {
                  console.log("error :v " + err);
                }

                break;

              default:
                try {
                  products = await Product.query()
                    .where("name", "LIKE", "%" + search + "%")
                    .paginate(page, perPage);
                  products.pages[
                    "nextPage"
                  ] = `http://192.168.0.61:3333/api/v1/products?page=${page +
                    1}&search[name]=${search}`;
                  products.pages[
                    "prevPage"
                  ] = `http://192.168.0.61:3333/api/v1/products?page=${page -
                    1}&search[name]=${search}`;
                } catch (err) {
                  console.log("error :v " + err);
                }

                break;
            }
          } else {
            try {
              products = await Product.query()
                .where("name", "LIKE", "%" + search + "%")
                .paginate(page, perPage);
              products.pages[
                "nextPage"
              ] = `http://192.168.0.61:3333/api/v1/products?page=${page +
                1}&search=${search}`;
              products.pages[
                "prevPage"
              ] = `http://192.168.0.61:3333/api/v1/products?page=${page -
                1}&search=${search}`;
            } catch (err) {
              console.log("error :v " + err);
            }
          }
        } else {
          try {
            products = await Product.query().paginate(page, 4);
            products.pages[
              "nextPage"
            ] = `http://192.168.0.61:3333/api/v1/products?page=${page + 1}`;
            products.pages[
              "prevPage"
            ] = `http://192.168.0.61:3333/api/v1/products?page=${page - 1}`;
          } catch (err) {
            console.log("error :v " + err);
          }
        }
      }
    } else {
      try {
        products = await Product.all();
      } catch (err) {
        console.log("error :v " + err);
      }
    }

    return response.json(products);
  }

  async show({ params, response }) {
    let products = await Product.find(params.id);
    return response.json(products);
  }

  async search({ request, response }) {
    let keyword = request.input("keyword");
    let offset = request.input("offset");

    let products = await Product.query()
      .where("name", "like", "%" + keyword + "%")
      .paginate(offset, 6);

    return response.status(200).json(products);
  }
}

module.exports = ProductController;
