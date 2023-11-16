/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../assets/style.scss";
const LightDark = () => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark((prevDark) => {
      document.body.classList.toggle("dark", !prevDark);
      return !prevDark;
    });
  };

  return (
    <div className="theme-toggle">
      <label>
        <input type="checkbox" checked={dark} onChange={toggleDark} hidden />
        <span className="icon">{dark ? "🌕" : "🌑"}</span>
      </label>
    </div>
  );
};

export default LightDark;
