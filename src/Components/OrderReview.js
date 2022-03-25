import React from "react";
import { useSelector } from "react-redux";

const OrderReview = () => {
  const cartData = useSelector((state) => state.data);
  return (
    <div className="mt-10">
      <h3 className="border-b-2 pb-2 border-[#ddd] font-bold text-xl tracking-wide">
        Order Review
      </h3>
      <table className="w-full border-collapse border">
        <tr className="bg-[#47BAC1] text-white h-14 tracking-wider">
          <th></th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Sub Total</th>
        </tr>
        <tbody>
          {cartData?.map((item, ind) => {
            return (
              <tr key={ind} className="text-center border-b-4 border-[#ddd]">
                <td className="p-4">
                  <img
                    className="w-24 h-24 mx-auto"
                    src={item?.img}
                    alt="noimage"
                  />
                </td>
                <td className="p-4">{item?.title}</td>
                <td className="p-4">{item?.quant}</td>
                <td className="p-4">${item?.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-around -mx-4 mt-12">
        <div className="p-4">
          <h3 className="mb-4">Shipping Address</h3>
          <ul className="text-xs text-[#797979] leading-5">
            <li>Sn Dalim</li>
            <li>DHA, Phase 7, Karachi</li>
            <li>Pakistan</li>
            <li>415-555-2671</li>
            <li>example78@gmail.com</li>
          </ul>
        </div>
        <div className="p-4">
          <h3 className="mb-4">Shipping Method</h3>
          <ul className="text-xs text-[#797979] leading-5">
            <li>Standard Ground (USPS) -</li>
            <li>$7.50</li>
            <li>Delivered in 8-12 business days.</li>
          </ul>
        </div>
        <div className="p-4">
          <h3 className="mb-4">Payment Method</h3>
          <ul className="text-xs text-[#797979] leading-5">
            <li>Credit Card:</li>
            <li>**** **** **** 2641</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
