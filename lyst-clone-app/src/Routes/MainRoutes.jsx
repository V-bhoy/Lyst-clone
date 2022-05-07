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

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logged-in" element={<LoggedIn />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
