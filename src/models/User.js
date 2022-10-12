const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  products: [{ type: Object, ref: 'Product' }],
});

module.exports = mongoose.model('User', Schema);
