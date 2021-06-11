// packages
const express = require('express');
const dotenv = require('dotenv');

// routes
const customerRoute = require('./src/router/customerRoute');

// database connection
require('./src/database/mongoose');

// intializing express
const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json({ extended: false }));

// routes
app.use('/api/customer', customerRoute);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
