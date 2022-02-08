const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("cookie-session");
const SteamStrategy = require("passport-steam").Strategy;
//middlewares
const ErrorHandler = require("./middlewares/ErrorHandler");
//Modules
const giveawaysRoutes = require("./api/routes/giveaways");
const userRoutes = require("./api/routes/userRouter");

const app = express();

app.use(cors());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//session
app.use(
  session({
    secret: "123",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 24 * 1000 },
  })
);
//passport

//passport setup
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

//controllers

passport.use(
  new SteamStrategy(
    {
      returnURL: "http://localhost:5000/auth/steam/return",
      realm: "http://localhost:5000/",
      apiKey: "C18291F23A166F068103FCF95975589B",
    },
    function (identifier, profile, done) {
      process.nextTick(function () {
        profile.identifier = identifier;
        return done(null, profile);
      });
    }
  )
);

app.get(
  "/auth/steam",
  passport.authenticate("steam", {
    failureRedirect: "/",
  })
);

app.get(
  "/auth/steam/return",
  passport.authenticate("steam", { successRedirect: "http://localhost:3000/" }),
  function (req, res) {
    console.log(res);
  }
);

app.use(passport.initialize());
app.use(passport.session());
//Routes
app.use("/giveaways", giveawaysRoutes);

// Errorhandling middleware (as last)
// app.use(ErrorHandler);

app.get("/", (req, res) => {
  res.status(200).json({ message: "working" });
});

module.exports = app;
