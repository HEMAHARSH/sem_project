import React from "react";
import "./Home.css";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import backgroundVideo from "./Assets/vedio.mp4";
import Footer from "./FooterComponent/Footer";

import Header from "./HeaderComponent/Header";

export default function Home() {
  return (
    <div id="bodyhome">
      <div className="bg">
        <Header />
        <video src={backgroundVideo} autoPlay loop muted></video>
      </div>
      <div id="context">
        <div className="booktext">
          <h3 className="lineUp">
            "To Happy Times <br></br>and Even Happier Moments"
          </h3>
        </div>
        <div id="gmab">
          <ImageSlider slides={SliderData} />
        </div>{" "}
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <Footer />
    </div>
  );
}
