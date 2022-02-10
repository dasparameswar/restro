import { Button } from "@mui/material";
import React from "react";
import banner from "../assests/297327124.jpg";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: ` url(${banner})` }}>
      <div className="headerContainer">
        <h1>FOOD CORNER</h1>
        <p>INDIAN FOOD AT A CLICK.</p>
        <Link>
          <Button>
            <Link to="/menu">ORDER NOW</Link>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
