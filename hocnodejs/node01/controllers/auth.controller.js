import { string, object } from "yup";
import { getError } from "../utils/validate.js";

const authController = {
  //GET
  login: (req, res) => {
    const error = req.flash("error");
    res.render(`auth/login`, {
      layout: "layouts/authLayout",
      error,
      getError,
    });
  },

  //POST
  handleLogin: (req, res) => {
    const error = {};
    // let { email, password } = req.body;
    // if (!email.trim()) {
    //   error.email = "Email không được để trống";
    // }
    // if (!password.trim()) {
    //   error.password = "Password không được để trống";
    // }

    //Các bước khi làm việc với validate
    //B1: Xác định rule
    const schema = object().shape({
      email: string()
        .email("Email không đúng định dạng")
        .required("Email bắt buộc phải nhập"),
      password: string().required("Mật khẩu bắt buộc phải nhập"),
    });

    //B2: Xác định message

    //B3: Kiểm tra (validate)
    try {
      const data = schema.validate(req.body, {
        abortEarly: false,
      });
      console.log(data);
    } catch (e) {
      const errors = Object.fromEntries(
        e.inner.map(({ path, message }) => [path, message])
      );
      console.log(errors);
    }
    req.flash("error", error);

    // req.flash("msg", "Đăng nhập thành công");
    return res.redirect("/dang-nhap");
  },
};

export default authController;
