const express = require("express");
const app = express();
const stuRoute = require("./routes/studentRoute")

app.use("/students",stuRoute);

app.listen(3300,()=>{
    console.log("Server is running on 3300");
});