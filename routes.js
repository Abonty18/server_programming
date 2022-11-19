const express = require("express")
const router = express.Router()

const { getindex } = require("./controllers/indexController");
const { getSqueak } = require("./controllers/squeakController");

router.get("/", getindex);
router.post("/", getindex);
router.get("/Squeaks", getSqueak);
router.post("/Squeaks", getSqueak);


module.exports = router;