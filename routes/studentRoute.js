const express = require("express");
const route = express.Router();
const stuController = require("../controllers/studentController");

route.get("/home", stuController.HomePage);
route.get("/about", stuController.AboutPage);
route.get("/services", stuController.ServicesPage);
route.get("/course", stuController.CoursePage);
route.get("/fees", stuController.FeesPage);
route.get("/contact", stuController.ContactPage);

module.exports = route;