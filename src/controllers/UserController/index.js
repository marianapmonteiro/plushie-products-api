const User = require('../../models/User');

const userController = {
  async createUser(req, res) {
    const body = req.body;
    try {
      const newUser = await User.create(body);
      res.status(200).send(newUser);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  async getUsers(req, res) {
    try {
      const users = await User.find();
      return res.status(200).send(users);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  async getUsersById(req, res) {
    const { user_id } = req.params;
    try {
      const user = await User.findById(user_id);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  async deleteUser(req, res) {
    const { user_id } = req.params;
    try {
      const user = await User.findByIdAndDelete(user_id);
      return res.status(200).send(user);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  async deleteUserProduct(req, res) {
    const { user_id } = req.params;
    try {
      const user = User.findById(user_id);
      const products = user.products;
      console.log(products);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
};

module.exports = userController;
