import Button from "@mui/material/Button";
import React from "react";
import {
  RightInnerBox,
  GiftCard,
  PriceBox,
  TotalBox,
  ProdSummryBox,
  RightBox,
  ProductDiv,
  ProdImgData,
  ProdImg,
  ProdDetails,
  ProdPrice,
} from "./CartItemSummryStyled";

const CartItemSummry = () => {
  const data = [
    {
      image:
        "https://cdna.lystit.com/200/250/tr/photos/tessuti/0dce67c1/fred-perry-Navy-Corduroy-Tennis-Bomber-Jacket-Blue.jpeg",
      title: "Shirt",
      quant: 2,
      price: 2000,
    },
    {
      image:
        "https://cdna.lystit.com/200/250/tr/photos/tessuti/0dce67c1/fred-perry-Navy-Corduroy-Tennis-Bomber-Jacket-Blue.jpeg",
      title: "Shirt",
      quant: 2,
      price: 2000,
    },
    {
      image:
        "https://cdna.lystit.com/200/250/tr/photos/tessuti/0dce67c1/fred-perry-Navy-Corduroy-Tennis-Bomber-Jacket-Blue.jpeg",
      title: "Shirt",
      quant: 2,
      price: 2000,
    },
  ];
  return (
    <RightBox>
      <RightInnerBox>
        <ProdSummryBox>
          {data.map((prod) => {
            return (
              <ProductDiv>
                <ProdImgData>
                  <ProdImg>
                    <img src={prod.image} alt="" />
                  </ProdImg>
                  <ProdDetails>
                    <p>Product Title</p>
                    <p>Quantity :</p>
                  </ProdDetails>
                </ProdImgData>
                <ProdPrice>$Price</ProdPrice>
              </ProductDiv>
            );
          })}
        </ProdSummryBox>
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
