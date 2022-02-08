const express = require("express");
const router = express.Router();
//Controllers
const giveawaysController = require("../controllers/giveawaysController");
// giveaways data route
router.get("/", giveawaysController.getAll);

module.exports = router;
