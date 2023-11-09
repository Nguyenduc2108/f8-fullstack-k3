import { useEffect, useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import getApiKey from "./components/getApiKey";
import { emailRegex } from "./components/matchEmail";
import { ToastContainer } from "react-toastify";
import showToast from "./components/Toastify";

export default function App() {
  const [profile, setProfile] = useState("");

  const getUsernameFromEmail = (email) => {
    const username = email.split("@")[0];
    return username;
  };

  const handleLogin = (email) => {
    if (email && emailRegex(email)) {
      const username = getUsernameFromEmail(email);
      getApiKey(email)
        .then((apiKey) => {
          showToast("success", `Chào mừng ${username} đã quay trở lại`);
          localStorage.setItem("apiKey", apiKey);
          setProfile(apiKey);
        })
        .catch((error) => {
          showToast("warn", "Email không hợp lệ");
          if (localStorage.getItem("apiKey")) {
            localStorage.clear();
            showToast("error", "Có lỗi xảy ra, vui lòng đăng nhập lại");
          }
          setProfile("");
        });
    }
  };

  useEffect(() => {
    const apiKey = localStorage.getItem("apiKey");
    if (apiKey) {
      setProfile(apiKey);
    } else {
      showToast("error", "Vui lòng đăng nhập để tiếp tục");
    }
  }, []);

  return (
    <>
      {profile ? <Home profile={profile} /> : <Login onLogin={handleLogin} />}
      <ToastContainer />
    </>
  );
}
