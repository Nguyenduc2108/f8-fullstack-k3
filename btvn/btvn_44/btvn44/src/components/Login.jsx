import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import "../assets/style.scss";

export default function Login() {
  const { loginWithPopup, isLoading, isAuthenticated, logout } = useAuth0();
  const [loading, setLoading] = useState(isLoading);
  const handleSetLoading = (bool) => {
    setLoading(bool);
  };
  if (isLoading || !loading) {
    return <div className="loading">Loading ...</div>;
  }
  return (
    <div className="container">
      <div className="container-login">
        {isAuthenticated ? (
          <>
            <Profile handleSetLoading={handleSetLoading} />
            <button
              className="btn"
              onClick={() =>
                logout({
                  logoutParams: {
                    returnTo: window.location.origin,
                  },
                })
              }
            >
              ĐĂNG XUẤT
            </button>
          </>
        ) : (
          <>
            <h1 className="title">Cảm ơn bạn đã sử dụng dịch vụ của F8</h1>
            <p className="content">
              Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu
              hỏi tại đây!
            </p>
            <button className="btn" onClick={() => loginWithPopup()}>
              ĐĂNG KÝ || ĐĂNG NHẬP
            </button>
          </>
        )}
      </div>
    </div>
  );
}
