const fs = require("fs");

fs.mkdir("raju", (err)=>{
    if (err) throw err;
    console.log(" new directory created ! ");
});