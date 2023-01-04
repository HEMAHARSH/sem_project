import React from "react";
import CallIcon from "@mui/icons-material/Call";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
  const mobilefooterpop = (event) => {
    alert(JSON.stringify("Mob no: +91 7896785401"));
  };
  return (
    <>
      <div id="Contacthead">CONTACT US :</div>
      <div id="imagecomfooter">
        <a href="" id="mobifooter" onClick={mobilefooterpop}>
          <CallIcon id="numberfooter" />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJNvvxcnDWbhFRLLGWsNGHKCfNncDCxwBDFbTdXGzwQWrWZRZkQVvFbSJrPhWqbFNLjqRRg"
          target="_blank"
        >
          <SocialIcon network="email" fgColor="white" id="emailfooter" />
        </a>
        <a href="https://www.instagram.com/it_skct" target="_blank">
          <SocialIcon network="instagram" fgColor="white" id="instafooter" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100085505149047"
          target="_blank"
        >
          <SocialIcon network="facebook" fgColor="white" id="facebookfooter" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCOljtrWWktiiAAatVpLlLng"
          target="_blank"
        >
          <SocialIcon
            network="youtube"
            fgColor="white"
            bgColor="#ED1E0E"
            id="youtubefooter"
          />
        </a>
        <a href="https://www.twitter.com/it_skct" target="_blank">
          <SocialIcon network="twitter" fgColor="white" id="twitterfooter" />
        </a>{" "}
      </div>
    </>
  );
}

export default Footer;
