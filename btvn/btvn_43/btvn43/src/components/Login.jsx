import { Fragment, useEffect, useState } from "react";
import "../assets/style.scss";

export default function Login({ onLogin }) {
  useEffect(() => {
    document.body.style.backgroundImage =
      "linear-gradient(to right ,#DA4453,#89216B)";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="box-email">
            <h3>Email</h3>
            <input
              type="email"
              className="email-input"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
}
