import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from "./Components/Home";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
// import Dummy from "./Components/Dummy";


function App() {
  // const [cart, setCart] = useState([]);

  
  // const addToCart = product => {
  //   setCart(prevCart => [...prevCart, product]);
  // };

  // const removeFromCart = uniqueId => {
  //   setCart(prevCart => prevCart.filter(item => item.uniqueId !== uniqueId));
  // };
  // const removeFromCart = index => {
  //   setCart(prevCart => prevCart.filter((_, i) => i !== index));
  // };

  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products/>} />
        <Route path="cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;
