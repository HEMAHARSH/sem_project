import React from "react";
import "./Upload.css";
import Header from "./HeaderComponent/Header";
import Upic from "./Assets/Ubgimg.jpeg";
import Upicbg1 from "./Assets/Uploadimgpic.png";
import Footer from "./FooterComponent/Footer";

function Upload() {
  return (
    <>
      <div id="Ubody">
        <Header />
        <div id="uUpload">
          <b>UPLOADS</b>
        </div>
        <hr id="uphr" />
        <div id="Uparatext">
          Upload your files here so that we
          <br />
          can verify and publish them
        </div>
        <a
          href="https://drive.google.com/drive/folders/1diufUyuI4YqwuFxZIhM0A2V0Uk8WFcdw?usp=share_link"
          target="_blank"
        >
          <div
            id="Upicbg"
            style={{
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              overflow: "hidden",
            }}
          >
            <img src={Upic} alt="bg" height={500} width={600} />
          </div>
          <div id="Uuptag">
            <img src={Upicbg1} alt="btn" height={150} />
          </div>
          <div id="Uuptext">
            or drop a file
            <br />
            paste image or URL
          </div>
        </a>
        <div id="Uuptext1">
          Supported File Formats:PDF,IMG,JPRG,JPG,TXT,MP3,MP4,MKV,URL
          <br />
        </div>
        <hr id="idhr" />
      </div>
      <div id="helloooo">
        <Footer />
      </div>
    </>
  );
}

export default Upload;
