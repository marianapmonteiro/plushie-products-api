const db = require('./src/models/database');

const express = require('express');

const bcrypt = require('bcrypt');

require('dotenv').config();

const jwt = require('jsonwebtoken');

const cartRoutes = require('./src/routes/cart.routes');
const loginRoutes = require('./src/routes/login.routes');
const productRoutes = require('./src/routes/product.routes');
const userRoutes = require('./src/routes/user.routes');

const app = express();

db();

app.use(express.json());

app.use(userRoutes);
app.use(loginRoutes);
app.use(productRoutes);
app.use(cartRoutes);

app.listen(process.env.PORT || 3000, function () {
  console.log('servidor online');
});
