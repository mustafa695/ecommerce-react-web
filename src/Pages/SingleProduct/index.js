import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BiPlus, BiMinus } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";

const SingleProduct = ({ product }) => {
  const cartData = useSelector((state) => state.data);
  const paramId = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const [indexButton, setindexButton] = useState(0);
  const [sizes, setSizes] = useState([
    { id: 1, size: "XS" },
    { id: 2, size: "S" },
    { id: 3, size: "XL" },
  ]);

  useEffect(() => {
    const productById = product?.filter((i) => i.id == paramId.id);
    setSingleProduct(productById);
  }, [paramId]);

  const changeActive = (ind, id) => {
    setindexButton(ind);
  };
  const totalSum = cartData?.reduce((a, b) => +a + +b?.price * +b?.quant, 0);

  return (
    <div className="mt-24">
      {singleProduct?.map((item, ind) => {
        return (
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4" key={ind}>
              <div className="basis-1/2 w-1/2 p-4">
                <div className="overflow-hidden">
                  <img
                    src={item?.img}
                    alt="noimage"
                    className="hover:scale-125 transition duration-300 w-full object-cover"
                    style={{ height: "600px" }}
                  />
                </div>
              </div>
              <div className="basis-1/2 w-1/2 p-4">
                <h3 className="font-bold text-xl">{item?.title}</h3>
                <div className="review mb-4 mt-5">
                  <span>No Review</span>
                </div>
                <div className="flex mb-2">
                  <p style={{ minWidth: "130px" }}>Vendor:</p>
                  <span> Burberry</span>
                </div>
                <div className="flex mb-2">
                  <p style={{ minWidth: "130px" }}>SKU:</p>
                  <span> W0690034</span>
                </div>
                <div className="flex mb-2">
                  <p style={{ minWidth: "130px" }}>Availability:</p>
                  <span> 10 In stock</span>
                </div>
                <div className="flex mb-2">
                  <p style={{ minWidth: "130px" }}>Product Type:</p>
                  <span>Solutmades</span>
                </div>
                <div className="mt-6">
                  <h4 className="font-bold text-xl mb-4">$286.00</h4>
                  <p className="leading-7 text-sm">
                    Nam tempus turpis at metus scelerisque placerat nulla
                    deumantos solicitud felis. Pellentesque diam dolor,
                    elementum etos lobortis des mollis ut risus. Sedcus faucibus
                    an sullamcorper mattis drostique des commodo pharetras
                    loremos. Donec pretium egestas sapien et mollis. Sample
                    Unordered List Comodous in tempor ullamcorper miaculis.
                    Pellentesque vitae neque mollis urna...
                  </p>
                  <div className="mt-6">
                    <p className="text-[#202020] text-md">
                      <b>Size :</b> XS
                    </p>
                    <div className="flex space-x-3 mt-5">
                      {sizes.map((item, ind) => {
                        return (
                          <button
                            onClick={() => changeActive(ind)}
                            active
                            className={`w-9 flex justify-center items-center h-9 cursor-pointer text-sm font-bold border-2 rounded-full ${
                              indexButton === ind && "border-black"
                            }`}
                          >
                            {item.size}
                          </button>
                        );
                      })}
                    </div>
                    <div className="mt-6">
                      <p className="mb-2 text-[#202020] text-md">Quantity:</p>
                      <div className="flex h-10">
                        <button className="border border-[##cbcbcb] w-9 text-lg">
                          <BiMinus className="mx-auto" />
                        </button>
                        <p className="w-20 leading-10 text-center border border-t-[##cbcbcb] border-b-[##cbcbcb]">
                          9
                        </p>
                        <button className="border border-[##cbcbcb] w-9 text-lg">
                          <BiPlus className="mx-auto" />
                        </button>
                      </div>
                      <p className="mb-8 text-[#202020] text-md mt-4">
                        Subtotal: <b>${totalSum}</b>
                      </p>
                      <button className="uppercase bg-[#000] w-full text-white py-3 font-bold">
                        Add to cart
                      </button>
                      <div className="flex items-center mt-4">
                        <AiFillEye size={26} className="mr-3" />
                        <span>100 customers are viewing this product</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProduct;
