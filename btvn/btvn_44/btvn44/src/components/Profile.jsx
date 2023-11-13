import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import emailjs from "emailjs-com";
import { ToastContainer } from "react-toastify";
import "../assets/style.scss";
import showToast from "../Toastify";
const Profile = ({ handleSetLoading }) => {
  const { user, isLoading } = useAuth0();

  const handleSubmit = (e, name) => {
    e.preventDefault();
    handleSetLoading(false);
    const currentUrl = window.location.href;
    const options = {
      form_name: "Duc Nguyen",
      to_email: e.target.email.value,
      reply: "vanducnguyen2108@gmail.com",
      name: name,
      link: currentUrl,
      message: e.target.message.value,
    };
    const serviceId = "service_86yp6xs";
    const templateId = "template_u3evjas";
    const userId = "xy36M7HzQD5FBDkBz";
    emailjs
      .send(serviceId, templateId, options, userId)
      .then(() => {
        showToast.success("Gửi email thành công!");
      })
      .catch(() => {
        showToast.error("Gửi email thất bại! Hãy thử lại!");
      })
      .finally(() => {
        handleSetLoading(true);
      });
  };
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="profile">
      <div className="images">
        <img src={user.picture} alt={user.name} />
      </div>
      <p>
        Xin chào <b>{user.name}</b>!
      </p>
      <p>Vị trí: {user.locale === "vi" ? "Tiếng Việt" : user.locale}</p>
      <p>
        Email: <a href={"mailto:" + user.email}>{user.email}</a>
      </p>
      <form onSubmit={(e) => handleSubmit(e, user.name)}>
        <div className="input-box">
          <input
            type="text"
            id="email"
            name="email"
            required
            defaultValue={user.email}
            placeholder=" "
          />
          <label htmlFor="email">Email của bạn *</label>
        </div>

        <button>Yêu cầu hỗ trợ</button>
      </form>
    </div>
  );
};

export default Profile;
