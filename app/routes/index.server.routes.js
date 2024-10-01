// File name: index.server.routes.js
// Student name: Timothy, KWOK Ting Hei
// Student ID: 301246247
// Date: 29-May-2023

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Hire Timothy K." });
});
router.get("/projects", function (req, res, next) {
  // Get the query parameter from the URL (e.g. ?tab=genprog)
  const activeTab = req.query.tab || "webdev"; // Default to 'webdev' if no tab is specified
  res.render("projects", { title: "Projects", activeTab });
});
module.exports = router;

// router.get("/about", function (req, res, next) {
//   res.render("about", { title: "About" });
// });
// router.get("/contact", function (req, res, next) {
//   res.render("contact", { title: "Contact" });
// });
// router.get("/services", function (req, res, next) {
//   res.render("services", { title: "Services" });
// });
// router.post("/submit", function (req, res, next) {
//   res.redirect("/");
// });
// function sendEmail(event) {
//   event.preventDefault(); // Prevents the form from submitting normally
//   // Redirect to home page
//   window.location.href = "/";
//   // Send email
//   const form = document.querySelector("form");
//   const formData = new FormData(form);
//   const email = "mailto:tkwok15@my.centennialcollege.ca";
//   const subject = encodeURIComponent(formData.get("bSubject"));
//   const body = encodeURIComponent(formData.get("bMessage"));
//   const mailtoLink = `${email}?subject=${subject}&body=${body}`;
//   // Open the email client
//   window.open(mailtoLink);
// }
