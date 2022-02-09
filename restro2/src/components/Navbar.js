import React, {useState} from "react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={logo} alt="logo"></img>
        <div className="hiddenLinks">
          <Link to="/">HOME</Link>
          <Link to="/">MENU</Link>
          <Link to="/">CONTACT</Link>
          <Link to="/">ABOUT</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">HOME</Link>
        <Link to="/">MENU</Link>
        <Link to="/">CONTACT</Link>
        <Link to="/">ABOUT</Link>
        <button>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
