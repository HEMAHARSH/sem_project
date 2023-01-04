import React from "react";
import logo from "../Assets/Logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div>
      <div>
        <Link to="/home">
          <img src={logo} alt=" " id="logoimage" />
        </Link>
      </div>
      <div>
        <Link to="/home">
          <div id="home">HOME</div>
        </Link>
        <Link to="/gallery">
          <div id="gallery">GALLERY</div>
        </Link>
        <Link to="/event">
          <div id="events">EVENTS</div>
        </Link>
        <Link to="/upload">
          <div id="uploads">UPLOAD</div>
        </Link>
        <Link to="/support">
          <div id="support">SUPPORT</div>
        </Link>
      </div>
      <div id="accIcon">
        <Link to="/">
          <AccountCircleIcon fontSize="large" id="accIcon" />
        </Link>
      </div>
      <hr></hr>
    </div>
  );
}

export default Header;
