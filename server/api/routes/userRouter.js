const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(req.user);
});
router.get(
  "/auth/steam",
  passport.authenticate("steam"),
  function (req, res) {}
);

router.get(
  "/auth/steam/return",
  passport.authenticate("steam", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  }
);

module.exports = router;
