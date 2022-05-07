import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Shipping from "../pages/Shipping";
import Payment from "../pages/Payment";
const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
