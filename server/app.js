const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("cookie-session");

//middlewares
const ErrorHandler = require("./middlewares/ErrorHandler");
//Modules
const giveawaysRoutes = require("./api/routes/giveaways");
const usersRoutes = require("./api/routes/users");

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

app.use(passport.initialize());
app.use(passport.session());
//Routes
app.use("/giveaways", giveawaysRoutes);
app.use("/auth", usersRoutes);

// Errorhandling middleware (as last)
app.use(ErrorHandler);

app.get("/", (req, res) => {
  res.status(200).json({ message: "working" });
});

module.exports = app;
