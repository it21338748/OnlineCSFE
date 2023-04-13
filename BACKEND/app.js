const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/product-routes");
const cors = require("cors");
const app = express();

//Middleware

app.use(express.json());
app.use(cors());
app.use("/products", router);

mongoose.connect("mongodb+srv://root:IT21279584@cluster0.46bdkyx.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Connected to the database"))
.then(()=> {
    app.listen(5000)
}).catch((err)=> console.log(err));