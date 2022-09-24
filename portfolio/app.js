const express = require('express');
const bodyParser = require("body-parser"); 
const app = express();
const router= require("./router");
const port =8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs"); // Setting EJS as template engine

app.set("views", __dirname + "/views"); // Setting the directory for the view files

app.use(router); // Router Middleware

app.listen(port, function () {
  //starts up the server on a specified port ('3000')
  console.log(`Example app listening on port ${port}!`);
});