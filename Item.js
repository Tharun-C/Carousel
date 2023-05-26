import React from "react";
import Slider from "react-slick";

const Item = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="main1">
      <h2> Multiple items </h2>
      <Slider {...settings}>
        <div className="box1">
          <h3>1</h3>
        </div>
        <div className="box1">
          <h3>2</h3>
        </div>
        <div className="box1">
          <h3>3</h3>
        </div>
        <div className="box1">
          <h3>4</h3>
        </div>
        <div className="box1">
          <h3>5</h3>
        </div>
        <div className="box1">
          <h3>6</h3>
        </div>
        <div className="box1">
          <h3>7</h3>
        </div>
        <div className="box1">
          <h3>8</h3>
        </div>
        <div className="box1">
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Item;
