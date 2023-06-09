// File name: index.server.controller.js
// Student name: Timothy, KWOK Ting Hei
// Student ID: 301246247
// Date: 29-May-2023
exports.render = function (req, res) {
  res.render("index", {
    title: "Hello World",
  });
};
