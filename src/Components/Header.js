import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const cartData = useSelector((state) => state.data);
  const navigate = useNavigate();
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setShowDropDown(false);
    }
  };

  const handleClickInside = () => {
    setShowDropDown(!showDropDown);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  //cart total sum
  const totalSum = cartData?.reduce((a, b) => +a + +b?.price * +b?.quant, 0);

  return (
    <div
      className="bg-white shadow-md flex items-center fixed top-0 left-0 right-0 h-20"
      style={{ zIndex: "999999" }}
    >
      <div className="container mx-auto">
        <div className="flex">
          <div>
            <h2 className="text-3xl text-[#252525] font-extrabold">
              BIG<span className="text-[#47bac1] font-normal">STORE</span>
            </h2>
          </div>
          <ul className="flex items-center ml-auto">
            <li className="mr-8">
              <a
                className="uppercase text-[#47bac1] text-sm font-bold tracking-wide"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="mr-8">
              <a
                className="uppercase text-[#252525] text-sm font-bold tracking-wide"
                href="#"
              >
                Shop
              </a>
            </li>
            <li className="mr-8">
              <a
                className="uppercase text-[#252525] text-sm font-bold tracking-wide"
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="mr-8">
              <a
                className="uppercase text-[#252525] text-sm font-bold tracking-wide"
                href="#"
              >
                Service
              </a>
            </li>
            <li className="mr-8">
              <a
                className="uppercase text-[#252525] text-sm font-bold tracking-wide"
                href="#"
              >
                Blog
              </a>
            </li>
            <li className="mr-8">
              <a
                className="uppercase text-[#252525] text-sm font-bold tracking-wide"
                href="#"
              >
                Contact
              </a>
            </li>
            <li className="mr-3 relative">
              <div className="flex items-center">
                <AiFillHeart className="cursor-pointer" size={18} />
                <div
                  className="px-1.5 -mt-3 rounded-sm text-center font-semibold bg-[#47bac1] text-white text-sm"
                  style={{ paddingTop: "1px", paddingBottom: "1px" }}
                >
                  2
                </div>
              </div>
            </li>
            <li
              className="mr-8 relative"
              ref={myRef}
              // onClick={() => setShowDropDown(!showDropDown)}
            >
              <div className="flex items-center" onClick={handleClickInside}>
                <HiShoppingCart className="cursor-pointer" size={20} />
                <div
                  className="px-1.5 -mt-3 rounded-sm text-center font-semibold bg-[#47bac1] text-white text-sm"
                  style={{ paddingTop: "1px", paddingBottom: "1px" }}
                >
                  {cartData?.length}
                </div>
              </div>
              {showDropDown ? (
                <div
                  className="absolute max-h -left-72 w-80"
                  style={{ top: "50px" }}
                >
                  <div className="shadow-sm bg-[#47bac1] text-white px-5 py-3">
                    <h3 className="mb-4">Item(s) in your cart</h3>
                    {cartData?.length ? (
                      cartData?.map((item, ind) => {
                        return (
                          <>
                            <div className="flex mb-4 items-start" key={ind}>
                              <img
                                className="w-14 h-14 object-cover"
                                src={item?.img}
                                alt="cartImage"
                              />
                              <div>
                                <h3 className="ml-3 font-bold tracking-wide uppercase text-sm">
                                  {item?.title}
                                </h3>
                                <h2 className="ml-3 font-bold tracking-widest uppercase text-lg">
                                  {item?.quant} X ${item?.price}
                                </h2>
                              </div>
                            </div>
                            <hr className="mb-4 border-t border-[#0000001a]" />
                          </>
                        );
                      })
                    ) : (
                      <h4 className="py-2 font-bold">Your cart is empty</h4>
                    )}
                    <div className="flex justify-between">
                      <h3 className="text-xl font-bold">Total</h3>
                      <h4 className="text-xl font-bold">${totalSum}</h4>
                    </div>
                    <hr className="mt-4 border-t border-[#0000001a]" />
                    <div className="flex justify-between mt-3">
                      <button
                        onClick={() => {
                          navigate("/shopping-cart");
                          setShowDropDown(false);
                        }}
                        className="uppercase text-sm px-3 py-2 rounded-sm bg-[#f8f8f8] text-color font-bold"
                      >
                        Shopping Cart
                      </button>
                      <button
                        onClick={() => {
                          navigate("/checkout");
                          setShowDropDown(false);
                        }}
                        className="uppercase text-sm px-3 py-2 rounded-sm bg-[#f8f8f8] text-color font-bold"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
