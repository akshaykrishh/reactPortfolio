import React, { useEffect } from "react";
import "./About.css";
import Navbar from "../components/Navbar";
// import akshay from "../assets/images/akshay.jpg";

function About() {
  var birthDate = new Date(2000, 2, 25, 0, 0, 0, 0);
  var currentDate = new Date();

  var age = currentDate.getFullYear() - birthDate.getFullYear();

  var month = currentDate.getMonth() - birthDate.getMonth();
  var day = currentDate.getDate() - birthDate.getDate();

  if ((month < 0 || month === 0) && day < 0) {
    age--;
  }

  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  useEffect(() => {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  });

  // window.onload = function () {
  //   var elements = document.getElementsByClassName("txt-rotate");
  //   for (var i = 0; i < elements.length; i++) {
  //     var toRotate = elements[i].getAttribute("data-rotate");
  //     var period = elements[i].getAttribute("data-period");
  //     if (toRotate) {
  //       new TxtRotate(elements[i], JSON.parse(toRotate), period);
  //     }
  //   }
  //   // INJECT CSS
  //   var css = document.createElement("style");
  //   css.type = "text/css";
  //   css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  //   document.body.appendChild(css);
  // };

  return (
    <div className="aboutMainWrapper">
      <Navbar links="1" />
      <div className="container">
        <div className="left">
          <h1>Akshay Krishna</h1>
          <p>
            A {age} year old with a head full of dreams in the process of making
            those dreams into reality.
          </p>
          <br />
          <p>
            Being creative is my way of expressing my thoughts. Always intrigued
            by technology. Love creating thing on the internet. I started
            learning development and designing as a way to create and input my
            own ideas.
          </p>
          <br />
          <p>
            Music is one thing I cannot live without. You can find me listening
            or humming to some song 24/7. I love superheros and movies. I love
            solving Sudoku and Rubiks Cube. I can play the guitar and keyboard.
            Maybe!?
          </p>
        </div>
        <div className="middle">
          {/* <p>Web skills</p>
          <ul>
            <li>HtmL</li>
            <li>CSS</li>
            <li>JS</li>
            <li>REact</li>
            <p>Design</p>
            <ul>
              <li>Adobe</li>
              <li>Photoshop</li>
              <li>Premiere Pro</li>
            </ul>
          </ul> */}
          {/* <img src={akshay} alt="" /> */}
        </div>
        <div className="right">
          <p id="contact-title">
            Need
            <span
              class="txt-rotate"
              style={{ color: "var(--mainRed)" }}
              data-period="1000"
              data-rotate='[ " website?", " app?", " illustrations?", " UI designer?"]'
            ></span>
          </p>
          <p>Get in Touch!</p>

          <button className="btn">
            <a href="0">Message</a>
          </button>
          <p id="misc">Feel free to drop in songs, movies, series, ideas.</p>
          <div className="socials">
            <p>You can also find me on</p>
            <div className="icons">
              <a
                href="https://github.com/akshaykrishh"
                target="_blank"
                rel="noreferrer"
              >
                {/* <ion-icon name="logo-github"></ion-icon> */}
                <img
                  src={require("../assets/icons/github.png").default}
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/in/akshay-krishna-6217b3182/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../assets/icons/linkedin.png").default}
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/akshay.krish/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../assets/icons/instagram.png").default}
                  alt=""
                />
              </a>
              <a
                href="https://open.spotify.com/user/q46vvct94y2sl3hlxhf0rlyvc?si=4c27e3eeb9d341b5"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../assets/icons/spotify.png").default}
                  alt=""
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UC1WSChEkJ61duWYqvEmI-dg"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../assets/icons/youtube.png").default}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
