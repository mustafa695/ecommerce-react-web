import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeFromCart } from "../store/action/index";
import { useToasts } from "react-toast-notifications";
import { RiHeartLine } from "react-icons/ri";
import { BsCartPlus, BsEyeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";


const Products = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
 
  const cartData = useSelector((state) => state.data);
  const { addToast } = useToasts();
  
  return (
    <div className="container mx-auto" id="product_">
      <div className="border-b-4 border-[#e4e4e4] mb-8">
        <h3 className="text-color font-semibold text-2xl mb-2">
          Featured Products
        </h3>
      </div>
      <div className="main_product flex flex-wrap">
        {product.map((item, ind) => {
          return (
            <div className="basis-3/12 w-3/12 p-4" key={ind}>
              <div className="group product relative overflow-hidden">
                <img className="product_img" src={item?.img} alt="products" />
                <div className="group-hover:opacity-100 absolute top-0 transition ease-in duration-150 left-0 right-0 bottom-0 bg-[#47bac1e6] w-full h-full opacity-0 "></div>
                <div className="group-hover:opacity-100 transition duration-100 ease-linear absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0">
                  <div className="bg-white h-14 flex items-center w-40">
                    <div className="flex w-full justify-around items-center">
                      <div className="icons_product relative cursor-pointer">
                        <RiHeartLine />
                      </div>
                      <div className="icons_product relative cursor-pointer">
                        {cartData?.some((i) => item?.id === i?.id) ? (
                          <MdOutlineRemoveShoppingCart
                            onClick={() => {
                              addToast("Cart removed successfully.", {
                                appearance: "success",
                                autoDismiss: true,
                              });
                              dispatch(removeFromCart(item));
                            }}
                          />
                        ) : (
                          <BsCartPlus
                            onClick={() => {
                              dispatch(addCart(item));
                              addToast("Cart added successfully.", {
                                appearance: "success",
                                autoDismiss: true,
                              });
                            }}
                          />
                        )}
                      </div>
                      <div className="cursor-pointer">
                        <BsEyeFill
                          onClick={() =>
                            navigate(`/single-product/${item?.id}`)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mt-4 mb-2 text-md font-bold text-color">
                  {item?.title}
                </h3>
                <h3 className="text-[#A5A5A5] font-bold text-xl">
                  ${item?.price}.00
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-11 mb-4 flex justify-center">
        <button className="bg-[#47bac1] text-white transition ease-linear py-3 px-8 font-bold hover:bg-transparent hover:border hover:text-[#252525] hover:border-sky-500">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Products;
