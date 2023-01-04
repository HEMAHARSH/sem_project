import React, { useState } from "react";
import "./Support.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import { Circle } from "@mui/icons-material";
import Header from "./HeaderComponent/Header";

//import Link from '@mui/material/Link'

function Support() {
  const number = (event) => {
    alert(JSON.stringify("Tel no: 143-098789"));
  };
  const number1 = (event) => {
    alert(JSON.stringify("Mob no: +91 7896785401"));
  };
  const [feedback, setfeedback] = useState("");

  const formhandler = (event) => {
    event.preventDefault();
    const loginobj = {
      words: feedback,
    };
    console.log(loginobj);
    //view in browser
    alert(JSON.stringify(loginobj)); // to view in the alert message
  };

  return (
    <div>
      <div id="head">
        <Header />
        <div id="supportHead">
          <b>SUPPORT</b>
        </div>
        <hr />
        <div>
          <div id="comments">TELL US EVERYTHING YOU WANT</div>
          <div id="comments1">
            We do love feedbacks, greeting and even just 'hi'
            <br />
            <form onSubmit={formhandler}>
              <textarea
                rows="15"
                cols="125"
                id="textbox1"
                placeholder="type here..."
                onChange={(d) => setfeedback(d.target.value)}
              ></textarea>
              <button type="submit" id="supportbutton">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div id="comments2">GET IN TOUCH...</div>
        <div id="comments3">
          Here shows how you can reach us!
          <br />
        </div>
        <Circle id="circle" />
        <div id="overlay">
          <CallIcon id="call" fontSize="large" />
          <div id="calltext">IT MEDIA</div>
          <button id="calltel" onClick={number}>
            Telephone
          </button>
          <button id="calltel1" onClick={number1}>
            Mobile
          </button>
        </div>

        <Circle id="circle1" />
        <div id="overlay2">
          <EmailIcon id="email" fontsize="large" />
          <div id="emailus">E-MAIL US</div>
          <a
            href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJNvvxcnDWbhFRLLGWsNGHKCfNncDCxwBDFbTdXGzwQWrWZRZkQVvFbSJrPhWqbFNLjqRRg"
            target="_target"
          >
            <button id="emaillink">itmedia@gmail.com</button>
          </a>
        </div>

        <Circle id="circle2" />
        <div id="overlay3">
          <PlaceIcon id="place" fontSize="large" />
          <div id="location">LOCATE US</div>
          <a
            href="https://www.google.com/maps/place/Sri+Krishna+College+Of+Technology/@10.9271416,76.9218782,15.9z/data=!4m5!3m4!1s0x0:0x23416a992879b7c4!8m2!3d10.9276015!4d76.9257675"
            target="_target"
          >
            <button id="locationaddress">
              IT BLOCK,
              <br />
              Sri Krishna College of Technology,
              <br />
              Kovaipudur,
              <br />
              Coimbatore-641042
            </button>
          </a>
        </div>
        <div>
          <div id="cc">COPYRIGHTS AND CREDITS</div>
          <div id="names">
            1.HEMAHARSHINI.K.J
            <br />
            2.THAMARAI.K
            <br />
            3.ABHISHEK.G
            <br />
            4.ATHIF.M
            <br />
            5.GOWTHAM.S
          </div>
        </div>
        <hr id="hori" />
      </div>
    </div>
  );
}

export default Support;
