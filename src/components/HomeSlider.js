import React from "react";
import Slider from "react-slick";

 
class HomeSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="outer-container space-bottom">
        <Slider {...settings} >
          <div>
            <img src="/images/slider/slider1.jpg" alt="slider1" />
          </div>
          <div>
            <img src="/images/slider/slider2.jpg" alt="slider2" />
          </div>
          <div>
            <img src="/images/slider/slider3.jpg" alt="slider3" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default HomeSlider;