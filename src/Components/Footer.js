import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const Footer = () => {
  return (
    <div className="border-t-12 border-[#5cbbc1] bg-[#252525]">
      <div className="py-6 container mx-auto">
        <div className="flex flex-wrap -mr-4 -ml-4">
          <div className="p-4 basis-3/4 w-basis-3/4">
            <div className="flex flex-wrap -mr-4 -ml-4">
              <div className="p-4 basis-1/5 w-basis-1/5">
                <h3 className="text-[#5F5F5F] text-sm font-bold tracking-widest mb-4">
                  ACCESSORIES
                </h3>
                <div>
                  <li className="list-none">
                    <a className="text-[#ACACAC] text-xs" href="#">
                      Body Care
                    </a>
                  </li>
                  <li className="list-none">
                    <a className="text-[#ACACAC] text-xs" href="#">
                      Chambray
                    </a>
                  </li>
                  <li className="list-none">
                    <a className="text-[#ACACAC] text-xs" href="#">
                      Floral
                    </a>
                  </li>
                  <li className="list-none">
                    <a className="text-[#ACACAC] text-xs" href="#">
                      Shaving
                    </a>
                  </li>
                  <li className="list-none">
                    <a className="text-[#ACACAC] text-xs" href="#">
                      Toilette
                    </a>
                  </li>
                </div>
              </div>
              <div className="p-4 basis-1/5 w-basis-1/5">
                <h3 className="text-[#5F5F5F] text-sm font-bold tracking-widest mb-4">
                  ACCESSORIES
                </h3>
                <div>
                  <li className="list-none">
                    <a className="text-[#ACACAC] text-xs" href="#">
                      Body Care
                    </a>
                  </li>
                  <li className="list-none">
                    <a className="text-[#ACACAC] text-xs" href="#">
                      Chambray
                    </a>
                  </li>
                  <li className="list-none">
                    <a className="text-[#ACACAC] text-xs" href="#">
                      Floral
                    </a>
                  </li>
                  <li className="list-none">
                    <a className="text-[#ACACAC] text-xs" href="#">
                      Shaving
                    </a>
                  </li>
                  <li className="list-none">
                    <a className="text-[#ACACAC] text-xs" href="#">
                      Toilette
                    </a>
                  </li>
                </div>
              </div>
              <div className="p-4 basis-1/5 w-basis-1/5">
                <h3 className="text-[#5F5F5F] text-sm font-bold tracking-widest mb-4">
                  BRANDS
                </h3>
                <div>
                  <li className="list-none">
                    <a className="text-[#ACACAC] text-xs" href="#">
                      Body Care
                    </a>
                  </li>
                  <li className="list-none">
                    <a className="text-[#ACACAC] text-xs" href="#">
                      Chambray
                    </a>
                  </li>
                  <li className="list-none">
                    <a className="text-[#ACACAC] text-xs" href="#">
                      Floral
                    </a>
                  </li>
                  <li className="list-none">
                    <a className="text-[#ACACAC] text-xs" href="#">
                      Shaving
                    </a>
                  </li>
                  <li className="list-none">
                    <a className="text-[#ACACAC] text-xs" href="#">
                      Toilette
                    </a>
                  </li>
                </div>
              </div>
              <div className="p-4 basis-2/5 w-basis-2/5">
                <h3 className="text-[#5F5F5F] text-sm font-bold tracking-widest mb-4">
                  GET IN TOUCH
                </h3>
                <div className="text-[#A5A5A5]">
                  <a href="#" className="text-xs">
                    Call us at (555)-555-5555
                  </a>
                  <br />
                  <a href="#" className="text-xs">
                    support@iamabdus.com
                  </a>
                </div>
                <div className="flex mt-5 text-[#A5A5A5]">
                  <FaFacebookF size={18} className="mr-3 cursor-pointer" />
                  <FaTwitter size={18} className="mr-3 cursor-pointer" />
                  <FaInstagramSquare
                    size={18}
                    className="mr-3 cursor-pointer"
                  />
                  <FaPinterest size={18} className="mr-3 cursor-pointer" />
                  <FaYoutube size={18} />
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 basis-1/4 w-1/4 ">
            <h3 className="text-[#5F5F5F] font-bold text-center">NEWSLETTER</h3>
            <div className="text-[#A5A5A5] text-center">
              <h2 className="text-2xl">SIGN UP NOW</h2>
              <p className="text-sm mt-3">
                Enter your email address and get notified about new products. We
                hate spam!
              </p>
            </div>
            <form action="" className="mt-4 flex w-full mx-auto">
              <input type="text" placeholder="Your email address" className="mr-2 w-4/6 px-4 bg-[#3b3b3b] text-xs text-[#ACACAC]"/>
              <button className="border-4 border-[#47bac1] px-2 py-1">
                <div className="flex items-center">
                  <span className="text-white font-bold">GO </span> <MdChevronRight size={24} color="#47bac1"/>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
