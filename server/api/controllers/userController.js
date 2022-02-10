const passport = require("passport");
const { Strategy: SteamStrategy } = require("passport-steam");
//jwt
const jwt = require("jsonwebtoken");
//components
const ApiError = require("../../error/ApiError");
const UsersDao = require("../../dao/usersDao");

//setup passport
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
passport.use(
  new SteamStrategy(
    {
      returnURL: `http://localhost:${process.env.PORT}/auth/steam/return`,
      realm: `http://localhost:${process.env.PORT}/`,
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

const generateJwt = (displayName, id) => {
  return jwt.sign({ id, displayName }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

exports.login = async ({ user }, res, next) => {
  //check if user received
  if (!user) {
    return next(ApiError.internal("Steam user does not exist"));
  }
  //check user in db if there's not, create new
  const candidate = await UsersDao.login(user);

  const token = generateJwt(candidate.displayName, candidate.id);

  res.cookie("jwt", token).redirect("http://localhost:3000");
};
