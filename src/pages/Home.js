import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import akshay from "../assets/images/akshay.jpg";

function Home() {
  return (
    <div className="homeWrapper">
      <Navbar />
      <div className="homeCentreWrapper">
        <div className="profileImg">
          <img alt="Akshay Krishna" src={akshay} />
        </div>
        <div className="shape2"></div>
        <div className="shape3"></div>
        <p>Quote</p>
      </div>
      <div className="qr">
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Home;
