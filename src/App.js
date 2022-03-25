import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home/Home";
import ShoppingCart from "./Pages/ShoppingCart";
import SingleProduct from "./Pages/SingleProduct";
import product1 from "./assets/prod1.jpg";
import product2 from "./assets/prod2.jpg";
import product3 from "./assets/prod3.jpg";

function App() {

  const product = [
    {
      id: 1,
      title: "Scarf Ring Corner",
      img: product1,
      price: 79.0,
      quant: 1,
    },
    {
      id: 2,
      title: "Nike Sportswear",
      img: product2,
      price: 50.0,
      quant: 1,
    },
    {
      id: 3,
      title: "Dip Dyed Sweater",
      img: product3,
      price: 300.0,
      quant: 1,
    },
    {
      id: 4,
      title: "Dip Dyed Sweater",
      img: product3,
      price: 300.0,
      quant: 1,
    },
    {
      id: 5,
      title: "Dip Dyed Sweater",
      img: product3,
      price: 300.0,
      quant: 1,
    },
    {
      id: 6,
      title: "Dip Dyed Sweater",
      img: product3,
      price: 300.0,
      quant: 1,
    },
    {
      id: 7,
      title: "Dip Dyed Sweater",
      img: product3,
      price: 300.0,
      quant: 1,
    },
    {
      id: 8,
      title: "Dip Dyed Sweater",
      img: product3,
      price: 300.0,
      quant: 1,
    },
  ];

  return (
    <ToastProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home product={product} />}></Route>
          <Route index path="/shopping-cart" element={<ShoppingCart />}></Route>
          <Route index path="/checkout" element={<Checkout />}></Route>
          <Route
            index
            path="/single-product/:id"
            element={<SingleProduct product={product} />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
