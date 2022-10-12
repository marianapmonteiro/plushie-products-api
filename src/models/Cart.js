const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Cart", Schema);
