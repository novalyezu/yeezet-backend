"use strict";

const Route = use("Route");
const Product = use("App/Models/Product");

Route.group(() => {
  Route.get("products", "ProductController.index");
  Route.get("product/:id", "ProductController.show");
  // Route.post("products/search", "ProductController.search");

  Route.get("orders/:uid", "CartController.index").middleware("auth");
  Route.get("orders/:id", "CartController.show");
  Route.get("order/:id", "CartController.getByProductId");
  Route.post("donepay/:uid", "CartController.donePay");
  Route.post("orders", "CartController.store").middleware("auth");
  Route.put("orders/:id", "CartController.update");
  Route.patch("orders/:id", "CartController.updateqty");
  Route.delete("orders/:id", "CartController.delete");

  Route.post("auth/register", "AuthController.register");
  Route.post("auth/login", "AuthController.login");
  Route.post("auth/logout", "AuthController.logout").middleware("auth");
  Route.post("auth/profile", "AuthController.profile").middleware("auth");
  Route.post("auth/refresh_token", "AuthController.refreshToken");

  Route.get("profile/:uid", "ProfileController.getProfile").middleware("auth");
  Route.post("profile", "ProfileController.updateProfile").middleware("auth");

  Route.get("address/:uid", "AddressController.getAddress").middleware("auth");
  Route.post("address", "AddressController.addAddress").middleware("auth");
  Route.put("address/:id", "AddressController.updateAddress").middleware(
    "auth"
  );
}).prefix("api/v1");
