//Components
const GiveawaysDao = require("../../dao/giveawaysDao");
const ApiError = require("../../error/ApiError");

exports.getAll = async (req, res, next) => {
  try {
    let giveaways;

    giveaways = await GiveawaysDao.getGiveaways();
    return res.json(giveaways);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }
};

exports.createGiveaway = async (req, res, next) => {};
