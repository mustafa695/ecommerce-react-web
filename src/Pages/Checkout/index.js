import React from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "../../Components/CheckoutForm";
import { LogoSection } from "../../Components/LogoSection";

const Checkout = () => {
  const cartData = useSelector((state) => state.data);
  const totalSum = cartData?.reduce((a, b) => +a + +b?.price * +b?.quant, 0);
  return (
    <div className="mt-20">
      <div className="bg-stone-200">
        <h2 className="text-center py-4 uppercase text-2xl">
          BILLING & SHIPPING ADDRESS
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="flex -mx-4">
          <div className="basis-8/12 w-8/12 p-4">
            <CheckoutForm />
          </div>
          <div className="basis-1/3 w-1/3 p-4">
            <div className="border-4 border-slate-100 p-8 mt-8">
              <h3 className="mb-3">Order Summary</h3>
              <p className="text-[#797979] text-sm">
                Excepteur sint occaecat cupidat non proi dent sunt.officia.
              </p>
              <ul className="mt-4">
                <li className="flex justify-between pb-5 text-[#797979] text-sm">
                  <span>Subtotal</span>
                  <span>${totalSum}.00</span>
                </li>
                <li className="flex justify-between pb-5 text-[#797979] text-sm">
                  <span>Shipping & Handling</span>
                  <span>$18.00</span>
                </li>
                <li className="flex justify-between pb-5 text-[#797979] text-sm">
                  <span>Estimated Tax</span>
                  <span>$10.00</span>
                </li>
                <li>
                  <hr />
                  <div className="flex justify-between mt-6 mb-4">
                    <span>Total</span>
                    <span className="font-bold">
                      USD ${totalSum + 18 + 10}.00
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <LogoSection />
      </div>
    </div>
  );
};

export default Checkout;
