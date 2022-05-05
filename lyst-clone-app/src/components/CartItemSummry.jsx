import Button from "@mui/material/Button";
import React from "react";
import {
  RightBox,
  RightInnerBox,
  GiftCard,
  PriceBox,
  TotalBox,
  ProdSummryBox,
} from "./ShippingStyled";

const CartItemSummry = () => {
  return (
    <RightBox>
      <RightInnerBox>
        <ProdSummryBox></ProdSummryBox>
        <GiftCard>
          <input type="text" placeholder="Gift card or discount code" />
          <Button size="large">Apply</Button>
        </GiftCard>
        <PriceBox>
          <div>
            <p>Subtotal</p>
            <p>
              $<span>Price</span>
            </p>
          </div>
          <div>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div>
            <p>Duties & Taxes</p>
            <p>
              $<span>Taxes</span>
            </p>
          </div>
        </PriceBox>
        <TotalBox>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>Total</p>
          <div>
            <p style={{ fontSize: "12px", color: "#717171" }}>USD </p>
            <p style={{ fontSize: "24px", color: "#323232" }}>
              $<span>total</span>
            </p>
          </div>
        </TotalBox>
      </RightInnerBox>
    </RightBox>
  );
};

export default CartItemSummry;
