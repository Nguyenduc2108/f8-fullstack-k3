import Navigo from "navigo";
import { Error } from "../Error";

const Router = new Navigo("/f8-fullstack-k3/btvn/btvn_40/btvn40/dist", {
  linksSelector: "a",
});
const app = document.querySelector("#app");

export const router = (pathList = [], DefaultLayout) => {
  pathList.forEach(function ({ path, component }) {
    Router.on(path, (data) => {
      app.innerHTML = DefaultLayout({ body: component(data) });
    });
  });

  Router.notFound(() => {
    document.body.innerHTML = Error();
  });

  Router.resolve();
};
