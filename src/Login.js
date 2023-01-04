import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [, showPopup] = useState("hide");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [error, seterror] = useState(false);

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };
  const formHandler = (event) => {
    event.preventDefault();
    if (username.length === 0 && password.length === 0) {
      seterror(true);
    } else if (password.length < 8) {
      seterror(true);
    } else if (username !== password) {
      seterror(true);
      alert("Username and password must be same");
    } else if (username === password) {
      navigate("/home");
    }
  };
  return (
    <div id="lbody">
      <div className="cover">
        <div className="h2">LOGIN</div>
        <form onSubmit={formHandler}>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(d) => setUsername(d.target.value)}
          ></input>
          <br />

          <div id="popupmessage">
            {error && username.length === 0 ? (
              <label style={{ color: "red" }}>Username is required</label>
            ) : (
              ""
            )}
            <br />
            <br />
          </div>

          <input
            type="password"
            value={password}
            placeholder="Enter the password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />

          <div id="popupmsg">
            {error && password.length === 0 ? (
              <label style={{ color: "red" }}>Password is required</label>
            ) : (
              ""
            )}

            {error && password.length > 0 && password.length < 8 ? (
              <label style={{ color: "red" }}>
                Password should contain atleast 8 characters
              </label>
            ) : (
              ""
            )}
            <br />
          </div>

          <button id="llogin-btn" type="submit">
            LOGIN
          </button>
        </form>

        <div className="forgot">
          {" "}
          <Link
            to="/forget"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Forgot Password
          </Link>
        </div>
        <div className="text">Don't have an Account?</div>
        <div className="alt-login">
          <div id="signup" onClick={popup}>
            <Link to="/sign" style={{ textDecoration: "none" }}>
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;

