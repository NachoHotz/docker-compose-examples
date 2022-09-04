const mongoose = require('mongoose');
require('dotenv').config();

const url = 'mongodb://database/notes';

mongoose
  .connect(url)
  .then((db) => {
    console.log(
      `Database connected to ${db.connection.host} in ${process.env.NODE_ENV} mode`,
    );
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });
