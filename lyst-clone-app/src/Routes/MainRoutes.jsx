import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Shipping from "../pages/Shipping";
import Payment from "../pages/Payment";
import Instruction from "../pages/Instruction";
const MainRoutes = () => {
  return (
    <>
        
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/instruction" element={<Instruction/>}/>
      </Routes>
      
    </>
  );
};

export default MainRoutes;
