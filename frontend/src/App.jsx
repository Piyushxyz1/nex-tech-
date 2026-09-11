
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/products/ProductsPage";
import ProductDetails from "./pages/productDetails/ProductDetails";
import CartPage from "./pages/cart/cartPage";
import { Import } from "lucide-react";
  import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
      <div>
        <ToastContainer/>
        {/* Common Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* All Products Page */}
          <Route
            path="/products"
            element={<ProductPage />}
          />

          {/* Dynamic Product Details */}
          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route 
           path="/cart"
           element = {<CartPage/>}/>
        </Routes>
      </div>
   
  );
};

export default App
