const Product = require('../../models/Product');
const User = require('../../models/User');
const db = require('../../models/database');

const ProductController = {
  async createProduct(req, res) {
    const body = req.body;
    try {
      const newProduct = await Product.create(body);
      return res.status(200).send(newProduct);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  async getProducts(req, res) {
    try {
      const products = await Product.find();
      return res.status(200).send(products);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  async createUserProduct(req, res) {
    const { product_id, user_id } = req.params;
    try {
      const user = await User.findById(user_id);

      const product = await Product.findById(product_id);

      user.products.push(product);

      var retorno = await user.save(user);

      return res.status(200).send(retorno);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  async updateProduct(req, res) {
    const { product_id } = req.params;
    try {
      const product = await Product.findByIdAndUpdate(product_id, {
        $set: req.body,
      });
      return res.status(200).send(product);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  async deleteProduct(req, res) {
    const { product_id } = req.params;
    try {
      const product = await Product.findByIdAndDelete(product_id);
      return res.status(200).send(product);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  async getUserProduct(req, res) {
    const { product_id } = req.params;
    try {
      const user = await User.find({ products }).where(_id).equals(product_id);
      // const filteredUser = User.findOne({}) //ver como faz para pegar todos usuarios que tem esse product_id
      console.log('produto users>', user);
      return res.status(200).send(user);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  async getProductById(req, res) {
    const { product_id } = req.params;
    try {
      const product = await Product.findById(product_id);
      return res.status(200).send(product);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
};

module.exports = ProductController;
