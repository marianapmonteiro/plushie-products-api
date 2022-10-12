const mongoose = require('mongoose');

require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.7zb8wmz.mongodb.net/?retryWrites=true&w=majority`;

const db = () => {
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Conectado ao mongodb Atlas');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = db;
