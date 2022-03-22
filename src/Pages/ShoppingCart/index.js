import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeFromCart } from "../../store/action";
import { LogoSection } from "../../Components/LogoSection";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const cartData = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //cart total sum
  const totalSum = cartData?.reduce((a, b) => +a + +b?.price * +b?.quant, 0);
  return (
    <div className="mt-20">
      <div className="bg-stone-200">
        <h2 className="text-center py-14 uppercase text-2xl">Cart</h2>
      </div>
      <div className="container mx-auto mt-10">
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border" style={{minWidth:'600px'}}>
            <thead>
              <tr className="bg-[#47bac1] text-white uppercase font-bold tracking-widest h-14">
                <th></th>
                <th></th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th> Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {cartData?.map((item, ind) => {
                return (
                  <tr
                    key={ind}
                    className="border-b-2 border-stone-300 text-center"
                  >
                    <td
                      className="pl-4 cursor-pointer text-xs font-bold text-[#47bac1]"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      X
                    </td>
                    <td className="py-4">
                      <img
                        src={item?.img}
                        alt="noImage"
                        className="w-20 h-20 object-cover mx-auto"
                      />
                    </td>
                    <td>{item?.title}</td>
                    <td className="text-[#888888]">${item?.price}</td>
                    <td>
                      <button
                        disabled={item?.quant <= 1 ? true : false}
                        className="mr-1"
                        onClick={() => dispatch(decrement(item, ind))}
                      >
                        <AiOutlineMinus size={14} className="mt-2" />
                      </button>
                      <span
                        className="text-sm"
                        style={{
                          border: "1px solid #ddd",
                          padding: "2px 10px",
                        }}
                      >
                        {item?.quant <= 1 ? 1 : item?.quant}
                      </span>
                      <button
                        className="ml-1"
                        onClick={() => dispatch(increment(item, ind))}
                      >
                        <AiOutlinePlus size={14} />
                      </button>
                    </td>
                    <td>${item?.price * item?.quant}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="border-4 border-stone-200 px-8 py-8">
          {cartData?.length ? (
            <>
              <div className="flex flex-col justify-end">
                <h4 className="text-right mb-2">
                  Sub Total
                  <span className="w-24 inline-block text-[#888]">
                    ${totalSum}
                  </span>
                </h4>
                <h4 className="text-right mb-2">
                  Tax
                  <span className="w-24 inline-block text-[#888]">$10</span>
                </h4>
                <h4 className="text-right mb-10">
                  Grand Total
                  <span className="w-24 inline-block">${totalSum + 10}</span>
                </h4>
              </div>
              <div className="flex justify-end">
                <button onClick={() => navigate("/checkout")} className="bg-[#47bac1] flex items-center text-white tracking-wider uppercase px-8 py-4 font-bold">
                  Checkout <BsFillArrowRightCircleFill className="ml-2" />
                </button>
              </div>
            </>
          ) : (
            <h3 className="text-center">Your Cart Is Empty</h3>
          )}
        </div>
      </div>
      <LogoSection />
    </div>
  );
};

export default ShoppingCart;
