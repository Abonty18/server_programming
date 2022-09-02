const express = require('express');

const app = express();
const router= require("./router");
const port =8000;

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views", __dirname + "/views"); 
app.use(router); 
app.listen(port, function () {
  console.log(`Labiba's portfolio  app is listening on port ${port}!`);
});