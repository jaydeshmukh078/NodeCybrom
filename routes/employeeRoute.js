const express = require("express");
const route = express.Router();
const empController = require("../controllers/employeeController");

route.get("/home", empController.HomePage);
route.get("/about", empController.AboutPage);
route.get("/designation", empController.DesignationPage);
route.get("/department", empController.DepartmentPage);
route.get("/salary", empController.SalaryPage);

module.exports = route;