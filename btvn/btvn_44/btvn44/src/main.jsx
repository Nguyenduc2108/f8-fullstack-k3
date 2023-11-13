import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/style.scss";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-cj0ffjk7zso7l62i.us.auth0.com"
      clientId="xDOFw5T1Cj18S0Gsxo5BequE8IK1otGq"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
