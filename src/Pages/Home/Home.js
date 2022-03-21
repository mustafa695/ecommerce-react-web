import React from "react";
import Banner from "../../Components/Banner";
import Blogs from "../../Components/Blogs";
import Featured from "../../Components/Featured";
import Footer from "../../Components/Footer";
import { LogoSection } from "../../Components/LogoSection";
import Products from "../../Components/Products";

const Home = () => {
  return (
    <div className="mt-16">
      <Banner />
      <Featured />
      <Products />
      <Blogs/>
      <LogoSection/>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
