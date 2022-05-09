import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          objectFit: "cover",
          overflow: "hidden",
          marginTop: "80px",
        }}
      >
        <img
          style={{ width: "70%", margin: "auto" }}
          src="https://www.apnashopping.in/assets/img/payment/Empty-Cart.jpg"
          alt=""
        />
      </div>

      <div style={{ textAlign: "center", margin: "20px 0px" }}>
        <Link to={"/"}>
          <Button variant="contained" size="large" >
            CONTINUE SHOPPING
          </Button>
        </Link>
      </div>
    </>
  );
}
