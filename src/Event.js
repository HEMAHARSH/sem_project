import React from "react";
import img1 from "./Assets/pastevent.jpg";
import img2 from "./Assets/presentevent.jpg";
import img3 from "./Assets/futureevent.jpg";

import "./Event.css";
import Header from "./HeaderComponent/Header";
import Footer from "./FooterComponent/Footer";

function Event() {
  return (
    <div id="head4">
      <Header />
      <div id="EventHead4">
        <h2>EVENTS</h2>
      </div>
      <hr />
      <h2>PAST EVENTS :</h2>
      <hr />
      <div id="container14">
        <img src={img1} id="img14" alt="" width="300" />
        <p id="Para14">
          <h3>
            <u>Date</u> : 10.12.2022
            <br />
            <br />
            <u>Time</u> : 11:00am - 1:00pm
            <br />
            <br />
            <u>Venue</u> : CC3 / IT-BLOCK / SKCT
          </h3>
        </p>
      </div>
      <hr />
      <h2>PRESENT EVENTS : </h2>
      <hr />
      <div id="container24">
        <img src={img2} id="img24" alt="" width="300" />
        <p id="Para24">
          <h3>
            <u>Date</u> : 10.12.2022
            <br />
            <br />
            <u>Time</u> : 11:00am - 1:00pm
            <br />
            <br />
            <u>Venue</u> : CC3 / IT-BLOCK / SKCT
          </h3>
        </p>
      </div>
      <hr />
      <h2>FUTURE EVENTS : </h2>
      <hr />
      <div id="container34">
        <img src={img3} id="img34" alt="" width="300" />
        <p id="Para34">
          <h3>
            <u>Date</u> : 14.12.2022
            <br />
            <br />
            <u>Time</u> : 10:00am
            <br />
            <br />
            <u>Venue</u> : CC1 / IT-BLOCK / SKCT
          </h3>
        </p>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default Event;
