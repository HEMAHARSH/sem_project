import React, { useState } from "react";
import "./Sign.css";
import { useNavigate, Link } from "react-router-dom";

const Name = () => {
  const [, showPopup] = useState("Shide2");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [error, seterror] = useState(false);

  const popup = () => {
    showPopup("sign-up-popup2");
    setTimeout(() => showPopup("Shide2"), 3000);
  };
  const formHandler = (event) => {
    event.preventDefault();
    if (username.length === 0 && password.length === 0 && email.length === 0) {
      seterror(true);
    } else if (password.length < 8) {
      seterror(true);
    } else if (username !== password) {
      seterror(true);
      alert("Username and password must be same");
    } else if (username === password) {
      navigate("/");
    }
  };
  return (
    <div id="Sbody">
      <div id="Scover2">
        <div id="Sh12">SIGN UP</div>
        <form id="toto" onSubmit={formHandler}>
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
          </div>

          <input
            type="email"
            value={email}
            placeholder="Enter the Email"
            onChange={(f) => setEmail(f.target.value)}
          ></input>
          <br />
          <div id="popupemail">
            {error && email.length === 0 ? (
              <label style={{ color: "red" }}>Email is required</label>
            ) : (
              ""
            )}
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
            <br />

            {error && password.length > 0 && password.length < 8 ? (
              <label style={{ color: "red" }}>
                Password should contain atleast 8 characters
              </label>
            ) : (
              ""
            )}
            <br />
          </div>
          <button id="Ssign-up-btn2" type="submit">
            SIGN IN
          </button>
        </form>

        <p id="Stext2">Already have an Account?</p>
        <div id="Salt-login2">
          <div id="Slogin2" onClick={popup}>
            <Link to="/" style={{ textDecoration: "none" }}>
              LOG IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Name;
