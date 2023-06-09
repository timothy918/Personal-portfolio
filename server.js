// File name: server.js
// Student name: Timothy, KWOK Ting Hei
// Student ID: 301246247
// Date: 29-May-2023
process.env.NODE_ENV = process.env.NODE_ENV || "development";
var express = require("./config/express");
var app = express();
app.listen(3000);
module.exports = app;

console.log("Server running at http://localhost:3000/");
