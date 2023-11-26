/* eslint-disable no-useless-escape */
import { useState, useContext } from "react";
import { emailRegex } from "../helpers/regex";
import showToast from "../Toastify";
import { client } from "../configs/Client";
import { RootContext } from "../App";
import "../assets/style.scss";

export default function Login() {
  const { changeSuccessLogin } = useContext(RootContext);
  const [valueInput, setValueInput] = useState("");

  const handleChangeInputEmail = (event) => {
    setValueInput(emailRegex(event.target.value));
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valueInput)) {
      const { response, data } = await client.get(
        `/api-key?email=${valueInput}`
      );

      if (response.ok) {
        client.setApiKey(data.data.apiKey);
        localStorage.setItem("apiKey", JSON.stringify(data.data.apiKey));
        changeSuccessLogin(true);
      } else showToast("error", "Email không tồn tại!");
    } else {
      showToast("error", "Email không hợp lệ!");
    }
  };

  return (
    <form className="form-login" onSubmit={handleSubmitForm}>
      <label htmlFor="input-login-email" className="label-login-email">
        Nhập email:
      </label>
      <input
        type="text"
        id="input-login-email"
        className="input-login-email"
        placeholder="Email..."
        value={valueInput}
        onChange={handleChangeInputEmail}
      />
    </form>
  );
}
