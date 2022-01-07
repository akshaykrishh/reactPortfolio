import React from "react";
import "./Work.css";
import Navbar from "../components/Navbar";
import CarouselComp from "../components/CarouselComp";

function Work() {
  // var currentYear = new Date().getFullYear();
  return (
    <div className="workMainWrapper">
      <Navbar links="1" />
      <div className="featuredWorksWrapper">
        <div className="left">
          <div className="heading">
            <p id="sub-title">PORTFOLIO</p>
            <h1>Featured Works</h1>
            <p>
              I have got the opportunity to build some cool websites and designs
              for various companies. I have worked on websites, web apps,
              graphic designing, video editing, UI designing, illustrations etc.
              as a freelancer. This section contains all my work I have done
              till now.
            </p>
            <br />
            <p>
              I love creating minimalistic, eye catching designs whether it be
              websites, posters, UI. I like to include few simple animations to
              the websites as it makes the websites more lively. Impressed by my
              work? <a href="0">Get in Touch </a>
            </p>
          </div>

          <div className="tools">
            <p>Tools</p>
            <img
              src={require("../assets/icons/skills/html-5.png").default}
              alt="HTML5"
            />
            <img
              src={require("../assets/icons/skills/css-3.png").default}
              alt="CSS3"
            />
            <img
              src={require("../assets/icons/skills/js.png").default}
              alt="JavaScript"
            />
            <img
              src={require("../assets/icons/skills/react.svg").default}
              alt="React JS"
            />
            <img
              src={require("../assets/icons/skills/python.png").default}
              alt="Python"
            />
            <img
              src={
                require("../assets/icons/skills/adobe-photoshop.png").default
              }
              alt="Adobe Photoshop"
            />
            <img
              src={
                require("../assets/icons/skills/adobe-illustrator.png").default
              }
              alt="Adobe Illustrator"
            />
            <img
              src={require("../assets/icons/skills/xd.png").default}
              alt="Adobe XD"
            />
            <img
              src={require("../assets/icons/skills/premiere.png").default}
              alt="Adobe Premiere Pro"
            />
          </div>
        </div>
        <div className="right">
          <div className="featuredImgs">
            <CarouselComp
              move="vertical"
              auto="True"
              loop="True"
              showIndicators="False"
              transitionTime="2000"
              interval="3000"
            />
          </div>
        </div>
      </div>
      {/* <div className="footer">
        <p>Have a project? Get in touch</p>
        <a href="">Message</a>
      </div> */}
    </div>
  );
}

export default Work;
