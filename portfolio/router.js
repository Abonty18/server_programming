const express = require("express");
const router = express.Router();

const { getCV } = require("./controllers/CVCont.js");

const fs = require("fs");

router.get("/", getCV);

module.exports = router;