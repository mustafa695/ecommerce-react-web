import React from "react";
import CheckoutForm from "../../Components/CheckoutForm";
import { LogoSection } from "../../Components/LogoSection";

const Checkout = () => {
  return (
    <div className="mt-20 container mx-auto ">
      <div className="bg-stone-200">
        <h2 className="text-center py-4 uppercase text-2xl">BILLING & SHIPPING ADDRESS</h2>
      </div>
      <CheckoutForm />
      <LogoSection />
    </div>
  );
};

export default Checkout;
