import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import img1 from "./Assets/4june22.jpg";
import img2 from "./Assets/img2.JPG";
import img3 from "./Assets/img3.jpeg";
import img4 from "./Assets/img4.jpg";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "./Gallery.css";
import Header from "./HeaderComponent/Header";

function Gallery() {
  const Liked = () => {
    alert("You Liked!!");
  };

  return (
    <div id="Gheading">
      <Header />
      <div id="GGallery">
        <b>GALLERY</b>
      </div>
      <hr />
      <div id="Gaccount1">
        <AccountCircleIcon fontSize="large" id="Gp1" />
      </div>
      <h4>&nbsp;Thamarai_Kumar&nbsp;</h4>
      <Link to="/map">
        <LocationOnIcon fontSize="small" id="GLocation" />
        <h5>&nbsp;Coimbatore&nbsp;</h5>
      </Link>
      <img src={img1} alt=" " id="Gimg1" height={600} width={1170} />
      <div className="hearts1" onClick={Liked}>
        <FavoriteIcon id="Gheart" fontSize="large" />
      </div>
      <ChatBubbleIcon id="Gcomment" font-size="large"></ChatBubbleIcon>
      <Link to={img1} target="_blank">
        <ShareIcon id="Gshare" font-size="large" />
      </Link>
      <div id="Gn">
        <div id="Gl">Like </div>
        <div id="Gc">Comment </div>
        <div id="Gs">Share</div>
      </div>
      <Typography>
        <h1>Thamarai_Kumar</h1>
        <p id="Gcaption1">
          IT FAM🤞❤. Sometimes,the best therapy is being silly with friends✨.
        </p>
      </Typography>
      <div id="Gaccount2">
        <AccountCircleIcon fontSize="large" id="Gp2" />
      </div>
      <h4 id="Gname1">&nbsp;Gm_Abhishek&nbsp;</h4>
      <Link to="/map">
        <LocationOnIcon fontSize="small" id="Glocation1" />
        <h5 id="Gloc1">&nbsp;Coimbatore&nbsp;</h5>
      </Link>
      <img src={img2} alt=" " id="Gimg2" height={600} width={1170} />
      <div className="hearts1" onClick={Liked}>
        <FavoriteIcon id="Gheart1" fontSize="large" />
      </div>
      <ChatBubbleIcon id="Gcomment1" font-size="large"></ChatBubbleIcon>
      <Link to={img2} target="_blank">
        <ShareIcon id="Gshare1" font-size="large" />
      </Link>
      <div id="Gn">
        <div id="Gl1">Like </div>
        <div id="Gc1">Comment </div>
        <div id="Gs1">Share</div>
      </div>
      <Typography>
        <h1 id="Ggm">Gm_Abhishek</h1>
        <p id="Gcaption2">Friends Became Fam✨</p>
      </Typography>
      <div id="Gaccount3">
        <AccountCircleIcon fontSize="large" id="Gp3" />
      </div>
      <h4 id="Gname2">&nbsp;HemaHarshini&nbsp;</h4>
      <Link to="/map">
        <LocationOnIcon fontSize="small" id="Glocation2" />
        <h5 id="Gloc2">&nbsp;Coimbatore&nbsp;</h5>
      </Link>
      <img src={img3} alt=" " id="Gimg3" height={600} width={1170} />
      <div className="hearts1" onClick={Liked}>
        <FavoriteIcon id="Gheart2" fontSize="large" />
      </div>
      <ChatBubbleIcon id="Gcomment2" font-size="large"></ChatBubbleIcon>
      <Link to={img3} target="_blank">
        <ShareIcon id="Gshare2" font-size="large" />
      </Link>
      <div id="Gn">
        <div id="Gl2">Like </div>
        <div id="Gc2">Comment </div>
        <div id="Gs2">Share</div>
      </div>
      <Typography>
        <h1 id="Ghema">HemaHarshini</h1>
        <p id="Gcaption3">Look for the magic in every moment with SKCT😎.</p>
      </Typography>
      <div id="Gaccount4">
        <AccountCircleIcon fontSize="large" id="Gp4" />
      </div>
      <h4 id="Gname3">&nbsp;IT_MediaOfficial&nbsp;</h4>
      <Link to="/map">
        <LocationOnIcon fontSize="small" id="Glocation3" />
        <h5 id="Gloc3">&nbsp;Coimbatore&nbsp;</h5>
      </Link>
      <img src={img4} alt=" " id="Gimg4" height={600} width={1170} />
      <div className="hearts1" onClick={Liked}>
        <FavoriteIcon id="Gheart3" fontSize="large" />
      </div>
      <ChatBubbleIcon id="Gcomment3" font-size="large"></ChatBubbleIcon>
      <Link to={img4} target="_blank">
        <ShareIcon id="Gshare3" font-size="large" />
      </Link>
      <div id="Gn">
        <div id="Gl3">Like </div>
        <div id="Gc3">Comment </div>
        <div id="Gs3">Share</div>
      </div>
      <Typography>
        <h1 id="GIT">IT_MediaOfficial</h1>
        <p id="Gcaption4">IT Department at Industrial Program...🤩</p>
      </Typography>
    </div>
  );
}

export default Gallery;
