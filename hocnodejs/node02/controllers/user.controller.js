const userModel = require("../models/user.model");
const { string } = require("yup");
const { array } = require("../utils/db");

module.exports = {
  index: async (req, res, next) => {
    let users;
    const { status, keyword } = req.query;
    try {
      users = await userModel.all(status, keyword);
    } catch (e) {
      return next(e);
    }
    const msg = req.flash("msg");
    res.render("users/index", { users, msg });
  },
  add: (req, res) => {
    res.render("users/add", { req });
  },
  handleAdd: async (req, res) => {
    const body = await req.validate(req.body, {
      name: string().required("Ten bat buoc phai nhap"),
      email: string()
        .required("Email bat buoc phai nhap")
        .email("Email khong dung dinh dang")
        .test("check-email", "Email da ton tai", async (value) => {
          const result = await userModel.existEmail(value);
          // console.log(result);
          return !result.length;
        }),
      status: string().test(
        "check-status",
        "Trang thai khong hop le",
        (value) => {
          //return true ==> passes
          return +value === 0 || +value === 1;
        }
      ),
    });

    if (body) {
      //Goi create
      body.status = +body.status === 1;
      await userModel.create(body);
      req.flash("msg", "Them nguoi dung thanh cong");
      return res.redirect("/users");
    }

    return res.redirect("/users/add");
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    req.session.currentId = id;
    try {
      const user = await userModel.find(id);
      if (!user.length) {
        throw new Error("User khong ton tai");
      }
      user[0].status = user[0].status ? 1 : 0;
      req.old = user[0];
      const msg = req.flash("msg");
      res.render("users/edit", { req, msg });
    } catch (e) {
      return next(e);
    }
  },
  handleEdit: async (req, res, next) => {
    const { id } = req.params;
    if (+id !== req.session.currentId) {
      return next(new Error("Back..."));
    }
    const body = await req.validate(req.body, {
      name: string().required("Ten bat buoc phai nhap"),
      email: string()
        .required("Email bat buoc phai nhap")
        .email("Email khong dung dinh dang")
        .test("check-email", "Email da ton tai", async (value) => {
          const result = await userModel.existEmail(value, id);
          return !result.length;
        }),
      status: string().test(
        "check-status",
        "Trang thai khong hop le",
        (value) => {
          //return true ==> passes
          return +value === 0 || +value === 1;
        }
      ),
    });

    if (body) {
      //Goi create
      body.status = +body.status === 1;
      await userModel.update(body, id);
      req.flash("msg", "Cap nhat nguoi dung thanh cong");
    }

    return res.redirect("/users/edit" + id);
  },
  delete: async (req, res, next) => {
    const { id } = req.params;
    try {
      await userModel.delete(id);
      req.flash("msg", "Xoa nguoi dung thanh cong");
      return res.redirect("/users");
    } catch (e) {
      return next(e);
    }
  },
};
