import React from "react";
import Slider from "react-slick";
import logo1 from "../assets/log1.png";
import logo2 from "../assets/log2.png";
import logo3 from "../assets/log3.png";
import logo4 from "../assets/log4.png";
export const LogoSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const data = [
    { id: 1, icon: logo1 },
    { id: 2, icon: logo2 },
    { id: 3, icon: logo3 },
    { id: 4, icon: logo4 },
    { id: 5, icon: logo2 },
    { id: 6, icon: logo1 },
    { id: 7, icon: logo4 },
    { id: 8, icon: logo3 },
  ];
  return (
    <div className="bg-[#f0f0f0] mb-2">
      <div className="container mx-auto mt-20">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div key={item.id} className="items-center min-70">
                <img src={item.icon} alt="logo" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
