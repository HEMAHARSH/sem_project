import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Forgot.css";
const Pass = () => {
  const [email, setEmail] = useState("");
  const [, showPopup] = useState("Fhide3");
  const popup = () => {
    showPopup("Fpass-popup3");
    setTimeout(() => showPopup("Fhide3"), 3000);
  };
  const emailpopup = (event) => {
    event.preventDefault();
    alert(JSON.stringify("Kindly Check the E-mail for password reset link"));
  };

  return (
    <div id="Forgetbody">
      <div id="Fcover3">
        <div id="Fh">PASSWORD RESET</div>
        <div id="Freset3">
          Enter you e-mail address below, and we'll send you an e-mail allowing
          you to reset it.
        </div>
        <form id="toto" onSubmit={emailpopup}>
        <input
            type="email"
            value={email}
            placeholder="Enter the Email"
            onChange={(f) => setEmail(f.target.value)}
          ></input><br/><br/><br/><br/>
          <button id="Flink-btn3" type="submit">
            SEND RESET LINK
          </button><br/><br/><br/>
          </form>
        <div id="Flogin-btn3" onClick={popup}>
          <Link to="/" style={{ textDecoration: "none" }}>
            BACK TO LOGIN PAGE
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Pass;
