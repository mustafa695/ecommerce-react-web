import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home/Home";
import ShoppingCart from "./Pages/ShoppingCart";

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route index path="/shopping-cart" element={<ShoppingCart />}></Route>
          <Route index path="/checkout" element={<Checkout />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
