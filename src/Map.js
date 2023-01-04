import React from "react";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";
import imgss from "./Assets/backgroundGrey.jpg";

function Map() {
  return (
    <div
      style={{
        backgroundImage: `url('${imgss}')`,
        backgroundRepeat: "repeat",
        backgroundSize: "fill",
        backgroundPosition: "center",
        backgroundAttachment: "",
        height: "100vh",
      }}
    >
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31329.400977775098!2d76.98474446044922!3d11.025484216120248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1670947782265!5m2!1sen!2sin"
        width="700"
        height="560"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        styles={{ position: "absolute", left: "45vh", top: "0vh" }}
      ></Iframe>
      <br />
      <Link to="/gallery">
        <button
          id="mapbutton"
          style={{
            color: "green",
            justifyContent: "center",
            position: "absolute",
            left: "38vh",
            top: "50vh",
            fontFamily: "papyrus",
            Size: "xx-larger",
          }}
        >
          {" "}
          Back{" "}
        </button>
      </Link>
    </div>
  );
}

export default Map;
