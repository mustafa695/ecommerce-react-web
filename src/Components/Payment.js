import React from "react";
import visa from "../assets/pay1.jpg";
import amerExp from "../assets/pay2.jpg";
import master from "../assets/pay3.jpg";
const Payment = () => {
  return (
    <div className="mt-10">
      <h3 className="border-b-2 pb-2 border-[#ddd] font-bold text-xl tracking-wide">
        Payment Method
      </h3>
      <div className="mt-3 flex flex-wrap -mx-4">
        <div className="basis-1/2 w-1/2 p-4">
          <h4 className="mb-4">Shipping Address</h4>
          <ul>
            <li className="text-xs text-[#797979] mb-2">Sn Dalim</li>
            <li className="text-xs text-[#797979] mb-2">
              DHA, Phase 7, Karachi
            </li>
            <li className="text-xs text-[#797979] mb-2">415-555-2671</li>
            <li className="text-xs text-[#797979] mb-2">example78@gmail.com</li>
          </ul>
        </div>
        <div className="basis-1/2 w-1/2 p-4">
          <h4 className="mb-4">Shipping Method</h4>
          <ul>
            <li className="text-xs text-[#797979] mb-2">
              Standard Ground (USPS) - $7.50
            </li>
            <li className="text-xs text-[#797979] mb-2">
              Delivered in 8-12 business days.
            </li>
          </ul>
        </div>
      </div>
      <h3 className="mt-4 border-b-2 pb-2 border-[#ddd] font-bold text-xl tracking-wide">
        Billing Information
      </h3>
      <form action="" className="mt-6">
        <div className="mb-2">
          <input type="radio" id="html" name="payment" value="HTML" /> {" "}
          <label htmlFor="html" className="text-lg">
            Pay with Paypal
          </label>
        </div>
        <div>
          <input
            type="radio"
            className="text-lg"
            id="htmls"
            name="payment"
            value="HTML"
          />
            <label htmlFor="htmls">Credit Card</label>
        </div>
        <div className="pl-8 mt-3">
          <p className="text-xs">We accept following credit card</p>
          <div className="mt-4 flex space-x-2">
            <img src={visa} alt="noPayment" />
            <img src={amerExp} alt="noPayment" />
            <img src={master} alt="noPayment" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mt-3">
          <div className="basis-1/2 w-1/2 p-4">
            <label className="block text-xs text-[#454545] mb-1">
              Name on Card
            </label>
            <input
              type="text"
              className="w-full outline-none border border-gray-200 text-sm px-4 py-3"
            />
          </div>
          <div className="basis-1/2 w-1/2 p-4">
            <label className="block text-xs text-[#454545] mb-1">
              Card Number
            </label>
            <input
              type="number"
              className="w-full outline-none border border-gray-200 text-sm px-4 py-3"
            />
          </div>
        </div>
        <div className="flex -mx-4">
          <div className="basis-3/12 w-basis-3/12 p-4">
            <label className="block text-xs text-[#454545] mb-1">
              Expiration Date
            </label>
            <select
              type="text"
              className="text-[#252525] w-full outline-none border border-gray-200 text-sm px-4 py-3 appearance-none"
            >
              <option>Year</option>
              <option>Choose 1</option>
              <option>Choose 2</option>
              <option>Choose 3</option>
            </select>
          </div>
          <div className="basis-3/12 w-basis-3/12 p-4">
            <label className="block text-xs text-transparent mb-1">
              Expiration Date
            </label>
            <select
              type="text"
              className="text-[#252525] w-full outline-none border border-gray-200 text-sm px-4 py-3 appearance-none"
            >
              <option>Month</option>
              <option>January</option>
              <option>Febraury</option>
              <option>March</option>
            </select>
          </div>
          <div className="basis-2/4 w-basis-2/4 p-4">
            <label className="block text-xs text-[#454545] mb-1">CVC/CVV</label>
            <input
              type="number"
              placeholder="1234"
              className="w-full outline-none border border-gray-200 text-sm px-4 py-3"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
