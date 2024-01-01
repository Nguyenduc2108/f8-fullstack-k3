import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import routerIndex from "./routers/index.js";
import routerUser from "./routers/user.js";
import bodyParser from "body-parser";
import session from "express-session";
import flash from "connect-flash";

const app = express();

//Khởi tạo session
app.use(
  session({
    secret: "f8",
    name: "f8_session_id",
  })
);

//Khởi tạo connect-flash
app.use(flash());
5;
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//Static file
app.use(express.static("public"));

app.set("view engine", "ejs"); //Thiết lập template engine sử dụng
app.set("views", "./views"); // thiết lập đường dẫn tới folder views
app.use(expressEjsLayouts);
app.set("layout", "layouts/layout"); //Đổi layout mặc định

//Routing
app.use(routerIndex);
app.use("/users", routerUser);

app.use((req, res) => {
  res.status(404).send(`<h1>Page Not Found</h1>`);
});

const port = 8081;
const hostname = "localhost";
app.listen(port, hostname, () => {
  console.log("Chạy với port: " + port);
});
