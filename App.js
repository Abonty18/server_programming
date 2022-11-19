

const express = require("express")
const router = require("./routes")

const bodyParser = require("body-parser")

database_url = process.env.DATABASE_URL


const port = 3000
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(router);
app.listen(port, () => {
  console.log(`App is running at https://localhost:${port}`);
});