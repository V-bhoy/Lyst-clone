import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../pages/Products";
import Shipping from "../pages/Shipping";
import Payment from "../pages/Payment";
const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/products/:id" element={<Products />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
