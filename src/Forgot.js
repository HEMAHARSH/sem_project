import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Forgot.css";
const Pass = () => {
  const [, showPopup] = useState("Fhide3");
  const popup = () => {
    showPopup("Fpass-popup3");
    setTimeout(() => showPopup("Fhide3"), 3000);
  };
  const emailpopup = (event) => {
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
        <input type="text" placeholder="EMAIL" />
        <div id="Flink-btn3" onClick={emailpopup}>
          SEND RESET LINK
        </div>
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
