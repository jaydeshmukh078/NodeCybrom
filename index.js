const express = require("express");
const app = express();

const studentRoute = require("./routes/studentRoute");
app.use("/student",studentRoute);

const employeeRoute = require("./routes/employeeRoute");
app.use("/employee",employeeRoute);

app.listen(3300,()=>{
    console.log("Server is running on 3300");
});