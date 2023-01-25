// initializing express app
const express = require('express');
const app = express();

// use 'dotenv' for environment variables
require('dotenv').config();

// use mongodb
require('./db');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});