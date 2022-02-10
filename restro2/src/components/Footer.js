import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </div>
      <p> &copy; 2022 welcome to indianfood.com</p>
    </div>
  );
}

export default Footer;
