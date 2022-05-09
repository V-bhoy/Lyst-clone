import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Error from "../pages/Error";
import SignUp from "../pages/sign_up/SignUp";
import Login from "../pages/log_in/Login";
import LoggedIn from "../pages/logged-in/LoggedIn";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Products from "../pages/Products";
// import Instruction from "../pages/Instruction";
import Shipping from "../pages/Shipping";
import Payment from "../pages/Payment";
import { Helpcenter } from "../pages/Help Center/Helpcenter";
import { ShoppingonLyst } from "../pages/Help Center/ShoppingonLyst";
import { Contact } from "../pages/Help Center/Contact";
import { About_us } from "../pages/Help Center/About_us";
import PaymentSuccess from "../pages/PaymentSuccess";


const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Helpcenter />} />
        <Route path="/ShoppingonLyst" element={<ShoppingonLyst />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/aboutus" element={<About_us />} />
        <Route path="/logged-in" element={<LoggedIn />} />
        <Route path="/products/:id" element={<Products />} />
         <Route path="/information" element={<Instruction />} /> 
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
