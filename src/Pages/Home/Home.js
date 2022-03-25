import React from "react";
import Banner from "../../Components/Banner";
import Blogs from "../../Components/Blogs";
import Featured from "../../Components/Featured";
import { LogoSection } from "../../Components/LogoSection";
import Products from "../../Components/Products";


const Home = ({ product }) => {
  

  return (
    <div className="mt-16">
      <Banner />
      <Featured />
      <Products product={product} />
      <Blogs />
      <LogoSection />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
