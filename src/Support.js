import React, { useState } from "react";
import "./Support.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import { Circle } from "@mui/icons-material";
import Header from "./HeaderComponent/Header";
import imgqr from './Assets/qrcode.jpg';
import Iframe from "react-iframe";


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
          <div id="location"></div>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4729576129293!2d76.92357881416204!3d10.927601492219042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2sSri%20Krishna%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1672896395822!5m2!1sen!2sin"
            width="330"
            height="170"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            styles={{ position: "absolute", left: "2vh", top: "8vh" }}
          >
          </Iframe>
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
          <div id="qrcodes" >Take a peak!</div>
          <div id="containerqr"><img src={imgqr} alt=" " 
          id="qrcodecss" 
          width="110vh" height="110vh" 
          style={{
            borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
             
          }}></img>
          <div id="overlayqr">
          <div id="textqr"></div>Skct Digest</div>
          </div>
          <div id="scanme">SCAN ME</div>
        </div>
        <hr id="hori" />
      </div>
    </div>
  );
}

export default Support;

          // <button id="locationaddress">
          //   IT BLOCK,
          //   <br />
          //   Sri Krishna College of Technology,
          //   <br />
          //   Kovaipudur,
          //   <br />
          //   Coimbatore-641042
          // </button>