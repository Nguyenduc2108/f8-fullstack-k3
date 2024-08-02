const { Op } = require("sequelize");
const { User } = require("../models/index");

module.exports = {
  index: async (req, res) => {
    const { status, keyword } = req.query;
    const filters = {};
    if (status === "active" || status === "inactive") {
      filters.status = status === "active";
    }
    if (keyword) {
      filters[Op.or] = {
        name: {
          [Op.iLike]: `%${keyword}%`,
        },
        email: {
          [Op.iLike]: `%${keyword}%`,
        },
      };
    }
    const users = await User.findAll({
      order: [
        ["id", "desc"],
        ["name", "asc"],
      ],
      where: {},
      // where: {
      //   // [Op.or]: {
      //   //   status: false,
      //   //   id: {
      //   //     [Op.gte]: 3,
      //   //   },
      //   // },
      //   // status: true,
      //   // [Op.or]: {
      //   //   name: {
      //   //     [Op.iLike]: "%user4",
      //   //   },
      //   //   email: {
      //   //     [Op.iLike]: "%user4%",
      //   //   },
      //   // },
      // },
    });
    // const user = await User.findByPk(1);
    // const user = await User.findOne({
    //   where: { id: 2 },
    // });
    // const users = await User.findAndCountAll();
    // res.json(users);

    res.render("users/index", { users });
  },
  add: (req, res) => {
    res.render("users/add");
  },
  handleAdd: async (req, res) => {
    const body = req.body;
    const user = await User.create({
      name: body.name,
      email: body.email,
      status: body.status === "1" ? true : false,
    });
    console.log(user);
    return res.redirect("/users");
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("Khong tim thay user");
      }
      res.render("users/edit", { user });
    } catch (e) {
      return next(e);
    }
  },
  handleEdit: async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const status = await User.update(
      {
        name: body.name,
        email: body.email,
        status: body.status === "1" ? true : false,
      },
      {
        where: { id },
      }
    );
    console.log(status);
    return res.redirect("/users/edit/" + id);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const status = await User.destroy({
      where: { id },
    });
    console.log(status);
    return res.redirect("/users");
  },
};