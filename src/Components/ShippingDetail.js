import React from "react";

const ShippingDetail = () => {
  return (
    <div className="mt-10">
      <h3 className="border-b-2 pb-2 border-[#ddd] font-bold text-xl tracking-wide">
        Shipping Address
      </h3>
      <form action="">
        <div className="flex flex-wrap -mx-4">
          <div className="basis-2/4 w-2/4 p-4">
            <div>
              <label className="block text-sm mb-2">First Name</label>
              <input
                type="text"
                className="bg-[#f0f0f0] outline-none w-full px-4 py-3"
              />
            </div>
          </div>
          <div className="basis-2/4 w-2/4 p-4">
            <div>
              <label className="block text-sm mb-2">Last Name</label>
              <input
                type="text"
                className="bg-[#f0f0f0] outline-none w-full px-4 py-3"
              />
            </div>
          </div>
          <div className="basis-2/4 w-2/4 p-4">
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="text"
                className="bg-[#f0f0f0] outline-none w-full px-4 py-3"
              />
            </div>
          </div>
          <div className="basis-2/4 w-2/4 p-4">
            <div>
              <label className="block text-sm mb-2">Company</label>
              <input
                type="text"
                className="bg-[#f0f0f0] outline-none w-full px-4 py-3"
              />
            </div>
          </div>
          <div className="basis-2/4 w-2/4 p-4">
            <div>
              <label className="block text-sm mb-2">Adress</label>
              <input
                type="text"
                className="bg-[#f0f0f0] outline-none w-full px-4 py-3"
              />
            </div>
          </div>
          <div className="basis-2/4 w-2/4 p-4">
            <div>
              <label className="block text-sm mb-2">Phone</label>
              <input
                type="text"
                className="bg-[#f0f0f0] outline-none w-full px-4 py-3"
              />
            </div>
          </div>
          <div className="basis-2/4 w-2/4 p-4">
            <div>
              <label className="block text-sm mb-2">City</label>
              <input
                type="text"
                className="bg-[#f0f0f0] outline-none w-full px-4 py-3"
              />
            </div>
          </div>
          <div className="basis-2/4 w-2/4 p-4">
            <div>
              <label className="block text-sm mb-2">Zip Code</label>
              <input
                type="text"
                className="bg-[#f0f0f0] outline-none w-full px-4 py-3"
              />
            </div>
          </div>
          <div className="basis-2/4 w-2/4 p-4">
            <div>
              <label className="block text-sm mb-2">Country</label>
              <select className="bg-[#f0f0f0] w-full py-3 px-3 outline-none">
                <option>Pakistan</option>
                <option>USA</option>
                <option>India</option>
              </select>
            </div>
          </div>
          <div className="basis-2/4 w-2/4 p-4">
            <div>
              <label className="block text-sm mb-2">Fax</label>
              <input
                type="text"
                className="bg-[#f0f0f0] outline-none w-full px-4 py-3"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingDetail;
