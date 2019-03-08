"use strict";

const Address = use("App/Models/Address");

class AddressController {
  async getAddress({ request, params, response }) {
    let user_id = params.uid;
    try {
      let address = await Address.query()
        .where("user_id", user_id)
        .fetch();
      return response.status(200).json(address);
    } catch (error) {
      return response.json(error);
    }
  }

  async addAddress({ request, response }) {
    let user_id = request.input("user_id");
    let label = request.input("label");
    let name = request.input("name");
    let phone = request.input("phone");
    let province = request.input("province");
    let district = request.input("district");
    let sub_district = request.input("sub_district");
    let postal_code = request.input("postal_code");
    let full_address = request.input("full_address");

    let address = new Address();
    address.user_id = user_id;
    address.label = label;
    address.name = name;
    address.phone = phone;
    address.province = province;
    address.district = district;
    address.sub_district = sub_district;
    address.postal_code = postal_code;
    address.full_address = full_address;

    await address.save();
    return response.status(201).json(address);
  }

  async updateAddress({ params, request, response }) {
    let label = request.input("label");
    let name = request.input("name");
    let phone = request.input("phone");
    let province = request.input("province");
    let district = request.input("district");
    let sub_district = request.input("sub_district");
    let postal_code = request.input("postal_code");
    let full_address = request.input("full_address");

    const address = await Address.find(params.id);
    if (!address) {
      return response.status(404).json({ data: "Data not found!" });
    }

    address.label = label;
    address.name = name;
    address.phone = phone;
    address.province = province;
    address.district = district;
    address.sub_district = sub_district;
    address.postal_code = postal_code;
    address.full_address = full_address;

    await address.save();

    response.status(200).json(address);
  }
}

module.exports = AddressController;
