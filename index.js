const contentDisposition = require("content-disposition");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:5000/test"
)
.then( () => console.log("DBConnection Successfull!"))
.catch( (err) => { 
    console.log(err);    
})


app.listen(5000, () => {
    console.log("Backend server is running! 🙄");
})