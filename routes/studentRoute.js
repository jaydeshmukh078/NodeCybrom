const express = require("express");
const route = express.Router();


route.get("/home",(req,res)=>{
    res.send("This is home page");
});
route.get("/about",(req,res)=>{
    res.send("This is about page");
});
route.get("/subject",(req,res)=>{
    res.send("This is Subject page");
});
route.get("/fees",(req,res)=>{
    res.send("This is Fees page");
});

module.exports = route;