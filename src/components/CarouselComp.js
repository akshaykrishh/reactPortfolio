import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require("react-responsive-carousel").Carousel;

function CarouselComp(props) {
  return (
    <div>
      <Carousel
        axis={props.move}
        autoPlay={props.auto}
        infiniteLoop={props.loop}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        transitionTime={props.transitionTime}
        interval={props.interval}
        autoFocus={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div>
          {/* <a href=""> */}
          <img
            src={require("../assets/images/work/hound.png").default}
            alt=""
          />
          {/* </a> */}
        </div>
        <div>
          {/* <a href=""> */}
          <img
            src={require("../assets/images/work/conscience.png").default}
            alt=""
          />
          {/* </a> */}
        </div>
        <div>
          {/* <a href=""> */}
          <img src={require("../assets/images/work/muon.png").default} alt="" />
          {/* </a> */}
        </div>
        <div>
          {/* <a href=""> */}
          <img
            src={require("../assets/images/work/sairuthra.png").default}
            alt=""
          />
          {/* </a> */}
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
