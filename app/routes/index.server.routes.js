var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});
module.exports = router;
router.post("/submit", function (req, res, next) {
  res.redirect("/");
});
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
