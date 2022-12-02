const Customer = require("../model/customer");

class customerController {
  static async readCustomer(req, res, next) {
    try {
      const { name, gender, addr } = req.query;

      const data = await Customer.findAllCustomer(name, gender, addr);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  static async readOneCustomer(req, res, next) {
    try {
      const { id } = req.params;

      const data = await Customer.findOneCustomer(id);

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  static async editCustomerData(req, res, next) {
    try {
      const { id } = req.params;
      const { email, addr } = req.body;

      const data = await Customer.updateCustomerData(id, email, addr);

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = customerController;
