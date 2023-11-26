/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from "react";
import { client } from "./configs/Client";
import Login from "./components/Login";
import Column from "./components/Column";
import ListColumn from "./components/ListColumn";
import showToast from "./Toastify";
import { ToastContainer } from "react-toastify";

export const RootContext = createContext();

export default function App() {
  const [successLogin, setSuccessLogin] = useState(false);

  const changeSuccessLogin = (boolean) => {
    setSuccessLogin(boolean);
  };

  useEffect(() => {
    if (successLogin) {
      showToast("success", "Đăng nhập thành công!");
      return;
    }

    const checkSuccess = async () => {
      if (localStorage.getItem("apiKey")) {
        client.setApiKey(JSON.parse(localStorage.getItem("apiKey")));
        const { response } = await client.get("/tasks");

        if (response.ok) {
          changeSuccessLogin(true);
        } else {
          showToast("error", "Vui lòng đăng nhập lại");
          localStorage.removeItem("apiKey");
          changeSuccessLogin(false);
        }
      }
    };
    checkSuccess();
  }, [successLogin]);

  const dataContext = {
    changeSuccessLogin: changeSuccessLogin,
  };

  return (
    <RootContext.Provider value={dataContext}>
      <div className="app">{!successLogin && <Login />}</div>
      <Column />
      <ListColumn />
      <ToastContainer />
    </RootContext.Provider>
  );
}
