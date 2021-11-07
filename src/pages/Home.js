import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// import akshay from "../assets/images/akshay.jpg";
// import qrcode from "../assets/images/qrcode.png";

function Home() {
  return (
    <div className="homeWrapper">
      <Navbar links="0" />
      <div className="homeCentreWrapper">
        <div className="container">
          <p id="profile-sub">
            developer <span></span> Designer
          </p>
          <h1 id="profile-tagline">
            building experiences with the magic of technology
          </h1>
          <div className="profile-links">
            <Link to="/about">About Me</Link>
            <Link to="/work" id="contact-btn">
              Get in touch
            </Link>
            <Link to="/work">My Works</Link>
          </div>
        </div>
      </div>
      <div className="socials">
        <a
          href="https://github.com/akshaykrishh"
          target="_blank"
          rel="noreferrer"
        >
          {/* <ion-icon name="logo-github"></ion-icon> */}
          <img src={require("../assets/icons/github.png").default} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/akshay-krishna-6217b3182/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={require("../assets/icons/linkedin.png").default} alt="" />
        </a>
        <a
          href="https://www.instagram.com/akshay.krish/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={require("../assets/icons/instagram.png").default} alt="" />
        </a>
        <a
          href="https://open.spotify.com/user/q46vvct94y2sl3hlxhf0rlyvc?si=4c27e3eeb9d341b5"
          target="_blank"
          rel="noreferrer"
        >
          <img src={require("../assets/icons/spotify.png").default} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Home;
