import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/action";
import { LogoSection } from "../../Components/LogoSection";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const ShoppingCart = () => {
  const cartData = useSelector((state) => state.data);
  const dispatch = useDispatch();
  //cart total sum
  const totalSum = cartData?.reduce((a, b) => +a + +b?.price * +b?.quant, 0);
  return (
    <div className="mt-20">
      <div className="bg-stone-200">
        <h2 className="text-center py-14 uppercase text-2xl">Cart</h2>
      </div>
      <div className="container mx-auto mt-10">
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr className="bg-[#47bac1] text-white uppercase font-bold tracking-widest h-14">
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
                      style={{ border: "1px solid #ddd", padding: "2px 10px" }}
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
        <div className="border-stone-300 px-8 py-8">
          <div className="flex justify-end">
            <h4>Sub Total</h4>
            <h4 className="indent-10">$999</h4>
          </div>
        </div>
      </div>
      <LogoSection />
    </div>
  );
};

export default ShoppingCart;
