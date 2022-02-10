const express = require("express");
const passport = require("passport");
const router = express.Router();
//components
const userController = require("../controllers/userController");

router.get("/steam", passport.authenticate("steam"));
router.get("/steam/return", userController.login);

module.exports = router;
