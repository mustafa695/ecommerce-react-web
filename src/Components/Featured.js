import React from "react";
import feat1 from "../assets/feat1.jpg";
import feat2 from "../assets/feat2.jpg";
import feat3 from "../assets/feat3.jpg";
const Featured = () => {
  return (
    <div className="container mx-auto mt-20 mb-16">
      <div className="border-b-4 border-[#e4e4e4]">
        <h3 className="text-color font-semibold text-2xl mb-2">
          Featured Collection
        </h3>
      </div>
      <div className="flex">
        <div className="basis-2/6 w-2/6 mt-5 mr-4">
          <div className="bg-[#ddd] relative hov">
            <figure>
              <img src={feat1} alt="featured" />
            </figure>
            <div className="absolute left-6 top-6 z-50">
              <h3 className="text-color font-bold text-2xl">
                Bags BagPack
              </h3>
              <small>Start From $150.00</small>
            </div>
            <div className="hoverContent"></div>
            <div className="hoverBtn">
              <button className="font-semibold">View Product</button>
            </div>
          </div>
        </div>

        <div className="basis-2/6 w-2/6 mt-5 mr-4">
          <div className="bg-[#ddd] relative hov">
            <figure>
              <img src={feat2} alt="featured" />
            </figure>
            <div className="absolute left-6 top-6 z-50">
              <h3 className="text-color font-bold text-2xl">
                Glass Collections
              </h3>
              <small>Start From $150.00</small>
            </div>
            <div className="hoverContent"></div>
            <div className="hoverBtn">
              <button className="font-semibold">View Product</button>
            </div>
          </div>
        </div>

        <div className="basis-2/6 w-2/6 mt-5 mr-4">
          <div className="bg-[#ddd] relative hov">
            <figure>
              <img src={feat3} alt="featured" />
            </figure>
            <div className="absolute left-6 top-6 z-50">
              <h3 className="text-color font-bold text-2xl">
                Shoes Collections
              </h3>
              <small>Start From $150.00</small>
            </div>
            <div className="hoverContent"></div>
            <div className="hoverBtn">
              <button className="font-semibold">View Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
