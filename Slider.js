import React from "react";
import Slide from "react-slick";

import "./Slider.css";

function Slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <h2> Single Item</h2>
      <Slide {...settings}>
        <div className="card">
          <h3>1</h3>
        </div>
        <div className="card">
          <h3>2</h3>
        </div>
        <div className="card">
          <h3>3</h3>
        </div>
        <div className="card">
          <h3>4</h3>
        </div>
        <div className="card">
          <h3>5</h3>
        </div>
        <div className="card">
          <h3>6</h3>
        </div>
      </Slide>
    </div>
  );
}

export default Slider;
