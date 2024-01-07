const userModel = require("../models/user.model");

module.exports = {
  index: async (req, res, next) => {
    let users;
    const { status, keyword } = req.query;
    try {
      users = await userModel.all(status, keyword);
    } catch (e) {
      return next(e);
    }
    res.render("users/index", { users });
  },
};
