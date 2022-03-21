import React from 'react'
import Slider from "react-slick";
import ban1 from "../assets/ban1.png";
import ban2 from "../assets/ban2.png";
import ban3 from "../assets/ban3.png";

const Banner = () => {
    const settings = {
        dots: true,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:true,
      };
  return (
    <Slider {...settings}>
    <div className="slide_banner bg-[#f8f4dd]">
      <div className="container flex h-full items-center mx-auto">
        <div className="basis-2/4 w-1/2 text-color z-50">
          <h5 className="mb-5 text-2xl">Limited time offer!</h5>
          <h2 className="text-5xl font-bold tracking-widest mb-6">
            Canvas Sneaker
          </h2>
          <p className="mb-8 mr-8 text-sm">
            Suspendisse sodales vestibulum augue, eget suscipit lectus
            euismod vitae. Aenean viverra purus nec lacinia suscipit. Ut at
            est hendrerit, rhoncus lorem ut, lacinia enim.
          </p>
          <button className="hover:bg-[#47bac1] hover:text-white border-2 transition duration-500 ease-in-out border-[#47bac1] cursor-pointer  px-8 py-3 font-semibold tracking-widest">
            BUY NOW
          </button>
        </div>
        <div className="basis-2/4">
          <img className="ban1_img" src={ban1} alt="noImage" />
        </div>
      </div>
    </div>
    <div className="slide_banner bg-[#f8f4dd]">
      <div className="container mx-auto flex h-full items-center">
        <div className="basis-2/4">
          <img className="mx-auto" src={ban2} alt="noImage" />
        </div>
        <div className="basis-2/4 w-1/2 text-color z-50">
        <h5 className="mb-5 text-2xl">Limited time offer!</h5>
          <h2 className="text-5xl font-bold tracking-widest mb-6">
            Canvas Sneaker
          </h2>
          <p className="mb-8 mr-8 text-sm">
            Suspendisse sodales vestibulum augue, eget suscipit lectus
            euismod vitae. Aenean viverra purus nec lacinia suscipit. Ut at
            est hendrerit, rhoncus lorem ut, lacinia enim.
          </p>
          <button className="hover:bg-[#47bac1] hover:text-white border-2 transition duration-500 ease-in-out border-[#47bac1] cursor-pointer  px-8 py-3 font-semibold tracking-widest">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
    <div className="slide_banner bg-[#f8f4dd]">
      <div className="container mx-auto flex h-full items-center">
        <div className="basis-2/4">
          <img className="mx-auto" src={ban3} alt="noImage" />
        </div>
        <div className="basis-2/4 w-1/2 text-color z-50">
        <h5 className="mb-5 text-2xl">Limited time offer!</h5>
          <h2 className="text-5xl font-bold tracking-widest mb-6">
            Canvas Sneaker
          </h2>
          <p className="mb-8 mr-8 text-sm">
            Suspendisse sodales vestibulum augue, eget suscipit lectus
            euismod vitae. Aenean viverra purus nec lacinia suscipit. Ut at
            est hendrerit, rhoncus lorem ut, lacinia enim.
          </p>
          <button className="hover:bg-[#47bac1] hover:text-white border-2 transition duration-500 ease-in-out border-[#47bac1] cursor-pointer  px-8 py-3 font-semibold tracking-widest">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  </Slider>
  )
}

export default Banner