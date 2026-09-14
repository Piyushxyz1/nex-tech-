
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/products/ProductsPage";
import ProductDetails from "./pages/productDetails/ProductDetails";
import CartPage from "./pages/cart/CartPage";
import Footer from "./components/footer/Footer"
  import { ToastContainer, toast } from 'react-toastify';
import AccessoriesPage from "./pages/cart/accesoriespage/AccessoriesPage";
import Offers from "./pages/offerspage/Offers";
import Welcome from "./pages/welcomepage/Welcome";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";


const App = () => {

  const [loggedIn,setLoggedIn] = useState(false)
  return (
      <div>
        <ToastContainer/>
        {/* Common Navbar */}
        <Navbar  setLoggedIn={setLoggedIn} loggedIn= {loggedIn}/>

        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={< Welcome />} />


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
          <Route 
           path="/accessories"
           element = {<AccessoriesPage/>}/>
           <Route path="/offers" element = {<Offers/>} />
           <Route path="/login" element = {<Login setLoggedIn= {setLoggedIn} loggedIn = {loggedIn} />  }/>
           <Route path="/signup" element = {<Signup/>} />
        </Routes>
        <Footer/>
      </div>
   
  );
};

export default App
