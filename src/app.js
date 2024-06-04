const express = require("express");
const morgan = require("morgan");
const app = express();


// init middlewares
app.use(morgan("dev"))

// init db

// handling error

module.exports = app;